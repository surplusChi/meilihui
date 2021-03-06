const module = {
  namespaced: true, // 命名空间
  state: {
    isProductShow: true
  },
  mutations: {
    ProductShow (state) {
      state.isProductShow = false
    },
    ProductHide (state) {
      state.isProductShow = true
    }
  },
  actions: {
  }
}

export default module
