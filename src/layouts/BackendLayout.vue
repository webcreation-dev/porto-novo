<script setup>
import logo from '@/assets/images/logo.png'
import Footer from '@/components/backend/Footer.vue'
import Toast from 'primevue/toast';

import { ref } from 'vue'
import { useToast } from 'primevue/usetoast';
const toast = useToast();

import { useRoute } from 'vue-router'
const route = useRoute()

// Fonction de notification
const  notifier = (type, titre, message)  => {
  toast.add({ severity: type, summary: titre, detail: message, group: 'br', life: 1000 });
}

// Fonction de logout
const logout = () => {
  try {
    notifier(
      'success',
      'Déconnexion',
      'Vous avez bien été déconnecté'
    );
    // setTimeout (() => {
    //   window.location.href = '/';
    // }, 20)
  } catch (error) {
    console.error('Redirection échouée :', error);
  }
};

// variable pour ouvrir le menu mobile
const visible = ref(false);
const openMobileMenu = () => {
  visible.value = true
}

// variable pour afficher ou masquer le sidebar
const visibleSideBar = ref(false);
const hideShowSideBar = () => {
  visibleSideBar.value = !visibleSideBar.value
}

const menuItems = [
  {
    name: 'Catégories',
    routeName: 'backend.users.index',
    base: 'backend.users',
    icon: 'material-symbols:category-rounded',
  },
  {
    name: 'Actualités',
    routeName: 'backend.users.index',
    base: 'backend.users',
    icon: 'material-symbols:feed-rounded',
  },
  {
    name: 'Projets',
    routeName: 'backend.users.index',
    base: 'backend.users',
    icon: 'material-symbols:work-outline-rounded',
  },
]
const menuSecuriteItems = [
  {
    name: 'Utilisateurs',
    routeName: 'backend.users.index',
    base: 'backend.users',
    icon: 'material-symbols:category-rounded',
  },
  {
    name: 'Permissions',
    routeName: 'backend.users.index',
    base: 'backend.users',
    icon: 'material-symbols:category-rounded',
  },
  {
    name: 'Rôles',
    routeName: 'backend.users.index',
    base: 'backend.users',
    icon: 'material-symbols:category-rounded',
  },
]

</script>

<template>

  <Toast group="br" position="top-right" />

  <div class="min-h-screen bg-app-fondGrid">

    <!-- TopBar -->
      <header class="bg-white sticky top-0 shadow z-50">
      <div class="mx-auto px-2.5 md:px-8 py-3 md:py-6 flex justify-between items-center">
        <div class="flex items-center space-x-2">

          <div class="flex items-center space-x-2">

            <div class="lg:hidden">
                <button class="flex items-center" @click="openMobileMenu">
                  <Icon v-if="!visible" icon="heroicons-solid:menu-alt-3" class="size-8 text-app-principal" />
                  <Icon v-else icon="mingcute:close-fill" class="size-8 text-app-principal" />
                </button>
            </div>

            <div class="hidden lg:block">
                <button class="flex items-center" @click="hideShowSideBar">
                  <Icon v-if="!visibleSideBar" icon="heroicons-solid:menu-alt-3" class="size-8 text-app-principal" />
                  <Icon v-else icon="mingcute:close-fill" class="size-8 text-app-principal" />
                </button>
            </div>

          </div>

          <img :src="logo" alt="App Logo" class="h-10 md:h-16 w-auto">
        </div>

        <div class="flex items-center space-x-4">
          <Avatar label="C" class="mr-2" size="large"/>
          <button @click="logout()" class="flex items-center space-x-2 border-none focus:border-none focus:ring-0 p-3 outline-none text-base font-medium bg-app-principal text-white hover:bg-app-principal/80 transition-all duration-300 ease-in-out">
            <Icon icon="hugeicons:logout-04" class="size-5" />
          </button>
        </div>
      </div>
    </header>
    <!-- EndTopBar -->

    <div class="flex py-8 lg:pl-8" :class="visibleSideBar ? 'lg:pl-0' : 'lg:pl-8'">

      <!-- SideBar -->
      <div class="hidden lg:block w-[20%]" :class="visibleSideBar ? 'w-0' : 'lg:w-[20%]'">
        <aside class="sticky top-32 h-[83vh] overflow-auto">
          <div class="bg-white p-8">
            <nav class="flex flex-col">
              <ul class="space-y-1">
                <li>
                  <router-link
                    :to="{ name: 'backend.dashboard' }"
                    :class=" route.name === 'backend.dashboard' ? 'bg-blue-50 text-app-principal' : '' "
                    class="flex items-center p-2.5 hover:bg-gray-100 font-medium"
                  >
                    <Icon icon="material-symbols:dashboard-rounded" class="size-5" />
                    <span class="ml-3">Tableau de bord</span>
                  </router-link>
                </li>

              </ul>

              <div class="mt-10">
                <h2 class="my-4 text-lg font-semibold"> Menu </h2>
                <ul class="space-y-1">

                  <li v-for="(menu, index) in menuItems" :key="index">
                    <router-link
                      :to="{ name: menu.routeName }"
                      :class=" route.name.includes(menu.base) ? 'bg-blue-50 text-app-principal' : '' "
                      class="flex items-center p-2.5 hover:bg-gray-100 font-medium"
                    >
                      <Icon :icon="menu.icon" class="size-5" />
                      <span class="ml-3"> {{ menu.name }} </span>
                    </router-link>
                  </li>

                </ul>
              </div>

              <div class="mt-20">
                <hr>
                <h2 class="my-4 text-lg font-semibold"> Sécurité </h2>
                <ul class="space-y-1">

                  <li v-for="(item, index) in menuSecuriteItems" :key="index">
                    <router-link
                      :to="{ name: item.routeName }"
                      :class=" route.name.includes(item.base) ? 'bg-blue-50 text-app-principal' : '' "
                      class="flex items-center p-2.5 hover:bg-gray-100 font-medium"
                    >
                      <Icon :icon="item.icon" class="size-5" />
                      <span class="ml-3"> {{ item.name }} </span>
                    </router-link>
                  </li>

                </ul>
              </div>

            </nav>
          </div>
        </aside>
      </div>
      <!-- EndSideBar -->

      <!-- Content -->
      <div class="w-full lg:w-[80%] mx-auto px-2.5  md:px-8" :class="visibleSideBar ? 'lg:w-full' : 'lg:w-[80%]'" >
        <router-view ></router-view>
        <div class="pt-8">
          <Footer/>
        </div>
      </div>
      <!-- EndContent -->

    </div>
  </div>


  <div class="card flex justify-center">
    <Drawer v-model:visible="visible" header="Drawer">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </Drawer>
  </div>

</template>

<script>
</script>
