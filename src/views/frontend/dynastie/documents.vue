<script setup>
import DocumentPage from '@/components/frontend/DocumentPage.vue'

const intro = [
  'Le document « Histoire de la lignée Dê-Messe » constitue l’une des références majeures de la dynastie. Il rassemble les éléments historiques, généalogiques et institutionnels qui permettent de comprendre la lignée éponyme et son inscription dans le royaume de Hogbonou.',
  'Ce document s’inscrit dans la longue tradition de mise par écrit de la mémoire orale, transmise de génération en génération depuis la fondation du royaume au XVIIᵉ siècle par Tê Agbanlin.',
]

const metadata = [
  { label: 'Type',           value: 'Document de référence', icon: 'mdi:bookmark' },
  { label: 'Sujet',          value: 'Lignée Dê-Messe',       icon: 'mdi:crown' },
  { label: 'Période évoquée', value: '1752 — 1757',           icon: 'mdi:calendar' },
  { label: 'Format',         value: 'PDF · Lecture libre',   icon: 'mdi:file-pdf-box' },
]

const highlights = [
  { title: 'Une lignée fondatrice', text: 'Le document retrace les cinq années du règne de Dê-Messe (1752 — 1757) et son inscription dans la succession des dix-huit rois de Hogbonou.' },
  { title: 'Mémoire vivante',       text: 'Il s’appuie sur les traditions orales transmises et conservées par les dépositaires de la mémoire dynastique.' },
]

const related = [
  { title: 'Conseil des Sages',         year: '1993',      pdfUrl: '/pdf/Conseil_sae_1993.pdf',     icon: 'mdi:account-group-outline' },
  { title: 'Réunion des Sages',         year: '1998',      pdfUrl: '/pdf/Reunion_Sage_1998.pdf',    icon: 'mdi:account-tie-voice' },
  { title: 'Généalogie de Tê Agbanlin', year: 'Référence', pdfUrl: '/pdf/Genealogie-Te-Agbanlin_F4.pdf', icon: 'mdi:family-tree' },
  { title: 'Histoire de la lignée Dê-Tognon', year: 'Référence', pdfUrl: '/pdf/DE-TOGNON_Histoire.pdf', icon: 'mdi:book-open-variant' },
]
</script>

<template>
  <DocumentPage
    title="Documents Dê-Messe"
    year="Référence"
    subtitle="Archives de la dynastie"
    pdf-url="/pdf/DE-MESSE_Histoire.pdf"
    :intro="intro"
    :metadata="metadata"
    :highlights="highlights"
    :related="related"
    :prev="{ label: 'Généalogie',         to: { name: 'frontend.dynastie.demesse' } }"
    :next="{ label: 'Réunion des Sages 1998', to: { name: 'frontend.dynastie.reunion-1998' } }"
  />
</template>
