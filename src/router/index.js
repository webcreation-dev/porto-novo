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
        { path: '',          name: 'frontend.welcome', meta: { title: 'Accueil' },        component: () => import('@/views/frontend/welcome/index.vue') },
        { path: 'a-propos',  name: 'frontend.apropos', meta: { title: 'À propos' },       component: () => import('@/views/frontend/propos/index.vue') },
        { path: 'faqs',      name: 'frontend.faqs',    meta: { title: 'FAQ' },            component: () => import('@/views/frontend/faqs/index.vue') },
        { path: 'contact',   name: 'frontend.contact', meta: { title: 'Contact' },        component: () => import('@/views/frontend/contact/index.vue') },

        // Dynastie Royale (méga menu)
        { path: 'dynastie/de-messe',         name: 'frontend.dynastie.demesse',        meta: { title: 'Dê-Mèssè' },                    component: () => import('@/views/frontend/dynastie/demesse.vue') },
        { path: 'dynastie/de-ayikpe',        name: 'frontend.dynastie.ayikpe',         meta: { title: 'Dê-Ayikpe' },                   component: () => import('@/views/frontend/dynastie/ayikpe.vue') },
        { path: 'dynastie/de-tognon',        name: 'frontend.dynastie.tognon',         meta: { title: 'Dê-Tognon' },                   component: () => import('@/views/frontend/dynastie/tognon.vue') },
        { path: 'dynastie/genealogie',       name: 'frontend.dynastie.genealogie',     meta: { title: 'Généalogie' },                  component: () => import('@/views/frontend/dynastie/genealogie.vue') },
        { path: 'dynastie/documents',        name: 'frontend.dynastie.documents',      meta: { title: 'Documents Dê-Mèssè' },          component: () => import('@/views/frontend/dynastie/documents.vue') },
        { path: 'dynastie/reunion-sage-1998',name: 'frontend.dynastie.reunion-1998',   meta: { title: 'Réunion des Sages 1998' },      component: () => import('@/views/frontend/dynastie/reunion-1998.vue') },
        { path: 'dynastie/ag-1973',          name: 'frontend.dynastie.ag-1973',        meta: { title: 'Assemblée Générale 1973' },     component: () => import('@/views/frontend/dynastie/ag-1973.vue') },
        { path: 'dynastie/message-affodji',  name: 'frontend.dynastie.message-affodji',meta: { title: 'Message Houédouto Affodji' },   component: () => import('@/views/frontend/dynastie/message-affodji.vue') },
        { path: 'dynastie/succession-rois',  name: 'frontend.dynastie.succession',     meta: { title: 'Succession des Rois de Porto-Novo' }, component: () => import('@/views/frontend/dynastie/succession.vue') },

        // Histoires & Récits
        { path: 'recits/te-agbanlin',        name: 'frontend.recits.te-agbanlin',      meta: { title: 'Roi Tê-Agbanlin' },             component: () => import('@/views/frontend/recits/te-agbanlin.vue') },
        { path: 'recits/hakpon-3',           name: 'frontend.recits.hakpon-3',         meta: { title: 'Dê-Kpotozounme Hakpon 3' },     component: () => import('@/views/frontend/recits/hakpon-3.vue') },
        { path: 'recits/royaume-porto-novo', name: 'frontend.recits.royaume-porto-novo', meta: { title: 'Royaume de Porto-Novo' },     component: () => import('@/views/frontend/recits/royaume-porto-novo.vue') },
        { path: 'recits/rois-porto-novo',    name: 'frontend.recits.rois-porto-novo',  meta: { title: 'Les Rois de Porto-Novo' },      component: () => import('@/views/frontend/recits/rois-porto-novo.vue') },
        { path: 'recits/abomey',             name: 'frontend.recits.abomey',           meta: { title: 'Royaume d’Abomey' },            component: () => import('@/views/frontend/recits/abomey.vue') },
        { path: 'recits/allada',             name: 'frontend.recits.allada',           meta: { title: 'Royaume d’Allada' },            component: () => import('@/views/frontend/recits/allada.vue') },
        { path: 'recits/ketou',              name: 'frontend.recits.ketou',            meta: { title: 'Royaume de Kétou' },            component: () => import('@/views/frontend/recits/ketou.vue') },

        // Pages utilitaires
        { path: 'comite',              name: 'frontend.comite',   meta: { title: 'Notre Comité' },     component: () => import('@/views/frontend/pages/comite.vue') },
        { path: 'soutenir',            name: 'frontend.soutenir', meta: { title: 'Soutenir la dynastie' }, component: () => import('@/views/frontend/pages/soutenir.vue') },
        { path: 'sites-patrimoniaux',  name: 'frontend.sites',    meta: { title: 'Sites patrimoniaux' },   component: () => import('@/views/frontend/pages/sites.vue') },

        // Publications
        { path: 'actualites',         name: 'frontend.actualites',         meta: { title: 'Actualités' },           component: () => import('@/views/frontend/publications/actualites/index.vue') },
        { path: 'actualites/:slug',   name: 'frontend.actualites.details', meta: { title: 'Article' },              component: () => import('@/views/frontend/publications/actualites/details.vue') },
        { path: 'agenda',             name: 'frontend.agenda',             meta: { title: 'Agenda & Événements' },  component: () => import('@/views/frontend/publications/agenda/index.vue') },
        { path: 'agenda/:slug',       name: 'frontend.agenda.details',     meta: { title: 'Événement' },            component: () => import('@/views/frontend/publications/agenda/details.vue') },

        // Diaspora
        { path: 'diaspora/canada',         name: 'frontend.diaspora.canada',  meta: { title: 'Diaspora — Canada' },         component: () => import('@/views/frontend/diaspora/canada.vue') },
        { path: 'diaspora/congo',          name: 'frontend.diaspora.congo',   meta: { title: 'Diaspora — Congo' },          component: () => import('@/views/frontend/diaspora/congo.vue') },
        { path: 'diaspora/cote-divoire',   name: 'frontend.diaspora.civ',     meta: { title: 'Diaspora — Côte d’Ivoire' },  component: () => import('@/views/frontend/diaspora/cote-divoire.vue') },
        { path: 'diaspora/france',         name: 'frontend.diaspora.france',  meta: { title: 'Diaspora — France' },         component: () => import('@/views/frontend/diaspora/france.vue') },
        { path: 'diaspora/gabon',          name: 'frontend.diaspora.gabon',   meta: { title: 'Diaspora — Gabon' },          component: () => import('@/views/frontend/diaspora/gabon.vue') },
      ]
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        { path: 'se-connecter',        name: 'auth.login',           meta: { title: 'Connexion' },             component: () => import('@/views/authentification/login.vue') },
        { path: 'inscription',         name: 'auth.register',        meta: { title: 'Inscription' },           component: () => import('@/views/authentification/register.vue') },
        { path: 'mot-de-passe-oublie', name: 'auth.forgot-password', meta: { title: 'Mot de passe oublié' },   component: () => import('@/views/authentification/forgotPassword.vue') }
      ]
    },
    {
      path: '/admin',
      component: BackendLayout,
      children: [
        { path: 'dashboard', name: 'backend.dashboard',   meta: { title: 'Tableau de bord' }, component: () => import('@/views/backend/dashboard/index.vue') },
        { path: 'users',     name: 'backend.users.index', meta: { title: 'Utilisateurs' },    component: () => import('@/views/backend/users/index.vue') },
      ]
    },
  ],
})

export default router
