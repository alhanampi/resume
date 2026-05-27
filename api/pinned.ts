export const config = { runtime: 'edge' }

const USERNAME = 'alhanampi'

const QUERY = `{
  user(login: "${USERNAME}") {
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

interface RepoNode {
  name: string
  description: string | null
  url: string
  homepageUrl: string | null
  isPrivate: boolean
  repositoryTopics: { nodes: { topic: { name: string } }[] }
}

function toTitle(slug: string) {
  return slug.replace(/[-_]/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
}

export default async function handler(): Promise<Response> {
  const token = process.env.GITHUB_TOKEN
  if (!token) {
    return new Response(JSON.stringify({ error: 'GITHUB_TOKEN not configured' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query: QUERY }),
  })

  if (!res.ok) {
    return new Response(JSON.stringify({ error: 'GitHub API error' }), {
      status: 502,
      headers: { 'Content-Type': 'application/json' },
    })
  }

  const json = (await res.json()) as {
    data?: { user?: { pinnedItems?: { nodes: RepoNode[] } } }
  }
  const nodes = (json.data?.user?.pinnedItems?.nodes ?? []).filter((r) => !r.isPrivate)

  const projects = nodes.map((repo) => ({
    id: repo.name,
    name: toTitle(repo.name),
    description: repo.description ?? '',
    liveUrl: repo.homepageUrl || repo.url,
    githubUrl: repo.url,
    tags: repo.repositoryTopics.nodes.map((n) => n.topic.name),
  }))

  return new Response(JSON.stringify(projects), {
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
