<template>
  <main>
    <h1 class="logoIcon"></h1>
    <div class="logoMain">
      <p>登录同步微信账号数据</p>
      <a href="#" class="authorization"><em></em><span>微信授权登录</span></a>
      <router-link to="/mobileLogin">
        <a href="#" class="phoneLogin">手机号登录 ></a>
      </router-link>
    </div>
  </main>
</template>
<script>
  export default {
  name: 'login'
}
</script>
<style scoped>
  @import "../../css/other/login.css";
</style>
