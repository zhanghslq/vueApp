<template>
    <div>
      <!--头部 开始-->
      <header>
        <a v-on:click="toPersonlPage()" class="returnBtn"></a>
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

    import store from "../../service/store";

    export default {
        name: "setUp",
        methods:{
            logOut(){
              let _this=this;
              _this.$layer.dialog({
                title: ['退出登录', 'background:skyblue'], // 第一个是标题内容  第二个是标题栏的style(可以为空)
                content: '确定要退出此账号吗',
                contentClass: 'className',
                btn: ['取消','确定'],
                //   time: 2000
              }).then(function (res){
                  // res为0时是用户点击了左边  为1时用户点击了右边
                  if(res==1){//确认取消订单
                    localStorage.removeItem("uid");
                    localStorage.removeItem("isStoreKeeper");

                    if(store.judge()==0){
                      window.androidXingJiApp.postMessage(JSON.stringify({
                        "code": "99",
                        }));
                      window.androidXingJiApp.postMessage(JSON.stringify({
                        "code": "91",
                        "index":1,
                        "url":store.getNextAddress()+"index"}));
                    }else if(store.judge()==1){
                       window.webkit.messageHandlers.currentCookies.postMessage({
                          "code": "99"
                        });
                      window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
                        "code": "91",
                        "index":1,
                        "url":store.getNextAddress()+"index"
                      });
                    }
                  }else{//取
                    console.log("取消")
                  }
                }).catch(function (error) {
                  console.log(error)
              })

            },
            toPersonlPage(){
              if(store.isDev()){
                this.$router.push("personalPage")
              }else{
                if(store.judge()==0){
                  window.androidXingJiApp.postMessage(JSON.stringify({
                    "code": "91",
                    "index":4,
                    "url":store.getNextAddress()+"personalPage"}));
                }else if(store.judge()==1){
                  window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
                    "code": "91",
                    "index":4,
                    "url":store.getNextAddress()+"personalPage"
                  });
                }
              }
            }
        }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
