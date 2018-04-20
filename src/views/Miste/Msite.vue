<template>
  <div>
    <div class="head">
      <div class="close">
        <img src="./images/msite_5.jpg" alt="">
      </div>
      <div class="download">
        <img src="./images/shouye_29.jpg" alt="">
      </div>
      <div class="head_m">
        <div class="head_m_info">
          <span>猫猫</span>
          <span>|</span>
          <span>重庆</span>
          <img src="./images/jiantou.png" alt="">
        </div>
        <div class="head_search">
          <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
          <span class="icon_s">
             <i class=" iconfont icon-search"></i>
          </span>
        </div>
        <img src="./images/msite_8.jpg" alt="">
      </div>
      <Tab/>
    </div>
    <div class="content">
      <Carousel/>
      <!--品牌-->
      <div class="goods">
         <ul v-if="adLists.datas">
           <li v-for="(brand,index) in adLists.datas[1].menus" :key="index">
             <a href="#"><img :src="brand.image" alt=""></a>
           </li>
         </ul>
      </div>
      <!--新人专享-->
      <div class="icon_g">
        <img src="./images/sy_1.jpg" alt="">
      </div>
      <!--每日疯抢-->
      <div class="content_m">
        <div class="content_m_t">
          <div class="content_m_t_l">
            <img src="./images/msite_9.jpg" alt="">
          </div>
          <div class="content_m_t_r">
            <span>下一场开始</span>
            <span class="bor">20</span>
            <span>:</span>
            <span class="bor">00</span>
            <img src="../../components/Fashion/images/shouye_1.jpg" alt="">
          </div>
        </div>
        <div class="content_m_b">
          <ul v-if="carousels.data">
            <li v-for="(berserk,index) in carousels.data[3].goods" :key="index">
              <a href="#" v-if="berserk.image">
                <img :src="berserk.image.image" alt="">
                <span>￥{{berserk.sale_price}}</span>
                <p>{{berserk.little_price}}</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Split/>
      <div class="content_dec">
        <div class="content_dec_l" >
          <a href="#"><img src="https://img2.epetbar.com/nowater/2017-12/13/09/1ec9379f83eb421db9a09195c9594e29.jpg@!water"></a>
        </div>
        <div class="content_dec_r">
          <a href="#"><img src="https://img2.epetbar.com/nowater/2017-12/13/10/35bb7f3bd146cb9a9e74a935803f0d9a.jpg@!water" alt=""></a>
          <a href="#"><img src="https://img2.epetbar.com/nowater/2017-12/19/13/62a49af47aa7f713fc0ac0c9b9657e33.jpg@!water" alt=""></a>
        </div>
      </div>
      <Split/>
      <div class="content_tuan">
      <img src="https://img2.epetbar.com/nowater/2018-04/09/09/cb1638292b794ab005e83f38e6c2d7bf.jpg@!water" alt="">
      </div>
      <Split/>
      <Fashion/>
      <Video/>
      <div class="content_hobby">
        <ul>
          <li>
            <a href="#"><img src="https://img2.epetbar.com/nowater/2018-02/05/14/4c32811744e04f6b63632b42a0d5325d.jpg@!water" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="https://img2.epetbar.com/nowater/2018-02/05/14/4c32811744e04f6b63632b42a0d5325d.jpg@!water" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="https://img2.epetbar.com/nowater/2018-02/05/14/fa66a0c8437b6fb8137c58d9b6ccb1c6.jpg@!water" alt=""></a>
          </li>
          <li>
            <a href="#"><img src="https://img2.epetbar.com/nowater/2018-02/05/14/4c32811744e04f6b63632b42a0d5325d.jpg@!water" alt=""></a>
          </li>
        </ul>
      </div>
      <Split/>
      <Fashion/>
      <div class="content_picture">
        <ul>
          <a href="#">
            <li>
              <img src="./images/shouye_17.jpg" alt="">
            </li>
          </a>
          <Split/>
          <a href="#">
            <li>
              <img src="./images/shouye_17.jpg" alt="">
            </li>
          </a>
          <Split/>
          <a href="#">
            <li>
              <img src="./images/shouye_17.jpg" alt="">
            </li>
          </a>
          <Split/>
          <a href="#">
            <li>
              <img src="./images/shouye_17.jpg" alt="">
            </li>
          </a>
          <Split/>
          <a href="#">
            <li>
              <img src="./images/shouye_17.jpg" alt="">
            </li>
          </a>
          <Split/>
          <a href="#">
            <li>
              <img src="./images/shouye_17.jpg" alt="">
            </li>
          </a>
          <Split/>
        </ul>
      </div>
      <Fashion/>
      <Carousel/>
      <Fashion/>
      <Video/>
      <Fashion/>
      <Video/>
      <div class="content_thank">
        <img src="https://img2.epetbar.com/nowater/2017-12/13/11/be84f01e893b0e631d8512566eb79117.jpg@!water" alt="">
      </div>
      <div class="content_ft">
          <div class="content_ft_t">
            <span>触屏版</span>
            <span>手机客户端</span>
            <span>关于我们</span>
            <span>联系我们</span>
          </div>
          <div class="content_ft_b">
            © wap.epet.com 版权：重庆易宠科技有限公司
          </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import Split from '../../components/Split/Split.vue'
import Tab from '../../components/Tab/Tab.vue'
import Carousel from '../../components/Carousel/Carousel.vue'
import Fashion from '../../components/Fashion/Fashion.vue'
import Video from '../../components/Video/Video.vue'
import {mapState} from 'vuex'
export default {

   // 创建swiper对象, 实现轮播效果
  mounted(){
    this.$store.dispatch('getAdList')
    this.$store.dispatch('getCarousel')

    /*new BScroll('.content_m_b',{
      click:true,
      scrollX:true
    })*/
  },
  watch:{
    carousels(goods){
      this.$nextTick(()=>{
        new BScroll('.content_m_b',{
          click:true,
          scrollX:true
        })
      })
    }
  },
  computed:{
    ...mapState(["adLists","carousels"]),
  },

  components:{
    Split,
    Carousel,
    Fashion,
    Video,
    Tab
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .head
    width 100%
    position fixed
    top 0
    left 0
    z-index 999
    background #fff
    .close
      position absolute
      left 10px
      top 16px
      img
        width 18px
    .download
      width 100%
      img
        width 100%
        height 55px
    .head_m
      padding-top 12px
      display flex
      justify-content space-around
      .head_m_info
       span
         font-size 14px
         line-height 25px
         color #7e8c8d
       img
         width 15px
         height 10px
      .head_search
        background #e9e9e9
        height 25px
        border-radius 4px
        input
          background #e9e9e9
          color #bcbcbc
          text-indent 10px
          font-size 13px
          line-height 25px
          border-radius 4px
          outline 0
          width 200px
        .icon_s
          .iconfont
            font-size 13px
      img
        width: 25px;
        height 25px
    .head_b
      margin-top 10px
      ul
       float left
       width 200%
       li
        display inline-block
        margin 10px 7px 0 7px
        span
         color #666
        i
         display block
         width: 120%;
         height: 2px;
         margin-top 10px
         margin-left -3px
        &.on
         span
          color deeppink
         i
          background deeppink

  .content
    margin-top 142px
    overflow hidden
    margin-bottom 50px
    .goods
      ul
       width 100%
       height 180px
       display flex
       flex-flow row wrap
       li
        width: 20%;
        img
         width 75px
         height 90px
    .icon_g
     img
      width 100%
      height 120px
    .content_m
     margin-bottom 12px
     .content_m_t
       width 100%
       padding-top 9px
       padding-bottom 9px
       .content_m_t_l
         width 45%
         img
          width 85px
          height 19px
          margin-left 10px
       .content_m_t_r
         float right
         width 55%
         height 39px
         line-height 39px
         margin-top -30px
         vertical-align middle
         text-align center
         span
          font-size 13px
          font-weight 500
          &.bor
            display inline-block
            width 20px
            height 20px
            border 1px solid #7e8c8d
            line-height 22px
         img
          width 68px
          height 34px
          float right

     .content_m_b
       overflow hidden
       ul
        /*display flex*/
        width 200%
        li
         float left
         width 84px
         margin-right 15px
         margin-left 8px
         text-align center
         a
          img
           width 84px
           height 84px
           margin-bottom 9px
          span
           color red
          p
           margin-top 8px
           font-size 13px
           text-align center

    .content_dec
      display flex
      flex-direction row
      height 250px
      .content_dec_l
       img
        height 250px
      .content_dec_r
       display flex
       flex-direction column
       img
        width 100%
    .content_tuan
     img
      width 100%
      height 160px
    .content_hobby
     height 200px
     ul
      display flex
      flex-flow column wrap
      width 100%
      height 100%
      li
       width 50%
       height 50%
       img
        width 100%
        height 100%
    .content_picture
     ul
      li
       img
        width 100%
        height 160px
    .content_thank
     img
      width 100%
      height 30px
    .content_ft
     width 100%
     height 86px
     color #666
     .content_ft_t
      width 100%
      height 42px
      display flex
      font-size 14px
      margin 25px 52px -10px 52px
      span
       margin-left 10px
     .content_ft_b
      font-size 12px
      text-align center

</style>


