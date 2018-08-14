<template>
    <div>
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        交易详情
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="tradeMain">
          <div class="tradeTop">
            <img src="../../images/threeLevel/pitchIcon.png" class="trTLeft">
            <div class="trTRight">
              <h3>付款成功</h3>
              <p>努力配货中</p>
            </div>
          </div>
          <ul class="tradeOrder">
            <li><span>订单编号：</span><em>37685645852567</em></li>
            <li><span>交易时间：</span><em>2018-07-19 22:08:09</em></li>
            <li><span>支付方式：</span><em>微信支付</em></li>
            <li><span>支付金额：</span><em class="price">￥19.0</em></li>
          </ul>
          <div class="tradeOperation">
            <a href="#">查看订单</a>
            <a href="#">回首页</a>
          </div>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "tradeSuccessful"
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/threeLevel.css";
</style>
