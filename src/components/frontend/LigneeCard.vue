<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  name:        { type: String, required: true },
  period:      { type: String, default: null },
  description: { type: String, required: true },
  to:          { type: Object, required: true },
  icon:        { type: String, default: 'mdi:crown' },
})
</script>

<template>
  <router-link
    :to="to"
    class="group relative flex flex-col bg-white border border-royal-200 hover:border-app-accent hover:shadow-2xl transition-all duration-500 p-8 overflow-hidden"
  >
    <div class="absolute -top-10 -right-10 size-32 rounded-full bg-royal-100/40 group-hover:bg-app-accent/20 transition-colors duration-500"></div>

    <div class="relative flex items-center justify-center size-16 rounded-full bg-royal-100 group-hover:bg-app-primary text-app-primary group-hover:text-app-accent transition-colors duration-500 mb-6">
      <Icon :icon="icon" class="size-8" />
    </div>

    <h3 class="relative font-Cormorant text-3xl font-semibold text-app-primary mb-1">{{ name }}</h3>
    <p v-if="period" class="relative text-xs uppercase tracking-widest text-app-accent font-semibold mb-4">{{ period }}</p>
    <p class="relative text-sm text-app-muted leading-relaxed flex-1">{{ description }}</p>

    <div class="relative mt-6 flex items-center gap-2 text-sm font-semibold text-app-primary group-hover:gap-3 transition-all">
      Découvrir la lignée
      <Icon icon="mdi:arrow-right" class="size-4" />
    </div>
  </router-link>
</template>
