<template>
  <div class="dark min-h-screen bg-dark-bg text-dark-text font-sans">
    <Navbar @scroll-to="scrollToSection" />
    <main>
      <HeroSection id="home" />
      <AboutSection id="about" />
      <ProjectsSection id="projects" />
      <ResumeSection id="resume" />
      <ContactSection id="contact" />
    </main>
    <!-- Add a Footer component here if desired -->
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
import HeroSection from './views/Home.vue'; // Re-using existing views as sections for now
import AboutSection from './views/About.vue';
import ProjectsSection from './views/Projects.vue';
import ResumeSection from './views/Resume.vue';
import ContactSection from './views/Contact.vue';

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};
</script>

<style>
/* Add global styles or import fonts here */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

html {
  scroll-behavior: smooth; /* Enable basic smooth scrolling */
}

body {
  font-family: 'Inter', sans-serif; /* Example minimalist font */
}

/* Optional: More refined scrollbar for dark theme */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: #1a1a1a; /* dark-bg */
}
::-webkit-scrollbar-thumb {
  background-color: #3a3a3a; /* dark-border */
  border-radius: 3px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #4f46e5; /* dark-accent */
}
</style>