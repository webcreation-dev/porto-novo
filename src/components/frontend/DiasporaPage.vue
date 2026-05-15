<script setup>
import { Icon } from '@iconify/vue'
import PageBanner from '@/components/frontend/PageBanner.vue'
import SectionTitle from '@/components/frontend/SectionTitle.vue'

defineProps({
  country:    { type: String, required: true },
  flag:       { type: String, required: true },           // emoji
  mainCity:   { type: String, default: null },
  // [{ icon, label, value }]
  keyFacts:   { type: Array,  default: () => [] },
  intro:      { type: Array,  required: true },           // [string] paragraphes
  // [{ icon, title, description }]
  activities: { type: Array,  default: () => [] },
  contact:    {
    type: Object,
    default: () => ({
      representative: null,
      email: null,
      phone: null,
      address: null,
    }),
  },
  // [{ name, role, quote }]
  testimonials: { type: Array, default: () => [] },
})
</script>

<template>
  <PageBanner :title="country" :subtitle="`Diaspora ${flag}`" />

  <!-- ============ INTRO + KEY FACTS ============ -->
  <section class="bg-app-bg py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-16">

        <div class="lg:col-span-7" data-aos="fade-right">
          <p class="text-app-accent uppercase tracking-[0.25em] text-xs font-semibold mb-4">La communauté</p>
          <h2 class="font-Cormorant text-3xl lg:text-5xl text-app-primary font-semibold leading-tight mb-6 flex items-center gap-4">
            <span class="text-5xl">{{ flag }}</span>
            <span>Notre diaspora <span class="italic">au {{ country }}</span></span>
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

        <aside class="lg:col-span-5" data-aos="fade-left">
          <div class="bg-app-dark text-white p-8 relative overflow-hidden">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,39,0.15),transparent_60%)]"></div>
            <div class="relative">
              <div class="flex items-center gap-3 mb-6">
                <span class="text-4xl">{{ flag }}</span>
                <div>
                  <p class="text-app-accent uppercase tracking-widest text-xs font-semibold">Antenne</p>
                  <p class="font-Cormorant text-2xl font-semibold leading-tight">{{ country }}</p>
                  <p v-if="mainCity" class="text-sm text-royal-200/70">{{ mainCity }}</p>
                </div>
              </div>

              <ul v-if="keyFacts.length" class="space-y-4">
                <li v-for="f in keyFacts" :key="f.label" class="flex items-start gap-3 text-sm">
                  <div class="shrink-0 size-9 flex items-center justify-center bg-app-accent/15 text-app-accent">
                    <Icon :icon="f.icon || 'mdi:checkbox-blank-circle-outline'" class="size-4" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs uppercase tracking-widest text-royal-200/60 font-semibold">{{ f.label }}</p>
                    <p class="text-royal-100">{{ f.value }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </aside>

      </div>
    </div>
  </section>

  <!-- ============ ACTIVITÉS ============ -->
  <section v-if="activities.length" class="bg-royal-50 py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="Sur le terrain"
        title="Nos activités"
        :description="`Ce que la communauté ${country.toLowerCase().includes('côte') ? 'en' : 'au'} ${country} met en œuvre.`"
      />

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="(a, idx) in activities"
          :key="a.title"
          class="group flex flex-col items-start bg-white border border-royal-200 hover:border-app-accent hover:shadow-xl transition-all duration-500 p-6"
          data-aos="fade-up"
          :data-aos-delay="idx * 80"
        >
          <div class="size-12 flex items-center justify-center rounded-full bg-royal-100 group-hover:bg-app-primary text-app-primary group-hover:text-app-accent transition-colors duration-500 mb-4">
            <Icon :icon="a.icon || 'mdi:check-circle-outline'" class="size-6" />
          </div>
          <h3 class="font-Cormorant text-xl font-semibold text-app-primary mb-2">{{ a.title }}</h3>
          <p class="text-sm text-app-muted leading-relaxed">{{ a.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============ TÉMOIGNAGES ============ -->
  <section v-if="testimonials.length" class="bg-app-bg py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="Paroles"
        title="Témoignages de la communauté"
      />
      <div class="grid md:grid-cols-2 gap-6">
        <blockquote
          v-for="(t, idx) in testimonials"
          :key="t.name + idx"
          class="bg-white border-l-4 border-app-accent p-8 relative"
          data-aos="fade-up"
          :data-aos-delay="idx * 100"
        >
          <Icon icon="mdi:format-quote-open" class="absolute top-4 right-4 size-10 text-royal-100" />
          <p class="font-Cormorant text-xl text-app-dark italic leading-relaxed mb-4">« {{ t.quote }} »</p>
          <footer class="flex items-center gap-3">
            <div class="size-10 rounded-full bg-royal-100 flex items-center justify-center">
              <Icon icon="mdi:account" class="size-5 text-app-primary" />
            </div>
            <div>
              <p class="font-semibold text-app-primary text-sm">{{ t.name }}</p>
              <p class="text-xs text-app-muted">{{ t.role }}</p>
            </div>
          </footer>
        </blockquote>
      </div>
    </div>
  </section>

  <!-- ============ CONTACT LOCAL ============ -->
  <section class="bg-royal-50 py-10 md:py-20">
    <div class="max-w-5xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="Contact local"
        :title="`Représentation au ${country}`"
        description="Contactez-nous pour rejoindre la communauté ou obtenir plus d'informations."
      />

      <div class="bg-white border border-royal-200 p-8 lg:p-10 grid sm:grid-cols-2 gap-6">
        <div v-if="contact.representative" class="flex items-start gap-4">
          <div class="shrink-0 size-12 flex items-center justify-center bg-royal-100 text-app-primary">
            <Icon icon="mdi:account-tie" class="size-6" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs uppercase tracking-widest text-app-accent font-semibold">Représentant·e</p>
            <p class="font-Cormorant text-lg font-semibold text-app-primary">{{ contact.representative }}</p>
          </div>
        </div>

        <div v-if="contact.email" class="flex items-start gap-4">
          <div class="shrink-0 size-12 flex items-center justify-center bg-royal-100 text-app-primary">
            <Icon icon="mdi:email" class="size-6" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs uppercase tracking-widest text-app-accent font-semibold">Email</p>
            <a :href="`mailto:${contact.email}`" class="text-sm text-app-dark hover:text-app-primary break-all transition-colors">{{ contact.email }}</a>
          </div>
        </div>

        <div v-if="contact.phone" class="flex items-start gap-4">
          <div class="shrink-0 size-12 flex items-center justify-center bg-royal-100 text-app-primary">
            <Icon icon="mdi:phone" class="size-6" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs uppercase tracking-widest text-app-accent font-semibold">Téléphone</p>
            <a :href="`tel:${contact.phone}`" class="text-sm text-app-dark hover:text-app-primary transition-colors">{{ contact.phone }}</a>
          </div>
        </div>

        <div v-if="contact.address" class="flex items-start gap-4">
          <div class="shrink-0 size-12 flex items-center justify-center bg-royal-100 text-app-primary">
            <Icon icon="mdi:map-marker" class="size-6" />
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-xs uppercase tracking-widest text-app-accent font-semibold">Adresse</p>
            <p class="text-sm text-app-dark">{{ contact.address }}</p>
          </div>
        </div>
      </div>

      <div class="text-center mt-10">
        <router-link
          :to="{ name: 'frontend.contact' }"
          class="inline-flex items-center gap-3 bg-app-primary hover:bg-royal-800 text-white px-10 py-4 text-sm font-semibold uppercase tracking-wider transition-colors group"
        >
          Rejoindre la communauté {{ country }}
          <Icon icon="mdi:arrow-right" class="size-4 transition-transform group-hover:translate-x-1" />
        </router-link>
      </div>
    </div>
  </section>
</template>
