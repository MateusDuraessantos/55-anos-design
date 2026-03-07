import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProjetosPage from '../views/ProjetosPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/projetos',
    name: 'ProjetosPage',
    component: ProjetosPage
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;