import AOS from 'aos';

// Nuxt will automatically discover this file and register it as a plugin.
export default defineNuxtPlugin((nuxtApp) => {
  // Check if we are in the browser environment before initializing
  if (process.client) {
    nuxtApp.hook('page:finish', () => {
      // Initialize AOS after the page component mounts
      AOS.init({
        // Recommended default settings:
        offset: 100, // offset (in px) from the original trigger point
        delay: 0,    // values from 0 to 3000, with step 50ms
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        once: true,  // whether animation should only happen once - important for performance
        mirror: false, // whether elements should animate out while scrolling past them
      });
    });
  }
});