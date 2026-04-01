<template>
  <section 
    class="relative w-full overflow-hidden flex flex-col items-center select-none pointer-events-none"
    @mousedown="handleDragStart"
    @mousemove="handleDragMove"
    @mouseup="handleDragEnd"
    @mouseleave="handleDragEnd"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
  >
    <div class="relative w-full max-w-7xl h-[600px] sm:h-[750px] flex items-center justify-center perspective-1200">
      
      <div 
        v-for="(item, index) in products" 
        :key="item.id"
        class="absolute transition-all duration-700 cubic-bezier cursor-pointer group"
        :style="getCardStyle(index)"
        @click.capture="handleCardClick(index)"
      >
        <div 
          v-if="activeIndex !== index"
          class="absolute inset-y-0 -inset-x-24 z-50 bg-transparent"
        ></div>

        <div class="w-[280px] sm:w-[420px] drop-shadow-2xl relative z-10 pointer-events-auto">
          <MerchCard 
            :product="item" 
            @add-to-cart="$emit('add-to-cart', $event)"
            :class="[activeIndex === index ? 'opacity-100' : 'pointer-events-none opacity-60 hover:opacity-100 transition-opacity']"
          />
        </div>
      </div>

    </div>

    <div class="flex flex-col items-center">
      <div class="flex items-center gap-6">
        <button @click="prev" class="p-4 rounded-full border border-white/5 bg-white/5 hover:border-amber-500 text-amber-500 transition-all active:scale-90">
          <i class="fas fa-chevron-left"></i>
        </button>
        
        <div class="flex gap-3">
          <button 
            v-for="(_, i) in products" :key="i"
            @click="setFocus(i)"
            class="h-1.5 transition-all duration-500 rounded-full"
            :class="activeIndex === i ? 'w-10 bg-amber-500' : 'w-3 bg-white/20'"
          ></button>
        </div>

        <button @click="next" class="p-4 rounded-full border border-white/5 bg-white/5 hover:border-amber-500 text-amber-500 transition-all active:scale-90">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      <p class="text-slate-500 text-sm italic">Item {{ activeIndex + 1 }} of {{ products.length }}</p>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  products: Array,
  activeCategory: String
});

const emit = defineEmits(['add-to-cart']);
const activeIndex = ref(0);

// Interaction State
const isDragging = ref(false);
const startX = ref(0);
const startY = ref(0); // Track vertical start to separate scroll from swipe

const getCardStyle = (index) => {
  const diff = index - activeIndex.value;
  const absDiff = Math.abs(diff);
  
  const xOffset = diff * 52; 
  const zOffset = absDiff * -180; 
  const rotation = diff * -42; 
  
  return {
    zIndex: 100 - absDiff,
    transform: `translateX(${xOffset}%) translateZ(${zOffset}px) rotateY(${rotation}deg)`,
    opacity: absDiff > 4 ? 0 : 1 - (absDiff * 0.2), 
    filter: absDiff === 0 ? 'brightness(1)' : `brightness(${1 - absDiff * 0.15}) blur(${absDiff * 0.5}px)`,
    visibility: absDiff > 4 ? 'hidden' : 'visible'
  };
};

const handleCardClick = (index) => {
  if (activeIndex.value !== index) {
    setFocus(index);
  }
};

const setFocus = (index) => {
  activeIndex.value = index;
};

const next = () => {
  activeIndex.value = (activeIndex.value + 1) % props.products.length;
};

const prev = () => {
  activeIndex.value = (activeIndex.value - 1 + props.products.length) % props.products.length;
};

// --- AXIS-AWARE INTERACTION LOGIC ---

const handleInteractionStart = (x, y) => {
  isDragging.value = true;
  startX.value = x;
  startY.value = y;
};

const handleInteractionMove = (x, y) => {
  if (!isDragging.value) return;

  const diffX = startX.value - x;
  const diffY = startY.value - y;

  /**
   * If the vertical movement (diffY) is greater than horizontal (diffX),
   * the user is trying to scroll the page. We kill the drag state 
   * to let the browser take over the scroll.
   */
  if (Math.abs(diffY) > Math.abs(diffX)) {
    isDragging.value = false;
    return;
  }

  // Horizontal swipe threshold
  if (Math.abs(diffX) > 60) {
    if (diffX > 0) next();
    else prev();
    isDragging.value = false;
  }
};

const handleDragStart = (e) => handleInteractionStart(e.pageX, e.pageY);
const handleDragMove = (e) => handleInteractionMove(e.pageX, e.pageY);
const handleDragEnd = () => { isDragging.value = false; };

const handleTouchStart = (e) => handleInteractionStart(e.touches[0].clientX, e.touches[0].clientY);
const handleTouchMove = (e) => handleInteractionMove(e.touches[0].clientX, e.touches[0].clientY);
const handleTouchEnd = () => { isDragging.value = false; };
</script>

<style scoped>
.perspective-1200 {
  perspective: 1600px;
  transform-style: preserve-3d;
}

.cubic-bezier {
  transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
}

section {
  touch-action: pan-y;
}
</style>