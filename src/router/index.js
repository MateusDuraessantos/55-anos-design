import { createRouter, createWebHashHistory } from 'vue-router'
import DesignPage from '../views/DesignPage.vue'
import ProjetosPage from '../views/ProjetosPage.vue'

const routes = [
  {
    path: '/',
    name: 'DesignPage',
    component: DesignPage
  },
  {
    path: '/projetos',
    name: 'ProjetosPage',
    component: ProjetosPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;