<template>
  <div 
    v-motion-slide-visible-once-left
    class="group relative flex flex-col rounded-3xl bg-primary border border-white/5 p-4 transition-all hover:border-secondary/30 hover:shadow-2xl select-none touch-pan-y"
  >
    <div class="aspect-square w-full overflow-hidden rounded-2xl bg-[#1c1f26] relative">
      <transition name="fade" mode="out-in">
        <img 
          :key="displayImage"
          :src="displayImage" 
          :alt="product.name" 
          class="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </transition>

      <div class="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
        <span class="text-[10px] font-bold text-secondary uppercase tracking-tighter">
          {{ product.impact }}
        </span>
      </div>
    </div>

    <div class="mt-6 flex flex-col flex-1">
      <div class="flex justify-between items-start mb-2">
        <h3 class="text-lg font-bold text-white group-hover:text-secondary transition-colors">
          {{ product.name }}
        </h3>
        <span class="text-xl font-bold text-white">${{ product.price }}</span>
      </div>

      <div v-if="!isConfiguring" class="flex-1 flex flex-col">
        <div class="flex gap-2">
            <button 
              v-for="(color, index) in product.variants" 
              :key="index"
              @click="selectedImageIndex = index"
              class="h-7 w-7 rounded-full border-2 transition-all hover:scale-110"
              :class="selectedImageIndex === index ? 'border-secondary scale-110' : 'border-transparent'"
              :style="{ backgroundColor: color.hex }"
            />
          </div>
        <p class="text-sm text-slate-500 line-clamp-3 my-6 leading-relaxed">
          {{ product.description }}
        </p>
      </div>

      <div v-else class="flex-1 flex flex-col space-y-4 mb-6 animate-in fade-in slide-in-from-bottom-2">
        <div>
          <span class="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">Color</span>
          <div class="flex gap-2">
            <button 
              v-for="(color, index) in product.colors" 
              :key="index"
              @click="selectedColorIndex = index"
              class="h-7 w-7 rounded-full border-2 transition-all hover:scale-110"
              :class="selectedColorIndex === index ? 'border-secondary scale-110' : 'border-transparent'"
              :style="{ backgroundColor: color.hex }"
            />
          </div>
        </div>

        <div>
          <span class="text-[10px] text-slate-400 uppercase font-black tracking-widest block mb-2">Size</span>
          <div class="flex gap-2">
            <button 
              v-for="size in ['S', 'M', 'L', 'XL', '2XL']" 
              :key="size"
              @click="selectedSize = size"
              class="px-3 py-1 rounded-md text-[10px] font-black border transition-all"
              :class="selectedSize === size ? 'bg-secondary text-black border-secondary' : 'bg-transparent text-white border-white/20'"
            >
              {{ size }}
            </button>
          </div>
        </div>
      </div>

      <button 
        @click="handleButtonClick"
        class="mt-auto w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold transition-all hover:cursor-pointer active:scale-95"
        :class="isConfiguring ? 'bg-white text-black' : 'bg-secondary/80 text-black hover:bg-secondary'"
      >
        <i v-if="isConfiguring" class="fas fa-plus text-xs"></i>
        <i v-else class="fas fa-cog text-xs"></i>
        
        {{ isConfiguring ? `Add ${currentColor.colorName} to Cart` : `Select ${product.name}` }}
      </button>

      <button 
        v-if="isConfiguring" 
        @click="isConfiguring = false"
        class="text-[10px] text-slate-500 hover:text-white mt-3 uppercase tracking-widest font-bold"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
// 1. Import your cart composable
import { useCart } from '~/composables/useCart';

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

// 2. Initialize the cart functions
const { addToCart } = useCart();

// Keep your existing emits if you still want the parent to know
const emit = defineEmits(['add-to-cart']);

// Existing State
const isConfiguring = ref(false);
const selectedColorIndex = ref(0);
const selectedImageIndex = ref(0);
const selectedSize = ref('M');

// Existing Computed values
const currentColor = computed(() => props.product.colors[selectedColorIndex.value]);

const currentImage = computed(() => props.product.variants[selectedImageIndex.value]);

const displayImage = computed(() => {
  return isConfiguring.value ? currentColor.value.image : currentImage.value.image;
});

const handleButtonClick = () => {
  if (!isConfiguring.value) {
    isConfiguring.value = true;
  } else {
    // 3. Construct the item object specifically for the cart
    const itemToBasket = {
      id: props.product.id,
      name: props.product.name,
      price: props.product.price,
      colors: props.product.colors, // Pass all colors so they can be edited in cart
      selectedColor: currentColor.value,
      selectedSize: selectedSize.value,
      mainImage: props.product.mainImage
    };

    // 4. Call the global addToCart function
    addToCart(itemToBasket);

    // Keep your emit for any secondary parent actions (like analytics or toasts)
    emit('add-to-cart', itemToBasket);

    // Reset view
    isConfiguring.value = false;
  }
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>