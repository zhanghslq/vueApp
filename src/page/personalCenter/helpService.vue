<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        帮助与客服
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="helpService">
          <div class="helpTop">
            <a href="#"><em class="automatic"></em>自动退款</a>
            <a href="#"><em class="progress"></em>退款进度</a>
            <router-link to="opinionFeedback">
              <em class="feedback"></em>问题反馈
            </router-link>

          </div>
          <div class="helpMiddle">
            <div class="middleInfo">
              <a href="#" class="middleLeft">
                <em class="place"></em>
                <span>购物下单</span>
              </a>
              <div class="middleRight">
                <router-link to="questionAnswer">
                  多笔订单能否一起发货
                </router-link>

                <a href="#">为什么要提供身份信息</a>
              </div>
            </div>
            <div class="middleInfo">
              <a href="#" class="middleLeft">
                <em class="logistics"></em>
                <span>物流异常</span>
              </a>
              <div class="middleRight">
                <a href="#">物流显示拍照签收，但商品没收到</a>
                <a href="#">为何运输途中要我缴税</a>
              </div>
            </div>
            <div class="middleInfo">
              <a href="#" class="middleLeft">
                <em class="afterSale"></em>
                <span>售后问题</span>
              </a>
              <div class="middleRight">
                <a href="#">为何拒绝我的售后申请</a>
                <a href="#">退款金额 怎么计算</a>
              </div>
            </div>
            <div class="middleInfo">
              <a href="#" class="middleLeft">
                <em class="other"></em>
                <span>其他问题</span>
              </a>
              <div class="middleRight">
                <a href="#">如何获取优惠券</a>
                <a href="#">我可以多张优惠券一起使用吗</a>
              </div>
            </div>
          </div>
          <div class="helpFooter">
            <a href="#"><em class="online"></em><span>在线客服</span></a>
            <a href="javascript:void(0);"><em class="service"></em><span>客服热线</span></a>
            <a href="#">
              <p>8:30-24:00<br />客服服务时间</p>
            </a>
          </div>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "helpService"
    }
</script>

<style scoped>
@import "../../css/common/common.css";
@import "../../css/other/personalCenter.css";
</style>
