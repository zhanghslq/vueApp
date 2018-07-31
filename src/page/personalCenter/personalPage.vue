<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <div class="message"><span></span><em>5</em></div>
        <a href="#" class="setUpIcon"></a>
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="personalMain">
          <div class="personalBg"></div>
          <div class="accountName">
            <a href="#">
              <div class="headPortrait">
                <span></span>
                <div class="heading"><img src="../../images/temporary/7.jpg"></div>
              </div>
              <p>李宗森</p>
              <em>猩际会员</em>
            </a>
          </div>
          <div class="orderSituation">
            <a href="#" class="orderTitle">
              <span class="titleLeft">我的订单</span>
              <div class="titleRight">
                <span>全部订单</span>
                <em></em>
              </div>
            </a>
            <div class="orderOperation">
              <a href="#">
                <em class="pendingPayment"></em>
                <span>待付款</span>
              </a>
              <a href="#">
                <em class="PendingDelivery"></em>
                <span>待发货</span>
              </a>
              <a href="#">
                <em class="goodsReceived"></em>
                <span>待收货</span>
              </a>
              <a href="#">
                <em class="succeTrade"></em>
                <span>交易成功</span>
              </a>
              <a href="#">
                <em class="returnGoods"></em>
                <span>退货/退款</span>
              </a>
            </div>
          </div>
          <div class="personalInfo">
            <a href="#">
              <span class="infoLeft">我是店主</span>
              <div class="infoRight">
                <em></em>
              </div>
            </a>
            <a href="#">
              <span class="infoLeft">猩际X币</span>
              <div class="infoRight">
                <em></em>
              </div>
            </a>
            <a href="#">
              <span class="infoLeft">优惠券</span>
              <div class="infoRight">
                <span>10张</span>
                <em></em>
              </div>
            </a>
            <a href="#">
              <span class="infoLeft">我的收藏</span>
              <div class="infoRight">
                <em></em>
              </div>
            </a>
            <a href="#">
              <span class="infoLeft">会员中心</span>
              <div class="infoRight">
                <em></em>
              </div>
            </a>
          </div>
          <div class="personalInfo">
            <a href="#">
              <span class="infoLeft">帮助与客服</span>
              <div class="infoRight">
                <em></em>
              </div>
            </a>
            <a href="#">
              <span class="infoLeft">给我评分</span>
              <div class="infoRight">
                <em></em>
              </div>
            </a>
          </div>
        </div>
      </main>
      <!--中间 结束-->
      <!--底部 开始-->
      <footer class="memberFooter">
        <a href="index.html"><i class="homePage"></i><span>首页</span></a>
        <a href="#"><i class="find"></i><span>发现</span></a>
        <a href="#"><i class="shopp"></i><span>购物袋</span></a>
        <a href="#"  class="active"><i class="personal"></i><span>个人中心</span></a>
        <a href="#"><i class="shopkeeper"></i><span>我是店主</span></a>
      </footer>
      <!--底部 结束-->
    </div>
</template>

<script>
    export default {
        name: "personalPage"
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
