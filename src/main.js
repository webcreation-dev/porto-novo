import './assets/styles/tailwindcssbase.css'

import { Icon } from '@iconify/vue';


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { setupPrimeVue } from '@/helpers/primevue.js'
import { setupAOS } from '@/helpers/aos.js'

import App from './App.vue'
import router from './router'

const appName = 'VUEJS STARTER';


const app = createApp(App)

app.use(createPinia())
app.use(setupPrimeVue)
app.use(setupAOS)
app.use(router)
app.component('Icon', Icon)

router.afterEach((to) => {
  document.title = `${to.meta.title || 'Page'} | ${appName}`
});

app.mount('#app')
