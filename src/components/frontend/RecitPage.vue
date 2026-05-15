<script setup>
import { Icon } from '@iconify/vue'
import PageBanner from '@/components/frontend/PageBanner.vue'
import SectionTitle from '@/components/frontend/SectionTitle.vue'
import DocumentCard from '@/components/frontend/DocumentCard.vue'

defineProps({
  title:       { type: String, required: true },           // "Roi Tê-Agbanlin"
  subtitle:    { type: String, default: 'Récit historique' },
  category:    { type: String, default: 'Récit' },         // "Personnage" | "Royaume" | "Lignage"
  intro:       { type: String, required: true },           // accroche
  image:       { type: String, default: null },
  imageAlt:    { type: String, default: '' },
  story:       { type: Array,  required: true },          // [string]
  // [{ icon, label, value }]
  keyFacts:    { type: Array,  default: () => [] },
  // [{ name, period, role, description }]
  figures:     { type: Array,  default: () => [] },
  // [{ title, year, pdfUrl, icon, to? }]
  documents:   { type: Array,  default: () => [] },
  prev:        { type: Object, default: null },
  next:        { type: Object, default: null },
})
</script>

<template>
  <PageBanner :title="title" :subtitle="subtitle" />

  <!-- ============ INTRO + IMAGE ============ -->
  <section class="bg-app-bg py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

        <div v-if="image" class="lg:col-span-5 relative" data-aos="fade-right" data-aos-duration="800">
          <div class="absolute -inset-4 bg-app-accent/20 rotate-2"></div>
          <div class="relative aspect-[4/5] overflow-hidden bg-royal-100">
            <img :src="image" :alt="imageAlt || title" class="w-full h-full object-cover" />
            <div class="absolute inset-0 bg-gradient-to-t from-app-dark/80 to-transparent"></div>
            <div class="absolute bottom-0 inset-x-0 p-6">
              <p class="text-app-accent uppercase tracking-widest text-xs font-semibold">{{ category }}</p>
              <p class="font-Cormorant text-white text-2xl font-semibold leading-tight mt-1">{{ title }}</p>
            </div>
          </div>
        </div>

        <div :class="image ? 'lg:col-span-7' : 'lg:col-span-12'" data-aos="fade-left" data-aos-duration="800">
          <p class="text-app-accent uppercase tracking-[0.25em] text-xs font-semibold mb-4">{{ category }}</p>
          <h2 class="font-Cormorant text-3xl lg:text-4xl text-app-primary font-semibold leading-tight mb-6">
            {{ intro }}
          </h2>
          <div class="w-20 h-1 bg-app-accent mb-8"></div>
          <div class="space-y-5">
            <p
              v-for="(p, idx) in story"
              :key="idx"
              class="text-app-dark/85 leading-relaxed"
              :class="idx === 0 ? 'text-lg' : ''"
            >
              {{ p }}
            </p>
          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ============ KEY FACTS ============ -->
  <section v-if="keyFacts.length" class="bg-royal-50 py-10 md:py-16">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(f, idx) in keyFacts"
          :key="f.label + idx"
          class="bg-white border-l-4 border-app-accent p-6 shadow-sm flex items-start gap-4"
          data-aos="fade-up"
          :data-aos-delay="idx * 80"
        >
          <div class="shrink-0 size-12 flex items-center justify-center bg-royal-100 text-app-primary">
            <Icon :icon="f.icon || 'mdi:checkbox-blank-circle-outline'" class="size-6" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs uppercase tracking-widest text-app-accent font-semibold mb-1">{{ f.label }}</p>
            <p class="font-Cormorant text-xl font-semibold text-app-primary leading-tight">{{ f.value }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ FIGURES ============ -->
  <section v-if="figures.length" class="bg-app-bg py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="Figures associées"
        title="Personnages clés"
      />
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(f, idx) in figures"
          :key="f.name + idx"
          class="bg-white border border-royal-200 hover:border-app-accent hover:shadow-xl transition-all duration-500 p-6"
          data-aos="fade-up"
          :data-aos-delay="idx * 80"
        >
          <div class="flex items-start gap-4">
            <div class="shrink-0 size-12 flex items-center justify-center rounded-full bg-royal-100 text-app-primary">
              <Icon icon="mdi:crown" class="size-6" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="font-Cormorant text-xl font-semibold text-app-primary leading-tight">{{ f.name }}</h3>
              <p v-if="f.period" class="text-xs uppercase tracking-widest text-app-accent font-semibold mt-1">{{ f.period }}</p>
              <p v-if="f.role" class="text-sm text-app-muted italic mt-2">{{ f.role }}</p>
              <p v-if="f.description" class="text-sm text-app-muted leading-relaxed mt-3">{{ f.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ DOCUMENTS ============ -->
  <section v-if="documents.length" class="bg-royal-50 py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="Pour aller plus loin"
        title="Documents associés"
      />
      <div class="grid sm:grid-cols-2 gap-6">
        <DocumentCard v-for="d in documents" :key="d.title" v-bind="d" />
      </div>
    </div>
  </section>

  <!-- ============ NAV PREV/NEXT ============ -->
  <section v-if="prev || next" class="bg-app-bg py-10 border-t border-royal-200">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <div class="grid grid-cols-2 gap-4">
        <router-link
          v-if="prev"
          :to="prev.to"
          class="group flex items-center gap-3 text-app-dark hover:text-app-primary transition-colors"
        >
          <Icon icon="mdi:arrow-left" class="size-5 transition-transform group-hover:-translate-x-1" />
          <div class="min-w-0">
            <p class="text-xs uppercase tracking-widest text-app-accent font-semibold">Précédent</p>
            <p class="font-Cormorant text-lg font-semibold truncate">{{ prev.label }}</p>
          </div>
        </router-link>
        <span v-else></span>

        <router-link
          v-if="next"
          :to="next.to"
          class="group flex items-center gap-3 justify-end text-right text-app-dark hover:text-app-primary transition-colors"
        >
          <div class="min-w-0">
            <p class="text-xs uppercase tracking-widest text-app-accent font-semibold">Suivant</p>
            <p class="font-Cormorant text-lg font-semibold truncate">{{ next.label }}</p>
          </div>
          <Icon icon="mdi:arrow-right" class="size-5 transition-transform group-hover:translate-x-1" />
        </router-link>
        <span v-else></span>
      </div>
    </div>
  </section>
</template>
