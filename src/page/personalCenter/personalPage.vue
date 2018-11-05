<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <router-link to="myNotice">
          <div class="message"><span></span><em>5</em></div>
        </router-link>

        <router-link to="setUp" class="setUpIcon">

        </router-link>

      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="personalMain">
          <div class="personalBg"></div>
          <div class="accountName">
            <a href="#">
              <div class="headPortrait">
                <span></span>
                <router-link to="accountInfo">
                  <div class="heading"><img :src="imageUrl"></div>
                </router-link>
              </div>
              <p>{{username}}</p>
              <em>猩际会员</em>
            </a>
          </div>
          <div class="orderSituation">
            <router-link :to="{path:'/myOrder',query:{num:0}}">
            <a  class="orderTitle">
              <span class="titleLeft">我的订单</span>
              <div class="titleRight">
                <span>全部订单</span>
                <em></em>
              </div>
            </a>
            </router-link>
            <div class="orderOperation">
              <router-link :to="{path:'/myOrder',query:{num:1}}">
                <em class="pendingPayment"></em>
                <span>待付款</span>
              </router-link>
              <router-link :to="{path:'/myOrder',query:{num:2}}">
                <em class="PendingDelivery"></em>
                <span>待发货</span>
              </router-link>
                <router-link :to="{path:'/myOrder',query:{num:3}}">
                <em class="goodsReceived"></em>
                <span>待收货</span>
                </router-link>
              <router-link :to="{path:'/myOrder',query:{num:4}}">
                <em class="succeTrade"></em>
                <span>交易成功</span>
              </router-link>
             <router-link to="refundProgress">
                <em class="returnGoods"></em>
                <span>退货/退款</span>
             </router-link>
            </div>
          </div>
          <div class="personalInfo">
            <a href="#">
              <span class="infoLeft">我是店主</span>
              <div class="infoRight">
                <em></em>
              </div>
            </a>
            <router-link to="exchangeX">
              <span class="infoLeft">猩际X币</span>
              <div class="infoRight">
                <em></em>
              </div>
            </router-link>
           <router-link to="coupon">
              <span class="infoLeft">优惠券</span>
              <div class="infoRight">
                <span>10张</span>
                <em></em>
              </div>
           </router-link>
            <router-link to="myCollection">
              <span class="infoLeft">我的收藏</span>
              <div class="infoRight">
                <em></em>
              </div>
            </router-link>
            <router-link to="memberCenter">
              <span class="infoLeft">会员中心</span>
              <div class="infoRight">
                <em></em>
              </div>
            </router-link>
          </div>
          <div class="personalInfo">
            <router-link to="helpService">
              <span class="infoLeft">帮助与客服</span>
              <div class="infoRight">
                <em></em>
              </div>
            </router-link>
            <a href="#">
              <span class="infoLeft">给我评分</span>
              <div class="infoRight">
                <em></em>
              </div>
            </a>
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
        <router-link to="/shopIndex" >
          <i class="shopp"></i><span>购物袋</span>
        </router-link>
        <router-link to="/personalPage" class="active">
          <i class="personal"></i><span>个人中心</span>
        </router-link>
        <router-link to="/shopkeeperPage" >
          <i class="shopkeeper"></i><span>我是店主</span>
        </router-link>
      </footer>
      <!--底部 结束-->
    </div>
</template>

<script>
  import store from '../../service/store'
  import axios from 'axios'
    export default {
        name: "personalPage",
      data(){
        return{
          username:'',
          imageUrl:'',
          isDev:false

        }
      },
      methods:{
        detect(){
          var equipmentType = "";
          var agent = navigator.userAgent.toLowerCase();
          var android = agent.indexOf("android");
          var iphone = agent.indexOf("iphone");
          var ipad = agent.indexOf("ipad");
          if(android != -1){
            equipmentType = "android";
          }
          if(iphone != -1 || ipad != -1){
            equipmentType = "ios";
          }
          return equipmentType;
        }

      },
      mounted(){
          this.isDev=store.isDev();
          var _this=this;
          let uid=store.fetch("uid");


            if(uid==undefined||uid==null||uid==''){//未登录，需要跳转到登录页

              if(store.judge()==1){
                window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
                  "code": "91",
                  "url":store.getNextAddress()
                });
              }else if(store.judge()==3){
                _this.$router.push("/")
              }


            }else{//已登录
              var _this=this;
              axios.post(store.getAddress()+'/api/wxapp/account/info',{
                "uid":store.fetch("uid")
              })
                .then(function (response) {
                  _this.username=response.data.data.nickName

                  _this.imageUrl=response.data.data.photo

                })
                .catch(function (error) {
                  console.log(error);
                })
            }


      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
