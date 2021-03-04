<template>
  <div id="crossborder">
    <ul>
      <li v-for="data in menList" :key="data.categoryId">
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
export default {
  data () {
    return {
      menList: ''
    }
  },
  mounted () {
    http({
      url: '/silo/eventForH5?categoryId=men&pageIndex=1&timestamp=1614855643337&summary=19c2cc3d0d7087e780e2e6b8f54fc90c&platform_code=H5'
    }).then(res => {
      this.menList = res.data.eventList
      // console.log(this.menList)
    })
  }
}
</script>
<style lang="scss" scoped>
   #crossborder {
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
