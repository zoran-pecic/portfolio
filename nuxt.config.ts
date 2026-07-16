// Evaluated at build time — meta refreshes on each deploy.
// Keep the start year in sync with app/composables/useYearsOfExperience.ts
const yearsOfExperience = new Date().getFullYear() - 2017;

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
      title: 'Zoran Pecic - Team Lead & Full-Stack Engineer',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg' },
        { rel: 'canonical', href: 'https://zoran.pecic.dev' },
      ],
      meta: [
        { name: 'description', content: `Portfolio of Zoran Pecic — Team Lead and Full-Stack Engineer with ${yearsOfExperience}+ years of experience building scalable platforms with Python, Django, Vue.js, and more.` },
        { property: 'og:title', content: 'Zoran Pecic - Team Lead & Full-Stack Engineer' },
        { property: 'og:description', content: `Portfolio of Zoran Pecic — Team Lead and Full-Stack Engineer with ${yearsOfExperience}+ years of experience.` },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://zoran.pecic.dev' },
        { property: 'og:image', content: 'https://zoran.pecic.dev/images/kujzo.webp' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Zoran Pecic - Team Lead & Full-Stack Engineer' },
        { name: 'twitter:description', content: `Portfolio of Zoran Pecic — Team Lead and Full-Stack Engineer with ${yearsOfExperience}+ years of experience.` },
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
