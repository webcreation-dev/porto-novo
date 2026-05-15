<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  image:    { type: String, required: true },
  title:    { type: String, required: true },
  excerpt:  { type: String, required: true },
  category: { type: String, default: 'Récit' },
  to:       { type: Object, required: true },
})
</script>

<template>
  <router-link
    :to="to"
    class="group flex flex-col bg-white border border-royal-200 hover:shadow-2xl transition-all duration-500 overflow-hidden"
  >
    <div class="relative aspect-[4/3] overflow-hidden bg-royal-100">
      <img
        :src="image"
        :alt="title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div class="absolute inset-0 bg-gradient-to-t from-app-dark/80 via-transparent to-transparent"></div>
      <span class="absolute top-4 left-4 bg-app-accent text-app-dark text-xs font-semibold uppercase tracking-wider px-3 py-1">
        {{ category }}
      </span>
    </div>

    <div class="p-6 flex-1 flex flex-col">
      <h3 class="font-Cormorant text-2xl font-semibold text-app-primary mb-3 group-hover:text-app-accent transition-colors">
        {{ title }}
      </h3>
      <p class="text-sm text-app-muted leading-relaxed flex-1 line-clamp-3">{{ excerpt }}</p>
      <div class="mt-5 flex items-center gap-2 text-sm font-semibold text-app-primary group-hover:gap-3 transition-all">
        Lire le récit
        <Icon icon="mdi:arrow-right" class="size-4" />
      </div>
    </div>
  </router-link>
</template>
