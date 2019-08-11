import Vue from 'vue'
import Router from 'vue-router'
import MainRouter from './views/MainRouter.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
          component: () => import('./views/Home.vue')
        },
        {
          path:'detail',
          component:() => import('./views/Detail.vue')
        },
        {
          path:'list',
          component:() => import('./views/List.vue')
        },
        {
          path:'cart',
          component:() => import('./views/Cart.vue')
        },
        {
          path:'order',
          component:() => import('./views/Order.vue')
        },
        {
          path:'portal',
          component:() => import('./views/PortalRouter.vue'),
          children: [
            { 
              path: '', 
              component: () => import('./views/protal-all/Pro-personal') 
            },
            {
              path: 'my-add',
              component: () => import('./views/protal-all/Pro-myadd')
            },
            {
              path: 'my-details',
              component: () => import('./views/protal-all/Pro-mydetails')
            },
            {
              path:'my-order/:state?',
              name: 'myOrder',
              component:() => import('./views/protal-all/Pro-myorder')
            },
            {
              path:'my-pwd',
              component:() => import('./views/protal-all/Pro-pwd')
            },
            
          ]
        },
        {
          path:'login',
          name: 'login',
          component:() => import('./views/Login.vue')
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
      component: () => import('./views/About.vue')
    }
  ]
})
