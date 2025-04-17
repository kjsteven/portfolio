<template>
  <div class="dark min-h-screen bg-dark-bg text-dark-text">
    <Navbar />
    <main class="pt-16">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <!-- Add a Footer component here if desired -->
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
// Add import for Footer if you create one
</script>

<style>
/* Global transition styles */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Basic scrollbar styling for dark theme (optional) */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #2a2a2a; /* dark-card */
}

::-webkit-scrollbar-thumb {
  background-color: #4f46e5; /* dark-accent */
  border-radius: 4px;
  border: 2px solid #2a2a2a; /* dark-card */
}
</style>