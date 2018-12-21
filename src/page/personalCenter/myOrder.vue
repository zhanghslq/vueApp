<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a  v-on:click="toBack()" class="returnBtn"></a>
        我的订单
        <a  class="searchBtn"></a>
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
              <scroller  class="optionMain" style="margin-top: 1.4rem;margin-bottom: 1rem"  :on-infinite="infinite"  :on-refresh = "refresh" ref="allOrder_scroller" :noDataText="noDataText"><!--这里是全部的-->
                <ul class="opContInfo">
                  <li v-for="(order,index) in orderList" :id="order.orderId">
                    <div class="infoTop">
                      <span>{{order.createTime}}</span>
                      <em>{{order.statusName}}</em>
                    </div>
                    <a  class="infoMiddle" v-for="(ite,inde) in order.lines" v-on:click="goToDetail(order.orderId,order.status)">
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
                    <div v-if="!order.hasRefund &&!order.hasReturn">
                      <div class="infoBottom" v-if="order.status==1">
                        <a  class="cancelBtn" v-on:click="cancelOrder(order.orderId)">取消</a>
                        <a  class="toPay" v-on:click="toRePay(order.orderId,order.totalAmount)"><span>去付款</span><em class="btnTime"></em></a>
                      </div>
                      <div class="infoBottom" v-if="order.status==2">

                        <a  class="secondBtn" v-on:click="goToRefundMoney(order.orderId,order.totalAmount,order.status)">退款</a>
                      </div>
                      <div class="infoBottom" v-if="order.status==3">
                        <!--<a  class="thirdBtn">延长收货</a>-->
                        <!--<a  class="thirdBtn" v-on:click="goToDetail(order.orderId,order.status)">查看物流</a>-->
                        <a  class="fourthBtn" v-on:click="confirmProduct(order.orderId)">确认收货</a>
                      </div>
                      <div class="infoBottom" v-if="order.status==5">
                        <!--<a  class="thirdBtn">删除订单</a>-->
                        <!--<a  class="thirdBtn" v-on:click="goToDetail(order.orderId,order.status)">查看物流</a>-->
                        <a  class="thirdBtn"  v-on:click="goToRefundMoney(order.orderId,order.totalAmount,order.status)">退货退款</a>
                        <a  class="secondBtn">评价</a>
                      </div>
                    </div>
                    <div v-else>
                      <div class="infoBottom">
                        <a  class="cancelBtn">已申退款</a>

                      </div>
                    </div>

                  </li>

                </ul>

              </scroller>
              <scroller class="optionMain" style="margin-top: 1.4rem;margin-bottom: 1rem" :on-infinite="infinite1"  :on-refresh = "refresh1" ref="waitOrder_scroller" :noDataText="noDataText">
                <ul class="opContInfo">
                  <li v-for="(order,index) in orderList1"  :id="order.orderId">
                    <div class="infoTop">
                      <span>{{order.createTime}}</span>
                      <em>{{order.statusName}}</em>
                    </div>
                    <a  class="infoMiddle" v-on:click="goToDetail(order.orderId,order.status)" v-for="(ite,inde) in order.lines">
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
                      <a  v-on:click="cancelOrder(order.orderId)" class="cancelBtn">取消</a>
                      <a  class="toPay" v-on:click="toRePay(order.orderId,order.totalAmount)"><span>去付款</span><em class="btnTime"></em></a>
                    </div>
                  </li>

                </ul>

              </scroller>
              <scroller class="optionMain" style="margin-top: 1.4rem;margin-bottom: 1rem" :on-infinite="infinite2"  :on-refresh = "refresh2" ref="waitSendProductOrder_scroller" :noDataText="noDataText">
                <ul class="opContInfo">
                  <li v-for="(order,index) in orderList2"  :id="order.orderId" >
                    <div class="infoTop">
                      <span>{{order.createTime}}</span>
                      <em>{{order.statusName}}</em>
                    </div>
                    <a  class="infoMiddle" v-for="(ite,inde) in order.lines" v-on:click="goToDetail(order.orderId,order.status)">
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

                    <div v-if="!order.hasRefund &&!order.hasReturn">
                      <div class="infoBottom">

                        <a v-on:click="goToRefundMoney(order.orderId,order.totalAmount,order.status)" class="secondBtn">退款</a>
                      </div>
                    </div>
                    <div v-else>
                      <div class="infoBottom">
                        <a  class="secondBtn">已申退款</a>
                      </div>
                    </div>
                  </li>

                </ul>

              </scroller>
              <scroller class="optionMain" style="margin-top: 1.4rem;margin-bottom: 1rem" :on-infinite="infinite3"  :on-refresh = "refresh3" ref="waitreceiveProductOrder_scroller" :noDataText="noDataText">
                <ul class="opContInfo">
                  <li v-for="(order,index) in orderList3" >
                    <div class="infoTop">
                      <span>{{order.createTime}}</span>
                      <em>{{order.statusName}}</em>
                    </div>
                    <a  class="infoMiddle" v-for="(ite,inde) in order.lines" v-on:click="goToDetail(order.orderId,order.status)" :id="order.orderId">
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
                      <!--<a  class="thirdBtn">延长收货</a>-->
                      <!--<a  class="thirdBtn" v-on:click="goToDetail(order.orderId,order.status)">查看物流</a>-->
                      <a v-on:click="confirmProduct(order.orderId)" class="fourthBtn">确认收货</a>
                    </div>
                  </li>

                </ul>

              </scroller>
              <scroller class="optionMain" style="margin-top: 1.4rem;margin-bottom: 1rem" :on-infinite="infinite4"  :on-refresh = "refresh4" ref="tradeSuccessOrder_scroller" :noDataText="noDataText">
                <ul class="opContInfo">
                  <li v-for="(order,index) in orderList4"  :id="order.orderId">
                    <div class="infoTop">
                      <span>{{order.createTime}}</span>
                      <em>{{order.statusName}}</em>
                    </div>
                    <a  class="infoMiddle" v-for="(ite,inde) in order.lines" v-on:click="goToDetail(order.orderId,order.status)">
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

                    <div v-if="!order.hasRefund &&!order.hasReturn">
                      <div class="infoBottom">
                        <!--<a href="javascript:void(0);" class="thirdBtn">删除订单</a>-->
                        <a  class="thirdBtn"  v-on:click="goToRefundMoney(order.orderId,order.totalAmount,order.status)">退货退款</a>
                        <a href="javascript:void(0);" class="secondBtn">评价</a>
                      </div>
                    </div>
                    <div v-else>
                      <div class="infoBottom">
                        <a  class="secondBtn">已申退款</a>
                      </div>
                    </div>



                  </li>

                </ul>

              </scroller>

            </div>
          </div>
        </div>
      </main>

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

          payStr:'',
          orderId:'',
          totalAmount:'',


        }
      },

      methods:{
        toBack(){
          if(store.isDev()){
            this.$router.push("personalPage")
          }else{
            if(store.judge()==0){
              window.androidXingJiApp.postMessage(JSON.stringify({
                "code": "91",
                "index":4,
                "url":store.getNextAddress()+"personalPage"}));
            }else if(store.judge()==1){
              window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
                "code": "99",
              });
            }

          }
        },

        goToRefundMoney(orderId,totalAmount,status){//去详情页,暂时不区分状态，都跳转到orderDetail
          this.$router.push({path:'applicationRefund',
            query:{'orderId':orderId,"totalAmount":totalAmount,"status":status}})
        },
        toRePay(orderId,totalAmount){
          let self=this;
          self.totalAmount=totalAmount;
          self.orderId=orderId;
          axios.post(store.getAddress()+'/api/wxapp/order/repay',{
            "uid":store.fetch("uid"),
            "transType":101,
            "orderId":orderId
          }).then(function (response) {
            if(response.data.code==200){

              let res= response.data.data.request;
              self.payStr=JSON.stringify(res)
              if(store.judge()==1){//等于1 代表ios
                window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
                  "code": "83",
                  "payStr":JSON.stringify(res),
                });
              }else if(store.judge()==0){
                window.androidXingJiApp.postMessage(JSON.stringify({
                    "code": "83",
                    "payStr":JSON.stringify(res),
                  })
                  );
              }
            }else{
              self.$layer.toast({
                icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
                content: response.data.message,
                time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
              })
            }
          }).catch(function (error) {
            console.log(error)
          })
        },

        appWxPayResult(result){//等待app回调，0代表失败，1代表成功
          let _this=this;
          if(result==1){//支付成功
            _this.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: '支付成功',
              time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })
            _this.refreshAllOrder();
          }else{//支付失败
            _this.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: '支付失败',
              time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })
          }
        },
        deleteOrder(orderId){
          let _this=this;
          this.$layer.dialog({
            title: ['取消订单', 'background:skyblue'], // 第一个是标题内容  第二个是标题栏的style(可以为空)
            content: '确定要删除订单吗，删除后不可恢复',
            contentClass: 'className',
            btn: ['取消','确定'],
            //   time: 2000
          })
          // 如果有btn
            .then(function (res){
              // res为0时是用户点击了左边  为1时用户点击了右边

              if(res==1){//确认取消订单
                console.log("确认")
                axios.post(store.getAddress()+"/api/wxapp/order/delete",{
                  "uid":store.fetch("uid"),
                  "orderId":orderId
                }).then(function (responese) {
                  if(responese.data.code==200){
                    _this.$layer.toast({
                      icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
                      content: '删除订单成功',
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

        },

        confirmProduct(orderId){//确认收货
          let _this=this;
          this.$layer.dialog({
            title: ['取消订单', 'background:skyblue'], // 第一个是标题内容  第二个是标题栏的style(可以为空)
            content: '请确认已收到货物',
            contentClass: 'className',
            btn: ['取消','确定'],
            //   time: 2000
          })
          // 如果有btn
            .then(function (res){
              // res为0时是用户点击了左边  为1时用户点击了右边

              if(res==1){//确认取消订单
                console.log("确认")
                axios.post(store.getAddress()+"/api/wxapp/order/sureTaken",{
                  "uid":store.fetch("uid"),
                  "orderId":orderId
                }).then(function (responese) {
                  if(responese.data.code==200){
                    _this.$layer.toast({
                      icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
                      content: '确认收货成功',
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

        },

        goToDetail(orderId,status){//去详情页,暂时不区分状态，都跳转到orderDetail
            this.$router.push({path:'orderDetails',query:{'orderId':orderId}})

        },

        cancelOrder(orderId){
          var _this=this;
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

              if(res==1){//确认取消订单
                console.log("确认")
                axios.post(store.getAddress()+"/api/wxapp/order/cancel",{
                  "uid":store.fetch("uid"),
                  "orderId":orderId
                }).then(function (responese) {
                  if(responese.data.code==200){
                    _this.refreshAllOrder();
                  }
                }).catch(function (error) {
                  console.log(error)
                })

              }else{//取
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
          }else if(num==5){
            number=this.pageNumber4
          }else{
            number=this.pageNumber
          }

          axios.post(store.getAddress()+'/api/wxapp/order/list',{
            "uid":store.fetch("uid"),
            "status":num,
            "support":0,
            "page":number,
            "limit":4
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
                }else if(num==5){
                  _this.orderList4=_this.orderList4.concat(response.data.list)
                }else{
                  _this.orderList=_this.orderList.concat(response.data.list)
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
          }else if(num==5){
            number=this.pageNumber4
          }else {
            number=this.pageNumber
          }

          axios.post(store.getAddress()+'/api/wxapp/order/list',{
            "uid":store.fetch("uid"),
            "status":num,
            "support":0,
            "page":number,
            "limit":4
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
                }else if(num==5){
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
          this.pageNumber2 ++;
          console.log("加载更多")//加载更多，即往数据里面push新的数据，需要在原来的基础上继续加载剩余的数据
          this.queryAllOrder();
          this.$refs.waitSendProductOrder_scroller.finishInfinite(true);
          this.$refs.waitSendProductOrder_scroller.resize()
        },
        refresh2(){
          this.pageNumber2 = 1;
          console.log("重新加载")
          this.refreshAllOrder();
          this.$refs.waitSendProductOrder_scroller.finishPullToRefresh()//结束动作，在完成调用时执行

        },
        infinite3(){
          this.pageNumber3 ++;
          console.log("加载更多")//加载更多，即往数据里面push新的数据，需要在原来的基础上继续加载剩余的数据
          this.queryAllOrder();
          this.$refs.waitreceiveProductOrder_scroller.finishInfinite(true);
          this.$refs.waitreceiveProductOrder_scroller.resize()
        },
        refresh3(){
          this.pageNumber3 = 1;
          console.log("重新加载")
          this.refreshAllOrder();
          this.$refs.waitreceiveProductOrder_scroller.finishPullToRefresh()//结束动作，在完成调用时执行

        },
        infinite4(){
          this.pageNumber4 ++;
          console.log("加载更多")//加载更多，即往数据里面push新的数据，需要在原来的基础上继续加载剩余的数据
          this.queryAllOrder();
          this.$refs.tradeSuccessOrder_scroller.finishInfinite(true);
          this.$refs.tradeSuccessOrder_scroller.resize()
        },
        refresh4(){
          this.pageNumber4 = 1;
          console.log("重新加载")
          this.refreshAllOrder();
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

          if($t==4){
            _this.num=5
          }else{
            _this.num=$t
          }

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
      updated(){
        let self=this;
        this.interval = setInterval(function() {

          $(".btnTime").each(function () {

            //这是订单生成的时间
            let createTime=$(this).parents('li').find('.infoTop').find('span').html();

            var ctime = createTime.replace(/\-/g, "/");
            var ct = new Date(ctime);
            var now=new Date();

            var sec=parseInt(now-ct)/1000;

            var canSec=1800-parseInt(sec);



            let m=parseInt(canSec/60);
            let s=canSec-(m*60)

            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;

            if (canSec<0) {
              self.refreshAllOrder();
            }else{
              $(this).html(m + ":" + s)
            }

          })}, 1000);



      },
      mounted:function () {

        window['appWxPayResult'] = (result) => {
          this.appWxPayResult(result)
        }
        this.myOrderTab();
        var $li = $('.orderOption .optionNav a');
        var $ul = $('.orderOption .optionCont .optionMain');
        $li.removeClass();
        $ul.css('display','none');
        let num = this.$route.query.num
        this.num=num;
        if(num==5){
          $li.eq(4).addClass('Cur');
          $ul.eq(4).css('display','block');
        }else{
          $li.eq(num).addClass('Cur');
          $ul.eq(num).css('display','block');
        }
     }

    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
