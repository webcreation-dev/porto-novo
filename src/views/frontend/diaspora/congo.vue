<script setup>
import DiasporaPage from '@/components/frontend/DiasporaPage.vue'

const intro = [
  'La diaspora de la Dynastie Royale Dê-Mèssè au Congo entretient des liens étroits et anciens avec la dynastie. Implantée principalement à Brazzaville et Pointe-Noire, la communauté congolaise est l’une des plus actives en Afrique centrale.',
  'Forte de relations historiques et culturelles solides entre le Bénin et le Congo, l’antenne congolaise est un relais important pour la transmission du patrimoine dynastique et l’organisation d’événements communs avec d’autres communautés africaines.',
  '[TODO contenu client] Histoire détaillée et événements marquants de la communauté à compléter.',
]

const keyFacts = [
  { icon: 'mdi:city',           label: 'Ville principale',  value: 'Brazzaville' },
  { icon: 'mdi:account-group',  label: 'Communauté',        value: '[à compléter]' },
  { icon: 'mdi:calendar',       label: 'Antenne créée en',  value: '[année]' },
  { icon: 'mdi:earth',          label: 'Présence',          value: 'Brazzaville, Pointe-Noire' },
]

const activities = [
  { icon: 'mdi:calendar-star',     title: 'Cérémonies traditionnelles',   description: 'Célébration des grandes fêtes dynastiques en présence de la communauté.' },
  { icon: 'mdi:account-multiple',  title: 'Rassemblements communautaires', description: 'Rencontres régulières pour maintenir les liens et partager l’actualité.' },
  { icon: 'mdi:hand-heart',        title: 'Entraide & solidarité',         description: 'Réseau d’entraide entre membres de la communauté.' },
  { icon: 'mdi:link-variant',      title: 'Liens avec le Bénin',           description: 'Coordination régulière avec le Comité au Bénin et accueil des visiteurs.' },
]

const contact = {
  representative: '[Nom à compléter]',
  email: 'congo@dynastieroyale.bj',
  phone: '+242 XX XXX XX XX',
  address: 'Brazzaville, République du Congo',
}
</script>

<template>
  <DiasporaPage
    country="Congo"
    flag="🇨🇬"
    main-city="Brazzaville"
    :key-facts="keyFacts"
    :intro="intro"
    :activities="activities"
    :contact="contact"
  />
</template>
