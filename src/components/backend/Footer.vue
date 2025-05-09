<script setup>
import { Icon } from '@iconify/vue'
</script>

<template>
  <div class="p-8 bg-white">
    <hr class=" border-gray-200" />

    <div class="flex items-center justify-between mt-5">

      <p class="text-sm opacity-50">© Copyright {{ new Date().getFullYear() }}, All Rights Reserved by ChristianDev</p>

      <ul class="flex items-center space-x-3 md:order-3 sm:mt-0">

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
</template>

<script>
</script>
