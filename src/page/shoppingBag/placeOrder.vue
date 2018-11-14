<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        提交订单
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="placeOrderMain">
          <router-link to="editAddress" :to="{name:'editAddress',query:{'id':choseAddress.id,'skuId':skuId,'quantity':quantity}}">
            <a  class="addressInfo">
              <em class="addreeIcon"></em>
              <div class="addreeText">
                <div class="textName">
                  <em>{{choseAddress.consignee}}</em>
                  <span>{{choseAddress.mobile}}</span>
                </div>
                <p>收货地址：{{choseAddress.provinceName+choseAddress.cityName
                  +choseAddress.areaName+choseAddress.detailAddress}}</p>
              </div>
              <em class="intoIcon"></em>
            </a>
          </router-link>
          <div class="orderMain" v-for="(item,index) in listItems">
            <div class="orderTitle">
              <em>订单{{index+1}}:</em>
              <span>{{item.channelName}}</span>
            </div>
            <div class="orderDetail" v-for="(ite,inde) in item.listProducts">
              <div class="detailLeft"><img :src="ite.goodsTitleImg"></div>
              <div class="detailRight">
                <div class="rightTop">
                  <p>{{ite.goodsTitle}}</p>
                  <span>￥<em>{{ite.actualPrice}}</em></span>
                </div>
                <div class="rightNum">X {{ite.quantity}}</div>
              </div>
            </div>
            <div class="orderMode">
              <div class="modeLeft">发货方式</div>
              <span class="express">快递（包邮）：<em>0</em>元</span>
            </div>
            <div class="orderMode">
              <div class="modeLeft">订单总计</div>
              <span class="price">￥<em>{{item.groupTotalAmount}}</em></span>
            </div>
          </div>

          <div class="preferential">
            <div class="preferenTitle">优惠减免</div>
            <a href="#" class="coupons">
              <span class="couponsList">优惠券</span>
              <em class="prompt">适用优惠券商品139元</em>
              <div class="apply">
                <span>暂无适用优惠券</span>
                <em></em>
              </div>
            </a>
            <div class="offset">
              <span class="couponsList">猩际X币抵现</span>
              <div class="apply">
                <span>暂无可用猩际X币</span>
                <label class="ui-switch">
                  <input type="checkbox">
                </label>
              </div>
            </div>
          </div>
          <div class="paymentMethod">
            <div class="preferenTitle">选择支付方式</div>
            <div class="paymentInfo">
              <img src="../../images/secondLevel/paymentIcon.png">
              <span>微信支付</span>
              <em></em>
            </div>
          </div>
          <div class="settlement">
            <span class="setTitle">微信支付</span>
            <p>总计<span>￥<em>{{totalAmount}}</em></span></p>
            <a v-on:click="payMoney()">
              去付款
            </a>

          </div>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>

  function test5() {
    alert("进入外部的test5")
  }
  import store from '../../service/store'
  import axios from 'axios'


    export default {
      name: "placeOrder",
      data(){
          return{
            defaultAddress:{},
            addressId:'',
            listItems:[],
            totalAmount:'',
            choseAddress:{},
            payStr:'',
            orderId:'',


            skuId:'',//立即购买的skuId
            quantity:'',//立即购买的商品数量

          }
      },
      updated(){
        if(JSON.stringify(this.choseAddress)=='{}'){
          this.choseAddress=this.defaultAddress
        }
      },
      methods:{
        test(){
          alert("进入  test（）（）")
        },
        test2:function () {
          alert("jinru function ")
        },
        payMoney(){//去付款，需要把订单提交，然后取参数交给app
          var self=this;
          if(this.choseAddress.id==''||this.choseAddress.id==undefined||this.choseAddress.id==null){
            self.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: "请选择收货地址",
              time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })
          }else{
            axios.post(store.getAddress()+'/api/wxapp/order/submit', {
              "uid": store.fetch("uid"),
              "consigneeId":this.choseAddress.id,
              "transType":101
            }).then(function (response) {

              let res= response.data.data.request;
              self.payStr=JSON.stringify(res)
              self.orderId=response.data.data.orderId

              if(store.judge()==1){//等于1 代表ios
                window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
                  "code": "83",
                  "payStr":JSON.stringify(res),
                });
              }else if(store.judge()==0){
                window.androidXingJiApp.postMessage(JSON.stringify({
                  "code": "83",
                  "payStr":JSON.stringify(res),
                }));
              }
            }).catch(function (error) {
              alert(error)
            })
          }



        },
        appWxPayResult(result){//等待app回调，0代表失败，1代表成功
          alert("进入回调")
            if(result==1){//支付成功
              alert("支付成功")
              this.$router.push({ name: 'tradeSuccessful',
                query: {
                  "orderId":this.orderId,
                  "payMoney": this.totalAmount,

                }
              });

            }else{//支付失败
              alert("支付失败")
              this.$router.push({ name: 'tradeFail',
                query: {
                  "orderId":this.orderId,
                  "shouldPayMoney": this.totalAmount,
                }
              });
            }
        },

        getData(fromType,lines){//获取数据
          var self = this;
          axios.post(store.getAddress()+'/api/wxapp/order/prepare', {
            "uid": store.fetch("uid"),
            "fromType":fromType,
            "lines":lines
          })
            .then(function (response) {
              if(response.data.code==200){
                self.defaultAddress=response.data.data.defaultAddress;
                self.totalAmount=response.data.data.totalAmount;
                self.listItems=response.data.data.listItems;


                  let chooseId=localStorage.getItem("chooseAddressId");
                  console.log("choseId======"+chooseId)
                  if(chooseId!=undefined && chooseId!=null && chooseId!=''){
                      console.log("chooseId=="+chooseId)
                      axios.post(store.getAddress()+'/api/wxapp/deliveryAddress/item', {
                        "id": chooseId
                      })
                      .then(function (response) {
                        if(response.data.code==200){
                          self.choseAddress=response.data.data
                          localStorage.removeItem("chooseAddressId")
                        }else {
                          console.log("请检查")
                        }

                      })
                      .catch(function (error) {
                        console.log(error)
                      })
                  }else {
                    self.choseAddress=self.defaultAddress
                  }


              }else {
                console.log("请检查重试")
              }

            })
            .catch(function (error) {
              console.log("请检查重试")
            })
        }
      },
      beforeRouteLeave(from,to,next){//离开之前，判断是否是去地址页

        next()
      },
      beforeRouteEnter(from,to,next){//进入之前，判断是否是从地址页回来的


        next()
      },
      mounted(){
        let skuId=this.$route.query.skuId;

        let quantity=this.$route.query.quantity;
        this.skuId=skuId;
        this.quantity=quantity;

        if(skuId==undefined||skuId==''||skuId==null){
          this.getData(1,"[]")
        }else {
          this.getData(2,"[{'skuId':"+skuId+',quantity:'+quantity+"}]")
        }

        window['appWxPayResult'] = (result) => {
        alert("进入windows方法")
          this.appWxPayResult(result)
        }

      }
    }
</script>

<style scoped>
@import "../../css/other/secondLevel.css";
</style>
