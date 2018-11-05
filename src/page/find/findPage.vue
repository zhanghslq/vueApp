<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <div class="message"><span></span><em>5</em></div>
        发现
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="findPageMain">
          <div class="special">
            <router-link class="specialTitle" to="newGrowGrass">
              <span>专题精选</span>
              <em></em>
            </router-link>

            <div class="swiper-container1">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a href="#">
                    <img src="../../images/temporary/6.jpg">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="#">
                    <img src="../../images/temporary/6.jpg">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="#">
                    <img src="../../images/temporary/6.jpg">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="#">
                    <img src="../../images/temporary/6.jpg">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="#">
                    <img src="../../images/temporary/6.jpg">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="#">
                    <img src="../../images/temporary/6.jpg">
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="hotTopic">
            <router-link to="hottopic">
              <a  class="specialTitle">
                <span>热门话题</span>
                <em></em>
              </a>
            </router-link>
            <div class="swiper-container2">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a href="#">
                    <img src="../../images/temporary/5.jpg">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="#">
                    <img src="../../images/temporary/5.jpg">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="#">
                    <img src="../../images/temporary/5.jpg">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="#">
                    <img src="../../images/temporary/5.jpg">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="#">
                    <img src="../../images/temporary/5.jpg">
                  </a>
                </div>
                <div class="swiper-slide">
                  <a href="#">
                    <img src="../../images/temporary/5.jpg">
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="findPageTab" id="navcon01">
            <div class="tabNav" id="jq_tabNav">
              <a href="javascript:void(0);" class="Cur">推荐</a>
              <a href="javascript:void(0);">关注</a>
              <a href="javascript:void(0);">礼包素材</a>
            </div>
            <div class="tabList">
              <div class="tabListInfo" style="display: block;">
                <div class="infoContent">
                  <div class="infoHead">
                    <div class="infoHeadLeft">
                      <div class="headPic"><a href="personalHomePage.html"><img src="../../images/temporary/7.jpg"></a></div>
                      <div class="headName">
                        <p>环球小荐人</p>
                        <em>12小时前发布</em>
                      </div>
                    </div>
                    <a  href="javascript:void(0);" class="infoHeadRight">...</a>
                  </div>
                  <div class="infoText">
                    <div class="textTitle">
                      <em>置顶</em>
                      <h3>法式轻奢ELLE箱包专场</h3>
                    </div>
                    <p>法式轻奢ELLE箱包专场，会员最高可省92.7元！霍思燕同款斜挎包会员价679.9元，牛皮百搭斜挎包会员价223.7元，U型开口斜挎包会员价298.5元，精致简约铆钉小方包会员价276元，快来进场为自己挑选一只心仪的包包吧~</p>
                  </div>
                  <!--缩略图-->
                  <div id="_contain" class="enlargementPic">
                    <div class="contain">
                      <div class="containContent">
                        <div class="text">
                          <div class="my-gallery" data-pswp-uid="2">
                            <figure>
                              <div><a ><img  src="../../images/temporary/5.jpg" preview="2"></a></div>
                            </figure>
                            <figure>
                              <div><a ><img src="../../images/temporary/sb1.jpg" preview="2"></a></div>
                            </figure>
                            <figure>
                              <div><a ><img src="../../images/temporary/s5.jpg" preview="2"></a></div>
                            </figure>
                            <figure>
                              <div><a ><img  src="../../images/temporary/2.jpg" preview="2"></a></div>
                            </figure>
                            <figure>
                              <div><a ><img src="../../images/temporary/sb3.jpg" preview="2"></a></div>
                            </figure>
                            <figure>
                              <div><a ><img src="../../images/temporary/sb1.jpg" preview="2"></a></div>
                            </figure>
                            <figure>
                              <div><a ><img  src="../../images/temporary/sb1.jpg" preview="2"></a></div>
                            </figure>
                            <figure>
                              <div><a ><img src="../../images/temporary/sb1.jpg" preview="2"></a></div>
                            </figure>
                            <figure>
                              <div><a ><img src="../../images/temporary/sb1.jpg" preview="2"></a></div>
                            </figure>

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="secialField">
                    <a href="#">
                      <div class="secialPic"><img src="../../images/temporary/2.jpg"></div>
                      <p>法式轻奢ELLE箱包专场</p>
                    </a>
                  </div>
                  <div class="operation">
                    <a href="#"><em class="fabulous"></em><span>6</span></a>
                    <a href="#"><em class="download"></em><span>下载</span></a>
                    <a href="#"><em class="share"></em><span>15</span></a>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <router-link to="releaseDynamics" class="releaseBtn">

          </router-link>

        </div>
      </main>
      <!--中间 结束-->
      <!--底部 开始-->
      <footer class="memberFooter" v-if="isDev">
        <router-link to="/index">
         <i class="homePage"></i><span>首页</span>
        </router-link>
        <router-link to="/findPage" class="active">
          <i class="find"></i><span>发现</span>
        </router-link>
        <router-link to="/shopIndex">
          <i class="shopp"></i><span>购物袋</span>
        </router-link>
        <router-link to="/personalPage">
          <i class="personal"></i><span>个人中心</span>
        </router-link>
        <router-link to="/shopkeeperPage">
          <i class="shopkeeper"></i><span>我是店主</span>
        </router-link>
      </footer>
      <!--底部 结束-->

    </div>
</template>

<script>
  import Vue from 'vue'
  import vuePhotoPreview from 'vue-photo-preview'
  import store from '../../service/store'
  import {TouchSlide} from '../../js/plugins/TouchSlide.1.1.min'
  import Swiper from 'swiper'
  Vue.use(vuePhotoPreview,{
    fullscreenEl:false //关闭全屏按钮
  })


    export default {
        name: "findPage",
      components:{
        TouchSlide,
        Swiper
      },
      data(){
          return{
            isDev:false,
              swiper1:{},
              swiper2:{}
          }
      },
      methods:{
        /*发现首页左右滑动*/
      findSlide1:function (){
      this.swiper1 = new Swiper('.swiper-container1', {
      slidesPerView: 2.2,
      spaceBetween: 8,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
        onDestroy(swiper){
            console.log("swiper1销毁了")
        },
    });
  },
        findSlide2:function (){
      this.swiper2 = new Swiper('.swiper-container2', {
      slidesPerView: 3.4,
      spaceBetween: 8,
      pagination: {
        el: '.swiper-pagination2',
        clickable: true,
      },
        onDestroy(swiper){
          console.log("swiper2销毁了")
        },
    });
  },
  /*发现首页tab切换*/
        findPageTab:function (){
    var $li = $('.tabNav a');
    var $ul = $('.tabList .tabListInfo');
    $("#navcon01").css('height',$ul.eq(0).height())
    $li.click(function(){
      var $this = $(this);
      var $t = $this.index();
      $li.removeClass();
      $this.addClass('Cur');
      $ul.css('display','none');
      $ul.eq($t).css('display','block');
      $("#navcon01").css('height',$ul.eq($t).height())
    })
  },
  /*话题 tab切换*/
        topicTab:function (){
    var $li = $('.titleRight a');
    var $ul = $('.tabList .tabListInfo');
    $("#navcon01").css('height',$ul.eq(0).height())
    $li.click(function(){
      var $this = $(this);
      var $t = $this.index();
      $li.removeClass();
      $this.addClass('Cur');
      $ul.css('display','none');
      $ul.eq($t).css('display','block');
      $("#navcon01").css('height',$ul.eq($t).height())
    })
  },
  /*弹出层*/
        commodity:function (){
    $(".dynamic .relevantBtn").on("click",function(){
      $("body").css({"height":"100%","overflow":"hidden"})
      $(".elasticBox").show();
    });
    $(".elasticBox .blackBag").on("click",function(){
      $("body").css({"height":"auto","overflow":"auto"})
      $(".elasticBox").hide();
    })
  }
      },
      destroyed(){
        $(window).unbind(scroll())
        console.log("findPage  销毁了")
        this.swiper1.destory
        this.swiper2.destory
      },
      deactivated(){
        this.$destroy(true)

      },
      mounted:function(){
          this.isDev=store.isDev();
        this.findSlide1(); //专题左右滑动内容
        this.findSlide2();
        this.findPageTab();//tab切换
        this.commodity();  //商品弹层
        this.topicTab();   //话题tab切换
/*
        setTimeout(() => {
          this.$previewRefresh()
        }, 2000);*/
        $(window).scroll(function(){
          var $scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
          var $tabScroll=$("#jq_tabNav").offset().top-90;
          if($scrolltop>=$tabScroll){
            $("#jq_tabNav").addClass("fix")
            if($tabScroll<0){
              $("#jq_tabNav").removeClass("fix")
            }
          }

        })
      }
    }
</script>

<style scoped>
  @import '../../../node_modules/vue-photo-preview/dist/skin.css';
@import "../../css/common/common.css";
@import "../../css/other/index.css";
@import '../../css/plugins/swiper.min.css';

</style>
