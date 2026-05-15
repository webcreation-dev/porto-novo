<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  title:    { type: String, required: true },
  year:     { type: String, default: null },
  pdfUrl:   { type: String, default: null },
  to:       { type: Object, default: null },
  icon:     { type: String, default: 'mdi:file-document-outline' },
})
</script>

<template>
  <component
    :is="to ? 'router-link' : 'a'"
    :to="to"
    :href="!to ? pdfUrl : undefined"
    :target="!to ? '_blank' : undefined"
    :rel="!to ? 'noopener noreferrer' : undefined"
    class="group flex items-start gap-5 bg-white border border-royal-200 hover:border-app-accent hover:shadow-xl transition-all duration-300 p-6"
  >
    <div class="shrink-0 size-14 flex items-center justify-center bg-royal-100 group-hover:bg-app-primary text-app-primary group-hover:text-app-accent transition-colors">
      <Icon :icon="icon" class="size-7" />
    </div>

    <div class="flex-1 min-w-0">
      <p v-if="year" class="text-xs uppercase tracking-widest text-app-accent font-semibold mb-1">{{ year }}</p>
      <h3 class="font-Cormorant text-xl font-semibold text-app-primary leading-tight group-hover:text-app-accent transition-colors">
        {{ title }}
      </h3>
      <div class="mt-3 flex items-center gap-2 text-sm font-medium text-app-muted group-hover:text-app-primary group-hover:gap-3 transition-all">
        <Icon icon="mdi:download-outline" class="size-4" />
        Consulter le document
      </div>
    </div>
  </component>
</template>
