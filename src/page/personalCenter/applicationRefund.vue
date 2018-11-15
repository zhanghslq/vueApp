<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        申请退款
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="selectTypeMain">
          <div class="productSelect">
            <a href="#" class="infoMiddle">
              <div class="middleImg"><img src="../../images/temporary/commodity9.png"></div>
              <div class="middleDet">
                <div class="middleTitle">
                  <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                </div>
                <div class="orderNum">X1</div>
              </div>
            </a>
          </div>
          <div class="refundMain">
            <a >
              <div class="refundmLeft">
                <h5>货物状态</h5>
              </div>
              <div class="refundmRight" id="state">
                <span class="pleSel" id="chooseState">请选择</span>
                <em style="margin-top: 0.24rem;"></em>
              </div>
            </a>
            <a >
              <div class="refundmLeft">
                <h5>退款原因</h5>
              </div>
              <div class="refundmRight" id="reason">
                <span class="pleSel" id="chooseReason">请选择</span>
                <em style="margin-top: 0.24rem;"></em>
              </div>
              <div class="refundAmount">
                <h5>退款金额：</h5>
                <span>￥<em>{{totalAmount}}</em></span>
              </div>
            </a>
          </div>
          <div class="mostRefunds">
            <p>最多 ￥<span>18.75</span>，含发货邮费￥<span>0.00</span></p>
          </div>
          <div class="refundsExplain">
            <div class="explainTitle">退款说明：</div>
            <textarea placeholder="选填" v-model="refundText"></textarea>
          </div>
          <div class="submissionBtn">
            <a v-on:click="submitRefund()">提交</a>
          </div>
        </div>
      </main>
      <!--中间 结束-->
      <!--弹层开始-->
      <div class="elasticBox">
        <div class="blackBag"></div>
        <div class="boxContent">
          <!--退款原因-->
          <div class="reasonInfo">
            <div class="textTitle">
              退款原因
              <em class="closeBtn"></em>
            </div>
            <ul class="refundPick">
              <li><span>数量不够</span><em  ></em></li>
              <li><span>数量不够数量不够数量不够</span><em ></em></li>
              <li><span>数量不够数量不够数量不够</span><em > </em></li>

            </ul>
          </div>
          <!--货物状态-->
          <div class="stateInfo">
            <div class="textTitle">
              货物状态
              <em class="closeBtn"></em>
            </div>
            <ul class="refundPick">
              <li><span>未收到货</span><em ></em></li>
              <li><span>已收到货</span><em></em></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

  import 'vue-layer-mobile/need/layer.css'
  import axios from 'axios'
  import store from '../../service/store'
    export default {
      name: "applicationRefund",
      data(){
        return{
          productStatus:'',//货物状态
          backReason:'',//退款原因
          refundText:'',
          productList:[],//订单包含的商品列表
          totalAmount:'',
          orderId:'',
          status:2,

        }
      },
      methods:{
        submitRefund(){//提交申请退款的请求
          var _this=this;
          if(_this.productStatus==''){
            $(".refundMain #state").click();
            _this.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: '请先选择商品状态',
              time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })
          }else if(_this.backReason==''){
            $(".refundMain #reason").click()
            _this.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: '请先选择退货原因',
              time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })

          }else{
            axios.post(store.getAddress()+"/api/wxapp/order/support",{
              "uid":store.fetch("uid"),
              "orderId":_this.orderId,
              "op":_this.status,
              "remark":_this.backReason+"   备注："+_this.refundText
            }).then(function (response) {
              if(response.data.code==200){
                _this.$layer.toast({
                  icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
                  content: '退款申请已提交',
                  time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
                })
                _this.$router.push("refundProgress")
              }else{
                _this.$layer.toast({
                  icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
                  content: response.data.message,
                  time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
                })
              }
            }).catch(function (error) {
              console.log(error)
            })

          }


        },
         refundReason(){
          $(".refundMain #reason").on("click",function(){
            $(".elasticBox").show();
            $(".elasticBox .boxContent .reasonInfo").show();
          });
          $(".elasticBox .closeBtn").on("click",function(){
            $(".elasticBox").hide();
            $(".elasticBox .boxContent .reasonInfo").hide();
          });
    },
         refundState(){
          $(".refundMain #state").on("click",function(){
            $(".elasticBox").show();
            $(".elasticBox .boxContent .stateInfo").show();
          });
          $(".elasticBox .closeBtn").on("click",function(){
            $(".elasticBox").hide();
            $(".elasticBox .boxContent .stateInfo").hide();
          });
        },
        getOrder(){

        }


      },
      destroyed(){
        $(".stateInfo .refundPick li span em").unbind()
        $(".reasonInfo .refundPick li span em").unbind()
      },
      updated(){
       /* $(".reasonInfo .refundPick li  em").click(function () {
          console.log(this)
          $(".reasonInfo .refundPick li  em").each(function () {
            $(this).removeClass("Cur")
          })
          $(this).addClass("Cur")

          console.log($(this).text())
        })*/
      },
      mounted(){
        var _this=this;

        this.orderId=this.$route.query.orderId;
        this.totalAmount=this.$route.query.totalAmount;
        this.refundReason();
        this.refundState();

        $(".reasonInfo .refundPick li  em").click(function () {

          $(".reasonInfo .refundPick li  em").each(function () {
            $(this).removeClass("Cur")
          })
          $(this).addClass("Cur")

          _this.backReason=$(this).prev("span").text()

          $("#chooseReason").html(_this.backReason)

        })


        $(".stateInfo .refundPick li  em").click(function () {
          $(".stateInfo .refundPick li  em").each(function () {
            $(this).removeClass("Cur")
          })
          $(this).addClass("Cur")

          _this.productStatus=$(this).prev("span").text()
          if(_this.productStatus=='已收到货'){
            _this.status=2
          }else{
            _this.status=1;
          }

          $("#chooseState").html(_this.productStatus)

        })
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
