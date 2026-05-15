<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { Icon } from '@iconify/vue'
import PageBanner from '@/components/frontend/PageBanner.vue'
import ArticleCard from '@/components/frontend/ArticleCard.vue'
import SectionTitle from '@/components/frontend/SectionTitle.vue'
import { findArticleBySlug, relatedArticles } from '@/data/articles.js'
import { formatDateLong } from '@/helpers/date.js'

const route = useRoute()
const article = computed(() => findArticleBySlug(route.params.slug))
const related = computed(() => article.value ? relatedArticles(article.value.slug, 3) : [])
</script>

<template>
  <template v-if="article">
    <PageBanner
      :title="article.title"
      :subtitle="article.category"
      :image="article.image"
      :breadcrumb="[
        { label: 'Accueil',     to: { name: 'frontend.welcome' } },
        { label: 'Actualités',  to: { name: 'frontend.actualites' } },
        { label: article.title }
      ]"
    />

    <article class="bg-app-bg py-10 md:py-20">
      <div class="max-w-3xl mx-auto px-4 lg:px-8">

        <!-- Méta -->
        <div class="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-app-muted mb-8 pb-6 border-b border-royal-200" data-aos="fade-up">
          <span class="flex items-center gap-1.5">
            <Icon icon="mdi:calendar" class="size-4 text-app-accent" />
            {{ formatDateLong(article.date) }}
          </span>
          <span v-if="article.author" class="flex items-center gap-1.5">
            <Icon icon="mdi:account" class="size-4 text-app-accent" />
            {{ article.author }}
          </span>
          <span v-if="article.readingMinutes" class="flex items-center gap-1.5">
            <Icon icon="mdi:clock-outline" class="size-4 text-app-accent" />
            Lecture : {{ article.readingMinutes }} min
          </span>
          <span class="flex items-center gap-1.5">
            <Icon icon="mdi:bookmark-outline" class="size-4 text-app-accent" />
            {{ article.category }}
          </span>
        </div>

        <p class="font-Cormorant text-2xl text-app-primary italic leading-snug mb-8" data-aos="fade-up">
          {{ article.excerpt }}
        </p>

        <div class="space-y-6 text-app-dark/85 leading-relaxed" data-aos="fade-up">
          <p v-for="(p, idx) in article.content" :key="idx" :class="idx === 0 ? 'text-lg' : ''">
            {{ p }}
          </p>
        </div>

        <!-- Partage -->
        <div class="mt-12 pt-8 border-t border-royal-200">
          <div class="flex flex-wrap items-center gap-4">
            <span class="text-xs uppercase tracking-widest text-app-accent font-semibold">Partager</span>
            <a href="#" class="size-10 flex items-center justify-center border border-royal-200 hover:bg-app-accent hover:border-app-accent hover:text-app-dark text-app-primary transition-colors" aria-label="Facebook">
              <Icon icon="mdi:facebook" class="size-5" />
            </a>
            <a href="#" class="size-10 flex items-center justify-center border border-royal-200 hover:bg-app-accent hover:border-app-accent hover:text-app-dark text-app-primary transition-colors" aria-label="Twitter">
              <Icon icon="mdi:twitter" class="size-5" />
            </a>
            <a href="#" class="size-10 flex items-center justify-center border border-royal-200 hover:bg-app-accent hover:border-app-accent hover:text-app-dark text-app-primary transition-colors" aria-label="WhatsApp">
              <Icon icon="mdi:whatsapp" class="size-5" />
            </a>
            <a :href="`mailto:?subject=${encodeURIComponent(article.title)}`" class="size-10 flex items-center justify-center border border-royal-200 hover:bg-app-accent hover:border-app-accent hover:text-app-dark text-app-primary transition-colors" aria-label="Email">
              <Icon icon="mdi:email-outline" class="size-5" />
            </a>
          </div>
        </div>

        <router-link
          :to="{ name: 'frontend.actualites' }"
          class="inline-flex items-center gap-2 mt-10 text-sm font-semibold text-app-primary hover:text-app-accent transition-colors group"
        >
          <Icon icon="mdi:arrow-left" class="size-4 transition-transform group-hover:-translate-x-1" />
          Retour à toutes les actualités
        </router-link>

      </div>
    </article>

    <!-- Articles liés -->
    <section v-if="related.length" class="bg-royal-50 py-10 md:py-20">
      <div class="max-w-7xl mx-auto px-4 lg:px-8">
        <SectionTitle eyebrow="À lire aussi" title="D'autres articles" align="left" />
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ArticleCard v-for="a in related" :key="a.slug" v-bind="a" />
        </div>
      </div>
    </section>
  </template>

  <!-- Article introuvable -->
  <template v-else>
    <PageBanner title="Article introuvable" subtitle="Erreur 404" />
    <section class="bg-app-bg py-10 md:py-20">
      <div class="max-w-3xl mx-auto px-4 lg:px-8 text-center">
        <Icon icon="mdi:file-document-alert-outline" class="size-16 text-app-muted/40 mx-auto mb-4" />
        <p class="font-Cormorant text-2xl text-app-primary mb-4">L'article demandé n'existe pas ou a été déplacé.</p>
        <router-link
          :to="{ name: 'frontend.actualites' }"
          class="inline-flex items-center gap-3 bg-app-primary hover:bg-royal-800 text-white px-8 py-3 text-sm font-semibold uppercase tracking-wider transition-colors"
        >
          Retour aux actualités
          <Icon icon="mdi:arrow-right" class="size-4" />
        </router-link>
      </div>
    </section>
  </template>
</template>
