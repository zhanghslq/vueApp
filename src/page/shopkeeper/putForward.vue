<template>
    <div>
      <!--头部 开始-->
      <header>

        <a v-on:click="toBack()" class="returnBtn"></a>

        提现
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="putForward">
          <div class="putTop">
            <p>可提现金额(元)</p>
            <span>{{amount}}</span>
            <em>提现将于次月10日前转入您的银行卡</em>
          </div>
          <div class="putMain">
            <a href="javascript:void(0)">
              <h4>店铺收益</h4>
              <i></i>
              <span>0元</span>
            </a>
            <router-link to="rewardTask">
              <h4>任务奖励</h4>
              <em></em>
              <span>0元</span>
            </router-link>

          </div>
          <div class="putMain">
           <router-link to="putForwardRecord">
             <h4>已提现金额</h4>
             <em></em>
             <span>{{usedMoney}}元</span>
           </router-link>
          </div>
          <div class="putMain">
           <router-link to="editBankCard" >
             <h4>{{message}}</h4>
             <em></em>
           </router-link>
          </div>
          <a  class="putBtn" v-on:click="requestMoney()">提现</a>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
  import 'vue-layer-mobile/need/layer.css'
  import axios from 'axios'
  import store from '../../service/store'
    export default {
        name: "putForward",
      data(){
          return{
            message:'提现信息补全',
            cardId:'',
            //可提现金额
            amount:0,
            usedMoney:0,
            cardNumber:0

          }
      },
      methods:{
          toBack(){
            if(store.isDev()){
              this.$router.push(-1)
            }else{
              if(store.judge()==0){
                window.androidXingJiApp.postMessage(JSON.stringify({
                  "code": "91",
                  "index":5,
                  "url":store.getNextAddress()+"shopkeeperPage"}));
              }else if(store.judge()==1){
                window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
                  "code": "99",
                });
              }
            }
          },
        requestMoney(){
          let _this=this;
          if(!_this.amount>0){
            _this.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: '无可提现金额，请稍后再试',
              time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })
          }else if(_this.cardNumber==0||_this.cardNumber==''||_this.cardNumber==undefined){
            _this.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: '请添加银行卡信息',
              time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })
          }else{
            this.$layer.dialog({
              title: ['取消提现', 'background:skyblue'], // 第一个是标题内容  第二个是标题栏的style(可以为空)
              content: '确定要提现到'+_this.cardNumber+'吗，提现后不可撤销',
              contentClass: 'className',
              btn: ['取消','确定'],
              //   time: 2000
            })
            // 如果有btn
              .then(function (res){
                // res为0时是用户点击了左边  为1时用户点击了右边

                if(res==1){//确认取消订单
                  console.log("确认")
                  axios.post(store.getAddress()+"/api/wxapp/account/addWithdrawRequest",{
                    "uid":store.fetch("uid"),
                    "requestType":2,
                    "referBankId":_this.cardId,
                    "amount":_this.amount
                  }).then(function (response) {
                    if(response.data.code==200){
                      _this.$layer.toast({
                        icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
                        content: '申请提现成功',
                        time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
                      })
                    }
                  }).catch(function (error) {
                    console.log(error)
                  })

                }else{//取
                  console.log("取消")
                }
              })

          }
        }
      },
      created(){
          let _this=this;
          axios.post(store.getAddress()+'/api/wxapp/account/withdrawInfo',{
            "uid":store.fetch("uid")
          }).then(function (response) {
            if(response.data.code==200){
              _this.amount=response.data.data.referralBlance
              _this.usedMoney=response.data.data.referralRequestBalance
            }else{
              console.log(response)
            }
          }).catch(function (error) {
            console.log(error)
          })
      },
      mounted(){

        let cardId=this.$route.query.cardId
        let cardNumber=this.$route.query.cardNumber

        if(cardId!=null&&cardId!=undefined&&cardId!=''){
            this.cardId=cardId
            this.cardNumber=cardNumber
            this.message=cardNumber
        }
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/fragmentary.css";
</style>
