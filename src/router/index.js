import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login')
  },
  {
    path: '/read',
    name: 'Read',
    component: () => import('@/views/read')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/search')
  },
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/home')
      },
      {
        path: '/rank',
        name: 'Rank',
        component: () => import('@/views/rank')
      },
      {
        path: '/my',
        name: 'My',
        component: () => import('@/views/my')
      },
      {
        path: '/bookshelf',
        name: 'Bookshelf',
        component: () => import('@/views/bookshelf')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
