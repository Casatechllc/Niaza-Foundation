<template>
  <div>
    <AppNavbar @open-donate="openDonateModal" />
    <main>
      <NuxtPage @open-donate="openDonateModal"/>
    </main>
    <AppFooter @open-donate="openDonateModal" />

    <DonateModal ref="donateModalRef" />
    <!-- <ClientOnly>
      <CookieBanner />
    </ClientOnly> -->
  </div>
</template>
<script setup>
import '~/assets/main.css'
import DonateModal from '~/components/DonateModal.vue';
import { ref } from 'vue';

// Ref to hold the component instance
const donateModalRef = ref(null);

// Function to call the modal's exposed method
const openDonateModal = () => {
  if (donateModalRef.value) {
    donateModalRef.value.openModal();
  }
};

// Provide the modal function globally for components to use
provide('openDonateModal', openDonateModal);
</script>
<style>
/* This global style is necessary since the Navbar is fixed-top */
body {
  padding-top: var(--spacing-top); /* This value (80px) is defined in main.css */
}

/* Style to prevent scrolling when modal is open */
body.modal-open {
  overflow: hidden;
}
</style>
