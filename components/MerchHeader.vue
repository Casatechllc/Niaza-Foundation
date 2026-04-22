<template>
    <div class="bg-primary">
  <div class="max-w-[1600px] mx-auto px-6 lg:px-12 bg-primary">
    <div class="grid grid-cols-1 xl:grid-cols-12 items-center gap-12 xl:gap-0">
      
      <div 
        v-motion-slide-left
        class="xl:col-span-5 z-20 text-center xl:text-left space-y-6"
      >
        <h1 class="text-6xl sm:text-7xl xl:text-8xl font-extrabold tracking-tight text-slate-100 uppercase italic leading-[0.9]">
          Wear Your <span class="text-secondary xl:block drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">Impact</span>
        </h1>
        
        <div class="h-1 w-12 bg-secondary mx-auto xl:mx-0 my-6"></div>
        
        <div class="max-w-md mx-auto xl:mx-0 space-y-4">
          <p class="text-lg sm:text-xl font-bold text-slate-400 leading-snug">
            Every thread tells a story of 
            <span class="underline decoration-secondary/50 underline-offset-4">resilience</span>.
          </p>
          <p class="text-sm sm:text-base text-slate-400 leading-relaxed italic opacity-80">
            100% of profits are funneled directly into our sustainable shelter projects in the DRC.
          </p>
        </div>
      </div>

      <div class="xl:col-span-7 relative">
        <MerchCarousel 
            :products="featuredProducts" 
            activeCategory="Limited Sweatshirts"
            @add-to-cart="handleCartAction" 
            class="w-full xl:-ml-12 relative z-10"
        />
        </div>

    </div>
  </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'; // Import computed
import { products } from '~/data/merch.js';

// Logic to slice the first 4 items
const featuredProducts = computed(() => {
  return products.slice(0, 4);
});

const handleCartAction = (product) => {
  console.log('Adding to cart:', product.name);
};

useHead({
  title: 'Collection | Nianza Foundation'
});
</script>

<style scoped>
/* Prevent any horizontal overflow caused by 3D rotations in the carousel */
main {
  overflow-x: hidden;
}

/* Ensure the impact text pops on mobile */
span.text-amber-500 {
  -webkit-text-stroke: 1px rgba(245, 158, 11, 0.1);
}
</style>