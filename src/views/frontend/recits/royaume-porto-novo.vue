<script setup>
import RecitPage from '@/components/frontend/RecitPage.vue'
import imgPortoNovo from '@/assets/images/recits/royaume-porto-novo.jpg'

const story = [
  'Le royaume de Hogbonou, aujourd’hui connu sous le nom de Porto-Novo, a été fondé au XVIIᵉ siècle par Tê Agbanlin, fils du Roi Kokpon Adjahoutô d’Allada. Dix-huit rois se sont succédé jusqu’à la colonisation, faisant de Porto-Novo l’un des grands royaumes historiques du Bénin.',
  'L’organisation administrative du royaume était assurée par un conseil de ministres aux fonctions précises : Migan, Gogan, Mewou, Akplogan, Awatagan. Cette structure garantissait la stabilité institutionnelle et la perpétuation des traditions à travers les règnes successifs.',
  'Le royaume rayonnait aussi par sa culture, ses arts, ses cérémonies et sa diplomatie avec les royaumes voisins — Allada, Abomey, Kétou — qui ensemble composent le riche patrimoine royal du Bénin.',
  '[TODO contenu client] L’histoire du royaume, ses étapes marquantes, ses relations avec les royaumes voisins et son patrimoine matériel pourront être détaillés ici par le rédacteur en chef du site.',
]

const keyFacts = [
  { icon: 'mdi:calendar',     label: 'Fondation',  value: 'XVIIᵉ siècle' },
  { icon: 'mdi:account-tie',  label: 'Fondateur',  value: 'Tê Agbanlin' },
  { icon: 'mdi:crown',        label: 'Souverains', value: '18 rois jusqu’à la colonisation' },
  { icon: 'mdi:map-marker',   label: 'Capitale',   value: 'Porto-Novo (Hogbonou)' },
]

const documents = [
  { title: 'Rapport d’élection du Roi de Porto-Novo', year: 'Officiel', pdfUrl: '/pdf/Rapport_Election_Roi_Porto-Novo.pdf', icon: 'mdi:scroll' },
  { title: 'Généalogie de Tê Agbanlin',         year: 'Référence', pdfUrl: '/pdf/Genealogie-Te-Agbanlin_F4.pdf', icon: 'mdi:family-tree' },
  { title: 'Histoire de la lignée Dê-Mèssè',    year: 'Référence', pdfUrl: '/pdf/DE-MESSE_Histoire.pdf', icon: 'mdi:book-open-variant' },
  { title: 'Conseil des Sages',                 year: '1993',      pdfUrl: '/pdf/Conseil_sae_1993.pdf',  icon: 'mdi:account-group-outline' },
]
</script>

<template>
  <RecitPage
    title="Le Royaume de Porto-Novo"
    subtitle="Hogbonou — berceau de notre dynastie"
    category="Royaume"
    intro="Fondé au XVIIᵉ siècle par Tê Agbanlin, l'un des grands royaumes du Bénin."
    :image="imgPortoNovo"
    image-alt="Royaume de Porto-Novo"
    :story="story"
    :key-facts="keyFacts"
    :documents="documents"
    :prev="{ label: 'Dê-Kpotozounme Hiakpon 3', to: { name: 'frontend.recits.de-hiakpon' } }"
    :next="{ label: 'Les Rois de Porto-Novo',  to: { name: 'frontend.recits.te-agbanlin' } }"
  />
</template>
