<template>
  <div class="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-24">
    <div 
      v-motion
      :initial="{ scale: 0, opacity: 0 }"
      :enter="{ scale: 1, opacity: 1, transition: { type: 'spring', damping: 10, stiffness: 100 } }"
      class="h-24 w-24 bg-secondary rounded-full flex items-center justify-center mb-8 shadow-2xl shadow-secondary/20"
    >
      <i class="fas fa-check text-4xl text-black"></i>
    </div>

    <div class="text-center max-w-2xl mb-12" v-motion-slide-bottom>
      <h2 class="text-secondary font-black uppercase tracking-[0.4em] text-sm mb-4">Transaction Confirmed</h2>
      <h1 class="text-5xl md:text-6xl font-black text-primary uppercase italic leading-none mb-6">
        Foundation <br /> <span class="text-slate-900 italic">Strengthened</span>
      </h1>
      <p class="text-slate-500 text-lg leading-relaxed italic">
        Thank you for your support. Your order has been received and is currently being prepared. 
        More importantly, your contribution is already being allocated to our projects in the DRC.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl mb-16">
      <div 
        v-motion-slide-visible-once-left
        class="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex items-start gap-6"
      >
        <div class="h-12 w-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
          <i class="fas fa-home text-secondary"></i>
        </div>
        <div>
          <h4 class="font-black text-primary uppercase tracking-widest text-xs mb-2">Housing Impact</h4>
          <p class="text-sm text-slate-600 leading-relaxed">
            A portion of your total is now dedicated to the raw materials needed for sustainable housing in Kinshasa.
          </p>
        </div>
      </div>

      <div 
        v-motion-slide-visible-once-right
        class="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex items-start gap-6"
      >
        <div class="h-12 w-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
          <i class="fas fa-book-open text-secondary"></i>
        </div>
        <div>
          <h4 class="font-black text-primary uppercase tracking-widest text-xs mb-2">Literacy Impact</h4>
          <p class="text-sm text-slate-600 leading-relaxed">
            Funds from this purchase provide foundational reading materials and supplies for students in our supported regions.
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 w-full max-w-md" v-motion-fade>
      <NuxtLink 
        to="/" 
        class="flex-1 bg-primary text-white text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-800 transition-all"
      >
        Return Home
      </NuxtLink>
      <NuxtLink 
        to="/merch" 
        class="flex-1 bg-white text-primary border-2 border-primary text-center py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-slate-50 transition-all"
      >
        The Collection
      </NuxtLink>
    </div>

    <p class="mt-12 text-[10px] text-slate-400 uppercase font-bold tracking-widest">
      A confirmation email has been sent to your inbox.
    </p>
  </div>
</template>

<script setup>
const { cart } = useCart();

onMounted(() => {
  // Clear the state
  cart.value = [];
  
  // Clear the local storage so it doesn't come back on refresh
  if (process.client) {
    localStorage.removeItem('nianza_cart');
  }
});

// Set page metadata
useHead({
  title: 'Success | Nianza Foundation',
  meta: [
    { name: 'robots', content: 'noindex' }
  ]
});
</script>