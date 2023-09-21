// nuxt.config.ts

import { defineNuxtConfig } from 'nuxt/config'

const apolloConfig = {
  apollo: {
    clients: {
      prepr: './apollo/prepr.ts',
    },
  }
}

export default defineNuxtConfig({
  devtools: true,
  // Add Apollo module 
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo', '@pinia/nuxt'],

  // Add Apollo config

  ...apolloConfig,

  // If deploying with Vercel, add config below
  build: {
    transpile: ["tslib"],
  },
  server: {
    port: 3000,
    host: 'localhost'
  }
})
