<script setup>
import LigneePage from '@/components/frontend/LigneePage.vue'
import imgPortoNovo from '@/assets/images/recits/royaume-porto-novo.jpg'

const story = [
  'Dê-Tognon est une lignée ancrée dans l’histoire du royaume de Hogbonou et dans la mémoire collective du peuple béninois. Elle s’inscrit dans la lignée des dix-huit rois qui se sont succédé jusqu’à la colonisation, témoins et acteurs de l’évolution du royaume.',
  'Comme les autres branches royales, Dê-Tognon a contribué à maintenir la cohésion de la dynastie et à préserver les institutions traditionnelles. La cour royale s’appuyait sur ses ministres — Migan, Gogan, Mewou, Akplogan, Awatagan — pour assurer la gouvernance quotidienne du royaume.',
  '[TODO contenu client] Cette section sera enrichie avec les apports des dépositaires de la mémoire de la lignée Dê-Tognon : récits oraux, documents d’archives, témoignages familiaux.',
]

const figures = [
  { name: 'Dê Tognon',         period: 'Lignée historique', role: 'Souverain de Hogbonou', description: 'Roi inscrit dans la succession des dix-huit souverains du royaume.' },
  { name: 'Lignée Dê-Tognon',  period: 'XVIIᵉ — XIXᵉ s.',   role: 'Branche royale',        description: 'Une branche majeure de la famille royale de Hogbonou.' },
]

const documents = [
  { title: 'Histoire de la lignée Dê-Tognon', year: 'Référence', pdfUrl: '/pdf/DE-TOGNON_Histoire.pdf', icon: 'mdi:book-open-variant' },
  { title: 'Conseil des Sages',               year: '1993',      pdfUrl: '/pdf/Conseil_sae_1993.pdf',   icon: 'mdi:account-group-outline' },
  { title: 'Réunion des Sages',               year: '1998',      pdfUrl: '/pdf/Reunion_Sage_1998.pdf',  icon: 'mdi:account-tie-voice' },
  { title: 'Assemblée Générale',              year: '1973',      pdfUrl: '/pdf/AG_Avril.pdf',           icon: 'mdi:gavel' },
]
</script>

<template>
  <LigneePage
    name="Dê-Tognon"
    period="Lignée historique"
    intro="Une lignée ancrée dans l'histoire du royaume de Hogbonou et la mémoire collective."
    :image="imgPortoNovo"
    image-alt="Royaume de Porto-Novo"
    :story="story"
    :figures="figures"
    :documents="documents"
    :prev="{ label: 'Dê-Ayikpe',  to: { name: 'frontend.dynastie.ayikpe' } }"
    :next="{ label: 'Généalogie', to: { name: 'frontend.dynastie.demesse' } }"
  />
</template>
