<script setup>
import { Icon } from '@iconify/vue'
import { formatDateParts, formatDateLong } from '@/helpers/date.js'
import { computed } from 'vue'

const props = defineProps({
  slug:     { type: String, required: true },
  title:    { type: String, required: true },
  excerpt:  { type: String, required: true },
  image:    { type: String, required: true },
  date:     { type: String, required: true },
  time:     { type: String, default: null },
  location: { type: String, default: null },
  category: { type: String, default: 'Événement' },
  status:   { type: String, default: 'upcoming' }, // 'upcoming' | 'past'
  audience: { type: String, default: null },
})

const dateParts = computed(() => formatDateParts(props.date))
const isPast = computed(() => props.status === 'past')
</script>

<template>
  <router-link
    :to="{ name: 'frontend.agenda.details', params: { slug } }"
    class="group flex bg-white border border-royal-200 hover:border-app-accent hover:shadow-2xl transition-all duration-500 overflow-hidden"
  >
    <!-- Date column -->
    <div
      :class="[
        'shrink-0 w-24 sm:w-28 flex flex-col items-center justify-center text-center py-6 transition-colors',
        isPast
          ? 'bg-royal-100 text-app-muted'
          : 'bg-app-primary text-white group-hover:bg-app-dark'
      ]"
    >
      <span class="font-Cormorant text-4xl font-semibold leading-none">{{ dateParts.day }}</span>
      <span :class="['text-xs uppercase tracking-widest font-semibold mt-1', isPast ? '' : 'text-app-accent']">{{ dateParts.month }}</span>
      <span class="text-xs opacity-70 mt-1">{{ dateParts.year }}</span>
    </div>

    <!-- Content -->
    <div class="flex-1 min-w-0 p-5 flex flex-col">
      <div class="flex items-center gap-2 mb-2">
        <span
          :class="[
            'inline-block text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5',
            isPast
              ? 'bg-royal-100 text-app-muted'
              : 'bg-app-accent/15 text-app-accent'
          ]"
        >
          {{ category }}
        </span>
        <span v-if="isPast" class="text-[10px] uppercase tracking-widest font-semibold bg-app-muted/15 text-app-muted px-2 py-0.5">
          Événement passé
        </span>
      </div>

      <h3 class="font-Cormorant text-xl font-semibold text-app-primary leading-tight group-hover:text-app-accent transition-colors">
        {{ title }}
      </h3>

      <div class="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-app-muted mt-2">
        <span v-if="time" class="flex items-center gap-1">
          <Icon icon="mdi:clock-outline" class="size-3.5 text-app-accent" />
          {{ time }}
        </span>
        <span v-if="location" class="flex items-center gap-1">
          <Icon icon="mdi:map-marker" class="size-3.5 text-app-accent" />
          {{ location }}
        </span>
        <span v-if="audience" class="flex items-center gap-1">
          <Icon icon="mdi:account-group" class="size-3.5 text-app-accent" />
          {{ audience }}
        </span>
      </div>

      <p class="text-sm text-app-muted leading-relaxed mt-3 line-clamp-2">{{ excerpt }}</p>
    </div>
  </router-link>
</template>
