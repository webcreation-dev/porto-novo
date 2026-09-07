<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import logo from '@/assets/images/logo.png'

const route = useRoute()
const mobileOpen = ref(false)

// Mega menu "Dynastie Royale Dê-Mèssè"
const dynastieLignees = [
  { name: 'frontend.dynastie.demesse',        label: 'Dê-Mèssè' },
  { name: 'frontend.dynastie.ayikpe',         label: 'Dê-Ayikpe' },
  { name: 'frontend.dynastie.gounnou-kini',   label: 'Gounnou-Kini-Wannan' },
  { name: 'frontend.dynastie.houssou-gandin', label: 'Houssou Gandin' },
  { name: 'frontend.dynastie.sounwin-akponi', label: 'Sounwin-Akponi' },
  { name: 'frontend.dynastie.gnonlonfoun',    label: 'Gnonlonfoun' },
  { name: 'frontend.dynastie.sokou',          label: 'Sokou' },
  { name: 'frontend.dynastie.kodjo',          label: 'Kodjo' },
  { name: 'frontend.dynastie.menou',          label: 'Mènou' },
  { name: 'frontend.dynastie.affokpa',        label: 'Affokpa' },
  { name: 'frontend.dynastie.ahouanhode',     label: 'Ahouanhode' },
  { name: 'frontend.dynastie.tognon',         label: 'Dê-Tognon' },
  { name: 'frontend.dynastie.mikpone',        label: 'Dê-Mikpon' },
  { name: 'frontend.dynastie.histoire-qa',    label: 'Histoire en questions & reponses' },
]

const recits = [
  { name: 'frontend.recits.te-agbanlin',      label: 'Tê Agbanlin' },
  { name: 'frontend.recits.de-hiakpon',        label: 'Dê-Hiakpon' },
  { name: 'frontend.recits.lokpon',           label: 'Dê-Lokpon' },
  { name: 'frontend.recits.houde',            label: 'Dê-Houde' },
  { name: 'frontend.recits.houyi',            label: 'Dê-Houyi' },
  { name: 'frontend.recits.te-ada',           label: 'Tè Ada' },
  { name: 'frontend.recits.te-vossou',        label: 'Tè Vossou' },
  { name: 'frontend.recits.te-wokou',         label: 'Tè Wokou' },
  { name: 'frontend.recits.kpotozounmey',     label: 'Dê-Kpotozounmey' },
  { name: 'frontend.recits.kpodagba',         label: 'Dê-Kpodagba' },
  { name: 'frontend.recits.royaume-hogbonou', label: 'Le Royaume de Hogbonou' },
  { name: 'frontend.recits.allada',           label: 'Le Royaume d\'Allada' },
  { name: 'frontend.recits.abomey',           label: 'Le Royaume d\'Abomey' },
  { name: 'frontend.recits.ketou',            label: 'Le Royaume de Ketou' },
  { name: 'frontend.recits.le-benin',         label: 'Le Benin' },
  { name: 'frontend.recits.histoire-oyo',     label: 'Histoire d\'Oyo' },
  { name: 'frontend.recits.autres-royaumes',  label: 'Autres Royaumes' },
]

const patrimoines = [
  { name: 'frontend.patrimoines.prenoms-ahovi',   label: 'Prenoms Ahovi' },
  { name: 'frontend.patrimoines.prenoms-gouns',   label: 'Prenoms gouns' },
  { name: 'frontend.patrimoines.palais-dota',     label: 'Palais de Dota' },
  { name: 'frontend.patrimoines.sites-royaux',    label: 'Sites royaux' },
  { name: 'frontend.patrimoines.zangbeto',        label: 'Zangbeto' },
  { name: 'frontend.patrimoines.mimlan',          label: 'Mimlan' },
  { name: 'frontend.patrimoines.avessan',         label: 'Avessan' },
  { name: 'frontend.patrimoines.rites-interdits', label: 'Rites et interdits' },
  { name: 'frontend.patrimoines.adjogan',             label: 'Adjogan' },
  { name: 'frontend.patrimoines.egun-gun',            label: 'Egun gun' },
  { name: 'frontend.patrimoines.chiffres-goun',       label: 'Les chiffres en goun' },
  { name: 'frontend.patrimoines.bibliotheque-royale', label: 'Bibliothèque Royale' },
  { name: 'frontend.patrimoines.proverbes-goun',          label: 'Proverbes Goun' },
  { name: 'frontend.patrimoines.autres',          label: 'Autres patrimoines' },
]

const agendaEvenements = [
  { name: 'frontend.agenda',     label: 'Agenda' },
  { name: 'frontend.evenements', label: 'Evenements' },
]

const diaspora = [
  {
    continent: 'Afrique',
    countries: [
      { name: 'frontend.diaspora.congo',        label: 'Congo',          flag: '🇨🇬' },
      { name: 'frontend.diaspora.civ',          label: 'Côte d\'Ivoire',  flag: '🇨🇮' },
      { name: 'frontend.diaspora.gabon',        label: 'Gabon',          flag: '🇬🇦' },
    ]
  },
  {
    continent: 'Amérique',
    countries: [
      { name: 'frontend.diaspora.canada',       label: 'Canada',         flag: '🇨🇦' },
    ]
  },
  {
    continent: 'Europe',
    countries: [
      { name: 'frontend.diaspora.france',       label: 'France',         flag: '🇫🇷' },
    ]
  },
  {
    continent: 'Asie',
    countries: []
  },
  {
    continent: 'Océanie',
    countries: []
  }
]

function isInSection(prefix) {
  return route.name?.toString().startsWith(prefix)
}
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-app-bg/95 backdrop-blur-md shadow-md border-b border-royal-200">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <div class="flex items-center justify-between h-20">

        <router-link :to="{ name: 'frontend.welcome' }" class="flex items-center gap-3 shrink-0">
          <img :src="logo" alt="Dynastie Royale Dê-Mèssè" class="h-12 w-auto" />
          <div class="hidden xl:flex flex-col leading-tight">
            <span class="font-Cormorant text-lg font-semibold text-app-primary">Dynastie Royale</span>
            <span class="font-Cormorant text-xs italic text-app-muted tracking-wider">Dê-Mèssè · Porto-Novo</span>
          </div>
        </router-link>

        <nav class="hidden lg:flex items-center gap-1">

          <!-- Accueil -->
          <router-link
            :to="{ name: 'frontend.welcome' }"
            :class="route.name === 'frontend.welcome' ? 'text-app-primary' : 'text-app-dark'"
            class="px-3 py-2 text-sm font-medium hover:text-app-primary transition-colors"
          >
            Accueil
          </router-link>

          <!-- Dynastie Royale Dê-Mèssè -->
          <div class="relative group">
            <button
              :class="isInSection('frontend.dynastie') ? 'text-app-primary' : 'text-app-dark'"
              class="px-3 py-2 text-sm font-medium hover:text-app-primary transition-colors flex items-center gap-1"
            >
              Dynastie Royale
              <Icon icon="mdi:chevron-down" class="size-4 transition-transform group-hover:rotate-180" />
            </button>
            <div class="absolute left-0 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 w-64 max-h-[80vh] overflow-y-auto">
              <div class="bg-white rounded-lg shadow-2xl border border-royal-200 py-2">
                <router-link
                  v-for="item in dynastieLignees"
                  :key="item.name"
                  :to="{ name: item.name }"
                  class="block px-4 py-2 text-sm text-app-dark hover:bg-royal-50 hover:text-app-primary transition-colors"
                >
                  {{ item.label }}
                </router-link>
              </div>
            </div>
          </div>

          <!-- Histoire et Récit -->
          <div class="relative group">
            <button
              :class="isInSection('frontend.recits') ? 'text-app-primary' : 'text-app-dark'"
              class="px-3 py-2 text-sm font-medium hover:text-app-primary transition-colors flex items-center gap-1"
            >
              Histoire et Recit
              <Icon icon="mdi:chevron-down" class="size-4 transition-transform group-hover:rotate-180" />
            </button>
            <div class="absolute left-0 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 w-64 max-h-[80vh] overflow-y-auto">
              <div class="bg-white rounded-lg shadow-2xl border border-royal-200 py-2">
                <router-link
                  v-for="item in recits"
                  :key="item.name"
                  :to="{ name: item.name }"
                  class="block px-4 py-2 text-sm text-app-dark hover:bg-royal-50 hover:text-app-primary transition-colors"
                >
                  {{ item.label }}
                </router-link>
              </div>
            </div>
          </div>

          <!-- Patrimoines -->
          <div class="relative group">
            <button
              :class="isInSection('frontend.patrimoines') ? 'text-app-primary' : 'text-app-dark'"
              class="px-3 py-2 text-sm font-medium hover:text-app-primary transition-colors flex items-center gap-1"
            >
              Patrimoines
              <Icon icon="mdi:chevron-down" class="size-4 transition-transform group-hover:rotate-180" />
            </button>
            <div class="absolute left-0 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 w-64 max-h-[80vh] overflow-y-auto">
              <div class="bg-white rounded-lg shadow-2xl border border-royal-200 py-2">
                <router-link
                  v-for="item in patrimoines"
                  :key="item.name"
                  :to="{ name: item.name }"
                  class="block px-4 py-2 text-sm text-app-dark hover:bg-royal-50 hover:text-app-primary transition-colors"
                >
                  {{ item.label }}
                </router-link>
              </div>
            </div>
          </div>

          <!-- Agenda et Evenements -->
          <div class="relative group">
            <button
              :class="(isInSection('frontend.agenda') || route.name === 'frontend.evenements') ? 'text-app-primary' : 'text-app-dark'"
              class="px-3 py-2 text-sm font-medium hover:text-app-primary transition-colors flex items-center gap-1"
            >
              Agenda & Évènements
              <Icon icon="mdi:chevron-down" class="size-4 transition-transform group-hover:rotate-180" />
            </button>
            <div class="absolute left-0 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 w-56">
              <div class="bg-white rounded-lg shadow-2xl border border-royal-200 py-2">
                <router-link
                  v-for="item in agendaEvenements"
                  :key="item.name"
                  :to="{ name: item.name }"
                  class="block px-4 py-2 text-sm text-app-dark hover:bg-royal-50 hover:text-app-primary transition-colors"
                >
                  {{ item.label }}
                </router-link>
              </div>
            </div>
          </div>

          <!-- Diaspora -->
          <div class="relative group">
            <button
              :class="isInSection('frontend.diaspora') ? 'text-app-primary' : 'text-app-dark'"
              class="px-3 py-2 text-sm font-medium hover:text-app-primary transition-colors flex items-center gap-1"
            >
              Diaspora
              <Icon icon="mdi:chevron-down" class="size-4 transition-transform group-hover:rotate-180" />
            </button>
            <div class="absolute left-0 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 w-56">
              <div class="bg-white rounded-lg shadow-2xl border border-royal-200 py-2">
                <template v-for="region in diaspora" :key="region.continent">
                  <div class="px-4 py-1 mt-1 text-xs font-bold text-royal-800 uppercase tracking-wider bg-royal-50/50">{{ region.continent }}</div>
                  <router-link
                    v-for="item in region.countries"
                    :key="item.name"
                    :to="{ name: item.name }"
                    class="flex items-center gap-3 px-4 py-2 text-sm text-app-dark hover:bg-royal-50 hover:text-app-primary transition-colors"
                  >
                    <span class="text-base">{{ item.flag }}</span>
                    {{ item.label }}
                  </router-link>
                </template>
              </div>
            </div>
          </div>

          <!-- Archives -->
          <router-link
            :to="{ name: 'frontend.archives' }"
            :class="route.name === 'frontend.archives' ? 'text-app-primary' : 'text-app-dark'"
            class="px-3 py-2 text-sm font-medium hover:text-app-primary transition-colors"
          >
            Archives
          </router-link>

        </nav>

        <router-link
          :to="{ name: 'frontend.contact' }"
          class="hidden lg:inline-flex items-center gap-2 bg-app-primary hover:bg-royal-800 text-white px-4 py-2 text-sm font-semibold transition-colors group"
        >
          Contactez-Nous
          <Icon icon="mdi:arrow-right" class="size-4 transition-transform group-hover:translate-x-1" />
        </router-link>

        <button
          class="lg:hidden p-2 text-app-primary"
          @click="mobileOpen = true"
          aria-label="Ouvrir le menu"
        >
          <Icon icon="mdi:menu" class="size-7" />
        </button>

      </div>
    </div>

    <!-- Mobile Drawer -->
    <Drawer v-model:visible="mobileOpen" position="right" class="!w-80 !bg-app-bg">
      <template #header>
        <div class="flex items-center gap-2">
          <img :src="logo" alt="" class="h-10 w-auto" />
          <span class="font-Cormorant text-lg text-app-primary font-semibold">Dynastie Royale</span>
        </div>
      </template>

      <nav class="flex flex-col text-app-dark h-full overflow-y-auto pb-20">
        <router-link :to="{ name: 'frontend.welcome' }" @click="mobileOpen = false" class="py-3 px-4 border-b border-royal-200 hover:text-app-primary">Accueil</router-link>

        <Accordion :value="null" class="-mx-4 [&_.p-accordionheader]:!bg-transparent [&_.p-accordioncontent-content]:!bg-transparent">
          <AccordionPanel value="0">
            <AccordionHeader class="!px-4 !py-3 !text-app-dark hover:!text-app-primary">Dynastie Royale Dê-Mèssè</AccordionHeader>
            <AccordionContent>
              <div class="px-4 py-1">
                <router-link
                  v-for="item in dynastieLignees"
                  :key="item.name"
                  :to="{ name: item.name }"
                  @click="mobileOpen = false"
                  class="block py-2 text-sm text-app-dark hover:text-app-primary"
                >{{ item.label }}</router-link>

              </div>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel value="1">
            <AccordionHeader class="!px-4 !py-3 !text-app-dark hover:!text-app-primary">Histoire et Recit</AccordionHeader>
            <AccordionContent>
              <div class="px-4 py-1">
                <router-link
                  v-for="item in recits"
                  :key="item.name"
                  :to="{ name: item.name }"
                  @click="mobileOpen = false"
                  class="block py-2 text-sm text-app-dark hover:text-app-primary"
                >{{ item.label }}</router-link>
              </div>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel value="2">
            <AccordionHeader class="!px-4 !py-3 !text-app-dark hover:!text-app-primary">Patrimoines</AccordionHeader>
            <AccordionContent>
              <div class="px-4 py-1">
                <router-link
                  v-for="item in patrimoines"
                  :key="item.name"
                  :to="{ name: item.name }"
                  @click="mobileOpen = false"
                  class="block py-2 text-sm text-app-dark hover:text-app-primary"
                >{{ item.label }}</router-link>
              </div>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel value="3">
            <AccordionHeader class="!px-4 !py-3 !text-app-dark hover:!text-app-primary">Agenda et Evenements</AccordionHeader>
            <AccordionContent>
              <div class="px-4 py-1">
                <router-link
                  v-for="item in agendaEvenements"
                  :key="item.name"
                  :to="{ name: item.name }"
                  @click="mobileOpen = false"
                  class="block py-2 text-sm text-app-dark hover:text-app-primary"
                >{{ item.label }}</router-link>
              </div>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel value="4">
            <AccordionHeader class="!px-4 !py-3 !text-app-dark hover:!text-app-primary">Diaspora</AccordionHeader>
            <AccordionContent>
              <div class="px-4 py-1">
                <template v-for="region in diaspora" :key="region.continent">
                  <div class="py-1 text-xs font-bold text-royal-800 uppercase tracking-wider mt-2">{{ region.continent }}</div>
                  <router-link
                    v-for="item in region.countries"
                    :key="item.name"
                    :to="{ name: item.name }"
                    @click="mobileOpen = false"
                    class="flex items-center gap-2 py-2 text-sm text-app-dark hover:text-app-primary ml-2"
                  >
                    <span class="text-base">{{ item.flag }}</span>
                    {{ item.label }}
                  </router-link>
                </template>
              </div> 
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <router-link :to="{ name: 'frontend.archives' }" @click="mobileOpen = false" class="py-3 px-4 border-b border-royal-200 hover:text-app-primary text-app-dark">Archives</router-link>

        <router-link
          :to="{ name: 'frontend.contact' }"
          @click="mobileOpen = false"
          class="mt-6 mx-4 inline-flex items-center justify-center gap-2 bg-app-primary text-white py-3 font-semibold"
        >
          Contactez-Nous
          <Icon icon="mdi:arrow-right" class="size-4" />
        </router-link>
      </nav>
    </Drawer>
  </header>
</template>
