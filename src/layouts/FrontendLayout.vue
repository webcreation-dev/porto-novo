<script setup>
import Navbar from '@/components/frontend/Navbar.vue'
import Footer from '@/components/frontend/Footer.vue'
</script>

<template>
  <Navbar />
  <main class="pt-20 min-h-[60vh]">
    <RouterView />
  </main>
  <Footer />
</template>
