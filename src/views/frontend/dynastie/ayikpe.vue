<script setup>
import LigneePage from '@/components/frontend/LigneePage.vue'
import imgPortoNovo from '@/assets/images/recits/royaume-porto-novo.jpg'

const story = [
  'Dê-Ayikpe est l’une des grandes branches royales du royaume de Hogbonou (Porto-Novo). Présente dans la succession des dix-huit rois qui se sont relayés sur le trône de Tê Agbanlin, elle constitue un pilier de la mémoire dynastique.',
  'La lignée Dê-Ayikpe a participé activement à la consolidation du royaume aux côtés des autres lignées royales, dans une organisation administrative structurée par les ministres traditionnels — Migan, Gogan, Mewou, Akplogan, Awatagan — qui ont assuré la continuité institutionnelle à travers les règnes successifs.',
  '[TODO contenu client] L’histoire détaillée de la lignée Dê-Ayikpe, ses figures marquantes et ses contributions au royaume de Porto-Novo seront enrichies à partir des archives et des récits transmis de génération en génération.',
]

const figures = [
  { name: 'Dê-Ayikpé',         period: 'Lignée historique',  role: 'Souverain de Hogbonou', description: 'Roi inscrit dans la succession des dix-huit souverains du royaume de Porto-Novo.' },
  { name: 'Lignée Dê-Ayikpe',  period: 'XVIIᵉ — XIXᵉ s.',    role: 'Branche royale',        description: 'Une des branches majeures de la grande famille royale de Hogbonou.' },
]

const documents = [
  { title: 'Histoire de la lignée Dê-Ayikpe', year: 'Référence', pdfUrl: '/pdf/Histoire_Dê-Ayikpe_Final.pdf', icon: 'mdi:book-open-variant' },
  { title: 'Conseil des Sages',               year: '1993',      pdfUrl: '/pdf/Conseil_sae_1993.pdf',          icon: 'mdi:account-group-outline' },
  { title: 'Réunion des Sages',               year: '1998',      pdfUrl: '/pdf/Reunion_Sage_1998.pdf',         icon: 'mdi:account-tie-voice' },
  { title: 'Assemblée Générale',              year: '1973',      pdfUrl: '/pdf/AG_Avril.pdf',                  icon: 'mdi:gavel' },
]
</script>

<template>
  <LigneePage
    name="Dê-Ayikpe"
    period="Lignée historique"
    intro="Une branche royale du royaume de Hogbonou, gardienne d'une mémoire ancestrale."
    :image="imgPortoNovo"
    image-alt="Royaume de Porto-Novo"
    :story="story"
    :figures="figures"
    :documents="documents"
    :prev="{ label: 'Dê-Messe',  to: { name: 'frontend.dynastie.demesse' } }"
    :next="{ label: 'Dê-Tognon', to: { name: 'frontend.dynastie.tognon' } }"
  />
</template>
