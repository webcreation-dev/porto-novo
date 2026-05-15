<script setup>
defineProps({
  eyebrow:     { type: String, default: null },
  title:       { type: String, required: true },
  description: { type: String, default: null },
  align:       { type: String, default: 'center' }, // 'center' | 'left'
  light:       { type: Boolean, default: false },   // for use on dark backgrounds
})
</script>

<template>
  <div
    :class="[
      align === 'center' ? 'text-center items-center' : 'text-left items-start',
      'flex flex-col mb-12'
    ]"
    data-aos="fade-up"
    data-aos-duration="700"
  >
    <p
      v-if="eyebrow"
      :class="light ? 'text-app-accent' : 'text-app-accent'"
      class="uppercase tracking-[0.25em] text-xs font-semibold mb-4"
    >
      {{ eyebrow }}
    </p>

    <h2
      :class="light ? 'text-white' : 'text-app-primary'"
      class="font-Cormorant text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight max-w-3xl"
    >
      {{ title }}
    </h2>

    <div
      :class="align === 'center' ? '' : ''"
      class="w-20 h-1 bg-app-accent mt-6"
    ></div>

    <p
      v-if="description"
      :class="light ? 'text-royal-100/80' : 'text-app-muted'"
      class="mt-6 max-w-2xl text-base leading-relaxed"
    >
      {{ description }}
    </p>
  </div>
</template>
