<script setup>
import { Icon } from '@iconify/vue'
import PageBanner from '@/components/frontend/PageBanner.vue'
import SectionTitle from '@/components/frontend/SectionTitle.vue'

const niveaux = [
  {
    label: 'Donateur Ami',
    price: 'À partir de 10 000 FCFA',
    period: '/ an',
    description: 'Le premier pas pour soutenir la préservation du patrimoine.',
    features: [
      'Newsletter trimestrielle exclusive',
      'Accès anticipé aux nouveaux contenus',
      'Mention sur la page des soutiens',
      'Reçu fiscal',
    ],
    icon: 'mdi:hand-heart-outline',
    cta: 'Devenir Ami',
    highlight: false,
  },
  {
    label: 'Mécène',
    price: 'À partir de 100 000 FCFA',
    period: '/ an',
    description: 'Un soutien substantiel à la mission de la dynastie.',
    features: [
      'Tous les avantages Donateur Ami',
      'Invitation aux événements privés',
      'Rencontre annuelle avec le Comité',
      'Présence dans les remerciements officiels',
      'Reçu fiscal',
    ],
    icon: 'mdi:medal',
    cta: 'Devenir Mécène',
    highlight: true,
  },
  {
    label: 'Partenaire',
    price: 'Sur devis',
    period: '',
    description: 'Pour les institutions et entreprises engagées dans la culture.',
    features: [
      'Tous les avantages Mécène',
      'Logo et présence sur le site web',
      'Co-organisation d’événements',
      'Mécénat de compétences possible',
      'Convention de partenariat dédiée',
    ],
    icon: 'mdi:handshake',
    cta: 'Nous contacter',
    highlight: false,
  },
]

const usages = [
  { icon: 'mdi:archive',           title: 'Conservation des archives',        text: 'Numérisation, stockage et restauration des documents anciens (PDFs, photos, manuscrits).' },
  { icon: 'mdi:account-voice',     title: 'Collecte de la mémoire orale',     text: 'Enregistrement et transcription des récits transmis par les Sages et les anciens.' },
  { icon: 'mdi:web',               title: 'Plateforme numérique',             text: 'Maintenance et enrichissement de ce site web pour le rendre toujours plus accessible.' },
  { icon: 'mdi:school',            title: 'Programmes éducatifs',             text: 'Conférences, ateliers et publications à destination des écoles et du grand public.' },
  { icon: 'mdi:calendar-star',     title: 'Événements & cérémonies',          text: 'Organisation de commémorations et de cérémonies traditionnelles.' },
  { icon: 'mdi:bank',              title: 'Patrimoine bâti',                  text: 'Soutien aux projets de préservation des sites historiques liés à la dynastie.' },
]
</script>

<template>
  <PageBanner subtitle="Soutenir la dynastie" />

  <!-- ============ INTRO ============ -->
  <section class="bg-app-bg py-10 md:py-20">
    <div class="max-w-4xl mx-auto px-4 lg:px-8 text-center" data-aos="fade-up">
      <p class="text-app-accent uppercase tracking-[0.25em] text-xs font-semibold mb-4">Préservons ensemble</p>
      <h2 class="font-Cormorant text-3xl lg:text-5xl text-app-primary font-semibold leading-tight mb-6">
        Votre soutien fait vivre notre patrimoine.
      </h2>
      <div class="w-20 h-1 bg-app-accent mx-auto mb-8"></div>
      <p class="text-app-muted text-lg leading-relaxed">
        La préservation et la valorisation du patrimoine dynastique demandent des moyens humains et matériels.
        Chaque contribution, quelle que soit sa forme, participe à transmettre cette mémoire aux générations futures.
      </p>
    </div>
  </section>

  <!-- ============ NIVEAUX DE SOUTIEN ============ -->
  <section class="bg-royal-50 py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="Niveaux de soutien"
        title="Choisissez votre engagement"
        description="Trois niveaux pour s'adapter à votre capacité de contribution."
      />

      <div class="grid md:grid-cols-3 gap-6">
        <div
          v-for="(n, idx) in niveaux"
          :key="n.label"
          :class="[
            'relative flex flex-col p-8 transition-all duration-500',
            n.highlight
              ? 'bg-app-dark text-white shadow-2xl scale-100 md:scale-105 z-10'
              : 'bg-white border border-royal-200 hover:border-app-accent hover:shadow-xl'
          ]"
          data-aos="fade-up"
          :data-aos-delay="idx * 100"
        >
          <span
            v-if="n.highlight"
            class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-app-accent text-app-dark text-[10px] uppercase tracking-widest font-semibold px-4 py-1.5"
          >
            Recommandé
          </span>

          <div :class="['size-14 flex items-center justify-center mb-6', n.highlight ? 'bg-app-accent text-app-dark' : 'bg-royal-100 text-app-primary']">
            <Icon :icon="n.icon" class="size-7" />
          </div>

          <h3 :class="['font-Cormorant text-3xl font-semibold mb-2', n.highlight ? 'text-app-accent' : 'text-app-primary']">
            {{ n.label }}
          </h3>
          <p :class="['text-sm mb-6', n.highlight ? 'text-royal-100/80' : 'text-app-muted']">{{ n.description }}</p>

          <div class="mb-6">
            <p :class="['font-Cormorant text-2xl font-semibold leading-tight', n.highlight ? 'text-white' : 'text-app-dark']">
              {{ n.price }}
            </p>
            <p v-if="n.period" :class="['text-xs uppercase tracking-widest mt-1', n.highlight ? 'text-app-accent' : 'text-app-muted']">{{ n.period }}</p>
          </div>

          <ul class="space-y-3 mb-8 flex-1">
            <li
              v-for="(f, fidx) in n.features"
              :key="fidx"
              :class="['flex items-start gap-3 text-sm', n.highlight ? 'text-royal-100/90' : 'text-app-dark/85']"
            >
              <Icon :icon="'mdi:check-circle'" :class="['size-5 shrink-0 mt-0.5', n.highlight ? 'text-app-accent' : 'text-app-primary']" />
              <span>{{ f }}</span>
            </li>
          </ul>

          <router-link
            :to="{ name: 'frontend.contact' }"
            :class="[
              'inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors group',
              n.highlight
                ? 'bg-app-accent hover:bg-royal-300 text-app-dark'
                : 'bg-app-primary hover:bg-royal-800 text-white'
            ]"
          >
            {{ n.cta }}
            <Icon icon="mdi:arrow-right" class="size-4 transition-transform group-hover:translate-x-1" />
          </router-link>
        </div>
      </div>

      <p class="text-center text-sm text-app-muted italic mt-10">
        [TODO contenu client] Les montants sont indicatifs et seront ajustés en fonction des besoins concrets de la dynastie.
      </p>
    </div>
  </section>

  <!-- ============ À QUOI SERVENT LES DONS ============ -->
  <section class="bg-app-bg py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="Transparence"
        title="À quoi servent vos contributions ?"
        description="Six axes concrets sur lesquels vos dons sont engagés."
      />

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(u, idx) in usages"
          :key="u.title"
          class="bg-white border-l-4 border-app-accent p-6 shadow-sm"
          data-aos="fade-up"
          :data-aos-delay="idx * 80"
        >
          <div class="flex items-start gap-4">
            <div class="shrink-0 size-12 flex items-center justify-center bg-royal-100 text-app-primary">
              <Icon :icon="u.icon" class="size-6" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-Cormorant text-xl font-semibold text-app-primary mb-2">{{ u.title }}</h3>
              <p class="text-sm text-app-muted leading-relaxed">{{ u.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ CTA ============ -->
  <section class="relative py-10 md:py-20 overflow-hidden bg-gradient-to-br from-app-primary via-royal-800 to-royal-900 text-white">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,39,0.18),transparent_60%)]"></div>
    <div class="relative max-w-4xl mx-auto px-4 lg:px-8 text-center" data-aos="fade-up">
      <p class="text-app-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6">Prêt à nous soutenir ?</p>
      <h2 class="font-Cormorant text-3xl lg:text-4xl font-semibold leading-tight mb-6">
        Discutons de votre engagement.
      </h2>
      <div class="w-20 h-1 bg-app-accent mx-auto mb-8"></div>
      <p class="text-royal-100/90 text-lg leading-relaxed mb-10">
        Contactez-nous pour échanger sur la forme de soutien la plus adaptée à votre situation.
      </p>
      <router-link
        :to="{ name: 'frontend.contact' }"
        class="inline-flex items-center gap-3 bg-app-accent hover:bg-royal-300 text-app-dark px-10 py-4 text-sm font-semibold uppercase tracking-wider transition-colors group"
      >
        Faire un don ou un partenariat
        <Icon icon="mdi:arrow-right" class="size-4 transition-transform group-hover:translate-x-1" />
      </router-link>
    </div>
  </section>
</template>
