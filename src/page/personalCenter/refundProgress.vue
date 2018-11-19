<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a  v-on:click="toPersonalPage()" class="returnBtn"></a>
        退款进度
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main >
        <scroller style="margin-top: 1rem" :on-infinite="infinite"  :on-refresh = "refresh" ref="refunedScroller" :noDataText="noDataText">
        <div class="refurdMain">

          <div class="noTimes" v-if="orderList.length==0">
            <img src="../../images/threeLevel/refundPic.png" class="refurdNoPic">
            <p>暂无退款订单</p>
          </div>
          <div class="optionMain">
            <ul class="opContInfo">

              <li v-for="(order,index) in orderList" :key="index">
                <div class="infoTop">
                  <span>{{order.createTime}}</span>
                  <em v-if="order.hasRefund">仅退款</em>
                  <em v-else-if="order.hasReturn">退货</em>
                </div>
                <a  class="infoMiddle" v-for="(item,inde) in order.lines" :key="inde">
                  <div class="middleImg"><img :src="item.goodsTitleImg"></div>
                  <div class="middleDet">
                    <div class="middleTitle">
                      <p>{{item.goodsTitle}}</p>
                    </div>
                    <div class="orderNum">X{{item.quantity}}</div>
                  </div>
                </a>
                <div class="infoBottom">
                  <a  class="fourthBtn" v-on:click="goToRefundDetail(order.orderId)">查看详情</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        </scroller>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
  import axios from 'axios'
  import store from '../../service/store'
    export default {
        name: "refundProgress",
      data(){
          return{
            noDataText:'我也是有底线的',
            orderList:[],
            pageNumber:1,
          }
      },
      methods:{
        toPersonalPage(){
          //this.$router.push("personalPage")

          if(store.isDev()){
            this.$router.push("personalPage")
          }else{
            if(store.judge()==0){
              window.androidXingJiApp.postMessage(JSON.stringify({
                "code": "91",
                "index":4,
                "url":store.getNextAddress()+"personalPage"}));
            }else if(store.judge()==1){
              window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
                "code": "99",
              });
            }

          }
        },
        goToRefundDetail(orderId){
          this.$router.push({path:'orderDetailsRefund',query:{"orderId":orderId}})
        },
        queryAllOrder(){
          var _this=this;
          axios.post(store.getAddress()+'/api/wxapp/order/list',{
            "uid":store.fetch("uid"),
            "status":0,
            "support":1,
            "page":_this.pageNumber,
            "limit":4
          }).then(function (response) {
              _this.orderList=_this.orderList.concat(response.data.list)
          }).catch(function (error) {
            console.log(error)

          })
        },
        refreshOrder(){
          var _this=this;
          axios.post(store.getAddress()+'/api/wxapp/order/list',{
            "uid":store.fetch("uid"),
            "status":0,
            "support":1,
            "page":_this.pageNumber,
            "limit":4
          }).then(function (response) {
            _this.orderList=response.data.list
          }).catch(function (error) {
            console.log(error)

          })
        },
        infinite(){
          console.log("加载更多")//加载更多，即往数据里面push新的数据，需要在原来的基础上继续加载剩余的数据

          this.queryAllOrder();
          this.pageNumber++;
          this.$refs.refunedScroller.finishInfinite(true);
        },
        refresh(){
          console.log("重新加载")
          this.pageNumber=1;
          this.refreshOrder();
          this.$refs.refunedScroller.finishPullToRefresh()//结束动作，在完成调用时执行


        }
      },
      mounted(){


      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
@import "../../css/other/personalCenter.css";
</style>
