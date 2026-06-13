<template>
  <div class="w-full max-w-7xl mx-auto bg-white rounded-[2rem] shadow-sm border border-slate-100 p-6 sm:p-10 lg:p-12">
    <div class="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
      
      <!-- Left Column: Branding / Context -->
      <div class="md:col-span-5 flex flex-col justify-center">
        <span class="text-secondary font-bold uppercase tracking-widest text-xs mb-3">Get in Touch</span>
        <h3 class="text-3xl font-extrabold text-primary tracking-tight sm:text-4xl">
          We'd love to hear from you
        </h3>
        <p class="text-slate-500 mt-4 text-base leading-relaxed font-sans">
          Have questions about our initiatives or want to discuss partnership opportunities? Reach out directly to our team.
        </p>
      </div>

      <!-- Right Column: Structured Contact Details -->
      <div class="md:col-span-7 space-y-6 sm:space-y-8">
        
        <!-- 1. Phone Card Block -->
        <a 
          :href="`tel:${contactInfo.phoneRaw}`" 
          class="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-secondary/5 border border-transparent hover:border-secondary/10 transition-all duration-300"
        >
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
            <i class="fas fa-phone text-lg"></i>
          </div>
          <div class="min-w-0">
            <span class="block text-xs font-bold text-slate-400 uppercase tracking-wider">Call Us</span>
            <span class="block text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors truncate">
              {{ contactInfo.phone }}
            </span>
          </div>
        </a>

        <!-- 2. Email Card Block -->
        <a 
          :href="`mailto:${contactInfo.email}`" 
          class="group flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-secondary/5 border border-transparent hover:border-secondary/10 transition-all duration-300"
        >
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-secondary shadow-sm group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
            <i class="fas fa-envelope text-lg"></i>
          </div>
          <div class="min-w-0 break-all">
            <span class="block text-xs font-bold text-slate-400 uppercase tracking-wider">Email Us</span>
            <span class="block text-base sm:text-lg font-bold text-primary group-hover:text-secondary transition-colors">
              {{ contactInfo.email }}
            </span>
          </div>
        </a>

        <!-- 3. Long Address Block (Optimized for Mobile Multi-line) -->
        <div class="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-transparent">
          <!-- shrink-0 forces the icon box to never smash down on multi-line text -->
          <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-tertiary shadow-sm">
            <i class="fas fa-map-marker-alt text-lg"></i>
          </div>
          <div class="min-w-0">
            <span class="block text-xs font-bold text-slate-400 uppercase tracking-wider">Headquarters</span>
            <!-- Location Short Tag -->
            <span class="inline-block text-xs font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-md mt-1 mb-1.5">
              {{ contactInfo.addressShort }}
            </span>
            <!-- Long Address Text Wrap Fix -->
            <p class="text-sm sm:text-base font-medium text-slate-700 leading-relaxed break-words">
              {{ contactInfo.addressLong }}
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup>
import { contactInfo } from '~/data/contact.js'
</script>