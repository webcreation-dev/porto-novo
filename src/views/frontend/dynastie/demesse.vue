<script setup>
import LigneePage from '@/components/frontend/LigneePage.vue'
import imgPortoNovo from '@/assets/images/recits/royaume-porto-novo.jpg'

const story = [
  'Dê-Mêsse est la lignée qui donne son nom à notre dynastie. Inscrite dans la longue succession des dix-huit rois du royaume de Hogbonou (Porto-Novo), elle marque une période brève mais hautement symbolique : cinq années de règne (1752 — 1757) qui ont profondément contribué à la mémoire collective de la famille royale.',
  'Le règne de Dê-Mêsse s’inscrit au cœur du XVIIIᵉ siècle, époque où le royaume fondé par Tê Agbanlin avait déjà près d’un siècle d’existence et continuait à structurer son organisation administrative et politique. Les ministres traditionnels — Migan, Gogan, Mewou, Akplogan, Awatagan — assuraient le bon fonctionnement de la cour.',
  '[TODO contenu client] Les détails biographiques, les hauts faits et les réalisations attribués au règne de Dê-Mêsse sont conservés dans les traditions orales et les archives de la dynastie. Cette section sera enrichie avec les apports du Conseil des Sages.',
]

const figures = [
  { name: 'Dê-Mêsse',                            period: '1752 — 1757',        role: 'Roi de Hogbonou',  description: 'Souverain dont le nom est aujourd’hui porté par la dynastie.' },
  { name: 'Dê Hakpon, Dê Lokpon, Dê Houdé',      period: 'Avant Dê-Mêsse',     role: 'Prédécesseurs',     description: 'Trois rois qui ont précédé Dê-Mêsse dans la succession des souverains de Hogbonou.' },
  { name: 'Dê Houyi, Dê Gbégnon, Dê Ayikpé',     period: 'Après Dê-Mêsse',     role: 'Successeurs',       description: 'Souverains ayant succédé à Dê-Mêsse dans la longue lignée royale de Porto-Novo.' },
]

const documents = [
  { title: 'Histoire de la lignée Dê-Mêsse',  year: 'Référence', pdfUrl: '/pdf/DE-MESSE_Histoire.pdf',   icon: 'mdi:book-open-variant' },
  { title: 'Conseil des Sages',               year: '1993',      pdfUrl: '/pdf/Conseil_sae_1993.pdf',    icon: 'mdi:account-group-outline' },
  { title: 'Réunion des Sages',               year: '1998',      pdfUrl: '/pdf/Reunion_Sage_1998.pdf',   icon: 'mdi:account-tie-voice' },
  { title: 'Message Houédouto Affodji',       year: '1998',      pdfUrl: '/pdf/Message_Comite_1998.pdf', icon: 'mdi:message-text-outline' },
]
</script>

<template>
  <LigneePage
    name="Dê-Mêsse"
    period="1752 — 1757"
    intro="La lignée fondatrice qui donne son nom à notre dynastie."
    :image="imgPortoNovo"
    image-alt="Royaume de Porto-Novo — Hogbonou"
    :story="story"
    :figures="figures"
    :documents="documents"
    :next="{ label: 'Dê-Ayikpe', to: { name: 'frontend.dynastie.ayikpe' } }"
  />
</template>
