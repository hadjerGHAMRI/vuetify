import Vue from 'vue'
import VueRouter from 'vue-router'
import Profile from '../views/ProfileView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/:id',
    name: 'profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
