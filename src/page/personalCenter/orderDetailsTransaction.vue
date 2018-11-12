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
          <div class="orderDetTop">
            <div class="topTitle"><em class="transactionIcon"></em><span>交易成功</span></div>
            <div class="orderNum">
              <p>订单编号：<em>180729447854564787</em></p>
              <a href="javascript:void(0);" class="copy">复制</a>
            </div>
            <div class="orderNum">
              <p>付款时间：<em>2018-0719 23:23:09</em></p>
            </div>
          </div>
          <div class="expressMain">
            <!-- <a href="#">
                <div class="expressMainLeft">
                    <em></em>
                    <p>快件已签收</p>
                    <span>2018-07-23 22:08:23</span>
                </div>
                <div class="expressMainRight"></div>
            </a> -->
            <div class="expressInfoIng">
              <span>韵达快运</span>　
              <em>3987666827779</em>
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
            <p><span>实付金额</span> <em class="priceNum">￥19.9</em></p>
            <p><span>付款方式</span> <em>微信支付</em></p>
          </div>
          <a href="#" class="contactService">联系客服</a>
        </div>
      </main>
    </div>
</template>

<script>
    export default {
        name: "orderDetailsTransaction",

    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
