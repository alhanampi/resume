import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const QUERY = `{
  user(login: "alhanampi") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          homepageUrl
          isPrivate
          repositoryTopics(first: 10) {
            nodes { topic { name } }
          }
        }
      }
    }
  }
}`

function toTitle(slug: string) {
  return slug.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'github-pinned-dev',
        configureServer(server) {
          server.middlewares.use('/api/pinned', async (_req, res) => {
            const token = env.GITHUB_TOKEN
            if (!token) {
              res.writeHead(500, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ error: 'GITHUB_TOKEN not set' }))
              return
            }
            try {
              const ghRes = await fetch('https://api.github.com/graphql', {
                method: 'POST',
                headers: {
                  Authorization: `Bearer ${token}`,
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query: QUERY }),
              })
              const json = (await ghRes.json()) as {
                data?: { user?: { pinnedItems?: { nodes: Array<{
                  name: string
                  description: string | null
                  url: string
                  homepageUrl: string | null
                  isPrivate: boolean
                  repositoryTopics: { nodes: { topic: { name: string } }[] }
                }> } } }
              }
              const nodes = (json.data?.user?.pinnedItems?.nodes ?? []).filter(
                (r) => !r.isPrivate,
              )
              const projects = nodes.map((repo) => ({
                id: repo.name,
                name: toTitle(repo.name),
                description: repo.description ?? '',
                liveUrl: repo.homepageUrl || repo.url,
                githubUrl: repo.url,
                tags: repo.repositoryTopics.nodes.map((n) => n.topic.name),
              }))
              res.writeHead(200, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify(projects))
            } catch {
              res.writeHead(502, { 'Content-Type': 'application/json' })
              res.end(JSON.stringify({ error: 'GitHub API error' }))
            }
          })
        },
      },
    ],
    server: { port: 3000 },
  }
})
