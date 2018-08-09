<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        销售订单
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="salesOrderMain">
          <div class="searchMain">
            <input type="text" name="" placeholder="输入订单号、客户ID">
            <a href="javascript:void(0);">搜索</a>
          </div>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "salesOrder"
    }
</script>

<style scoped>
@import "../../css/common/common.css";
@import "../../css/other/fragmentary.css";
</style>
