<template>
  <div >
  <!--头部 开始-->
  <header>
    <div class="searchHead">
      <div class="search">
        <em></em>
        <input type="text" placeholder="搜索喜欢的宝贝">
      </div>
      <router-link to="-1">
        <a href="#" class="cancelBtn">取消</a>
      </router-link>
    </div>
  </header>
  <!--头部 结束-->
  <!--中间 开始-->
  <main>
    <div class="searchMain">
      <div class="searchTitle">热门搜索</div>
      <div class="searchInfo">
        <a href="#">超值梁板</a><a href="#">超值梁板</a><a href="#">超值梁板超值梁板</a>
      </div>
    </div>
  </main>
  <!--中间 结束--><!--底部 开始-->
  </div>
</template>

<script>
export default {
  name: 'search'
}
</script>
<style scoped src="../../style/common/common.css"></style>
<style scoped src="../../style/other/secondLevel.css"></style>
<style scoped>

</style>
