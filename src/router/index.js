import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import app01 from '@/components/app01'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'app01',
      component: app01
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
