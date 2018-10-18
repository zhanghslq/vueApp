<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        我的订单
        <a href="#" class="searchBtn"></a>
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="myOrderMain">
          <div class="orderOption" id="optionTab">
            <div class="optionNav fix">
              <a href="javascript:void(0);" class="Cur">全部</a>
              <a href="javascript:void(0);">待付款</a>
              <a href="javascript:void(0);">待发货</a>
              <a href="javascript:void(0);">待收货</a>
              <a href="javascript:void(0);">交易成功</a>
            </div>
            <div class="optionCont">
              <div class="optionMain" style="display: block;">
                <ul class="opContInfo">
                  <li>
                    <div class="infoTop">
                      <span>2018-06-26 23:24:11</span>
                      <em>等待买家付款</em>
                    </div>
                    <a href="#" class="infoMiddle">
                      <div class="middleImg"><img src="../../images/temporary/commodity9.png"></div>
                      <div class="middleDet">
                        <div class="middleTitle">
                          <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                          <span>￥19.90</span>
                        </div>
                        <div class="orderNum">X1</div>
                      </div>
                    </a>
                    <div class="timePrice">
                      <div class="total"><em>总计：</em><span>￥19.90</span></div>
                      <div class="discount">优惠：<em>￥0.00</em></div>
                    </div>
                    <div class="infoBottom">
                      <a href="javascript:void(0);" class="cancelBtn">取消</a>
                      <a href="#" class="toPay"><span>去付款</span><em id="btn0">30:00</em></a>
                    </div>
                  </li>
                  <li>
                    <div class="infoTop">
                      <span>2018-06-26 23:24:11</span>
                      <em>交易成功</em>
                    </div>
                    <a href="#" class="infoMiddle">
                      <div class="middleImg"><img src="../../images/temporary/commodity9.png"></div>
                      <div class="middleDet">
                        <div class="middleTitle">
                          <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                          <span>￥19.90</span>
                        </div>
                        <div class="orderNum">X1</div>
                      </div>
                    </a>
                    <div class="timePrice">
                      <div class="total"><em>总计：</em><span>￥19.90</span></div>
                      <div class="discount">优惠：<em>￥0.00</em></div>
                    </div>
                    <div class="infoBottom">
                      <a href="javascript:void(0);" class="thirdBtn">删除订单</a>
                      <a href="javascript:void(0);" class="thirdBtn">查看物流</a>
                      <a href="javascript:void(0);" class="secondBtn">评价</a>
                    </div>
                  </li>
                  <li>
                    <div class="infoTop">
                      <span>2018-06-26 23:24:11</span>
                      <em>卖家发货</em>
                    </div>
                    <a href="#" class="infoMiddle">
                      <div class="middleImg"><img src="../../images/temporary/commodity9.png"></div>
                      <div class="middleDet">
                        <div class="middleTitle">
                          <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                          <span>￥19.90</span>
                        </div>
                        <div class="orderNum">X1</div>
                      </div>
                    </a>
                    <div class="timePrice">
                      <div class="total"><em>总计：</em><span>￥19.90</span></div>
                      <div class="discount">优惠：<em>￥0.00</em></div>
                    </div>
                    <div class="infoBottom">
                      <a href="javascript:void(0);" class="thirdBtn">删除订单</a>
                      <a href="javascript:void(0);" class="thirdBtn">查看物流</a>
                      <a href="javascript:void(0);" class="secondBtn">评价</a>
                    </div>
                  </li>
                </ul>
                <p class="whole">已显示全部内容</p>
              </div>
              <div class="optionMain">
                <ul class="opContInfo">
                  <li>
                    <div class="infoTop">
                      <a href="javascript:void(0);" class="checkIng"></a>
                      <span>2018-06-26 23:24:11</span>
                      <em>等待买家付款</em>
                    </div>
                    <a href="#" class="infoMiddle">
                      <div class="middleImg"><img src="../../images/temporary/commodity9.png"></div>
                      <div class="middleDet">
                        <div class="middleTitle">
                          <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                          <span>￥19.90</span>
                        </div>
                        <div class="orderNum">X1</div>
                      </div>
                    </a>
                    <div class="timePrice">
                      <div class="total"><em>总计：</em><span>￥19.90</span></div>
                      <div class="discount">优惠：<em>￥0.00</em></div>
                    </div>
                    <div class="infoBottom">
                      <a href="javascript:void(0);" class="cancelBtn">取消</a>
                      <a href="#" class="toPay"><span>去付款</span><em id="btn">30:00</em></a>
                    </div>
                  </li>
                  <li>
                    <div class="infoTop">
                      <a href="javascript:void(0);" class="checkIng checkCur"></a>
                      <span>2018-06-26 23:24:11</span>
                      <em>等待买家付款</em>
                    </div>
                    <a href="#" class="infoMiddle">
                      <div class="middleImg"><img src="../../images/temporary/commodity9.png"></div>
                      <div class="middleDet">
                        <div class="middleTitle">
                          <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                          <span>￥19.90</span>
                        </div>
                        <div class="orderNum">X1</div>
                      </div>
                    </a>
                    <div class="timePrice">
                      <div class="total"><em>总计：</em><span>￥19.90</span></div>
                      <div class="discount">优惠：<em>￥0.00</em></div>
                    </div>
                    <div class="infoBottom">
                      <a href="javascript:void(0);" class="cancelBtn">取消</a>
                      <a href="#" class="toPay"><span>去付款</span><em id="btn1">30:00</em></a>
                    </div>
                  </li>
                </ul>
                <p class="whole">已显示全部内容</p>
              </div>
              <div class="optionMain">
                <ul class="opContInfo">
                  <li>
                    <div class="infoTop">
                      <span>2018-06-26 23:24:11</span>
                      <em>等待买家付款</em>
                    </div>
                    <a href="#" class="infoMiddle">
                      <div class="middleImg"><img src="../../images/temporary/commodity9.png"></div>
                      <div class="middleDet">
                        <div class="middleTitle">
                          <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                          <span>￥19.90</span>
                        </div>
                        <div class="orderNum">X1</div>
                      </div>
                    </a>
                    <div class="timePrice">
                      <div class="total"><em>总计：</em><span>￥19.90</span></div>
                      <div class="discount">优惠：<em>￥0.00</em></div>
                    </div>
                    <div class="infoBottom">
                      <a href="javascript:void(0);" class="thirdBtn">提醒发货</a>
                      <a href="javascript:void(0);" class="secondBtn">退款</a>
                    </div>
                  </li>
                  <li>
                    <div class="infoTop">
                      <span>2018-06-26 23:24:11</span>
                      <em>等待买家付款</em>
                    </div>
                    <a href="#" class="infoMiddle">
                      <div class="middleImg"><img src="../../images/temporary/commodity9.png"></div>
                      <div class="middleDet">
                        <div class="middleTitle">
                          <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                          <span>￥19.90</span>
                        </div>
                        <div class="orderNum">X1</div>
                      </div>
                    </a>
                    <div class="timePrice">
                      <div class="total"><em>总计：</em><span>￥19.90</span></div>
                      <div class="discount">优惠：<em>￥0.00</em></div>
                    </div>
                    <div class="infoBottom">
                      <a href="javascript:void(0);" class="thirdBtn">提醒发货</a>
                      <a href="javascript:void(0);" class="secondBtn">退款</a>
                    </div>
                  </li>
                </ul>
                <p class="whole">已显示全部内容</p>
              </div>
              <div class="optionMain">
                <ul class="opContInfo">
                  <li>
                    <div class="infoTop">
                      <span>2018-06-26 23:24:11</span>
                      <em>卖家已发货</em>
                    </div>
                    <a href="#" class="infoMiddle">
                      <div class="middleImg"><img src="../../images/temporary/commodity9.png"></div>
                      <div class="middleDet">
                        <div class="middleTitle">
                          <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                          <span>￥19.90</span>
                        </div>
                        <div class="orderNum">X1</div>
                      </div>
                    </a>
                    <div class="timePrice">
                      <div class="total"><em>总计：</em><span>￥19.90</span></div>
                      <div class="discount">优惠：<em>￥0.00</em></div>
                    </div>
                    <div class="infoBottom">
                      <a href="javascript:void(0);" class="thirdBtn">延长收获</a>
                      <a href="javascript:void(0);" class="thirdBtn">查看物流</a>
                      <a href="javascript:void(0);" class="fourthBtn">确认收货</a>
                    </div>
                  </li>
                </ul>
                <p class="whole">已显示全部内容</p>
              </div>
              <div class="optionMain">
                <ul class="opContInfo">
                  <li>
                    <div class="infoTop">
                      <span>2018-06-26 23:24:11</span>
                      <em>交易成功</em>
                    </div>
                    <a href="#" class="infoMiddle">
                      <div class="middleImg"><img src="../../images/temporary/commodity9.png"></div>
                      <div class="middleDet">
                        <div class="middleTitle">
                          <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                          <span>￥19.90</span>
                        </div>
                        <div class="orderNum">X1</div>
                      </div>
                    </a>
                    <div class="timePrice">
                      <div class="total"><em>总计：</em><span>￥19.90</span></div>
                      <div class="discount">优惠：<em>￥0.00</em></div>
                    </div>
                    <div class="infoBottom">
                      <a href="javascript:void(0);" class="thirdBtn">删除订单</a>
                      <a href="javascript:void(0);" class="thirdBtn">查看物流</a>
                      <a href="javascript:void(0);" class="secondBtn">评价</a>
                    </div>
                  </li>
                </ul>
                <p class="whole">已显示全部内容</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <!--中间 结束-->
      <!--底部 开始-->
      <footer class="memberFooter">
        <a href="index.html"><i class="homePage"></i><span>首页</span></a>
        <a href="#"><i class="find"></i><span>发现</span></a>
        <a href="#"><i class="shopp"></i><span>购物袋</span></a>
        <a href="#"  class="active"><i class="personal"></i><span>个人中心</span></a>
        <a href="#"><i class="shopkeeper"></i><span>我是店主</span></a>
      </footer>
      <!--底部 结束-->
    </div>
</template>

<script>
    export default {
        name: "myOrder",
      methods:{
    /*我的订单*/
    myOrderTab:function (){
    var $li = $('.orderOption .optionNav a');
    var $ul = $('.orderOption .optionCont .optionMain');
    $("#optionTab").css('height',$ul.eq(0).height())
    $li.click(function(){
      var $this = $(this);
      var $t = $this.index();
      $li.removeClass();
      $this.addClass('Cur');
      $ul.css('display','none');
      $ul.eq($t).css('display','block');
      $("#optionTab").css('height',$ul.eq($t).height())
    })
  }
      },
      mounted:function () {
        this.myOrderTab()
        var x = 30,
          interval;
          var d = new Date("1111/1/1,0:" + x + ":0");
          interval = setInterval(function() {
            var m = d.getMinutes();
            var s = d.getSeconds();
            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;
            // btn.innerHTML = m + ":" + s;
            for(var i=0;i < $(".opContInfo li").length;i++){
              $("#btn"+i).html(m + ":" + s);
            }

            if (m == 0 && s == 0) {
              clearInterval(interval);
              return;
            }
            d.setSeconds(s - 1);
          }, 1000);
        }

    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
