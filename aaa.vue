<template>
  <div>
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
        <ul>
          <li>
            <a href="#">
              <img src="https://img1.epetbar.com/2017-01/17/18/7dd229ee03e407cdeb9a72f502c68a6c.jpg?x-oss-process=style/fill&amp;$1=300&amp;$2=300" alt="">
              <span>￥57.00</span>
              <p>省38.00</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://img1.epetbar.com/2016-12/06/18/80f8935097460206ef9944dc11522efd.jpg?x-oss-process=style/fill&amp;$1=300&amp;$2=300" alt="">
              <span>￥6.00</span>
              <p>省54.00</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://img1.epetbar.com/2018-04/08/10/8c89f6e6fddd3faf74cf87f31e549f4e.jpg?x-oss-process=style/fill&amp;$1=300&amp;$2=300" alt="">
              <span>￥3.99</span>
              <p>省35.91</p>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://img1.epetbar.com/2017-02/27/12/3f19de6996249a353a355b8210b29020.jpg?x-oss-process=style/fill&amp;$1=300&amp;$2=300" alt="">
              <span>￥9.60</span>
              <p>省6.40</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="stylus" rel="stylesheet/stylus">
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
        display flex
        justify-content space-between
        li
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

</style>


