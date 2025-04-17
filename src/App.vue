<template>
  <div class="min-h-screen bg-gray-100 text-gray-800">
    <Navbar />
    <main class="pt-16">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>