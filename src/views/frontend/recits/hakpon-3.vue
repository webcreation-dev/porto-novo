<script setup>
import RecitPage from '@/components/frontend/RecitPage.vue'
import imgHiakpon from '@/assets/images/recits/hakpon-3.jpg'

const story = [
  'Dê-Kpotozounme Hiakpon 3 est l’une des figures marquantes de la dynastie de Hogbonou. Son règne s’inscrit dans la longue chaîne des dix-huit rois qui se sont succédé sur le trône de Tê Agbanlin.',
  'Comme ses prédécesseurs, il a contribué à perpétuer les institutions traditionnelles du royaume — appuyé par le conseil des ministres : Migan, Gogan, Mewou, Akplogan, Awatagan — garants de la continuité administrative.',
  '[TODO contenu client] Les éléments biographiques détaillés, les hauts faits du règne de Dê-Kpotozounme Hiakpon 3 et son apport à la dynastie pourront être enrichis ici à partir des archives et des récits oraux conservés par la dynastie.',
]

const keyFacts = [
  { icon: 'mdi:crown',         label: 'Statut',       value: 'Roi de Hogbonou' },
  { icon: 'mdi:account-group', label: 'Lignée',       value: 'Dê-Kpotozounme' },
  { icon: 'mdi:numeric-3-box', label: 'Rang',         value: 'Hiakpon 3' },
  { icon: 'mdi:scroll',        label: 'Dynastie',     value: 'Trône de Tê Agbanlin' },
]

const documents = [
  { title: 'Généalogie de Tê Agbanlin',         year: 'Référence', pdfUrl: '/pdf/Genealogie-Te-Agbanlin_F4.pdf', icon: 'mdi:family-tree' },
  { title: 'Rapport d’élection du Roi de Porto-Novo', year: 'Officiel', pdfUrl: '/pdf/Rapport_Election_Roi_Porto-Novo.pdf', icon: 'mdi:scroll' },
]
</script>

<template>
  <RecitPage
    title="Dê-Kpotozounme Hiakpon 3"
    subtitle="Souverain de Hogbonou"
    category="Personnage"
    intro="Une figure marquante du trône de Tê Agbanlin."
    :image="imgHiakpon"
    image-alt="Dê-Kpotozounme Hiakpon 3"
    :story="story"
    :key-facts="keyFacts"
    :documents="documents"
    :prev="{ label: 'Roi Tê Agbanlin',       to: { name: 'frontend.recits.te-agbanlin' } }"
    :next="{ label: 'Royaume de Porto-Novo', to: { name: 'frontend.recits.royaume-hogbonou' } }"
  />
</template>
