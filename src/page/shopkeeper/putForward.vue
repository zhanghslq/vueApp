<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        提现
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="putForward">
          <div class="putTop">
            <p>可提现金额(元)</p>
            <span>0</span>
            <em>提现将于次月10日前转入您的银行卡</em>
          </div>
          <div class="putMain">
            <a href="javascript:void(0)">
              <h4>店铺收益</h4>
              <i></i>
              <span>0元</span>
            </a>
            <router-link to="rewardTask">
              <h4>任务奖励</h4>
              <em></em>
              <span>0元</span>
            </router-link>

          </div>
          <div class="putMain">
           <router-link to="putForwardRecord">
             <h4>已提现金额</h4>
             <em></em>
             <span>0元</span>
           </router-link>
          </div>
          <div class="putMain">
           <router-link to="putForwardAdminist">
             <h4>提现信息补全</h4>
             <em></em>
           </router-link>
          </div>
          <a href="#" class="putBtn">提现</a>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "putForward"
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/fragmentary.css";
</style>
