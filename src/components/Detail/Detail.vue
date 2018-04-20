<template>
  <div class="brand_detail">
    <div class="cart_header">
      <span class="fanhui" @click="$router.back()"><i class="iconfont icon-jiantou4"></i></span>
      <span>全部品牌</span>
      <span class="quanbu"><i class="iconfont icon-quanbu" @click="switchHide"></i></span>
    </div>
    <mt-index-list class="chart">
      <mt-index-section :index="`${all.order}`" v-for="(all,index) in allbrand.brand" :key="index">
        <div class="allbrands">
          <div class="content">
            <div class="brand-item border-bottom-1px" v-for="(evebrand , index) in all.list">
              <a href="javascript:">
                <img alt="logo" :src="evebrand.logo"/>
                <span class="desc">
                <span class="name">{{evebrand.name}}</span><br>
                <span class="address">{{evebrand.address}}</span>
              </span>
              </a>
            </div>
          </div>
        </div>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
import Vue from 'vue'
import { IndexList, IndexSection } from 'mint-ui';
import { Cell } from 'mint-ui';
import {mapState} from 'vuex'
Vue.component(Cell.name, Cell);
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
export default {
  data(){
    return{
      hideList:false,
    }
  },
  mounted () {
    this.$store.dispatch('getAllBrand')
  },
  computed:{
    ...mapState(['allbrand'])
  },
  methods:{
    switchHide(){
      this.hideList=!this.hideList
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.brand_detail
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

 ::-webkit-scrollbar
    display none
 .allbrands
   width 100%
   background-color: rgba(0,0,0,.1)
   .content
     height 100%
     width 100%
     .title
       width 100%
       height 24px
       line-height 24px
       font-size 12px
     .brand-item
       width 100%
       height 70px
       background #fff
       border-bottom 1px solid #eee
       box-sizing border-box
       padding 10px 10px
       >a
         display block
         width 100%
         height 100%
         font-size 0
         >img
           height 100%
           width 88px
           border 1px solid #eeeeee
           padding 5px
           box-sizing border-box
           vertical-align top
         .desc
           display: inline-flex;
           flex-direction: column;
           justify-content: center;
           height 100%
           font-size 14px
           margin-left 20px
           .name
             color #000
           .address
             font-size 12px
</style>


