<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        设置
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="accountMain">
          <div class="accoutnInfo">
            <a href="#">
              <span class="infoLeft">接受消息提醒</span>
              <div class="infoRight">
                <span>已关闭</span>
              </div>
            </a>
          </div>
          <div class="changeText">
            如果你要关闭或开启消息提醒，请在“设置”-“通知”功能中，找到“猩际优选”更改 <a href="#">去更改</a>
          </div>
          <div class="accoutnInfo">
            <router-link to="accountInfo">
              <span class="infoLeft">账号信息</span>
              <div class="infoRight">
                <em></em>
              </div>
            </router-link>
          </div>
          <div class="accoutnInfo">
            <router-link to="receivingAddress">
              <span class="infoLeft">收货管理地址</span>
              <div class="infoRight">
                <em></em>
              </div>
            </router-link>
          </div>
          <!--<div class="accoutnInfo">
            <a href="javascript:void(0);">
              <span class="infoLeft">清除缓存</span>
              <div class="infoRight">
                <span>325M</span>
              </div>
            </a>
          </div>-->
          <div class="accoutnInfo">
            <router-link to="aboutUS">
              <span class="infoLeft">关于我们</span>
              <div class="infoRight">
                <em></em>
              </div>
            </router-link>
          </div>
          <a v-on:click="logOut()" class="signOutBtn">退出当前账号</a>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>

    export default {
        name: "setUp",
        methods:{
            logOut(){
             localStorage.removeItem("uid")
            }
        }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
