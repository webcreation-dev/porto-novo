<script setup>
import logo from '@/assets/images/logo.png'
import { ref } from 'vue'

// Accès à la route courante
import { useRoute } from 'vue-router'
const route = useRoute()


const isActive = ref(false)

function toggleMenu() {
  isActive.value = !isActive.value
}
</script>

<template>

  <div class="shadow-xl fixed top-0 w-full !z-50 bg-white">
    <div class="px-2.5 md:px-6 lg:px-16 max-w-7xl mx-auto py-2">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-center py-4 w-full">

        <div class="flex items-center justify-between w-full lg:pb-0 ">

          <router-link :to="{ name: 'frontend.welcome' }">
            <img :src="logo" alt="App Logo" class="h-10 w-auto ">
          </router-link>

          <div class="flex lg:hidden">
            <button class="flex items-center" @click="toggleMenu">
              <Icon v-if="!isActive" icon="heroicons-solid:menu-alt-3" class="size-8 text-app-principal" />
              <Icon v-else icon="mingcute:close-fill" class="size-8 text-app-principal" />
            </button>
          </div>

        </div>

        <div :class="[isActive ? 'block pt-5' : 'hidden', 'lg:block']">

          <div class="flex flex-col  lg:flex-row lg:items-center  space-y-4 lg:space-y-0 space-x-0 lg:space-x-6  border-t-4 lg:border-t-0 pt-5 lg:pt-0 border-app-principal ">

            <div>
              <router-link
                :to="{ name: 'frontend.welcome' }"
                :class=" route.name === 'frontend.welcome' ? 'text-app-principal' : '' "
                class="font-semibold text-sm hover:text-app-principal transition-all duration-500 ease-in-out lg:p-2.5 text-nowrap"
              >
                Accueil
              </router-link>
            </div>

            <div>
              <router-link
                :to="{ name: 'frontend.apropos' }"
                :class=" route.name === 'frontend.apropos' ? 'text-app-principal' : '' "
                class="font-semibold text-sm hover:text-app-principal transition-all duration-500 ease-in-out lg:p-2.5 text-nowrap"
              >
                A propos
              </router-link>
            </div>

            <div>
              <router-link
                :to=" { name: 'frontend.faqs' } "
                :class=" route.name === 'frontend.faqs' ? 'text-app-principal' : '' "
                class="font-semibold text-sm hover:text-app-principal transition-all duration-500 ease-in-out lg:p-2.5 text-nowrap"
              >
                Faqs
              </router-link>
            </div>

            <div>
              <router-link
                :to=" { name: 'frontend.contact' } "
                :class=" route.name.includes('contact') ? 'text-app-principal' : '' "
                class="font-semibold text-sm hover:text-app-principal transition-all duration-500 ease-in-out lg:p-2.5 text-nowrap"
              >
                Contacts
              </router-link>
            </div>

            <div>
              <router-link
                :to=" { name: 'auth.login' } "
                class="font-semibold text-sm bg-app-principal text-white transition-all duration-500 ease-in-out lg:p-2.5 text-nowrap"
              >
                Se connecter
              </router-link>
            </div>

          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
</script>
