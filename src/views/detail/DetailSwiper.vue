<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
         <slot></slot>
      </div>
      <!-- Add Pagination  bigImgUrl-->
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper/bundle' // 这只引入了swiper.js文件
import 'swiper/swiper-bundle.min.css'
export default {
  props: {
  },
  mounted () {
    setTimeout(() => {
      // 定时器 一秒后初始化swpier
      // eslint-disable-next-line no-new
      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
        delay: 7000
      })
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
  .swiper-container {
    height: 21.93333rem;
    width: 100%;
  }
</style>
