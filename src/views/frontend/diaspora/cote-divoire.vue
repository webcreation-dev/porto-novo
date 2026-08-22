<script setup>
import DiasporaPage from '@/components/frontend/DiasporaPage.vue'

const intro = [
  'La communauté de la Dynastie Royale Dê-Mêsse en Côte d’Ivoire est l’une des plus nombreuses sur le continent africain. Concentrée à Abidjan, elle bénéficie de la proximité géographique et culturelle entre le Bénin et la Côte d’Ivoire pour entretenir des liens permanents avec le Comité au Bénin.',
  'Les membres ivoiriens jouent un rôle clé dans le rayonnement régional de la dynastie, en organisant régulièrement des rencontres culturelles, des ateliers historiques et en participant activement aux grandes cérémonies traditionnelles.',
  '[TODO contenu client] Histoire et structuration de l’antenne ivoirienne à enrichir avec le représentant local.',
]

const keyFacts = [
  { icon: 'mdi:city',           label: 'Ville principale',  value: 'Abidjan' },
  { icon: 'mdi:account-group',  label: 'Communauté',        value: '[à compléter]' },
  { icon: 'mdi:calendar',       label: 'Antenne créée en',  value: '[année]' },
  { icon: 'mdi:earth',          label: 'Présence',          value: 'Abidjan, Yamoussoukro' },
]

const activities = [
  { icon: 'mdi:calendar-star',     title: 'Grandes cérémonies',          description: 'Représentation de la dynastie lors des cérémonies organisées en Côte d’Ivoire.' },
  { icon: 'mdi:school',            title: 'Promotion culturelle',         description: 'Ateliers et conférences pour faire rayonner l’histoire dynastique en Afrique de l’Ouest.' },
  { icon: 'mdi:account-multiple',  title: 'Réseau régional',              description: 'Coordination avec les autres antennes ouest-africaines (Bénin, Togo, etc.).' },
  { icon: 'mdi:hand-heart',        title: 'Solidarité communautaire',     description: 'Soutien mutuel et accueil des nouveaux arrivants au sein de la communauté.' },
]

const contact = {
  representative: '[Nom à compléter]',
  email: 'cote-ivoire@dynastieroyale.bj',
  phone: '+225 XX XX XX XX XX',
  address: 'Abidjan, Côte d’Ivoire',
}
</script>

<template>
  <DiasporaPage
    country="Côte d’Ivoire"
    flag="🇨🇮"
    main-city="Abidjan"
    :key-facts="keyFacts"
    :intro="intro"
    :activities="activities"
    :contact="contact"
  />
</template>
