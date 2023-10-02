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
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/apollo', '@pinia/nuxt', '@nuxt/image', 'nuxt-swiper'],

  // Add Apollo config

  ...apolloConfig,

  // If deploying with Vercel, add config below
  build: {
    transpile: ["tslib", 'nuxt-swiper'],
  },
  server: {
    port: 3000,
    host: 'localhost'
  },
  image: {
    screens: {
      'xs': 320,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      'xxl': 1536,
      '2xl': 1536
    },
    domains: ['https://antonbosscher-anton-bosscher.prepr.io/', 'https://localhost:3000', 'https://master--splendorous-ganache-f70dde.netlify.app/'],
    providers: {
      storyblok: {
        provider: 'prepr',
        dir: '~/assets/images'
      }
    }
  }
})