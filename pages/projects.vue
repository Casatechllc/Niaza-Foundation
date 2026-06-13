<template>
  <div class="min-h-screen bg-slate-50 py-24 antialiased">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      
      <!-- FIXED: Replaced v-motion with native CSS / Tailwind for safety -->
      <header class="mb-20 animate-fade-in-down">
        <h1 class="text-6xl font-black text-primary uppercase italic leading-none">
          Project <span class="text-secondary">Archive</span>
        </h1>
        <div class="h-1.5 w-24 bg-secondary mt-6"></div>
        <p class="text-xl text-slate-500 mt-6 max-w-2xl">
          A visual journey through our impact, from the streets of Kinshasa to our global initiatives.
        </p>
      </header>

      <!-- SECTIONS -->
      <div class="space-y-32">
        <ProjectSection 
          v-for="project in projects" 
          :key="project.id" 
          :project="project" 
        />
      </div>

      <!-- MORE PROJECTS COMING SOON SECTION -->
      <div class="mt-32 border-2 border-dashed border-slate-200 rounded-[2rem] p-12 text-center bg-white/50 backdrop-blur-sm shadow-sm">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6 animate-pulse-subtle">
          <i class="fas fa-hammer text-2xl"></i>
        </div>
        <h3 class="text-2xl font-bold text-primary sm:text-3xl">
          More Initiatives in Development
        </h3>
        <p class="text-base text-slate-500 mt-3 max-w-md mx-auto leading-relaxed">
          Our team is on the ground actively preparing fresh shelter developments and community frameworks. Check back soon for structural updates.
        </p>
      </div>

    </div>
  </div>
</template>

<script setup>
const { projects } = useProjects();

useHead({
  title: 'Gallery | Nianza Foundation'
});
</script>

<style scoped>
/* A rock-solid CSS animation that replaces the broken directive */
.animate-fade-in-down {
  animation: fadeInDown 0.8s ease-out forwards;
}

/* Soft, elegant pulsing animation for the builder icon */
.animate-pulse-subtle {
  animation: pulseSubtle 3s infinite ease-in-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulseSubtle {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.85;
  }
}
</style>