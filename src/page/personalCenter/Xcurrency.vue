<template>
<div>
  <!--头部 开始-->
  <header>
    <a href="javascript:history.go(-1);" class="returnBtn"></a>
    猩际X币
    <a href="#" class="releaseBtn">明细</a>
  </header>
  <!--头部 结束-->
  <!--中间 开始-->
  <main>
    <div class="currencyMain">
      <div class="currencyMainTop">
        <h3>我的X币总额</h3>
        <div class="money">0.00</div>
        <div class="operation"><a href="#">兑换X币</a><a href="#">发红包</a></div>
        <div class="explain">
          <div class="explainInfo"><i class="yel"></i><span>A兑换&平台发放</span><em>0.00</em></div>
          <div class="explainInfo"><i class="rd"></i><span>B红包收入&小程序发放</span><em>0.00</em></div>
          <div class="explainInfo"><p>*B类收入只能用于消费</p></div>
        </div>
      </div>
      <div class="currencyMainBottom">
        <p>1X币相当于1元人民币 | <a href="#">说明</a></p>
      </div>
    </div>
  </main>
</div>
</template>

<script>
export default {
    name: "Xcurrency"
}
</script>

<style scoped>
@import "../../css/other/personalCenter.css";
</style>
