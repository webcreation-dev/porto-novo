<script setup>
import Navbar from '@/components/frontend/Navbar.vue'
import Footer from '@/components/frontend/Footer.vue'
</script>

<template>

  <Navbar/>
  <div class="mt-[60px] lg:mt-[80px] mb-10 lg:mb-24">
    <RouterView></RouterView>
  </div>
  <Footer/>

</template>

<script>
</script>
