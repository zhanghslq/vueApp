<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        分享我的店铺
        <a href="#" class="shareBtn" id="shareBtn"></a>
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="codeShare">
          <img src="../../images/secondLevel/codeIcon.png">
        </div>
      </main>
      <!--中间 结束-->
      <!--弹层 开始-->
      <div class="elasticBox" style="display: block;">
        <div class="blackBag"></div>
        <div class="boxContent">
          <div class="shareMain">
            <div class="mainInfo">
              <a href="#"><em class="friendsIcon"></em><span>朋友圈</span></a>
              <a href="#"><em class="copyIcon"></em><span>复制链接</span></a>
              <a href="#"><em class="wechatIcon"></em><span>微信好友</span></a>
              <a href="#"><em class="graphicIcon"></em><span>图文分享</span></a>
            </div>
            <a href="#" class="cancelBtn">取消</a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "codeShare",
      methods:{
         shareBox(){
          $(".shareMain .cancelBtn").on("click",function(){
            $(".elasticBox").hide();
          })
          $(".shareBtn").on("click",function(){
            $(".elasticBox").show();
          })
        }
      },
      mounted(){
          this.shareBox()

      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
@import "../../css/other/fragmentary.css";
</style>
