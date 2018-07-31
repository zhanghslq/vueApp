<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        更新手机号
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="mobileMain mt5">
          <div class="mobileInfo">
            <a href="selectCountryArea.html" class="areaCode">+ 86  <em></em></a>
            <input type="type" name="" class="phoneNum">
          </div>
          <div class="mobileInfo">
            <input type="text" class="codeNum" placeholder="请输入验证码">
            <div class="codeBtn">
              <a href="javascript:void(0);" class="obtain fr">获取验证码</a>
            </div>
          </div>
          <a href="#" class="bindingBtn">绑定新号码</a>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
  //需要携带值跳转
    export default {
        name: "updateMobileLogin",
      mounted:function () {
        var mobile=this.GetQueryString("mobile");
        if(mobile){
          $('.areaCode').empty();
          this.mobile_view(mobile);
        }

      },methods:{

        mobile_view:function (mobile) {
      var mobile = '+'+mobile+'  <em></em>';
      $('.areaCode').append(mobile);
    },
        GetQueryString:function (name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      var r = window.location.search.substr(1).match(reg);
      if(r != null) return decodeURI(r[2]);
      return null;
    }
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/login.css";
</style>
