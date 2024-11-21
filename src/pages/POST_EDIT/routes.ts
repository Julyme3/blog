import { PAGE_POST_EDIT } from '@/shared/constants'

export const POST_EDIT_ROUTE = {
  name: 'POST_EDIT',
  path: `/${PAGE_POST_EDIT}/:id`,
  component: () => import('./PostEdit.vue'),
  meta: {
    title: 'Post Edit',
  },
}
