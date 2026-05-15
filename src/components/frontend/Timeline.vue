<script setup>
import { Icon } from '@iconify/vue'

defineProps({
  // [{ year, title, description, icon? }]
  items: { type: Array, required: true },
})
</script>

<template>
  <div class="relative">
    <div class="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-royal-200" aria-hidden="true"></div>

    <div class="space-y-12">
      <div
        v-for="(item, idx) in items"
        :key="idx"
        class="relative flex md:items-center gap-6 md:gap-0"
        :data-aos="idx % 2 === 0 ? 'fade-right' : 'fade-left'"
        data-aos-duration="700"
      >
        <div class="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-2 size-4 rounded-full bg-app-accent ring-4 ring-app-bg z-10"></div>

        <div
          :class="[
            'md:w-1/2 pl-14 md:pl-0',
            idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12'
          ]"
        >
          <p class="font-Cormorant text-3xl font-semibold text-app-accent mb-1">{{ item.year }}</p>
          <h3 class="font-Cormorant text-xl font-semibold text-app-primary mb-2 flex items-center gap-2"
              :class="idx % 2 === 0 ? 'md:justify-end' : ''">
            <Icon v-if="item.icon" :icon="item.icon" class="size-5 text-app-accent" />
            {{ item.title }}
          </h3>
          <p class="text-sm text-app-muted leading-relaxed">{{ item.description }}</p>
        </div>

        <div class="hidden md:block md:w-1/2"></div>
      </div>
    </div>
  </div>
</template>
