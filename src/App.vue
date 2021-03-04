<template>
  <div id="app">
    <Tab>
    </Tab>
    <section>
      <!-- 路由容器，必须要预留这个路由容器，才能在页面上路由显示 -->
      <router-view></router-view>
    </section>
  </div>
</template>
<script>
import Tab from './components/Tab'
export default {
  components: {
    Tab
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
