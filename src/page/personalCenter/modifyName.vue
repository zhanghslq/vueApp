<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        修改昵称
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="modifyMain">
          <div class="modifyInfo">
            <input type="text" name="" placeholder="请输入">
          </div>
          <p>限2-16个字符</p>
          <a href="javascript:void(0);" class="preservationBtn">保存</a>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "modifyName"
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
