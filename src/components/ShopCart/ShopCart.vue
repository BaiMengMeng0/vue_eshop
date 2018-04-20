<template>
  <div class="cart">
    <div class="cart_header">
      <span><i class="fanhui icon-jiantou4"></i></span>
      <span class="title">购物车</span>
      <span><i class="alls icon-quanbu"></i></span>
    </div>
  </div>
</template>

<script>
  export default {
    /*data(){
      return{
        title:'购物车',
        isShow:false,
      }
    },
    methods:{
      switchHide(){
        this.isShow=!this.isShow
      }
    }*/

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cart
   width 100%
   .cart_header
    display flex
    width 100%
    height 50px
    border-bottom 1px solid #f3f3f3
    span
      font-size 18px
      line-height 50px
      color #333
     .fanhui
      display block
      width 20px
      height 22px
     .alls
      display block
      width 20px
      height 20px

</style>



