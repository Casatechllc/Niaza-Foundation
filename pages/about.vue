<template>
  <div class="min-h-screen bg-slate-50 py-16 sm:py-24 antialiased">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      
      <header 
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-center mb-16"
      >
        <h1 class="text-4xl font-extrabold tracking-tight text-primary sm:text-6xl">
          Our Vision: <span class="text-secondary">Dignity and Reintegration</span>
        </h1>
        <p class="mt-6 text-xl leading-8 text-slate-600 max-w-3xl mx-auto">
          Building safe, sustainable, and dignified homeless shelters in the Democratic Republic of the Congo (DRC).
        </p>
      </header>

      <section class="mb-24">
        <div 
          v-motion
          :initial="{ opacity: 0, x: -30 }"
          :visible="{ opacity: 1, x: 0 }"
          class="relative rounded-3xl bg-white p-8 shadow-sm border-l-[12px] border-primary sm:p-12 overflow-hidden"
        >
          <div class="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
          <h3 class="text-2xl font-bold text-primary mb-4">Who We Are</h3>
          <p class="text-lg leading-relaxed text-slate-700">
            Nianza Foundation is a nonprofit organization dedicated to providing safe and sustainable housing solutions for vulnerable populations in the DRC. We are currently leading a project to build homeless shelters aimed at offering temporary housing, essential services, and pathways to stability for individuals and families experiencing homelessness.
          </p>
          <footer class="mt-6 flex items-center gap-2 text-secondary font-semibold">
            <i class="fas fa-handshake"></i>
            <span>Partnerships with local communities and government agencies are central to our work.</span>
          </footer>
        </div>
      </section>

      <section 
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible="{ opacity: 1, y: 0 }"
        class="rounded-3xl bg-primary p-8 text-white shadow-2xl sm:p-16 mb-24 overflow-hidden relative"
      >
        <div class="absolute bottom-0 left-0 -ml-20 -mb-20 h-80 w-80 rounded-full bg-secondary/20 blur-3xl"></div>
        
        <div class="relative grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          <div class="lg:col-span-4 flex justify-center">
            <div class="relative">
              <div class="absolute -inset-2 rounded-full bg-gradient-to-tr from-secondary to-tertiary blur-sm"></div>
              <img 
                src="/founder-image.jpg" 
                alt="NiANSA NDONTONI Charles - Founder" 
                class="relative h-64 w-64 rounded-full object-cover border-4 border-white shadow-2xl" 
              />
            </div>
          </div>
          <div class="lg:col-span-8">
            <h2 class="text-3xl font-bold mb-2">Meet Our Founder</h2>
            <h3 class="text-4xl font-extrabold text-secondary mb-6">NiANSA NDONTONI Charles</h3>
            <p class="text-xl text-slate-200 mb-8 leading-relaxed">
              With a profound commitment to social welfare and extensive experience in management and theology, Charles Niansa is the visionary behind the Nianza Foundation.
            </p>
            <ul class="space-y-4">
              <li class="flex items-start gap-4">
                <i class="fas fa-map-marker-alt text-tertiary mt-1 text-xl"></i>
                <span class="text-lg">Originally from Kinshasa, DR Congo</span>
              </li>
              <li class="flex items-start gap-4">
                <i class="fas fa-user-tie text-tertiary mt-1 text-xl"></i>
                <span class="text-lg">Expertise in Business Admin, Management, and Pastoral Theology</span>
              </li>
              <li class="flex items-start gap-4">
                <i class="fas fa-award text-tertiary mt-1 text-xl"></i>
                <span class="text-lg">Founder of "Moissonneurs" Youth Group since 1985</span>
              </li>
            </ul>
            <p class="mt-8 text-xs text-slate-400 italic">
              *Information certified by NiANSA NDONTONI Charles, Kinshasa, December 16, 2019.*
            </p>
          </div>
        </div>
      </section>

      <section class="py-16 mb-24">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div v-motion-slide-visible-left>
            <h2 class="text-3xl font-bold text-primary mb-6">Addressing an Urgent Humanitarian Crisis</h2>
            <p class="text-lg text-slate-600 mb-6 leading-relaxed">
              Homelessness remains an urgent humanitarian and social challenge across the DRC. Thousands of families—especially women, children, and people displaced by conflict or poverty—are forced to live without safe shelter.
            </p>
            <div class="rounded-2xl bg-tertiary/10 p-6 border-l-4 border-tertiary">
              <p class="text-xl font-bold text-primary">
                Our mission is to provide not just a roof, but a pathway to recovery, empowerment, and reintegration into society.
              </p>
            </div>
          </div>
          <div class="flex justify-center" v-motion-pop-visible>
             <div class="relative">
                <div class="absolute inset-0 bg-secondary/20 rounded-full blur-3xl scale-125"></div>
                <i class="fas fa-hands-helping text-[180px] text-secondary relative"></i>
             </div>
          </div>
        </div>
      </section>

      <section class="rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-slate-100 mb-24">
        <h2 class="text-3xl font-bold text-center text-primary mb-12">Our Model: Viability at Scale</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="group">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
              <i class="fas fa-building text-xl"></i>
            </div>
            <h4 class="text-xl font-bold text-primary mb-3">Scale and Capital</h4>
            <p class="text-slate-600 leading-relaxed">
              Public funding is essential to making the shelter project viable at scale. It provides the necessary capital for land acquisition, basic infrastructure, and staffing that private donations alone rarely cover.
            </p>
          </div>
          <div class="group">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-white transition-colors">
              <i class="fas fa-handshake text-xl"></i>
            </div>
            <h4 class="text-xl font-bold text-primary mb-3">Partnerships and Sustainability</h4>
            <p class="text-slate-600 leading-relaxed">
              Government partnership unlocks essential services (health, protection, social services) and ensures the shelter is sustainable and accountable to the communities it serves.
            </p>
          </div>
        </div>
      </section>
      
      <footer class="text-center py-12" v-motion-slide-visible-bottom>
        <h3 class="text-3xl font-bold text-primary mb-4">Become a Partner in Building Hope</h3>
        <p class="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Your support helps us lay the foundation for a national model of homeless care and reintegration.
        </p>
        <button 
          @click="openDonate" 
          class="inline-flex items-center gap-3 rounded-full bg-accent px-10 py-5 text-xl font-bold text-white shadow-xl transition-all hover:bg-orange-700 hover:scale-105 active:scale-95"
        >
          <i class="fas fa-dollar-sign"></i>
          <span>Donate to Our Cause</span>
        </button>
      </footer>
      
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue';

// Use the global function defined in app.vue to open the modal
const openDonate = inject('openDonateModal');

// Set the page title
useHead({
  title: 'About Us | Nianza Foundation',
});
</script>