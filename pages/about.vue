<template>
  <div class="min-h-screen bg-slate-50 py-16 sm:py-24 antialiased">
    <div class="mx-auto">
      
      <header 
        v-motion
        :initial="{ opacity: 0, y: -20 }"
        :enter="{ opacity: 1, y: 0 }"
        class="text-center mb-16"
      >
        <h1 class="text-4xl font-extrabold tracking-tight text-primary sm:text-6xl">
          Our Vision: <span class="text-secondary">Dignity and Reintegration</span>
        </h1>
        <p class="mt-6 text-xl leading-8 text-slate-600 max-w-3xl mx-auto italic">
          "Regardless of what the challenges are, we’re going to help as many as we can while we’re here physically on earth."
        </p>
      </header>

      <section class=" mx-auto mb-24 max-w-7xl px-6 lg:px-8">
        <div class="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div 
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :visible="{ opacity: 1, x: 0 }"
            class="order-2 lg:order-1"
          >
            <h2 class="text-tertiary font-bold uppercase tracking-widest text-sm mb-2">Continuing the Legacy</h2>
            <h3 class="text-3xl font-bold text-primary mb-6">Charly Mumbere Nianza</h3>
            <div class="space-y-6 text-lg leading-relaxed text-slate-700">
              <p>
                Charly is the owner and son of founder Charles Nianza. Having grown up in the Democratic Republic of Congo, Charly witnessed firsthand his parents' radical hospitality—providing shelter and education to those he believed were blood relatives, only to discover later they were neighbors taken off the streets.
              </p>
              <p>
                A former 2005 Rockingham County & Harrisonburg Boys and Girls Club "Youth of the Year," Charly has made it his mission to bring the foundation to the public here in the United States, ensuring the flame his father started continues to burn bright for those less fortunate.
              </p>
              
            </div>
          </div>
          <div class="order-1 lg:order-2 flex justify-center" v-motion-pop-visible>
            <div class="relative group">
              <div class="absolute -inset-4 rounded-3xl bg-secondary/20 blur-2xl group-hover:bg-secondary/30 transition-all"></div>
              <img 
                src="/images/founder-image1.jpg" 
                alt="Charly Mumbere Nianza" 
                class="relative rounded-3xl w-full max-w-md object-cover shadow-2xl border-b-8 border-secondary"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-primary w-full py-20 mb-24 overflow-hidden relative">
        <div class="absolute bottom-0 left-0 -ml-20 -mb-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl"></div>

        <div class="mx-auto max-w-[1600px] px-6 lg:px-12 relative z-10">
          <div 
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visible="{ opacity: 1, y: 0 }"
            class="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center"
          >
            <div class="lg:col-span-5 flex justify-center lg:justify-start">
              <div class="relative w-full max-w-md lg:max-w-full">
                <div class="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-secondary/30 to-transparent blur-2xl"></div>
                
                <img 
                  src="/images/founder-image.jpg" 
                  alt="Charles Niansa - Founder" 
                  class="relative w-full aspect-[4/5] rounded-[40px] object-cover object-[center_15%] border-2 border-white/20 shadow-2xl transform-gpu scale-[1.01]" 
                  style="image-rendering: -webkit-optimize-contrast; backface-visibility: hidden;"
                />
                
                <div class="absolute -bottom-6 -right-6 bg-secondary px-6 py-3 rounded-2xl shadow-xl hidden md:block">
                  <p class="text-primary font-black uppercase tracking-tighter text-sm">Visionary Leader</p>
                </div>
              </div>
            </div>

            <div class="lg:col-span-7 text-white">
              <div class="space-y-6">
                <div class="space-y-2">
                  <h2 class="text-tertiary font-bold uppercase tracking-widest text-sm">The Founder</h2>
                  <h3 class="text-5xl sm:text-6xl font-black text-white leading-tight">
                    Charles <span class="text-secondary italic">Niansa</span>
                  </h3>
                </div>

                <p class="text-xl sm:text-2xl text-slate-300 leading-relaxed font-light">
                  The visionary who started it all in Kinshasa. Charles built the Nianza Foundation on a bedrock of pastoral theology and a refusal to let financial difficulties stop the work of human dignity.
                </p>
                
                <div class="relative mt-10">
                  <i class="fas fa-quote-left absolute -top-4 -left-4 text-4xl text-tertiary opacity-30"></i>
                  <div class="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-inner">
                    <p class="text-lg sm:text-xl italic text-slate-100 leading-relaxed">
                      "I’m not a perfect man, but I understand that when someone needs help, even if it is your last piece of bread, it can be shared. After consuming that bread followed by water, we live to fight another day."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-24">
        <div 
          v-motion
          :initial="{ opacity: 0, x: 30 }"
          :visible="{ opacity: 1, x: 0 }"
          class="relative rounded-3xl bg-white p-8 shadow-sm border-r-[12px] border-secondary sm:p-12 overflow-hidden mx-auto mb-24 max-w-7xl px-6 lg:px-8"
        >
          <div class="absolute top-0 left-0 -ml-16 -mt-16 h-64 w-64 rounded-full bg-secondary/5 blur-3xl"></div>
          <h3 class="text-2xl font-bold text-primary mb-4">Our Calling</h3>
          <p class="text-lg leading-relaxed text-slate-700">
            Nianza Foundation initiative is not only something we believe in; it is something we know is necessary for those who are less fortunate than the rest of us. We provide safe and sustainable housing solutions, offering temporary shelter and essential services that act as a bridge from the street to stability.
          </p>
        </div>
      </section>

      <section class="rounded-3xl bg-white p-8 sm:p-12 shadow-sm border border-slate-100 mb-24 mx-auto mb-24 max-w-7xl px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-primary mb-12">Our Model: Viability at Scale</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div class="group">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
              <i class="fas fa-building text-xl"></i>
            </div>
            <h4 class="text-xl font-bold text-primary mb-3">Scale and Capital</h4>
            <p class="text-slate-600 leading-relaxed">
              Public funding is essential to making the shelter project viable at scale. It provides the necessary capital for land acquisition and staffing that private donations alone rarely cover.
            </p>
          </div>
          <div class="group">
            <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-tertiary/10 text-tertiary group-hover:bg-tertiary group-hover:text-white transition-colors">
              <i class="fas fa-handshake text-xl"></i>
            </div>
            <h4 class="text-xl font-bold text-primary mb-3">Partnerships and Sustainability</h4>
            <p class="text-slate-600 leading-relaxed">
              Government partnership unlocks essential services (health, protection, social services) and ensures the shelter is sustainable and accountable.
            </p>
          </div>
        </div>
      </section>

      <ServicesSection/>
      
      <footer class="text-center py-12" v-motion-slide-visible-bottom>
        <h3 class="text-3xl font-bold text-primary mb-4">Become a Partner in Building Hope</h3>
        <p class="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
          Your support helps us lay the foundation for a national model of homeless care and reintegration.
        </p>
        <button 
          @click="openDonate" 
          class="inline-flex items-center gap-3 rounded-full bg-accent px-10 py-5 text-xl font-bold text-tertiary shadow-xl transition-all hover:bg-tertiary hover:text-accent hover:scale-105 active:scale-95"
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

const openDonate = inject('openDonateModal');

useHead({
  title: 'About Us | Nianza Foundation',
});
</script>
