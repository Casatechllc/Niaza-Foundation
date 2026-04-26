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
      // Allow Netlify to manage the connection without forcing a protocol
      hmr: true, 
      watch: {
        usePolling: true,
      }
    }
  },

  runtimeConfig: {
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    public: {
      stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
      stripeSuccessUrl: process.env.STRIPE_SUCCESS_URL,
      stripeCancelUrl: process.env.STRIPE_CANCEL_URL,
      siteUrl: process.env.NODE_ENV === 'production' 
    ? 'https://your-live-domain.com' 
    : 'https://nianza-foundation.netlify.app',
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