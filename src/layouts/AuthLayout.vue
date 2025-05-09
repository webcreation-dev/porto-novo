<script setup>
</script>

<template>
  <section class="bg-white">
    <div class="grid grid-cols-1 lg:grid-cols-5 h-full">

      <div class="lg:col-span-3 overflow-hidden flex items-center justify-center h-full border-r-4 border-app-principal">
        <img class="w-full mx-auto  object-cover h-full object-center" src="https://www.cyberswat.ca/wp-content/uploads/2017/10/authentification-2etapes-oct2017-opt.jpg" alt="" />
      </div>

      <div class="lg:col-span-2 h-screen overflow-y-auto flex flex-col items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
        <div class="flex flex-col justify-center w-full lg:max-w-lg  h-full">
          <RouterView></RouterView>
        </div>
      </div>

    </div>
  </section>

</template>

<style>
/* we will explain what these classes do next! */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
