<template>
  <div class="min-h-screen antialiased font-sans overflow-x-hidden bg-primary/5">
    
    <MerchHeader class="py-24 -my-16 3xl:py-0"/>

    <main class="relative z-10 py-16 sm:py-24 space-y-24">
      <div class="max-w-[1600px] mx-auto px-6 lg:px-12">
        
        <section 
          v-for="(items, category) in groupedProducts" 
          :key="category"
          v-motion-slide-visible-once-bottom 
          class="space-y-12 min-h-[400px]"
        >
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-8">
            <div>
              <h2 class="text-amber-500 font-bold uppercase tracking-[0.3em] text-xs mt-20 mb-2">
                Browse Collection
              </h2>
              <h3 class="text-3xl sm:text-4xl font-light tracking-tight text-secondary">
                {{ category }}
              </h3>
            </div>
            <p class="text-slate-500 text-sm italic">
              Showing {{ items.length }} {{ items.length === 1 ? 'item' : 'items' }}
            </p>
          </div>

          <div class="grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div 
              v-for="(item, index) in items" 
              :key="item.id"
              class="h-full"
            >
              <MerchCard 
                :product="item" 
                @add-to-cart="handleCartAction"
                class="h-full hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </section>

      </div>
    </main>

    <footer class="pb-20 px-6 text-center">
      <div class="h-px w-24 bg-white/10 mx-auto mb-8"></div>
      <p class="text-slate-500 text-xs tracking-widest uppercase italic">
        Building Dignity • One Thread at a Time
      </p>
    </footer>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { products } from '~/data/merch.js';

/**
 * Grouping Logic:
 * Reduces the flat products array into an object where keys are categories.
 * Example: { "Apparel": [...], "Accessories": [...] }
 */
const groupedProducts = computed(() => {
  return products.reduce((groups, product) => {
    const category = product.category || 'Other';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(product);
    return groups;
  }, {});
});

const handleCartAction = (product) => {
  console.log('Adding to cart:', product.name);
};

useHead({
  title: 'Shop | Nianza Foundation'
});
</script>

<style scoped>
/* Adds a subtle fade between major category sections */
section {
  scroll-margin-top: 100px;
}
</style>