<template>
    <div>
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        意见与反馈
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="opinionMain">
          <div class="questionType">
            <div class="typeTitle">
              <i></i>
              <p>选择您要反馈的问题类型</p>
              <em>（必填）</em>
            </div>
            <div class="typeCont">
              <span class="on">购物流程</span>
              <span>物流问题</span>
              <span>售后服务</span>
              <span>新品提议</span>
              <span>其他建议</span>
            </div>
          </div>
          <div class="proposal">
            <div class="proTitle dnone">
              <i></i>
              <p>您的建议</p>
              <em>（必填）</em>
            </div>
            <textarea class="proInfo" placeholder="感谢您对猩际优选的支持！"></textarea>
          </div>
          <div class="contact">
            <div class="proTitle dnone">
              <i></i>
              <p>您的联系方式</p>
              <em>（选填）</em>
            </div>
            <input type="text" name="" placeholder="填写手机号" class="contactInfo">
            <span>商品如何使用等相关的咨询，请联系我们的在线客服哦~</span>
          </div>
          <div class="contact">
            <div class="proTitle dnone">
              <i></i>
              <p>您的订单号</p>
              <em>（选填）</em>
            </div>
            <input type="text" name="" placeholder="订单号" class="contactInfo">
          </div>
          <a href="#" class="subProposal">提交建议</a>
          <a href="#" class="serviceIcon"></a>
        </div>
      </main>
    </div>
</template>

<script>
    export default {
        name: "opinionFeedback"
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
