// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  nitro: {
    experimental: {
      wasm: false
    },
    minify: false
  },
  vite: {
    server: {
      hmr: {
        port: 24678
      }
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'FraudGuard - Credit Card Fraud Detection',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Advanced credit card fraud detection and prevention system' }
      ]
    }
  }
})