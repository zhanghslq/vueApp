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
        <scroller>
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
          <a v-on:click="toOrderList(0)">
            <a  class="orderTitle">
              <span class="titleLeft">我的订单</span>
              <div class="titleRight">
                <span>全部订单</span>
                <em></em>
              </div>
            </a>
            </a>
            <div class="orderOperation">
              <a v-on:click="toOrderList(1)">
                <em class="pendingPayment"></em>
                <span>待付款</span>
              </a>
              <a v-on:click="toOrderList(2)">
                <em class="PendingDelivery"></em>
                <span>待发货</span>
              </a>
              <a v-on:click="toOrderList(3)">
                <em class="goodsReceived"></em>
                <span>待收货</span>
                </a>
              <a v-on:click="toOrderList(5)">
                <em class="succeTrade"></em>
                <span>交易成功</span>
              </a>
             <a  v-on:click="toRefundProgress()">
                <em class="returnGoods"></em>
                <span>退货/退款</span>
             </a>
            </div>
          </div>
          <div class="personalInfo">
            <a >
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
           <!-- <a href="#">
              <span class="infoLeft">给我评分</span>
              <div class="infoRight">
                <em></em>
              </div>
            </a>-->
          </div>
        </div>
        </scroller>
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
        toRefundProgress(){
          if(store.isDev()){
            this.$router.push("refundProgress")
          }else{
            if(store.judge()==0){
              window.androidXingJiApp.postMessage(JSON.stringify({
                "code": "91",
                "index":0,
                "url":store.getNextAddress()+"refundProgress"}));
            }else if(store.judge()==1){
              window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
                "code": "91",
                "index":0,
                "url":store.getNextAddress()+"refundProgress"
              });
            }
          }

        },
        toOrderList(num){//跳转去订单列表页，用app的跳转
          if(store.isDev()){
            this.$router.push({path:"myOrder",query:{"num":num}})
          }else{
            if(store.judge()==0){
              window.androidXingJiApp.postMessage(JSON.stringify({
                "code": "91",
                "index":0,
                "url":store.getNextAddress()+"myOrder?num="+num}));
            }else if(store.judge()==1){
              window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
                "code": "91",
                "index":0,
                "url":store.getNextAddress()+"myOrder?num="+num
              });
            }
          }
        },

      },
      mounted(){
          this.isDev=store.isDev();
          var _this=this;
          let uid=store.fetch("uid");
            if(uid==undefined||uid==null||uid==''){//未登录，需要跳转到登录页
              store.save("lastPage","personalPage")
              store.save("index",4)
              if(store.judge()==1){
                window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
                  "code": "91",
                  "index":0,
                  "url":store.getNextAddress()+"mobileLogin"
                });
              }else if(store.judge()==0){//安卓
                window.androidXingJiApp.postMessage(JSON.stringify({
                  "code": "91",
                  "index":0,
                  "url":store.getNextAddress()+"mobileLogin"}));
              }else if(store.judge()==3){
                _this.$router.push("mobileLogin")
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
