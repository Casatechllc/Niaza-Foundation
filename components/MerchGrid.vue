<template>
  <div class="bg-white py-16">
    <div v-if="!selectedProduct" class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mb-12" v-motion-slide-visible-once-bottom>
        <h2 class="text-secondary font-black uppercase tracking-[0.3em] text-xs mb-2">The Collection</h2>
        <h3 class="text-4xl font-black text-primary uppercase italic">Official Merch</h3>
      </div>

      <div class="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        <div 
          v-for="product in products" 
          :key="product.id" 
          class="group relative flex flex-col"
          v-motion-pop-visible
        >
          <div class="aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-slate-100 border border-slate-100 relative">
            <img 
              :src="product.mainImage" 
              :alt="product.name" 
              class="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-primary/20 backdrop-blur-[2px]">
              <button 
                @click="selectedProduct = product"
                class="bg-white text-primary font-black uppercase text-xs tracking-widest px-6 py-3 rounded-full shadow-xl hover:bg-secondary hover:text-white transition-colors"
              >
                Select {{ product.category }}
              </button>
            </div>
          </div>

          <div class="mt-6">
            <div class="flex justify-between items-start">
              <h4 class="text-lg font-black text-primary uppercase leading-tight max-w-[70%]">
                {{ product.name }}
              </h4>
              <p class="text-lg font-bold text-secondary">${{ product.price }}</p>
            </div>
            <p class="mt-2 text-sm text-slate-500 italic leading-relaxed">
              {{ product.description }}
            </p>
            <div class="mt-4 flex items-center gap-2">
               <span class="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
               <p class="text-[10px] font-black uppercase tracking-tighter text-amber-600">{{ product.impact }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <transition name="fade-slide" mode="out-in">
      <MerchDetail 
        v-if="selectedProduct" 
        :product="selectedProduct" 
        @close="selectedProduct = null" 
      />
    </transition>
  </div>
</template>

<script setup>
import { products } from '~/data/merch.js';
const selectedProduct = ref(null);
</script>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from { opacity: 0; transform: translateY(30px); }
.fade-slide-leave-to { opacity: 0; transform: translateY(-30px); }
</style>