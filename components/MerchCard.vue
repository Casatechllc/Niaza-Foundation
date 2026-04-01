<template>
  <div 
    v-motion-slide-visible-bottom
    class="group relative flex flex-col rounded-3xl bg-primary border border-white/5 p-4 transition-all hover:border-amber-500/30 hover:shadow-2xl select-none touch-pan-y"
  >
    <div class="aspect-square w-full overflow-hidden rounded-2xl bg-[#1c1f26] relative">
      <transition name="fade" mode="out-in">
        <img 
          :key="currentVariant.image"
          :src="currentVariant.image" 
          :alt="product.name" 
          class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </transition>

      <div class="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
        <span class="text-[10px] font-bold text-amber-500 uppercase tracking-tighter">
          {{ product.impact }}
        </span>
      </div>
    </div>

    <div class="mt-6 flex flex-col flex-1">
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-lg font-bold text-white group-hover:text-amber-500 transition-colors">
          {{ product.name }}
        </h3>
        <span class="text-xl font-bold text-white">${{ product.price }}</span>
      </div>

      <div v-if="product.variants.length > 1" class="flex gap-2 mb-4">
        <button 
          v-for="(variant, index) in product.variants" 
          :key="index"
          @click="activeIndex = index"
          :title="variant.colorName"
          class="h-6 w-6 rounded-full border-2 transition-transform hover:scale-110"
          :class="activeIndex === index ? 'border-amber-500 scale-110' : 'border-transparent'"
          :style="{ backgroundColor: variant.hex }"
        >
          <span class="sr-only">{{ variant.colorName }}</span>
        </button>
      </div>

      <p class="text-sm text-slate-500 line-clamp-2 mb-6">
        {{ product.description }}
      </p>

      <button 
        @click="$emit('add-to-cart', { ...product, variant: currentVariant })"
        class="mt-auto w-full flex items-center justify-center gap-2 rounded-xl bg-amber-500 py-3 text-sm font-bold text-black transition-all hover:bg-amber-400 active:scale-95"
      >
        <i class="fas fa-shopping-cart text-xs"></i>
        Add {{ currentVariant.colorName }} to Cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

defineEmits(['add-to-cart']);

// Logic to track which color variant is selected
const activeIndex = ref(0);
const currentVariant = computed(() => props.product.variants[activeIndex.value]);
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>