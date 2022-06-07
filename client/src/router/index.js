import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home/HomeView.vue'
import UsuarioView from '../views/Usuario/UsuarioView.vue'
import EditoraView from '../views/Editora/EditoraView.vue'
import LivrosView from '../views/Livros/LivrosView.vue'
import AluguelView from '../views/Aluguel/AluguelView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/usuario',
    name: 'Usuario',
    component: UsuarioView
  },
  {
    path: '/editora',
    name: 'Editora',
    component: EditoraView
  },
  {
    path: '/livros',
    name: 'Livros',
    component: LivrosView
  },
  {
    path: '/aluguel',
    name: 'Aluguel',
    component: AluguelView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
