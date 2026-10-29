import fs from 'fs'
import path from 'path'

const CONTENT_DIR = path.join(process.cwd(), 'src/content/blog')
const MANIFEST_PATH = path.join(CONTENT_DIR, 'manifest.json')

let cachedManifest = null

export function getBlogManifest() {
  if (cachedManifest) return cachedManifest
  const raw = fs.readFileSync(MANIFEST_PATH, 'utf-8')
  cachedManifest = JSON.parse(raw)
  return cachedManifest
}

export function getBlogArticleBySlug(slug) {
  const manifest = getBlogManifest()
  const entry = manifest.find(a => a.slug === slug)
  if (!entry) return null
  const contentPath = path.join(CONTENT_DIR, entry.contentFile)
  const html = fs.readFileSync(contentPath, 'utf-8')
  return { ...entry, html }
}

export function getRelatedBlogArticles(category, excludeSlug, limit = 3) {
  const manifest = getBlogManifest()
  return manifest.filter(a => a.category === category && a.slug !== excludeSlug).slice(0, limit)
}
