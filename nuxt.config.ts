// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    output: {
      publicDir: 'dist'  // Ensure output goes to dist/
    }
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
