<script setup>
import RecitPage from '@/components/frontend/RecitPage.vue'
import imgTeAgbanlin from '@/assets/images/recits/te-agbanlin.jpg'

const story = [
  'Tê-Agbanlin est le fondateur du royaume de Hogbonou, qui deviendra plus tard Porto-Novo. Né au XVIIᵉ siècle, il est le fils du Roi Kokpon Adjahoutô, lui-même fondateur du royaume d’Allada après son départ forcé de Tado.',
  'L’histoire raconte qu’à la suite des bouleversements vécus par son père, Tê-Agbanlin quitta Allada avec sa famille et ses partisans. Il s’installa en pays Aïzô et y fonda un nouveau royaume, qui prit le nom de Hogbonou.',
  'Sa fondation marquera durablement l’histoire du Bénin : dix-huit rois lui succèderont jusqu’à la colonisation, formant la chaîne ininterrompue qui conduit à la dynastie actuelle. Aujourd’hui encore, le trône de Tê-Agbanlin est occupé par le Roi Dê-Kpodagba Alômanwle Lokpon 8.',
  '[TODO contenu client] D’autres détails biographiques, légendes et faits d’armes attribués à Tê-Agbanlin pourront être enrichis ici à partir des récits oraux conservés par la dynastie.',
]

const keyFacts = [
  { icon: 'mdi:calendar',     label: 'Époque',        value: 'XVIIᵉ siècle' },
  { icon: 'mdi:map-marker',   label: 'Royaume fondé', value: 'Hogbonou (Porto-Novo)' },
  { icon: 'mdi:account',      label: 'Père',          value: 'Kokpon Adjahoutô d’Allada' },
  { icon: 'mdi:crown',        label: 'Successeurs',   value: '18 rois jusqu’à la colonisation' },
]

const figures = [
  { name: 'Kokpon Adjahoutô',          period: 'Père de Tê-Agbanlin', role: 'Roi d’Allada',    description: 'Fondateur du royaume d’Allada, dont est issu Tê-Agbanlin.' },
  { name: 'Dê-Mèssè',                   period: '1752 — 1757',         role: 'Successeur',      description: 'L’une des figures de la dynastie, dont le nom est aujourd’hui porté par notre lignée.' },
  { name: 'Dê-Kpodagba Lokpon 8',      period: 'Aujourd’hui',         role: 'Roi régnant',     description: 'Occupe actuellement le trône de Tê-Agbanlin et perpétue la dynastie.' },
]

const documents = [
  { title: 'Généalogie de Tê-Agbanlin',         year: 'Référence', pdfUrl: '/pdf/Genealogie-Te-Agbanlin_F4.pdf', icon: 'mdi:family-tree' },
  { title: 'Rapport d’élection du Roi de Porto-Novo', year: 'Officiel', pdfUrl: '/pdf/Rapport_Election_Roi_Porto-Novo.pdf', icon: 'mdi:scroll' },
]
</script>

<template>
  <RecitPage
    title="Roi Tê-Agbanlin"
    subtitle="Fondateur du royaume de Hogbonou"
    category="Personnage"
    intro="Le bâtisseur du royaume de Hogbonou, ancêtre de la dynastie."
    :image="imgTeAgbanlin"
    image-alt="Roi Tê-Agbanlin"
    :story="story"
    :key-facts="keyFacts"
    :figures="figures"
    :documents="documents"
    :next="{ label: 'Dê-Kpotozounme Hakpon 3', to: { name: 'frontend.recits.hakpon-3' } }"
  />
</template>
