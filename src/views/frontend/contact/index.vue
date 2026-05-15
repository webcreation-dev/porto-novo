<script setup>
import { ref, reactive } from 'vue'
import { Icon } from '@iconify/vue'
import PageBanner from '@/components/frontend/PageBanner.vue'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})
const sending = ref(false)
const sent = ref(false)
const error = ref(null)

async function onSubmit() {
  error.value = null
  if (!form.name || !form.email || !form.message) {
    error.value = 'Merci de remplir au minimum votre nom, votre email et votre message.'
    return
  }
  sending.value = true
  // TODO: brancher l'envoi réel (API backend) — Étape ultérieure
  await new Promise(r => setTimeout(r, 800))
  sending.value = false
  sent.value = true
  Object.assign(form, { name: '', email: '', phone: '', subject: '', message: '' })
}

const contactInfo = [
  { icon: 'mdi:map-marker', label: 'Adresse',   value: 'Porto-Novo, République du Bénin' },
  { icon: 'mdi:phone',      label: 'Téléphone', value: '+229 (à compléter)', href: 'tel:+22900000000' },
  { icon: 'mdi:email',      label: 'Email',     value: 'contact@dynastieroyale.bj', href: 'mailto:contact@dynastieroyale.bj' },
  { icon: 'mdi:clock-outline', label: 'Disponibilité', value: 'Lun. — Ven. · 9h00 — 17h00' },
]

const socials = [
  { icon: 'mdi:facebook',  href: '#', label: 'Facebook' },
  { icon: 'mdi:instagram', href: '#', label: 'Instagram' },
  { icon: 'mdi:twitter',   href: '#', label: 'Twitter' },
  { icon: 'mdi:youtube',   href: '#', label: 'YouTube' },
]
</script>

<template>
  <PageBanner subtitle="Échangeons" />

  <section class="bg-app-bg py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-16">

        <div class="lg:col-span-7" data-aos="fade-right" data-aos-duration="800">
          <p class="text-app-accent uppercase tracking-[0.25em] text-xs font-semibold mb-4">Écrivez-nous</p>
          <h2 class="font-Cormorant text-3xl lg:text-4xl text-app-primary font-semibold leading-tight mb-3">
            Une question, un projet, une contribution ?
          </h2>
          <p class="text-app-muted mb-8">
            Remplissez ce formulaire et nous vous recontacterons dans les meilleurs délais.
          </p>

          <form @submit.prevent="onSubmit" class="space-y-5">
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-xs uppercase tracking-widest text-app-primary font-semibold mb-2">Nom complet *</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  class="w-full bg-white border border-royal-200 px-4 py-3 text-sm text-app-dark placeholder-app-muted/50 focus:outline-none focus:border-app-accent focus:ring-1 focus:ring-app-accent transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label class="block text-xs uppercase tracking-widest text-app-primary font-semibold mb-2">Email *</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full bg-white border border-royal-200 px-4 py-3 text-sm text-app-dark placeholder-app-muted/50 focus:outline-none focus:border-app-accent focus:ring-1 focus:ring-app-accent transition-colors"
                  placeholder="vous@exemple.com"
                />
              </div>
            </div>

            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <label class="block text-xs uppercase tracking-widest text-app-primary font-semibold mb-2">Téléphone</label>
                <input
                  v-model="form.phone"
                  type="tel"
                  class="w-full bg-white border border-royal-200 px-4 py-3 text-sm text-app-dark placeholder-app-muted/50 focus:outline-none focus:border-app-accent focus:ring-1 focus:ring-app-accent transition-colors"
                  placeholder="+229 ..."
                />
              </div>
              <div>
                <label class="block text-xs uppercase tracking-widest text-app-primary font-semibold mb-2">Objet</label>
                <input
                  v-model="form.subject"
                  type="text"
                  class="w-full bg-white border border-royal-200 px-4 py-3 text-sm text-app-dark placeholder-app-muted/50 focus:outline-none focus:border-app-accent focus:ring-1 focus:ring-app-accent transition-colors"
                  placeholder="Sujet de votre message"
                />
              </div>
            </div>

            <div>
              <label class="block text-xs uppercase tracking-widest text-app-primary font-semibold mb-2">Message *</label>
              <textarea
                v-model="form.message"
                rows="6"
                required
                class="w-full bg-white border border-royal-200 px-4 py-3 text-sm text-app-dark placeholder-app-muted/50 focus:outline-none focus:border-app-accent focus:ring-1 focus:ring-app-accent transition-colors resize-none"
                placeholder="Votre message..."
              ></textarea>
            </div>

            <p v-if="error" class="text-sm text-app-primary bg-royal-100 border border-app-primary/30 px-4 py-3">
              <Icon icon="mdi:alert-circle-outline" class="inline size-5 mr-1 -mt-0.5" />
              {{ error }}
            </p>

            <p v-if="sent" class="text-sm text-emerald-800 bg-emerald-50 border border-emerald-300 px-4 py-3">
              <Icon icon="mdi:check-circle-outline" class="inline size-5 mr-1 -mt-0.5" />
              Merci, votre message a bien été enregistré. Nous vous recontacterons rapidement.
            </p>

            <button
              type="submit"
              :disabled="sending"
              class="inline-flex items-center gap-3 bg-app-primary hover:bg-royal-800 disabled:opacity-50 disabled:cursor-not-allowed text-white px-10 py-4 text-sm font-semibold uppercase tracking-wider transition-colors group"
            >
              <Icon v-if="sending" icon="mdi:loading" class="size-4 animate-spin" />
              <span>{{ sending ? 'Envoi en cours...' : 'Envoyer le message' }}</span>
              <Icon v-if="!sending" icon="mdi:arrow-right" class="size-4 transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>

        <aside class="lg:col-span-5" data-aos="fade-left" data-aos-duration="800">
          <div class="bg-app-dark text-white p-8 lg:p-10 relative overflow-hidden">
            <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,162,39,0.15),transparent_60%)]"></div>

            <div class="relative">
              <p class="text-app-accent uppercase tracking-[0.25em] text-xs font-semibold mb-3">Nos coordonnées</p>
              <h3 class="font-Cormorant text-3xl font-semibold mb-2">Restons en contact</h3>
              <div class="w-16 h-1 bg-app-accent mb-8"></div>

              <ul class="space-y-6">
                <li v-for="info in contactInfo" :key="info.label" class="flex items-start gap-4">
                  <div class="shrink-0 size-11 flex items-center justify-center bg-app-accent/15 text-app-accent">
                    <Icon :icon="info.icon" class="size-5" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <p class="text-xs uppercase tracking-widest text-royal-200/60 font-semibold mb-1">{{ info.label }}</p>
                    <component
                      :is="info.href ? 'a' : 'p'"
                      :href="info.href"
                      class="text-royal-100 hover:text-app-accent transition-colors break-all"
                    >
                      {{ info.value }}
                    </component>
                  </div>
                </li>
              </ul>

              <div class="mt-10 pt-8 border-t border-royal-700/40">
                <p class="text-xs uppercase tracking-widest text-royal-200/60 font-semibold mb-4">Suivez-nous</p>
                <div class="flex items-center gap-3">
                  <a
                    v-for="s in socials"
                    :key="s.label"
                    :href="s.href"
                    :aria-label="s.label"
                    class="size-11 flex items-center justify-center border border-royal-700 hover:bg-app-accent hover:border-app-accent hover:text-app-dark text-royal-100 transition-colors"
                  >
                    <Icon :icon="s.icon" class="size-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </aside>

      </div>
    </div>
  </section>

  <!-- ============ MAP ============ -->
  <section class="bg-royal-50 pb-10 md:pb-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <div class="relative" data-aos="fade-up">
        <div class="aspect-[16/8] w-full bg-app-dark overflow-hidden border border-royal-200">
          <iframe
            src="https://www.google.com/maps?q=Porto-Novo,+B%C3%A9nin&output=embed"
            class="w-full h-full grayscale-[40%] contrast-110"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Carte de Porto-Novo, Bénin"
          ></iframe>
        </div>
        <div class="absolute top-6 left-6 bg-app-primary text-white px-5 py-3 shadow-xl">
          <p class="font-Cormorant text-lg font-semibold leading-tight">Porto-Novo</p>
          <p class="text-xs text-app-accent uppercase tracking-widest">Hogbonou · Bénin</p>
        </div>
      </div>
    </div>
  </section>
</template>
