<template>
    <div class="shopkerSelBg">
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        店主精选
        <a href="#" class="shareBtn"></a>
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="shopkerSelMain">
          <div class="shopkerLabel">
            <div class="labelBg"></div>
            <div class="labelCont">
              <img src="../../images/temporary/7.jpg">
              <span>P**刚刚成为了猩际会员</span>
            </div>
          </div>
          <a href="#" class="oneOpenBtn">一键开通</a>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "shopkeSelection"
    }
</script>

<style scoped>
@import "../../css/plugins/swiper.min.css";
@import "../../css/common/common.css";
@import "../../css/other/fragmentary.css";
</style>
