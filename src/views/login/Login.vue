<template>
  <div class="login-mobile">
    <div class="login">
      <div class="x" @click="handleBack">X</div>
      <div class="login-form">
        <h1>
          登录/注册
          <span>注册即送2600元新人红包</span>
        </h1>
        <div class="input-box">
          <div class="input-item">
            <label v-show="isShow">手机号</label>
            <input type="text" placeholder="手机号" v-model="text">
            <span v-show="isShow" @click="handleText">X</span>
          </div>
        </div>
        <div class="action" >
          <div :class="isActive ? 'active' : 'default' ">
            <span>
             <svg t="1615118039204" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3030" width="200" height="200"><path d="M904.533333 522.666667c2.133333-4.266667 2.133333-6.4 2.133334-10.666667s0-8.533333-2.133334-10.666667c-2.133333-4.266667-4.266667-6.4-6.4-8.533333l-341.333333-362.666667c-12.8-12.8-32-12.8-44.8-2.133333-12.8 12.8-12.8 32-2.133333 44.8l290.133333 309.333333H149.333333c-17.066667 0-32 14.933333-32 32s14.933333 32 32 32h650.666667L509.866667 853.333333c-12.8 12.8-10.666667 34.133333 2.133333 44.8 6.4 6.4 14.933333 8.533333 21.333333 8.533334 8.533333 0 17.066667-4.266667 23.466667-10.666667l341.333333-362.666667c2.133333-2.133333 4.266667-6.4 6.4-10.666666z" p-id="3031" fill="#e6e6e6"></path></svg>
            </span>
          </div>
        </div>
        <div class="login-switch">
          <div>切换密码登录</div>
        </div>
      </div>
      <div class="login-joint">
        <div>
          <img src="@/assets/login.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      // input输入框的内容
      text: '',
      // 控制显示隐藏
      show: false,
      // 控制class来控制样式
      isClass: false
    }
  },
  computed: {
    isShow () {
      // 如果text为空，就隐藏
      if (this.text === '') {
        return this.show
      } else {
        return !this.show
      }
    },
    isActive () {
      // 如果text的长度等于11就显示不同样式
      if (this.text.length === 11) {
        return !this.isClass
      } else {
        return this.isClass
      }
    }
  },
  methods: {
    // 解构 vuex里的控制tabbar的公共状态和方法
    ...mapMutations('TabbarModule', ['Show', 'Hide']),
    handleBack () {
      // 点击退回上一个路由
      this.$router.back()
    },
    handleText () {
      // 点击清空输入框的内容
      this.text = ''
    }
  },
  mounted () {
    // 进入登录页面，隐藏顶部tabbar
    this.Show()
  }
}
</script>
<style lang="scss" scoped>
  .login-mobile {
    width: 100%;
    height: auto;
    .login {
      position: relative;
      width: 100%;
      .x {
        position: absolute;
        right: 1rem;
        top: 1.5rem;
        font-size: 2.5rem;
      }
      .login-form {
        padding-top: 6rem;
        width: 100%;
        h1 {
          padding: 0 0 3.1rem 2.4rem;
          color: #666;
          width: 100%;
          text-align: left;
          position: relative;
          span {
            position: absolute;
            top: 1.9rem;
            left: 2.4rem;
            font-size: 1rem;
            color: #666;
          }
        }
        .input-box {
          padding-top: 1.5rem;
          margin: 0 2.4rem 1rem;
          .input-item {
            position: relative;
            width: 100%;
            height: 4rem;
            border: .2rem solid #eee3e3;
            label {
              position: absolute;
              top: 0;
              left: 1.2rem;
              font-size: .8rem;
            }
            input {
              margin: 0 1rem 0;
              width: 90%;
              height: 2rem;
              border: 0;
              padding: 1rem 0 1rem;
              outline: none;
            }
            span {
              background-color:#eee3e3;
              position: absolute;
              top: 1rem;
              right: 1rem;
            }
          }
        }
        .action {
          width: 100%;
          height: 4rem;
          padding-bottom: 1.3rem;
          div {
            margin: 0 2.4rem 0;
            height: 100%;
            line-height: 4rem;
            .icon {
              width: 1.5rem;
              height: 1.5rem;
            }
          }
          .default {
            background-color: #ccc;
          }
          .active {
            background-color: #000;
          }
        }
        .login-switch {
          width: 100%;
          div {
            margin: 0 2.4rem 0;
            text-align: left;
          }
        }
      }
      .login-joint {
        padding-top: 2rem;
      }
    }
  }
</style>
