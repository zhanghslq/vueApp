<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        明细
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="detailedPage">
          <p>暂无明细</p>
        </div>
      </main>
    </div>
</template>

<script>
    export default {
        name: "detailedPage"
    }
</script>

<style scoped>
@import "../../css/common/common.css";
@import "../../css/other/personalCenter.css";
</style>
