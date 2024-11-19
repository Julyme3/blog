import { PAGE_POSTS_MANAGEMENT } from '@/shared/constants'

export const POSTS_MANAGEMENT_ROUTE = {
  name: 'POSTS_MANAGEMENT',
  path: `/${PAGE_POSTS_MANAGEMENT}`,
  component: () => import('./PostsManagement.vue'),
  meta: {
    title: 'Posts Management',
  },
};
