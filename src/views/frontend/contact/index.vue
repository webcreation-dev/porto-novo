<script setup>
import  Banner from '@/components/frontend/Banner.vue'
</script>

<template>

  <Banner title="Contactez-nous" subtitle="Contactez-nous" />

    <div class="px-2.5 md:px-6 lg:px-16 max-w-7xl mx-auto">

      <div class="flex flex-col md:flex-row justify-between relative">

        <div class="flex flex-col justify-center lg:w-1/3 bg-app-principal p-5 md:p-10 space-y-4 text-white ">
          <h2 class="font-bold text-2xl"> Coordonnées </h2>
          <div class="flex flex-col space-y-3">
            <div class="flex flex-col md:flex-row items-center space-x-2 px-5 py-2.5 bg-app-principal drop-shadow-xl">
              <Icon icon="akar-icons:location" class="size-6" />
              <span class="text-xs"> Abomey-Calavi, Bénin </span>
            </div>
            <div class="flex flex-col md:flex-row items-center space-x-2 px-5 py-2.5 bg-app-principal drop-shadow-xl">
              <Icon icon="lets-icons:e-mail" class="size-6" />
              <span class="text-xs"> contact@mail.app </span>
            </div>
            <div class="flex flex-col md:flex-row items-center space-x-2 px-5 py-2.5 bg-app-principal drop-shadow-xl">
              <Icon icon="map:volume-control-telephone" class="size-6" />
              <span class="text-xs"> +229 67 66 67 43 </span>
            </div>
            <div class="flex flex-col md:flex-row items-center space-x-2 px-5 py-2.5 bg-app-principal drop-shadow-xl">
              <Icon icon="hugeicons:timer-02" class="size-6" />
              <span class="text-xs"> 08H - 12H & 14H - 18H</span>
            </div>
            <div class="flex flex-col md:flex-row items-center space-x-2 px-5 py-2.5 bg-app-principal drop-shadow-xl">
              <Icon icon="solar:calendar-date-outline" class="size-6" />
              <span class="text-xs"> Lundi - Vendredi </span>
            </div>
          </div>
        </div>

        <div class=" bg-white lg:w-2/3 border-app-principal p-5 border-b-5 md:border-b-0 md:border-r-5 lg:border-r-0 md:px-10  md:pt-10">
          <form action="">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-col space-y-1 mb-4">
                <label class="opacity-50 text-sm"> Nom </label>
                <input class="py-2 px-4 bg-gray-100  focus:border-0 focus:ring-0 focus:outline-none " type="text">
              </div>
              <div class="flex flex-col space-y-1 mb-4">
                <label class="opacity-50 text-sm"> Prénom </label>
                <input class="py-2 px-4 bg-gray-100  focus:border-0 focus:ring-0 focus:outline-none " type="text">
              </div>
            </div>

            <div class="flex flex-col space-y-1 mb-4">
              <label class="opacity-50 text-sm"> Email </label>
              <input class="py-2 px-4 bg-gray-100  focus:border-0 focus:ring-0 focus:outline-none " type="text">
            </div>

            <div class="flex flex-col space-y-1 mb-4">
              <label class="opacity-50 text-sm"> Messages </label>
              <textarea class="py-2 px-4 bg-gray-100 focus:border-0 focus:ring-0 focus:outline-none" rows="5">
              </textarea>
            </div>

            <div class="flex justify-end">
              <Button label="Envoyer" icon="pi pi-send"  class="!rounded-none !bg-app-principal "/>
            </div>
          </form>
        </div>

      </div>

    </div>

</template>

<style>

</style>
