import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'previwe',
      meta: {layout: "preview"},
      component: () => import('../views/Preview')
    },
    {
      path: '/toDo',
      name: 'toDo',
      meta: {layout: "main"},
      component: () => import('../views/ToDo')
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
