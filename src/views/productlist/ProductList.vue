<template>
  <div>
    <div class="topMenuBar">
      <div class="topbar">
        <div class="back" @click="hangleBack">
          <svg t="1614918495514" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2896" width="200" height="200"><path d="M874.666667 480H224L514.133333 170.666667c12.8-12.8 10.666667-34.133333-2.133333-44.8s-32-10.666667-44.8 2.133333l-341.333333 362.666667c-2.133333 2.133333-4.266667 6.4-6.4 8.533333-2.133333 4.266667-2.133333 6.4-2.133334 10.666667s0 8.533333 2.133334 10.666666c2.133333 4.266667 4.266667 6.4 6.4 8.533334l341.333333 362.666666c6.4 6.4 14.933333 10.666667 23.466667 10.666667 8.533333 0 14.933333-2.133333 21.333333-8.533333 12.8-12.8 12.8-32 2.133333-44.8L224 544H874.666667c17.066667 0 32-14.933333 32-32s-14.933333-32-32-32z" p-id="2897"></path></svg>
        </div>
        <div class="title">
        {{list.eventName}}
        </div>
        <div class="right">
          <svg t="1614918541854" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2670" width="200" height="200"><path d="M298.666667 586.666667a74.666667 74.666667 0 1 1 0-149.333334 74.666667 74.666667 0 0 1 0 149.333334z m213.333333 0a74.666667 74.666667 0 1 1 0-149.333334 74.666667 74.666667 0 0 1 0 149.333334z m213.333333 0a74.666667 74.666667 0 1 1 0-149.333334 74.666667 74.666667 0 0 1 0 149.333334z" p-id="2671"></path></svg>
        </div>
      </div>
      <div class="menu">
        <ul>
          <li @click="handleClick1" :class="isActive === 'active1' ? 'active' : '' ">人气</li>
          <li @click="handleClick2" :class="isActive === 'active2' ? 'active' : '' ">折扣</li>
          <li @click="handleClick3" :class="isActive === 'active3' ? 'active' : '' ">价格</li>
          <li>筛选</li>
        </ul>
      </div>
    </div>
    <div>
      <div class="pitem">
        <div class="product-item" v-for="itme in list.products" :key="itme.productId">
          <div class="pic">
            <img :src="itme.imageUrl" alt="">
          </div>
          <div class="product">
            <div class="product-icon">当季新品</div>
            <div class="product-info">
              <span>{{itme.brandName}} </span>
              <span id="span1">{{itme.productName}}</span>
            </div>
            <div class="product-price-box">
              <span id="price">￥{{itme.price}}</span>
              <del id="marketPrice">￥{{itme.marketPrice}}</del>
              <span id="discount">{{itme.discount}}折</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapActions, mapState } from 'vuex'
export default {
  data () {
    return {
      id: '',
      sort1: '',
      sort2: 'ASC',
      sort3: 'DESC',
      isActive: 'active1'
    }
  },
  computed: {
    ...mapState('ProductListModule', ['list'])
  },
  mounted () {
    this.id = this.$route.params.categoryId
    // 进入产品列表页面，异步请求数据
    this.getList([this.id, ''])
    // 进入产品列表页面，隐藏顶部tabbar
    this.Show()
  },
  methods: {
    // 解构 vuex里的控制tabbar的公共状态和方法
    ...mapMutations('TabbarModule', ['Show', 'Hide']),
    // 解构清除list的方法
    ...mapMutations('ProductListModule', ['clearList']),
    // 解构异步请求数据的方法
    ...mapActions('ProductListModule', ['getList']),
    hangleBack () {
      // 点击返回按钮，退回上一个路由页面
      this.$router.back()
      // 离开产品列表页面，就显示选项卡
      this.Hide()
      // 离开产品列表页面，就将list数据清空
      this.clearList()
    },
    handleClick1 () {
      // 点击请求数据
      this.getList([this.id, this.sort1])
      this.isActive = 'active1'
    },
    handleClick2 () {
      // 点击请求数据
      this.getList([this.id, this.sort2])
      this.isActive = 'active2'
    },
    handleClick3 () {
      // 点击请求数据
      this.getList([this.id, this.sort3])
      this.isActive = 'active3'
    }
  },
  beforeDestroy () {
    // 页面销毁之前，将顶部选项栏显示出来
    this.Hide()
  }
}
</script>
<style lang="scss" scoped>
  .topbar {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 3.1rem;
    .back {
      width: 3.8rem;
      height: 2.6rem;
      padding-top: .5rem;
    }
    .title {
      font-weight: bold;
      font-size: 1.2rem;
      width: 18.6rem;
      height: 2.6rem;
      padding-top: .5rem;
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
  .menu {
    width: 100%;
    height: 3.1rem;
    ul {
      display: flex;
      justify-content: flex-start;
      li {
        padding-top: .7rem;
        width: 6.8rem;
        height: 3.1rem;
      }
      .active {
        color: red;
        font-weight: bold;
      }
    }
  }
  .pitem .product-item:nth-child(odd) {
    padding-right: 1rem;
  }
  .pitem {
    overflow: hidden;
    margin: 1rem 1rem 0;
    width: 24rem;
    .product-item {
      float: left;
      width: 11.5rem;
      height: 21rem;
      margin: 0 0 1rem 0;
      .pic {
        width: 100%;
        img {
          width: 100%;
        }
      }
      .product {
        width: 100%;
        height: 4.75rem;
        display: flex;
        align-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        .product-icon {
          font-size: .9rem;
          color: #fff;
          background-color: red;
        }
        .product-info {
          width: 100%;
          display: flex;
          align-content: flex-start;
          align-items: flex-start;
          flex-direction: column;
          #span1 {
            font-size: .8rem;
            width: 100%;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
          }
        }
        .product-price-box {
          width: 100%;
          #price {
            font-size: .8rem;
            font-weight: bold;
            float: left;
            color: red;
            padding-right: 1rem;
          }
          #marketPrice {
            float: left;
            font-size: .6rem;
          }
          #discount {
            padding-right: 1rem;
            font-size: .8rem;
            float: right;
            color: #666;
          }
        }
      }
    }
  }
</style>
