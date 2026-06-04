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
</style>