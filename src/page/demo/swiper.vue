<template>
    <div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" style="height: 500px; background-color: red">Slide 1</div>
          <div class="swiper-slide" style="height: 800px; background-color: grey">Slide 2</div>
          <div class="swiper-slide" style="height: 1200px; background-color: green">Slide 3</div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>

        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>

        <!-- 如果需要滚动条 -->
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper'
    export default {
        name: "swiper",
      components:{
          Swiper
      },
      mounted:function () {
        var mySwiper = new Swiper ('.swiper-container', {
          direction: 'vertical',
          autoHeight:true
        })
      }
    }
</script>


