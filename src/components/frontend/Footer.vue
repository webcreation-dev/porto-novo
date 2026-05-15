<script setup>
import { Icon } from '@iconify/vue'
import logo from '@/assets/images/logo.png'

const recits = [
  { name: 'frontend.recits.royaume-porto-novo', label: 'Royaume de Porto-Novo' },
  { name: 'frontend.recits.rois-porto-novo',    label: 'Les Rois de Porto-Novo' },
  { name: 'frontend.recits.abomey',             label: 'Royaume d’Abomey' },
  { name: 'frontend.recits.allada',             label: 'Royaume d’Allada' },
  { name: 'frontend.recits.ketou',              label: 'Royaume de Kétou' },
]

const dynastie = [
  { name: 'frontend.dynastie.demesse',    label: 'Dê-Mèssè' },
  { name: 'frontend.dynastie.ayikpe',     label: 'Dê-Ayikpe' },
  { name: 'frontend.dynastie.tognon',     label: 'Dê-Tognon' },
  { name: 'frontend.dynastie.genealogie', label: 'Généalogie' },
]
</script>

<template>
  <footer class="bg-app-dark text-royal-100 mt-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8 pt-16 pb-8">

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

        <div class="lg:col-span-4">
          <router-link :to="{ name: 'frontend.welcome' }" class="inline-flex items-center gap-3">
            <img :src="logo" alt="Dynastie Royale Dê-Mèssè" class="h-14 w-auto" />
            <div class="flex flex-col leading-tight">
              <span class="font-Cormorant text-xl font-semibold text-app-accent">Dynastie Royale</span>
              <span class="font-Cormorant text-sm italic text-royal-200/70 tracking-wider">Dê-Mèssè · Porto-Novo</span>
            </div>
          </router-link>
          <p class="mt-6 text-sm leading-relaxed text-royal-200/80">
            Dédiée à la préservation et à la valorisation de l'héritage historique et culturel
            du Royaume de Porto-Novo et des grandes lignées royales du Bénin.
          </p>
          <div class="flex items-center gap-3 mt-6">
            <a href="#" aria-label="Facebook" class="size-10 flex items-center justify-center border border-royal-700 hover:bg-app-accent hover:border-app-accent hover:text-app-dark transition-colors">
              <Icon icon="mdi:facebook" class="size-5" />
            </a>
            <a href="#" aria-label="Instagram" class="size-10 flex items-center justify-center border border-royal-700 hover:bg-app-accent hover:border-app-accent hover:text-app-dark transition-colors">
              <Icon icon="mdi:instagram" class="size-5" />
            </a>
            <a href="#" aria-label="Twitter" class="size-10 flex items-center justify-center border border-royal-700 hover:bg-app-accent hover:border-app-accent hover:text-app-dark transition-colors">
              <Icon icon="mdi:twitter" class="size-5" />
            </a>
            <a href="#" aria-label="YouTube" class="size-10 flex items-center justify-center border border-royal-700 hover:bg-app-accent hover:border-app-accent hover:text-app-dark transition-colors">
              <Icon icon="mdi:youtube" class="size-5" />
            </a>
          </div>
        </div>

        <div class="lg:col-span-2">
          <h3 class="font-Cormorant text-lg font-semibold text-app-accent mb-5 uppercase tracking-wider">Dynastie</h3>
          <ul class="space-y-3">
            <li v-for="item in dynastie" :key="item.name">
              <router-link
                :to="{ name: item.name }"
                class="text-sm text-royal-200/80 hover:text-app-accent transition-colors"
              >
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <h3 class="font-Cormorant text-lg font-semibold text-app-accent mb-5 uppercase tracking-wider">Récits</h3>
          <ul class="space-y-3">
            <li v-for="item in recits" :key="item.name">
              <router-link
                :to="{ name: item.name }"
                class="text-sm text-royal-200/80 hover:text-app-accent transition-colors"
              >
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <div class="lg:col-span-3">
          <h3 class="font-Cormorant text-lg font-semibold text-app-accent mb-5 uppercase tracking-wider">Contact</h3>
          <ul class="space-y-4 text-sm">
            <li class="flex items-start gap-3">
              <Icon icon="mdi:map-marker" class="size-5 text-app-accent shrink-0 mt-0.5" />
              <span class="text-royal-200/80">Porto-Novo, Bénin</span>
            </li>
            <li class="flex items-start gap-3">
              <Icon icon="mdi:phone" class="size-5 text-app-accent shrink-0 mt-0.5" />
              <a href="tel:+22900000000" class="text-royal-200/80 hover:text-app-accent transition-colors">
                +229 (à compléter)
              </a>
            </li>
            <li class="flex items-start gap-3">
              <Icon icon="mdi:email" class="size-5 text-app-accent shrink-0 mt-0.5" />
              <a href="mailto:contact@dynastieroyale.bj" class="text-royal-200/80 hover:text-app-accent transition-colors break-all">
                contact@dynastieroyale.bj
              </a>
            </li>
          </ul>

          <form @submit.prevent class="mt-6">
            <label class="block text-xs uppercase tracking-wider text-app-accent mb-2 font-semibold">Newsletter</label>
            <div class="flex">
              <input
                type="email"
                placeholder="Votre email"
                class="flex-1 bg-royal-900 border border-royal-700 px-3 py-2.5 text-sm text-royal-100 placeholder-royal-200/40 focus:outline-none focus:border-app-accent"
              />
              <button
                type="submit"
                class="bg-app-accent text-app-dark px-4 hover:bg-royal-300 transition-colors"
                aria-label="S'abonner"
              >
                <Icon icon="mdi:arrow-right" class="size-5" />
              </button>
            </div>
          </form>
        </div>

      </div>

      <hr class="border-royal-700/40 mt-12 mb-6" />

      <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-royal-200/60">
        <p>© {{ new Date().getFullYear() }} Dynastie Royale Dê-Mèssè. Tous droits réservés.</p>
        <p class="font-Cormorant italic">« Au cœur de notre héritage, réside la grandeur. »</p>
      </div>

    </div>
  </footer>
</template>
