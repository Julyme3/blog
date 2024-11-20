import { PAGE_POST_CREATE } from '@/shared/constants'

export const POST_CREATE_ROUTE = {
  name: 'POST_CREATE',
  path: `/${PAGE_POST_CREATE}`,
  component: () => import('./PostCreate.vue'),
  meta: {
    title: 'Post Create',
  },
}
