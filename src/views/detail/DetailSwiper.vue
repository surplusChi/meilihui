<template>
  <div>
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <!-- <div class="swiper-slide" v-for="data in img" :key="data.bigImgUrl">
          <img :src="data.smallImgUrl" alt="">
        </div> -->
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
  // props: ['images'],
  // computed: {
  //   img () {
  //     return this.images
  //   }
  // },
  mounted () {
    this.$nextTick(() => {
      // console.log(0)
      // eslint-disable-next-line no-new
      new Swiper('.swiper-container', {
        pagination: {
          el: '.swiper-pagination'
        },
        autoplay: true,
        delay: 7000
      })
    })
  }
}
</script>

<style lang="scss" scoped>
  .swiper-container {
    height: 21.93333rem;
    width: 100%;
    /* .swiper-slide {
      width: 100%;
      img {
        width: 100%;
      }
    } */
  }
</style>
