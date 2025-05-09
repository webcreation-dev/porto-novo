<script setup>
import { ref, reactive } from 'vue'
import logo from '@/assets/images/logo.png'

const form = reactive({
  phone: '',
  password: '',
})

const errors = reactive({
  form : null
});

const loading = ref(false);

const submit = async () => {
}
</script>

<template>
  <div>

    <img :src="logo" alt="App Logo" class="h-24 w-auto ">

    <div class="flex items-center space-x-2 text-app-principal my-8">
      <span class="block font-bold text-3xl text-app-principal"> Mot de passe oublié ! </span>
    </div>

    <form action="" class="flex flex-col space-y-10">

      <div>
        <label class="block mb-2"> Téléphone / Email  <span class="text-red-600">*</span> </label>
        <InputText v-model="form.phone" class="w-full !rounded-none !py-3 !px-3" type="text" placeholder="Username"/>
        <div class="text-red-600 mt-1 text-sm" v-if="errors.form?.phone"> {{ errors.form?.phone[0] }}  </div>
      </div>

      <div>
        <Button type="submit" class="w-full !rounded-none !py-3 !px-3 !bg-app-principal" icon="pi pi-user" label="Envoyer" />
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <router-link :to="{ name: 'auth.register' }" class="opacity-50 text-lg  hover:text-app-principal"> Créer un compte </router-link>
          <span class="mx-2">/</span>
          <router-link :to="{ name: 'auth.login' }" class="opacity-50 text-lg  hover:text-app-principal"> Se connecter </router-link>
        </div>
      </div>

    </form>

  </div>
</template>

<style>

</style>
