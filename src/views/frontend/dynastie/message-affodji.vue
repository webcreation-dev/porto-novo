<script setup>
import DocumentPage from '@/components/frontend/DocumentPage.vue'

const intro = [
  'Le message de Houédouto Affodji, transmis au Comité en 1998, est l’un des textes les plus importants de la dynastie. Il s’inscrit dans le prolongement de la Réunion des Sages de la même année et témoigne de la voix d’une figure respectée de la communauté royale.',
  'Ce document éclaire les questions de transmission, de mémoire et de continuité dynastique avec une autorité morale particulière. Il est régulièrement cité comme une référence dans les débats internes à la dynastie.',
  '[TODO contenu client] Le contexte précis de ce message, sa portée historique et son auteur pourront être contextualisés ici par le rédacteur en chef du site.',
]

const metadata = [
  { label: 'Année',     value: '1998',                       icon: 'mdi:calendar' },
  { label: 'Type',      value: 'Message officiel',           icon: 'mdi:message-text' },
  { label: 'Auteur',    value: 'Houédouto Affodji',          icon: 'mdi:account-voice' },
  { label: 'Destinataire', value: 'Comité de la dynastie',   icon: 'mdi:account-group' },
]

const highlights = [
  { title: 'Voix d’autorité', text: 'Houédouto Affodji est une figure morale dont la parole engage la conscience collective de la dynastie.' },
  { title: 'Continuité 1998', text: 'Ce message complète et prolonge les travaux de la Réunion des Sages de 1998.' },
]

const related = [
  { title: 'Réunion des Sages',           year: '1998',      pdfUrl: '/pdf/Reunion_Sage_1998.pdf',    icon: 'mdi:account-tie-voice' },
  { title: 'Conseil des Sages',           year: '1993',      pdfUrl: '/pdf/Conseil_sae_1993.pdf',     icon: 'mdi:account-group-outline' },
  { title: 'Assemblée Générale',          year: '1973',      pdfUrl: '/pdf/AG_Avril.pdf',             icon: 'mdi:gavel' },
  { title: 'Rapport d’élection du Roi de Porto-Novo', year: 'Officiel', pdfUrl: '/pdf/Rapport_Election_Roi_Porto-Novo.pdf', icon: 'mdi:scroll' },
]
</script>

<template>
  <DocumentPage
    title="Message Houédouto Affodji"
    year="1998"
    subtitle="Message historique au Comité"
    pdf-url="/pdf/Message_Comite_1998.pdf"
    :intro="intro"
    :metadata="metadata"
    :highlights="highlights"
    :related="related"
    :prev="{ label: 'Assemblée Générale 1973', to: { name: 'frontend.dynastie.ag-1973' } }"
    :next="{ label: 'Succession Rois Porto-Novo', to: { name: 'frontend.dynastie.succession' } }"
  />
</template>
