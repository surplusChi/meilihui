const module = {
  namespaced: true, // 命名空间
  state: {
    isTabbarShow: true // 控制主页面顶部导航栏显示隐藏
  },
  mutations: {
    Show (state) {
      state.isTabbarShow = false
      // console.log(state.isTabbarShow)
    },
    Hide (state) {
      state.isTabbarShow = true
      // console.log(state.isTabbarShow)
    }
  },
  actions: {
  }
}

export default module
