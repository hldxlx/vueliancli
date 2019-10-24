import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Movie from '@/views/movie.vue'
import Detail from '@/views/Detail.vue'
import Center from '@/views/Center.vue'
import Login from '@/views/Login.vue'
import Nowplaying from '@/views/movie/Nowplaying.vue'
import Commingsoon from '@/views/movie/Commingsoon.vue'

Vue.use(Router)

const router = new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/movie',
      // name: 'movie',
      component: Movie,
      children:[
        {
          path: 'nowplaying',//  /movie/
          component:Nowplaying
        },
        {
          path: 'commingsoon',//  /movie/
          component: Commingsoon
        },
        {
          path: '',
          redirect: '/movie/nowplaying'
        }
      ]
    },
    {
      path: '/detail/:binsomid',  //   /detail/111   动态路由配置
      name: 'detail',
      component: Detail
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/center',
      name: 'center',
      component: Center
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '*',
      redirect: '/movie'
    },
  ]
})

const user ={
  isLogin(){
    return false;
  }
}
router.beforeEach((to,from,next) =>{
  console.log(to,'===to');
  if(to.path === '/about'){
    if(user.isLogin()){
      console.log(1)
      next();
    }else{
      console.log(2)
      next("/login");
    }
  }else{
    next()
  }
})
export default router;
