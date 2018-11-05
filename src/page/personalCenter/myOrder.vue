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
              <scroller  class="optionMain" style="margin-top: 1.4rem"  :on-infinite="infinite"  :on-refresh = "refresh" ref="allOrder_scroller" :noDataText="noDataText"><!--这里是全部的-->
                <ul class="opContInfo">
                  <li v-for="(order,index) in orderList" :id="order.orderId" v-on:click="goToDetail(order.orderId,order.status)">
                    <div class="infoTop">
                      <span>{{order.createTime}}</span>
                      <em>{{order.statusName}}</em>
                    </div>
                    <a href="#" class="infoMiddle" v-for="(ite,inde) in order.lines">
                      <div class="middleImg"><img :src="ite.goodsTitleImg"></div>
                      <div class="middleDet">
                        <div class="middleTitle">
                          <p>{{ite.goodsTitle}}</p>
                          <span>￥{{ite.price}}</span>
                        </div>
                        <div class="orderNum">X{{ite.quantity}}</div>
                      </div>
                    </a>

                    <div class="timePrice">
                      <div class="total"><em>总计：</em><span>￥{{order.totalAmount}}</span></div>
                      <div class="discount">优惠：<em>￥0.00</em></div>
                    </div>
                    <div class="infoBottom" v-if="order.status==1">
                      <a href="javascript:void(0);" class="cancelBtn" v-on:click="cancelOrder()">取消</a>
                      <a href="#" class="toPay"><span>去付款</span><em id="btn0">30:00</em></a>
                    </div>
                  </li>

                </ul>

              </scroller>
              <scroller class="optionMain" style="margin-top: 1.4rem" :on-infinite="infinite1"  :on-refresh = "refresh1" ref="waitOrder_scroller" :noDataText="noDataText">
                <ul class="opContInfo">
                  <li v-for="(order,index) in orderList1" :id="order.orderId">
                    <div class="infoTop">
                      <span>{{order.createTime}}</span>
                      <em>{{order.statusName}}</em>
                    </div>
                    <a href="#" class="infoMiddle" v-for="(ite,inde) in order.lines">
                      <div class="middleImg"><img :src="ite.goodsTitleImg"></div>
                      <div class="middleDet">
                        <div class="middleTitle">
                          <p>{{ite.goodsTitle}}</p>
                          <span>￥{{ite.price}}</span>
                        </div>
                        <div class="orderNum">X{{ite.quantity}}</div>
                      </div>
                    </a>

                    <div class="timePrice">
                      <div class="total"><em>总计：</em><span>￥{{order.totalAmount}}</span></div>
                      <div class="discount">优惠：<em>￥0.00</em></div>
                    </div>
                    <div class="infoBottom">
                      <a href="javascript:void(0);" class="cancelBtn">取消</a>
                      <a href="#" class="toPay"><span>去付款</span><em id="btn1">30:00</em></a>
                    </div>
                  </li>

                </ul>

              </scroller>
              <scroller class="optionMain" style="margin-top: 1.4rem" :on-infinite="infinite2"  :on-refresh = "refresh2" ref="waitSendProductOrder_scroller" :noDataText="noDataText">
                <ul class="opContInfo">
                  <li v-for="(order,index) in orderList2" :id="order.orderId">
                    <div class="infoTop">
                      <span>{{order.createTime}}</span>
                      <em>{{order.statusName}}</em>
                    </div>
                    <a href="#" class="infoMiddle" v-for="(ite,inde) in order.lines">
                      <div class="middleImg"><img :src="ite.goodsTitleImg"></div>
                      <div class="middleDet">
                        <div class="middleTitle">
                          <p>{{ite.goodsTitle}}</p>
                          <span>￥{{ite.price}}</span>
                        </div>
                        <div class="orderNum">X{{ite.quantity}}</div>
                      </div>
                    </a>

                    <div class="timePrice">
                      <div class="total"><em>总计：</em><span>￥{{order.totalAmount}}</span></div>
                      <div class="discount">优惠：<em>￥0.00</em></div>
                    </div>
                    <div class="infoBottom">
                      <a href="javascript:void(0);" class="thirdBtn">提醒发货</a>
                      <a href="javascript:void(0);" class="secondBtn">退款</a>
                    </div>
                  </li>

                </ul>

              </scroller>
              <scroller class="optionMain" style="margin-top: 1.4rem" :on-infinite="infinite3"  :on-refresh = "refresh3" ref="waitreceiveProductOrder_scroller" :noDataText="noDataText">
                <ul class="opContInfo">
                  <li v-for="(order,index) in orderList3" :id="order.orderId">
                    <div class="infoTop">
                      <span>{{order.createTime}}</span>
                      <em>{{order.statusName}}</em>
                    </div>
                    <a href="#" class="infoMiddle" v-for="(ite,inde) in order.lines">
                      <div class="middleImg"><img :src="ite.goodsTitleImg"></div>
                      <div class="middleDet">
                        <div class="middleTitle">
                          <p>{{ite.goodsTitle}}</p>
                          <span>￥{{ite.price}}</span>
                        </div>
                        <div class="orderNum">X{{ite.quantity}}</div>
                      </div>
                    </a>

                    <div class="timePrice">
                      <div class="total"><em>总计：</em><span>￥{{order.totalAmount}}</span></div>
                      <div class="discount">优惠：<em>￥0.00</em></div>
                    </div>
                    <div class="infoBottom">
                      <a href="javascript:void(0);" class="thirdBtn">延长收获</a>
                      <a href="javascript:void(0);" class="thirdBtn">查看物流</a>
                      <a href="javascript:void(0);" class="fourthBtn">确认收货</a>
                    </div>
                  </li>

                </ul>

              </scroller>
              <scroller class="optionMain" style="margin-top: 1.4rem" :on-infinite="infinite4"  :on-refresh = "refresh4" ref="tradeSuccessOrder_scroller" :noDataText="noDataText">
                <ul class="opContInfo">
                  <li v-for="(order,index) in orderList4" :id="order.orderId">
                    <div class="infoTop">
                      <span>{{order.createTime}}</span>
                      <em>{{order.statusName}}</em>
                    </div>
                    <a href="#" class="infoMiddle" v-for="(ite,inde) in order.lines">
                      <div class="middleImg"><img :src="ite.goodsTitleImg"></div>
                      <div class="middleDet">
                        <div class="middleTitle">
                          <p>{{ite.goodsTitle}}</p>
                          <span>￥{{ite.price}}</span>
                        </div>
                        <div class="orderNum">X{{ite.quantity}}</div>
                      </div>
                    </a>

                    <div class="timePrice">
                      <div class="total"><em>总计：</em><span>￥{{order.totalAmount}}</span></div>
                      <div class="discount">优惠：<em>￥0.00</em></div>
                    </div>
                    <div class="infoBottom">
                      <a href="javascript:void(0);" class="thirdBtn">删除订单</a>
                      <a href="javascript:void(0);" class="thirdBtn">查看物流</a>
                      <a href="javascript:void(0);" class="secondBtn">评价</a>
                    </div>
                  </li>

                </ul>

              </scroller>

            </div>
          </div>
        </div>
      </main>
      <!--中间 结束-->
      <!--底部 开始-->
      <footer class="memberFooter">
        <a href=""><i class="homePage"></i><span>首页</span></a>
        <a href="#"><i class="find"></i><span>发现</span></a>
        <a href="#"><i class="shopp"></i><span>购物袋</span></a>
        <a href="#"  class="active"><i class="personal"></i><span>个人中心</span></a>
        <a href="#"><i class="shopkeeper"></i><span>我是店主</span></a>
      </footer>
      <!--底部 结束-->
    </div>
</template>

<script>
  import axios from 'axios'
  import store from '../../service/store'
  import 'vue-layer-mobile/need/layer.css'
    export default {
      name: "myOrder",
      data(){
        return{
          interval:{},
          orderList:[],//全部
          orderList1:[],//代发货
          orderList2:[], //
          orderList3:[],
          orderList4:[],
          orderType:'',//订单类型
          noDataText:'我也是有底线的',
          pageNumber:0,
          pageNumber1:0,//代发货的 页
          pageNumber2:0,//代发货的 页
          pageNumber3:0,//代发货的 页
          pageNumber4:0,//代发货的 页

          num:0,//所在订单的类型，默认0代表全部



        }
      },

      methods:{
        goToDetail(orderId,status){//去详情页
          if(status==1){
            this.$router.push({path:'orderDetails',query:{'orderId':orderId}})
          }else if(status==2){

          }else if(status==3){

          }else if(status==4){

          }


        },
        cancelOrder(){
          console.log("取消订单")

          this.$layer.dialog({
            title: ['取消订单', 'background:skyblue'], // 第一个是标题内容  第二个是标题栏的style(可以为空)
            content: '确定要取消订单吗',
            contentClass: 'className',
            btn: ['取消','确定'],
            //   time: 2000
          })
          // 如果有btn
            .then(function (res){
              // res为0时是用户点击了左边  为1时用户点击了右边

              if(res==1){
                console.log("确认")
              }else{
                console.log("取消")
              }
            })
        },
        queryAllOrder(){
          let _this=this;
          let num=this.num
          let number;
          if(num==1){
            number=_this.pageNumber1
          }else if(num==2){
            number=this.pageNumber2
          }else if(num==3){
            number=this.pageNumber3
          }else if(num==4){
            number=this.pageNumber4
          }else{
            number=this.pageNumber
          }

          axios.post(store.getAddress()+'/api/wxapp/order/list',{
            "uid":store.fetch("uid"),
            "status":num,
            "page":number,
            "limit":10
          })
            .then(function (response) {
              console.log(response)
              if(response.data.code==200){
                if(num==1){
                  _this.orderList1=_this.orderList1.concat(response.data.list)
                }else if(num==2){
                  _this.orderList2=_this.orderList2.concat(response.data.list)
                }else if(num==3){
                  _this.orderList3=_this.orderList3.concat(response.data.list)
                }else if(num==4){
                  _this.orderList4=_this.orderList4.concat(response.data.list)
                }else{
                  _this.orderList=_this.orderList1.concat(response.data.list)
                }
              }else{

              }

            })
            .catch(function (error) {
              console.log(error);
            })
        },
        refreshAllOrder(){
          let _this=this;
          let num=this.num
          let number;
          if(num==1){
            number=_this.pageNumber1
          }else if(num==2){
            number=this.pageNumber2
          }else if(num==3){
            number=this.pageNumber3
          }else if(num==4){
            number=this.pageNumber4
          }else{
            number=this.pageNumber
          }

          axios.post(store.getAddress()+'/api/wxapp/order/list',{
            "uid":store.fetch("uid"),
            "status":num,
            "page":number,
            "limit":10
          })
            .then(function (response) {
              console.log(response)
              if(response.data.code==200){
                if(num==1){
                  _this.orderList1=response.data.list
                }else if(num==2){
                  _this.orderList2=response.data.list
                }else if(num==3){
                  _this.orderList3=response.data.list
                }else if(num==4){
                  _this.orderList4=response.data.list
                }else{
                  _this.orderList=response.data.list
                }
              }else{

              }

            })
            .catch(function (error) {
              console.log(error);
            })
        },
        infinite(){
          this.pageNumber ++;
          console.log("加载更多")//加载更多，即往数据里面push新的数据，需要在原来的基础上继续加载剩余的数据
          this.queryAllOrder();
          this.$refs.allOrder_scroller.finishInfinite(true);
          this.$refs.allOrder_scroller.resize()
        },
        refresh(){
          this.pageNumber = 1;
          console.log("重新加载")
          this.refreshAllOrder();
          this.$refs.allOrder_scroller.finishPullToRefresh()//结束动作，在完成调用时执行

        },
        infinite1(){
          this.pageNumber1 ++;
          console.log("加载更多")//加载更多，即往数据里面push新的数据，需要在原来的基础上继续加载剩余的数据
          this.queryAllOrder()
          this.$refs.waitOrder_scroller.finishInfinite(true);
          this.$refs.waitOrder_scroller.resize()
        },
        refresh1(){
          this.pageNumber1 = 1;
          console.log("重新加载")
          this.refreshAllOrder();
          this.$refs.waitOrder_scroller.finishPullToRefresh()//结束动作，在完成调用时执行

        },
        infinite2(){
          this.pageNumber ++;
          console.log("加载更多")//加载更多，即往数据里面push新的数据，需要在原来的基础上继续加载剩余的数据
          //this.querySearchList();
          this.$refs.waitSendProductOrder_scroller.finishInfinite(true);
          this.$refs.waitSendProductOrder_scroller.resize()
        },
        refresh2(){
          this.pageNumber = 1;
          console.log("重新加载")
          //this.refreshData();
          this.$refs.waitSendProductOrder_scroller.finishPullToRefresh()//结束动作，在完成调用时执行

        },
        infinite3(){
          this.pageNumber ++;
          console.log("加载更多")//加载更多，即往数据里面push新的数据，需要在原来的基础上继续加载剩余的数据
          //this.querySearchList();
          this.$refs.waitreceiveProductOrder_scroller.finishInfinite(true);
          this.$refs.waitreceiveProductOrder_scroller.resize()
        },
        refresh3(){
          this.pageNumber = 1;
          console.log("重新加载")
          //this.refreshData();
          this.$refs.waitreceiveProductOrder_scroller.finishPullToRefresh()//结束动作，在完成调用时执行

        },
        infinite4(){
          this.pageNumber ++;
          console.log("加载更多")//加载更多，即往数据里面push新的数据，需要在原来的基础上继续加载剩余的数据
          //this.querySearchList();
          this.$refs.tradeSuccessOrder_scroller.finishInfinite(true);
          this.$refs.tradeSuccessOrder_scroller.resize()
        },
        refresh4(){
          this.pageNumber = 1;
          console.log("重新加载")
          //this.refreshData();
          this.$refs.tradeSuccessOrder_scroller.finishPullToRefresh()//结束动作，在完成调用时执行

        },


    /*我的订单*/
      myOrderTab:function (){
        let _this=this;
      var $li = $('.orderOption .optionNav a');
      var $ul = $('.orderOption .optionCont .optionMain');
      $("#optionTab").css('height',$ul.eq(0).height())
      $li.click(function(){
        var $this = $(this);
        var $t = $this.index();
        _this.num=$t;
        let num=$t;
        /*if(num==1){
         if(JSON.stringify(_this.orderList1)=="[]"){
            _this.queryAllOrder();
         }
        }else if(num==2){
          if(JSON.stringify(_this.orderList2)=="[]"){
            _this.queryAllOrder();
          }
        }else if(num==3){
          if(JSON.stringify(_this.orderList3)=="[]"){
            _this.queryAllOrder();
          }
        }else if(num==4){
          if(JSON.stringify(_this.orderList4)=="[]"){
            _this.queryAllOrder();
          }
        }else{
          if(JSON.stringify(_this.orderList)=="[]"){
            _this. queryAllOrder();
          }
        }*/

        $li.removeClass();
        $this.addClass('Cur');
        $ul.css('display','none');
        $ul.eq($t).css('display','block');

        $("#optionTab").css('height','80%')
      })
    }
      },
      destroyed(){
        window.clearInterval(this.interval)
      },
      mounted:function () {

       // this.queryAllOrder();
        this.myOrderTab();
        var $li = $('.orderOption .optionNav a');
        var $ul = $('.orderOption .optionCont .optionMain');
        $li.removeClass();
        $ul.css('display','none');
        let num = this.$route.query.num
        this.num=num;
        $li.eq(num).addClass('Cur');
        $ul.eq(num).css('display','block');

          var x = 30;

          var d = new Date("1111/1/1,0:" + x + ":0");
          this.interval = setInterval(function() {
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
