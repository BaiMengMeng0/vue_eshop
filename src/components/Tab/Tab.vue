<template>
  <div class="wrap">
    <ul class="nav">
      <li v-for="(item,index) in adLists.menus" :key="index">{{item.menu_name}}</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from "vuex"
  export default {
    mounted(){
      new BScroll('.wrap', {
        click: true,
        scrollX: true,
        scrollY: false
      })
    },
    computed:{
      ...mapState(["adLists"])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .nav
    margin-top 15px
    white-space nowrap
    float left
    overflow hidden
    color #666
    li
      display inline-block
      height 30px
      padding 0 10px
      .active
        color #459d36
</style>
