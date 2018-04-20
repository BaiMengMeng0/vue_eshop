<template>
  <div class="cart">
    <div class="cart_header">
      <span class="fanhui" @click="$router.back()"><i class="iconfont icon-jiantou4"></i></span>
      <span>购物车</span>
      <span class="quanbu"><i class="iconfont icon-quanbu" @click="switchHide"></i></span>
    </div>
    <transition name="fade">
      <div class="hidelist" v-if="hideList">
      <div class="hideitem" @click="$router.push('/msite')">
          <span class="hideicon">
            <i class="iconfont icon-shouye"></i>
          </span>
        <p class="hidetitle">首页</p>
      </div>
      <div class="hideitem" @click="$router.push('/classify')">
          <span class="hideicon">
            <i class="iconfont icon-search_list"></i>
          </span>
        <p class="hidetitle">商品分类</p>
      </div>
      <div class="hideitem" @click="$router.push('/shopCart')">
          <span class="hideicon" style="margin-left:15px ">
            <i class="iconfont icon-unie62d"></i>
            <span class="cartcount">0</span>
          </span>
        <p class="hidetitle">购物车</p>
      </div>
      <div class="hideitem" @click="$router.push('/profile')">
          <span class="hideicon">
            <i class="iconfont icon-wode"></i>
          </span>
        <p class="hidetitle">我的e宠</p>
      </div>
    </div>
    </transition>
    <div class="cartbottom">
      <div class="cartimage">
          <span class="cartlogo">
             <i class="iconfont icon-unie62d"></i>
          </span>
      </div>
      <p class="cartempty">购物车是空的</p>
      <div class="cartfooter">
        <span class="hanging" @click="$router.push('/msite')">去逛逛</span>
        <span class="collect">我的收藏</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        hideList:false,
      }
    },
    methods:{
      switchHide(){
        this.hideList=!this.hideList
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
.cart
  width 100%
  .cart_header
    display flex
    justify-content space-between
    width 100%
    height 50px
    line-height 50px
    border-bottom 1px solid #7e8c8d
    span
     font-size 20px
     color #333
     .iconfont
      font-size 22px
     &.fanhui
      margin-left 8px
     &.quanbu
      margin-right 8px

  .hidelist
    width 100%
    overflow hidden
    border-bottom 1px solid #d7d7d7
    line-height 50px
    height 87px
    &.fade-enter-active, &.fade-leave-active
      transition 1s all
    &.fade-enter, &.fade-leave-to
      height 0
    .hideitem
      float left
      width 25%
      text-align center
      .hideicon
        color #666
        text-align center
        line-height 22px
        .iconfont
          font-size 24px
        .cartcount
          display inline-block
          height 17px
          width 17px
          color #fff
          text-align center
          line-height 17px
          font-size 12px
          background #FF0000
          border-radius: 50%
          border #fff solid 2px
          position relative
          top -17px
          left -14px
      .hidetitle
        line-height 20px
        font-size 14px
  .cartbottom
    width 100%
    .cartimage
      text-align center
      padding 60px 0 30px 0
      .cartlogo
        .iconfont
          font-size 100px
          color #d7d7d7
    .cartempty
      font-size 16px
      color #dbdbdb
      text-align center
  .cartfooter
    padding 20px 0 40px 0
    text-align center
    >span
      display inline-block
      border-radius 5px
      border 1px solid #999
      height 40px
      line-height 40px
      width 100px
      color #999
</style>


