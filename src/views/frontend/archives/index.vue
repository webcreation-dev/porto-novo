<script setup>
import PageBanner from '@/components/frontend/PageBanner.vue'
import SectionTitle from '@/components/frontend/SectionTitle.vue'
import DocumentCard from '@/components/frontend/DocumentCard.vue'
import b1 from '@/assets/images/royalty/b1.jpg'

const documents = [
  { title: 'Accord de succession des rois de porto novo', year: 'Historique', pdfUrl: '#' },
  { title: 'Assemblée générale de 1973', year: '1973', pdfUrl: '#' },
  { title: 'Message du Xwé Douto Afodji', year: 'Historique', pdfUrl: '#' },
  { title: 'Lettre des Xwé Douto', year: 'Historique', pdfUrl: '#' },
  { title: 'Réunion des sages de 1998', year: '1998', pdfUrl: '#' },
  { title: 'La loi sur la chefferie traditionnelle', year: 'Juridique', pdfUrl: '#' },
  { title: 'Document de la royauté Tê Agbanlin', year: 'Fondation', pdfUrl: '#' },
]
</script>

<template>
  <PageBanner 
    title="Archives & Documents" 
    subtitle="Consultez les documents historiques et fondateurs de la dynastie"
    :image="b1"
  />

  <section class="bg-royal-50 py-10 md:py-20">
    <div class="max-w-7xl mx-auto px-4 lg:px-8">
      <SectionTitle
        eyebrow="Ressources"
        title="Documents Officiels"
        description="Retrouvez ici les lettres, accords et lois qui ont structuré et pérennisé la royauté."
      />

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <DocumentCard 
          v-for="doc in documents" 
          :key="doc.title" 
          v-bind="doc" 
        />
      </div>
    </div>
  </section>
</template>
