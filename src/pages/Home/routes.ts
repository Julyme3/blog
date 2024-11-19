import { PAGE_HOME } from '@/shared/constants'

export const HOME_ROUTE = {
  name: 'Home',
  path: `/${PAGE_HOME}`,
  component: () => import('./Home.vue'),
  meta: {
    title: 'Home',
  },
};
