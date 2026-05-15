import imgPortoNovo from '@/assets/images/recits/royaume-porto-novo.jpg'
import imgAbomey from '@/assets/images/recits/abomey.jpg'
import imgAllada from '@/assets/images/recits/allada.jpg'
import imgKetou from '@/assets/images/recits/ketou.png'
import imgTeAgbanlin from '@/assets/images/recits/te-agbanlin.jpg'
import imgHakpon from '@/assets/images/recits/hakpon-3.jpg'

// [TODO contenu client] Liste des événements à venir et passés. À remplacer par des contenus réels.
export const events = [
  {
    slug: 'ceremonie-anniversaire-fondation-2026',
    title: 'Cérémonie anniversaire de la fondation du Royaume',
    excerpt: 'La cérémonie traditionnelle marquant la fondation du Royaume de Hogbonou par Tê-Agbanlin.',
    image: imgPortoNovo,
    date: '2026-09-08',
    time: '09h00',
    location: 'Palais Royal de Porto-Novo',
    category: 'Cérémonie traditionnelle',
    status: 'upcoming',
    audience: 'Famille royale & invités',
    content: [
      'La cérémonie anniversaire de la fondation du Royaume de Hogbonou rassemble chaque année la grande famille royale, les Sages, les ministres traditionnels et les invités d’honneur.',
      'Le programme inclut les rituels d’ouverture, les hommages aux ancêtres, les discours du Conseil des Sages et un repas communautaire.',
      '[TODO contenu client] Programme détaillé heure par heure et modalités d’inscription à compléter.',
    ],
  },
  {
    slug: 'reunion-conseil-sages-juin-2026',
    title: 'Réunion semestrielle du Conseil des Sages',
    excerpt: 'Réunion de travail du Conseil des Sages pour examiner l’avancement des travaux du semestre.',
    image: imgTeAgbanlin,
    date: '2026-06-15',
    time: '10h00',
    location: 'Palais Royal de Porto-Novo',
    category: 'Réunion institutionnelle',
    status: 'upcoming',
    audience: 'Conseil des Sages',
    content: [
      'Le Conseil des Sages se réunit semestriellement pour examiner les dossiers en cours, valider les orientations stratégiques et arbitrer les questions transmises à son examen.',
      '[TODO contenu client] Ordre du jour à publier ultérieurement.',
    ],
  },
  {
    slug: 'visite-guidee-palais-juillet-2026',
    title: 'Visite guidée du Palais Royal — Édition été',
    excerpt: 'Visite commentée du Palais Royal et de ses lieux symboliques, ouverte au grand public.',
    image: imgPortoNovo,
    date: '2026-07-20',
    time: '15h00',
    location: 'Palais Royal de Porto-Novo',
    category: 'Visite & découverte',
    status: 'upcoming',
    audience: 'Grand public · sur inscription',
    content: [
      'Cette visite commentée est l’occasion de découvrir les lieux emblématiques du Palais Royal de Porto-Novo : la cour d’honneur, les salles d’audience, les chambres royales et les espaces cérémoniels.',
      'Un guide partage l’histoire de la dynastie depuis sa fondation par Tê-Agbanlin et explique le rôle des ministres traditionnels dans l’organisation du royaume.',
      '[TODO contenu client] Modalités d’inscription, tarif et nombre de places à confirmer.',
    ],
  },
  {
    slug: 'rencontre-diaspora-paris-mai-2026',
    title: 'Rencontre de la diaspora — Paris',
    excerpt: 'Rencontre des membres de la diaspora installés en France et en Europe.',
    image: imgAbomey,
    date: '2026-05-25',
    time: '18h00',
    location: 'Paris, France',
    category: 'Diaspora',
    status: 'upcoming',
    audience: 'Diaspora francilienne',
    content: [
      'Une rencontre conviviale est organisée à Paris pour rassembler les membres de la diaspora installés en France et en Europe.',
      'Au programme : présentation des actualités de la dynastie, échanges avec les représentants venus du Bénin, et moment convivial autour d’un buffet.',
      '[TODO contenu client] Lieu précis et inscription à finaliser.',
    ],
  },
  {
    slug: 'commemoration-roi-de-toffa-mars-2026',
    title: 'Commémoration du Roi Dê Toffa',
    excerpt: 'Hommage au dernier roi de Hogbonou avant la colonisation, dans la lignée des dix-huit souverains.',
    image: imgHakpon,
    date: '2026-03-22',
    time: '11h00',
    location: 'Musée Honmé, Porto-Novo',
    category: 'Commémoration',
    status: 'past',
    audience: 'Communauté & public',
    content: [
      'Cérémonie d’hommage au Roi Dê Toffa, dix-huitième et dernier souverain de Hogbonou avant la période coloniale.',
      'L’événement a réuni les membres du Conseil des Sages, des historiens, et un public nombreux venu rendre hommage à cette figure majeure de l’histoire du royaume.',
    ],
  },
  {
    slug: 'atelier-jeunesse-fevrier-2026',
    title: 'Atelier « La jeunesse face à son patrimoine »',
    excerpt: 'Atelier organisé avec les lycéens de Porto-Novo pour leur faire découvrir l’histoire de la dynastie.',
    image: imgAllada,
    date: '2026-02-10',
    time: '09h00',
    location: 'Centre culturel de Porto-Novo',
    category: 'Éducation',
    status: 'past',
    audience: 'Lycéens',
    content: [
      'En partenariat avec les établissements scolaires de Porto-Novo, un atelier d’une demi-journée a été organisé pour faire découvrir aux lycéens l’histoire de la Dynastie Royale Dê-Mèssè et du Royaume de Hogbonou.',
      'Les jeunes ont pu poser leurs questions à des membres du Comité et à des historiens, et participer à un quiz pédagogique.',
    ],
  },
]

export function findEventBySlug(slug) {
  return events.find(e => e.slug === slug) || null
}

export function upcomingEvents(limit = null) {
  const list = events.filter(e => e.status === 'upcoming').sort((a, b) => a.date.localeCompare(b.date))
  return limit ? list.slice(0, limit) : list
}

export function pastEvents(limit = null) {
  const list = events.filter(e => e.status === 'past').sort((a, b) => b.date.localeCompare(a.date))
  return limit ? list.slice(0, limit) : list
}

export function relatedEvents(currentSlug, limit = 3) {
  return events.filter(e => e.slug !== currentSlug).slice(0, limit)
}
