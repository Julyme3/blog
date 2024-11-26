import { createRouter, createWebHistory } from 'vue-router'
import { PAGE_HOME } from '@/shared/constants'
import { HOME_ROUTE } from '@/pages/Home'
import { POSTS_LIST_ROUTE } from '@/pages/POSTS_LIST'
import { POST_CREATE_ROUTE } from '@/pages/POST_CREATE'
import { POST_EDIT_ROUTE } from '@/pages/POST_EDIT'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: { path: `/${PAGE_HOME}` },
    },
    HOME_ROUTE,
    POSTS_LIST_ROUTE,
    POST_CREATE_ROUTE,
    POST_EDIT_ROUTE,
  ],
  linkActiveClass: 'underline',
})

export default router
