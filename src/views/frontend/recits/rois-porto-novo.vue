<script setup>
import RecitPage from '@/components/frontend/RecitPage.vue'
import imgPortoNovo from '@/assets/images/recits/royaume-porto-novo.jpg'

const story = [
  'Depuis Tê-Agbanlin, fondateur du royaume de Hogbonou au XVIIᵉ siècle, dix-huit rois se sont succédé sur le trône de Porto-Novo jusqu’à la colonisation. Cette chaîne ininterrompue témoigne de la stabilité institutionnelle du royaume et de la solidité de sa tradition de transmission.',
  'Chacun de ces souverains a inscrit son règne dans la continuité de ses prédécesseurs, soutenu par le conseil des ministres traditionnels — Migan, Gogan, Mewou, Akplogan, Awatagan — qui assuraient la gouvernance quotidienne et la perpétuation des coutumes.',
  'Aujourd’hui encore, le trône de Tê-Agbanlin est occupé par le Roi Dê-Kpodagba Alômanwle Lokpon 8, perpétuant cette lignée séculaire.',
  '[TODO contenu client] Les détails biographiques de chaque roi, leurs règnes, leurs hauts faits et leurs apports au royaume pourront être enrichis ici à partir des archives et des récits oraux conservés par la dynastie.',
]

const keyFacts = [
  { icon: 'mdi:crown',         label: 'Souverains',   value: '18 rois' },
  { icon: 'mdi:calendar',      label: 'Période',      value: 'XVIIᵉ s. — Colonisation' },
  { icon: 'mdi:account-tie',   label: 'Fondateur',    value: 'Tê-Agbanlin' },
  { icon: 'mdi:crown-outline', label: 'Roi régnant',  value: 'Dê-Kpodagba Lokpon 8' },
]

// Les 18 rois dans l'ordre de la succession (cf. récit du royaume).
const figures = [
  { name: '1. Dê Hakpon',   role: 'Successeur de Tê-Agbanlin' },
  { name: '2. Dê Lokpon',   role: 'Roi de Hogbonou' },
  { name: '3. Dê Houdé',    role: 'Roi de Hogbonou' },
  { name: '4. Dê Mèssè',    period: '1752 — 1757', role: 'Roi éponyme de la dynastie Dê-Messe' },
  { name: '5. Dê Houyi',    role: 'Roi de Hogbonou' },
  { name: '6. Dê Gbégnon',  role: 'Roi de Hogbonou' },
  { name: '7. Dê Ayikpé',   role: 'Roi éponyme de la lignée Dê-Ayikpe' },
  { name: '8. Dê Ayaton',   role: 'Roi de Hogbonou' },
  { name: '9. Dê Houffon',  role: 'Roi de Hogbonou' },
  { name: '10. Dê Adjohan', role: 'Roi de Hogbonou' },
  { name: '11. Dê Toyi',    role: 'Roi de Hogbonou' },
  { name: '12. Dê Houézé',  role: 'Roi de Hogbonou' },
  { name: '13. Dê Tognon',  role: 'Roi éponyme de la lignée Dê-Tognon' },
  { name: '14. Dê Mêyi',    role: 'Roi de Hogbonou' },
  { name: '15. Dê Sodji',   role: 'Roi de Hogbonou' },
  { name: '16. Dê Mikpon',  role: 'Roi de Hogbonou' },
  { name: '17. Dê Mèssi',   role: 'Roi de Hogbonou' },
  { name: '18. Dê Toffa',   role: 'Dernier roi avant la colonisation' },
]

const documents = [
  { title: 'Rapport d’élection du Roi de Porto-Novo', year: 'Officiel', pdfUrl: '/pdf/Rapport_Election_Roi_Porto-Novo.pdf', icon: 'mdi:scroll' },
  { title: 'Généalogie de Tê-Agbanlin',         year: 'Référence', pdfUrl: '/pdf/Genealogie-Te-Agbanlin_F4.pdf', icon: 'mdi:family-tree' },
  { title: 'Conseil des Sages',                 year: '1993',      pdfUrl: '/pdf/Conseil_sae_1993.pdf',          icon: 'mdi:account-group-outline' },
  { title: 'Réunion des Sages',                 year: '1998',      pdfUrl: '/pdf/Reunion_Sage_1998.pdf',         icon: 'mdi:account-tie-voice' },
]
</script>

<template>
  <RecitPage
    title="Les Rois de Porto-Novo"
    subtitle="Dix-huit souverains, une lignée"
    category="Lignage"
    intro="La chaîne ininterrompue des dix-huit rois qui ont régné sur Hogbonou."
    :image="imgPortoNovo"
    image-alt="Porto-Novo"
    :story="story"
    :key-facts="keyFacts"
    :figures="figures"
    :documents="documents"
    :prev="{ label: 'Royaume de Porto-Novo', to: { name: 'frontend.recits.royaume-hogbonou' } }"
    :next="{ label: 'Royaume d’Abomey',      to: { name: 'frontend.recits.abomey' } }"
  />
</template>
