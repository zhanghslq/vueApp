<template>
    <swiper>
      <swiper-slide :options="swiperOption" ref="mySwiper">
        <div style="height: 800px ;width: auto;background-color: green"></div>
        <div style="height: 800px ;width: auto;background-color: red"></div>
        <div style="height: 800px ;width: auto;background-color: gray"></div>
        <div style="height: 800px ;width: auto;background-color: green"></div>
        <div style="height: 800px ;width: auto;background-color: black"></div>
        <div style="height: 800px ;width: auto;background-color: blue"></div>
        <div style="height: 800px ;width: auto;background-color: palevioletred"></div>
        <div style="height: 800px ;width: auto;background-color: green"></div>
        <div style="height: 800px ;width: auto;background-color: palegreen"></div>
      </swiper-slide>
    </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        name: "demoSwiper",
      data() {
        return {
          swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
            // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
            notNextTick: true,
            // swiper configs 所有的配置同swiper官方api配置
            autoplay: 3000,
            direction : 'vertical',
            grabCursor : true,
            setWrapperSize :true,
            autoHeight: true,
            paginationClickable :true,
            mousewheelControl : true,
            observeParents:true,
            freeMode:true,
            slidesPerView: 'auto',

            // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
            debugger: true,
          }
        }
      },
      components:{
        swiper,
        swiperSlide
      },
      methods:{

      },
      mounted:function () {

      }

    }
</script>

<style scoped>

</style>
