<template>
  <section class="py-24 bg-accent">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16" v-motion-slide-visible-once-bottom>
        <div class="max-w-2xl">
          <h2 class="text-secondary font-black uppercase tracking-[0.3em] text-sm mb-4">The Latest</h2>
          <h3 class="text-5xl font-black text-primary uppercase italic leading-none">
            Announcements
          </h3>
        </div>
      </div>

      <div class="space-y-8">
        <div 
          v-for="(item, index) in announcements" 
          :key="item.id"
          v-motion
          :initial="{ opacity: 0, x: -20 }"
          :visible-once="{ opacity: 1, x: 0, transition: { delay: index * 100 } }"
          class="group relative bg-slate-50 border border-slate-100 rounded-[2.5rem] overflow-hidden transition-all hover:shadow-2xl hover:shadow-primary/5"
        >
          <div class="flex flex-col md:flex-row">
            
            <div v-if="item.image" class="md:w-1/3 h-64 md:h-auto overflow-hidden">
              <img 
                :src="item.image" 
                :alt="item.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>

            <div class="flex-1 p-8 sm:p-12 flex flex-col justify-center">
              <div class="flex items-center gap-4 mb-6">
                <span class="px-4 py-1 rounded-full bg-secondary/10 text-secondary text-[10px] font-black uppercase tracking-widest">
                  {{ item.tag }}
                </span>
                <span class="text-slate-400 text-xs font-medium">{{ item.date }}</span>
              </div>

              <h4 class="text-3xl font-black text-primary mb-4 group-hover:text-secondary transition-colors">
                {{ item.title }}
              </h4>
              
              <p class="text-slate-600 leading-relaxed mb-8 max-w-2xl">
                {{ item.content }}
              </p>

              <div v-if="item.linkUrl && item.linkText" class="mt-auto">
                <a 
                  :href="item.linkUrl" 
                  class="inline-flex items-center gap-2 text-primary font-black uppercase text-xs tracking-widest hover:gap-4 transition-all"
                >
                  {{ item.linkText }}
                  <i class="fas fa-arrow-right text-secondary"></i>
                </a>
              </div>
            </div>

          </div>

          <div class="absolute top-8 right-12 text-primary/5 text-7xl italic font-black select-none pointer-events-none">
            0{{ index + 1 }}
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { announcements } from '~/data/announcements.js';
</script>