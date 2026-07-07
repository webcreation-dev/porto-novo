<script setup>
import RecitPage from '@/components/frontend/RecitPage.vue'
import imgAbomey from '@/assets/images/recits/abomey.jpg'

const story = [
  'Le royaume d’Abomey, également connu sous le nom de Danxomè (Dahomey), est l’un des grands royaumes historiques du Bénin. Fondé au XVIIᵉ siècle, il s’est imposé comme une puissance régionale majeure, célèbre pour la richesse de sa cour, ses palais, ses arts et son organisation militaire.',
  'La cité-palais d’Abomey, classée au patrimoine mondial de l’UNESCO, témoigne aujourd’hui encore de la grandeur de cette dynastie. Les bas-reliefs des palais royaux, les trônes, les tentures appliquées et les sculptures racontent l’histoire des rois successifs et des grands événements du royaume.',
  'Abomey entretint des relations complexes — alliances, rivalités, échanges culturels — avec les royaumes voisins, notamment Allada (dont elle est issue) et Hogbonou (Porto-Novo). Cette histoire partagée est une part essentielle du patrimoine béninois.',
  '[TODO contenu client] L’histoire détaillée du royaume d’Abomey, ses rois successifs, ses faits d’armes et son patrimoine pourront être enrichis ici à partir des sources historiques et des récits transmis.',
]

const keyFacts = [
  { icon: 'mdi:calendar',     label: 'Fondation',  value: 'XVIIᵉ siècle' },
  { icon: 'mdi:map-marker',   label: 'Capitale',   value: 'Abomey' },
  { icon: 'mdi:bank',         label: 'Patrimoine', value: 'Palais classés UNESCO' },
  { icon: 'mdi:account-group',label: 'Origine',    value: 'Issu du royaume d’Allada' },
]
</script>

<template>
  <RecitPage
    title="Royaume d’Abomey"
    subtitle="Le puissant Danxomè"
    category="Royaume"
    intro="Le royaume du Danxomè, célèbre pour ses palais et son patrimoine artistique."
    :image="imgAbomey"
    image-alt="Royaume d’Abomey"
    :story="story"
    :key-facts="keyFacts"
    :prev="{ label: 'Les Rois de Porto-Novo', to: { name: 'frontend.recits.te-agbanlin' } }"
    :next="{ label: 'Royaume d’Allada',       to: { name: 'frontend.recits.allada' } }"
  />
</template>
