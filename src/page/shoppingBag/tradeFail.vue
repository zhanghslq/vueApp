<template>
    <div>
      <!--头部 开始-->
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
              <h3>付款失败</h3>
              <p>请在<span id="btn">30:00</span>内完成付款</p>
            </div>
          </div>
          <div class="amountMoney">
            <p>应付金额：<em>￥8.91</em></p>
            <span>订单总计：<em>￥9.00</em></span>
            <span>会员减免：<em>￥0.09</em></span>
          </div>
          <div class="paymentMain">
            <div class="payTitle">选择支付方式</div>
            <div class="payCont">
              <div class="payLeft"><span></span> <em>支付宝支付</em></div>
              <div class="payRight"></div>
            </div>
          </div>
          <a href="#" class="paymentBtn">去付款</a>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "tradeFail",
      mounted:function () {
        var x = 30,
        interval;
        window.onload = function() {
          var d = new Date("1111/1/1,0:" + x + ":0");
          interval = setInterval(function() {
            var m = d.getMinutes();
            var s = d.getSeconds();
            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;
            btn.innerHTML = m + ":" + s;
            if (m == 0 && s == 0) {
              clearInterval(interval);
              return;
            }
            d.setSeconds(s - 1);
          }, 1000);
        }
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/threeLevel.css";
</style>
