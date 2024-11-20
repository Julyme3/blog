import { createRouter, createWebHistory } from 'vue-router'
import { PAGE_HOME } from '@/shared/constants';
import { HOME_ROUTE } from '@/pages/Home';
import { POSTS_MANAGEMENT_ROUTE } from '@/pages/POSTS_MANAGEMENT';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: { path: `/${PAGE_HOME}` },
    },
    HOME_ROUTE,
    POSTS_MANAGEMENT_ROUTE
  ],
})

export default router
