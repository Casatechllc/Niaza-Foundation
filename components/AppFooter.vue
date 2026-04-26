<template>
  <footer class="w-full bg-primary pt-16 pb-8 text-white border-t border-white/5">
    
    <div class="mx-auto max-w-[1800px] px-6 lg:px-12">
      
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start">
        
        <div class="lg:col-span-5">
          <div class="flex items-center gap-4 mb-6">
            <img src="/logo.png" alt="Nianza Foundation Logo" class="h-12 w-auto" />
            <h4 class="text-2xl font-bold tracking-tight">Nianza Foundation</h4>
          </div>
          <p class="text-slate-400 leading-relaxed max-w-md">
            Building hope and dignity for every Congolese without a home. 
            Providing safe shelter, empowerment, and a sustainable pathway 
            to community reintegration.
          </p>
        </div>

        <div class="flex flex-col items-center lg:col-span-4 lg:items-center">
          <h5 class="text-secondary font-bold uppercase tracking-widest text-sm mb-6">Join Our Mission</h5>
          <button 
            @click="handleDonateClick"
            class="group inline-flex items-center gap-3 rounded-full bg-secondary/90 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-secondary/80 hover:scale-105 active:scale-95"
          >
            <i class="fas fa-hand-holding-heart"></i>
            <span>Donate Now</span>
          </button>
        </div>

        <div class="lg:col-span-3 lg:text-right">
          <h5 class="text-secondary font-bold uppercase tracking-widest text-sm mb-6">Contact Us</h5>
          <ul class="space-y-4 text-slate-400">
            <li class="flex items-center justify-start lg:justify-end gap-3">
              <span>Kinshasa, DRC</span>
              <i class="fas fa-map-marker-alt text-tertiary"></i>
            </li>
            <li class="flex items-center justify-start lg:justify-end gap-3">
              <a href="mailto:info@nianzafoundation.org" class="hover:text-white transition-colors">info@nianzafoundation.org</a>
              <i class="fas fa-envelope text-tertiary"></i>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-16 border-t border-white/10 pt-8">
        <div class="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div class="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p class="text-sm text-slate-500">
              &copy; {{ new Date().getFullYear() }} Nianza Foundation. All Rights Reserved.
            </p>
            <NuxtLink to="/privacy-policy" class="text-xs text-slate-500 uppercase font-bold tracking-widest hover:text-white transition-colors">
              Privacy Policy
            </NuxtLink>
          </div>

          <p class="text-sm text-slate-500">
            Powered by 
            <a href="https://casatechllc.com" target="_blank" rel="noopener noreferrer" class="group font-bold transition-colors hover:text-white">
              <span class="text-tertiary group-hover:text-tertiary/80 transition-colors">Casatech LLC</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </footer>
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

<style scoped>
/* Icon coloring specifically for brand consistency */
.fas {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
</style>