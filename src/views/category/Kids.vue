<template>
  <div id="kids">
    <ul>
      <li v-for="data in cosmeticsList" :key="data.categoryId" @click="handleClick(data.categoryId)">
        <img :src="data.imageUrl" alt="">
        <div class="event-base">
          <span id="span1">{{data.englishName}}</span>
          <span>{{data.chineseName}}</span>
          <span>{{data.discountText}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import http from '@/util/http.js'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      cosmeticsList: ''
    }
  },
  methods: {
    // 解构 vuex里的控制tabbar的显示的方法
    ...mapMutations('TabbarModule', ['Hide']),
    // 点击跳转到产品列表页
    handleClick (categoryId) {
      this.$router.push(`/productlist/${categoryId}`)
    }
  },
  mounted () {
    // 进入页面，将顶部选项栏显示出来
    this.Hide()
    http({
      url: '/silo/eventForH5?categoryId=kids&pageIndex=1&timestamp=1614847860529&summary=c88be1eeb2f44afd896913eaeeffb50e&platform_code=H5'
    }).then(res => {
      this.cosmeticsList = res.data.eventList
      // console.log(this.cosmeticsList)
    })
  }
}
</script>
<style lang="scss" scoped>
   #kids {
    margin: 2rem 1rem 0;
    ul {
      width: 23.9rem;
      height: auto;
      overflow: hidden;
      margin-top: 1.5rem;
      position: relative;
      li {
        margin-bottom: 1rem;
        height: 14.25rem;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .event-base {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 15rem;
          height: 6.76rem;
          display: flex;
          align-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
          color: #fff;
          padding-left: 1rem;
          font-size: 1rem;
          font-weight: bold;
          #span1 {
            font-size: 1.1rem;
          }
        }
      }
    }
  }
</style>
