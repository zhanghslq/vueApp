<template>
    <div>
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        交易详情
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="tradeMain">
          <div class="tradeTop">
            <img src="../../images/threeLevel/pitchIcon.png" class="trTLeft">
            <div class="trTRight">
              <h3>付款成功</h3>
              <p>努力配货中</p>
            </div>
          </div>
          <ul class="tradeOrder">
            <li><span>订单编号：</span><em>{{orderNumber}}</em></li>
            <li><span>交易时间：</span><em>{{createTime}}</em></li>
            <li><span>支付方式：</span><em>微信支付</em></li>
            <li><span>支付金额：</span><em class="price">￥{{totalAmount}}</em></li>
          </ul>
          <div class="tradeOperation">


            <a  v-on:click="toOrderDetail()">
              查看订单
            </a>

            <a v-on:click="toIndex()">
              回首页
            </a>

          </div>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
  import store from '../../service/store'
  import axios from 'axios'
    export default {
        name: "tradeSuccessful",
      data(){
          return{
            orderId:'',
            orderNumber:'',
            createTime:'',
            totalAmount:''
          }
      },
      methods:{
        toOrderDetail(){
          this.$router.push({path:'orderDetails',query:{"orderId":this.orderId}})
        },
        toIndex(){
          if(store.isDev()){
            this.$router.push("index")
          }else{
            if(store.judge()==1){
              window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
                "code": "91",
                "index":1,
                "url":store.getNextAddress()+"index"
              });
            }else if(store.judge()==0){
              window.androidXingJiApp.postMessage(JSON.stringify({
                "code": "91",
                "index":1,
                "url":store.getNextAddress()+"index"}));
            }
          }

        }

      },
      mounted(){

          var _this=this;
          _this.orderId=_this.$route.query.orderId
        axios.post(store.getAddress()+'/api/wxapp/order/details',{
          "uid":store.fetch("uid"),
          "orderId":_this.orderId
        }).then(function (response) {
          _this.orderNumber=response.data.data.orderNumber;
          _this.createTime=response.data.data.createTime;

          _this.totalAmount=response.data.data.totalAmount;

        }).catch(function (error) {
          console.log(error)
        })

      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/threeLevel.css";
</style>
