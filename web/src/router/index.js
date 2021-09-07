import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/postlist',
        name: 'Postlist',
        component: () => import('../views/PostList/index.vue')
      },
      {
        path: '/edit',
        name: 'Edit',
        component: () => import('../views/Edit/index.vue')
      },
      {
        path: '/category',
        name: 'Category',
        component: () => import('../views/Category/index.vue')
      },
      {
        path: '/tag',
        name: 'Tag',
        component: () => import('../views/Tag/index.vue')
      },
      {
        path: '/laboratory',
        name: 'Laboratory',
        component: () => import('../views/Laboratory/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
