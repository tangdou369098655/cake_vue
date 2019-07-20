import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import MainRouter from './views/MainRouter.vue'
import Deatil from './views/Detail.vue'
import List from './views/List.vue'
import Cart from './views/Cart.vue'
import Order from './views/Order.vue'
import Portal from './views/Portal.vue'
import PortalRouter from './views/PortalRouter.vue'
import proMyadd from './views/protal-all/Pro-myadd'
import proMydetails from './views/protal-all/Pro-mydetails'
import proMyOrder from './views/protal-all/Pro-myorder'
import proPersonal from './views/protal-all/Pro-personal'
import proPwd from './views/protal-all/Pro-pwd'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: MainRouter,
      children:[
        {
          path: '',
          redirect:'home'// 假如访问根路径跳转HOME
        },
        {
          path: 'home',
          component:Home
        },
        {
          path:'detail',
          component:Deatil
        },
        {
          path:'list',
          component:List
        },
        {
          path:'cart',
          component:Cart
        },
        {
          path:'order',
          component:Order
        },
        {
          path:'portal',
          component:PortalRouter,
          children: [
            { 
              path: '', 
              component: proPersonal 
            },
            {
              path: 'my-add',
              component: proMyadd
            },
            {
              path: 'my-details',
              component: proMydetails
            },
            {
              path:'my-order',
              component:proMyOrder
            },
            {
              path:'my-pwd',
              component:proPwd
            },
            
          ]
        },
        // {
        //   path:'about',
        //   component:About
        // },
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
