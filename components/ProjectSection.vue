<template>
  <section class="relative py-12 border-t border-slate-200 first:border-t-0">
    <div class="mb-12" v-motion-slide-visible-once-left>
      <div class="flex items-center gap-4 mb-4">
        <span class="h-px w-12 bg-secondary"></span>
        <h2 class="text-sm font-black uppercase tracking-[0.3em] text-secondary">
          Featured Project
        </h2>
      </div>
      
      <h3 class="text-5xl font-black text-primary uppercase italic leading-none mb-4">
        {{ project.title }}
      </h3>
      
      <p class="text-xl font-bold text-slate-400 mb-6 italic">
        {{ project.subtitle }}
      </p>

      <p class="max-w-3xl text-lg text-slate-600 leading-relaxed">
        {{ project.description }}
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div 
        v-for="(img, index) in project.images" 
        :key="img.id"
        v-motion
        :initial="{ opacity: 0, scale: 0.9 }"
        :visible-once="{ 
          opacity: 1, 
          scale: 1, 
          transition: { delay: index * 100, duration: 500 } 
        }"
        class="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100 shadow-md"
      >
        <img 
          :src="img.url" 
          :alt="img.alt"
          class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
          loading="lazy"
        />
        
        <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
          <p class="text-white font-medium text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            {{ img.alt }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  project: Object
});
</script>