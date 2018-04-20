import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../views/Miste/Msite.vue'
import Classify from '../views/Classify/Classify.vue'
import Profile from '../views/Profile/Profile.vue'
import ShopCart from '../views/ShopCart/ShopCart.vue'
import Sort from '../views/Classify/Sort/Sort.vue'
import Brand from '../views/Classify/Brand/Brand.vue'
import Detail from '../components/Detail/Detail.vue'
Vue.use(VueRouter)
export default new VueRouter({
  routes:[
    {
      path: '/msite',
      component: Msite,
      meta: {
        showFooter: true // 需要显示底部组件
      },
  },
    {
      path: '/classify',
      component: Classify,
      children:[
        {
          path: '/classify/sort',
          component: Sort,
          meta:{
            showFooter:true
          }
        },
        {
          path: '/classify/brand',
          component: Brand,
          meta:{
            showFooter:true
          }
        },
        {
          path: '',
          redirect: '/classify/sort'
        },
      ]
    },
    {
      path: '/profile',
      component: Profile,
      meta: {
        showFooter: false
      },
    },
    {
      path: '/shopCart',
      component: ShopCart,
      meta: {
        showFooter: false
      },
    },
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})
