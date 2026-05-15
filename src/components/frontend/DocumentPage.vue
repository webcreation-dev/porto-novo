<script setup>
import { Icon } from '@iconify/vue'
import PageBanner from '@/components/frontend/PageBanner.vue'
import SectionTitle from '@/components/frontend/SectionTitle.vue'
import DocumentCard from '@/components/frontend/DocumentCard.vue'

defineProps({
  title:       { type: String, required: true },
  year:        { type: String, default: null },
  subtitle:    { type: String, default: 'Document historique' },
  pdfUrl:      { type: String, required: true },
  intro:       { type: Array,  required: true },           // [string] paragraphes contexte
  // [{ title, text }]
  highlights:  { type: Array,  default: () => [] },
  // [{ label, value, icon? }]
  metadata:    { type: Array,  default: () => [] },
  // [{ title, year, pdfUrl, icon, to? }]
  related:     { type: Array,  default: () => [] },
  prev:        { type: Object, default: null },
  next:        { type: Object, default: null },
})
</script>

<template>
  <PageBanner :title="title" :subtitle="subtitle" />

  <!-- ============ INTRO + METADATA ============ -->
  <section class="bg-app-bg py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-16">

        <div class="lg:col-span-8" data-aos="fade-right" data-aos-duration="800">
          <p class="text-app-accent uppercase tracking-[0.25em] text-xs font-semibold mb-4">Contexte historique</p>
          <h2 class="font-Cormorant text-3xl lg:text-4xl text-app-primary font-semibold leading-tight mb-6">
            {{ title }}
          </h2>
          <div class="w-20 h-1 bg-app-accent mb-8"></div>
          <div class="space-y-5">
            <p
              v-for="(p, idx) in intro"
              :key="idx"
              class="text-app-dark/85 leading-relaxed"
              :class="idx === 0 ? 'text-lg' : ''"
            >
              {{ p }}
            </p>
          </div>
        </div>

        <aside class="lg:col-span-4" data-aos="fade-left" data-aos-duration="800">
          <div class="bg-app-dark text-white p-8 relative overflow-hidden">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,39,0.15),transparent_60%)]"></div>
            <div class="relative">
              <div class="flex items-center gap-3 mb-6">
                <div class="size-12 flex items-center justify-center bg-app-accent text-app-dark">
                  <Icon icon="mdi:file-document" class="size-6" />
                </div>
                <div>
                  <p class="text-app-accent uppercase tracking-widest text-xs font-semibold">Document</p>
                  <p class="font-Cormorant text-lg font-semibold leading-tight">{{ year || 'Archive' }}</p>
                </div>
              </div>

              <ul v-if="metadata.length" class="space-y-4 mb-6">
                <li v-for="m in metadata" :key="m.label" class="flex items-start gap-3 text-sm">
                  <Icon :icon="m.icon || 'mdi:checkbox-blank-circle-outline'" class="size-4 text-app-accent shrink-0 mt-0.5" />
                  <div class="flex-1 min-w-0">
                    <p class="text-xs uppercase tracking-widest text-royal-200/60 font-semibold">{{ m.label }}</p>
                    <p class="text-royal-100">{{ m.value }}</p>
                  </div>
                </li>
              </ul>

              <a
                :href="pdfUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 w-full bg-app-accent hover:bg-royal-300 text-app-dark px-6 py-3 text-sm font-semibold uppercase tracking-wider transition-colors group"
              >
                <Icon icon="mdi:download" class="size-4" />
                Télécharger le PDF
              </a>
            </div>
          </div>
        </aside>

      </div>
    </div>
  </section>

  <!-- ============ PDF VIEWER ============ -->
  <section class="bg-royal-50 py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="Consultation"
        title="Lire le document"
        description="Naviguez dans le document directement depuis votre navigateur, ou téléchargez-le pour une consultation hors-ligne."
      />

      <div class="relative bg-app-dark border border-royal-200 shadow-2xl" data-aos="fade-up">
        <div class="aspect-[4/5] sm:aspect-[3/4] lg:aspect-[16/10] w-full">
          <iframe
            :src="pdfUrl + '#view=FitH'"
            class="w-full h-full"
            :title="title"
          ></iframe>
        </div>
      </div>

      <div class="mt-6 flex flex-wrap items-center justify-between gap-4 text-sm text-app-muted">
        <p class="flex items-center gap-2">
          <Icon icon="mdi:information-outline" class="size-4" />
          Un problème d'affichage ? <a :href="pdfUrl" target="_blank" rel="noopener" class="text-app-primary hover:text-app-accent font-semibold underline ml-1">Ouvrir dans un nouvel onglet</a>.
        </p>
        <a
          :href="pdfUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-app-primary hover:text-app-accent font-semibold transition-colors"
        >
          <Icon icon="mdi:open-in-new" class="size-4" />
          Plein écran
        </a>
      </div>
    </div>
  </section>

  <!-- ============ HIGHLIGHTS ============ -->
  <section v-if="highlights.length" class="bg-app-bg py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="Points clés"
        title="À retenir de ce document"
      />
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="(h, idx) in highlights"
          :key="h.title + idx"
          class="bg-white border-l-4 border-app-accent p-6 shadow-sm"
          data-aos="fade-up"
          :data-aos-delay="idx * 80"
        >
          <h3 class="font-Cormorant text-2xl font-semibold text-app-primary mb-2">{{ h.title }}</h3>
          <p class="text-app-muted leading-relaxed">{{ h.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ DOCUMENTS LIÉS ============ -->
  <section v-if="related.length" class="bg-royal-50 py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="À découvrir aussi"
        title="Documents liés"
      />
      <div class="grid sm:grid-cols-2 gap-6">
        <DocumentCard v-for="d in related" :key="d.title" v-bind="d" />
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
