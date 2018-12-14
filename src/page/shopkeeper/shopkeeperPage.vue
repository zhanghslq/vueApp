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
       <router-link to="shopKeepSelection">
          <em class="selectedIcon"></em>
          <span>店主精选</span>
       </router-link>
        <a href="https://api.xingjiyouxuan.com/dist/#/camera">
          <em class="invitationIcon"></em>
          <span>邀请店主</span>
        </a>
        <a href="#" id="shareLike">
          <em class="shareIcon"></em>
          <span>分享店铺</span>
        </a>
      </div>
      <div class="management">
        <router-link to="dataCenter">
          <div class="titleIng">
            <h4>经营数据</h4>
            <em></em>
            <span>更多数据</span>
          </div>
        </router-link>

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
          <router-link to="marketing">
            营销助手
          </router-link>
          <router-link to="highlncome">
            高收益商品
          </router-link>
          <router-link to="manageSystem">
            管理系统
          </router-link>

        </div>
      </div>
      <div class="reward">
        <router-link to="rewardTask">
          <div class="titleIng">
            <h4>奖励任务</h4>
            <em></em>
          </div>
        </router-link>

        <div class="carouseContent">
          <div id="carouselMain">
            <div class="tempWrap">
              <ul class="img">
                <li>
                  <a >
                    <img src="../../images/temporary/reward1.jpg">
                  </a>
                </li>
                <li>
                  <a >
                    <img src="../../images/temporary/reward2.jpg">
                  </a>
                </li>
                <li>
                  <a >
                    <img src="../../images/temporary/reward1.jpg">
                  </a>
                </li>
                <li>
                  <a >
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

        <router-link to="businessSchool">
          <div class="titleIng">
          <h4>商学院</h4>
          <em></em>
          </div>
        </router-link>

        <div class="schoolOper">
          <router-link to="newBrochureInfo">
            <img src="../../images/index/newBrochure.jpg">
          </router-link>
          <a ><img src="../../images/index/classMust.jpg"></a>
          <a ><img src="../../images/index/demeanor.jpg"></a>
          <a ><img src="../../images/index/activityInfo.jpg"></a>
        </div>
      </div>
      <div class="moreOpera">
        <router-link to="myClient">
          <em class="manageIcon"></em><span>客户管理</span>
        </router-link>
        <router-link to="salesOrder">
         <em class="saleIcon"></em><span>销售订单</span>
        </router-link>

        <router-link to="shopkeeperContactUs">
          <em class="contactIcon"></em><span>联系我们</span>
        </router-link>
        <!--<router-link to="putForward" >
          <em class="forwardIcon"></em><span>提现</span>
        </router-link>-->
        <a v-on:click="toPutForward()">
          <em class="forwardIcon"></em><span>提现</span>
        </a>
        <a ><em class="downloadIcon"></em><span>下载APP</span></a>
      </div>
    </div>
  </main>
  <!--中间 结束-->
  <!--底部 开始-->
  <footer class="memberFooter" v-if="isDev">
    <router-link to="/index">
      <i class="homePage"></i><span>首页</span>
    </router-link>
    <router-link to="/findPage" >
      <i class="find"></i><span>发现</span>
    </router-link>
    <router-link to="/shopIndex">
      <i class="shopp"></i><span>购物袋</span>
    </router-link>
    <router-link to="/personalPage">
      <i class="personal"></i><span>个人中心</span>
    </router-link>
    <router-link to="/shopkeeperPage" class="active">
      <i class="shopkeeper"></i><span>我是店主</span>
    </router-link>
  </footer>
  <!--底部 结束-->
  <!--弹层 开始-->
  <div class="elasticBox">
    <div class="blackBag"></div>
    <div class="sharingLinks">
      <h4>分享链接已生成</h4>
      <p>https://modao.cc/app/O8jQukf7ctRL22MkXRNEF1qEctv</p>
      <a href="javascript:void(0);">复制链接</a>
    </div>
  </div>
  <!--弹层 结束-->
  <div class="elasticBoxCode">
    <div class="blackBagCode"></div>
    <div class="sharingLinksCode">
      <img :src="myQrcode">
    </div>
  </div>
</div>
</template>

<script>
  import {TouchSlide} from "../../js/plugins/TouchSlide.1.1.min";
  import Swiper from 'swiper'
  import store from "../../service/store";
  import axios from 'axios'

  export default {
        name: "shopkeeperPage",
    data(){
          return{
            isDev:false,
            myQrcode:'',
          }
    },
    components:{
      Swiper,
      TouchSlide
    },
    methods:{
      /*我是店主 二维码弹框 开始*/
      QRCode(){
    $(".perRight").on("click",function(){
      $("body").css({"height":"100%","overflow":"hidden"})
      $(".elasticBoxCode").show();
    });
    $(".elasticBoxCode .blackBagCode").on("click",function(){
      $("body").css({"height":"auto","overflow":"auto"})
      $(".elasticBoxCode").hide();
    });
  },
  /*我是店主 二维码弹框 结束*/
      toPutForward(){
        if(store.isDev()){
          this.$router.push("putForward")
        }else{
          if(store.judge()==0){
            window.androidXingJiApp.postMessage(JSON.stringify({
              "code": "91",
              "index":0,
              "url":store.getNextAddress()+"putForward"}));
          }else if(store.judge()==1){
            window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
              "code": "91",
              "index":0,
              "url":store.getNextAddress()+"putForward"
            });
          }
        }

      },
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
      /*我是店主分享 开始*/
      sharingLink:function (){
    $(".shopkeeepNav #shareLike").on("click",function(){
      $("body").css({"height":"100%","overflow":"hidden"})
      $(".elasticBox").show();
    });
    $(".elasticBox .blackBag").on("click",function(){
      $("body").css({"height":"auto","overflow":"auto"})
      $(".elasticBox").hide();
    })
  },
      getMyCode(){
        let _this=this;
        axios.post(store.getAddress()+'/api/wxapp/account/qrcode',{"uid":store.fetch("uid")}).then(function (response) {
          if(response.data.code==200){
            _this.myQrcode=response.data.data.qrcode
          }
        }).catch(function (error) {
          console.log(error)
        })
      }

  },
    mounted:function () {
          this.isDev=store.isDev();
      this.bannerFocusImg(),
      this.sharingLink()
      this.getMyCode()
      this.QRCode()

    }
}
</script>

<style scoped>
@import "../../css/plugins/swiper.min.css";
  @import "../../css/common/common.css";
  @import "../../css/other/fragmentary.css";
</style>
