<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        退款进度
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main >
        <scroller style="margin-top: 1rem" :on-infinite="infinite"  :on-refresh = "refresh" ref="refunedScroller" :noDataText="noDataText">
        <div class="refurdMain">

          <div class="noTimes" style="display: none;">
            <img src="../../images/threeLevel/refundPic.png" class="refurdNoPic">
            <p>暂无退款订单</p>
          </div>
          <div class="optionMain">
            <ul class="opContInfo">
              <li>
                <div class="infoTop">
                  <span>2018-06-26 23:24:11</span>
                  <em>退货退款</em>
                  <em>退款成功</em>
                </div>
                <a href="#" class="infoMiddle">
                  <div class="middleImg"><img src="../../images/temporary/commodity9.png"></div>
                  <div class="middleDet">
                    <div class="middleTitle">
                      <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                    </div>
                    <div class="orderNum">X1</div>
                  </div>
                </a>
                <div class="infoBottom">
                  <a href="javascript:void(0);" class="fourthBtn">查看详情</a>
                </div>
              </li>
              <li>
                <div class="infoTop">
                  <span>2018-06-26 23:24:11</span>
                  <em>仅退款</em>
                  <em>退款成功</em>
                </div>
                <a href="#" class="infoMiddle">
                  <div class="middleImg"><img src="../../images/temporary/commodity9.png"></div>
                  <div class="middleDet">
                    <div class="middleTitle">
                      <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                    </div>
                    <div class="orderNum">X1</div>
                  </div>
                </a>
                <div class="infoBottom">
                  <a href="javascript:void(0);" class="fourthBtn">查看详情</a>
                </div>
              </li>
              <li>
                <div class="infoTop">
                  <span>2018-06-26 23:24:11</span>
                  <em>仅退款</em>
                  <em>退款成功</em>
                </div>
                <a href="#" class="infoMiddle">
                  <div class="middleImg"><img src="../../images/temporary/commodity9.png"></div>
                  <div class="middleDet">
                    <div class="middleTitle">
                      <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                    </div>
                    <div class="orderNum">X1</div>
                  </div>
                </a>
                <div class="infoBottom">
                  <a href="javascript:void(0);" class="fourthBtn">查看详情</a>
                </div>
              </li>
              <li>
                <div class="infoTop">
                  <span>2018-06-26 23:24:11</span>
                  <em>仅退款</em>
                  <em>退款成功</em>
                </div>
                <a href="#" class="infoMiddle">
                  <div class="middleImg"><img src="../../images/temporary/commodity9.png"></div>
                  <div class="middleDet">
                    <div class="middleTitle">
                      <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                    </div>
                    <div class="orderNum">X1</div>
                  </div>
                </a>
                <div class="infoBottom">
                  <a href="javascript:void(0);" class="fourthBtn">查看详情</a>
                </div>
              </li>
              <li>
                <div class="infoTop">
                  <span>2018-06-26 23:24:11</span>
                  <em>仅退款</em>
                  <em>退款成功</em>
                </div>
                <a href="#" class="infoMiddle">
                  <div class="middleImg"><img src="../../images/temporary/commodity9.png"></div>
                  <div class="middleDet">
                    <div class="middleTitle">
                      <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                    </div>
                    <div class="orderNum">X1</div>
                  </div>
                </a>
                <div class="infoBottom">
                  <a href="javascript:void(0);" class="fourthBtn">查看详情</a>
                </div>
              </li>
              <li>
                <div class="infoTop">
                  <span>2018-06-26 23:24:11</span>
                  <em>仅退款</em>
                  <em>退款成功</em>
                </div>
                <a href="#" class="infoMiddle">
                  <div class="middleImg"><img src="../../images/temporary/commodity9.png"></div>
                  <div class="middleDet">
                    <div class="middleTitle">
                      <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                    </div>
                    <div class="orderNum">X1</div>
                  </div>
                </a>
                <div class="infoBottom">
                  <a href="javascript:void(0);" class="fourthBtn">查看详情</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        </scroller>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
  import axios from 'axios'
  import store from '../../service/store'
    export default {
        name: "refundProgress",
      data(){
          return{
            noDataText:'我也是有底线的'
          }
      },
      methods:{
        infinite(){

        },
        refresh(){



        }
      },
      mounted(){
        axios.post('',{})
          .then(function (response) {
            
          })

      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
