import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FinanceView from '../views/FinanceView.vue'
import RouterView from '../views/RouterView.vue'
import URLView from '../views/URLView.vue'
import NotFound from '../views/404.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/404',
      name: 'notFound',
      component: NotFound
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/finances',
      name: 'finances',
      component: FinanceView
    },
    {
      path: '/url',
      name: 'url',
      component: URLView
    },
    // Matches every non-match to the router
    {
      path: '/:pathMatch(.*)*',
      name: 'router',
      component: RouterView,
      props: true,
    },
  ]
})

export default router
