<template>
  <div>
    <header>
      <a href="javascript:history.go(-1);" class="returnBtn"></a>
      登录
    </header>
    <!--头部 结束-->
    <!--中间 开始-->
    <main>
      <div class="mobileMain">
        <p>验证手机号登录</p>
        <div class="mobileInfo">
          <router-link to="/selectCountryArea">
             <a href="javascript:void(0);" class="areaCode">+ 86 <em></em></a>
          </router-link>
          <input type="type"  class="phoneNum">
        </div>
        <div class="mobileInfo">
          <input type="text" class="codeNum" placeholder="请输入验证码">
          <div class="codeBtn">
            <a href="javascript:void(0);" class="obtain fr" v-on:click="check($event)">获取验证码</a>
          </div>
        </div>
        <div class="voice">收不到短信，试试 <a href="javascript:void(0);">语音验证码</a></div>
        <router-link to="/index">
          <a href="#" class="logonBtn">登录</a>
        </router-link>
      </div>
    </main>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'mobileLogin',
  methods: {
    check: function (e) {
      var validCode = true
      var time = 60
      var code = e.currentTarget
      // 判断再点点击
      if (code.classList.contains('lock')) return false
      code.classList.add('lock')
      // 判断时间
      if (validCode) {
        validCode = false
        var t = setInterval(function () {
          time--
          code.classList.add('obtainNo')
          code.innerHTML = time + '秒'
          if (time === 0) {
            code.classList.remove('lock')
            clearInterval(t)
            code.innerHTML = '获取验证码'
            validCode = true
            code.classList.remove('obtainNo')
          }
        }, 1000)
      }
    },

    mobile_view: function (mobile) {
      var mobile = '+'+ mobile+'  <em></em>';
      $('.areaCode').append(mobile);
    },
    GetQueryString: function (name) {
      var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
      var r = window.location.search.substr(1).match(reg)
      if(r != null) return decodeURI(r[2]);
      return null;
    }

  },
  mounted: function() {
      var mobile = this.$route.params.mobileAddress
      if(mobile){
        $('.areaCode').empty()
        this.mobile_view(mobile)
      }
  }
}
</script>
<style scoped >
  @import "../../css/common/common.css";
  @import "../../css/other/login.css";
</style>
<style scoped>

</style>
