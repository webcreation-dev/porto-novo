<script setup>

const props = defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  }
});

</script>

<template>
  <div class="px-2.5 md:px-6 lg:px-16 max-w-7xl mx-auto w-full h-full py-16">
    <div class="flex flex-col  justify-between items-center text-app-principal" data-aos="fade-down">
      <h2  class="font-extrabold text-xl md:text-2xl pb-4 text-nowrap">
        {{ title }}
      </h2>

      <p class="text-center pb-6">
        {{ description }}
      </p>

      <div class="w-[100px] h-[2.5px] bg-app-principal"></div>

    </div>
  </div>
</template>

<style></style>
