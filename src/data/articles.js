import imgPortoNovo from '@/assets/images/recits/royaume-porto-novo.jpg'
import imgAbomey from '@/assets/images/recits/abomey.jpg'
import imgAllada from '@/assets/images/recits/allada.jpg'
import imgKetou from '@/assets/images/recits/ketou.png'
import imgTeAgbanlin from '@/assets/images/recits/te-agbanlin.jpg'
import imgHiakpon from '@/assets/images/recits/hiakpon-3.jpg'

// [TODO contenu client] Liste des articles publiés. À remplacer par des contenus réels.
export const articles = [
  {
    slug: 'reunion-conseil-sages-2026',
    title: 'Réunion annuelle du Conseil des Sages 2026',
    excerpt: 'Le Conseil des Sages s’est réuni à Porto-Novo pour faire le bilan de l’année et tracer les orientations à venir.',
    image: imgPortoNovo,
    date: '2026-04-12',
    category: 'Vie de la dynastie',
    author: 'Comité éditorial',
    readingMinutes: 4,
    content: [
      'À l’occasion de sa réunion annuelle, le Conseil des Sages s’est rassemblé au Palais Royal de Porto-Novo pour faire le bilan des actions menées au cours de l’année et arrêter les orientations stratégiques pour les mois à venir.',
      'Plusieurs sujets majeurs ont été abordés : la poursuite de la numérisation des archives, l’organisation des prochaines cérémonies traditionnelles, et la consolidation des liens avec les communautés de la diaspora.',
      '[TODO contenu client] Le compte-rendu détaillé des décisions et la liste complète des participants seront publiés prochainement.',
    ],
  },
  {
    slug: 'numerisation-archives-2026',
    title: 'Lancement du programme de numérisation des archives',
    excerpt: 'Un programme pluriannuel pour préserver et rendre accessible la mémoire écrite de la dynastie.',
    image: imgTeAgbanlin,
    date: '2026-03-04',
    category: 'Patrimoine',
    author: 'Comité éditorial',
    readingMinutes: 5,
    content: [
      'Préserver la mémoire écrite de la dynastie est un enjeu majeur. C’est dans ce cadre qu’a été lancé un programme pluriannuel de numérisation des archives, en partenariat avec des institutions culturelles béninoises.',
      'Ce programme couvrira les actes des grandes assemblées (1973, 1993, 1998), les correspondances historiques, les photographies anciennes et les manuscrits conservés par les Sages.',
      'Une plateforme de consultation en ligne sera progressivement enrichie pour permettre à tous d’accéder à ce patrimoine. [TODO contenu client] Détails techniques et calendrier à compléter.',
    ],
  },
  {
    slug: 'hommage-roi-dê-kpodagba',
    title: 'Hommage au Roi régnant Dê-Kpodagba Alômanwle Lokpon 8',
    excerpt: 'Une cérémonie d’hommage organisée pour honorer le souverain qui occupe aujourd’hui le trône de Tê Agbanlin.',
    image: imgHiakpon,
    date: '2026-02-18',
    category: 'Cérémonie',
    author: 'Comité éditorial',
    readingMinutes: 6,
    content: [
      'Une cérémonie d’hommage a été organisée en l’honneur du Roi Dê-Kpodagba Alômanwle Lokpon 8, qui occupe aujourd’hui le trône de Tê Agbanlin et perpétue la dynastie depuis plusieurs années.',
      'L’événement a réuni les membres du Conseil des Sages, les ministres traditionnels — Migan, Gogan, Mewou, Akplogan, Awatagan — ainsi que de nombreux représentants de la grande famille royale et de la communauté.',
      '[TODO contenu client] Le déroulé complet de la cérémonie et les discours prononcés seront mis en ligne.',
    ],
  },
  {
    slug: 'atelier-memoire-orale-2026',
    title: 'Atelier sur la mémoire orale : recueillir les voix des anciens',
    excerpt: 'Un atelier de collecte des récits oraux organisé avec les détenteurs de la mémoire de la dynastie.',
    image: imgAllada,
    date: '2026-01-22',
    category: 'Mémoire',
    author: 'Comité éditorial',
    readingMinutes: 4,
    content: [
      'La mémoire orale est l’un des trésors les plus précieux de la dynastie. Pour préserver ces récits transmis de génération en génération, un atelier de collecte a été organisé avec plusieurs anciens dépositaires.',
      'Les enregistrements audio et vidéo réalisés à cette occasion enrichiront les archives de la dynastie et serviront à de futurs travaux de recherche et de publication.',
    ],
  },
  {
    slug: 'partenariat-musee-honme',
    title: 'Partenariat avec le Musée Honmé',
    excerpt: 'Une convention signée avec le Musée Honmé pour valoriser conjointement le patrimoine de la dynastie.',
    image: imgPortoNovo,
    date: '2025-11-15',
    category: 'Partenariat',
    author: 'Comité éditorial',
    readingMinutes: 3,
    content: [
      'Le Musée Honmé, ancien palais royal de Porto-Novo, abrite l’une des plus belles collections du patrimoine du royaume. Une convention de partenariat a été signée pour intensifier la valorisation conjointe de ce patrimoine.',
      '[TODO contenu client] Les axes de la coopération (expositions, publications, conférences) à détailler.',
    ],
  },
  {
    slug: 'commemoration-fondation-royaume',
    title: 'Commémoration de la fondation du Royaume de Hogbonou',
    excerpt: 'Trois siècles plus tard, l’héritage de Tê Agbanlin continue d’unir la communauté.',
    image: imgAbomey,
    date: '2025-09-08',
    category: 'Cérémonie',
    author: 'Comité éditorial',
    readingMinutes: 5,
    content: [
      'À l’occasion de la commémoration annuelle de la fondation du Royaume de Hogbonou, une cérémonie traditionnelle a réuni la grande famille royale et les communautés alliées.',
      'Cet événement est un moment important du calendrier dynastique : il rappelle l’histoire commune et renforce les liens entre les différentes branches de la lignée.',
    ],
  },
]

export function findArticleBySlug(slug) {
  return articles.find(a => a.slug === slug) || null
}

export function relatedArticles(currentSlug, limit = 3) {
  return articles.filter(a => a.slug !== currentSlug).slice(0, limit)
}
