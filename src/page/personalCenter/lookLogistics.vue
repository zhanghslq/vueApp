<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        查看物流
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="logisticsMain">
          <div class="transportation">
            <div class="transporLeft"><img src="../../images/temporary/commodity6.png"></div>
            <div class="transporRight">
              <p>物流状态：<em>运输中</em></p>
              <p>承运来源：<span>中通快递</span></p>
              <p>运单编号：<span>39542121214545434</span></p>
            </div>
          </div>
          <div class="logisticsCont">
            <ul>
              <li>
                <em class="Cur"></em>
                <p class="Cur">商家正在通知快递公司揽件</p>
                <span>2017-07-19 23:45:56</span>
              </li>
              <li>
                <em></em>
                <p>您的包裹已出库</p>
                <span>2017-07-19 23:45:56</span>
              </li>
              <li>
                <em></em>
                <p>您的订单待配货</p>
                <span>2017-07-19 23:45:56</span>
              </li>
              <li>
                <em></em>
                <p>您的订单开始处理</p>
                <span>2017-07-19 23:45:56</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </div>
</template>

<script>
    export default {
        name: "lookLogistics"
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
