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
        {
          path: '',
          name: 'frontend.welcome',
          meta: { title: 'FRONT WELCOME' },
          component: () => import('@/views/frontend/welcome/index.vue')
        },
        {
          path: '/faqs',
          name: 'frontend.faqs',
          meta: { title: 'FRONT FAQS' },
          component: () => import('@/views/frontend/faqs/index.vue')
        },
        {
          path: '/a-propos',
          name: 'frontend.apropos',
          meta: { title: 'FRONT BLANK PAGE' },
          component: () => import('@/views/frontend/propos/index.vue')
        },
        {
          path: '/contact',
          name: 'frontend.contact',
          meta: { title: 'FRONT CONTACT' },
          component: () => import('@/views/frontend/contact/index.vue')
        }
      ]
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          path: 'se-connecter',
          name: 'auth.login',
          meta: { title: 'AUTH LOGIN' },
          component: () => import('@/views/authentification/login.vue')
        },
        {
          path: 'inscription',
          name: 'auth.register',
          meta: { title: 'AUTH REGISTER' },
          component: () => import('@/views/authentification/register.vue')
        },
        {
          path: 'mot-de-passe-oublie',
          name: 'auth.forgot-password',
          meta: { title: 'AUTH RESET PASSWORD' },
          component: () => import('@/views/authentification/forgotPassword.vue')
        }
      ]
    },
    {
      path: '/admin',
      component: BackendLayout,
      children: [
        {
          path: 'dashboard',
          name: 'backend.dashboard',
          meta: { title: "ADMIN DASHBORD" },
          component: () => import('@/views/backend/dashboard/index.vue'),
        },
        {
          path: '/users',
          name: 'backend.users.index',
          meta: { title: "ADMIN USERS" },
          component: () => import('@/views/backend/users/index.vue'),
        }
      ]
    },
  ],
})

export default router
