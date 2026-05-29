import puppeteer from 'puppeteer'
import { mkdir } from 'fs/promises'
import { existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

import { projects } from '../src/data/projects.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '../public/previews')

async function main() {
  if (!existsSync(outDir)) {
    await mkdir(outDir, { recursive: true })
  }

  const browser = await puppeteer.launch({ headless: true })

  for (const project of projects) {
    process.stdout.write(`Capturing ${project.name}... `)
    const page = await browser.newPage()
    await page.setViewport({ width: 1280, height: 720 })

    const slug = project.githubUrl.split('/').pop()!

    try {
      await page.goto(project.liveUrl, { waitUntil: 'networkidle2', timeout: 30000 })
      await page.screenshot({
        path: join(outDir, `${slug}.png`),
        clip: { x: 0, y: 0, width: 1280, height: 720 },
      })
      console.log(`✓`)
    } catch (err) {
      console.log(`✗  ${err instanceof Error ? err.message : err}`)
    } finally {
      await page.close()
    }
  }

  await browser.close()
  console.log('\nDone — screenshots saved to public/previews/')
}

main()
