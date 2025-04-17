<template>
  <div class='container mx-auto px-4 py-20 text-center animate-fadeIn min-h-[calc(100vh-4rem)] flex flex-col justify-center'>
    <h1 class='text-5xl md:text-6xl font-bold mb-4 text-dark-text animate-slideInUp' style='animation-delay: 0.2s;'>[Your Name]</h1>
    <p class='text-xl md:text-2xl text-dark-text-secondary mb-8 animate-slideInUp' style='animation-delay: 0.4s;'>[Your Title/Tagline - e.g., Fyullstack Developer | Vibe Coder]</p>
    <div class="animate-slideInUp" style="animation-delay: 0.6s;">
      <router-link to="/projects" 
         class="bg-dark-accent hover:opacity-90 text-white font-bold py-3 px-6 rounded-md transition-opacity text-lg">
        View My Work
      </router-link>
    </div>
  </div>
</template>

<script setup>
// No script logic needed yet
</script>