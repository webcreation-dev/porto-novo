<script setup>
import { Icon } from '@iconify/vue'
import logo from '@/assets/images/logo.png'
</script>

<template>

  <footer>
    <section class="py-10 bg-bleuFonce text-white sm:pt-16 lg:pt-24">
      <div class="px-2.5 md:px-6 lg:px-16 max-w-7xl mx-auto">

        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-y-12 gap-x-8 xl:gap-x-12">
          <div class="col-span-2 md:col-span-4 xl:pr-8">

            <img :src="logo" alt="App Logo" class="h-10 w-auto ">

            <img class="w-auto h-9 hidden" src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg" alt="" />

            <p class="text-base leading-relaxed mt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

            <a href="#" title="" class="inline-flex items-center justify-center p-2.5  space-x-2 text-white transition-all duration-200 bg-app-principal hover:bg-app-principal/90 focus:bg-app-principal/90 mt-7">
              <Icon icon="lucide:mail" class="size-auto text-white" />
              <span>Nous Rejoindre</span>
            </a>
          </div>

          <div class="lg:col-span-2">
            <p class="text-base font-semibold">Company</p>

            <ul class="mt-6 space-y-5">
              <li>
                <a href="#" title="" class="flex text-sm transition-all duration-200 hover:text-app-principal focus:text-app-principal"> About </a>
              </li>

              <li>
                <a href="#" title="" class="flex text-sm transition-all duration-200 hover:text-app-principal focus:text-app-principal"> Features </a>
              </li>

              <li>
                <a href="#" title="" class="flex text-sm transition-all duration-200 hover:text-app-principal focus:text-app-principal"> Works </a>
              </li>

              <li>
                <a href="#" title="" class="flex text-sm transition-all duration-200 hover:text-app-principal focus:text-app-principal"> Career </a>
              </li>
            </ul>
          </div>

          <div class="lg:col-span-2">
            <p class="text-base font-semibold">Help</p>

            <ul class="mt-6 space-y-4">
              <li>
                <a href="#" title="" class="flex text-sm transition-all duration-200 hover:text-app-principal focus:text-app-principal"> Customer Support </a>
              </li>

              <li>
                <a href="#" title="" class="flex text-sm transition-all duration-200 hover:text-app-principal focus:text-app-principal"> Delivery Details </a>
              </li>

              <li>
                <a href="#" title="" class="flex text-sm transition-all duration-200 hover:text-app-principal focus:text-app-principal"> Terms & Conditions </a>
              </li>

              <li>
                <a href="#" title="" class="flex text-sm transition-all duration-200 hover:text-app-principal focus:text-app-principal"> Privacy Policy </a>
              </li>
            </ul>
          </div>

          <div class="lg:col-span-2">
            <p class="text-base font-semibold">Resources</p>

            <ul class="mt-6 space-y-5">
              <li>
                <a href="#" title="" class="flex text-sm transition-all duration-200 hover:text-app-principal focus:text-app-principal"> Free eBooks </a>
              </li>

              <li>
                <a href="#" title="" class="flex text-sm transition-all duration-200 hover:text-app-principal focus:text-app-principal"> Development Tutorial </a>
              </li>

              <li>
                <a href="#" title="" class="flex text-sm transition-all duration-200 hover:text-app-principal focus:text-app-principal"> How to - Blog </a>
              </li>

              <li>
                <a href="#" title="" class="flex text-sm transition-all duration-200 hover:text-app-principal focus:text-app-principal"> YouTube Playlist </a>
              </li>
            </ul>
          </div>

          <div class="lg:col-span-2">
            <p class="text-base font-semibold">Extra Links</p>

            <ul class="mt-6 space-y-5">
              <li>
                <a href="#" title="" class="flex text-sm transition-all duration-200 hover:text-app-principal focus:text-app-principal"> Customer Support </a>
              </li>

              <li>
                <a href="#" title="" class="flex text-sm transition-all duration-200 hover:text-app-principal focus:text-app-principal"> Delivery Details </a>
              </li>

              <li>
                <a href="#" title="" class="flex text-sm transition-all duration-200 hover:text-app-principal focus:text-app-principal"> Terms & Conditions </a>
              </li>

              <li>
                <a href="#" title="" class="flex text-sm transition-all duration-200 hover:text-app-principal focus:text-app-principal"> Privacy Policy </a>
              </li>
            </ul>
          </div>
        </div>

        <hr class="mt-16 mb-10 border-gray-200" />

        <div class="sm:flex sm:items-center sm:justify-between">

          <p class="text-sm opacity-50">© Copyright {{ new Date().getFullYear() }}, All Rights Reserved by ChristianDev</p>

          <ul class="flex items-center mt-5 space-x-3 md:order-3 sm:mt-0">

            <li>
              <a
                href="#"
                title=""
                class="flex items-center justify-center transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-app-principal hover:text-white focus:text-white hover:bg-app-principal hover:border-app-principal focus:border-app-principal"
              >
                <Icon icon="lucide:twitter" class="w-4 h-4" />
              </a>
            </li>

            <li>
              <a
                href="#"
                title=""
                class="flex items-center justify-center transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-app-principal hover:text-white focus:text-white hover:bg-app-principal hover:border-app-principal focus:border-app-principal"
              >
                <Icon icon="lucide:facebook" class="w-4 h-4" />
              </a>
            </li>

            <li>
              <a
                href="#"
                title=""
                class="flex items-center justify-center transition-all duration-200 bg-transparent border border-gray-300 rounded-full w-7 h-7 focus:bg-app-principal hover:text-white focus:text-white hover:bg-app-principal hover:border-app-principal focus:border-app-principal"
              >
                <Icon icon="lucide:instagram" class="size-4 " />
              </a>
            </li>

          </ul>

        </div>

      </div>
    </section>

  </footer>

  <footer class="hidden">
    <div class="bg-[#353D40] pt-10 lg:pt-12 text-white">
      <div class="px-2.5 md:px-6 lg:px-16 max-w-7xl mx-auto">

        <div class="flex flex-col lg:flex-row justify-center items-center lg:justify-between mt-10 lg:mt-0">

          <div class="text-center lg:text-start ">
            <div class="flex flex-col">
              <div class="flex items-center justify-start space-x-4 font-bold mb-1">
                <a href=""> Accueil </a>
                <span> - </span>
                <a href=""> Nos services </a>
                <span> - </span>
                <a href=""> A propos </a>
                <span> - </span>
                <a href=""> Contact </a>
              </div>
              <span class="block">© <a href="" class="font-semibold"> MyAppStarter </a> - 2025  |  Tous droits réservés </span>
            </div>
          </div>

          <div class="flex items-center justify-center space-x-4">
            <a href="#" target="_blank">
              <Icon icon="bxl:facebook"  class="size-12  bg-white text-app-principal rounded p-2 " />
            </a>
            <a href="#" target="_blank">
              <Icon icon="bxl:linkedin"  class="size-12  bg-white text-app-principal rounded p-2 " />
            </a>
          </div>

        </div>
      </div>

      <div class="flex px-2.5 md:px-6 lg:px-16 max-w-7xl mx-auto pt-10 lg:pt-12">
      </div>
    </div>
  </footer>
</template>

<script>
</script>
