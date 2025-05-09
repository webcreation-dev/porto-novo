<script setup>
import TopBar from '@/components/backend/TopBar.vue'
import SideBar from '@/components/backend/SideBar.vue'
import Footer from '@/components/backend/Footer.vue'
</script>

<template>

  <div class="min-h-screen bg-app-fondGrid">
    <TopBar />
    <div class="flex py-8 md:pl-8">
      <div class="hidden md:block w-[20%] ">
        <SideBar class=""/>
      </div>
      <div class="w-full md:w-[80%] mx-auto px-8">
        <router-view ></router-view>

        <div class="pt-8">
          <Footer/>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
</script>
