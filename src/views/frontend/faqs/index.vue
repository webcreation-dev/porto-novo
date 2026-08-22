<script setup>
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import PageBanner from '@/components/frontend/PageBanner.vue'
import SectionTitle from '@/components/frontend/SectionTitle.vue'

const categories = [
  {
    eyebrow: 'La dynastie',
    title: 'À propos de la Dynastie Royale Dê-Mêsse',
    icon: 'mdi:crown',
    items: [
      {
        q: 'Qu’est-ce que la Dynastie Royale Dê-Mêsse ?',
        a: 'La Dynastie Royale Dê-Mêsse est l’une des grandes lignées issues du Royaume de Hogbonou (Porto-Novo, Bénin), fondé au 17ᵉ siècle par Tê Agbanlin. Le nom Dê-Mêsse fait référence à la lignée royale qui régna entre 1752 et 1757.',
      },
      {
        q: 'Qui est Tê Agbanlin ?',
        a: 'Tê Agbanlin est le fondateur du royaume de Hogbonou, devenu Porto-Novo. Fils du Roi Kokpon Adjahoutô d’Allada, il a quitté Allada pour s’installer dans la région et y établir un nouveau royaume. Dix-huit rois lui ont succédé jusqu’à la colonisation.',
      },
      {
        q: 'Quelle est la différence entre Dê-Mêsse, Dê-Ayikpe et Dê-Tognon ?',
        a: 'Ce sont trois lignées royales distinctes issues du même royaume de Hogbonou. Chacune représente une branche de la grande famille royale, avec ses propres traditions et son histoire. Notre site présente l’héritage spécifique de chacune.',
      },
    ],
  },
  {
    eyebrow: 'Documents & archives',
    title: 'Documents historiques',
    icon: 'mdi:file-document-outline',
    items: [
      {
        q: 'Comment consulter les documents historiques ?',
        a: 'Tous les documents disponibles sont accessibles directement depuis la rubrique « Dynastie Royale » du menu, ou depuis la section « Documents historiques » de la page d’accueil. Ils s’ouvrent au format PDF dans votre navigateur.',
      },
      {
        q: 'Les documents peuvent-ils être téléchargés ?',
        a: 'Oui, chaque document peut être consulté en ligne ou téléchargé depuis votre navigateur (clic droit ou bouton de téléchargement du visualiseur PDF).',
      },
      {
        q: 'D’où proviennent les archives présentées ?',
        a: 'Les documents proviennent des archives de la dynastie : Assemblée Générale de 1973, Conseil des Sages de 1993, Réunion des Sages de 1998, Message de Houédouto Affodji, et autres actes officiels.',
      },
    ],
  },
  {
    eyebrow: 'Visites & événements',
    title: 'Participer & visiter',
    icon: 'mdi:calendar-star',
    items: [
      {
        q: 'Peut-on visiter le palais royal de Porto-Novo ?',
        a: 'Le Royaume de Porto-Novo possède un patrimoine architectural et culturel ouvert au public. Pour les visites organisées ou les demandes officielles, contactez-nous via la page Contact.',
      },
      {
        q: 'Y a-t-il des événements ou cérémonies publics ?',
        a: 'Plusieurs cérémonies et commémorations rythment la vie de la dynastie. Inscrivez-vous à notre newsletter pour être informé des prochains événements ouverts au public.',
      },
    ],
  },
  {
    eyebrow: 'Contribuer',
    title: 'Contribuer & contact',
    icon: 'mdi:handshake',
    items: [
      {
        q: 'Comment puis-je contribuer à la préservation du patrimoine ?',
        a: 'Vous pouvez contribuer en partageant des récits familiaux, des documents d’archives, des photographies historiques, ou en soutenant nos initiatives de préservation. Contactez-nous pour en discuter.',
      },
      {
        q: 'Je suis chercheur ou historien — comment accéder à plus de ressources ?',
        a: 'Nous accueillons volontiers les demandes de chercheurs, étudiants et historiens. Adressez-nous une demande détaillée via la page Contact en précisant votre projet.',
      },
      {
        q: 'Comment vous contacter ?',
        a: 'Le plus simple est d’utiliser le formulaire de contact disponible sur ce site, ou d’écrire à contact@dynastieroyale.bj. Nous répondons dans les meilleurs délais.',
      },
    ],
  },
]

const activeCategory = ref(0)
</script>

<template>
  <PageBanner subtitle="Vos questions, nos réponses" />

  <section class="bg-app-bg py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="Foire aux questions"
        title="Tout ce que vous voulez savoir"
        description="Retrouvez ici les réponses aux questions les plus fréquentes sur la dynastie, ses archives et ses activités."
      />

      <div class="grid lg:grid-cols-12 gap-10">

        <aside class="lg:col-span-4" data-aos="fade-right">
          <p class="font-Cormorant text-app-accent uppercase tracking-widest text-xs font-semibold mb-5">Catégories</p>
          <nav class="flex flex-col gap-2">
            <button
              v-for="(cat, idx) in categories"
              :key="idx"
              @click="activeCategory = idx"
              :class="[
                'flex items-start gap-4 text-left p-5 border transition-all duration-300',
                activeCategory === idx
                  ? 'bg-white border-app-accent shadow-md'
                  : 'bg-transparent border-royal-200 hover:border-app-accent/60 hover:bg-white/50'
              ]"
            >
              <div
                :class="[
                  'shrink-0 size-10 flex items-center justify-center transition-colors',
                  activeCategory === idx ? 'bg-app-primary text-app-accent' : 'bg-royal-100 text-app-primary'
                ]"
              >
                <Icon :icon="cat.icon" class="size-5" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xs uppercase tracking-widest text-app-accent font-semibold mb-1">{{ cat.eyebrow }}</p>
                <p class="font-Cormorant text-lg font-semibold text-app-primary leading-tight">{{ cat.title }}</p>
              </div>
            </button>
          </nav>
        </aside>

        <div class="lg:col-span-8" :key="activeCategory" data-aos="fade-left">
          <Accordion :value="['0']" multiple class="!bg-transparent">
            <AccordionPanel
              v-for="(item, idx) in categories[activeCategory].items"
              :key="idx"
              :value="String(idx)"
              class="!bg-white !border !border-royal-200 hover:!border-app-accent/60 !mb-3 transition-colors"
            >
              <AccordionHeader class="!px-6 !py-5 !font-Cormorant !text-lg !text-app-primary !font-semibold">
                {{ item.q }}
              </AccordionHeader>
              <AccordionContent>
                <p class="px-6 pb-5 text-app-muted leading-relaxed">{{ item.a }}</p>
              </AccordionContent>
            </AccordionPanel>
          </Accordion>
        </div>

      </div>
    </div>
  </section>

  <!-- ============ CTA ============ -->
  <section class="bg-royal-50 py-10 md:py-20">
    <div class="max-w-4xl mx-auto px-4 lg:px-8 text-center" data-aos="fade-up">
      <div class="inline-flex items-center justify-center size-16 rounded-full bg-app-primary text-app-accent mb-6">
        <Icon icon="mdi:help-circle-outline" class="size-8" />
      </div>
      <h2 class="font-Cormorant text-3xl lg:text-4xl text-app-primary font-semibold mb-4">
        Vous ne trouvez pas votre réponse ?
      </h2>
      <p class="text-app-muted leading-relaxed mb-8 max-w-xl mx-auto">
        Notre équipe est à votre disposition pour répondre à toutes vos questions sur la dynastie,
        ses archives et ses activités.
      </p>
      <router-link
        :to="{ name: 'frontend.contact' }"
        class="inline-flex items-center gap-3 bg-app-primary hover:bg-royal-800 text-white px-10 py-4 text-sm font-semibold uppercase tracking-wider transition-colors group"
      >
        Posez-nous votre question
        <Icon icon="mdi:arrow-right" class="size-4 transition-transform group-hover:translate-x-1" />
      </router-link>
    </div>
  </section>
</template>
