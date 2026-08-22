<script setup>
import DocumentPage from '@/components/frontend/DocumentPage.vue'

const intro = [
  'En avril 1973, l’Assemblée Générale réunit les héritiers de la dynastie autour des questions de succession, de gouvernance et de patrimoine. Cette assemblée marque un moment fondateur dans la structuration moderne de la dynastie.',
  'Le procès-verbal de l’Assemblée constitue l’un des plus anciens documents écrits conservés par la dynastie. Il pose les fondements institutionnels qui seront repris et prolongés par les Conseils et Réunions des Sages des décennies suivantes.',
  '[TODO contenu client] L’ordre du jour, la liste des participants et les résolutions adoptées pourront être détaillés ici à partir du procès-verbal complet.',
]

const metadata = [
  { label: 'Année',    value: 'Avril 1973',                  icon: 'mdi:calendar' },
  { label: 'Type',     value: 'Procès-verbal d’assemblée',   icon: 'mdi:gavel' },
  { label: 'Portée',   value: 'Grande famille royale',       icon: 'mdi:account-multiple' },
  { label: 'Statut',   value: 'Document fondateur',          icon: 'mdi:bookmark-check' },
]

const highlights = [
  { title: 'Document fondateur', text: 'L’AG de 1973 est l’un des plus anciens documents écrits de la dynastie moderne — un acte fondateur pour la structuration institutionnelle.' },
  { title: 'Héritage institutionnel', text: 'Les décisions prises ici inspireront le Conseil des Sages de 1993 et la Réunion des Sages de 1998.' },
]

const related = [
  { title: 'Conseil des Sages',         year: '1993',      pdfUrl: '/pdf/Conseil_sae_1993.pdf',         icon: 'mdi:account-group-outline' },
  { title: 'Réunion des Sages',         year: '1998',      pdfUrl: '/pdf/Reunion_Sage_1998.pdf',        icon: 'mdi:account-tie-voice' },
  { title: 'Message Houédouto Affodji', year: '1998',      pdfUrl: '/pdf/Message_Comite_1998.pdf',      icon: 'mdi:message-text-outline' },
  { title: 'Histoire de la lignée Dê-Mêsse', year: 'Référence', pdfUrl: '/pdf/DE-MESSE_Histoire.pdf',  icon: 'mdi:book-open-variant' },
]
</script>

<template>
  <DocumentPage
    title="Assemblée Générale 1973"
    year="1973"
    subtitle="Document fondateur"
    pdf-url="/pdf/AG_Avril.pdf"
    :intro="intro"
    :metadata="metadata"
    :highlights="highlights"
    :related="related"
    :prev="{ label: 'Réunion des Sages 1998', to: { name: 'frontend.dynastie.reunion-1998' } }"
    :next="{ label: 'Message Houédouto Affodji', to: { name: 'frontend.dynastie.message-affodji' } }"
  />
</template>
