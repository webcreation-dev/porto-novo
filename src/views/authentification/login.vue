<script setup>
import { ref, reactive } from 'vue'

// Accès au router global
import { useRouter } from 'vue-router'
import logo from '@/assets/images/logo.png'
const router = useRouter()

const form = reactive({
  phone: '',
  password: '',
})

const errors = reactive({
  form : null
});

const loading = ref(false);

const submit = async () => {
  try {
    await router.push( { name: 'backend.dashboard' } )
  } catch (error) {
    console.error('Navigation error:', error)
  }
}
</script>

<template>
  <div>

    <img :src="logo" alt="App Logo" class="h-24 w-auto ">

    <div class="flex items-center space-x-2 text-app-principal my-8">
      <span class="block font-bold text-3xl text-app-principal"> Connexion </span>
    </div>

    <form @submit.prevent="submit" action="" class="flex flex-col space-y-10">

      <div>
        <label class="block mb-2"> Téléphone  <span class="text-red-600">*</span> </label>
        <InputText v-model="form.phone" class="w-full !rounded-none !py-3 !px-3" type="text" placeholder="Username"/>
        <div class="text-red-600 mt-1 text-sm" v-if="errors.form?.phone"> {{ errors.form?.phone[0] }}  </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label class="block mb-2"> Mot de passe <span class="text-red-600">*</span> </label>
          <router-link :to="{ name: 'auth.forgot-password' }" class="block mb-2 text-red-600 text-sm"> Mot de passe oublié ? </router-link>
        </div>
        <InputText v-model="form.password" class="w-full !rounded-none !py-3 !px-3" type="password" placeholder="Password" />
        <div class="text-red-600 mt-1 text-sm" v-if="errors.form?.password"> {{ errors.form?.password[0] }} </div>
      </div>

      <div>
        <Button type="submit" class="w-full !rounded-none !py-3 !px-3 !bg-app-principal" icon="pi pi-user" label="Se connecter" />
      </div>

      <div class="flex items-center justify-between">
        <label class="block mb-2"> Vous n'avez pas encore de compte ?  <router-link :to="{ name: 'auth.register' }" class="text-app-principal"> Créer un compte </router-link> </label>
      </div>

    </form>

  </div>
</template>

<style>

</style>
