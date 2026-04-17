<template>
  <div class="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
    
    <HomeHero />

    <main>
      <section class="py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-3xl text-center">
            <h2 
              v-motion
              :initial="{ opacity: 0, y: 20 }"
              :visible="{ opacity: 1, y: 0 }"
              class="text-sm font-bold tracking-wider text-secondary uppercase"
            >
              Our Mission
            </h2>
            <p class="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Safe Housing for the DRC's Vulnerable
            </p>
          </div>

          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0 }"
            class="mt-16 rounded-2xl bg-white p-8 shadow-md border-l-8 border-secondary sm:p-12"
          >
            <p class="text-xl leading-relaxed text-slate-700 max-w-prose mx-auto italic">
              "Nianza Foundation is a nonprofit organization dedicated to providing safe and sustainable housing solutions for vulnerable populations in the Democratic Republic of the Congo. Through partnerships with local communities and government agencies, we work to reduce homelessness and promote dignity, safety, and hope for those in need."
            </p>
          </div>
        </div>
      </section>

      <section class="bg-primary py-24 sm:py-32 text-white">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
            <div 
              v-motion
              :initial="{ opacity: 0, x: -30 }"
              :visible="{ opacity: 1, x: 0 }"
            >
              <h2 class="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                An Urgent Challenge: Rebuilding Lives in the DRC
              </h2>
              <div class="space-y-6 text-slate-300 text-lg leading-7">
                <p>
                  Across the DRC, thousands of families—especially women and children displaced by conflict—are forced to live without safe shelter.
                </p>
                <p class="font-semibold text-white border-l-2 border-accent pl-4">
                  Public funding is essential to make this project viable at scale. It provides capital for land and infrastructure that private donations alone rarely cover.
                </p>
              </div>
            </div>
            
            <div class="grid grid-cols-1 gap-6">
              <div 
                v-motion-slide-visible-right
                class="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 shadow-sm hover:bg-white/10 transition-all"
              >
                <h3 class="text-xl font-bold text-tertiary mb-3 uppercase tracking-wide text-sm">Capital Intensity</h3>
                <p class="text-slate-300">Building weather-resistant foundations, sanitation, and electricity demands predictable cash flow supplied by government participation.</p>
              </div>
              <div 
                v-motion-slide-visible-right
                class="bg-white/5 p-8 rounded-xl backdrop-blur-sm border border-white/10 shadow-sm hover:bg-white/10 transition-all"
              >
                <h3 class="text-xl font-bold text-tertiary mb-3 uppercase tracking-wide text-sm">Vital Public Services</h3>
                <p class="text-slate-300">Shelters require formal linkage to state health, security, and social work services to ensure long-term stability for residents.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 sm:py-32 bg-slate-50">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="text-center mb-16">
            <h2 class="text-3xl font-bold text-primary sm:text-4xl">The Ask: Co-funding the Future of Shelter</h2>
            <p class="mt-4 text-lg text-slate-600">Phase one focuses on high-density urban areas like Kinshasa.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div v-for="(item, index) in askItems" :key="index"
              v-motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :visible="{ opacity: 1, scale: 1, transition: { delay: index * 100 } }"
              class="group bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div class="mb-5 inline-block rounded-lg bg-slate-50 p-3 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                <i :class="[item.icon, 'text-2xl']"></i>
              </div>
              <h3 class="text-lg font-bold text-primary mb-3">{{ item.title }}</h3>
              <p class="text-slate-600 text-sm leading-relaxed">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 bg-white">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div 
              v-motion
              :initial="{ opacity: 0, x: -20 }"
              :visible="{ opacity: 1, x: 0 }"
            >
              <h2 class="text-2xl font-bold text-secondary mb-8 flex items-center gap-3">
                <i class="fas fa-handshake"></i> Transparency
              </h2>
              <ul class="space-y-4">
                <li v-for="item in transparencyItems" :key="item" class="flex items-start gap-3 text-slate-700">
                  <i class="fas fa-check-circle mt-1 text-tertiary"></i>
                  <span>{{ item }}</span>
                </li>
              </ul>
            </div>

            <div 
              v-motion
              :initial="{ opacity: 0, x: 20 }"
              :visible="{ opacity: 1, x: 0 }"
              class="flex flex-col justify-center rounded-2xl bg-primary p-8 text-white sm:p-12 shadow-2xl"
            >
              <h2 class="text-2xl text-white font-bold mb-4">Laying the Foundation for a National Model</h2>
              <p class="text-slate-300 mb-8">
                Together, we can transform vulnerable lives and build hope and dignity in the DRC. Support the first phase of our development today.
              </p>
              <button 
                @click="handleDonateClick"
                class="inline-flex justify-center rounded-full bg-tertiary px-8 py-4 text-base font-bold text-slate-300 shadow-lg hover:bg-accent hover:text-tertiary hover:scale-105 transition-all active:scale-95"
              >
                Support Our Vision Today
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>

    <div id="donate-section" class="h-1"></div>
  </div>
</template>

<script setup>

import { inject } from 'vue';

// MUST match the string 'openDonateModal' from app.vue
const openDonate = inject('openDonateModal');

const handleDonateClick = () => {
  if (openDonate) {
    openDonate();
  }
};

const askItems = [
  { title: 'Infrastructure', icon: 'fas fa-hammer', description: 'Capital for land acquisition, site preparation, water, and drainage systems.' },
  { title: 'Operations', icon: 'fas fa-users-cog', description: 'Staffing costs for professional social services and specialized health outreach.' },
  { title: 'Sustainability', icon: 'fas fa-leaf', description: 'Alignment with national social protection policies for long-term impact.' },
  { title: 'Commitment', icon: 'fas fa-gavel', description: 'Demonstrating government resolve to attract international donor partnerships.' }
];

const transparencyItems = [
  "Publish quarterly progress and financial reports",
  "Conduct annual independent audits",
  "Use data-driven performance indicators",
  "Joint monitoring with community representatives"
];

defineEmits(['open-donate']);

useHead({
  title: 'Nianza Foundation | Public Financing for Shelter Development',
  meta: [
    { name: 'description', content: 'Building safe, sustainable housing for vulnerable populations in the DRC.' }
  ]
});
</script>