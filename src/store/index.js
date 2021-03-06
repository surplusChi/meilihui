import Vue from 'vue'
import Vuex from 'vuex'
import TabbarModule from './module/TabbarModule'
import ProductListModule from './module/ProductListModule'
import DetailModule from './module/DetailModule'
import createPersistedState from 'vuex-persistedstate' // 引入vuex持久化模块
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()], // vuex的异步数据持久化
  state: {
  },
  mutations: {
  },
  actions: {
  },
  // 导入各个模块
  modules: {
    TabbarModule,
    ProductListModule,
    DetailModule
  }
})
