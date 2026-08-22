<script setup>
import { Icon } from '@iconify/vue'
import PageBanner from '@/components/frontend/PageBanner.vue'
import SectionTitle from '@/components/frontend/SectionTitle.vue'

const conseilSages = [
  { name: '[Nom à compléter]',  role: 'Président du Conseil des Sages', bio: 'Garant de la mémoire dynastique et des traditions transmises depuis Tê Agbanlin.' },
  { name: '[Nom à compléter]',  role: 'Vice-président',                  bio: 'Membre éminent de la lignée, dépositaire des récits oraux.' },
  { name: '[Nom à compléter]',  role: 'Secrétaire',                       bio: 'Responsable des archives écrites et de la conservation documentaire.' },
  { name: '[Nom à compléter]',  role: 'Sage',                             bio: 'Voix d’autorité dans les délibérations majeures de la dynastie.' },
  { name: '[Nom à compléter]',  role: 'Sage',                             bio: 'Expert reconnu des coutumes et protocoles royaux.' },
  { name: '[Nom à compléter]',  role: 'Sage',                             bio: 'Représentant d’une branche historique de la lignée.' },
]

const ministres = [
  { title: 'Migan',     description: 'Premier ministre du roi, chef du gouvernement et de la justice royale.' },
  { title: 'Gogan',     description: 'Ministre des cérémonies et des affaires protocolaires.' },
  { title: 'Mewou',     description: 'Ministre des affaires intérieures et de la sécurité du royaume.' },
  { title: 'Akplogan',  description: 'Ministre des cultes et des affaires spirituelles.' },
  { title: 'Awatagan',  description: 'Ministre du commerce et des relations avec les royaumes voisins.' },
]

const equipeSite = [
  { name: '[À compléter]', role: 'Coordination du projet',     icon: 'mdi:account-tie' },
  { name: '[À compléter]', role: 'Rédaction & contenus',       icon: 'mdi:notebook-edit-outline' },
  { name: '[À compléter]', role: 'Conception & développement', icon: 'mdi:palette-outline' },
]
</script>

<template>
  <PageBanner subtitle="Notre Comité" />

  <!-- ============ INTRO ============ -->
  <section class="bg-app-bg py-10 md:py-20">
    <div class="max-w-4xl mx-auto px-4 lg:px-8 text-center" data-aos="fade-up">
      <p class="text-app-accent uppercase tracking-[0.25em] text-xs font-semibold mb-4">Au service de la dynastie</p>
      <h2 class="font-Cormorant text-3xl lg:text-5xl text-app-primary font-semibold leading-tight mb-6">
        Les hommes et femmes qui font vivre l’héritage.
      </h2>
      <div class="w-20 h-1 bg-app-accent mx-auto mb-8"></div>
      <p class="text-app-muted text-lg leading-relaxed">
        Le Comité de la Dynastie Royale Dê-Mêsse rassemble les Sages, les dépositaires de la mémoire
        et les acteurs de la transmission. Aux côtés des ministres traditionnels, ils veillent
        à la perpétuation des institutions et à la valorisation du patrimoine.
      </p>
    </div>
  </section>

  <!-- ============ CONSEIL DES SAGES ============ -->
  <section class="bg-royal-50 py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="Conseil des Sages"
        title="Les gardiens de la mémoire"
        description="Le Conseil des Sages est l'organe principal de la dynastie. Il s'est réuni notamment en 1993, 1998 et lors de l'Assemblée Générale de 1973."
      />

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(m, idx) in conseilSages"
          :key="m.name + idx"
          class="bg-white border border-royal-200 hover:border-app-accent hover:shadow-xl transition-all duration-500 overflow-hidden"
          data-aos="fade-up"
          :data-aos-delay="idx * 80"
        >
          <div class="aspect-[4/5] bg-gradient-to-br from-royal-100 to-royal-200 flex items-center justify-center relative">
            <Icon icon="mdi:account-circle" class="size-32 text-app-primary/30" />
            <span class="absolute top-3 left-3 text-[10px] uppercase tracking-widest bg-app-dark/80 text-app-accent px-2 py-1">Photo à venir</span>
          </div>
          <div class="p-6">
            <h3 class="font-Cormorant text-2xl font-semibold text-app-primary leading-tight">{{ m.name }}</h3>
            <p class="text-xs uppercase tracking-widest text-app-accent font-semibold mt-1 mb-3">{{ m.role }}</p>
            <p class="text-sm text-app-muted leading-relaxed">{{ m.bio }}</p>
          </div>
        </div>
      </div>

      <p class="text-center text-sm text-app-muted italic mt-10">
        [TODO contenu client] La liste complète des membres du Conseil des Sages, leurs portraits
        et leurs biographies seront enrichis ici.
      </p>
    </div>
  </section>

  <!-- ============ MINISTRES TRADITIONNELS ============ -->
  <section class="bg-app-bg py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="Cour royale"
        title="Les ministres traditionnels"
        description="L'organisation administrative du royaume est assurée depuis Tê Agbanlin par cinq ministères aux fonctions précises."
      />

      <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <div
          v-for="(m, idx) in ministres"
          :key="m.title"
          class="group flex flex-col items-center text-center p-6 bg-white border border-royal-200 hover:border-app-accent hover:shadow-xl transition-all duration-500"
          data-aos="fade-up"
          :data-aos-delay="idx * 80"
        >
          <div class="size-14 flex items-center justify-center rounded-full bg-royal-100 group-hover:bg-app-primary text-app-primary group-hover:text-app-accent transition-colors duration-500 mb-4">
            <Icon icon="mdi:crown-outline" class="size-7" />
          </div>
          <h3 class="font-Cormorant text-2xl font-semibold text-app-primary mb-2">{{ m.title }}</h3>
          <p class="text-xs text-app-muted leading-relaxed">{{ m.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ ÉQUIPE DU SITE ============ -->
  <section class="bg-royal-50 py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="Équipe éditoriale"
        title="Ceux qui animent ce site"
        description="L'équipe en charge de la conception, de la rédaction et de la mise à jour de la plateforme."
      />

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(p, idx) in equipeSite"
          :key="p.role"
          class="flex items-start gap-5 bg-white border border-royal-200 p-6"
          data-aos="fade-up"
          :data-aos-delay="idx * 80"
        >
          <div class="shrink-0 size-14 flex items-center justify-center bg-royal-100 text-app-primary">
            <Icon :icon="p.icon" class="size-7" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs uppercase tracking-widest text-app-accent font-semibold mb-1">{{ p.role }}</p>
            <p class="font-Cormorant text-xl font-semibold text-app-primary leading-tight">{{ p.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ CTA ============ -->
  <section class="relative py-10 md:py-20 overflow-hidden bg-gradient-to-br from-app-primary via-royal-800 to-royal-900 text-white">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,39,0.18),transparent_60%)]"></div>
    <div class="relative max-w-4xl mx-auto px-4 lg:px-8 text-center" data-aos="fade-up">
      <p class="text-app-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6">Rejoindre le Comité</p>
      <h2 class="font-Cormorant text-3xl lg:text-4xl font-semibold leading-tight mb-6">
        Vous souhaitez contribuer aux travaux du Comité ?
      </h2>
      <div class="w-20 h-1 bg-app-accent mx-auto mb-8"></div>
      <p class="text-royal-100/90 text-lg leading-relaxed mb-10">
        Les contributions de toutes celles et ceux attachés à la mémoire dynastique sont les bienvenues.
      </p>
      <router-link
        :to="{ name: 'frontend.contact' }"
        class="inline-flex items-center gap-3 bg-app-accent hover:bg-royal-300 text-app-dark px-10 py-4 text-sm font-semibold uppercase tracking-wider transition-colors group"
      >
        Nous écrire
        <Icon icon="mdi:arrow-right" class="size-4 transition-transform group-hover:translate-x-1" />
      </router-link>
    </div>
  </section>
</template>
