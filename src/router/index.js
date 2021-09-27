import Vue from 'vue'
import VueRouter from 'vue-router'
import { getToken } from '@/utils/user'
import axios from '@/utils/axios'
Vue.use(VueRouter)

var routes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/layout/index.vue')
  }
]
axios.post('/api/getRouters').then((res) => {
  for (var routitem of res.data) {
    var item={
      path:routitem.path,
      name:routitem.name,
      component: () => import('../views/'+routitem.path+'/index.vue')
    }
    routes.push(item);
  }
}).catch((err) => {
  console.log(err)
})


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

var whiteList = "/login"
var hasToken = getToken();
router.beforeEach((to, from, next) => {
  //to: 即将要进入的目标 [路由对象]
  //from:当前导航正要离开的路由
  //next:一定要调用该方法来 resolve 这个钩子
  if (hasToken) {
    next()
  } else {
    if (whiteList === to.path) {
      next()//这里是即将进入的页面是白名单的页面就直接进入
    } else {
      next({ path: '/login' })//这里是即将进入的页面不是白名单的页面又没有token的情况下重定向到登录页面进行登录操作
    }
  }
})

export default router
