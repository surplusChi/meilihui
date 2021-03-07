<template>
  <div>
    <div class="topbar">
      <div class="back" @click="handleBack">
        <svg t="1614918495514" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2896" width="200" height="200"><path d="M874.666667 480H224L514.133333 170.666667c12.8-12.8 10.666667-34.133333-2.133333-44.8s-32-10.666667-44.8 2.133333l-341.333333 362.666667c-2.133333 2.133333-4.266667 6.4-6.4 8.533333-2.133333 4.266667-2.133333 6.4-2.133334 10.666667s0 8.533333 2.133334 10.666666c2.133333 4.266667 4.266667 6.4 6.4 8.533334l341.333333 362.666666c6.4 6.4 14.933333 10.666667 23.466667 10.666667 8.533333 0 14.933333-2.133333 21.333333-8.533333 12.8-12.8 12.8-32 2.133333-44.8L224 544H874.666667c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" p-id="2897"></path></svg>
      </div>
      <div class="title">
        购物车
      </div>
      <div class="right">
        <svg t="1614918541854" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2670" width="200" height="200"><path d="M298.666667 586.666667a74.666667 74.666667 0 1 1 0-149.333334 74.666667 74.666667 0 0 1 0 149.333334z m213.333333 0a74.666667 74.666667 0 1 1 0-149.333334 74.666667 74.666667 0 0 1 0 149.333334z m213.333333 0a74.666667 74.666667 0 1 1 0-149.333334 74.666667 74.666667 0 0 1 0 149.333334z" p-id="2671"></path></svg>
      </div>
    </div>
    <div class="cart">
      <div>
        <img src="@/assets/cart.jpg" alt="">
        <div>
          <p class="p1">登录后可同步购物袋中的商品~</p>
          <button class="GotoLogin" @click="handleLogin">立即登录</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  methods: {
    // 解构 vuex里的控制tabbar的公共状态和方法
    ...mapMutations('TabbarModule', ['Show', 'Hide']),
    handleBack () {
      // 点击退回上一个路由
      this.$router.back()
    },
    handleLogin () {
      this.$router.push('/login')
    }
  },
  mounted () {
    // 进入登录页面，隐藏顶部tabbar
    this.Show()
  }
}
</script>
<style lang="scss" scoped>
  .topbar {
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 3.1rem;
    z-index: 99;
    .back {
      width: 3.8rem;
      height: 2.6rem;
      padding-top: .5rem;
    }
    .title {
      font-weight: bold;
      width: 18.6rem;
      height: 2.6rem;
      padding-top: .5rem;
      font-size: 1.3rem;
    }
    .right {
      width: 3.8rem;
      height: 2.6rem;
      padding-top: .5rem;
    }
  }
  .icon {
    width: 2rem;
    height: 2rem;
  }
  .cart {
    width: 100%;
    padding-top: 7rem;
    .p1 {
      padding: 1rem 0 2.5rem;
    }
    .GotoLogin {
      width: 6rem;
      height: 3rem;
      background-color: #fff;
      color: #000;
      font-size: 1.1rem;
    }
  }
</style>
