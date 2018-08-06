<template>
<div>
  <!--中间 开始-->
  <main>
    <div class="shopkeeperMain">
      <div class="shopPersonal">
        <div class="perLeft"><img src="../../images/temporary/7.jpg"></div>
        <div class="perMiddle">
          <h3>李宗森</h3>
          <span>ID:1285324061</span>
        </div>
        <a href="#" class="perRight"></a>
      </div>
      <div class="shopkeeepNav">
        <a href="#">
          <em class="selectedIcon"></em>
          <span>店主精选</span>
        </a>
        <a href="#">
          <em class="invitationIcon"></em>
          <span>邀请店主</span>
        </a>
        <a href="#">
          <em class="shareIcon"></em>
          <span>分享店铺</span>
        </a>
      </div>
      <div class="management">
        <div class="titleIng">
          <h4>经营数据</h4>
          <em></em>
          <span>更多数据</span>
        </div>
        <div class="todaySituation">
          <div class="todayInfo">
            <span>0笔</span>
            <em>今日订单</em>
          </div>
          <div class="todayInfo">
            <span>0笔</span>
            <em>今日收益</em>
          </div>
          <div class="todayInfo">
            <span>0笔</span>
            <em>今日销售额</em>
          </div>
        </div>
        <div class="marketing">
          <a href="#">营销助手</a>
          <a href="#">高收益商品</a>
        </div>
      </div>
      <div class="reward">
        <div class="titleIng">
          <h4>奖励任务</h4>
          <em></em>
        </div>
        <div class="carouseContent">
          <div id="carouselMain">
            <div class="tempWrap">
              <ul class="img">
                <li>
                  <a href="#">
                    <img src="../../images/temporary/reward1.jpg">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../images/temporary/reward2.jpg">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../images/temporary/reward1.jpg">
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="../../images/temporary/reward2.jpg">
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
      </div>
      <div class="businessSchool">
        <div class="titleIng">
          <h4>商学院</h4>
          <em></em>
        </div>
        <div class="schoolOper">
          <a href="#"><img src="../../images/index/newBrochure.jpg"></a>
          <a href="#"><img src="../../images/index/classMust.jpg"></a>
          <a href="#"><img src="../../images/index/demeanor.jpg"></a>
          <a href="#"><img src="../../images/index/activityInfo.jpg"></a>
        </div>
      </div>
      <div class="moreOpera">
        <a href="#"><em class="manageIcon"></em><span>客户管理</span></a>
        <a href="#"><em class="saleIcon"></em><span>销售订单</span></a>
        <a href="#"><em class="contactIcon"></em><span>联系我们</span></a>
        <a href="#"><em class="forwardIcon"></em><span>提现</span></a>
        <a href="#"><em class="giftBagIcon"></em><span>我的礼包</span></a>
        <a href="#"><em class="downloadIcon"></em><span>下载APP</span></a>
      </div>
    </div>
  </main>
  <!--中间 结束-->
  <!--底部 开始-->
  <footer class="memberFooter">
    <a href="index.html"><i class="homePage"></i><span>首页</span></a>
    <a href="#"><i class="find"></i><span>发现</span></a>
    <a href="#"><i class="shopp"></i><span>购物袋</span></a>
    <a href="#"><i class="personal"></i><span>个人中心</span></a>
    <a href="#" class="active"><i class="shopkeeper"></i><span>我是店主</span></a>
  </footer>
  <!--底部 结束-->
</div>
</template>

<script>
  import {TouchSlide} from "../../js/plugins/TouchSlide.1.1.min";
  import Swiper from 'swiper'

  export default {
        name: "shopkeeperPage",
    components:{
      Swiper,
      TouchSlide
    },
    methods:{
      bannerFocusImg: function () {
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
