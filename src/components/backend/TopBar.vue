<script setup>
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import logo from '@/assets/images/logo.png'
import { ref } from 'vue'
const toast = useToast();

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

</script>

<template>
  <Toast group="br" position="bottom-right" />

  <header class="bg-white sticky top-0 shadow z-50">
    <div class="mx-auto px-8 py-6 flex justify-between items-center">
      <div class="flex items-center space-x-2 border ">

        <button class="flex items-center" @click="openMobileMenu">
          <Icon v-if="!visible" icon="heroicons-solid:menu-alt-3" class="size-8 text-app-principal" />
          <Icon v-else icon="mingcute:close-fill" class="size-8 text-app-principal" />
        </button>

        <img :src="logo" alt="App Logo" class="h-16 w-auto">
      </div>

      <div class="flex items-center space-x-4">
        <div class="flex flex-col justify-end text-sm">
          <span class="text-end opacity-50"> Christian Assogba </span>
          <span class="text-xs text-end opacity-50 ">  ROLE : Concepteur </span>
        </div>
        <Avatar label="C" class="mr-2" size="large"/>
        <button @click="logout()" class="flex items-center space-x-2 border-none focus:border-none focus:ring-0 p-3 outline-none text-base font-medium bg-app-principal text-white hover:bg-app-principal/80 transition-all duration-300 ease-in-out">
          <Icon icon="hugeicons:logout-04" class="size-5" />
          <span>Déconnexion</span>
        </button>
      </div>
    </div>
  </header>

</template>

<script>
</script>
