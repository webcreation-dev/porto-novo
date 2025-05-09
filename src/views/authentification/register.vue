<script setup>
import { ref, reactive } from 'vue'
import logo from '@/assets/images/logo.png'

const form = reactive({
  firstname: '',
  lastname: '',
  phone: '',
  sexe: '',
  password: '',
})

const errors = reactive({
  form : null
});

const sexOptions = [
  { label: 'Masculin', value: 'M' },
  { label: 'Féminin', value: 'F' },
  { label: 'Autre', value: 'O' }
];

const loading = ref(false);

const submit = async () => {
}
</script>

<template>
  <div>

    <img :src="logo" alt="App Logo" class="h-24 w-auto ">

    <div class="flex items-center space-x-2 text-app-principal my-8">
      <span class="block font-bold text-3xl text-app-principal"> Inscription </span>
    </div>

    <form action="" class="flex flex-col space-y-8">

      <div>
        <label class="block mb-2"> Nom  <span class="text-red-600">*</span> </label>
        <InputText v-model="form.firstname" class="w-full !rounded-none !py-3 !px-3" type="text" placeholder="Votre nom"/>
        <div class="text-red-600 mt-1 text-sm" v-if="errors.form?.firstname"> {{ errors.form?.firstname[0] }}  </div>
      </div>

      <div>
        <label class="block mb-2"> Prénom  <span class="text-red-600">*</span> </label>
        <InputText v-model="form.lastname" class="w-full !rounded-none !py-3 !px-3" type="text" placeholder="Votre prrenom"/>
        <div class="text-red-600 mt-1 text-sm" v-if="errors.form?.lastname"> {{ errors.form?.lastname[0] }}  </div>
      </div>

      <div>
        <label class="block mb-2"> Téléphone  <span class="text-red-600">*</span> </label>
        <InputText v-model="form.phone" class="w-full !rounded-none !py-3 !px-3" type="text" placeholder="Votre telephone"/>
        <div class="text-red-600 mt-1 text-sm" v-if="errors.form?.phone"> {{ errors.form?.phone[0] }}  </div>
      </div>

      <div>
        <label class="block mb-2"> Sexe  <span class="text-red-600">*</span> </label>
        <Select v-model="form.sexe" :options="sexOptions" optionLabel="label" optionValue="value" placeholder="Sélectionner le sexe" class="w-full !rounded-none !py-1" />
        <div class="text-red-600 mt-1 text-sm" v-if="errors.form?.phone"> {{ errors.form?.phone[0] }}  </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label class="block mb-2"> Mot de passe <span class="text-red-600">*</span> </label>
        </div>
        <InputText v-model="form.password" class="w-full !rounded-none !py-3 !px-3" type="password" placeholder="Mot de passe" />
        <div class="text-red-600 mt-1 text-sm" v-if="errors.form?.password"> {{ errors.form?.password[0] }} </div>
      </div>

      <div>
        <Button type="submit" class="w-full !rounded-none !py-3 !px-3 !bg-app-principal" icon="pi pi-user" label="S'inscrire" />
      </div>

      <div class="flex items-center justify-between">
        <label class="block mb-2"> Vous avez déja un compte ?  <router-link :to="{ name: 'auth.login' }" class="text-app-principal"> Se connecter </router-link> </label>
      </div>

    </form>

  </div>
</template>

<style>

</style>
