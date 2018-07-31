<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        账号信息
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="accountMain">
          <div class="accoutnInfo">
            <a href="#">
              <span class="infoLeft">头像</span>
              <div class="infoRight">
                <img src="../../images/temporary/7.jpg">
                <em></em>
              </div>
            </a>
            <a href="#">
              <span class="infoLeft">昵称</span>
              <div class="infoRight">
                <span>李宗森</span>
                <em></em>
              </div>
            </a>
            <a href="#">
              <span class="infoLeft">微信号</span>
              <div class="infoRight">
                <span>dfadf</span>
                <em></em>
              </div>
            </a>
            <a href="#">
              <span class="infoLeft">个性签名</span>
              <div class="infoRight">
                <span>去设置</span>
                <em></em>
              </div>
            </a>
            <a href="#">
              <span class="infoLeft">手机号</span>
              <div class="infoRight">
                <span>13876667877</span>
                <em></em>
              </div>
            </a>
          </div>
          <div class="accoutnInfo">
            <a href="javascript:void(0);">
              <span class="infoLeft">ID</span>
              <div class="infoRight">
                <span>13876667877</span>
              </div>
            </a>
            <a href="javascript:void(0);">
              <span class="infoLeft">累计消费</span>
              <div class="infoRight">
                <span>0元</span>
              </div>
            </a>
          </div>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
  // import '../../js/other/conformity.js'
    export default {
        name: "accountInfo"
    }
</script>

<style scoped>

@import "../../css/other/personalCenter.css";
</style>
