<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        猩际商学院
        <a href="#" class="shareBtn"></a>
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="schoolContent">
          <div class="carouseContent">
            <div id="carouselMain">
              <div class="tempWrap">
                <ul class="img">
                  <li>
                    <a href="#">
                      <img src="../../images/temporary/schoolPic.jpg">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../../images/temporary/schoolPic.jpg">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../../images/temporary/schoolPic.jpg">
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="../../images/temporary/schoolPic.jpg">
                    </a>
                  </li>
                </ul>
              </div>
              <div class="carouselBtn">
                <ul>
                  <li class="on">1</li>
                  <li>2</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="schoolNav">
            <a href="#"><img src="../../images/index/newBrochureBig.jpg"></a>
            <a href="#"><img src="../../images/index/demeanorBig.jpg"></a>
            <a href="#"><img src="../../images/index/activityInfoBig.jpg"></a>
            <a href="#"><img src="../../images/index/classMustBig.jpg"></a>
            <a href="#"><img src="../../images/index/middleShiftBig.jpg"></a>
            <a href="#"><img src="../../images/index/advancedBig.jpg"></a>
          </div>
          <div class="schoolList">
            <a href="#">
              <div class="listLeft"><img src="../../images/temporary/3.jpg"></div>
              <div class="listRight">
                <p>【管理篇】余雯：找到团队持续发展的动力</p>
                <span>2018-06025 新人手册</span>
              </div>
            </a>
            <a href="#">
              <div class="listLeft"><img src="../../images/temporary/3.jpg"></div>
              <div class="listRight">
                <p>【管理篇】余雯：找到团队持续发展的动力</p>
                <span>2018-06025 新人手册</span>
              </div>
            </a>
            <a href="#">
              <div class="listLeft"><img src="../../images/temporary/3.jpg"></div>
              <div class="listRight">
                <p>【管理篇】余雯：找到团队持续发展的动力</p>
                <span>2018-06025 新人手册</span>
              </div>
            </a>
            <a href="#">
              <div class="listLeft"><img src="../../images/temporary/3.jpg"></div>
              <div class="listRight">
                <p>【管理篇】余雯：找到团队持续发展的动力</p>
                <span>2018-06025 新人手册</span>
              </div>
            </a>
            <a href="#">
              <div class="listLeft"><img src="../../images/temporary/3.jpg"></div>
              <div class="listRight">
                <p>【管理篇】余雯：找到团队持续发展的动力</p>
                <span>2018-06025 新人手册</span>
              </div>
            </a>
            <a href="#">
              <div class="listLeft"><img src="../../images/temporary/3.jpg"></div>
              <div class="listRight">
                <p>【管理篇】余雯：找到团队持续发展的动力</p>
                <span>2018-06025 新人手册</span>
              </div>
            </a>
            <a href="#">
              <div class="listLeft"><img src="../../images/temporary/3.jpg"></div>
              <div class="listRight">
                <p>【管理篇】余雯：找到团队持续发展的动力</p>
                <span>2018-06025 新人手册</span>
              </div>
            </a>
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
  import Swiper from 'swiper'
  import {TouchSlide} from "../../js/plugins/TouchSlide.1.1.min";
  export default {
        name: "businessSchool",
    components:{
      Swiper,
      TouchSlide
    },
    methods:{
      /*轮播图*/
      bannerFocusImg:function () {
    TouchSlide({
      slideCell: "#carouselMain",
      titCell: ".carouselBtn ul",
      mainCell: ".img",
      effect: "leftLoop",
      autoPlay: true,
      autoPage: true,
      interTime: 3000
    });
    var width = $(window).width();
    var height = parseInt(width / 3 * 2);
    $("#carouselMain li a").css("max-height", height);
  },
    },
    mounted:function () {
      this.bannerFocusImg()
    }
}
</script>

<style scoped>
@import "../../css/plugins/swiper.min.css";
  @import "../../css/common/common.css";
  @import "../../css/other/fragmentary.css";
</style>
