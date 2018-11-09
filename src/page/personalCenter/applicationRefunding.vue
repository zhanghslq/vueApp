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
            <a href="#">
              <div class="refundmLeft">
                <h5>退款原因</h5>
              </div>
              <div class="refundmRight" id="reason">
                <span class="pleSel">请选择</span>
                <em style="margin-top: 0.24rem;"></em>
              </div>
              <div class="refundAmount">
                <h5>退款金额：</h5>
                <span>￥<em>19</em>.90</span>
              </div>
            </a>
          </div>
          <div class="mostRefunds">
            <p>最多 ￥<span>18.75</span>，含发货邮费￥<span>0.00</span></p>
          </div>
          <div class="refundsExplain">
            <div class="explainTitle">退款说明：</div>
            <textarea placeholder="选填"></textarea>
          </div>
          <div class="submissionBtn">
            <a href="#" >提交</a>
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
              <li><span>数量不够</span><em class="Cur"></em></li>
              <li><span>数量不够数量不够数量不够</span><em></em></li>
              <li><span>数量不够数量不够数量不够</span><em></em></li>
              <li><span>数量不够数量不够数量不够</span><em></em></li>
              <li><span>数量不够数量不够数量不够</span><em></em></li>
              <li><span>数量不够数量不够数量不够</span><em></em></li>
              <li><span>数量不够数量不够数量不够</span><em></em></li>
            </ul>
          </div>
        </div>
      </div>
      <!--弹层结束-->
    </div>
</template>

<script>
    export default {
        name: "applicationRefunding",
      methods:{
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
     refundExchange(){
      $(".refundMain #refunExchange").on("click",function(){
        $(".elasticBox").show();
        $(".elasticBox .boxContent .exchangeInfo").show();
      });
      $(".elasticBox .closeBtn").on("click",function(){
        $(".elasticBox").hide();
        $(".elasticBox .boxContent .exchangeInfo").hide();
      });
    }
      },
      mounted(){
        this.refundState();
        this.refundExchange();
        this.refundReason();
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
@import "../../css/other/personalCenter.css";
</style>
