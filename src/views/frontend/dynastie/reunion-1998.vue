<script setup>
import DocumentPage from '@/components/frontend/DocumentPage.vue'

const intro = [
  'En 1998, la dynastie organise une grande Réunion des Sages, prolongeant les travaux entamés en 1993 par le Conseil des Sages. Cette rencontre rassemble les dépositaires de la mémoire dynastique pour acter des décisions majeures concernant la lignée et son avenir.',
  'Le procès-verbal de cette réunion constitue un document de référence : il fixe par écrit les conclusions des sages et engage la dynastie sur des orientations institutionnelles structurantes.',
  '[TODO contenu client] Les détails du compte-rendu, la liste des participants et les décisions prises pourront être commentés ici par le rédacteur en chef du site.',
]

const metadata = [
  { label: 'Année',     value: '1998',                       icon: 'mdi:calendar' },
  { label: 'Type',      value: 'Procès-verbal officiel',     icon: 'mdi:gavel' },
  { label: 'Émetteur',  value: 'Comité des Sages',           icon: 'mdi:account-group' },
  { label: 'Lien',      value: 'Suite du Conseil de 1993',   icon: 'mdi:link' },
]

const highlights = [
  { title: 'Continuité institutionnelle', text: 'La Réunion de 1998 prolonge les travaux du Conseil des Sages de 1993, marquant la stabilité des orientations prises par la dynastie.' },
  { title: 'Décisions structurantes',     text: 'Les sages actent des résolutions concernant la lignée Dê-Messe et la perpétuation des traditions royales.' },
]

const related = [
  { title: 'Conseil des Sages',           year: '1993',      pdfUrl: '/pdf/Conseil_sae_1993.pdf',         icon: 'mdi:account-group-outline' },
  { title: 'Message Houédouto Affodji',   year: '1998',      pdfUrl: '/pdf/Message_Comite_1998.pdf',      icon: 'mdi:message-text-outline' },
  { title: 'Assemblée Générale',          year: '1973',      pdfUrl: '/pdf/AG_Avril.pdf',                 icon: 'mdi:gavel' },
  { title: 'Histoire de la lignée Dê-Messe', year: 'Référence', pdfUrl: '/pdf/DE-MESSE_Histoire.pdf',     icon: 'mdi:book-open-variant' },
]
</script>

<template>
  <DocumentPage
    title="Réunion des Sages 1998"
    year="1998"
    subtitle="Document historique officiel"
    pdf-url="/pdf/Reunion_Sage_1998.pdf"
    :intro="intro"
    :metadata="metadata"
    :highlights="highlights"
    :related="related"
    :prev="{ label: 'Documents Dê-Messe', to: { name: 'frontend.archives' } }"
    :next="{ label: 'Assemblée Générale 1973', to: { name: 'frontend.dynastie.ag-1973' } }"
  />
</template>
