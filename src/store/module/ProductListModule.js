import http from '@/util/http.js'
const module = {
  namespaced: true, // 命名空间
  state: {
    list: ''
  },

  mutations: {
    setList (state, list) {
      state.list = list
      // console.log(state.list)
    },
    clearList (state) {
      state.list = '' // 清空Sort缓存
    }
  },

  actions: {
    getList (store, [categoryId, sort]) {
      return http({
        url: `/event/product/v3?pageIndex=1&categoryId=${categoryId}&key=&sort=${sort}&timestamp=1614911199327&summary=20c685e1f46f9236dcad412b6e1b7c92&platform_code=H5`
      }).then(res => {
        // console.log(res.data)
        // 拿到想要的数据，并通过监控修改公共状态
        store.commit('setList', res.data)
      })
    }
  }
}

export default module
