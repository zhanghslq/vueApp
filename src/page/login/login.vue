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
      <a href="index.html"><i class="homePage"></i><span>首页</span></a>
      <a href="#"><i class="find"></i><span>发现</span></a>
      <a href="#"><i class="shopp"></i><span>购物袋</span></a>
      <a href="#"><i class="personal"></i><span>个人中心</span></a>
    </footer>
    <!--底部 结束-->
  </div>
</template>
<script>
  export default {
  name: 'login'
}
</script>
<style scoped>
  @import "../../css/other/login.css";
</style>
