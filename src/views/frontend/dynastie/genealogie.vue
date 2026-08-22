<script setup>
import LigneePage from '@/components/frontend/LigneePage.vue'
import imgTeAgbanlin from '@/assets/images/recits/te-agbanlin.jpg'

const story = [
  'La généalogie de la dynastie Dê-Mêsse s’enracine dans la fondation du royaume de Hogbonou par Tê Agbanlin au XVIIᵉ siècle. Fils du Roi Kokpon Adjahoutô d’Allada, Tê Agbanlin quitta Tado avec sa famille et ses partisans pour fonder ce nouveau royaume en pays Aïzô.',
  'Dix-huit rois lui ont succédé jusqu’à la colonisation : Dê Hakpon — Dê Lokpon — Dê Houdé — Dê Mèssè — Dê Houyi — Dê Gbégnon — Dê Ayikpé — Dê Ayaton — Dê Houffon — Dê Adjohan — Dê Toyi — Dê Houézé — Dê Tognon — Dê Mêyi — Dê Sodji — Dê Mikpon — Dê Mèssi — Dê Toffa.',
  'Aujourd’hui encore, le trône de Tê Agbanlin est occupé par le Roi Dê-Kpodagba Alômanwle Lokpon 8. L’organisation administrative du royaume reste assurée par les ministres traditionnels : Migan, Gogan, Mewou, Akplogan, Awatagan.',
  '[TODO contenu client] Le détail des filiations, des règnes et des faits marquants de chaque souverain pourra être enrichi avec l’apport des dépositaires de la mémoire dynastique.',
]

const figures = [
  { name: 'Tê Agbanlin',                        period: 'XVIIᵉ siècle',     role: 'Fondateur du royaume',           description: 'Fondateur du royaume de Hogbonou, fils de Kokpon Adjahoutô d’Allada.' },
  { name: 'Dê-Mêsse',                            period: '1752 — 1757',      role: 'Roi éponyme de la dynastie',     description: 'Souverain dont le nom est porté par la dynastie aujourd’hui.' },
  { name: 'Dê-Kpodagba Alômanwle Lokpon 8',     period: 'Aujourd’hui',      role: 'Roi régnant',                    description: 'Occupe actuellement le trône de Tê Agbanlin et perpétue la tradition royale.' },
]

const documents = [
  { title: 'Généalogie de Tê Agbanlin',         year: 'Référence', pdfUrl: '/pdf/Genealogie-Te-Agbanlin_F4.pdf',         icon: 'mdi:family-tree' },
  { title: 'Rapport d’élection du Roi de Porto-Novo', year: 'Officiel', pdfUrl: '/pdf/Rapport_Election_Roi_Porto-Novo.pdf', icon: 'mdi:scroll' },
  { title: 'Histoire de la lignée Dê-Mêsse',    year: 'Référence', pdfUrl: '/pdf/DE-MESSE_Histoire.pdf',                icon: 'mdi:book-open-variant' },
  { title: 'Histoire de la lignée Dê-Tognon',   year: 'Référence', pdfUrl: '/pdf/DE-TOGNON_Histoire.pdf',               icon: 'mdi:book-open-variant' },
]
</script>

<template>
  <LigneePage
    name="Généalogie"
    period="Du XVIIᵉ siècle à nos jours"
    intro="De Tê Agbanlin au Roi régnant — la chaîne ininterrompue des dix-huit souverains."
    :image="imgTeAgbanlin"
    image-alt="Roi Tê Agbanlin, fondateur du royaume"
    :story="story"
    :figures="figures"
    :documents="documents"
    :prev="{ label: 'Dê-Tognon',          to: { name: 'frontend.dynastie.tognon' } }"
    :next="{ label: 'Documents Dê-Mêsse', to: { name: 'frontend.archives' } }"
  />
</template>
