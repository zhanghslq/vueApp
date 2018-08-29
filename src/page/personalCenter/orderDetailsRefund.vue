<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        退款详情
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="orderDetails">
          <div class="orderDetTop refund">
            <div class="topTitle"><span>退款成功</span></div>
            <div class="orderNum">
              <p>2018-7019 23:23:09</p>
            </div>
          </div>
          <ul class="refundMoney">
            <li><span>退款总金额</span><em class="total">￥19.90</em></li>
            <li><span>退回余额</span><em>￥19.90</em></li>
          </ul>
          <div class="commodity">
            <div class="commodityTitle">退款信息</div>
            <div class="commodDetail">
              <div class="detailLeft"><img src="../../images/temporary/9.jpg"></div>
              <div class="detailRight">
                <div class="rightTop">
                  <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                </div>
              </div>
            </div>
            <p><span>退款原因</span> <em>拍错/不喜欢/效果差</em></p>
            <p><span>退款金额</span> <em>￥19.9</em></p>
            <p><span>申请件数</span> <em>1</em></p>
            <p><span>申请时间</span> <em>2018-7-23 23:24:55</em></p>
            <p><span>退款编号</span> <em>176381628792909808</em></p>
          </div>
          <div class="refundBtn">
            <a href="#"><em class="seller"></em><span>联系卖家</span></a>
            <a href="#"><em class="onLine"></em><span>在线客服</span></a>
          </div>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "orderDetailsRefund"
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
