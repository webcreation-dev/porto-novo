<script setup>
import { Icon } from '@iconify/vue'
import PageBanner from '@/components/frontend/PageBanner.vue'
import SectionTitle from '@/components/frontend/SectionTitle.vue'
import Timeline from '@/components/frontend/Timeline.vue'
import logo from '@/assets/images/logo.png'
import imgPortoNovo from '@/assets/images/recits/royaume-porto-novo.jpg'

const valeurs = [
  {
    icon: 'mdi:shield-crown',
    title: 'Préservation',
    description: 'Protéger et conserver les archives, récits oraux et documents historiques de la dynastie pour les générations futures.',
  },
  {
    icon: 'mdi:account-voice',
    title: 'Transmission',
    description: 'Transmettre la mémoire vivante aux jeunes générations à travers des publications, conférences et événements culturels.',
  },
  {
    icon: 'mdi:book-open-page-variant',
    title: 'Mémoire',
    description: 'Honorer la mémoire de Tê-Agbanlin et des dix-huit rois qui ont façonné le royaume de Hogbonou.',
  },
  {
    icon: 'mdi:handshake',
    title: 'Communauté',
    description: 'Rassembler la grande famille royale et tous ceux qui partagent l’attachement à ce patrimoine.',
  },
]

const timeline = [
  {
    year: '17ᵉ s.',
    title: 'Fondation du royaume de Hogbonou',
    description: 'Tê-Agbanlin, fils du Roi Kokpon Adjahoutô d’Allada, fonde le royaume de Hogbonou (Porto-Novo).',
    icon: 'mdi:crown',
  },
  {
    year: '1752 — 1757',
    title: 'Règne de Dê-Messe',
    description: 'Une lignée fondatrice s’installe et donne son nom à la dynastie : Dê-Messe. Cinq années qui marquent durablement la mémoire royale.',
    icon: 'mdi:scroll',
  },
  {
    year: '1973',
    title: 'Assemblée Générale historique',
    description: 'L’Assemblée Générale d’avril réunit les héritiers de la dynastie autour des questions de succession et de patrimoine.',
    icon: 'mdi:gavel',
  },
  {
    year: '1993',
    title: 'Conseil des Sages',
    description: 'Les sages de la dynastie se réunissent pour acter des décisions majeures concernant la lignée Dê-Messe.',
    icon: 'mdi:account-group',
  },
  {
    year: '1998',
    title: 'Réunion des Sages & Message Affodji',
    description: 'Une seconde grande réunion des sages, prolongée par le message historique de Houédouto Affodji.',
    icon: 'mdi:message-text',
  },
  {
    year: 'Aujourd’hui',
    title: 'Préservation & valorisation',
    description: 'La dynastie continue de structurer son héritage et d’ouvrir ses archives au plus grand nombre.',
    icon: 'mdi:torch',
  },
]
</script>

<template>
  <PageBanner subtitle="Qui sommes-nous" />

  <!-- ============ MISSION ============ -->
  <section class="bg-app-bg py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        <div class="relative" data-aos="fade-right" data-aos-duration="800">
          <div class="absolute -inset-4 bg-app-accent/20 rotate-2"></div>
          <div class="relative aspect-[4/5] overflow-hidden bg-royal-100">
            <img :src="imgPortoNovo" alt="Royaume de Porto-Novo" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-app-dark/80 to-transparent"></div>
            <div class="absolute bottom-0 inset-x-0 p-8">
              <img :src="logo" alt="" class="h-16 w-auto mb-3" />
              <p class="font-Cormorant text-white text-2xl italic leading-snug">« Au cœur de notre héritage, réside la grandeur. »</p>
            </div>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-duration="800">
          <p class="text-app-accent uppercase tracking-[0.25em] text-xs font-semibold mb-4">Notre mission</p>
          <h2 class="font-Cormorant text-4xl lg:text-5xl text-app-primary font-semibold leading-tight mb-6">
            Préserver, transmettre, célébrer.
          </h2>
          <div class="w-20 h-1 bg-app-accent mb-8"></div>

          <p class="text-app-dark/80 text-lg leading-relaxed mb-6">
            La <strong class="text-app-primary">Dynastie Royale Dê-Messe</strong> est dédiée à la préservation
            et à la valorisation de l'héritage historique et culturel du Royaume de Porto-Novo (Hogbonou)
            et des grandes lignées royales du Bénin.
          </p>
          <p class="text-app-muted leading-relaxed mb-6">
            Notre mission s'inscrit dans une démarche à la fois mémorielle et vivante : honorer le passé,
            documenter l'histoire, et porter notre patrimoine vers les générations à venir.
          </p>
          <p class="text-app-muted leading-relaxed">
            Nous travaillons à structurer l'accès aux archives, à produire des contenus accessibles à tous,
            et à fédérer la communauté autour d'un même attachement à cette histoire millénaire.
          </p>
        </div>

      </div>
    </div>
  </section>

  <!-- ============ TIMELINE ============ -->
  <section class="bg-royal-50 py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="Notre histoire"
        title="Une chronologie royale"
        description="Des grandes étapes qui ont jalonné l'histoire de la dynastie Dê-Messe et du Royaume de Porto-Novo."
      />
      <Timeline :items="timeline" />
    </div>
  </section>

  <!-- ============ VALEURS ============ -->
  <section class="bg-app-bg py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="Nos valeurs"
        title="Ce qui nous anime au quotidien"
        description="Quatre piliers qui guident chacune de nos actions et chaque page de ce site."
      />
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(v, idx) in valeurs"
          :key="v.title"
          class="group flex flex-col items-center text-center bg-white border border-royal-200 hover:border-app-accent hover:shadow-xl transition-all duration-500 p-8"
          data-aos="fade-up"
          :data-aos-delay="idx * 100"
        >
          <div class="size-16 flex items-center justify-center rounded-full bg-royal-100 group-hover:bg-app-primary text-app-primary group-hover:text-app-accent transition-colors duration-500 mb-5">
            <Icon :icon="v.icon" class="size-8" />
          </div>
          <h3 class="font-Cormorant text-2xl font-semibold text-app-primary mb-3">{{ v.title }}</h3>
          <p class="text-sm text-app-muted leading-relaxed">{{ v.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ CTA ============ -->
  <section class="relative py-10 md:py-20 overflow-hidden bg-gradient-to-br from-app-primary via-royal-800 to-royal-900 text-white">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,39,0.18),transparent_60%)]"></div>
    <div class="relative max-w-4xl mx-auto px-4 lg:px-8 text-center" data-aos="fade-up">
      <p class="text-app-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6">Rejoignez l’aventure</p>
      <h2 class="font-Cormorant text-3xl lg:text-5xl font-semibold leading-tight mb-6">
        Vous partagez notre attachement à ce patrimoine ?
      </h2>
      <div class="w-20 h-1 bg-app-accent mx-auto mb-8"></div>
      <p class="text-royal-100/90 text-lg leading-relaxed mb-10">
        Contactez-nous pour échanger, contribuer ou simplement en apprendre davantage sur la Dynastie Royale Dê-Messe.
      </p>
      <router-link
        :to="{ name: 'frontend.contact' }"
        class="inline-flex items-center gap-3 bg-app-accent hover:bg-royal-300 text-app-dark px-10 py-4 text-sm font-semibold uppercase tracking-wider transition-colors group"
      >
        Nous contacter
        <Icon icon="mdi:arrow-right" class="size-4 transition-transform group-hover:translate-x-1" />
      </router-link>
    </div>
  </section>
</template>
