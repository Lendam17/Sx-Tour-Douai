import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Tickets from '../views/Tickets.vue'
import Contact from '../views/Contact.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: Tickets
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})

export default router