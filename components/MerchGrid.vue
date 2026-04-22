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
          <div class="aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-slate-100 border border-slate-100 relative group cursor-pointer">
            <img 
                @click="selectedProduct = product"
                :src="product.mainImage" 
                :alt="product.name" 
                class="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
            />

            <div 
                @click="selectedProduct = product"
                class="absolute inset-0 flex items-end justify-center p-8 
                    opacity-100 md:opacity-0 md:group-hover:opacity-100 
                    transition-opacity duration-300 bg-gradient-to-t from-primary/60 via-transparent to-transparent md:bg-primary/20 md:backdrop-blur-[2px]"
            >
                <button 
                class="w-full md:w-auto bg-white text-primary font-black uppercase text-xs tracking-widest px-6 py-4 md:py-3 rounded-2xl md:rounded-full shadow-xl hover:bg-secondary hover:text-white transition-all transform md:translate-y-4 md:group-hover:translate-y-0"
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
    <div ref="detailRef">
        <transition name="fade-slide" mode="out-in">
        <MerchDetail 
            v-if="selectedProduct" 
            :product="selectedProduct" 
            @close="selectedProduct = null" 
        />
        </transition>
    </div>
  </div>
</template>

<script setup>
import { products } from '~/data/merch.js';
import { nextTick, ref, watch, onUnmounted } from 'vue';
const selectedProduct = ref(null);
const detailRef = ref(null); // Create a ref for the container
const gridScrollPos = ref(0);
// Watch for when a product is selected
watch(selectedProduct, async (newVal) => {
  if (newVal) {
    // 1. SAVE the current scroll position before jumping
    gridScrollPos.value = window.pageYOffset;

    await nextTick();
    
    if (detailRef.value) {
      const elementTop = detailRef.value.offsetTop;
      window.scrollTo({
        top: elementTop - 70,
        behavior: 'smooth'
      });
    }

    window.history.pushState({ detailsOpen: true }, '');
    window.addEventListener('popstate', handleBackNavigation);
  } else {
    // 2. SCROLL BACK to the saved position when newVal is null (closed)
    window.scrollTo({
      top: gridScrollPos.value,
      behavior: 'smooth'
    });

    window.removeEventListener('popstate', handleBackNavigation);
  }
});

const handleBackNavigation = () => {
  // When the user hits the back button, close the component
  selectedProduct.value = null;
  // Stop listening
  window.removeEventListener('popstate', handleBackNavigation);
};

// Ensure listener is removed if the whole page is destroyed
onUnmounted(() => {
  window.removeEventListener('popstate', handleBackNavigation);
});
</script>

<style scoped>
.fade-slide-enter-active, .fade-slide-leave-active {
  transition: all 0.4s ease;
}
.fade-slide-enter-from { opacity: 0; transform: translateY(30px); }
.fade-slide-leave-to { opacity: 0; transform: translateY(-30px); }
</style>