<template>
  <div class="container mx-auto px-4 py-16 animate-fadeIn">
    <h2 class="text-4xl font-bold mb-10 text-center text-dark-text animate-slideInUp">Projects</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      <!-- Project Card Example -->
      <div class="bg-dark-card p-6 rounded-lg shadow-lg border border-dark-border transform hover:scale-[1.02] transition-transform duration-300 animate-slideInUp" style="animation-delay: 0.2s;">
        <h3 class="text-xl font-semibold mb-2 text-dark-text">Project Title 1</h3>
        <p class="text-dark-text-secondary mb-4 text-sm">[Short, impactful description of the project and its purpose.]</p>
        <div class="mb-4">
          <span class="text-sm font-semibold text-dark-text">Tech Stack:</span>
          <ul class="flex flex-wrap gap-2 mt-2">
            <li class="bg-gray-700 px-2 py-0.5 rounded text-xs text-dark-text-secondary">Vue.js</li>
            <li class="bg-gray-700 px-2 py-0.5 rounded text-xs text-dark-text-secondary">Tailwind CSS</li>
            <li class="bg-gray-700 px-2 py-0.5 rounded text-xs text-dark-text-secondary">Vercel</li>
            <!-- Add more tech -->
          </ul>
        </div>
        <div class="flex space-x-4 mt-auto pt-4 border-t border-dark-border">
          <a href="#" target="_blank" rel="noopener noreferrer" class="text-dark-accent hover:underline">GitHub</a>
          <a href="#" target="_blank" rel="noopener noreferrer" class="text-dark-accent hover:underline">Live Demo</a>
        </div>
      </div>
      <!-- Add more project cards here, varying animation-delay (e.g., 0.3s, 0.4s) -->
       <div class="bg-dark-card p-6 rounded-lg shadow-lg border border-dark-border transform hover:scale-[1.02] transition-transform duration-300 animate-slideInUp" style="animation-delay: 0.3s;">
        <h3 class="text-xl font-semibold mb-2 text-dark-text">Project Title 2</h3>
        <p class="text-dark-text-secondary mb-4 text-sm">[Another great project description.]</p>
        <div class="mb-4">
          <span class="text-sm font-semibold text-dark-text">Tech Stack:</span>
          <ul class="flex flex-wrap gap-2 mt-2">
            <li class="bg-gray-700 px-2 py-0.5 rounded text-xs text-dark-text-secondary">React</li>
            <li class="bg-gray-700 px-2 py-0.5 rounded text-xs text-dark-text-secondary">Node.js</li>
          </ul>
        </div>
        <div class="flex space-x-4 mt-auto pt-4 border-t border-dark-border">
          <a href="#" target="_blank" rel="noopener noreferrer" class="text-dark-accent hover:underline">GitHub</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// You might fetch project data here later
</script>