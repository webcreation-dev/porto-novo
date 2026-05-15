<script setup>
import { Icon } from '@iconify/vue'
import { formatDateLong } from '@/helpers/date.js'

defineProps({
  slug:     { type: String, required: true },
  title:    { type: String, required: true },
  excerpt:  { type: String, required: true },
  image:    { type: String, required: true },
  date:     { type: String, required: true },
  category: { type: String, default: 'Article' },
  author:   { type: String, default: null },
  readingMinutes: { type: Number, default: null },
})
</script>

<template>
  <router-link
    :to="{ name: 'frontend.actualites.details', params: { slug } }"
    class="group flex flex-col bg-white border border-royal-200 hover:shadow-2xl transition-all duration-500 overflow-hidden"
  >
    <div class="relative aspect-[4/3] overflow-hidden bg-royal-100">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <span class="absolute top-4 left-4 bg-app-accent text-app-dark text-xs font-semibold uppercase tracking-wider px-3 py-1">
        {{ category }}
      </span>
    </div>

    <div class="p-6 flex-1 flex flex-col">
      <div class="flex items-center gap-3 text-xs text-app-muted mb-3">
        <span class="flex items-center gap-1.5">
          <Icon icon="mdi:calendar" class="size-3.5 text-app-accent" />
          {{ formatDateLong(date) }}
        </span>
        <span v-if="readingMinutes" class="flex items-center gap-1.5">
          <Icon icon="mdi:clock-outline" class="size-3.5 text-app-accent" />
          {{ readingMinutes }} min
        </span>
      </div>

      <h3 class="font-Cormorant text-2xl font-semibold text-app-primary mb-3 leading-tight group-hover:text-app-accent transition-colors">
        {{ title }}
      </h3>
      <p class="text-sm text-app-muted leading-relaxed flex-1 line-clamp-3">{{ excerpt }}</p>

      <div class="mt-5 flex items-center gap-2 text-sm font-semibold text-app-primary group-hover:gap-3 transition-all">
        Lire l’article
        <Icon icon="mdi:arrow-right" class="size-4" />
      </div>
    </div>
  </router-link>
</template>
