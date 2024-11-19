import { createRouter, createWebHistory } from 'vue-router'
import { HOME_ROUTE } from '@/pages/Home';
import { POSTS_MANAGEMENT_ROUTE } from '@/pages/POSTS_MANAGEMENT';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    HOME_ROUTE,
    POSTS_MANAGEMENT_ROUTE
  ],
})

export default router
