<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        收货地址
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="addressCorrel">
          <a href="#" class="receiving">
            <div class="receivingLeft">
              <div class="leftName">
                <span>李宗森</span>
                <em>13811203297</em>
              </div>
              <p><em>[默认地址] </em>北京市北京市朝阳区百子湾32号院北区3号楼B座505</p>
            </div>
            <div class="receivingRight">
              <em></em>
            </div>
          </a>
          <a href="#" class="newlyAdded">+ 新增收货地址</a>
        </div>
      </main>
    </div>
</template>

<script>
    export default {
        name: "receivingAddress"
    }
</script>

<style scoped>
@import "../../css/other/threeLevel.css";
</style>
