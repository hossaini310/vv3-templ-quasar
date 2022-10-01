import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [{ path: '/', component: () => import('../views/IndexPage.vue') }],
    },
    {
      path: '/:catchAll(.*)*',
      component: () => import('../views/ErrorNotFound.vue'),
    },
  ],
});

export default router;
