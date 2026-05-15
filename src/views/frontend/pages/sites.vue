<script setup>
import { Icon } from '@iconify/vue'
import PageBanner from '@/components/frontend/PageBanner.vue'
import SectionTitle from '@/components/frontend/SectionTitle.vue'
import imgPortoNovo from '@/assets/images/recits/royaume-porto-novo.jpg'
import imgAbomey from '@/assets/images/recits/abomey.jpg'
import imgAllada from '@/assets/images/recits/allada.jpg'
import imgKetou from '@/assets/images/recits/ketou.png'

const sites = [
  {
    image: imgPortoNovo,
    name: 'Palais Royal de Porto-Novo',
    location: 'Porto-Novo, Bénin',
    type: 'Palais royal',
    description: 'Cœur historique du royaume de Hogbonou, fondé par Tê-Agbanlin au XVIIᵉ siècle. Le palais perpétue la tradition royale et accueille les cérémonies de la dynastie.',
    practical: { hours: 'Sur rendez-vous', access: 'Visite encadrée' },
    badge: 'Site fondateur',
  },
  {
    image: imgPortoNovo,
    name: 'Musée Honmé',
    location: 'Porto-Novo, Bénin',
    type: 'Musée ethnographique',
    description: 'Ancien palais royal du roi Toffa I, transformé en musée. Il présente les regalia, les trônes et les objets cérémoniels qui racontent l’histoire de la dynastie.',
    practical: { hours: 'Mar. — Dim. · 9h — 17h', access: 'Visite libre & guidée' },
    badge: 'Musée',
  },
  {
    image: imgAbomey,
    name: 'Palais Royaux d’Abomey',
    location: 'Abomey, Bénin',
    type: 'Patrimoine UNESCO',
    description: 'Ensemble exceptionnel des palais des rois du Danxomè, classé patrimoine mondial. Un témoignage unique de l’architecture, des bas-reliefs et de l’histoire des royaumes du Bénin.',
    practical: { hours: 'Tous les jours · 9h — 18h', access: 'Visite guidée recommandée' },
    badge: 'UNESCO',
  },
  {
    image: imgAllada,
    name: 'Site royal d’Allada',
    location: 'Allada, Bénin',
    type: 'Site historique',
    description: 'Berceau historique fondé par le Roi Kokpon Adjahoutô, père de Tê-Agbanlin. Site de la mémoire des origines communes des royaumes d’Abomey et de Porto-Novo.',
    practical: { hours: 'Sur demande', access: 'Visite accompagnée' },
    badge: 'Berceau',
  },
  {
    image: imgKetou,
    name: 'Palais des Alaketou',
    location: 'Kétou, Bénin',
    type: 'Palais royal',
    description: 'Siège du royaume yoruba de Kétou, l’un des plus anciens du Bénin. Lieu de la mémoire d’une grande civilisation et de ses traditions royales.',
    practical: { hours: 'Sur rendez-vous', access: 'Visite encadrée' },
    badge: 'Royaume yoruba',
  },
  {
    image: imgPortoNovo,
    name: 'Sites cérémoniels traditionnels',
    location: 'Porto-Novo & alentours',
    type: 'Lieux sacrés',
    description: '[TODO contenu client] Présentation des lieux de mémoire et sites cérémoniels associés à la dynastie : autels, places royales, lieux de cérémonies traditionnelles.',
    practical: { hours: 'Selon le calendrier rituel', access: 'Sous accompagnement' },
    badge: 'Patrimoine immatériel',
  },
]
</script>

<template>
  <PageBanner subtitle="Sites patrimoniaux" />

  <!-- ============ INTRO ============ -->
  <section class="bg-app-bg py-10 md:py-20">
    <div class="max-w-4xl mx-auto px-4 lg:px-8 text-center" data-aos="fade-up">
      <p class="text-app-accent uppercase tracking-[0.25em] text-xs font-semibold mb-4">Sur les pas de l’histoire</p>
      <h2 class="font-Cormorant text-3xl lg:text-5xl text-app-primary font-semibold leading-tight mb-6">
        Les hauts lieux de la mémoire dynastique.
      </h2>
      <div class="w-20 h-1 bg-app-accent mx-auto mb-8"></div>
      <p class="text-app-muted text-lg leading-relaxed">
        Découvrez les palais, musées et sites historiques qui témoignent de la richesse du patrimoine
        royal du Bénin — de Porto-Novo à Abomey, en passant par Allada et Kétou.
      </p>
    </div>
  </section>

  <!-- ============ GRILLE SITES ============ -->
  <section class="bg-royal-50 py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="Patrimoine"
        title="Sites à découvrir"
        description="Six lieux qui racontent à eux seuls plusieurs siècles d'histoire dynastique."
      />

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="(s, idx) in sites"
          :key="s.name"
          class="group bg-white border border-royal-200 hover:border-app-accent hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
          data-aos="fade-up"
          :data-aos-delay="idx * 80"
        >
          <div class="relative aspect-[4/3] overflow-hidden bg-royal-100">
            <img
              :src="s.image"
              :alt="s.name"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-app-dark/80 via-transparent to-transparent"></div>
            <span class="absolute top-4 left-4 bg-app-accent text-app-dark text-xs font-semibold uppercase tracking-wider px-3 py-1">
              {{ s.badge }}
            </span>
          </div>

          <div class="p-6 flex-1 flex flex-col">
            <p class="text-xs uppercase tracking-widest text-app-accent font-semibold mb-2">{{ s.type }}</p>
            <h3 class="font-Cormorant text-2xl font-semibold text-app-primary leading-tight mb-2">{{ s.name }}</h3>
            <p class="flex items-center gap-1.5 text-sm text-app-muted mb-4">
              <Icon icon="mdi:map-marker" class="size-4 text-app-accent" />
              {{ s.location }}
            </p>
            <p class="text-sm text-app-muted leading-relaxed flex-1 mb-5">{{ s.description }}</p>

            <div class="border-t border-royal-100 pt-4 space-y-2 text-sm">
              <p class="flex items-start gap-2">
                <Icon icon="mdi:clock-outline" class="size-4 text-app-accent shrink-0 mt-0.5" />
                <span class="text-app-dark/80"><span class="text-app-muted">Horaires :</span> {{ s.practical.hours }}</span>
              </p>
              <p class="flex items-start gap-2">
                <Icon icon="mdi:ticket-confirmation-outline" class="size-4 text-app-accent shrink-0 mt-0.5" />
                <span class="text-app-dark/80"><span class="text-app-muted">Accès :</span> {{ s.practical.access }}</span>
              </p>
            </div>
          </div>
        </article>
      </div>

      <p class="text-center text-sm text-app-muted italic mt-10">
        [TODO contenu client] Les informations pratiques (horaires, accès, tarifs) doivent être validées
        avec les sites concernés et complétées avec des photographies authentiques.
      </p>
    </div>
  </section>

  <!-- ============ CTA VISITE GUIDÉE ============ -->
  <section class="relative py-10 md:py-20 overflow-hidden bg-gradient-to-br from-app-primary via-royal-800 to-royal-900 text-white">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,39,0.18),transparent_60%)]"></div>
    <div class="relative max-w-4xl mx-auto px-4 lg:px-8 text-center" data-aos="fade-up">
      <p class="text-app-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6">Organiser une visite</p>
      <h2 class="font-Cormorant text-3xl lg:text-4xl font-semibold leading-tight mb-6">
        Vous souhaitez visiter ces lieux ?
      </h2>
      <div class="w-20 h-1 bg-app-accent mx-auto mb-8"></div>
      <p class="text-royal-100/90 text-lg leading-relaxed mb-10">
        Pour les visites accompagnées, les groupes scolaires ou les chercheurs, contactez-nous
        afin de coordonner votre venue dans les meilleures conditions.
      </p>
      <router-link
        :to="{ name: 'frontend.contact' }"
        class="inline-flex items-center gap-3 bg-app-accent hover:bg-royal-300 text-app-dark px-10 py-4 text-sm font-semibold uppercase tracking-wider transition-colors group"
      >
        Demander une visite
        <Icon icon="mdi:arrow-right" class="size-4 transition-transform group-hover:translate-x-1" />
      </router-link>
    </div>
  </section>
</template>
