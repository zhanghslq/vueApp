<template>
    <div>
      <!--头部 开始-->
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
              <h3>付款失败</h3>
              <p>请在<span id="btn">{{limitTime}}</span>内完成付款</p>
            </div>
          </div>
          <div class="amountMoney">
            <p>应付金额：<em>￥{{shouldPayMoney}}</em></p>
            <span>订单总计：<em>￥{{shouldPayMoney}}</em></span>
            <span>会员减免：<em>￥0.00</em></span>
          </div>
          <div class="paymentMain">
            <div class="payTitle">选择支付方式</div>
            <div class="payCont">
              <div class="payLeft"><span></span> <em>微信支付</em></div>
              <div class="payRight"></div>
            </div>
          </div>
          <a  class="paymentBtn" v-on:click="payMoney()">去付款</a>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
  import store from '../../service/store'
  import axios from 'axios'
    export default {
        name: "tradeFail",
      data(){
        return{
          orderId:'',
          totalAmount:'',
          paySign:'',
          payStr:'',
          limitTime:'30'
        }
      },
      methods:{
        payMoney(){//重新去付款，直接重新取支付参数，然后取参数交给app
          var self=this;
          axios.post(store.getAddress()+'/api/wxapp/order/repay', {
            "uid": store.fetch("uid"),
            "orderId":self.orderId,
            "transType":101
          }).then(function (response) {

            let res= response.data.data.request;
            self.payStr=JSON.stringify(res)
            self.orderId=response.data.data.orderId
            if(store.judge()==1){//代表是ios
              window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
                "code": "83",
                "payStr":JSON.stringify(res),
              });
            }

          }).catch(function (error) {
            alert(error)
          })


        },
        appWxPayResult(result){//等待app回调，0代表失败，1代表成功
          if(result==1){//支付成功
            this.$router.push({ name: 'tradeSuccessful',
              query: {
                "payMoney": this.totalAmount,

              }
            });
          }else{//支付失败

            this.$router.push({ name: 'tradeFail',
              query: {
                "orderId":this.orderId,
                "shouldPayMoney": this.totalAmount,
                "paySign":this.payStr
              }
            });
          }
        },
      },
      mounted:function () {
        this.orderId=this.$route.query.orderId;
        this.totalAmount=this.$route.query.shouldPayMoney;


        var x = 30,
        interval;
        window.onload = function() {
          var d = new Date("1111/1/1,0:" + x + ":0");
          interval = setInterval(function() {
            var m = d.getMinutes();
            var s = d.getSeconds();
            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;
            btn.innerHTML = m + ":" + s;
            if (m == 0 && s == 0) {
              clearInterval(interval);
              return;
            }
            d.setSeconds(s - 1);
          }, 1000);
        }


        window['appWxPayResult'] = (result) => {
          this.appWxPayResult(result)
        }
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/threeLevel.css";
</style>
