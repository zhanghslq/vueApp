<template>
  <div>
    <!--头部 开始-->
    <header>
      登录
    </header>
    <!--头部 结束-->
    <!--中间 开始-->
    <main>
      <h1 class="logoIcon"></h1>
      <div class="logoMain">
        <p>登录同步微信账号数据</p>
        <a href="#" class="authorization"><em></em><span>微信授权登录</span></a>
        <router-link to="mobileLogin">
          <a  class="phoneLogin">手机号登录 ></a>
        </router-link>
      </div>
    </main>
    <!--中间 结束-->
    <!--底部 开始-->
    <footer class="footerNav">
      <router-link to="/index">
        <i class="homePage"></i><span>首页</span>
      </router-link>
      <router-link to="/findPage" >
        <i class="find"></i><span>发现</span>
      </router-link>
      <router-link to="/shopIndex" >
        <i class="shopp"></i><span>购物袋</span>
      </router-link>
      <router-link to="/personalPage" >
        <i class="personal"></i><span>个人中心</span>
      </router-link>


    </footer>
    <!--底部 结束-->
  </div>
</template>
<script>
  import $ from 'jquery'
  export default {
  name: 'login',
  mounted(){

  }
}
</script>
<style scoped>
  @import "../../css/common/common.css";
  @import "../../css/other/login.css";
</style>
