<template>
  <div>
    <div class="topbar">
      <div class="back" @click="handleBack">
        <svg t="1614918495514" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2896" width="200" height="200"><path d="M874.666667 480H224L514.133333 170.666667c12.8-12.8 10.666667-34.133333-2.133333-44.8s-32-10.666667-44.8 2.133333l-341.333333 362.666667c-2.133333 2.133333-4.266667 6.4-6.4 8.533333-2.133333 4.266667-2.133333 6.4-2.133334 10.666667s0 8.533333 2.133334 10.666666c2.133333 4.266667 4.266667 6.4 6.4 8.533334l341.333333 362.666666c6.4 6.4 14.933333 10.666667 23.466667 10.666667 8.533333 0 14.933333-2.133333 21.333333-8.533333 12.8-12.8 12.8-32 2.133333-44.8L224 544H874.666667c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" p-id="2897"></path></svg>
      </div>
      <div class="title">
        <span id="brand">{{detailList.brand}}</span>
        <span id="price">￥{{detailList.price}}</span>
      </div>
      <div class="right">
        <svg t="1614918541854" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2670" width="200" height="200"><path d="M298.666667 586.666667a74.666667 74.666667 0 1 1 0-149.333334 74.666667 74.666667 0 0 1 0 149.333334z m213.333333 0a74.666667 74.666667 0 1 1 0-149.333334 74.666667 74.666667 0 0 1 0 149.333334z m213.333333 0a74.666667 74.666667 0 1 1 0-149.333334 74.666667 74.666667 0 0 1 0 149.333334z" p-id="2671"></path></svg>
      </div>
    </div>
    <div class="cont">
      <detail-swiper>
        <div class="swiper-slide" v-for="data in detailList.images && detailList.images" :key="data.bigImgUrl">
          <img :src="data.smallImgUrl" alt="">
        </div>
      </detail-swiper>
      <div class="product-base">
        <div class="big-promotion-flag">
          <div class="price-box">
            <span class="price">￥{{detailList.price}}</span>
            <del>￥{{detailList.marketPrice}}</del>
            <span class="tag">{{detailList.discount}}</span>
            <span class="tag">{{detailList && detailList.newTagList[1] | tagFilter}}</span>
          </div>
        </div>
        <div class="product-title">
          <h1>{{detailList.name}}</h1>
        </div>
      </div>
      <div class="delivery">
        {{detailList.deliver_date}}
      </div>
      <div class="other-info-block">
        <section>
          <div class="other-info-item1">
            <span  id="span1">直降</span>
            <div id="div1">距结束 02 天 12 小时 45 分 56 秒</div>
          </div>
          <div class="other-info-item2">
            <span id="span1">服务</span>
            <div id="label_title">
              <span v-for="data in detailList.service_labels" :key="data.label_title">
                {{data.label_title}}
              </span>
            </div>
          </div>
          <div class="other-info-item3">
            <span id="span1">尺码</span>
            <div id="sizeLabel">
              <span v-for="data in detailList.size" :key="data.sizeLabel">
                {{data.sizeLabel}}
              </span>
            </div>
          </div>
        </section>
      </div>
      <div class="block-desc1">
        <h3>商品参数</h3>
        <div class="block-info" v-if="isShow">
          <div class="show-more">
            <img :src="detailList && detailList.description.material_quality_img" alt="">
            <ul>
              <li v-for="data in detailList && detailList.description.attributesList" :key="data.name">
                <label>{{data.name}}</label>
                <span>{{data.value}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
import http from '@/util/http.js'
import detailSwiper from './DetailSwiper'
import Vue from 'vue'
Vue.filter('tagFilter', (data) => {
  // 使用过滤器，判断是否有tag属性
  if (data === undefined) {
    return ''
  } else {
    return data.tag
  }
})
export default {
  data () {
    return {
      categoryId: '',
      productId: '',
      // 详情页数据
      detailList: '',
      // 控制商品参数显示隐藏
      isShow: false
    }
  },
  components: {
    detailSwiper
  },
  methods: {
    ...mapMutations('DetailModule', ['ProductShow', 'ProductHide']),
    handleBack () {
      // 点击退回到产品列表页
      this.$router.back()
      // 点击显示产品列表页
      this.ProductHide()
    }
  },
  mounted () {
    // 拿到路由传来的分类id和产品id
    this.categoryId = this.$route.params.categoryId
    this.productId = this.$route.params.productId
    // 进入详情页，隐藏产品列表页
    this.ProductShow()
    http({
      url: `/product/detail/v3?categoryId=${this.categoryId}&productId=${this.productId}&platform_code=H5&timestamp=1614999919634&summary=18b2cc28c97fd09b3b4d95fdbfa02ca6`
    }).then(res => {
      this.detailList = res.data.infos
      // console.log(this.detailList)
      // 判断商品参数图片是否为空，来进行显示隐藏商品参数模块
      if (this.detailList.description.material_quality_img === '') {
        this.isShow = false
      } else {
        this.isShow = true
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  .swiper-slide {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .topbar {
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
      display: flex;
      flex-direction: column;、
      #brand {
        font-size: 1.5rem;
      }
      #price {
        font-size: .9rem;
        color: red;
      }
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
  .cont {
    position: relative;
    padding: 0 1.533333rem 1.66666667rem;
    .product-base {
      width: 100%;
      padding-bottom: 1rem;
      .big-promotion-flag {
        width: 100%;
        height: 3.2rem;
        background: url("https://cdn12.mei.com/category/20180302/3843071afb6e33e8a92e922607b51f0fd4fa53a986efd91b.png");
        color: #fff;
        overflow: hidden;
        .price-box {
          padding-top: .6rem;
          float: left;
          .price {
            font-size: 1.5rem;
            font-weight: bold;
            padding-right: 1rem;
          }
          del {
            padding-right: 1rem;
          }
          .tag {
            background-color: #fff;
            color: red;
            margin-right: 1rem;
          }
        }
      }
      .product-title {
        width: 100%;
        height: 3.5rem;
        font-size: 1.1rem;
        text-align: left;
        padding-bottom: .5rem;
        h1 {
          padding-top: .5rem;
        }
      }
    }
    .delivery {
      width: 100%;
      height: 1.3rem;
      padding-bottom: 2rem;
      text-align: left;
      font-size: .9rem;
    }
    .other-info-block {
      width: 100%;
      height: 14rem;
      #span1 {
        color: #666;
        font-size: 1.1rem;
        float: left;
      }
      .other-info-item1 {
        border: .1rem solid #f5f5f5;
        width: 100%;
        height: 1.675rem;
        padding: 1.4rem 0 .9rem;
        overflow: hidden;
        #div1 {
          float: left;
          padding-left: 1.2rem;
          color: #000;
        }
      }
      .other-info-item2 {
        border: .1rem solid #f5f5f5;
        width: 100%;
        height: 1.675rem;
        padding: 1.4rem 0 .9rem;
        overflow: hidden;
        #label_title {
          float: left;
          padding-left: 1.2rem;
          font-size: .5rem;
          span {
            padding-right: 1rem;
          }
        }
      }
      .other-info-item3 {
        border: .1rem solid #f5f5f5;
        width: 100%;
        height: 3.05rem;
        padding: 2.05rem 0 1rem;
        overflow: hidden;
        #sizeLabel {
          float: left;
          padding-left: 1.2rem;
          color: #000;
          width: 19rem;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          span {
            background-color: #dad4d4;
            margin-right: 1rem;
            font-size: 1.1rem;
          }
        }
      }
    }
    .block-desc1 {
      width: 100%;
      height: auto;
      border-bottom: .1rem solid #f5f5f5;
      h3 {
        padding: 1.5rem 0 1.4rem;
        color:#000;
        font-size: 1.4rem;
        text-align: left;
      }
      .block-info {
        width: 100%;
        height: 26.8rem;
        .show-more {
          width: 100%;
          img {
            width: 100%;
          }
          ul {
            width: 100%;
            height: 17rem;
            text-align: left;
            padding-bottom: 1rem;
            li {
              padding-bottom: 1rem;
              width: 100%;
              height: 1.4rem;
              overflow: hidden;
              label {
                width: 8rem;
                float: left;
              }
              span {
                width: 14rem;
                float: left;
              }
            }
          }
        }
      }
    }
    /* .block-desc2 {

    } */
  }
</style>
