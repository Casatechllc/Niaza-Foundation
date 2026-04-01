<template>
  <div class="min-h-screen bg-slate-50 py-16 sm:py-24 antialiased">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      
      <header 
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-center mb-20"
      >
        <div class="inline-flex items-center justify-center p-3 mb-6 rounded-2xl bg-secondary/10 text-secondary">
          <i class="fas fa-hand-holding-heart text-3xl"></i>
        </div>
        <h1 class="text-4xl font-extrabold tracking-tight text-primary sm:text-6xl">
          Our Core Services
        </h1>
        <p class="mt-6 text-xl leading-8 text-slate-600 max-w-3xl mx-auto">
          We provide a comprehensive pathway to stability, dignity, and independence for vulnerable populations in the DRC.
        </p>
      </header>

      <section class="mb-24">
        <div class="flex items-center gap-4 mb-12">
          <div class="h-px flex-1 bg-slate-200"></div>
          <h2 class="text-2xl font-bold text-secondary uppercase tracking-widest">Dignified Shelter & Basic Needs</h2>
          <div class="h-px flex-1 bg-slate-200"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div 
            v-motion-slide-visible-bottom
            class="group relative rounded-3xl bg-white p-8 shadow-sm border border-slate-100 transition-all hover:-translate-y-2 hover:shadow-xl"
          >
            <div class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-white transition-colors">
              <i class="fas fa-home text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-4">Temporary Safe Housing</h3>
            <p class="text-slate-600 leading-relaxed">
              Providing secure, weather-resistant shelter units for families, ensuring immediate relief from street living and exposure to the elements.
            </p>
          </div>

          <div 
            v-motion-slide-visible-bottom
            :delay="100"
            class="group relative rounded-3xl bg-white p-8 shadow-sm border border-slate-100 transition-all hover:-translate-y-2 hover:shadow-xl"
          >
            <div class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
              <i class="fas fa-faucet text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-4">Essential Infrastructure</h3>
            <p class="text-slate-600 leading-relaxed">
              Access to clean, potable water, sanitation facilities, drainage, and reliable electricity, upholding a standard of basic human health.
            </p>
          </div>

          <div 
            v-motion-slide-visible-bottom
            :delay="200"
            class="group relative rounded-3xl bg-white p-8 shadow-sm border border-slate-100 transition-all hover:-translate-y-2 hover:shadow-xl"
          >
            <div class="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white transition-colors">
              <i class="fas fa-utensils text-2xl"></i>
            </div>
            <h3 class="text-xl font-bold text-primary mb-4">Resource Provision</h3>
            <p class="text-slate-600 leading-relaxed">
              Coordinating with partners to provide meals and basic non-food items like clothing and hygiene kits to ensure immediate stability.
            </p>
          </div>
        </div>
      </section>

      <section class="mb-24 rounded-[40px] bg-primary p-8 sm:p-16 text-white overflow-hidden relative shadow-2xl">
        <div class="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-tertiary/20 blur-3xl"></div>
        
        <div class="relative z-10 text-center mb-16">
          <h2 class="text-3xl font-bold mb-4">Pathways to Stability & Reintegration</h2>
          <p class="text-slate-300 max-w-2xl mx-auto">Beyond immediate shelter, we provide the tools necessary for long-term independence.</p>
        </div>

        <div class="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div 
            v-for="(service, index) in stabilityServices" 
            :key="index"
            v-motion-slide-visible-bottom
            :delay="index * 100"
            class="rounded-2xl bg-white/10 p-6 backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-colors"
          >
            <i :class="[service.icon, 'text-tertiary text-2xl mb-4 block']"></i>
            <h4 class="text-lg font-bold mb-2">{{ service.title }}</h4>
            <p class="text-sm text-slate-300 leading-relaxed">{{ service.desc }}</p>
          </div>
        </div>
      </section>

      <footer 
        v-motion-slide-visible-bottom
        class="text-center bg-white rounded-3xl p-12 shadow-sm border border-slate-100"
      >
        <h3 class="text-2xl font-bold text-primary mb-4">Help Us Expand Our Reach</h3>
        <p class="text-slate-600 mb-8  mx-auto">
          Public funding is vital to link these services with government resources and ensure long-term, predictable care.
        </p>
        <button 
          @click="openDonate" 
          class="inline-flex items-center gap-3 rounded-full bg-accent px-10 py-5 text-xl font-bold text-white shadow-xl transition-all hover:bg-orange-700 hover:scale-105 active:scale-95"
        >
          <i class="fas fa-dollar-sign"></i>
          <span>Fund Our Services</span>
        </button>
      </footer>

    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

const openDonate = inject('openDonateModal');

const stabilityServices = [
  { title: 'Health Outreach', icon: 'fas fa-clinic-medical', desc: 'On-site health checks, medical referrals, and social services for mental health.' },
  { title: 'Case Management', icon: 'fas fa-user-friends', desc: 'Personalized plans focusing on recovery, empowerment, and individual stability.' },
  { title: 'Job Placement', icon: 'fas fa-user-tie', desc: 'Vocational training and job placement to ensure long-term economic independence.' },
  { title: 'Housing Transition', icon: 'fas fa-building', desc: 'Support services focused on transitioning residents into permanent, sustainable housing.' }
];

useHead({
  title: 'Our Services | Nianza Foundation',
});
</script>