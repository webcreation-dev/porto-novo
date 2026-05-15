<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Icon } from '@iconify/vue'
import defaultImage from '@/assets/images/recits/royaume-porto-novo.jpg'

const props = defineProps({
  title:      { type: String,  default: null },
  subtitle:   { type: String,  default: 'Dynastie Royale Dê-Mèssè' },
  image:      { type: String,  default: null },
  breadcrumb: { type: Array,   default: null }, // [{ label, to? }]
})

const route = useRoute()
const router = useRouter()

const bgImage = computed(() => props.image || defaultImage)
const displayTitle = computed(() => props.title || route.meta?.title || '')

const items = computed(() => {
  if (props.breadcrumb) return props.breadcrumb
  return [
    { label: 'Accueil', to: { name: 'frontend.welcome' } },
    { label: displayTitle.value },
  ]
})
</script>

<template>
  <section
    class="relative overflow-hidden bg-app-dark"
    :style="{ backgroundImage: `url(${'https://static.dw.com/image/75456585_1005.jpg'})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
  >
    <div class="absolute inset-0 bg-gradient-to-r from-app-dark/90 via-app-dark/75 to-app-primary/60"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(201,162,39,0.15),transparent_60%)]"></div>

    <div class="relative max-w-7xl mx-auto px-4 lg:px-8 py-10">
      <div class="max-w-3xl">
        <p
          v-if="subtitle"
          class="text-app-accent uppercase tracking-[0.25em] text-xs lg:text-sm font-semibold mb-4"
          data-aos="fade-down"
          data-aos-duration="600"
        >
          {{ subtitle }}
        </p>

        <h1
          class="font-Cormorant text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          {{ displayTitle }}
        </h1>

        <div class="w-20 h-1 bg-app-accent mt-6 mb-8" data-aos="fade-up" data-aos-duration="800"></div>

        <nav
          v-if="items.length"
          class="flex flex-wrap items-center gap-2 text-sm text-royal-200/90"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <template v-for="(item, idx) in items" :key="idx">
            <component
              :is="item.to ? 'router-link' : 'span'"
              :to="item.to"
              :class="[
                idx === items.length - 1 ? 'text-app-accent font-medium' : 'hover:text-app-accent transition-colors cursor-pointer',
              ]"
            >
              {{ item.label }}
            </component>
            <Icon
              v-if="idx < items.length - 1"
              icon="mdi:chevron-right"
              class="size-4 text-royal-300/60"
            />
          </template>
        </nav>
      </div>
    </div>
  </section>
</template>
