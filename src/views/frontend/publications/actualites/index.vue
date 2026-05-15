<script setup>
import { ref, computed } from 'vue'
import { Icon } from '@iconify/vue'
import PageBanner from '@/components/frontend/PageBanner.vue'
import ArticleCard from '@/components/frontend/ArticleCard.vue'
import { articles } from '@/data/articles.js'
import { formatDateLong } from '@/helpers/date.js'

const search = ref('')
const selectedCategory = ref('Toutes')

const categories = computed(() => {
  const cats = new Set(articles.map(a => a.category))
  return ['Toutes', ...cats]
})

const filtered = computed(() => {
  return articles.filter(a => {
    const matchSearch = !search.value || a.title.toLowerCase().includes(search.value.toLowerCase())
    const matchCat = selectedCategory.value === 'Toutes' || a.category === selectedCategory.value
    return matchSearch && matchCat
  })
})

const recent = computed(() => articles.slice(0, 4))
</script>

<template>
  <PageBanner subtitle="Publications" />

  <section class="bg-app-bg py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-10">

        <!-- Liste articles -->
        <main class="lg:col-span-8">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
            <p class="text-sm text-app-muted">
              <strong class="text-app-primary">{{ filtered.length }}</strong> article{{ filtered.length > 1 ? 's' : '' }}
              <span v-if="selectedCategory !== 'Toutes'"> dans « <span class="text-app-accent">{{ selectedCategory }}</span> »</span>
            </p>
            <button
              v-if="search || selectedCategory !== 'Toutes'"
              @click="search = ''; selectedCategory = 'Toutes'"
              class="inline-flex items-center gap-2 text-sm text-app-primary hover:text-app-accent transition-colors"
            >
              <Icon icon="mdi:filter-remove-outline" class="size-4" />
              Réinitialiser les filtres
            </button>
          </div>

          <div v-if="filtered.length === 0" class="text-center py-20">
            <Icon icon="mdi:book-search-outline" class="size-16 text-app-muted/40 mx-auto mb-4" />
            <p class="font-Cormorant text-2xl text-app-primary mb-2">Aucun article trouvé</p>
            <p class="text-sm text-app-muted">Essayez d'autres mots-clés ou catégories.</p>
          </div>

          <div v-else class="grid sm:grid-cols-2 gap-6">
            <ArticleCard
              v-for="a in filtered"
              :key="a.slug"
              v-bind="a"
              data-aos="fade-up"
            />
          </div>
        </main>

        <!-- Sidebar -->
        <aside class="lg:col-span-4 space-y-8" data-aos="fade-left">
          <!-- Recherche -->
          <div class="bg-white border border-royal-200 p-6">
            <h3 class="font-Cormorant text-xl font-semibold text-app-primary mb-4">Rechercher</h3>
            <div class="relative">
              <Icon icon="mdi:magnify" class="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-app-muted" />
              <input
                v-model="search"
                type="text"
                placeholder="Mot-clé, titre..."
                class="w-full bg-app-bg border border-royal-200 pl-10 pr-4 py-2.5 text-sm text-app-dark placeholder-app-muted/60 focus:outline-none focus:border-app-accent focus:ring-1 focus:ring-app-accent transition-colors"
              />
            </div>
          </div>

          <!-- Catégories -->
          <div class="bg-white border border-royal-200 p-6">
            <h3 class="font-Cormorant text-xl font-semibold text-app-primary mb-4">Catégories</h3>
            <ul class="space-y-1">
              <li v-for="cat in categories" :key="cat">
                <button
                  @click="selectedCategory = cat"
                  :class="[
                    'w-full text-left flex items-center justify-between px-3 py-2 transition-colors',
                    selectedCategory === cat
                      ? 'bg-royal-50 text-app-primary font-semibold'
                      : 'text-app-dark hover:bg-royal-50/60 hover:text-app-primary'
                  ]"
                >
                  <span class="flex items-center gap-2 text-sm">
                    <Icon icon="mdi:bookmark-outline" class="size-4 text-app-accent" />
                    {{ cat }}
                  </span>
                  <span class="text-xs text-app-muted">
                    {{ cat === 'Toutes' ? articles.length : articles.filter(a => a.category === cat).length }}
                  </span>
                </button>
              </li>
            </ul>
          </div>

          <!-- Articles récents -->
          <div class="bg-white border border-royal-200 p-6">
            <h3 class="font-Cormorant text-xl font-semibold text-app-primary mb-4">Articles récents</h3>
            <ul class="space-y-4">
              <li v-for="a in recent" :key="a.slug">
                <router-link
                  :to="{ name: 'frontend.actualites.details', params: { slug: a.slug } }"
                  class="flex items-start gap-3 group"
                >
                  <img :src="a.image" :alt="a.title" class="size-16 object-cover shrink-0" />
                  <div class="flex-1 min-w-0">
                    <p class="text-xs text-app-muted">{{ formatDateLong(a.date) }}</p>
                    <p class="text-sm font-Cormorant font-semibold text-app-primary leading-tight group-hover:text-app-accent transition-colors line-clamp-2">
                      {{ a.title }}
                    </p>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>

          <!-- CTA Newsletter -->
          <div class="bg-app-dark text-white p-6 relative overflow-hidden">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,39,0.18),transparent_60%)]"></div>
            <div class="relative">
              <Icon icon="mdi:email-newsletter" class="size-10 text-app-accent mb-3" />
              <h3 class="font-Cormorant text-2xl font-semibold mb-2">Restez informé</h3>
              <p class="text-sm text-royal-100/80 mb-4">Recevez nos nouvelles publications directement dans votre boîte mail.</p>
              <router-link
                :to="{ name: 'frontend.contact' }"
                class="inline-flex items-center gap-2 bg-app-accent hover:bg-royal-300 text-app-dark px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                S'abonner
                <Icon icon="mdi:arrow-right" class="size-3" />
              </router-link>
            </div>
          </div>
        </aside>

      </div>
    </div>
  </section>
</template>
