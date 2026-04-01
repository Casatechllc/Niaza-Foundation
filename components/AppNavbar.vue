<template>
  <header 
    class="sticky top-0 z-50 w-full border-b transition-all duration-300"
    :class="[
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md border-gray-200 shadow-md py-2' 
        : 'bg-white border-transparent py-4'
    ]"
  >
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global Navigation">
      
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5 flex items-center gap-3 transition-opacity hover:opacity-90">
          <img src="/logo.png" alt="Nianza Foundation Logo" class="h-10 w-auto object-contain" />
          <span class="hidden text-xl font-bold tracking-tight text-gray-900 sm:block">Nianza Foundation</span>
        </NuxtLink>
      </div>

      <div class="flex lg:hidden">
        <button 
          type="button" 
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
          aria-expanded="false"
        >
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <ul class="hidden lg:flex lg:gap-x-10">
        <li>
          <NuxtLink 
            to="/" 
            class="relative py-2 text-sm font-semibold transition-colors duration-200"
            active-class="text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
            inactive-class="text-gray-500 hover:text-gray-900"
          >
            Sustainable Housing
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/about" 
            class="relative py-2 text-sm font-semibold transition-colors duration-200"
            active-class="text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
            inactive-class="text-gray-500 hover:text-gray-900"
          >
            Our Mission
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/services" 
            class="relative py-2 text-sm font-semibold transition-colors duration-200"
            active-class="text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
            inactive-class="text-gray-500 hover:text-gray-900"
          >
            Community Services
          </NuxtLink>
        </li>
        <li>
          <NuxtLink 
            to="/merch" 
            class="relative py-2 text-sm font-semibold transition-colors duration-200"
            active-class="text-gray-900 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-primary"
            inactive-class="text-gray-500 hover:text-gray-900"
          >
            Support Shop
          </NuxtLink>
        </li>
      </ul>

      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <button 
          @click="handleDonateClick"
          class="rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-white shadow-sm transition-all duration-200 hover:bg-accent/90 hover:shadow-md active:scale-95"
        >
          Partner With Us
        </button>
      </div>
    </nav>

    <Teleport to="body">
  <div v-if="mobileMenuOpen" class="relative z-[100]" role="dialog" aria-modal="true">
    <div 
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1 }"
      class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm" 
      @click="mobileMenuOpen = false"
    ></div>

    <div 
      v-motion
      :initial="{ x: '100%' }"
      :enter="{ x: 0, transition: { type: 'spring', damping: 25, stiffness: 200 } }"
      class="fixed inset-y-0 right-0 z-[101] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm"
    >
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="-m-1.5 p-1.5" @click="mobileMenuOpen = false">
          <img class="h-10 w-auto" src="/logo.png" alt="Nianza Foundation Logo" />
        </NuxtLink>
        <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
          <span class="sr-only">Close menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="mt-6 flow-root">
        <div class="-my-6 divide-y divide-gray-500/10">
          <ul class="space-y-2 py-6">
            <li><NuxtLink to="/" @click="mobileMenuOpen = false" class="mobile-nav-link">Sustainable Housing</NuxtLink></li>
            <li><NuxtLink to="/about" @click="mobileMenuOpen = false" class="mobile-nav-link">Our Mission</NuxtLink></li>
            <li><NuxtLink to="/services" @click="mobileMenuOpen = false" class="mobile-nav-link">Community Services</NuxtLink></li>
            <li><NuxtLink to="/merch" @click="mobileMenuOpen = false" class="mobile-nav-link">Support Shop</NuxtLink></li>
          </ul>
          <div class="py-6">
            <button @click="handleDonateClick" class="w-full btn-donate">Partner With Us</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</Teleport>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, inject } from 'vue';

const mobileMenuOpen = ref(false);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.scrollY > 10;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});

// MUST match the string 'openDonateModal' from app.vue
const openDonate = inject('openDonateModal');

const handleDonateClick = () => {
  if (openDonate) {
    openDonate();
  }
};
</script>

<style scoped>
@reference "@/assets/main.css";

.mobile-nav-link {
  @apply -mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50;
}

.btn-donate {
  @apply rounded-full bg-accent px-6 py-3 text-center text-base font-bold text-white shadow-lg active:scale-95;
}
</style>