<template>
  <div class="container mx-auto px-4 py-16 animate-fadeIn">
    <h2 class="text-4xl font-bold mb-10 text-center text-dark-text animate-slideInUp">About Me</h2>
    <div class="flex flex-col md:flex-row items-start gap-10">
      <!-- Optional: Add img tag here, style it (e.g., rounded-full w-48 h-48 object-cover mx-auto md:mx-0 mb-6 md:mb-0 animate-slideInUp) -->
      <!-- <img src="/path/to/your/picture.jpg" alt="Your Name" class="rounded-lg w-64 h-auto object-cover mx-auto md:mx-0 mb-6 md:mb-0 animate-slideInUp" style="animation-delay: 0.2s;"/> -->
      <div class="flex-1 animate-slideInUp" style="animation-delay: 0.4s;">
        <p class="mb-6 text-dark-text-secondary leading-relaxed">[Your Short Bio Here - Expand on your passion, experience, and what drives you. Make it engaging!]</p>
        <h3 class="text-2xl font-semibold mb-4 text-dark-text">Skills</h3>
        <ul class="flex flex-wrap gap-3">
          <!-- Add your skills here, optionally with icons -->
          <li class="bg-dark-card px-4 py-2 rounded-md text-dark-text-secondary border border-dark-border">HTML</li>
          <li class="bg-dark-card px-4 py-2 rounded-md text-dark-text-secondary border border-dark-border">CSS</li>
          <li class="bg-dark-card px-4 py-2 rounded-md text-dark-text-secondary border border-dark-border">JavaScript</li>
          <li class="bg-dark-card px-4 py-2 rounded-md text-dark-text-secondary border border-dark-border">Laravel</li>
          <li class="bg-dark-card px-4 py-2 rounded-md text-dark-text-secondary border border-dark-border">Vue.js</li>
          <li class="bg-dark-card px-4 py-2 rounded-md text-dark-text-secondary border border-dark-border">Tailwind CSS</li>
          <li class="bg-dark-card px-4 py-2 rounded-md text-dark-text-secondary border border-dark-border">Git</li>
          <!-- Add more skills -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
// No script logic needed for this static section yet
</script>