<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        新人手册-猩际商学院
        <a href="#" class="shareBtn"></a>
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="brochureMain">
          <a class="guidance">
            <span>置顶</span>
            <p>【新人手册】猩际新店主学习指导！</p>
            <em></em>
          </a>
          <div class="brochureList">
            <router-link to="newBrochureDetail">
              <div class="listLeft"><img src="../../images/temporary/3.jpg"></div>
              <div class="listRight">
                <p>【管理篇】余雯：找到团队持续发展的动力</p>
                <span>2018-06025 新人手册</span>
              </div>

            </router-link>

            <a href="#">
              <div class="listLeft"><img src="../../images/temporary/3.jpg"></div>
              <div class="listRight">
                <p>【管理篇】余雯：找到团队持续发展的动力</p>
                <span>2018-06025 新人手册</span>
              </div>
            </a>
          </div>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "newBrochure"
    }
</script>

<style scoped>
  @import "../../css/common/common.css";
  @import "../../css/other/fragmentary.css";
</style>
