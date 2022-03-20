import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from "../views/HomeView.vue"

import AboutView from "../views/AboutView.vue"

import CabazesView from "../views/CabazesView.vue"

import ErroView from  "../views/ErroView.vue"

import LoginView from "../views/LoginView.vue"

import SignInView from "../views/SignInView.vue"

const routes = [


  {
    path: '/',
    name: 'HomeView',
  components: HomeView 
  
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  {
    path: '/cabazes',
    name: 'cabazes',
    component: CabazesView
  },

  {
    path: '/erro',
    name: 'erro',
    component: ErroView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signin',
    name: 'signin',
    component: SignInView
  },


  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router