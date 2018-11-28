<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        退款详情
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="orderDetails">
          <div class="orderDetTop refund">
            <div class="topTitle"><span>{{refundDetail.handleStatusName}}</span></div>
            <div class="orderNum">
              <p>{{refundDetail.applyForTime}}</p>
            </div>
          </div>
          <ul class="refundMoney">
            <li><span>退款总金额</span><em class="total">￥{{order.totalAmount}}</em></li>
            <li><span>退款方式</span><em>￥{{refundDetail.refundTypeName}}</em></li>
          </ul>
          <div class="commodity">
            <div class="commodityTitle">退款信息</div>
            <div class="commodDetail" v-for="(item,index) in order.lines" :key="index">
              <div class="detailLeft"><img :src="item.goodsTitleImg"></div>
              <div class="detailRight">
                <div class="rightTop">
                  <p>{{item.goodsTitle}}</p>
                </div>
              </div>
            </div>
            <p><span>退款原因</span> <em>{{refundDetail.refundRemark}}</em></p>

            <p><span>支付时间</span> <em>{{refundDetail.applyForTime}}</em></p>
            <!--<p><span>退款编号</span> <em>176381628792909808</em></p>-->
          </div>
          <div class="refundBtn">
            <router-link to="service">
              <em class="seller"></em><span>联系卖家</span>
            </router-link>
            <router-link to="service">
              <em class="onLine"></em><span>在线客服</span>
            </router-link>
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
        name: "orderDetailsRefund",
      data(){
          return{
            orderId:'',
            order:{},
            refundDetail:{}

          }
      },
      methods:{

      },
      mounted(){
          var _this=this;
          this.orderId=this.$route.query.orderId
        axios.post(store.getAddress()+'/api/wxapp/order/details',{
          "uid":store.fetch("uid"),
          "orderId":_this.orderId
        }).then(function (response) {
          if(response.data.code==200){
            _this.order=response.data.data
            if(response.data.data.hasRefund){
              _this.refundDetail=response.data.data.refundDetails
            }else{
              _this.refundDetail=response.data.data.returnDetails
            }



          }
        }).catch(function (error) {
            console.log(error)
        })
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
