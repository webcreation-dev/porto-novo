<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import PageBanner from '@/components/frontend/PageBanner.vue'
import SectionTitle from '@/components/frontend/SectionTitle.vue'
import EventCard from '@/components/frontend/EventCard.vue'
import { upcomingEvents, pastEvents } from '@/data/events.js'

const tab = ref('upcoming') // 'upcoming' | 'past'

const upcoming = computed(() => upcomingEvents())
const past = computed(() => pastEvents())

const visible = computed(() => tab.value === 'upcoming' ? upcoming.value : past.value)
</script>

<template>
  <PageBanner subtitle="Publications" />

  <section class="bg-app-bg py-10 md:py-20">
    <div class="max-w-5xl mx-auto px-4 lg:px-8">

      <SectionTitle
        eyebrow="Calendrier"
        title="Cérémonies, réunions, visites & rendez-vous"
        description="Retrouvez tous les événements organisés par la Dynastie Royale Dê-Messe — à venir et passés."
      />

      <!-- Tabs -->
      <div class="flex items-center justify-center gap-2 mb-10" data-aos="fade-up">
        <button
          @click="tab = 'upcoming'"
          :class="[
            'inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors',
            tab === 'upcoming'
              ? 'bg-app-primary text-white'
              : 'bg-white border border-royal-200 text-app-dark hover:border-app-accent'
          ]"
        >
          <Icon icon="mdi:calendar-month" class="size-4" />
          À venir
          <span :class="['ml-1 text-xs px-1.5 py-0.5', tab === 'upcoming' ? 'bg-app-accent text-app-dark' : 'bg-royal-100 text-app-muted']">
            {{ upcoming.length }}
          </span>
        </button>
        <button
          @click="tab = 'past'"
          :class="[
            'inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors',
            tab === 'past'
              ? 'bg-app-primary text-white'
              : 'bg-white border border-royal-200 text-app-dark hover:border-app-accent'
          ]"
        >
          <Icon icon="mdi:history" class="size-4" />
          Passés
          <span :class="['ml-1 text-xs px-1.5 py-0.5', tab === 'past' ? 'bg-app-accent text-app-dark' : 'bg-royal-100 text-app-muted']">
            {{ past.length }}
          </span>
        </button>
      </div>

      <div v-if="visible.length === 0" class="text-center py-20">
        <Icon icon="mdi:calendar-question" class="size-16 text-app-muted/40 mx-auto mb-4" />
        <p class="font-Cormorant text-2xl text-app-primary mb-2">
          {{ tab === 'upcoming' ? 'Aucun événement à venir' : 'Aucun événement passé' }}
        </p>
        <p class="text-sm text-app-muted">
          {{ tab === 'upcoming'
            ? 'Le calendrier sera bientôt mis à jour.'
            : 'L’historique des événements sera enrichi au fur et à mesure.' }}
        </p>
      </div>

      <div v-else class="space-y-4" :key="tab">
        <EventCard
          v-for="ev in visible"
          :key="ev.slug"
          v-bind="ev"
          data-aos="fade-up"
        />
      </div>

    </div>
  </section>

  <!-- CTA -->
  <section class="relative py-10 md:py-20 overflow-hidden bg-gradient-to-br from-app-primary via-royal-800 to-royal-900 text-white">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(201,162,39,0.18),transparent_60%)]"></div>
    <div class="relative max-w-4xl mx-auto px-4 lg:px-8 text-center" data-aos="fade-up">
      <p class="text-app-accent uppercase tracking-[0.3em] text-xs font-semibold mb-6">Vous voulez participer ?</p>
      <h2 class="font-Cormorant text-3xl lg:text-4xl font-semibold leading-tight mb-6">
        Inscrivez-vous à nos événements ouverts au public.
      </h2>
      <div class="w-20 h-1 bg-app-accent mx-auto mb-8"></div>
      <p class="text-royal-100/90 text-lg leading-relaxed mb-10">
        Pour les visites guidées, conférences et cérémonies ouvertes au public, contactez-nous
        afin de coordonner votre venue et obtenir le programme détaillé.
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
