import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入路由模块
import Index from '../views/Index.vue'
import Crossborder from '../views/category/Crossborder.vue'
import Women from '../views/category/Women.vue'
import Men from '../views/category/Men.vue'
import Cosmetics from '../views/category/Cosmetics.vue'
import Lifestyle from '../views/category/Lifestyle.vue'
import Kids from '../views/category/Kids.vue'
import ProductList from '../views/productlist/ProductList.vue'
import Detail from '../views/detail/Detail.vue'
import Login from '../views/login/Login.vue'
import ShoppingCart from '../views/login/ShoppingCart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/index',
    component: Index // 主页面路由
  },
  {
    path: '/crossborder',
    component: Crossborder // 海外页面路由
  },
  {
    path: '/women',
    component: Women // 女士页面路由
  },
  {
    path: '/men',
    component: Men // 男士页面路由
  },
  {
    path: '/cosmetics',
    component: Cosmetics // 美妆页面路由
  },
  {
    path: '/lifestyle',
    component: Lifestyle // 家居页面路由
  },
  {
    path: '/kids',
    component: Kids // 婴童页面路由
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
    path: '/login',
    component: Login // 登录页面路由
  },
  {
    path: '/shoppingcart',
    component: ShoppingCart // 购物车页面路由
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
