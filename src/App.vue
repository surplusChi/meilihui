<template>
  <div id="app">
    <Tabbar v-show="isTabbarShow">
    </Tabbar>
    <section>
      <!-- 路由容器，必须要预留这个路由容器，才能在页面上路由显示 -->
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
import Tabbar from './components/Tabbar'
import { mapState } from 'vuex'
export default {
  components: {
    Tabbar
  },
  computed: {
    // 解构vuex的公共状态 -- 在计算属性中解构，只要值改变就会重新渲染页面
    ...mapState('TabbarModule', ['isTabbarShow'])
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
* {
  margin: 0;
  padding: 0;
  li {
    list-style: none;
  }
}
</style>
