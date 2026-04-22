<template>
  <section class="min-h-[50vh] w-full grid grid-cols-1 md:grid-cols-3 bg-neutral-900 text-white overflow-hidden">
    
    <div class="relative flex items-center justify-center p-12 bg-gradient-to-br from-primary to-tertiary">
      <div class="relative z-10 text-center">
        <h2 class="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter uppercase italic opacity-20 md:absolute md:-top-20 -left-10 select-none">
          Impact
        </h2>
        <p class="text-2xl md:text-3xl leading-relaxed max-w-md">
          Your style does more than just <span class="text-secondary font-bold">look good.</span>
        </p>
        <div class="mt-8 h-1 w-24 bg-amber-500 mx-auto"></div>
      </div>
      <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 30px 30px;"></div>
    </div>

    <div class="flex flex-col md:col-span-2 justify-center p-8 md:p-16 space-y-8 bg-neutral-50 text-neutral-900">
      <div>
        <h3 class="text-sm uppercase tracking-widest text-tertiary font-bold mb-2">Our Mission</h3>
        <h2 class="text-3xl md:text-4xl font-bold leading-tight">Every Purchase Powers Change</h2>
        <p class="mt-4 text-neutral-600 leading-relaxed text-lg">
          At the Nianza Foundation, we believe that empowerment is a global responsibility. What started as a refuge in Kinshasa continues today through your support. We don't just sell apparel, we fund the "last piece of bread" that fuels a future. Your purchase directly sustains our dual mission of honoring legacy and building modern opportunity.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="flex items-start space-x-4">
          <div class="p-2 bg-amber-100 rounded-lg">
            <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
          </div>
          <div>
            <h4 class="font-bold">Safe Haven & Housing</h4>
            <p class="text-sm text-neutral-500">We believe that no child can thrive without a roof over their head. A portion of every sale goes directly toward the construction and maintenance of sustainable homes for vulnerable families, continuing the "radical hospitality" started by Charles Nianza.</p>
          </div>
        </div>

        <div class="flex items-start space-x-4">
          <div class="p-2 bg-amber-100 rounded-lg">
            <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <div>
            <h4 class="font-bold">Foundational Literacy</h4>
            <p class="text-sm text-neutral-500">Knowledge is the only bridge out of poverty. We fund local educational initiatives that teach children to read and provide the essential school supplies needed to keep them in the classroom. We provide the tools; they build the future.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>