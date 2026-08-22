<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { Icon } from '@iconify/vue'
import b1 from '@/assets/images/old/b1.jpg'
import b2 from '@/assets/images/old/b2.jpg'
import b3 from '@/assets/images/old/b3.jpg'
import b4 from '@/assets/images/old/b4.jpg'
import b5 from '@/assets/images/old/b5.jpg'
import b6 from '@/assets/images/old/b6.jpg'
import b7 from '@/assets/images/old/b7.jpg'

const slides = [
  {
    image: b1,
    eyebrow: 'Dynastie Royale Dê-Mèssè',
    title: 'Au cœur de notre héritage, réside la grandeur.',
    subtitle: 'Découvrez l’héritage vivant d’une lignée de légendes — sagesse, prospérité, leadership.',
    primaryCta: { label: 'Découvrir la dynastie', to: { name: 'frontend.dynastie.demesse' } },
    secondaryCta: { label: 'Histoires & récits', to: { name: 'frontend.recits.royaume-hogbonou' } },
  },
  {
    image: b2,
    eyebrow: 'Royaume de Hogbonou · 17ᵉ siècle',
    title: 'Tê Agbanlin, Fondateur et 1er Roi du royaume',
    subtitle: 'Dix-huit rois lui ont succédé jusqu’à la colonisation. Une mémoire transmise de génération en génération.',
    primaryCta: { label: 'Lire le récit', to: { name: 'frontend.recits.te-agbanlin' } },
    secondaryCta: { label: 'Les rois de Porto-Novo', to: { name: 'frontend.recits.te-agbanlin' } },
  },
  {
    image: b3,
    eyebrow: 'Patrimoine vivant',
    title: 'Une lignée, une mémoire, une nation.',
    subtitle: 'Préserver et transmettre l’histoire des grandes lignées royales du Bénin pour les générations futures.',
    primaryCta: { label: 'Documents historiques', to: { name: 'frontend.archives' } },
    secondaryCta: { label: 'Nous contacter', to: { name: 'frontend.contact' } },
  },
  {
    image: b4,
    eyebrow: 'Dynastie Royale Dê-Mèssè',
    title: 'Au cœur de notre héritage, réside la grandeur.',
    subtitle: 'Découvrez l’héritage vivant d’une lignée de légendes — sagesse, prospérité, leadership.',
    primaryCta: { label: 'Découvrir la dynastie', to: { name: 'frontend.dynastie.demesse' } },
    secondaryCta: { label: 'Histoires & récits', to: { name: 'frontend.recits.royaume-hogbonou' } },
  },
  {
    image: b5,
    eyebrow: 'Royaume de Hogbonou · 17ᵉ siècle',
    title: 'Tê Agbanlin, Fondateur et 1er Roi du royaume',
    subtitle: 'Dix-huit rois lui ont succédé jusqu’à la colonisation. Une mémoire transmise de génération en génération.',
    primaryCta: { label: 'Lire le récit', to: { name: 'frontend.recits.te-agbanlin' } },
    secondaryCta: { label: 'Les rois de Porto-Novo', to: { name: 'frontend.recits.te-agbanlin' } },
  },
  {
    image: b6,
    eyebrow: 'Patrimoine vivant',
    title: 'Une lignée, une mémoire, une nation.',
    subtitle: 'Préserver et transmettre l’histoire des grandes lignées royales du Bénin pour les générations futures.',
    primaryCta: { label: 'Documents historiques', to: { name: 'frontend.archives' } },
    secondaryCta: { label: 'Nous contacter', to: { name: 'frontend.contact' } },
  },
  {
    image: b7,
    eyebrow: 'Dynastie Royale Dê-Mèssè',
    title: 'Au cœur de notre héritage, réside la grandeur.',
    subtitle: 'Découvrez l’héritage vivant d’une lignée de légendes — sagesse, prospérité, leadership.',
    primaryCta: { label: 'Découvrir la dynastie', to: { name: 'frontend.dynastie.demesse' } },
    secondaryCta: { label: 'Histoires & récits', to: { name: 'frontend.recits.royaume-hogbonou' } },
  },
]

const current = ref(0)
const isPaused = ref(false)
let timer = null

function next() {
  current.value = (current.value + 1) % slides.length
}
function prev() {
  current.value = (current.value - 1 + slides.length) % slides.length
}
function goTo(idx) {
  current.value = idx
}

function startTimer() {
  stopTimer()
  timer = setInterval(() => {
    if (!isPaused.value) next()
  }, 6500)
}
function stopTimer() {
  if (timer) clearInterval(timer)
  timer = null
}

onMounted(startTimer)
onUnmounted(stopTimer)

const activeSlide = computed(() => slides[current.value])
</script>

<template>
  <section
    class="relative h-[calc(100vh-5rem)] min-h-[600px] overflow-hidden bg-app-dark"
    @mouseenter="isPaused = true"
    @mouseleave="isPaused = false"
  >
    <div
      v-for="(slide, idx) in slides"
      :key="idx"
      class="absolute inset-0 transition-opacity duration-1000 ease-in-out"
      :class="idx === current ? 'opacity-100' : 'opacity-0 pointer-events-none'"
    >
      <div
        class="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out"
        :class="idx === current ? 'scale-110' : 'scale-100'"
        :style="{ backgroundImage: `url(${slide.image})` }"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-r from-app-dark/60 via-app-dark/40 to-app-primary/10"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_25%_50%,rgba(201,162,39,0.15),transparent_60%)]"></div>
    </div>

    <div class="relative h-full flex items-center">
      <div class="max-w-7xl mx-auto px-4 lg:px-8 w-full">
        <div class="max-w-3xl" :key="current">
          <p
            class="text-app-accent uppercase tracking-[0.3em] text-xs lg:text-sm font-semibold mb-6"
            data-aos="fade-down"
            data-aos-duration="700"
          >
            {{ activeSlide.eyebrow }}
          </p>
          <h1
            class="font-Cormorant text-white text-4xl md:text-5xl lg:text-7xl font-semibold leading-[1.1] mb-6"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {{ activeSlide.title }}
          </h1>
          <div class="w-24 h-1 bg-app-accent mb-6"></div>
          <p
            class="text-royal-100/90 text-lg lg:text-xl leading-relaxed mb-10 max-w-2xl"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            {{ activeSlide.subtitle }}
          </p>

          <div class="flex flex-wrap items-center gap-4" data-aos="fade-up" data-aos-duration="1000">
            <router-link
              :to="activeSlide.primaryCta.to"
              class="inline-flex items-center gap-2 bg-app-accent hover:bg-royal-300 text-app-dark px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-colors group"
            >
              {{ activeSlide.primaryCta.label }}
              <Icon icon="mdi:arrow-right" class="size-4 transition-transform group-hover:translate-x-1" />
            </router-link>
            <router-link
              :to="activeSlide.secondaryCta.to"
              class="inline-flex items-center gap-2 border border-royal-200/40 hover:border-app-accent text-white hover:text-app-accent px-8 py-4 text-sm font-semibold uppercase tracking-wider transition-colors"
            >
              {{ activeSlide.secondaryCta.label }}
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <button
      @click="prev"
      class="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 size-12 items-center justify-center border border-royal-200/30 hover:border-app-accent hover:bg-app-accent/10 text-white hover:text-app-accent backdrop-blur-sm transition-colors z-10"
      aria-label="Slide précédent"
    >
      <Icon icon="mdi:chevron-left" class="size-6" />
    </button>
    <button
      @click="next"
      class="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 size-12 items-center justify-center border border-royal-200/30 hover:border-app-accent hover:bg-app-accent/10 text-white hover:text-app-accent backdrop-blur-sm transition-colors z-10"
      aria-label="Slide suivant"
    >
      <Icon icon="mdi:chevron-right" class="size-6" />
    </button>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
      <button
        v-for="(_, idx) in slides"
        :key="idx"
        @click="goTo(idx)"
        :aria-label="`Aller au slide ${idx + 1}`"
        class="h-1 transition-all duration-300"
        :class="idx === current ? 'w-12 bg-app-accent' : 'w-6 bg-royal-200/40 hover:bg-royal-200/70'"
      ></button>
    </div>

    <div class="absolute bottom-8 right-8 hidden md:flex items-center gap-2 text-royal-200/60 text-xs uppercase tracking-widest z-10">
      <span class="text-app-accent font-semibold">{{ String(current + 1).padStart(2, '0') }}</span>
      <span class="w-8 h-px bg-royal-200/40"></span>
      <span>{{ String(slides.length).padStart(2, '0') }}</span>
    </div>
  </section>
</template>
