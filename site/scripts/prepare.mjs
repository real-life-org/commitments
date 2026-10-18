// Copies the Markdown files from the repository root into the Starlight
// content folder, so the repository stays readable on GitHub and the site is
// built from the same files. English pages land at the root locale, German
// pages (*.de.md) under de/. Links between the files are rewritten to page
// URLs; the first heading becomes the page title.
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { dirname, join, posix } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = fileURLToPath(new URL('../../', import.meta.url))
const OUT = fileURLToPath(new URL('../src/content/docs/', import.meta.url))
const BASE = process.env.SITE_BASE ?? '/commitments'

const SOURCES = ['README.md', 'README.de.md', 'core.md', 'core.de.md']
for (const dir of ['projects', 'seams']) {
  for (const f of readdirSync(join(ROOT, dir))) if (f.endsWith('.md')) SOURCES.push(`${dir}/${f}`)
}

// repository path of a Markdown file → { locale, slug }
function page(repoPath) {
  const de = repoPath.endsWith('.de.md')
  let slug = repoPath.replace(/\.de\.md$/, '').replace(/\.md$/, '')
  if (slug === 'README') slug = ''
  return { locale: de ? 'de' : '', slug }
}
function url({ locale, slug }) {
  const parts = [BASE, locale, slug].filter(Boolean).join('/')
  return `${parts}/`.replace(/\/+/g, '/')
}

// titles first, so link texts that are file names can become page titles
const TITLES = {}
for (const src of SOURCES) {
  const m = readFileSync(join(ROOT, src), 'utf8').match(/^# (.+)\n/m)
  if (m) TITLES[src] = m[1].trim()
}

rmSync(OUT, { recursive: true, force: true })
mkdirSync(OUT, { recursive: true })

for (const src of SOURCES) {
  let text = readFileSync(join(ROOT, src), 'utf8')
  const target = page(src)

  // title from the first heading, removed from the body
  const m = text.match(/^# (.+)\n/m)
  const title = m ? m[1].trim() : target.slug || 'Commitments'
  if (m) text = text.replace(m[0], '')

  // the language line at the top: the site has a language picker
  text = text.replace(/^(English|Deutsch): \[[^\]]+\]\([^)]+\)( · )?/m, '')

  // links to other Markdown files → page URLs; a file name as link text
  // becomes the title of the page it points to
  text = text.replace(/\[([^\]]+)\]\(([^)\s]+?\.md)(#[^)]*)?\)/g, (all, label, href, hash = '') => {
    if (/^[a-z]+:/i.test(href)) return all
    const resolved = posix.normalize(posix.join(posix.dirname(src), href))
    const shown = /\.md$/.test(label) ? (TITLES[resolved] ?? label) : label
    return `[${shown}](${url(page(resolved))}${hash})`
  })
  text = text.replace(/^\s*\n/, '')

  // diagrams: always relative to the copied diagrams folder of the locale
  const depth = (target.locale ? 1 : 0) + (target.slug.includes('/') ? 1 : 0)
  const up = depth ? '../'.repeat(depth) : './'
  text = text.replace(/\]\((?:\.\.\/)*diagrams\//g, `](${up}diagrams/`)

  const file = join(OUT, target.locale, `${target.slug || 'index'}.md`)
  mkdirSync(dirname(file), { recursive: true })
  const fm = `---\ntitle: ${JSON.stringify(title)}\n${target.slug ? '' : 'tableOfContents: true\n'}---\n`
  writeFileSync(file, fm + text.replace(/^\n+/, ''))
}

for (const loc of ['', 'de']) {
  const dest = join(OUT, loc, 'diagrams')
  if (existsSync(join(ROOT, 'diagrams'))) cpSync(join(ROOT, 'diagrams'), dest, { recursive: true })
}
console.log(`prepare: ${SOURCES.length} pages`)
