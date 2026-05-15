<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import PageBanner from '@/components/frontend/PageBanner.vue'
import EventCard from '@/components/frontend/EventCard.vue'
import SectionTitle from '@/components/frontend/SectionTitle.vue'
import { findEventBySlug, relatedEvents } from '@/data/events.js'
import { formatDateLong, formatDateParts } from '@/helpers/date.js'

const route = useRoute()
const event = computed(() => findEventBySlug(route.params.slug))
const related = computed(() => event.value ? relatedEvents(event.value.slug, 3) : [])
const dateParts = computed(() => event.value ? formatDateParts(event.value.date) : null)
const isPast = computed(() => event.value?.status === 'past')
</script>

<template>
  <template v-if="event">
    <PageBanner
      :title="event.title"
      :subtitle="event.category"
      :image="event.image"
      :breadcrumb="[
        { label: 'Accueil', to: { name: 'frontend.welcome' } },
        { label: 'Agenda',  to: { name: 'frontend.agenda' } },
        { label: event.title }
      ]"
    />

    <article class="bg-app-bg py-10 md:py-20">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-10">

          <!-- Contenu principal -->
          <div class="lg:col-span-8">
            <p v-if="isPast" class="inline-flex items-center gap-2 bg-app-muted/15 text-app-muted text-xs uppercase tracking-widest font-semibold px-3 py-1.5 mb-6">
              <Icon icon="mdi:history" class="size-4" />
              Événement passé
            </p>

            <p class="font-Cormorant text-2xl text-app-primary italic leading-snug mb-8" data-aos="fade-up">
              {{ event.excerpt }}
            </p>

            <div class="space-y-6 text-app-dark/85 leading-relaxed" data-aos="fade-up">
              <p v-for="(p, idx) in event.content" :key="idx" :class="idx === 0 ? 'text-lg' : ''">
                {{ p }}
              </p>
            </div>

            <router-link
              :to="{ name: 'frontend.agenda' }"
              class="inline-flex items-center gap-2 mt-10 text-sm font-semibold text-app-primary hover:text-app-accent transition-colors group"
            >
              <Icon icon="mdi:arrow-left" class="size-4 transition-transform group-hover:-translate-x-1" />
              Retour à l'agenda
            </router-link>
          </div>

          <!-- Sidebar infos pratiques -->
          <aside class="lg:col-span-4" data-aos="fade-left">
            <div class="bg-app-dark text-white p-6 lg:p-8 relative overflow-hidden sticky top-28">
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,39,0.15),transparent_60%)]"></div>

              <div class="relative">
                <!-- Date -->
                <div class="flex items-center gap-4 mb-6 pb-6 border-b border-royal-700/40">
                  <div class="shrink-0 size-20 flex flex-col items-center justify-center bg-app-accent text-app-dark text-center">
                    <span class="font-Cormorant text-3xl font-semibold leading-none">{{ dateParts.day }}</span>
                    <span class="text-[10px] uppercase tracking-widest font-semibold mt-0.5">{{ dateParts.month }}</span>
                    <span class="text-[10px] opacity-60">{{ dateParts.year }}</span>
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs uppercase tracking-widest text-app-accent font-semibold mb-1">Date</p>
                    <p class="font-Cormorant text-lg font-semibold leading-tight">{{ formatDateLong(event.date) }}</p>
                  </div>
                </div>

                <ul class="space-y-5 text-sm">
                  <li v-if="event.time" class="flex items-start gap-3">
                    <div class="shrink-0 size-9 flex items-center justify-center bg-app-accent/15 text-app-accent">
                      <Icon icon="mdi:clock-outline" class="size-4" />
                    </div>
                    <div>
                      <p class="text-xs uppercase tracking-widest text-royal-200/60 font-semibold mb-0.5">Heure</p>
                      <p class="text-royal-100">{{ event.time }}</p>
                    </div>
                  </li>
                  <li v-if="event.location" class="flex items-start gap-3">
                    <div class="shrink-0 size-9 flex items-center justify-center bg-app-accent/15 text-app-accent">
                      <Icon icon="mdi:map-marker" class="size-4" />
                    </div>
                    <div>
                      <p class="text-xs uppercase tracking-widest text-royal-200/60 font-semibold mb-0.5">Lieu</p>
                      <p class="text-royal-100">{{ event.location }}</p>
                    </div>
                  </li>
                  <li v-if="event.audience" class="flex items-start gap-3">
                    <div class="shrink-0 size-9 flex items-center justify-center bg-app-accent/15 text-app-accent">
                      <Icon icon="mdi:account-group" class="size-4" />
                    </div>
                    <div>
                      <p class="text-xs uppercase tracking-widest text-royal-200/60 font-semibold mb-0.5">Public</p>
                      <p class="text-royal-100">{{ event.audience }}</p>
                    </div>
                  </li>
                </ul>

                <router-link
                  v-if="!isPast"
                  :to="{ name: 'frontend.contact' }"
                  class="inline-flex items-center justify-center gap-2 w-full bg-app-accent hover:bg-royal-300 text-app-dark px-6 py-3 mt-8 text-sm font-semibold uppercase tracking-wider transition-colors"
                >
                  S'inscrire à l'événement
                  <Icon icon="mdi:arrow-right" class="size-4" />
                </router-link>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </article>

    <!-- Événements liés -->
    <section v-if="related.length" class="bg-royal-50 py-10 md:py-20">
      <div class="max-w-5xl mx-auto px-4 lg:px-8">
        <SectionTitle eyebrow="À ne pas manquer" title="Autres événements" align="left" />
        <div class="space-y-4">
          <EventCard v-for="ev in related" :key="ev.slug" v-bind="ev" />
        </div>
      </div>
    </section>
  </template>

  <!-- Événement introuvable -->
  <template v-else>
    <PageBanner title="Événement introuvable" subtitle="Erreur 404" />
    <section class="bg-app-bg py-10 md:py-20">
      <div class="max-w-3xl mx-auto px-4 lg:px-8 text-center">
        <Icon icon="mdi:calendar-remove" class="size-16 text-app-muted/40 mx-auto mb-4" />
        <p class="font-Cormorant text-2xl text-app-primary mb-4">L'événement demandé n'existe pas ou a été déplacé.</p>
        <router-link
          :to="{ name: 'frontend.agenda' }"
          class="inline-flex items-center gap-3 bg-app-primary hover:bg-royal-800 text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors"
        >
          Retour à l'agenda
          <Icon icon="mdi:arrow-right" class="size-4" />
        </router-link>
      </div>
    </section>
  </template>
</template>
