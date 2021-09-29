import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import {initMenu} from '../router/routes-init'
import axios from 'axios'
import store from '../store/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  /**
   * 静态路由
   */
  routes: [
    {
      path: '/',
      redirect: {
        name: 'Login'
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || to.path === '/') {
    console.log('login-------')
    next()
  } else {
    let token = localStorage.getItem('token')
    if (token === null || token === '') {
      console.log('no token---------')
      next('/login')
    } else {
      console.log('have token---------')
      generateRouter(to, from, next)
    }
  }
})

export const generateRouter = (to, from, next) => {
  // console.log(JSON.parse(store.state.menu))
  if (JSON.parse(store.state.menu).length !== 0) {
    console.log('routes cache exist')
    next()
    return
  }
  console.log('download routes')
  axios.get('/zuul-server/js-user/v1/user/user-menu/' + 'root').then(menu => {
    initMenu(router, menu.data.data.menu)
    console.log(JSON.parse(store.state.menu))
    next(to.path)
  })
}

export default router
