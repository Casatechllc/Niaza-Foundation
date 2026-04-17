<template>
  <header class="relative overflow-hidden bg-white">
    <div class="mx-auto max-w-[1440px] px-6 lg:px-0">
      <div class="grid grid-cols-1 lg:grid-cols-12 lg:items-center">
        
        <div class="relative z-10 py-16 sm:py-24 lg:col-span-7 lg:py-24 lg:pl-12 lg:pr-16 xl:py-48 min-w-0">

          <h1 class="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl xl:text-6xl lg:leading-[1.1]">
            A Call for Partnership: 
            <span class="block text-secondary">Public Financing for Shelter Development</span>
          </h1>

          <p class="mt-6 w-full lg:max-w-[90%] text-lg leading-relaxed text-slate-600 sm:text-xl font-sans">
            Building Hope and Dignity for Every Congolese Without a Home. Join us in creating sustainable, state-backed pathways from homelessness to long-term stability.
          </p>

          <div class="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <button 
              @click="handleDonateClick"
              class="group relative inline-flex items-center justify-center rounded-full bg-tertiary px-8 py-4 text-base font-bold text-white shadow-md transition-all hover:bg-tertiary/80 hover:shadow-lg active:scale-95"
            >
              <span>Partner With Us</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            <NuxtLink 
              to="/about" 
              class="inline-flex items-center justify-center rounded-full border-2 border-primary px-8 py-4 text-base font-bold text-primary transition-all hover:bg-slate-50 active:scale-95"
            >
              Explore Our Model
            </NuxtLink>
          </div>
        </div>

        <div class="relative h-[450px] sm:h-[550px] lg:col-span-5 lg:h-[650px] lg:rounded-l-[80px] lg:shadow-2xl overflow-hidden">
          <div class="absolute -left-12 top-1/4 hidden h-64 w-64 rounded-full bg-tertiary/10 blur-3xl lg:block"></div>
          
          <img 
            src="/images/hero-shelter.png" 
            alt="Community members in the DRC" 
            class="absolute inset-0 h-full w-full object-cover"
          />
        </div>

      </div>
    </div>
  </header>
</template>

<script setup>
import { inject } from 'vue';

// MUST match the string 'openDonateModal' from app.vue
const openDonate = inject('openDonateModal');

const handleDonateClick = () => {
  if (openDonate) {
    openDonate();
  }
};
</script>