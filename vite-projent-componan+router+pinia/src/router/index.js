import { createRouter, createWebHistory } from 'vue-router'
import all_show from '../components/all_show.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/all_show',
      name: 'all_show',
      component: all_show
    }
  ]
})

export default router
