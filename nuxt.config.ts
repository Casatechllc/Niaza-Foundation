// @ts-nocheck
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  // 1. NUXT 4 ENGINE
  compatibilityDate: '2026-03-30',
  
  future: {
    compatibilityVersion: 4,
  },

  // 2. MODULES
  modules: [
    '@vueuse/motion'
  ],

  // 3. GLOBAL CSS
  css: [
    '~/assets/main.css'
  ],

  // 4. VITE 7 & WINDOWS FIXES
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: ['@vueuse/motion', '@vueuse/core', '@vueuse/shared'],
    },
    server: {
      // Fixes the "IPC Connection Closed" on Windows/OneDrive
      fs: {
        strict: false
      },
      watch: {
        usePolling: true,
        interval: 100
      },
      hmr: {
        protocol: 'ws',
        host: 'localhost'
      }
    }
  },

  // 5. TRANSPILATION
  build: {
    transpile: ['@vueuse/motion', '@vueuse/core', '@vueuse/shared']
  },

  // 6. BRAND HEAD
  app: {
    head: {
      title: 'Nianza Foundation | Building Hope in DRC',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Roboto:wght@300;400;700&display=swap' }
      ]
    }
  },

  devtools: { enabled: true }
})