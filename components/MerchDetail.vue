<template>
  <div class="mx-auto max-w-7xl px-6 lg:px-8 py-12">
    <button @click="$emit('close')" class="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors mb-12 uppercase text-xs font-black tracking-widest">
      <i class="fas fa-arrow-left"></i> Back to Collection
    </button>
    <button 
    @click="$emit('close')" 
    class="fixed top-30 right-6 z-100 h-12 w-12 flex items-center justify-center bg-primary/80 p-0 m-0 backdrop-blur-md p-4 rounded-full shadow-lg md:hidden"
    >
    <i class="fas fa-times text-secondary"></i>
    </button>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
      
      <div class="space-y-4">
        <div class="aspect-square rounded-[3rem] overflow-hidden bg-slate-100 border border-slate-100">
          <img :src="activeImage" class="w-full h-full object-cover transition-all duration-500" />
        </div>

        <div class="grid grid-cols-4 gap-4">
          <button 
            v-for="(imgUrl, idx) in dynamicGallery" 
            :key="idx"
            @click="activeImage = imgUrl"
            class="aspect-square rounded-2xl overflow-hidden border-2 transition-all"
            :class="activeImage === imgUrl ? 'border-secondary' : 'border-transparent opacity-60'"
          >
            <img :src="imgUrl" class="w-full h-full object-cover" />
          </button>
        </div>
      </div>

      <div class="flex flex-col">
        <h2 class="text-sm font-black text-secondary uppercase tracking-[0.4em] mb-2">{{ product.category }}</h2>
        <h1 class="text-5xl font-black text-primary uppercase italic mb-4">{{ product.name }}</h1>
        <p class="text-3xl font-bold text-slate-900 mb-8">${{ product.price }}</p>

        <div class="mb-8">
          <h3 class="text-xs font-black uppercase tracking-widest mb-4">
            Color: <span class="text-slate-400 italic">{{ selectedColorObj.colorName }}</span>
          </h3>
          <div class="flex gap-4">
            <button 
              v-for="(color, idx) in product.colors" 
              :key="idx"
              @click="updateSelection(color)"
              class="h-10 w-10 rounded-full border-2 transition-all"
              :style="{ backgroundColor: color.hex }"
              :class="selectedColorObj.hex === color.hex ? 'border-primary ring-2 ring-offset-2 ring-primary' : 'border-transparent'"
            ></button>
          </div>
        </div>

        <div class="mb-10">
          <h3 class="text-xs font-black uppercase tracking-widest mb-4">Select Size:</h3>
          <div class="flex gap-3">
            <button 
              v-for="size in ['S', 'M', 'L', 'XL', '2XL']" 
              :key="size"
              @click="selectedSize = size"
              class="h-12 w-16 border-2 font-black transition-all rounded-xl"
              :class="selectedSize === size ? 'bg-primary text-white border-primary' : 'bg-white text-primary border-slate-200 hover:border-primary'"
            >
              {{ size }}
            </button>
          </div>
        </div>

        <button class="w-full bg-primary text-white py-6 rounded-2xl font-black uppercase tracking-widest hover:bg-secondary transition-all shadow-xl">
          Add to Support
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['product']);
defineEmits(['close']);

// Initial State
const selectedColorObj = ref(props.product.colors[0]);
const activeImage = ref(props.product.colors[0].image);
const selectedSize = ref('M');

// Logic to create the 4-item gallery
const dynamicGallery = computed(() => {
  // Take first 3 from variants
  const baseVariants = props.product.variants.slice(0, 3).map(v => v.image);
  // Append the current selected color image as the 4th item
  return [...baseVariants, selectedColorObj.value.image];
});

// Update both the color selection and the active display image
const updateSelection = (color) => {
  selectedColorObj.value = color;
  activeImage.value = color.image;
};
</script>