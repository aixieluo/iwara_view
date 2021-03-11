import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/video',
    name: 'Video',
    component: () => import(/* webpackChunkName: "about" */ '../views/video/Index.vue')
  },
  {
    path: '/video/:hash',
    name: 'Video',
    component: () => import(/* webpackChunkName: "about" */ '../views/video/Show.vue')
  },
  {
    path: '/ggl/',
    name: 'Video',
    component: () => import(/* webpackChunkName: "about" */ '../views/ggl/Index.vue'),
    meta: {
      title: '刮刮乐'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) =>{
  if(to.meta.title){
    document.title = to.meta.title
  }
  next();
})

export default router
