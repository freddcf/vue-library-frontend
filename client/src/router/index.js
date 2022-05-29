import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/usuario',
    name: 'Usuario',
    component: () => import(/* webpackChunkName: "usuario" */ '../views/Usuario/UsuarioView.vue')
  },
  {
    path: '/editora',
    name: 'Editora',
    component: () => import(/* webpackChunkName: "editora" */ '../views/Editora/EditoraView.vue')
  },
  {
    path: '/livros',
    name: 'Livros',
    component: () => import(/* webpackChunkName: "livros" */ '../views/Livros/LivrosView.vue')
  },
  {
    path: '/aluguel',
    name: 'Aluguel',
    component: () => import(/* webpackChunkName: "aluguel" */ '../views/Aluguel/AluguelView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
