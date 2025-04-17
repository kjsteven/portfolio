<template>
  <nav class="fixed top-0 left-0 right-0 bg-dark-card shadow-md h-16 z-50 border-b border-dark-border">
    <div class="container mx-auto px-4 h-full flex justify-between items-center">
      <router-link to="/" class="text-xl font-semibold text-dark-text hover:text-dark-accent transition-colors">MyName</router-link>
      <div class="space-x-6">
        <router-link to="/" class="text-dark-text-secondary hover:text-dark-accent hover:underline underline-offset-4 decoration-dark-accent transition-colors">Home</router-link>
        <router-link to="/about" class="text-dark-text-secondary hover:text-dark-accent hover:underline underline-offset-4 decoration-dark-accent transition-colors">About</router-link>
        <router-link to="/projects" class="text-dark-text-secondary hover:text-dark-accent hover:underline underline-offset-4 decoration-dark-accent transition-colors">Projects</router-link>
        <router-link to="/resume" class="text-dark-text-secondary hover:text-dark-accent hover:underline underline-offset-4 decoration-dark-accent transition-colors">Resume</router-link>
        <router-link to="/contact" class="text-dark-text-secondary hover:text-dark-accent hover:underline underline-offset-4 decoration-dark-accent transition-colors">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
// Basic smooth scroll function (if needed for single-page layout)
// const scrollTo = (selector) => {
//   const element = document.querySelector(selector);
//   if (element) {
//     element.scrollIntoView({ behavior: 'smooth' });
//   }
// };
</script>

<style scoped>
.router-link-active {
  color: #e0e0e0; /* dark-text */
  font-weight: 600;
  text-decoration: underline;
  text-decoration-color: #4f46e5; /* dark-accent */
}
</style>