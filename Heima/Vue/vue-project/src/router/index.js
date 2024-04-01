import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/sample',
    name: 'sample',
    component: () => import(/* webpackChunkName: "sample" */ '../views/Sample/EmpView.vue')
  },
  {
    path: '/dept',
    name: 'dept',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "dept" */ '../views/Sample/DeptView.vue')
  },
  {
    path: '/',
    //自动重定向到/sample
    redirect: "/sample"
  },
]

const router = new VueRouter({
  routes
})

export default router
