import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Home from '../components/Home';
import Productos from '../components/Productos';
import Medio_pago from '../components/Medio_pago';



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/user/login',
    name: 'login',
    component: Login
  },
  {
    path: '/user/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/user/productos',
    name: 'productos',
    component: Productos
  },

  {
    path: '/user/medio_pago',
    name: 'medio_pago',
    component: Medio_pago
  },
   

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
