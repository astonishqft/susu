import { createRouter, createWebHashHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue';
import IndexView from '../views/index.vue'
import LoginView from '../views/login.vue'
import HomeView from '../views/home.vue'
import RegisterView from '../views/register.vue'
import ChooseView from '../views/choose.vue'
import FirstEnterView from '../views/firstEnter.vue'
import SecondEnterView from '../views/secondEnter.vue'
import FirstOneDetail from '../views/firstOneDetail.vue' // 党史大闯关·第一关
import FirstTwoEnter from '../views/firstTwoEnter.vue'
import FirstTwoDetail from '../views/firstTwoDetail.vue'
import FirstThreeEnter from '../views/firstThreeEnter.vue'
import FirstThreeDetail from '../views/firstThreeDetail.vue'
import FirstEnd from '../views/firstEnd.vue'

const router = createRouter({
  history: createWebHashHistory(),
  strict: true,
  routes: [
    {
      path: '/',
      name: 'IndexView',
      component: LoginView
    },
    {
      path: '/login',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/home',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView
    },
    {
      path: '/choose',
      name: 'ChooseView',
      component: ChooseView
    },
    {
      path: '/firstEnter',
      name: 'FirstEnterView',
      component: FirstEnterView
    },
    {
      path: '/secondEnter',
      name: 'SecondEnterView',
      component: SecondEnterView
    },
    {
      path: '/firstOneDetail',
      name: 'FirstOneDetail',
      component: FirstOneDetail
    },
    {
      path: '/firstTwoEnter',
      name: 'FirstTwoEnter',
      component: FirstTwoEnter
    },
    {
      path: '/firstTwoDetail',
      name: 'FirstTwoDetail',
      component: FirstTwoDetail
    },
    {
      path: '/firstThreeEnter',
      name: 'FirstThreeEnter',
      component: FirstThreeEnter
    },
    {
      path: '/firstThreeDetail',
      name: 'FirstThreeDetail',
      component: FirstThreeDetail
    },
    {
      path: '/firstEnd',
      name: 'FirstEnd',
      component: FirstEnd
    }
  ]
})

export default router

// const router = new VueRouter({
//   routes: [
//     { path: '/', redirect: '/login' },
//     { path: '/login', component: Login },
//     {
//       path: '/home',
//       component: Home,
//       redirect: '/equipment', // 重定向功能，只要访问home地址，就会重定向到wequipment地址
//       children: [
//       { path: '/equipment', component: Equip },
//       { path: '/deploy', component: Deploy },
//       { path: '/history', component: History },
//       { path: '/analysis', component: Analysis },
//       { path: '/power', component: Power },
//       { path: '/remote', component: Remote }]// welcome为home的子属性
//     }
//   ],
//   mode: 'history'

