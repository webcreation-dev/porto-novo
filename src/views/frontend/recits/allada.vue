<script setup>
import RecitPage from '@/components/frontend/RecitPage.vue'
import imgAllada from '@/assets/images/recits/allada.jpg'

const story = [
  'Un jour, alors qu’il était sur le trône, le Roi Kokpon de Tado fut victime d’un complot qui entraina son expulsion du royaume et qui faillit lui coûter la vie. De retour dans son royaume, il punira le frère qui lui ravit son trône et cassa la calebasse symbolique (Adjaka) dans laquelle buvaient les rois pour qu’aucun roi ne bût plus jamais dans ce récipient.',
  'Son forfait accompli, il quitta Tado avec sa famille et ses partisans et prit la direction du pays Aïzô où il fonda Allada. Le roi Kokpon, père de Tê Agbanlin (fondateur du royaume de Hogbonou), est appelé Adjahoutô.',
  'Le royaume d’Allada est ainsi le berceau historique commun des grandes dynasties qui se sont développées dans la région : c’est de là que descendent les royaumes d’Abomey et de Porto-Novo. Cette filiation commune unit aujourd’hui encore la mémoire dynastique du Bénin.',
  '[TODO contenu client] L’histoire détaillée du royaume d’Allada, ses rois successifs et son rôle dans l’émergence des autres royaumes pourront être complétés ici à partir des sources historiques.',
]

const keyFacts = [
  { icon: 'mdi:bookmark',    label: 'Statut',     value: 'Berceau dynastique' },
  { icon: 'mdi:account-tie', label: 'Fondateur',  value: 'Kokpon Adjahoutô' },
  { icon: 'mdi:source-fork', label: 'Descendance',value: 'Abomey et Porto-Novo' },
  { icon: 'mdi:cup',         label: 'Symbole',    value: 'La calebasse Adjaka' },
]

const figures = [
  { name: 'Kokpon Adjahoutô', period: 'Fondateur',           role: 'Premier roi d’Allada', description: 'Père de Tê Agbanlin, fondateur du royaume d’Allada après son départ de Tado.' },
  { name: 'Tê Agbanlin',      period: 'Fils de Kokpon',     role: 'Fondateur de Hogbonou',description: 'Quitte Allada pour fonder le royaume de Hogbonou (Porto-Novo).' },
]
</script>

<template>
  <RecitPage
    title="Royaume d’Allada"
    subtitle="Berceau historique de nos lignées"
    category="Royaume"
    intro="Le royaume fondé par Kokpon Adjahoutô, père de Tê Agbanlin."
    :image="imgAllada"
    image-alt="Royaume d’Allada"
    :story="story"
    :key-facts="keyFacts"
    :figures="figures"
    :prev="{ label: 'Royaume d’Abomey', to: { name: 'frontend.recits.abomey' } }"
    :next="{ label: 'Royaume de Kétou', to: { name: 'frontend.recits.ketou' } }"
  />
</template>
