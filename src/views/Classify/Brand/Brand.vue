<template>
  <div class="brand-wrap" v-if="brands.brand">
    <div class="cBrand" v-for="(items,index) in brands.brand" :key="index">
      <div class="title"> ----{{items.title}}---- </div>
      <div class="wrap">
        <ul class="brand-img">
          <li v-for="(imgs,index) in items.list" :key="index">
            <img :src="imgs.logo">
            <div class="name">{{imgs.name}}</div>
            <div class="address">{{imgs.address}}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="all_brands" @click="$router.push('/detail')">
      全部
    </div>
  </div>

</template>

<script>
import {mapState} from 'vuex'
export default {
  mounted(){
    this.$store.dispatch('getBrandList')
    },
    computed:{
      ...mapState(["brands"])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .brand-wrap
    padding-top 40px
    height 100%
    display flex
    flex-direction column
    .cBrand
      margin-top 10px
      .title
        font-size 13px
        color #999
        line-height 40px
        height 40px
        text-align center
      .brand-img
        padding 5px 0 5px 15px
        display flex
        flex-flow row wrap
        div
          text-align center
          padding 3px
          &.name
            width 102px
            font-size 13px
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
          &.address
            font-size 12px
            color #999
            margin-bottom 15px
        li
          img
            width 80px
            border 1px #dbd8db solid
            padding 10px
            margin 0 6px

    .all_brands
      width: 40px;
      height: 40px;
      right: 6px;
      bottom: 65px;
      position: fixed;
      z-index: 10;
      background: rgba(0,0,0,.4);
      line-height: 40px;
      border-radius: 50%;
      font-size 14px
      text-align center
      color #fff
</style>
