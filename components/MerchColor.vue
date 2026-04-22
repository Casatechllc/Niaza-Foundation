<template>
  <section class="w-full bg-accent/30 py-16 px-6 lg:px-8 overflow-hidden">
    <div class="mx-auto max-w-[1600px]">
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6 auto-rows-[300px] lg:auto-rows-[35vh]">
        
        <div 
          v-motion-slide-visible-once-left
          class="md:col-span-1 lg:col-span-9 lg:row-span-1 bg-slate-600/5 backdrop-blur-md rounded-[2.5rem] p-8 flex flex-col justify-center border border-white/10"
        >
          <span class="text-secondary font-black uppercase tracking-[0.3em] text-2xl mb-4">Collection Highlight</span>
          <h2 class="text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-black text-black uppercase italic leading-none mb-4">
            Chromatic <br /> <span class="text-secondary">Impact</span>
          </h2>
          <p class="text-slate-800 text-1xl leading-relaxed">
            Every garment in our collection is available in multiple hand-picked colorways. 
            Select your signature shade and preferred size during checkout.
          </p>
        </div>

        <div 
          v-motion-pop-visible
          class="md:col-span-1 lg:col-span-3 md:row-span-2 relative rounded-[2.5rem] overflow-hidden group"
        >
          <!-- <img 
            src="/merch/sweater-tan.jpg" 
            alt="Main Product Feature" 
            class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
          /> -->
          <video 
            src="/merch/sweater-reveal.mp4" 
            alt="Main Product Feature Video" 
            class="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
            autoplay
            muted
            playsinline
            >
            Your browser does not support the video tag.
          </video>
          <div class="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
          <!-- <div class="absolute bottom-8 left-8">
            <p class="text-white font-black uppercase tracking-widest text-xs">Premium Heavyweight Series</p>
          </div> -->
        </div>

        <div 
          v-motion-slide-visible-once-bottom
          class="lg:col-span-3 lg:row-span-1 relative rounded-[2.5rem] overflow-hidden group border border-white/5"
        >
          <img 
            src="/merch/hoodie-blue.png" 
            alt="Black Variant" 
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute top-4 right-4 h-4 w-4 rounded-full bg-[#1f263c] border border-white/20"></div>
        </div>

        <div 
          v-motion-slide-visible-once-bottom
          class="lg:col-span-3 lg:row-span-1 relative rounded-[2.5rem] overflow-hidden group border border-white/5"
        >
          <img 
            src="/merch/48127AA9-B042-423F-8EF8-BAD9B4683548.jpg" 
            alt="Forest Variant" 
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute top-4 right-4 h-4 w-4 rounded-full bg-[#131217] border border-white/20"></div>
        </div>

        <div 
          v-motion-slide-visible-once-bottom
          class="lg:col-span-3 lg:row-span-1 relative rounded-[2.5rem] overflow-hidden group border border-white/5"
        >
          <img 
            src="/merch/hoodie-maroon.png" 
            alt="Parchment Variant" 
            class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div class="absolute top-4 right-4 h-4 w-4 rounded-full bg-[#51272b] border border-white/20"></div>
        </div>
      </div>
      <div class="items-center p-4">
        <p class="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em] italic">
        * Colors may vary slightly based on display settings.
        </p>
    </div>
    </div>
  </section>
</template>

<style scoped>
/* Force high-quality rendering for the image-heavy layout */
img {
  image-rendering: -webkit-optimize-contrast;
  backface-visibility: hidden;
}

</style>