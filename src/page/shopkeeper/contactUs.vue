<template>
<div>
  <!--头部 开始-->
  <header class="fix">
    <a href="javascript:history.go(-1);" class="returnBtn"></a>
    联系我们
  </header>
  <!--头部 结束-->
  <!--中间 开始-->
  <main>
    <div class="contactUs">
      <div class="contactUsInfo">
        <div class="infoTop">
          <h3>我的信息</h3>
          <p>留下微信号申请开店咨询服务</p>
        </div>
        <div class="infoBottom">
          <em>微信：</em>
          <input type="text">
          <i></i>
          <div class="preCancel"><a href="javascript:void(0);" id="preservation">保存</a> <a href="javascript:void(0);" id="cancel">取消</a></div>
        </div>
      </div>
      <div class="justTo"><em></em><span>您还可以联系他们</span><em></em></div>
      <div class="contactUsInfo">
        <div class="infoTop">
          <div class="headImg"><img src="../../images/temporary/7.jpg"></div>
          <span>小红</span>
        </div>
        <div class="infoBottom">
          <div class="bottomText">
            <em>微信：</em>
            <span>sagamilk</span>
          </div>
          <div class="bottomText">
            <em>ID：</em>
            <span>2324324</span>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!--中间 结束-->
</div>
</template>

<script>
  import $ from 'jquery'
    export default {
        name: "contactUs",
      mounted:function () {
        $(".infoBottom input").focus(function(){
          $(".infoBottom i").hide();
          $(".infoBottom .preCancel").show();
        });
        $(".preCancel #preservation").on("click",function(){
          $(".preCancel").hide();
          $(".infoBottom i").show();
        });
        $(".preCancel #cancel").on("click",function(){
          $(".preCancel").hide();
          $(".infoBottom i").show();
        })
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
@import "../../css/other/fragmentary.css";

</style>
