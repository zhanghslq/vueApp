<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        退款进度
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="refurdMain">
          <img src="../../images/threeLevel/refundPic.png" class="refurdNoPic">
          <p>暂无退款订单</p>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "refundProgress"
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
