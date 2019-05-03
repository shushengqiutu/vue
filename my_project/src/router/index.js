import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/todolist/home'
import Xiaoshuo from '@/components/xiaoshuo/xiaoshuo'
import Info from '@/components/xiaoshuo/info'
import Vuex1 from '@/components/vuex/Vuex'

Vue.use(Router)

export default new Router({
  routes:
      [

    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
      {
          path: '/todolist',
          name: 'home',
          component: Home
      },
      {
          path: '/xiaoshuo',
          name: 'Xiaoshuo',
          component: Xiaoshuo,
      },
      {
          path:"/info",
          name:'Info',
          component:Info
      },
      {
          path:"/vuex",
          name:'vuex',
          component:Vuex1
      }


  ]
})
