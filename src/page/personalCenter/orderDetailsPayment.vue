<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        订单详情
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="orderDetails">
          <div class="timeEnd">
            <em></em> <p>请在<span id="btn">30:00</span>内付款，时间结束后订单将会取消</p>
          </div>
          <div class="orderDetTop">
            <div class="topTitle"><em class="paymentInco"></em><span>待付款</span></div>
            <div class="orderNum">
              <p>订单编号：<em>180729447854564787</em></p>
              <a href="javascript:void(0);" class="copy">复制</a>
            </div>
          </div>
          <div class="addressInfo">
            <em class="addreeIcon"></em>
            <div class="addreeText">
              <div class="textName">
                <em>李宗森</em>
                <span>13811203294</span>
              </div>
              <p>收货地址：北京市朝阳区百子湾路32号院北区3号楼B座505</p>
            </div>
          </div>
          <div class="commodity">
            <div class="commodityTitle">品牌商山东威海发货（包邮）</div>
            <div class="commodDetail">
              <div class="detailLeft"><img src="../../images/temporary/9.jpg"></div>
              <div class="detailRight">
                <div class="rightTop">
                  <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                  <span>￥<em>19</em>.90</span>
                </div>
                <div class="rightNum">X 1</div>
              </div>
            </div>
            <p><span>发货方式</span> <em>快递：0元（包邮)</em></p>
            <p><span>订单总计</span> <em>￥19.9</em></p>
            <p><span>会员减免</span> <em>￥0.09</em></p>
            <p><span>待付金额</span> <em class="priceNum">￥19.9</em></p>
          </div>
          <a href="#" class="contactService">联系客服</a>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
  import $ from 'jquery'
    export default {
        name: "orderDetailsPayment",
      mounted:function () {
        var x = 30
          var d = new Date("1111/1/1,0:" + x + ":0");
        let interval = setInterval(function() {
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
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
