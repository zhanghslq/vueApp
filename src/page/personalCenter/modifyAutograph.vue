<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        设置个性签名
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="modifyMain">
          <div class="textareaBox">
            <textarea class="wishContent" maxlength="40"></textarea>
            <span class="wordsNum">0/40</span>
          </div>
          <a href="javascript:void(0);" class="preservationBtn">保存</a>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "modifyAutograph"
    }
</script>

<style scoped>
  @import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
