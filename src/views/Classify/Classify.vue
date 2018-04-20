<template>
  <div>
    <div class="header">
      <div class="sort on">
        <router-link to="/classify/sort" replace>分类</router-link>
      </div>
      <div class="brand">
        <router-link to="/classify/brand" replace>品牌</router-link>
      </div>
      <img src="./images/search.png" alt="">
    </div>
    <keep-alive>
      <router-view :lists="lists"></router-view>
    </keep-alive>
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
computed:{
  ...mapState(['lists'])
},
mounted(){
  this.$store.dispatch('getSortList')
}
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.header
  background #fff
  width 100%
  padding 0 15px
  box-sizing border-box
  border-bottom 1px solid #cbcbcb
  position fixed
  left 0
  right 0
  top 0
  height 40px
  z-index 99
  background #fff
  font-size 13px
  >div
   float left
   width 20%
   height 40px
   line-height 40px
   &.sort
    margin-left 120px
   a
    font-weight 700
    padding 10px 5px
    &.router-link-active
      color #ed4044
      border-bottom 2px solid #ed4044
  img
   width 14px
   height 14px
   float right
   margin 13px 5px 10px 8px
.content
  margin-top 40px
</style>


