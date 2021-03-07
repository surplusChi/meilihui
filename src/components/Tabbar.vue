<template>
  <div id="tab">
    <!-- :class=" isShow ? 'active' : 'a' " 当滚动高度大于一定值时，加背景颜色 -->
    <nav :class=" isShow ? 'active' : 'a' ">
      <div id="title">
        <ul>
          <li @click="handleLogin"><span>登录</span></li>
          <li><input type="text" placeholder="                 THOM BROWNE" ></li>
          <li @click="handleCart"><svg t="1614832519323" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1078" width="200" height="200"><path d="M912.695652 1024H111.304348a111.304348 111.304348 0 0 1-111.304348-111.304348V111.304348a111.304348 111.304348 0 0 1 111.304348-111.304348h801.391304a111.304348 111.304348 0 0 1 111.304348 111.304348v801.391304a111.304348 111.304348 0 0 1-111.304348 111.304348zM111.304348 44.521739a66.782609 66.782609 0 0 0-66.782609 66.782609v801.391304a66.782609 66.782609 0 0 0 66.782609 66.782609h801.391304a66.782609 66.782609 0 0 0 66.782609-66.782609V111.304348a66.782609 66.782609 0 0 0-66.782609-66.782609z" fill="#666666" p-id="1079"></path><path d="M756.869565 270.692174m-44.521739 0a44.521739 44.521739 0 1 0 89.043478 0 44.521739 44.521739 0 1 0-89.043478 0Z" fill="#666666" p-id="1080"></path><path d="M756.869565 326.121739a55.652174 55.652174 0 1 1 33.168696-99.283478 54.761739 54.761739 0 0 1 22.260869 36.730435 54.53913 54.53913 0 0 1-10.462608 41.182608 55.206957 55.206957 0 0 1-36.507826 22.26087 49.641739 49.641739 0 0 1-8.459131-0.890435z m0-89.043478h-4.897391a33.836522 33.836522 0 0 0-28.716522 38.288696 33.391304 33.391304 0 0 0 59.881739 15.137391 32.723478 32.723478 0 0 0 6.90087-24.709565 32.50087 32.50087 0 0 0-12.911304-22.26087 34.949565 34.949565 0 0 0-20.257392-6.455652z" fill="#666666" p-id="1081"></path><path d="M257.335652 270.692174m-44.521739 0a44.521739 44.521739 0 1 0 89.043478 0 44.521739 44.521739 0 1 0-89.043478 0Z" fill="#666666" p-id="1082"></path><path d="M257.335652 326.121739a55.652174 55.652174 0 1 1 55.652174-55.652174 55.652174 55.652174 0 0 1-55.652174 55.652174z m0-89.043478a33.391304 33.391304 0 1 0 33.391305 33.391304 33.391304 33.391304 0 0 0-33.391305-33.391304z" fill="#666666" p-id="1083"></path><path d="M512 572.549565a277.147826 277.147826 0 0 1-276.925217-276.925217 22.26087 22.26087 0 1 1 44.521739 0 232.403478 232.403478 0 0 0 464.806956 0 22.26087 22.26087 0 0 1 44.521739 0A277.147826 277.147826 0 0 1 512 572.549565z" fill="#666666" p-id="1084"></path></svg></li>
        </ul>
      </div>
      <div id="list">
        <ul id="tab">
          <router-link to="/index" tag= "li" active-class="tabbaractive">
              推荐
          </router-link>
          <router-link to="/crossborder" tag= "li" active-class="tabbaractive">
              海外
          </router-link>
          <router-link to="/women" tag= "li" active-class="tabbaractive">
              女士
          </router-link>
          <router-link to="/men" tag= "li" active-class="tabbaractive">
              男士
          </router-link>
          <router-link to="/cosmetics" tag= "li" active-class="tabbaractive">
              美妆
          </router-link>
          <router-link to="/lifestyle" tag= "li" active-class="tabbaractive">
              家居
          </router-link>
          <router-link to="/kids" tag= "li" active-class="tabbaractive">
              婴童
          </router-link>
        </ul>
      </div>
    </nav>
    <div id="colo">
      <img src="https://img.alicdn.com/tfs/TB1WQ91o4z1gK0jSZSgXXavwpXa-750-900.jpg" alt="">
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Icon } from 'vant'
Vue.use(Icon)

export default {
  data () {
    return {
      isShow: false // 用来控制是否加背景颜色
    }
  },
  mounted () { // 给window添加一个滚动滚动监听事件
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    // 根据滚动高度来监听的函数
    handleScroll () {
      // 获取 滚动条距顶部的高度
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      if (scrollTop >= 100) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },
    handleLogin () {
      this.$router.push('/login')
    },
    handleCart () {
      this.$router.push('/shoppingcart')
    }
  }
}
</script>

<style lang="scss" scoped>
  #tab {
    position: relative;
    nav {
      height: 5.1rem;
      width: 26rem;
      position: fixed;
      z-index: 10;
      left: 0;
      top: 0;
      #title {
        position: absolute;
        width: 26rem;
        height: 2.473333rem;
        margin: .3rem auto;
        padding-left: 1.1rem;
        ul {
          justify-content: flex-end;
          height: 2.4rem;
          width: 100%;
          li{
            padding-right: 2.1rem;
            list-style: none;
            text-align: center;
            font-size: 1.2rem;
            height: 2.4rem;
            line-height: 2.4rem;
            position: relative;
            width: auto;
            float: left;
            input {
              width: 15rem;
              height: 1.9rem;
            }
            .icon {
              padding-top: .4rem;
              width: 1.7rem;
              height: 1.7rem;
            }
          }
        }
      }
      #list {
        top: 2.873333rem;
        position: absolute;
        overflow: hidden;
        width: 26rem;
        height: 2.473333rem;
        margin: .2rem auto;
        padding-left: .2rem;
        box-sizing: border-box;
        ul {
          display: flex;
          justify-content: flex-end;
          height: 2.4rem;
          width: 100%;
          li{
            flex: 1;
            list-style: none;
            text-align: center;
            font-size: 1.2rem;
            height: 2.4rem;
            line-height: 2.4rem;
            position: relative;
            width: 2.2rem;
            float: left;
            box-sizing: border-box;
          }
          .tabbaractive{
            color: red;
          }
        }
      }
    }
    #colo {
      img {
        width: 100%;
      }
    }
  }

  .active {
    /*  滚动给导航栏加背景颜色 */
    background-color: #fff;
    color: #000;
  }
  .a {
    /* 小于滚动高度，没有背景颜色 */
    color: #fff;
  }
</style>
