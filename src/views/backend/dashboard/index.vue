<script setup>
import { ref } from 'vue';

const chartData = ref({});
const chartOptions = ref({});

chartData.value = {
  labels: ['Hommes', 'Femmes', 'Autres'],
  datasets: [
    {
      data: [55, 40, 5],
      backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726'],
      hoverBackgroundColor: ['#64B5F6', '#81C784', '#FFB74D']
    }
  ]
};

chartOptions.value = {
  plugins: {
    legend: {
      position: 'bottom',
      labels: {
        color: '#495057'
      }
    }
  }
};

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

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 lg:grid-cols-4">

      <div class="bg-white px-6 py-10 hover:shadow-lg hover:-translate-y-2 duration-300 ease-in-out cursor-pointer">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500 text-sm mb-2.5">Total 1</p>
            <h3 class="text-4xl font-bold text-gray-800"> <span> + </span> 500 </h3>
          </div>

          <div class="p-3 rounded-full bg-blue-100 text-blue-600">
            <Icon icon="mdi:pharmacy" class="size-6" />
          </div>
        </div>
      </div>

      <div class="bg-white px-6 py-10 hover:shadow-lg hover:-translate-y-2 duration-300 ease-in-out cursor-pointer ">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500 text-sm mb-2.5">Total 2</p>
            <h3 class="text-4xl font-bold text-gray-800"> <span> + </span> 500 </h3>
          </div>
          <div class="p-3 rounded-full bg-green-100 text-green-600">
            <Icon icon="mdi:medication" class="size-6" />
          </div>
        </div>
      </div>

      <div class="bg-white px-6 py-10 hover:shadow-lg hover:-translate-y-2 duration-300 ease-in-out cursor-pointer ">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500 text-sm mb-2.5"> Total 3 </p>
            <h3 class="text-4xl font-bold text-gray-800"> <span> + </span> 500 </h3>
          </div>
          <div class="p-3 rounded-full bg-yellow-100 text-yellow-600">
            <Icon icon="mdi:medication" class="size-6"  />
          </div>
        </div>
      </div>

      <div class="bg-white px-6 py-10 hover:shadow-lg hover:-translate-y-2 duration-300 ease-in-out cursor-pointer">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-gray-500 text-sm mb-2.5">Total 4 </p>
            <h3 class="text-4xl font-bold text-gray-800"> <span> + </span> 500 </h3>
          </div>
          <div class="p-3 rounded-full bg-red-100 text-red-600">
            <Icon icon="mdi:account" class="size-6" />
          </div>
        </div>
      </div>

    </div>


    <div class="grid grid-cols-1 lg:grid-cols-5 items-start gap-8">

      <div class="bg-white lg:col-span-3 p-8 ">

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

      <div class="bg-white lg:col-span-2 p-8">
        <div class="pb-3">
          <h2 class="font-medium opacity-80 text-xl pb-3"> Statistique  </h2>
          <hr>
        </div>
        <div class="flex justify-center">
          <Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-full flex justify-center h-96" />
        </div>
      </div>

    </div>

  </div>
</template>

<style>

</style>
