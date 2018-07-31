<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        手机号
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="modifyMain">
          <div class="mobile">13873378787</div>
          <a href="javascript:void(0);" class="replaceBtn">更换手机号</a>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "modifyPhone"
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
