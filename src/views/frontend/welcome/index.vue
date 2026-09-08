<script setup>
import { Icon } from '@iconify/vue'
import HomeHero from '@/components/frontend/HomeHero.vue'
import SectionTitle from '@/components/frontend/SectionTitle.vue'
import LigneeCard from '@/components/frontend/LigneeCard.vue'
import RecitCard from '@/components/frontend/RecitCard.vue'
import DocumentCard from '@/components/frontend/DocumentCard.vue'

import logo from '@/assets/images/logo.png'
import imgPortoNovo from '@/assets/images/recits/royaume-porto-novo.jpg'
import imgAbomey from '@/assets/images/recits/abomey.jpg'
import imgAllada from '@/assets/images/recits/allada.jpg'
import imgKetou from '@/assets/images/recits/ketou.png'
import imgTeAgbanlin from '@/assets/images/recits/te-agbanlin.jpg'
import imgHiakpon from '@/assets/images/recits/hakpon-3.jpg'

const lignees = [
  {
    name: 'Dê-Ayikpe',
    period: 'Branche Royale Aînée',
    description: 'L\'une des grandes branches royales de Porto-Novo, fondée par le fils aîné de Dê-Mèssè.',
    icon: 'mdi:crown',
    to: { name: 'frontend.dynastie.ayikpe' },
  },
  {
    name: 'Dê-Tognon',
    period: 'Branche Royale Benjamine',
    description: 'La lignée du benjamin royal, ancrée dans l\'histoire du royaume de Hogbonou.',
    icon: 'mdi:crown',
    to: { name: 'frontend.dynastie.tognon' },
  },
  {
    name: 'Dê-Mikpon',
    period: 'Lignée Souveraine',
    description: 'Une autre branche fondatrice importante qui porte fièrement l\'héritage de notre dynastie.',
    icon: 'mdi:crown-outline',
    to: { name: 'frontend.dynastie.mikpone' },
  },
]

const recitsVedette = [
  {
    image: imgTeAgbanlin,
    title: 'Tê Agbanlin',
    excerpt: 'Fondateur du royaume de Hogbonou au 17ᵉ siècle. Dix-huit rois lui succèderont jusqu\'à la colonisation.',
    category: 'Personnage Historique',
    to: { name: 'frontend.recits.te-agbanlin' },
  },
  {
    image: 'https://placehold.co/600x800/2a3129/c9a227?text=Dê-Mèssè',
    title: 'Dê-Mèssè',
    excerpt: 'Le fondateur de notre dynastie, dont les descendants forment aujourd\'hui nos collectivités et branches royales.',
    category: 'Fondateur',
    to: { name: 'frontend.dynastie.demesse' },
  },
  {
    image: 'https://placehold.co/600x800/2a3129/c9a227?text=Dê-Ayikpe',
    title: 'Dê-Ayikpe',
    excerpt: 'Branche aînée de la dynastie, poursuivant l\'héritage royal à travers les âges.',
    category: 'Lignée Royale',
    to: { name: 'frontend.dynastie.ayikpe' },
  },
]

const royaumes = [
  { image: imgPortoNovo, title: 'Royaume de Porto-Novo', excerpt: 'Hogbonou, fondé par Tê Agbanlin. Le berceau de notre dynastie.', category: 'Royaume', to: { name: 'frontend.recits.royaume-hogbonou' } },
  { image: imgAbomey,    title: 'Royaume d’Abomey',     excerpt: 'Le puissant royaume du Danxomè, célèbre pour ses rois et son patrimoine artistique.', category: 'Royaume', to: { name: 'frontend.recits.abomey' } },
  { image: imgAllada,    title: 'Royaume d’Allada',     excerpt: 'Berceau historique fondé par le Roi Kokpon Adjahoutô, père de Tê Agbanlin.', category: 'Royaume', to: { name: 'frontend.recits.allada' } },
  { image: imgKetou,     title: 'Royaume de Kétou',     excerpt: 'L’un des grands royaumes yoruba du Bénin, riche d’une histoire millénaire.', category: 'Royaume', to: { name: 'frontend.recits.ketou' } },
]

const documents = [
  { title: 'Histoire de la lignée Dê-Mèssè',          year: 'Référence',  pdfUrl: '/pdf/DE-MESSE_Histoire.pdf',                icon: 'mdi:book-open-variant' },
  { title: 'Conseil des Sages',                       year: '1993',       pdfUrl: '/pdf/Conseil_sae_1993.pdf',                  icon: 'mdi:account-group-outline' },
  { title: 'Réunion des Sages',                       year: '1998',       pdfUrl: '/pdf/Reunion_Sage_1998.pdf',                 icon: 'mdi:account-tie-voice' },
  { title: 'Rapport d’élection du Roi de Porto-Novo', year: 'Officiel',   pdfUrl: '/pdf/Rapport_Election_Roi_Porto-Novo.pdf',   icon: 'mdi:scroll' },
]
</script>

<template>
  
  <HomeHero />

  <!-- ============ SECTION 2 — PRÉSENTATION ============ -->
  <section class="bg-app-bg py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <div class="relative" data-aos="fade-right" data-aos-duration="800">
          <div class="absolute -inset-4 bg-app-accent/20 -rotate-2"></div>
          <div class="relative bg-white p-10 lg:p-16 shadow-xl">
            <div class="flex items-center justify-center mb-6">
              <img :src="logo" alt="Dynastie Royale Dê-Mèssè" class="h-32 w-auto" />
            </div>
            <p class="text-center font-Cormorant text-2xl text-app-primary italic leading-snug">
              « Au cœur de notre héritage, réside la grandeur. »
            </p>
            <div class="w-16 h-0.5 bg-app-accent mx-auto mt-6"></div>
            <p class="text-center text-xs uppercase tracking-[0.3em] text-app-muted mt-4">Dê-Mèssè · 1752 — 1757</p>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="800">
          <p class="text-app-accent uppercase tracking-[0.25em] text-xs font-semibold mb-4">À propos</p>
          <h2 class="font-Cormorant text-4xl lg:text-5xl text-app-primary font-semibold leading-tight mb-6">
            Une dynastie, une mémoire, une nation.
          </h2>
          <div class="w-20 h-1 bg-app-accent mb-8"></div>
          <p class="text-app-dark/80 text-lg leading-relaxed mb-6">
            La <strong class="text-app-primary">Dynastie Royale Dê-Mèssè</strong> œuvre à la préservation
            et à la valorisation de l'héritage historique et culturel du Royaume de Porto-Novo (Hogbonou)
            et des grandes lignées royales du Bénin.
          </p>
          <p class="text-app-muted leading-relaxed mb-8">
            Depuis Tê Agbanlin, fondateur du royaume au 17ᵉ siècle, dix-huit rois lui ont succédés jusqu'à
          la colonisation. Dê-Mèssè, le fondateur de la dynastie, a eu des enfants qui ont formé les collectivités et branches de la dynastie (Dê-Ayikpe, Dê-Tognon, Dê-Mikpon...).
          De génération en génération, chaque collectivité a transmis cette mémoire que nous entretenons aujourd'hui pour les générations futures.
          </p>
          <router-link
            :to="{ name: 'frontend.apropos' }"
            class="inline-flex items-center gap-3 bg-app-primary hover:bg-royal-800 text-white px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-colors group"
          >
            En savoir plus sur nous
            <Icon icon="mdi:arrow-right" class="size-4 transition-transform group-hover:translate-x-1" />
          </router-link>
        </div>

      </div>
    </div>
  </section>

  <!-- ============ SECTION 3 — LIGNÉES ============ -->
  <section class="bg-royal-50 py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="Les Collectivités"
        title="Les Branches de Dê-Mèssè"
        description="Dê-Mèssè est le fondateur de la dynastie. Ses enfants ont formé les 11 collectivités et branches qui perpétuent son héritage."
      />
      <div class="grid md:grid-cols-3 gap-8" data-aos="fade-up" data-aos-duration="900">
        <LigneeCard
          v-for="lignee in lignees"
          :key="lignee.name"
          v-bind="lignee"
        />
      </div>
    </div>
  </section>

  <!-- ============ SECTION 4 — RÉCITS EN VEDETTE ============ -->
  <section class="bg-app-bg py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <SectionTitle
          eyebrow="Histoires & Récits"
          title="Les figures qui ont façonné notre héritage"
          align="left"
          class="!mb-0"
        />
        <router-link
          :to="{ name: 'frontend.recits.royaume-hogbonou' }"
          class="inline-flex items-center gap-2 text-sm font-semibold text-app-primary hover:text-app-accent transition-colors group whitespace-nowrap"
        >
          Voir tous les récits
          <Icon icon="mdi:arrow-right" class="size-4 transition-transform group-hover:translate-x-1" />
        </router-link>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-duration="900">
        <RecitCard v-for="r in recitsVedette" :key="r.title" v-bind="r" />
      </div>
    </div>
  </section>

  <!-- ============ SECTION 5 — ROYAUMES DU BÉNIN ============ -->
  <section class="relative py-10 md:py-20 bg-app-dark text-white overflow-hidden">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(201,162,39,0.12),transparent_60%)]"></div>
    <div class="relative max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="Royaumes du Bénin"
        title="Quatre royaumes, un même fleuve d’histoire"
        description="Porto-Novo, Abomey, Allada, Kétou — quatre cités-mères dont les destinées se croisent et tissent l'âme du Bénin."
        light
      />

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up" data-aos-duration="900">
        <router-link
          v-for="r in royaumes"
          :key="r.title"
          :to="r.to"
          class="group relative aspect-[3/4] overflow-hidden bg-royal-900"
        >
          <img
            :src="r.image"
            :alt="r.title"
            class="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-110 transition-all duration-700"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-app-dark via-app-dark/40 to-transparent"></div>
          <div class="absolute bottom-0 inset-x-0 p-6">
            <p class="text-app-accent text-xs uppercase tracking-widest font-semibold mb-2">{{ r.category }}</p>
            <h3 class="font-Cormorant text-2xl font-semibold text-white group-hover:text-app-accent transition-colors">
              {{ r.title }}
            </h3>
            <p class="text-royal-100/80 text-sm leading-relaxed mt-2 line-clamp-2">{{ r.excerpt }}</p>
            <div class="mt-4 flex items-center gap-2 text-xs uppercase tracking-wider text-app-accent font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
              Découvrir
              <Icon icon="mdi:arrow-right" class="size-4" />
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </section>

  <!-- ============ SECTION 6 — DOCUMENTS HISTORIQUES ============ -->
  <section class="bg-royal-50 py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
        <SectionTitle
          eyebrow="Archives"
          title="Documents historiques"
          description="Consultez les actes, rapports et messages qui jalonnent l'histoire de la dynastie."
          align="left"
          class="!mb-0"
        />
        <router-link
          :to="{ name: 'frontend.archives' }"
          class="inline-flex items-center gap-2 text-sm font-semibold text-app-primary hover:text-app-accent transition-colors group whitespace-nowrap"
        >
          Tous les documents
          <Icon icon="mdi:arrow-right" class="size-4 transition-transform group-hover:translate-x-1" />
        </router-link>
      </div>

      <div class="grid sm:grid-cols-2 gap-6" data-aos="fade-up" data-aos-duration="900">
        <DocumentCard v-for="d in documents" :key="d.title" v-bind="d" />
      </div>
    </div>
  </section>

  <!-- ============ SECTION 7 — CTA + NEWSLETTER ============ -->
  <section class="relative py-10 md:py-20 overflow-hidden bg-gradient-to-br from-app-primary via-royal-800 to-royal-900 text-white">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(201,162,39,0.2),transparent_60%)]"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(201,162,39,0.15),transparent_60%)]"></div>

    <div class="relative max-w-5xl mx-auto px-4 lg:px-8 text-center" data-aos="fade-up" data-aos-duration="800">
      <p class="text-app-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6">Préservons notre patrimoine</p>
      <h2 class="font-Cormorant text-4xl lg:text-6xl font-semibold leading-tight mb-6">
        Préservons ensemble notre héritage royal.
      </h2>
      <div class="w-24 h-1 bg-app-accent mx-auto mb-8"></div>
      <p class="text-royal-100/90 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
        Rejoignez notre démarche de préservation et de transmission de l'histoire des grandes lignées
        royales du Bénin. Restez informé de nos publications et événements.
      </p>

      <form @submit.prevent class="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-8">
        <input
          type="email"
          placeholder="Votre adresse email"
          class="flex-1 bg-white/10 border border-royal-200/30 backdrop-blur-sm px-5 py-4 text-sm text-white placeholder-royal-200/60 focus:outline-none focus:border-app-accent focus:bg-white/15"
        />
        <button
          type="submit"
          class="inline-flex items-center justify-center gap-2 bg-app-accent hover:bg-royal-300 text-app-dark px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-colors"
        >
          S'abonner
          <Icon icon="mdi:arrow-right" class="size-4" />
        </button>
      </form>

      <div class="flex flex-wrap items-center justify-center gap-6 text-sm">
        <router-link
          :to="{ name: 'frontend.contact' }"
          class="inline-flex items-center gap-2 text-app-accent hover:text-white transition-colors"
        >
          <Icon icon="mdi:email-outline" class="size-5" />
          Nous contacter
        </router-link>
        <span class="text-royal-200/40">·</span>
        <router-link
          :to="{ name: 'frontend.apropos' }"
          class="inline-flex items-center gap-2 text-app-accent hover:text-white transition-colors"
        >
          <Icon icon="mdi:information-outline" class="size-5" />
          Notre mission
        </router-link>
      </div>
    </div>
  </section>
</template>
