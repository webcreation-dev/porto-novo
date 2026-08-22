<script setup>
import DiasporaPage from '@/components/frontend/DiasporaPage.vue'

const intro = [
  'En France, la diaspora de la Dynastie Royale Dê-Mèssè est l’une des plus structurées et des plus anciennes. Présente principalement en Île-de-France, mais aussi à Lyon, Marseille et Bordeaux, la communauté française joue un rôle clé dans la diffusion européenne du patrimoine de la dynastie.',
  'Forte d’une histoire migratoire ancienne et de liens culturels étroits avec le Bénin, l’antenne française organise régulièrement des rencontres culturelles, participe à des conférences universitaires et accueille les représentants venus de Porto-Novo lors de leurs déplacements en Europe.',
  '[TODO contenu client] L’histoire de l’antenne française et ses dates marquantes pourront être détaillées ici par les membres fondateurs.',
]

const keyFacts = [
  { icon: 'mdi:city',           label: 'Ville principale',  value: 'Paris' },
  { icon: 'mdi:account-group',  label: 'Communauté',        value: '[à compléter]' },
  { icon: 'mdi:calendar',       label: 'Antenne créée en',  value: '[année]' },
  { icon: 'mdi:earth',          label: 'Présence',          value: 'Île-de-France, Lyon, Marseille' },
]

const activities = [
  { icon: 'mdi:calendar-star',     title: 'Rencontres communautaires',  description: 'Plusieurs rendez-vous annuels rassemblent la communauté autour des grandes dates de la dynastie.' },
  { icon: 'mdi:school',            title: 'Conférences & culture',       description: 'Conférences universitaires et événements culturels pour valoriser le patrimoine béninois en France.' },
  { icon: 'mdi:account-multiple',  title: 'Réseau européen',             description: 'Antenne pilote pour la coordination des communautés européennes.' },
  { icon: 'mdi:hand-heart',        title: 'Soutien aux projets',          description: 'Mobilisation pour le financement des projets de préservation du patrimoine.' },
  { icon: 'mdi:airplane',          title: 'Accueil des visiteurs',        description: 'Accueil des membres du Comité venus du Bénin lors de leurs déplacements en France.' },
  { icon: 'mdi:newspaper-variant', title: 'Relais d’information',          description: 'Diffusion des actualités de la dynastie auprès de la diaspora européenne.' },
]

const contact = {
  representative: '[Nom à compléter]',
  email: 'france@dynastieroyale.bj',
  phone: '+33 X XX XX XX XX',
  address: 'Paris, France',
}
</script>

<template>
  <DiasporaPage
    country="France"
    flag="🇫🇷"
    main-city="Paris"
    :key-facts="keyFacts"
    :intro="intro"
    :activities="activities"
    :contact="contact"
  />
</template>
