<template>
  <div class="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased overflow-x-clip">
    <AppNavbar /> 
    
    <main>
      <NuxtPage />
    </main>
    
    <AppFooter />

    <DonateModal />
  </div>
</template>

<script setup>
import '~/assets/main.css'

// This creates a globally accessible reactive variable in Nuxt
const isDonateModalOpen = useState('isDonateModalOpen', () => false);

// We still provide a helper function for convenience
const openDonateModal = () => {
  isDonateModalOpen.value = true;
};

provide('openDonateModal', openDonateModal);
</script>

<style>
/* Since your new Navbar is 'sticky', you likely don't need this padding anymore. 
   Sticky elements don't take up space 'above' the flow like fixed elements do. */
body {
  padding-top: 0; 
}

body.modal-open {
  overflow: hidden;
}
</style>