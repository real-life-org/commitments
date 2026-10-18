import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

/**
 * The rendered documentation of real-life-org/commitments. The content is
 * the Markdown in the repository root, copied in by scripts/prepare.mjs.
 * English is the root locale, German lives under /de/.
 */
const REPO = 'https://github.com/real-life-org/commitments'

export default defineConfig({
  site: 'https://real-life-org.github.io',
  base: '/commitments',
  trailingSlash: 'ignore',
  integrations: [
    starlight({
      title: { en: 'Commitments instead of money', de: 'Zusagen statt Geld' },
      description: 'The shared picture for communities that promise, confirm and vouch instead of paying.',
      defaultLocale: 'root',
      locales: {
        root: { label: 'English', lang: 'en' },
        de: { label: 'Deutsch', lang: 'de' },
      },
      customCss: ['./src/styles/site.css'],
      head: [
        { tag: 'link', attrs: { rel: 'preconnect', href: 'https://fonts.googleapis.com' } },
        { tag: 'link', attrs: { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:ital,wght@0,400;0,600;1,400&family=IBM+Plex+Serif:wght@600&family=IBM+Plex+Mono&display=swap' } },
      ],
      favicon: '/favicon.svg',
      social: [{ icon: 'github', label: 'GitHub', href: REPO }],
      lastUpdated: false,
      sidebar: [
        { label: 'Overview', translations: { de: 'Überblick' }, link: '/' },
        { label: 'The core', translations: { de: 'Der Kern' }, link: '/core/' },
        {
          label: 'Projects', translations: { de: 'Projekte' },
          items: [
            { label: 'Real Life Trust Protocol', link: '/projects/rltp/' },
            { label: 'Human Money Core', link: '/projects/human-money-core/' },
            { label: 'cosmolocal.credit', link: '/projects/cosmolocal/' },
            { label: 'GeDANKE', link: '/projects/gedanke/' },
          ],
        },
        {
          label: 'Seams', translations: { de: 'Nähte' },
          items: [
            { label: 'Promise', translations: { de: 'Versprechen' }, link: '/seams/promise/' },
            { label: 'Daily life', translations: { de: 'Alltag' }, link: '/seams/daily-life/' },
            { label: 'Balance', translations: { de: 'Ausgleich' }, link: '/seams/balance/' },
          ],
        },
      ],
    }),
  ],
})
