<template>
    <div>
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        订单详情
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="orderDetails">
          <div class="orderDetTop">
            <div class="topTitle"><em></em><span>{{statusName}}</span></div>

            <div class="orderNum">
              <p>订单编号：<em id="orderNumber">{{orderNumber}}</em></p>

              <a v-on:click="copyBoard()" class="copy">复制</a>
            </div>
            <div class="orderNum">
              <p>付款时间：<em>{{createTime}}</em></p>
            </div>
          </div>

          <div class="expressMain" v-if="expressCompanyName!=''">
            <div class="expressInfoIng">
              <span>{{expressCompanyName}}</span>　
              <em>{{shipOrderNumber}}</em>
            </div>

          <br/>
            <a v-for="(item,index) in expressList">
              <div class="expressMainLeft">
                <em></em>
                <p>{{item.context}}</p>
                <span>{{item.time}}</span>
              </div>
              <div class="expressMainRight"></div>
            </a>
          </div>
          <div class="addressInfo">
            <em class="addreeIcon"></em>
            <div class="addreeText">
              <div class="textName">
                <em>{{deliveryAddress.consignee}}</em>
                <span>{{deliveryAddress.mobile}}</span>
              </div>
              <p>收货地址：{{deliveryAddress.detailAddress}}</p>
            </div>
          </div>
          <div class="commodity">
            <div class="commodityTitle">品牌商山东威海发货（包邮）</div>
            <div class="commodDetail" v-for="(product,index) in lines">
              <div class="detailLeft"><img :src="product.goodsTitleImg"></div>
              <div class="detailRight">
                <div class="rightTop">
                  <p>{{product.goodsTitle}}</p>
                  <span>￥<em>{{product.price}}</em></span>
                </div>
                <div class="rightNum">X {{product.quantity}}</div>
              </div>
            </div>
            <p><span>发货方式</span> <em>快递：0元（包邮)</em></p>
            <p><span>订单总计</span> <em>￥{{totalAmount}}</em></p>
            <p><span>会员减免</span> <em>￥0.09</em></p>
            <p><span>实付金额</span> <em class="priceNum">￥{{totalAmount}}</em></p>
            <p><span>付款方式</span> <em>微信支付</em></p>
          </div>
          <a href="#" class="contactService">联系客服</a>
        </div>
      </main>
    </div>
</template>

<script>
  import store from '../../service/store'
  import axios from 'axios'
  import Clipboard from 'clipboard'
    export default {
        name: "orderDetails",
      data(){
          return{
            orderNumber:'',
            createTime:'',
            statusName:'',
            lines:[],
            payTimeout:'',
            deliveryAddress:{},
            totalAmount:'',
            expressCompanyName:'',
            expressList:[],

            shipOrderNumber:'',
            payTime:'',
          }
      },
      methods:{
        copyBoard(){
          $("#copyBoard").text();
          let clipboard = new Clipboard('#codeBtn');
          clipboard.on("success", function(e){

            e.clearSelection();

            console.log("复制成功")
          });
          clipboard.on("error", function(e){

          });

        }
      },
      mounted(){
          var _this=this;
        axios.post(store.getAddress()+'/api/wxapp/order/details',{
          "uid":store.fetch("uid"),
          "orderId":_this.$route.query.orderId
        })
          .then(function (response) {
            _this.orderNumber=response.data.data.orderNumber;
            _this.createTime=response.data.data.createTime;
            _this.statusName=response.data.data.statusName;
            _this.lines=response.data.data.lines;
            _this.payTimeout=response.data.data.payTimeout;
            _this.deliveryAddress=response.data.data.deliveryAddress;
            _this.totalAmount=response.data.data.totalAmount;
            _this.expressCompanyName=response.data.data.expressCompanyName;
            _this.expressList=response.data.data.expressList;
            _this.shipOrderNumber=response.data.data.shipOrderNumber;
            _this.payTime=response.data.data.payTime;


          })
          .catch(function (error) {
            console.log(error);
          })
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
