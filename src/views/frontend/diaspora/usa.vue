<script setup>
import DiasporaPage from '@/components/frontend/DiasporaPage.vue'

const intro = [
  'Aux États-Unis, les descendants et amis de la Dynastie Royale Dê-Mèssè se sont organisés en communauté active depuis plusieurs années. Présente principalement dans les grandes métropoles, la diaspora américaine joue un rôle important dans le rayonnement du patrimoine béninois en Amérique du Nord.',
  'Les membres de la communauté se réunissent régulièrement pour célébrer les grandes dates de la dynastie, accueillir les visiteurs venus du Bénin et organiser des événements culturels qui font connaître l’histoire du Royaume de Hogbonou.',
  '[TODO contenu client] L’histoire détaillée de l’antenne américaine, ses moments fondateurs et sa structuration actuelle pourront être enrichis ici.',
]

const keyFacts = [
  { icon: 'mdi:city',           label: 'Ville principale',  value: 'Washington D.C.' },
  { icon: 'mdi:account-group',  label: 'Communauté',        value: '[à compléter]' },
  { icon: 'mdi:calendar',       label: 'Antenne créée en',  value: '[année]' },
  { icon: 'mdi:earth',          label: 'Présence',          value: 'Tous les États-Unis' },
]

const activities = [
  { icon: 'mdi:calendar-star',     title: 'Rencontres annuelles',   description: 'Une grande rencontre par an réunit la communauté autour des moments forts de la dynastie.' },
  { icon: 'mdi:school',            title: 'Transmission culturelle', description: 'Ateliers et conférences pour faire connaître l’histoire de la dynastie aux jeunes générations.' },
  { icon: 'mdi:hand-heart',        title: 'Solidarité',              description: 'Soutien aux membres dans leurs démarches d’installation et d’intégration aux États-Unis.' },
  { icon: 'mdi:account-group',     title: 'Réseau professionnel',    description: 'Mise en relation des membres dans le tissu économique et culturel américain.' },
]

const contact = {
  representative: '[Nom à compléter]',
  email: 'usa@dynastieroyale.bj',
  phone: '+1 (XXX) XXX-XXXX',
  address: 'Washington D.C., USA',
}
</script>

<template>
  <DiasporaPage
    country="États-Unis"
    flag="🇺🇸"
    main-city="Washington D.C."
    :key-facts="keyFacts"
    :intro="intro"
    :activities="activities"
    :contact="contact"
  />
</template>
