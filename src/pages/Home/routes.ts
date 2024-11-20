import { PAGE_HOME } from '@/shared/constants'
import HomePage from '@/pages/Home/HomePage.vue';

export const HOME_ROUTE = {
  name: 'Home',
  path: `/${PAGE_HOME}`,
  component: HomePage,
  meta: {
    title: 'Home',
  },
};
