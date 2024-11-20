import { PAGE_POSTS_LIST } from '@/shared/constants'

export const POSTS_LIST_ROUTE = {
  name: 'POSTS_LIST',
  path: `/${PAGE_POSTS_LIST}`,
  component: () => import('./PostsList.vue'),
  meta: {
    title: 'Posts List',
  },
};
