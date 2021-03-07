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
        <div class="swiper-slide" v-for="data in detailList.images" :key="data.bigImgUrl">
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
      <div class="block-desc">
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
      <div class="block-desc">
        <h3>商品详情</h3>
        <div class="block-info">
          <div class="content">{{detailList && detailList.description.design}}</div>
          <div class="pic">
            <img
            v-for="data in detailList && detailList.description.product_img1"
            :key="data.bigImgUrl" :src="data.bigImgUrl" alt="">
          </div>
          <p class="tip">{{detailList && detailList.description.message}}</p>
        </div>
      </div>
      <div class="block-desc" v-if="isShow1">
        <h3>洗护与保养</h3>
        <div class="block-info">
          <p class="maintenance">{{detailList && detailList.description.maintenanceList[0]}}</p>
        </div>
      </div>
      <div class="block-desc">
        <h3>包装清单</h3>
        <div class="block-info">
          <img class="img1" :src="detailList.packageURL" alt="">
          <p class="tip">{{detailList && detailList.packageText}}</p>
        </div>
      </div>
      <div class="block-desc">
        <h3>{{detailList && detailList.brandName}}</h3>
        <div class="span1">品牌主页> </div>
      </div>
      <div class="block-desc" v-if="isShow2">
        <h3>GATEONE</h3>
        <div class="block-info">
          <img class="img1" :src="detailList.brandImg" alt="">
        </div>
      </div>
      <div class="block-desc" v-if="isShow3">
        <div class="block-info">
          <img class="img1" :src="detailList.postSellUrls[0]" alt="">
        </div>
      </div>
      <div class="block-desc">
        <div class="block-info">
          <img class="img1" :src="detailList.postSellUrl" alt="">
        </div>
      </div>
      <div class="block-desc">
        <h3>用户评论(0)</h3>
        <div class="span1">查看全部> </div>
      </div>
    </div>
    <div class="car-bottom-bar">
      <div class="left-area" @click="handleCart">
        <svg t="1614832519323" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1078" width="200" height="200"><path d="M912.695652 1024H111.304348a111.304348 111.304348 0 0 1-111.304348-111.304348V111.304348a111.304348 111.304348 0 0 1 111.304348-111.304348h801.391304a111.304348 111.304348 0 0 1 111.304348 111.304348v801.391304a111.304348 111.304348 0 0 1-111.304348 111.304348zM111.304348 44.521739a66.782609 66.782609 0 0 0-66.782609 66.782609v801.391304a66.782609 66.782609 0 0 0 66.782609 66.782609h801.391304a66.782609 66.782609 0 0 0 66.782609-66.782609V111.304348a66.782609 66.782609 0 0 0-66.782609-66.782609z" fill="#666666" p-id="1079"></path><path d="M756.869565 270.692174m-44.521739 0a44.521739 44.521739 0 1 0 89.043478 0 44.521739 44.521739 0 1 0-89.043478 0Z" fill="#666666" p-id="1080"></path><path d="M756.869565 326.121739a55.652174 55.652174 0 1 1 33.168696-99.283478 54.761739 54.761739 0 0 1 22.260869 36.730435 54.53913 54.53913 0 0 1-10.462608 41.182608 55.206957 55.206957 0 0 1-36.507826 22.26087 49.641739 49.641739 0 0 1-8.459131-0.890435z m0-89.043478h-4.897391a33.836522 33.836522 0 0 0-28.716522 38.288696 33.391304 33.391304 0 0 0 59.881739 15.137391 32.723478 32.723478 0 0 0 6.90087-24.709565 32.50087 32.50087 0 0 0-12.911304-22.26087 34.949565 34.949565 0 0 0-20.257392-6.455652z" fill="#666666" p-id="1081"></path><path d="M257.335652 270.692174m-44.521739 0a44.521739 44.521739 0 1 0 89.043478 0 44.521739 44.521739 0 1 0-89.043478 0Z" fill="#666666" p-id="1082"></path><path d="M257.335652 326.121739a55.652174 55.652174 0 1 1 55.652174-55.652174 55.652174 55.652174 0 0 1-55.652174 55.652174z m0-89.043478a33.391304 33.391304 0 1 0 33.391305 33.391304 33.391304 33.391304 0 0 0-33.391305-33.391304z" fill="#666666" p-id="1083"></path><path d="M512 572.549565a277.147826 277.147826 0 0 1-276.925217-276.925217 22.26087 22.26087 0 1 1 44.521739 0 232.403478 232.403478 0 0 0 464.806956 0 22.26087 22.26087 0 0 1 44.521739 0A277.147826 277.147826 0 0 1 512 572.549565z" fill="#666666" p-id="1084"></path></svg>
        <span class="btn-text">购物袋</span>
      </div>
      <div class="submit-btn">
        <span class="add-to-cart" @click="handleCart">加入购物车</span>
        <span class="add-to-checkout" @click="handleLogin">立即购买</span>
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
      isShow: false,
      // 控制洗护与保养显示隐藏
      isShow1: false,
      // 控制GATEONE显示隐藏
      isShow2: false,
      // 控制postSellUrls显示隐藏
      isShow3: false
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
    },
    handleCart () {
      this.$router.push('/shoppingcart')
    },
    handleLogin () {
      this.$router.push('/login')
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
      // 判断洗护与保养的数据是否为空，来进行显示隐藏洗护与保养模块
      if (this.detailList.description.maintenanceList.length === 0) {
        this.isShow1 = false
      } else {
        this.isShow1 = true
      }
      // 判断GATEONE的数据是否为空，来进行显示隐藏GATEONE模块
      if (this.detailList.brandImg === '') {
        this.isShow2 = false
      } else {
        this.isShow2 = true
      }
      // 判断postSellUrls的数据是否为空，来进行显示隐藏postSellUrls模块
      if (this.detailList.postSellUrl.length === 0) {
        this.isShow3 = false
      } else {
        this.isShow3 = true
      }
    })
  },
  beforeDestroy () {
    // 详情页销毁之前，显示列表页
    this.ProductHide()
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
    top: 3.1rem;
    padding: 0 1.533333rem 1.66666667rem;
    margin-bottom: 4rem;
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
          padding-left: 1.2rem;
          font-size: .5rem;
          span {
            float: left;
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
    .block-desc {
      position: relative;
      width: 100%;
      height: auto;
      border-bottom: .1rem solid #f5f5f5;
      h3 {
        padding: 1.5rem 0 1.4rem;
        color:#000;
        font-size: 1.3rem;
        text-align: left;
      }
      .span1 {
        position: absolute;
        right: 0;
        top: 2.6rem;
        color:#666;
        font-size: 1.1rem;
      }
      .block-info {
        width: 100%;
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
        .content {
          width: 100%;
          padding-bottom: .4rem;
          color: #000;
          text-align: left;
        }
        .pic {
          width: 100%;
          img {
            width: 100%;
            /* margin-bottom: .8rem; */
          }
        }
        .tip {
          font-size: .6rem;
          text-align: left;
          padding-bottom: 1rem;
        }
        .maintenance {
          font-size: .8rem;
          padding-bottom: 1rem;
          text-align: left;
        }
        .img1 {
          width: 100%;
          margin-bottom: 1.2rem;
        }
      }
    }
  }
  .car-bottom-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 3.5rem;
    z-index: 99;
    .left-area {
      display: flex;
      flex-direction: column;
      width: 20%;
      height: 100%;
      font-size: .9rem;
      border: .1rem solid #f5f5f5;
      svg {
        padding-left: 1.6rem;
        padding-top: .7rem;
        width: 1.5rem;
        height: 1.5rem;
      }
    }
    .submit-btn {
      width: 80%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      span {
        width: 50%;
        height: 100%;
        line-height: 3.5rem;
        text-align: center;
        font-size: 1.2rem;
        font-weight: bold;
        border: .1rem solid #f5f5f5;
      }
      .add-to-cart {
        color: #000;
      }
      .add-to-checkout {
        color: red;
      }
    }
  }
</style>
