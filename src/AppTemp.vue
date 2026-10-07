<script setup lang="ts">
import AppHeader from './components/AppHeader.vue'
import HeroSection from './components/HeroSection.vue'
import ServicesSection from './components/ServicesSection.vue'
import PartsSection from './components/PartsSection.vue'
import WorkflowSection from './components/WorkflowSection.vue'
import ErpSection from './components/ErpSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <main>
    <HeroSection />
    <ServicesSection />
    <PartsSection />
    <WorkflowSection />
    <ErpSection />
    <ContactSection />
  </main>
  <AppFooter />
</template>
