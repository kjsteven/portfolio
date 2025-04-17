<template>
  <nav class="fixed top-0 left-0 right-0 bg-white shadow-md h-16 z-50">
    <div class="container mx-auto px-4 h-full flex justify-between items-center">
      <router-link to="/" class="text-xl font-semibold hover:underline">My Portfolio</router-link>
      <div class="space-x-4">
        <router-link to="/" class="hover:underline">Home</router-link>
        <router-link to="/about" class="hover:underline">About</router-link>
        <router-link to="/projects" class="hover:underline">Projects</router-link>
        <router-link to="/resume" class="hover:underline">Resume</router-link>
        <router-link to="/contact" class="hover:underline">Contact</router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
// No script logic needed for this simple navbar yet
</script>

<style scoped>
/* Add any component-specific styles here if needed */
.router-link-active {
  font-weight: bold;
  /* Add other active link styles */
}
</style>