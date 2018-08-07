<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        我的客户
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="myClient">
          <div class="searchMain">
            <input type="" placeholder="搜索客户ID">
            <a href="#">搜索</a>
          </div>
          <div class="ordinaryUser">
            <h4>普通用户</h4>
            <em></em>
            <span>0人</span>
          </div>
          <div class="clientMain">
            <div class="clientNum">2人</div>
            <ul>
              <li>
                <div class="listLeft"><img src="../../images/temporary/7.jpg"></div>
                <div class="listRight">
                  <div class="listTop">
                    <div class="names"><span>李宗森</span><em>邀请日期：2018/06/12</em></div>
                    <p>ID：28374897</p>
                  </div>
                  <div class="listBottom">
                    <span>姓名：暂无</span>
                    <span>手机号：暂无</span>
                    <span>消费金额：0</span>
                    <span>微信号：暂无</span>
                  </div>
                </div>
              </li>
              <li>
                <div class="listLeft"><img src="../../images/temporary/7.jpg"></div>
                <div class="listRight">
                  <div class="listTop">
                    <div class="names"><span>李宗森</span><em>邀请日期：2018/06/12</em></div>
                    <p>ID：28374897</p>
                  </div>
                  <div class="listBottom">
                    <span>姓名：暂无</span>
                    <span>手机号：暂无</span>
                    <span>消费金额：0</span>
                    <span>微信号：暂无</span>
                  </div>
                </div>
              </li>
            </ul>
            <p class="noMore">没有更多客户</p>
          </div>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "myClient"
    }
</script>

<style scoped>
  @import "../../css/common/common.css";
  @import "../../css/other/fragmentary.css";
</style>
