<script setup>

const props = defineProps({
  title: {
    type: String,
  },
});

</script>

<template>
  <div class="relative mb-8 md:mb-10 lg:mb-24 z-10">
    <div class="bg-[url('https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg')] bg-cover bg-no-repeat bg-center">
      <div class="bg-gradient-to-r from-app-principal/80 to-app-principal/50 py-16 md:py-16">
        <div class="px-2.5 md:px-6 lg:px-16 max-w-7xl mx-auto w-full h-full">

              <span class="bg-white rounded p-1 text-[10px] font-bold text-app-principal"> my-app </span>
          <div class="flex flex-col text-white w-min" data-aos="fade-down">
            <h2  class="font-extrabold text-xl md:text-5xl pb-4 inline-block text-white text-nowrap">
              {{ title }}
            </h2>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
