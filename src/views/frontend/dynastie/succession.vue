<script setup>
import DocumentPage from '@/components/frontend/DocumentPage.vue'

const intro = [
  'La succession des Rois de Porto-Novo est l’un des sujets les plus structurants de l’histoire dynastique. Depuis Tê Agbanlin, fondateur du royaume de Hogbonou, dix-huit rois se sont succédé jusqu’à la colonisation : Dê Hakpon — Dê Lokpon — Dê Houdé — Dê Mèssè — Dê Houyi — Dê Gbégnon — Dê Ayikpé — Dê Ayaton — Dê Houffon — Dê Adjohan — Dê Toyi — Dê Houézé — Dê Tognon — Dê Mêyi — Dê Sodji — Dê Mikpon — Dê Mèssi — Dê Toffa.',
  'Le Rapport d’élection du Roi de Porto-Novo documente les modalités de la désignation royale et son inscription dans la tradition séculaire. Il témoigne de la rigueur des procédures coutumières et du rôle des sages dans la continuité dynastique.',
  'Aujourd’hui encore, le trône de Tê Agbanlin est occupé par le Roi Dê-Kpodagba Alômanwle Lokpon 8.',
]

const metadata = [
  { label: 'Sujet',     value: 'Succession royale',          icon: 'mdi:scroll' },
  { label: 'Type',      value: 'Rapport officiel',           icon: 'mdi:file-certificate' },
  { label: 'Période',   value: 'XVIIᵉ s. — Aujourd’hui',     icon: 'mdi:calendar-clock' },
  { label: 'Roi régnant', value: 'Dê-Kpodagba Lokpon 8',     icon: 'mdi:crown' },
]

const highlights = [
  { title: '18 rois depuis Tê Agbanlin', text: 'Dix-huit souverains se sont succédé sur le trône de Hogbonou depuis sa fondation au XVIIᵉ siècle, dans une chaîne ininterrompue.' },
  { title: 'Procédures coutumières',     text: 'Le rapport documente les règles traditionnelles d’élection et de désignation, ancrées dans la sagesse des anciens.' },
]

const related = [
  { title: 'Généalogie de Tê Agbanlin',   year: 'Référence', pdfUrl: '/pdf/Genealogie-Te-Agbanlin_F4.pdf', icon: 'mdi:family-tree' },
  { title: 'Histoire de la lignée Dê-Messe', year: 'Référence', pdfUrl: '/pdf/DE-MESSE_Histoire.pdf',     icon: 'mdi:book-open-variant' },
  { title: 'Conseil des Sages',           year: '1993',      pdfUrl: '/pdf/Conseil_sae_1993.pdf',         icon: 'mdi:account-group-outline' },
  { title: 'Réunion des Sages',           year: '1998',      pdfUrl: '/pdf/Reunion_Sage_1998.pdf',        icon: 'mdi:account-tie-voice' },
]
</script>

<template>
  <DocumentPage
    title="Succession des Rois de Porto-Novo"
    year="Officiel"
    subtitle="Rapport d'élection royale"
    pdf-url="/pdf/Rapport_Election_Roi_Porto-Novo.pdf"
    :intro="intro"
    :metadata="metadata"
    :highlights="highlights"
    :related="related"
    :prev="{ label: 'Message Houédouto Affodji', to: { name: 'frontend.dynastie.message-affodji' } }"
  />
</template>
