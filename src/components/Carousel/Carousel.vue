<template>
  <div class="content_carousel">
    <div class="swiper-container">
      <div class="swiper-wrapper" v-if="carousels.data">
        <div class="swiper-slide" v-for="(images,index) in carousels.data[1].value" :key="index">
          <img :src="images.image" alt="">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
<script>
  import Swiper from 'swiper'  // 引入swiper的js库
  import 'swiper/dist/css/swiper.min.css' // 引入swiper的样式文件
  import {mapState} from 'vuex'
  export default {
    mounted(){

    },
    computed:{
      ...mapState(["carousels"])
    },
    watch:{
      carousels(value){
        this.$nextTick(()=>{
          new Swiper(".content_carousel>.swiper-container",{
            autoplay:true,
            loop:true,
            pagination: {
              el: '.swiper-pagination',
            }
          })
        })
      }
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    width 100%
    height: 160px
    img
      width:100%
      height:100%
    .swiper-pagination
      > span.swiper-pagination-bullet-active
        background #70a738
</style>


