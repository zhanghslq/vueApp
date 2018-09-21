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
          <a href="#" class="addressInfo">
            <em class="addreeIcon"></em>
            <div class="addreeText">
              <div class="textName">
                <em>李宗森</em>
                <span>13811203294</span>
              </div>
              <p>收货地址：北京市朝阳区百子湾路32号院北区3号楼B座505</p>
            </div>
            <em class="intoIcon"></em>
          </a>
          <div class="orderMain">
            <div class="orderTitle">
              <em>订单1</em>
              <span>品牌商杭州发货</span>
            </div>
            <div class="orderDetail">
              <div class="detailLeft"><img src="../../images/temporary/9.jpg"></div>
              <div class="detailRight">
                <div class="rightTop">
                  <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                  <span>￥<em>19</em>.90</span>
                </div>
                <div class="rightNum">X 1</div>
              </div>
            </div>

            <div class="orderMode">
              <div class="modeLeft">发货方式</div>
              <span class="express">快递（包邮）：<em>0</em>元</span>
            </div>
            <div class="orderMode">
              <div class="modeLeft">订单总计</div>
              <span class="price">￥<em>39</em>.80</span>
            </div>
          </div>
          <div class="orderMain">
            <div class="orderTitle">
              <em>订单2</em>
              <span>品牌商杭州发货</span>
            </div>
            <div class="orderDetail">
              <div class="detailLeft"><img src="../../images/temporary/9.jpg"></div>
              <div class="detailRight">
                <div class="rightTop">
                  <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                  <span>￥<em>19</em>.90</span>
                </div>
                <div class="rightNum">X 1</div>
              </div>
            </div>
            <div class="orderMode">
              <div class="modeLeft">发货方式</div>
              <span class="express">快递（包邮）：<em>0</em>元</span>
            </div>
            <div class="orderMode">
              <div class="modeLeft">订单总计</div>
              <span class="price">￥<em>39</em>.80</span>
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
              <span>支付宝支付</span>
              <em></em>
            </div>
          </div>
          <div class="settlement">
            <span class="setTitle">支付宝支付</span>
            <p>总计<span>￥<em>139.99</em></span></p>
            <a href="#">去付款</a>
          </div>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
  import store from '../../service/store'
    export default {
      name: "placeOrder",
      data(){
          return{

          }
      },
      methods:{

      },
      mounted(){
          let ids=store.fetch("placeOrderChooseIds");
          for (let id of ids) {

          }
      }
    }
</script>

<style scoped>
@import "../../css/other/secondLevel.css";
</style>
