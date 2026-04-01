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
      title: 'Zoran Pecic - Team Lead & Full-Stack Engineer',
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/images/logo.svg' },
      ],
      meta: [
        { name: 'description', content: 'Portfolio of Zoran Pecic — Team Lead and Full-Stack Engineer with 8+ years of experience building scalable platforms with Python, Django, Vue.js, and more.' },
        { property: 'og:title', content: 'Zoran Pecic - Team Lead & Full-Stack Engineer' },
        { property: 'og:description', content: 'Portfolio of Zoran Pecic — Team Lead and Full-Stack Engineer with 8+ years of experience.' },
        { property: 'og:type', content: 'website' },
      ],
    },
  },
  css: ['~/assets/css/main.css'],
  components: [
    { path: '~/components', prefix: ''},
    { path: '~/components/sections', prefix: ''},
    { path: '~/components/utils', prefix: ''}
  ],
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true }
})
