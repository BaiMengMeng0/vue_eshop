<template>
  <div class="sort_content">
    <div class="sort_content-left" >
      <ul class="left-list">
        <li v-for="(item,index) in lists.categorys" :key="index"
            @click="getIndex(index)">{{item.name}}</li>
      </ul>
    </div>
    <div class="sort_content-right">
      <div v-if="lists.categorys">
        <div class="right-list-top" v-for="(name,index) in lists.categorys[leftIndex].cate_list" :key="index">
            <p class="right-title">{{name.title}}</p>
            <ul class="right-pic">
              <li v-for="(infos,index) in name.list" :key="index">
                <img :src="infos.photo||infos.logo" alt="">
                <p>{{infos.name}}</p>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
export default {
  data(){
    return{
      leftIndex:0
    }
  },
props:{
  lists:Object
},
methods:{
  getIndex(index){
      this.leftIndex = index
  }
},
  mounted(){
    this.$nextTick(() => {
      let scroll = new BScroll('.sort_content-left', {
        scrollY: true,
        click: true
      })
    })

  },
  watch:{
    leftIndex() {
      this.$nextTick(() => {
        new BScroll('.sort_content-right', {
          scrollY: true,
          click: true
        })
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.sort_content
  .sort_content-left
    position absolute
    background-color white
    top 40px
    bottom 0
    width 25%
    overflow hidden
    .left-list
      width 100%
      text-align center
      li
        height 50px
        font-size 13px
        line-height 50px
        border-bottom 1px solid #F3F4F5
        &.on
          background-color #F3F4F5
          color red
  .sort_content-right
    position absolute
    background-color white
    width 73%
    right 0
    top 40px
    bottom 0
    overflow hidden
    >div
      .right-list-top
        width 100%
        .right-title
          color #7e8c8d
          font-size 12px
          height 30px
          line-height 30px
          margin-top 10px
          margin-left 5px
        .right-pic
          width 100%
          display flex
          flex-wrap wrap
          >li
            width 33%
            text-align center
            >img
              width 80%
              border 1px solid #dbe9ea
            >p
              height 50px
              font-size 14px
              line-height 50px
</style>


