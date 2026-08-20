import { createRouter, createWebHistory } from 'vue-router'
const FrontendLayout = () => import('@/layouts/FrontendLayout.vue')
const BackendLayout = () => import('@/layouts/BackendLayout.vue')
const AuthLayout = () => import('@/layouts/AuthLayout.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: FrontendLayout,
      children: [
        { path: '', name: 'frontend.welcome', meta: { title: 'Accueil' }, component: () => import('@/views/frontend/welcome/index.vue') },
        { path: 'a-propos', name: 'frontend.apropos', meta: { title: 'À propos' }, component: () => import('@/views/frontend/propos/index.vue') },
        { path: 'faqs', name: 'frontend.faqs', meta: { title: 'FAQ' }, component: () => import('@/views/frontend/faqs/index.vue') },
        { path: 'contact', name: 'frontend.contact', meta: { title: 'Contact' }, component: () => import('@/views/frontend/contact/index.vue') },

        // Dynastie Royale
        { path: 'dynastie/de-messe', name: 'frontend.dynastie.demesse', meta: { title: 'Dê-Mèssè' }, component: () => import('@/views/frontend/dynastie/demesse.vue') },
        { path: 'dynastie/de-ayikpe', name: 'frontend.dynastie.ayikpe', meta: { title: 'Dê-Ayikpe' }, component: () => import('@/views/frontend/dynastie/ayikpe.vue') },
        { path: 'dynastie/gounnou-kini', name: 'frontend.dynastie.gounnou-kini', meta: { title: 'Gounnou-Kini-Wannan' }, component: () => import('@/views/frontend/dynastie/gounnou-kini.vue') },
        { path: 'dynastie/houssou-gandin', name: 'frontend.dynastie.houssou-gandin', meta: { title: 'Houssou Gandin' }, component: () => import('@/views/frontend/dynastie/houssou-gandin.vue') },
        { path: 'dynastie/sounwin-akponi', name: 'frontend.dynastie.sounwin-akponi', meta: { title: 'Sounwin-Akponi' }, component: () => import('@/views/frontend/dynastie/sounwin-akponi.vue') },
        { path: 'dynastie/gnonlonfoun', name: 'frontend.dynastie.gnonlonfoun', meta: { title: 'Gnonlonfoun' }, component: () => import('@/views/frontend/dynastie/gnonlonfoun.vue') },
        { path: 'dynastie/sokou', name: 'frontend.dynastie.sokou', meta: { title: 'Sokou' }, component: () => import('@/views/frontend/dynastie/sokou.vue') },
        { path: 'dynastie/kodjo', name: 'frontend.dynastie.kodjo', meta: { title: 'Kodjo' }, component: () => import('@/views/frontend/dynastie/kodjo.vue') },
        { path: 'dynastie/menou', name: 'frontend.dynastie.menou', meta: { title: 'Mènou' }, component: () => import('@/views/frontend/dynastie/menou.vue') },
        { path: 'dynastie/affokpa', name: 'frontend.dynastie.affokpa', meta: { title: 'Affokpa' }, component: () => import('@/views/frontend/dynastie/affokpa.vue') },
        { path: 'dynastie/ahouanhode', name: 'frontend.dynastie.ahouanhode', meta: { title: 'Ahouanhode' }, component: () => import('@/views/frontend/dynastie/ahouanhode.vue') },
        { path: 'dynastie/de-tognon', name: 'frontend.dynastie.tognon', meta: { title: 'Dê-Tognon' }, component: () => import('@/views/frontend/dynastie/tognon.vue') },
        { path: 'dynastie/de-mikpone', name: 'frontend.dynastie.mikpone', meta: { title: 'Dê-Mikpon' }, component: () => import('@/views/frontend/dynastie/mikpone.vue') },
        { path: 'dynastie/histoire-qa', name: 'frontend.dynastie.histoire-qa', meta: { title: 'Histoire en Q&R' }, component: () => import('@/views/frontend/dynastie/histoire-qa.vue') },

        // Histoires & Récits
        { path: 'recits/te-agbanlin', name: 'frontend.recits.te-agbanlin', meta: { title: 'Tê Agbanlin' }, component: () => import('@/views/frontend/recits/te-agbanlin.vue') },
        { path: 'recits/de-hakpon', name: 'frontend.recits.de-hakpon', meta: { title: 'Dê-Hakpon' }, component: () => import('@/views/frontend/recits/de-hakpon.vue') },
        { path: 'recits/lokpon', name: 'frontend.recits.lokpon', meta: { title: 'Dê-Lokpon' }, component: () => import('@/views/frontend/recits/lokpon.vue') },
        { path: 'recits/houde', name: 'frontend.recits.houde', meta: { title: 'Dê Houde' }, component: () => import('@/views/frontend/recits/houde.vue') },
        { path: 'recits/houyi', name: 'frontend.recits.houyi', meta: { title: 'Dê Houyi' }, component: () => import('@/views/frontend/recits/houyi.vue') },
        { path: 'recits/te-ada', name: 'frontend.recits.te-ada', meta: { title: 'Tè Ada' }, component: () => import('@/views/frontend/recits/te-ada.vue') },
        { path: 'recits/te-vossou', name: 'frontend.recits.te-vossou', meta: { title: 'Tè Vossou' }, component: () => import('@/views/frontend/recits/te-vossou.vue') },
        { path: 'recits/te-wokou', name: 'frontend.recits.te-wokou', meta: { title: 'Tè Wokou' }, component: () => import('@/views/frontend/recits/te-wokou.vue') },
        { path: 'recits/kpotozounmey', name: 'frontend.recits.kpotozounmey', meta: { title: 'Dê Kpotozounmey' }, component: () => import('@/views/frontend/recits/kpotozounmey.vue') },
        { path: 'recits/kpodagba', name: 'frontend.recits.kpodagba', meta: { title: 'Dê Kpodagba' }, component: () => import('@/views/frontend/recits/kpodagba.vue') },
        { path: 'recits/royaume-hogbonou', name: 'frontend.recits.royaume-hogbonou', meta: { title: 'Royaume de Hogbonou' }, component: () => import('@/views/frontend/recits/royaume-hogbonou.vue') },
        { path: 'recits/royaume-allada', name: 'frontend.recits.allada', meta: { title: 'Royaume d’Allada' }, component: () => import('@/views/frontend/recits/allada.vue') },
        { path: 'recits/royaume-abomey', name: 'frontend.recits.abomey', meta: { title: 'Royaume d’Abomey' }, component: () => import('@/views/frontend/recits/abomey.vue') },
        { path: 'recits/royaume-ketou', name: 'frontend.recits.ketou', meta: { title: 'Royaume de Kétou' }, component: () => import('@/views/frontend/recits/ketou.vue') },
        { path: 'recits/autres-royaumes', name: 'frontend.recits.autres-royaumes', meta: { title: 'Autres Royaumes' }, component: () => import('@/views/frontend/recits/autres-royaumes.vue') },
        { path: 'recits/le-benin', name: 'frontend.recits.le-benin', meta: { title: 'Le Benin' }, component: () => import('@/views/frontend/recits/le-benin.vue') },
        { path: 'recits/histoire-oyo', name: 'frontend.recits.histoire-oyo', meta: { title: 'Histoire d\'Oyo' }, component: () => import('@/views/frontend/recits/histoire-oyo.vue') },

        // Patrimoines
        { path: 'patrimoines/prenoms-ahovi', name: 'frontend.patrimoines.prenoms-ahovi', meta: { title: 'Prenoms Ahovi' }, component: () => import('@/views/frontend/patrimoines/prenoms-ahovi.vue') },
        { path: 'patrimoines/prenoms-gouns', name: 'frontend.patrimoines.prenoms-gouns', meta: { title: 'Prenoms gouns' }, component: () => import('@/views/frontend/patrimoines/prenoms-gouns.vue') },
        { path: 'patrimoines/palais-dota', name: 'frontend.patrimoines.palais-dota', meta: { title: 'Palais de Dota' }, component: () => import('@/views/frontend/patrimoines/palais-dota.vue') },
        { path: 'patrimoines/sites-royaux', name: 'frontend.patrimoines.sites-royaux', meta: { title: 'Sites royaux' }, component: () => import('@/views/frontend/pages/sites.vue') },
        { path: 'patrimoines/zangbeto', name: 'frontend.patrimoines.zangbeto', meta: { title: 'Zangbeto' }, component: () => import('@/views/frontend/patrimoines/zangbeto.vue') },
        { path: 'patrimoines/mimlan', name: 'frontend.patrimoines.mimlan', meta: { title: 'Mimlan' }, component: () => import('@/views/frontend/patrimoines/mimlan.vue') },
        { path: 'patrimoines/avessan', name: 'frontend.patrimoines.avessan', meta: { title: 'Avessan' }, component: () => import('@/views/frontend/patrimoines/avessan.vue') },
        { path: 'patrimoines/autres', name: 'frontend.patrimoines.autres', meta: { title: 'Autres patrimoines' }, component: () => import('@/views/frontend/patrimoines/autres.vue') },
        { path: 'patrimoines/rites-interdits', name: 'frontend.patrimoines.rites-interdits', meta: { title: 'Rites et interdits' }, component: () => import('@/views/frontend/patrimoines/rites-interdits.vue') },
        { path: 'patrimoines/adjogan', name: 'frontend.patrimoines.adjogan', meta: { title: 'Adjogan' }, component: () => import('@/views/frontend/patrimoines/adjogan.vue') },
        { path: 'patrimoines/egun-gun', name: 'frontend.patrimoines.egun-gun', meta: { title: 'Egun gun' }, component: () => import('@/views/frontend/patrimoines/egun-gun.vue') },
        { path: 'patrimoines/chiffres-goun', name: 'frontend.patrimoines.chiffres-goun', meta: { title: 'Les chiffres en goun' }, component: () => import('@/views/frontend/patrimoines/chiffres-goun.vue') },
        { path: 'patrimoines/bibliotheque-royale', name: 'frontend.patrimoines.bibliotheque-royale', meta: { title: 'Bibliothèque Royale' }, component: () => import('@/views/frontend/patrimoines/bibliotheque-royale.vue') },

        // Agenda et Evenements
        { path: 'agenda-evenements/agenda', name: 'frontend.agenda', meta: { title: 'Agenda' }, component: () => import('@/views/frontend/publications/agenda/index.vue') },
        { path: 'agenda-evenements/evenements', name: 'frontend.evenements', meta: { title: 'Evenements' }, component: () => import('@/views/frontend/agenda-evenements/evenements.vue') },

        // Diaspora
        { path: 'diaspora/canada', name: 'frontend.diaspora.canada', meta: { title: 'Canada' }, component: () => import('@/views/frontend/diaspora/canada.vue') },
        { path: 'diaspora/congo', name: 'frontend.diaspora.congo', meta: { title: 'Congo' }, component: () => import('@/views/frontend/diaspora/congo.vue') },
        { path: 'diaspora/cote-divoire', name: 'frontend.diaspora.civ', meta: { title: 'Cote D\'ivoire' }, component: () => import('@/views/frontend/diaspora/cote-divoire.vue') },
        { path: 'diaspora/france', name: 'frontend.diaspora.france', meta: { title: 'France' }, component: () => import('@/views/frontend/diaspora/france.vue') },
        { path: 'diaspora/gabon', name: 'frontend.diaspora.gabon', meta: { title: 'Gabon' }, component: () => import('@/views/frontend/diaspora/gabon.vue') },

        // Archives
        { path: 'archives', name: 'frontend.archives', meta: { title: 'Archives' }, component: () => import('@/views/frontend/archives/index.vue') },

        // Pages utilitaires
        { path: 'comite', name: 'frontend.comite', meta: { title: 'Notre Comité' }, component: () => import('@/views/frontend/pages/comite.vue') },
        { path: 'soutenir', name: 'frontend.soutenir', meta: { title: 'Soutenir la dynastie' }, component: () => import('@/views/frontend/pages/soutenir.vue') },

        // Publications
        { path: 'actualites', name: 'frontend.actualites', meta: { title: 'Actualités' }, component: () => import('@/views/frontend/publications/actualites/index.vue') },
        { path: 'actualites/:slug', name: 'frontend.actualites.details', meta: { title: 'Article' }, component: () => import('@/views/frontend/publications/actualites/details.vue') },
      ]
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        { path: 'se-connecter', name: 'auth.login', meta: { title: 'Connexion' }, component: () => import('@/views/authentification/login.vue') },
        { path: 'inscription', name: 'auth.register', meta: { title: 'Inscription' }, component: () => import('@/views/authentification/register.vue') },
        { path: 'mot-de-passe-oublie', name: 'auth.forgot-password', meta: { title: 'Mot de passe oublié' }, component: () => import('@/views/authentification/forgotPassword.vue') }
      ]
    },
    {
      path: '/admin',
      component: BackendLayout,
      children: [
        { path: 'dashboard', name: 'backend.dashboard', meta: { title: 'Tableau de bord' }, component: () => import('@/views/backend/dashboard/index.vue') },
        { path: 'users', name: 'backend.users.index', meta: { title: 'Utilisateurs' }, component: () => import('@/views/backend/users/index.vue') },
      ]
    },
  ],
})

export default router
