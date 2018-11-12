<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        选择服务类型
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="selectTypeMain">
          <div class="productSelect">
            <a href="#" class="infoMiddle">
              <div class="middleImg"><img src="../../images/temporary/commodity9.png"></div>
              <div class="middleDet">
                <div class="middleTitle">
                  <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                </div>
                <div class="orderNum">X1</div>
              </div>
            </a>
          </div>
          <div class="refundMain">
            <router-link to="applicationRefund">
              <div class="refundmLeft">
                <h5>仅退款</h5>
                <span>未收到货(包含未签收)，或卖家协商同意前提下</span>
              </div>
              <div class="refundmRight">
                <em></em>
              </div>
            </router-link>
            <router-link to="applicationRefund">
              <div class="refundmLeft">
                <h5>退货退款</h5>
                <span>已收到货，需要退换已收到的货物</span>
              </div>
              <div class="refundmRight">
                <em></em>
              </div>
            </router-link>
            <router-link to="applyforExchange">
              <div class="refundmLeft">
                <h5>仅换货</h5>
                <span>已收到货，需要退换已收到的货物</span>
              </div>
              <div class="refundmRight">
                <em></em>
              </div>
            </router-link>
          </div>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "selectServiceType"
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
