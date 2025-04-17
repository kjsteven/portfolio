<template>
  <div class="container mx-auto px-4 py-16 text-center animate-fadeIn">
    <h2 class="text-4xl font-bold mb-6 text-dark-text animate-slideInUp">Resume</h2>
    <p class="mb-8 text-dark-text-secondary max-w-xl mx-auto animate-slideInUp" style="animation-delay: 0.2s;">Interested in learning more about my professional experience? Download my resume for a detailed overview or view the preview below.</p>

    <!-- Resume Preview Image -->
    <div class="mb-8 animate-slideInUp" style="animation-delay: 0.3s;">
      <img src="/resume-preview.png" alt="Resume Preview" class="max-w-sm md:max-w-md lg:max-w-lg mx-auto border border-dark-border rounded-md shadow-lg">
      <!-- Adjust max-w-* classes as needed for desired preview size -->
    </div>

    <!-- Download Button -->
    <div class="animate-slideInUp" style="animation-delay: 0.4s;">
      <a href="/resume.pdf" 
         target="_blank" 
         rel="noopener noreferrer" 
         class="bg-dark-accent hover:opacity-90 text-white font-bold py-3 px-6 rounded-md inline-flex items-center transition-opacity text-lg">
        <svg class="fill-current w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <span>Download Resume</span>
      </a>
    </div>
  </div>
</template>

<script setup>
// No script logic needed
</script>