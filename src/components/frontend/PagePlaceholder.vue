<script setup>
import PageBanner from '@/components/frontend/PageBanner.vue'

defineProps({
  image:    { type: String, default: null },
  subtitle: { type: String, default: 'Dynastie Royale Dê-Mèssè' },
})
</script>

<template>
  <PageBanner :image="image" :subtitle="subtitle" />

  <section class="max-w-5xl mx-auto px-4 lg:px-8 py-10 md:py-20 text-center">
    <div class="inline-flex items-center justify-center size-16 rounded-full bg-royal-200 mb-6">
      <span class="font-Cormorant text-3xl text-app-primary">✦</span>
    </div>
    <p class="font-Cormorant text-2xl text-app-dark italic mb-2">
      Page en cours de construction
    </p>
    <p class="text-app-muted text-sm">
      Le contenu sera intégré aux étapes suivantes.
    </p>
  </section>
</template>
