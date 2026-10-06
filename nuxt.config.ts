// Evaluated at build time so the meta description refreshes on each deploy.
// Keep the start year in sync with app/composables/useYearsOfExperience.ts
const yearsOfExperience = new Date().getFullYear() - 2017;
const title = 'Zoran Pecic, Team Lead and Full-Stack Engineer';
const description = `Portfolio of Zoran Pecic, Team Lead and Full-Stack Engineer with ${yearsOfExperience}+ years of experience building platforms with Python, Django, FastAPI and Vue.`;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    output: {
      publicDir: 'dist'  // Ensure output goes to dist/
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title,
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg' },
        { rel: 'canonical', href: 'https://zoran.pecic.dev' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Courier+Prime:wght@400;700&family=Unica+One&display=swap',
        },
      ],
      meta: [
        { name: 'description', content: description },
        { name: 'theme-color', content: '#222222' },
        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://zoran.pecic.dev' },
        { property: 'og:image', content: 'https://zoran.pecic.dev/images/kujzo.webp' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: 'https://zoran.pecic.dev/images/kujzo.webp' },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Zoran Pecic',
            url: 'https://zoran.pecic.dev',
            jobTitle: 'Team Lead & Full-Stack Engineer',
            worksFor: {
              '@type': 'Organization',
              name: 'EnergySage / Schneider Electric Hub',
            },
            sameAs: [
              'https://www.linkedin.com/in/zoran-pecic-131244155/',
              'https://github.com/zoran-pecic',
            ],
            knowsAbout: ['Python', 'Django', 'FastAPI', 'Vue.js', 'Nuxt.js', 'TypeScript', 'PostgreSQL'],
          }),
        },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  components: [
    { path: '~/components', prefix: ''},
    { path: '~/components/sections', prefix: ''},
    { path: '~/components/utils', prefix: ''}
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
