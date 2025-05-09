<script setup>
import { useRoute } from 'vue-router'
const route = useRoute()

</script>

<template>
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
            <li>
              <router-link
                :to="{ name: 'backend.users.index' }"
                :class=" route.name.includes('backend.users') ? 'bg-blue-50 text-app-principal' : '' "
                class="flex items-center p-2.5 hover:bg-gray-100 font-medium"
              >
                <Icon icon="material-symbols:group-rounded" class="size-5" />
                <span class="ml-3"> Catégories </span>
              </router-link>
            </li>

            <li>
              <router-link
                :to="{ name: 'backend.users.index' }"
                :class=" route.name.includes('backend.users') ? 'bg-blue-50 text-app-principal' : '' "
                class="flex items-center p-2.5 hover:bg-gray-100 font-medium"
              >
                <Icon icon="material-symbols:group-rounded" class="size-5" />
                <span class="ml-3"> Actualités </span>
              </router-link>
            </li>

            <li>
              <router-link
                :to="{ name: 'backend.users.index' }"
                :class=" route.name.includes('backend.users') ? 'bg-blue-50 text-app-principal' : '' "
                class="flex items-center p-2.5 hover:bg-gray-100 font-medium"
              >
                <Icon icon="material-symbols:group-rounded" class="size-5" />
                <span class="ml-3"> Projets </span>
              </router-link>
            </li>

          </ul>
        </div>

        <div class="mt-20">
          <hr>
          <h2 class="my-4 text-lg font-semibold"> Sécurité </h2>
          <ul class="space-y-1">

            <li>
              <router-link
                :to="{ name: 'backend.users.index' }"
                :class=" route.name.includes('backend.users') ? 'bg-blue-50 text-app-principal' : '' "
                class="flex items-center p-2.5 hover:bg-gray-100 font-medium"
              >
                <Icon icon="material-symbols:group-rounded" class="size-5" />
                <span class="ml-3"> Utilisateurs </span>
              </router-link>
            </li>

            <li>
              <router-link
                :to="{ name: 'backend.users.index' }"
                :class=" route.name.includes('backend.users') ? 'bg-blue-50 text-app-principal' : '' "
                class="flex items-center p-2.5 hover:bg-gray-100 font-medium"
              >
                <Icon icon="material-symbols:group-rounded" class="size-5" />
                <span class="ml-3"> Permissions </span>
              </router-link>
            </li>

            <li>
              <router-link
                :to="{ name: 'backend.users.index' }"
                :class=" route.name.includes('backend.users') ? 'bg-blue-50 text-app-principal' : '' "
                class="flex items-center p-2.5 hover:bg-gray-100 font-medium"
              >
                <Icon icon="material-symbols:group-rounded" class="size-5" />
                <span class="ml-3"> Rôles </span>
              </router-link>
            </li>

          </ul>
        </div>

      </nav>
    </div>
  </aside>
</template>

<script>
</script>
