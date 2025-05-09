<script setup>
import { ref } from 'vue'
const users = ref([
  { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
  { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'User' },
  { id: 4, name: 'Diane', email: 'diane@example.com', role: 'Moderator' },
  { id: 5, name: 'Eric', email: 'eric@example.com', role: 'Admin' },
  { id: 6, name: 'Fiona', email: 'fiona@example.com', role: 'User' },
]);

</script>

<template>
  <div class="">
    <div class="bg-white p-8 ">

      <div class="flex items-center justify-between pb-6">
        <h2 class="text-3xl font-medium text-gray-800 mb-6"> Liste des récentes inscriptions </h2>
        <router-link :to="{ name: 'backend.users.index' }" class="flex items-center space-x-2 border-none focus:border-none focus:ring-0 p-2.5 outline-none text-base font-medium bg-app-vert text-white">
          <Icon icon="fluent-mdl2:data-management-settings" class="size-5" />
          <span> Gérer les stocks </span>
        </router-link>
      </div>

      <DataTable :value="users" :paginator="false" :rows="5" responsiveLayout="scroll">
        <Column field="id" header="ID"></Column>
        <Column field="name" header="Nom"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="role" header="Rôle"></Column>
      </DataTable>
    </div>
  </div>
</template>

<style>

</style>
