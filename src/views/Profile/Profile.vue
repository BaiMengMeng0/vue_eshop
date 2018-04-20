<template>
  <div class="profile">
    <div class="top">
      <div class="header">
        <i class="iconfont icon-jiantou4" @click="$router.back()"></i>
        <a href="javascript:;">注册</a>
      </div>
      <div class="login-method">
        <span class="pwd-login login-item" @click="switchShow(false)">普通登录
          <span class="triangle"></span>
        </span>
        <span class="msg-login login-item" @click="switchShow(true)">手机动态密码登录
          <span class="triangle" ></span>
        </span>
      </div>
    </div>
    <div class="bottom">
      <div class="input-form">
        <!--用户密码登录-->
        <form action="#" v-if="loginShow">
          <div class="input-wrap">
            <i class="iconfont icon-yidiandiantubiao08"></i>
            <input type="text" placeholder="手机号/邮箱/用户名" v-model="name">
          </div>
          <div class="input-wrap">
            <i class="iconfont icon-suo"></i>
            <input type="password" placeholder="输入密码" v-model="pwd">
          </div>
          <p class="forget-pwd">忘记密码？</p>
          <button class="login-btn">登录</button>
        </form>

        <!--手机号码登录-->
        <form action="#" v-else>
          <div class="input-wrap">
            <i class="iconfont icon-Phone"></i>
            <input type="text" placeholder="已注册的手机号" maxlength="11" v-model="phone">
          </div>
          <div class="input-wrap img-code">
            <i class="iconfont icon-suo"></i>
            <input type="text" placeholder="请输入图片验证码" v-model="imageContent">
            <span class="gain-img">
              <img src="http://localhost:3000/captcha" @click="updateCaptcha" alt="">
            </span>
          </div>
          <div class="input-wrap phone-code">
            <i class="iconfont icon-suo"></i>
            <input type="text" placeholder="动态密码"  v-model="captcha">
            <span class="gain-pwd" @click="getCode" v-if="!computeTime">获取动态密码</span>
            <span class="gain-pwd" v-if="computeTime">还剩{{computeTime}}s</span>
          </div>
          <p class="forget-pwd">忘记密码？</p>
          <button class="login-btn" @click="login">登录</button>
        </form>
      </div>
    </div>
    <div class="footer">
      <p>合作网站登录</p>
      <ul>
        <li><a href="#"><img src="./login_ico2.png"></a></li>
        <li><a href="#"><img src="./login_ico4.png"></a></li>
      </ul>
    </div>
    <AlertTip v-if="alertShow" :alertText="alertText" @closeTip="closeTip"/>
  </div>
</template>

<script>
  import AlertTip from '../../components/AlertTip/AlertTip.vue'
  import {nameLogin,reqSmsLogin,reqSendCode} from '../../api/index'
  export default {
    data(){
      return {
        loginShow:true,
        name:'',
        pwd:'',
        imageContent:'',
        computeTime:0,
        phone:'',
        captcha:'',
        alertText: '',
        alertShow:false
      }
    },
    computed:{
      rightPhone(){
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      updateCaptcha (event) {
        event.target.src='http://localhost:3000/captcha?time='+Date.now()
      },
      switchShow(loginShow){
        this.loginShow=!loginShow
      },
      async getCode(){
        if(this.rightPhone){
          this.computeTime=60
          const intervalId=setInterval(()=>{
            this.computeTime--
            if(this.computeTime===0){
              clearInterval(intervalId)
            }
          },1000)
        }
        // 发ajax请求, 向手机号发验证码
        const result = await reqSendCode(this.phone)
        if (result.code === 1) {
          clearInterval(intervalId)
          // 显示提示框
          this.alertShow = true
          this.alertText = result.msg
        }
      },
      closeTip () {
        this.alertShow = false
      },
      async login () {
        let result
        if(this.loginWay) { // 短信登陆
          const {name, pwd} = this
          if(!name) { // 用户名
            this.alertShow = true
            this.alertText = '请输入用户名'
            return
          } else if(!pwd) { // 密码
            this.alertShow = true
            this.alertText = '请输入密码'
            return
          }
          result = await nameLogin({name, pwd})
        }else{
          const {rightPhone, phone,captcha} = this
          if(!rightPhone) { // 手机号
            this.alertShow = true
            this.alertText = '请输入正确的手机号'
            return
          } else if(!captcha) { // 验证码
            this.alertShow = true
            this.alertText = '请输入正确的验证码'
            return
          }
          result = await reqSmsLogin({phone,code:captcha})
        }
        if(result.code===0) {
          // 得到用户信息
          const userInfo = result.data
          // 保存到state中去
          this.$store.dispatch('recordUserInfo', userInfo)
          // 回退
          this.$router.back()
        } else {
          this.alertShow = true

          this.alertText = result.msg
        }
      },
    },
    components:{
      AlertTip
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .profile
    .top
      background-image url("bg-login.png")
      background-size 100%
      .header
        display flex
        justify-content space-between
        padding 20px 10px 0
        color #fff
        .iconfont
          font-size 20px
        >a
          color #fff
      .login-method
        margin-top 100px
        font-size 0
        .login-item
          display inline-block
          position relative
          padding 15px 0
          width 50%
          font-size 16px
          text-align center
          color #fff
          background rgba(255,255,255,.2)
          .triangle
            display none
            width 20px
            height 20px
            background #fff
            position absolute
            bottom 0
            left 0
            right 0
            margin auto
            transform rotate(45deg) translate(50%, 50%)
            &.active
              display block
    .bottom
      padding 0 15px
      background #fff
      .input-form
        >form
          .input-wrap
            border-bottom 1px solid #e2e2e2
            height 45px
            position relative
            > input
              outline none
              line-height 45px
              width 80%
              &::placeholder
                color #e2e2e2
            .iconfont
              color #e2e2e2
              font-size 18px
            &.img-code
              >input
                width 70%
              .gain-img
                position absolute
                right 0
                top 0
                bottom 0
                height 70%
                margin auto
                width 24%
                img
                 width 85px
                 height 36px
            &.phone-code
              >input
                width 70%
              .gain-pwd
                position absolute
                right 0
                top 0
                bottom 0
                height 65%
                margin auto
                width 24%
                font-size 12px
                border 1px solid red
                color red
                line-height 2.5
                text-align center
                border-radius 5px
                padding 0 3px

          .forget-pwd
            font-size 14px
            color #898989
            margin 10px
            text-align right
          .login-btn
            width 100%
            padding 10px 0
            background #2ec975
            color #fff
            font-size 16px
            border-radius 5px
            outline none
            border-style none
            letter-spacing 10px

    .footer
      width 100%
      margin-top 100px
      p
        margin-left 130px
        font-size 18px
        color #7e8c8d
      ul
       margin-top 15px
       display flex
       li
        img
         width 58px
         height 58px
         margin 0 25px
</style>
