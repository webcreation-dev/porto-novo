<script setup>
import DiasporaPage from '@/components/frontend/DiasporaPage.vue'

const intro = [
  'La communauté de la Dynastie Royale Dê-Mêsse au Gabon, principalement implantée à Libreville, entretient des liens forts et anciens avec la dynastie. Les échanges culturels et historiques entre le Bénin et le Gabon ont favorisé l’installation et la structuration de cette antenne en Afrique centrale.',
  'L’antenne gabonaise est un lieu d’ancrage important pour les membres installés au Gabon, mais aussi un point de rayonnement vers les autres pays d’Afrique centrale.',
  '[TODO contenu client] L’histoire détaillée de l’antenne gabonaise et ses moments forts à compléter.',
]

const keyFacts = [
  { icon: 'mdi:city',           label: 'Ville principale',  value: 'Libreville' },
  { icon: 'mdi:account-group',  label: 'Communauté',        value: '[à compléter]' },
  { icon: 'mdi:calendar',       label: 'Antenne créée en',  value: '[année]' },
  { icon: 'mdi:earth',          label: 'Présence',          value: 'Libreville, Port-Gentil' },
]

const activities = [
  { icon: 'mdi:calendar-star',     title: 'Cérémonies traditionnelles',   description: 'Célébration des grandes dates dynastiques en présence de la communauté locale.' },
  { icon: 'mdi:account-multiple',  title: 'Rencontres mensuelles',        description: 'Réunions régulières des membres pour entretenir les liens.' },
  { icon: 'mdi:hand-heart',        title: 'Solidarité',                   description: 'Réseau d’entraide et d’accueil pour les nouveaux arrivants au Gabon.' },
  { icon: 'mdi:link-variant',      title: 'Liens avec le Bénin',          description: 'Coordination avec le Comité au Bénin pour relayer les actualités et organiser les déplacements.' },
]

const contact = {
  representative: '[Nom à compléter]',
  email: 'gabon@dynastieroyale.bj',
  phone: '+241 XX XX XX XX',
  address: 'Libreville, Gabon',
}
</script>

<template>
  <DiasporaPage
    country="Gabon"
    flag="🇬🇦"
    main-city="Libreville"
    :key-facts="keyFacts"
    :intro="intro"
    :activities="activities"
    :contact="contact"
  />
</template>
