import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

import filmRouter from './routes/film'
import cinemaRouter from './routes/cinema'
import centerRouter from './routes/center'


const routes = [
  {
    //重定向
    path:"/",
    redirect:"/films/nowPlaying"
  },
  ...filmRouter,
  cinemaRouter,
  centerRouter
// 模块化
  // 电影模块 
    // 电影模块父  /films



    // {
    //   path:"films",
    //   component:Films,
    //   children:[
    //     {path:"nowPlaying",component:NowPlaying},
    //     {path:"comingSoon",component:ComingSon},

    //   ]
    // },
    // {
    //   path:"/film/:filmId",
    //   component:Detail
    // },
    // {
    //   path:"/center",
    //   component:Center
    // }
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
