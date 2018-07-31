<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        提醒设置
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="accountMain">
          <div class="accoutnInfo">
            <a href="#">
              <span class="infoLeft">接受消息提醒</span>
              <div class="infoRight">
                <span>已开启</span>
              </div>
            </a>
          </div>
          <div class="changeText">
            如果你要关闭或开启消息提醒，请在“设置”-“通知”功能中，找到“猩际优选”更改 <a href="#">去更改</a>
          </div>
          <div class="accoutnInfo">
            <a href="javascript:void(0);">
              <span class="infoLeft">店铺访问通知</span>
              <div class="infoRight">
                <label class="ui-switch">
                  <input type="checkbox">
                </label>
              </div>
            </a>
            <a href="javascript:void(0);">
              <span class="infoLeft">我的店主通知提醒</span>
              <div class="infoRight">
                <label class="ui-switch">
                  <input type="checkbox" checked>
                </label>
              </div>
            </a>
            <a href="javascript:void(0);">
              <span class="infoLeft">销售收益通知提醒</span>
              <div class="infoRight">
                <label class="ui-switch">
                  <input type="checkbox" checked>
                </label>
              </div>
            </a>
            <a href="javascript:void(0);">
              <span class="infoLeft">系统消息通知提醒</span>
              <div class="infoRight">
                <label class="ui-switch">
                  <input type="checkbox" checked>
                </label>
              </div>
            </a>
            <a href="javascript:void(0);">
              <span class="infoLeft">商学院通知提醒</span>
              <div class="infoRight">
                <label class="ui-switch">
                  <input type="checkbox" checked>
                </label>
              </div>
            </a>
            <a href="javascript:void(0);">
              <span class="infoLeft">捕手号外通知提醒</span>
              <div class="infoRight">
                <label class="ui-switch">
                  <input type="checkbox" checked>
                </label>
              </div>
            </a>
          </div>
          <p class="tips">关闭对应的消息推送后，该类型消息将无法后台推送给你</p>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "remindSetUp"
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
