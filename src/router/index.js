import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WorkView from '../views/WorkView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      
    },
    {
      path: '/om',
      name: 'about',
      component: AboutView,
    },

      {
        path: '/projekter',
        name: 'projekter',
        component: WorkView,
      },

      {
        path: '/kontakt',
        name: 'contact',
        component: ContactView,

      },
      
  ]
})

export default router
