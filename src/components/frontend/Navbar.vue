<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import logo from '@/assets/images/logo.png'

const route = useRoute()
const mobileOpen = ref(false)

// Mega menu "Dynastie Royale"
const dynastieLignees = [
  { name: 'frontend.dynastie.demesse',    label: 'Dê-Mèssè',    icon: 'mdi:crown' },
  { name: 'frontend.dynastie.ayikpe',     label: 'Dê-Ayikpe',   icon: 'mdi:crown-outline' },
  { name: 'frontend.dynastie.tognon',     label: 'Dê-Tognon',   icon: 'mdi:crown-outline' },
  { name: 'frontend.dynastie.genealogie', label: 'Généalogie',  icon: 'mdi:family-tree' },
]
const dynastieDocs = [
  { name: 'frontend.dynastie.documents',       label: 'Documents Dê-Mèssè',          icon: 'mdi:file-document-outline' },
  { name: 'frontend.dynastie.reunion-1998',    label: 'Réunion des Sages 1998',      icon: 'mdi:account-group-outline' },
  { name: 'frontend.dynastie.ag-1973',         label: 'Assemblée Générale 1973',     icon: 'mdi:gavel' },
  { name: 'frontend.dynastie.message-affodji', label: 'Message Houédouto Affodji',   icon: 'mdi:message-text-outline' },
  { name: 'frontend.dynastie.succession',      label: 'Succession Rois Porto-Novo',  icon: 'mdi:scroll' },
]

const recits = [
  { name: 'frontend.recits.te-agbanlin',         label: 'Roi Tê-Agbanlin' },
  { name: 'frontend.recits.hakpon-3',            label: 'Dê-Kpotozounme Hakpon 3' },
  { name: 'frontend.recits.royaume-porto-novo',  label: 'Le Royaume de Porto-Novo' },
  { name: 'frontend.recits.rois-porto-novo',     label: 'Les Rois de Porto-Novo' },
  { name: 'frontend.recits.abomey',              label: 'Royaume d’Abomey' },
  { name: 'frontend.recits.allada',              label: 'Royaume d’Allada' },
  { name: 'frontend.recits.ketou',               label: 'Royaume de Kétou' },
]

const publications = [
  { name: 'frontend.actualites', label: 'Actualités',         icon: 'mdi:newspaper-variant-outline' },
  { name: 'frontend.agenda',     label: 'Agenda & Événements', icon: 'mdi:calendar-star' },
]

const diaspora = [
  { name: 'frontend.diaspora.canada', label: 'Canada',         flag: '🇨🇦' },
  { name: 'frontend.diaspora.congo',  label: 'Congo',          flag: '🇨🇬' },
  { name: 'frontend.diaspora.civ',    label: 'Côte d’Ivoire',  flag: '🇨🇮' },
  { name: 'frontend.diaspora.france', label: 'France',         flag: '🇫🇷' },
  { name: 'frontend.diaspora.gabon',  label: 'Gabon',          flag: '🇬🇦' },
]

const pages = [
  { name: 'frontend.apropos',  label: 'À propos' },
  { name: 'frontend.comite',   label: 'Notre Comité' },
  { name: 'frontend.soutenir', label: 'Soutenir la dynastie' },
  { name: 'frontend.sites',    label: 'Sites patrimoniaux' },
  { name: 'frontend.faqs',     label: 'FAQ' },
]

function isInSection(prefix) {
  return route.name?.toString().startsWith(prefix)
}
function isInPages() {
  return ['frontend.apropos','frontend.comite','frontend.soutenir','frontend.sites','frontend.faqs'].includes(route.name)
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

          <router-link
            :to="{ name: 'frontend.welcome' }"
            :class="route.name === 'frontend.welcome' ? 'text-app-primary' : 'text-app-dark'"
            class="px-4 py-2 text-sm font-medium hover:text-app-primary transition-colors"
          >
            Accueil
          </router-link>

          <!-- MEGA MENU Dynastie Royale -->
          <div class="relative group">
            <button
              :class="isInSection('frontend.dynastie') ? 'text-app-primary' : 'text-app-dark'"
              class="px-4 py-2 text-sm font-medium hover:text-app-primary transition-colors flex items-center gap-1"
            >
              Dynastie Royale
              <Icon icon="mdi:chevron-down" class="size-4 transition-transform group-hover:rotate-180" />
            </button>

            <div class="absolute left-1/2 -translate-x-1/2 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 w-[720px]">
              <div class="bg-white rounded-lg shadow-2xl border border-royal-200 overflow-hidden">
                <div class="grid grid-cols-12 gap-0">

                  <div class="col-span-4 p-6 border-r border-royal-100">
                    <p class="font-Cormorant text-app-accent uppercase text-xs tracking-widest font-semibold mb-4">Lignées</p>
                    <ul class="space-y-1">
                      <li v-for="item in dynastieLignees" :key="item.name">
                        <router-link
                          :to="{ name: item.name }"
                          class="flex items-center gap-3 px-3 py-2.5 rounded hover:bg-royal-50 group/item transition-colors"
                        >
                          <Icon :icon="item.icon" class="size-5 text-app-accent shrink-0" />
                          <span class="text-sm text-app-dark group-hover/item:text-app-primary font-medium">{{ item.label }}</span>
                        </router-link>
                      </li>
                    </ul>
                  </div>

                  <div class="col-span-5 p-6 border-r border-royal-100">
                    <p class="font-Cormorant text-app-accent uppercase text-xs tracking-widest font-semibold mb-4">Documents historiques</p>
                    <ul class="space-y-1">
                      <li v-for="item in dynastieDocs" :key="item.name">
                        <router-link
                          :to="{ name: item.name }"
                          class="flex items-center gap-3 px-3 py-2 rounded hover:bg-royal-50 group/item transition-colors"
                        >
                          <Icon :icon="item.icon" class="size-4 text-app-accent shrink-0" />
                          <span class="text-sm text-app-dark group-hover/item:text-app-primary">{{ item.label }}</span>
                        </router-link>
                      </li>
                    </ul>
                  </div>

                  <div class="col-span-3 bg-gradient-to-br from-app-primary to-royal-900 p-6 text-white flex flex-col justify-between">
                    <div>
                      <p class="font-Cormorant text-2xl leading-tight font-semibold mb-2">Au cœur de notre héritage</p>
                      <p class="text-xs opacity-80 leading-relaxed">Découvrez l'héritage vivant d'une lignée de légendes.</p>
                    </div>
                    <router-link
                      :to="{ name: 'frontend.contact' }"
                      class="inline-flex items-center gap-2 mt-4 text-app-accent text-xs font-semibold uppercase tracking-wider hover:gap-3 transition-all"
                    >
                      Nous contacter
                      <Icon icon="mdi:arrow-right" class="size-4" />
                    </router-link>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <!-- Dropdown Archives -->
          <div class="relative group">
            <button
              class="px-4 py-2 text-sm font-medium hover:text-app-primary transition-colors flex items-center gap-1 text-app-dark"
            >
              Archives
              <Icon icon="mdi:chevron-down" class="size-4 transition-transform group-hover:rotate-180" />
            </button>
            <div class="absolute left-0 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 w-72">
              <div class="bg-white rounded-lg shadow-2xl border border-royal-200 py-2">
                <router-link
                  v-for="item in dynastieDocs"
                  :key="item.name"
                  :to="{ name: item.name }"
                  class="flex items-center gap-3 px-4 py-2.5 text-sm text-app-dark hover:bg-royal-50 hover:text-app-primary transition-colors"
                >
                  <Icon :icon="item.icon" class="size-4 text-app-accent shrink-0" />
                  {{ item.label }}
                </router-link>
              </div>
            </div>
          </div>

          <!-- Patrimoine -->
          <router-link
            :to="{ name: 'frontend.sites' }"
            :class="route.name === 'frontend.sites' ? 'text-app-primary' : 'text-app-dark'"
            class="px-4 py-2 text-sm font-medium hover:text-app-primary transition-colors"
          >
            Patrimoine
          </router-link>

          <!-- Dropdown Histoires & Récits -->
          <div class="relative group">
            <button
              :class="isInSection('frontend.recits') ? 'text-app-primary' : 'text-app-dark'"
              class="px-4 py-2 text-sm font-medium hover:text-app-primary transition-colors flex items-center gap-1"
            >
              Histoires & Récits
              <Icon icon="mdi:chevron-down" class="size-4 transition-transform group-hover:rotate-180" />
            </button>
            <div class="absolute left-0 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 w-72">
              <div class="bg-white rounded-lg shadow-2xl border border-royal-200 py-2">
                <router-link
                  v-for="item in recits"
                  :key="item.name"
                  :to="{ name: item.name }"
                  class="block px-4 py-2.5 text-sm text-app-dark hover:bg-royal-50 hover:text-app-primary transition-colors"
                >
                  {{ item.label }}
                </router-link>
              </div>
            </div>
          </div>

          <!-- Dropdown Publications -->
          <div class="relative group">
            <button
              :class="isInSection('frontend.actualites') || isInSection('frontend.agenda') ? 'text-app-primary' : 'text-app-dark'"
              class="px-4 py-2 text-sm font-medium hover:text-app-primary transition-colors flex items-center gap-1"
            >
              Publications
              <Icon icon="mdi:chevron-down" class="size-4 transition-transform group-hover:rotate-180" />
            </button>
            <div class="absolute left-0 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 w-64">
              <div class="bg-white rounded-lg shadow-2xl border border-royal-200 py-2">
                <router-link
                  v-for="item in publications"
                  :key="item.name"
                  :to="{ name: item.name }"
                  class="flex items-center gap-3 px-4 py-2.5 text-sm text-app-dark hover:bg-royal-50 hover:text-app-primary transition-colors"
                >
                  <Icon :icon="item.icon" class="size-5 text-app-accent shrink-0" />
                  {{ item.label }}
                </router-link>
              </div>
            </div>
          </div>

          <!-- Dropdown Diaspora -->
          <div class="relative group">
            <button
              :class="isInSection('frontend.diaspora') ? 'text-app-primary' : 'text-app-dark'"
              class="px-4 py-2 text-sm font-medium hover:text-app-primary transition-colors flex items-center gap-1"
            >
              Diaspora
              <Icon icon="mdi:chevron-down" class="size-4 transition-transform group-hover:rotate-180" />
            </button>
            <div class="absolute left-0 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 w-56">
              <div class="bg-white rounded-lg shadow-2xl border border-royal-200 py-2">
                <router-link
                  v-for="item in diaspora"
                  :key="item.name"
                  :to="{ name: item.name }"
                  class="flex items-center gap-3 px-4 py-2.5 text-sm text-app-dark hover:bg-royal-50 hover:text-app-primary transition-colors"
                >
                  <span class="text-lg">{{ item.flag }}</span>
                  {{ item.label }}
                </router-link>
              </div>
            </div>
          </div>

          <!-- Dropdown Pages -->
          <div class="relative group">
            <button
              :class="isInPages() ? 'text-app-primary' : 'text-app-dark'"
              class="px-4 py-2 text-sm font-medium hover:text-app-primary transition-colors flex items-center gap-1"
            >
              Pages
              <Icon icon="mdi:chevron-down" class="size-4 transition-transform group-hover:rotate-180" />
            </button>
            <div class="absolute right-0 top-full pt-3 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 w-56">
              <div class="bg-white rounded-lg shadow-2xl border border-royal-200 py-2">
                <router-link
                  v-for="item in pages"
                  :key="item.name"
                  :to="{ name: item.name }"
                  class="block px-4 py-2.5 text-sm text-app-dark hover:bg-royal-50 hover:text-app-primary transition-colors"
                >
                  {{ item.label }}
                </router-link>
              </div>
            </div>
          </div>

        </nav>

        <router-link
          :to="{ name: 'frontend.contact' }"
          class="hidden lg:inline-flex items-center gap-2 bg-app-primary hover:bg-royal-800 text-white px-5 py-2.5 text-sm font-semibold transition-colors group"
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

    <Drawer v-model:visible="mobileOpen" position="right" class="!w-80 !bg-app-bg">
      <template #header>
        <div class="flex items-center gap-2">
          <img :src="logo" alt="" class="h-10 w-auto" />
          <span class="font-Cormorant text-lg text-app-primary font-semibold">Dynastie Royale</span>
        </div>
      </template>

      <nav class="flex flex-col text-app-dark">
        <router-link :to="{ name: 'frontend.welcome' }" @click="mobileOpen = false" class="py-3 border-b border-royal-200 hover:text-app-primary">Accueil</router-link>

        <Accordion :value="null" class="-mx-4 [&_.p-accordionheader]:!bg-transparent [&_.p-accordioncontent-content]:!bg-transparent">
          <AccordionPanel value="0">
            <AccordionHeader class="!px-4 !py-3 !text-app-dark hover:!text-app-primary">Dynastie Royale</AccordionHeader>
            <AccordionContent>
              <div class="px-4 space-y-1">
                <p class="text-app-accent uppercase text-xs tracking-widest font-semibold mt-2 mb-1">Lignées</p>
                <router-link
                  v-for="item in dynastieLignees"
                  :key="item.name"
                  :to="{ name: item.name }"
                  @click="mobileOpen = false"
                  class="block py-2 text-sm text-app-dark hover:text-app-primary"
                >{{ item.label }}</router-link>
                <p class="text-app-accent uppercase text-xs tracking-widest font-semibold mt-3 mb-1">Documents</p>
                <router-link
                  v-for="item in dynastieDocs"
                  :key="item.name"
                  :to="{ name: item.name }"
                  @click="mobileOpen = false"
                  class="block py-2 text-sm text-app-dark hover:text-app-primary"
                >{{ item.label }}</router-link>
              </div>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel value="archives">
            <AccordionHeader class="!px-4 !py-3 !text-app-dark hover:!text-app-primary">Archives</AccordionHeader>
            <AccordionContent>
              <div class="px-4">
                <router-link
                  v-for="item in dynastieDocs"
                  :key="item.name"
                  :to="{ name: item.name }"
                  @click="mobileOpen = false"
                  class="flex items-center gap-2 py-2 text-sm text-app-dark hover:text-app-primary"
                >
                  <Icon :icon="item.icon" class="size-4 text-app-accent" />
                  {{ item.label }}
                </router-link>
              </div>
            </AccordionContent>
          </AccordionPanel>

          <router-link :to="{ name: 'frontend.sites' }" @click="mobileOpen = false" class="py-3 px-4 border-b border-royal-200 hover:text-app-primary text-app-dark">Patrimoine</router-link>

          <AccordionPanel value="1">
            <AccordionHeader class="!px-4 !py-3 !text-app-dark hover:!text-app-primary">Histoires & Récits</AccordionHeader>
            <AccordionContent>
              <div class="px-4">
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
            <AccordionHeader class="!px-4 !py-3 !text-app-dark hover:!text-app-primary">Publications</AccordionHeader>
            <AccordionContent>
              <div class="px-4">
                <router-link
                  v-for="item in publications"
                  :key="item.name"
                  :to="{ name: item.name }"
                  @click="mobileOpen = false"
                  class="flex items-center gap-2 py-2 text-sm text-app-dark hover:text-app-primary"
                >
                  <Icon :icon="item.icon" class="size-4 text-app-accent" />
                  {{ item.label }}
                </router-link>
              </div>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel value="3">
            <AccordionHeader class="!px-4 !py-3 !text-app-dark hover:!text-app-primary">Diaspora</AccordionHeader>
            <AccordionContent>
              <div class="px-4">
                <router-link
                  v-for="item in diaspora"
                  :key="item.name"
                  :to="{ name: item.name }"
                  @click="mobileOpen = false"
                  class="flex items-center gap-2 py-2 text-sm text-app-dark hover:text-app-primary"
                >
                  <span class="text-base">{{ item.flag }}</span>
                  {{ item.label }}
                </router-link>
              </div>
            </AccordionContent>
          </AccordionPanel>

          <AccordionPanel value="4">
            <AccordionHeader class="!px-4 !py-3 !text-app-dark hover:!text-app-primary">Pages</AccordionHeader>
            <AccordionContent>
              <div class="px-4">
                <router-link
                  v-for="item in pages"
                  :key="item.name"
                  :to="{ name: item.name }"
                  @click="mobileOpen = false"
                  class="block py-2 text-sm text-app-dark hover:text-app-primary"
                >{{ item.label }}</router-link>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>

        <router-link
          :to="{ name: 'frontend.contact' }"
          @click="mobileOpen = false"
          class="mt-6 inline-flex items-center justify-center gap-2 bg-app-primary text-white py-3 font-semibold"
        >
          Contactez-Nous
          <Icon icon="mdi:arrow-right" class="size-4" />
        </router-link>
      </nav>
    </Drawer>
  </header>
</template>
