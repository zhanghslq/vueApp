<template>
    <div>
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        购物下单
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="questionAnswer">
          <div class="answerCont">
            <div class="contText">
              <em>Q：</em>
              <div class="qText">
                <p>多笔订单能否一起发货</p>
              </div>
            </div>
            <div class="contText">
              <em>A：</em>
              <div class="aText">
                <p>1.若您一起下的订单是不同仓库，则会分为多个包裹</p>
                <p>2.若单笔订单商品重量过重，会分为多个包裹派送</p>
              </div>
            </div>
          </div>
          <a href="#" class="contact"><span>联系在线客服</span><em></em></a>
        </div>
      </main>
    </div>
</template>

<script>
    export default {
        name: "questionAnswer"
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
