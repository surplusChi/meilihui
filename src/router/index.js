import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入路由模块
import Index from '../views/Index.vue'
import Crossborder from '../views/Crossborder.vue'
import Women from '../views/Women.vue'
import Men from '../views/Men.vue'
import Cosmetics from '../views/Cosmetics.vue'
import Lifestyle from '../views/Lifestyle.vue'
import Kids from '../views/Kids.vue'
import ProductList from '../views/productlist/ProductList.vue'
import Detail from '../views/detail/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    component: Index
  },
  {
    path: '/crossborder',
    component: Crossborder
  },
  {
    path: '/women',
    component: Women
  },
  {
    path: '/men',
    component: Men
  },
  {
    path: '/cosmetics',
    component: Cosmetics
  },
  {
    path: '/lifestyle',
    component: Lifestyle
  },
  {
    path: '/kids',
    component: Kids
  },
  {
    path: '/productlist/:categoryId', // 传入产品id，做成动态路由
    component: ProductList, // 产品列表页路由
    children: [
      {
        path: '/productlist/:categoryId/detail/:productId', // 二级路由，进入详情页
        component: Detail // 详情页路由
      }
    ]
  },
  {
    path: '*',
    redirect: '/index' // 重定向
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
