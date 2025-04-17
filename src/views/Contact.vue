<template>
  <div class="container mx-auto px-4 py-16 animate-fadeIn">
    <h2 class="text-4xl font-bold mb-10 text-center text-dark-text animate-slideInUp">Get In Touch</h2>
    <p class="text-center text-dark-text-secondary mb-10 max-w-2xl mx-auto animate-slideInUp" style="animation-delay: 0.2s;">
      Have a question, a project idea, or just want to connect? Feel free to send me a message!
    </p>
    <form 
      action="YOUR_FORMSPREE_ENDPOINT" 
      method="POST" 
      class="max-w-lg mx-auto bg-dark-card p-8 rounded-lg shadow-lg border border-dark-border animate-slideInUp" 
      style="animation-delay: 0.4s;">
      
      <div class="mb-5">
        <label for="name" class="block text-dark-text-secondary font-medium mb-2">Name</label>
        <input type="text" id="name" name="name" required 
               class="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-md text-dark-text focus:outline-none focus:ring-2 focus:ring-dark-accent focus:border-transparent transition-colors">
      </div>
      
      <div class="mb-5">
        <label for="email" class="block text-dark-text-secondary font-medium mb-2">Email</label>
        <input type="email" id="email" name="email" required
               class="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-md text-dark-text focus:outline-none focus:ring-2 focus:ring-dark-accent focus:border-transparent transition-colors">
      </div>
      
      <div class="mb-6">
        <label for="message" class="block text-dark-text-secondary font-medium mb-2">Message</label>
        <textarea id="message" name="message" rows="5" required
                  class="w-full px-4 py-2 bg-dark-bg border border-dark-border rounded-md text-dark-text focus:outline-none focus:ring-2 focus:ring-dark-accent focus:border-transparent transition-colors resize-none"></textarea>
      </div>
      
      <div class="text-center">
        <button type="submit" 
                class="bg-dark-accent hover:opacity-90 text-white font-bold py-3 px-6 rounded-md focus:outline-none focus:shadow-outline transition-opacity w-full md:w-auto">
          Send Message
        </button>
      </div>
    </form>
    <p class="text-center mt-6 text-sm text-dark-text-secondary animate-slideInUp" style="animation-delay: 0.6s;">
      Remember to replace 'YOUR_FORMSPREE_ENDPOINT' in the form action!
    </p>
  </div>
</template>

<script setup>
// Add logic for form submission handling (e.g., with EmailJS or custom backend) if not using Formspree's default action
</script>