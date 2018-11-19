<template>
    <div>
      <header class="fix">
        购物袋
        <a href="javascript:void(0);" class="releaseBtn" id="rem_s">编辑</a>
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div><!--后期可以改div的-->
          <div class="shoppBagMain">
          <form method="post"  name="cart_form" target="_self" id="cart_form" action="">
            <div class="commodity_list_box">
              <div class="cart_top">
              </div>
              <div class="commodity_box">
                <div class="commodity_list">


                  <ul class="commodity_list_term" >

                    <li class="select" v-for="product in productList">
                      <em aem="0"  cart_id="84" class="choiceIcon singleEm" v-bind:class="{pitch_on:product.isSelected}"> </em>
                      <div style="display: none">{{product.id}}</div>
                      <div class="listPic" v-on:click="toDetail(product.goodsId,product.skuId)"><img v-bind:src=product.goodsTitleImg ></div>
                      <p class="copywriting" v-on:click="toDetail(product.goodsId,product.skuId)">{{product.goodsTitle}}</p>
                      <div class="sign">{{product.skuName}}</div>
                      <div class="price now_value">
                        <p class="now_value"><i>￥</i><b class="qu_su"><small>{{product.price}}</small></b></p>
                      </div>
                      <div class="quantity div_right">
                        <i class="minus" v-on:click="minusOnServer(product.skuId,$event)">-</i>
                        <span class="zi">{{product.quantity}}</span>
                        <input type="hidden" value="84">
                        <i class="plus" v-on:click="addOnServer(product.skuId,$event)">+</i>
                      </div>
                    </li>
                  </ul>



                </div>
              </div>


              <div class="settle_box">
                <div class="total all_check select">
                  <div><span id="all_pitch_on"></span><em>全选</em></div>
                </div>
                <div class="priceBox total_amount">
                  <p class="totalNum">总计<span id="total_price">￥<b><i>0</i>.00</b></span></p>
                  <p class="discount">总额:<em>￥0.00</em> 立减:<em>￥0.00</em></p>
                </div>
                <div class="operation">
                  <a href="javascript:void(0);" class="settlement settle_btn" id="confirm_cart">去结算</a>
                  <a href="javascript:void(0);" class="del settle_btn" style="display: none;" id="confirm_cart1">删除商品</a>
                </div>
              </div>

            </div>
          </form>

          <!--购物车为空 开始-->
          <div v-if="productList.length==0" class="shoppEmpty">
            <em></em>
            <p>购物车为空</p>
          </div>
          <!--购物车为空 结束-->
          <div class="lookOther">
            <div class="lookOtherTitle">
              <div>
                <div class="titleImg"><img src="../../images/temporary/9.jpg"></div>
                <p>加购此宝贝的人还在看</p>
              </div>
              <!--以下这个span是购物车为空时就显示这个，不显示上面的|-->
              <span style="display: none;">猜你喜欢</span>
            </div>
            <div class="lookOtherList">
              <a href="#">
                <div class="infoPic"><img src="../../images/temporary/commodity12.png"></div>
                <div class="otherBg">
                  <p>【任选】【百草味-手剥小白杏200g】坚果干果</p>
                  <div class="price">
                    <span class="presentNum">￥<em>19</em>.9</span>
                    <span class="timePri">￥<em>19</em>.9</span>
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="infoPic"><img src="../../images/temporary/commodity12.png"></div>
                <div class="otherBg">
                  <p>【任选】【百草味-手剥小白杏200g】坚果干果</p>
                  <div class="price">
                    <span class="presentNum">￥<em>19</em>.9</span>
                    <span class="timePri">￥<em>19</em>.9</span>
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="infoPic"><img src="../../images/temporary/commodity12.png"></div>
                <div class="otherBg">
                  <p>【任选】【百草味-手剥小白杏200g】坚果干果</p>
                  <div class="price">
                    <span class="presentNum">￥<em>19</em>.9</span>
                    <span class="timePri">￥<em>19</em>.9</span>
                  </div>
                </div>
              </a>
              <a href="#">
                <div class="infoPic"><img src="../../images/temporary/commodity12.png"></div>
                <div class="otherBg">
                  <p>【任选】【百草味-手剥小白杏200g】坚果干果</p>
                  <div class="price">
                    <span class="presentNum">￥<em>19</em>.9</span>
                    <span class="timePri">￥<em>19</em>.9</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

        </div>
        </div>
      </main>
      <!--中间 结束-->
      <!--底部 开始-->
      <footer class="memberFooter" v-if="isDev">
        <router-link to="/index">
          <i class="homePage"></i><span>首页</span>
        </router-link>
        <router-link to="/findPage" >
          <i class="find"></i><span>发现</span>
        </router-link>
        <router-link to="/shopIndex" class="active">
          <i class="shopp"></i><span>购物袋</span>
        </router-link>
        <router-link to="/personalPage">
          <i class="personal"></i><span>个人中心</span>
        </router-link>
        <router-link to="/shopkeeperPage" >
          <i class="shopkeeper"></i><span>我是店主</span>
        </router-link>

      </footer>
      <!--底部 结束-->
    </div>
</template>

<script>
  //定义全局变量


  //选择结算商品


  /* 加减  */

  //删除
  import $ from 'jquery'
  import store from '../../service/store'
  import axios from 'axios'

    export default {
      name: "shoppIndex",
      data(){
        return{
          isDev:false,
          i:0,
        //金额总和
        money:0,
        //计算合计价格
         cart_money:{},

        //全部商品ID
         cart_id:{},
        //备份商品ID，用于全选后去掉全选又再次全选
         cart_id_copy:{},

         noX : 0,  /* 没选中时点击加减计算数量  */
         allThis : {}, /*底部全选*/
        /* 减  */
         plus:'',
          bot :0,
          topb : 0,
          productList:[],
        }
      },
      methods:{
        toDetail(goodsId,skuId){
          var _this=this;
          //需要先存一个标识，来判断是从购物车跳转到商品详情页
          store.save("isShopIndex","1");
          if(store.isDev()){
            _this.$router.push({path:'commodityPage',query:{"id":goodsId,"skuId":skuId}})
          }else {//线上环境，判断ios或者安卓，
            if (store.judge() == 0) {
              window.androidXingJiApp.postMessage(JSON.stringify({
                "code": "91",
                "index": 0,
                "url": store.getNextAddress() + "commodityPage?id=" + goodsId + "&skuId=" + skuId
              }));
            } else if (store.judge() == 1) {
              window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
                "code": "91",
                "index": 0,
                "url": store.getNextAddress() + "commodityPage?id=" + goodsId + "&skuId=" + skuId
              });
            }
          }

        },
        minusOnServer(id,e){
          if($(e.target).next("span").html()-1>0){
            axios.post(store.getAddress()+'/api/wxapp/cart/changeNum',{
              "uid":store.fetch("uid"),"quantity":$(e.target).next("span").html()-1,"skuId":id

            }).then(function (response) {
              console.log(response)
              if (response.data.code == 200) {

              } else {

              }
            }).catch(function (error) {
              console.log(error);
            })
          }
        },
      addOnServer(id,e){
        console.log($(e.target).prev().prev().html())
        axios.post(store.getAddress()+'/api/wxapp/cart/changeNum',{
          "uid":store.fetch("uid"),"quantity":parseInt($(e.target).prev().prev().html())+1,"skuId":id

        }).then(function (response) {

          if (response.data.code == 200) {
            console.log(response)

          } else {

          }
        }).catch(function (error) {
          console.log(error);
        })

      },
      reducew:function (obj){
    //减
    var $this = $(obj);
    var totalH = $("#total_price b").text(); /* 合计金额  */
    var ise = $this.siblings("span").text();
    var gc_id = $this.siblings("input").val();
    if(this.noX <= 0){
      this.noX = 0;
    }else{
      this.noX--;
    };

    if(parseInt(ise) <= 1){
      $this.siblings("span").text("1");
    }else{
      var n =parseInt(ise)-1;
      $this.siblings("span").text(n);
      if($this.parent().parent().children("em").hasClass("pitch_on")){
        var mo = $this.parent().parent().children("em");
        this.reduceMod(mo,totalH,2,this.noX);
        this.noX=0;
      }
    }
  },

        plusw:function (obj){
          //加
          var $this = $(obj);
          var totalH = $("#total_price b").text(); /* 合计金额  */
          var ise = $this.siblings("span").text();
          var gc_id = $this.siblings("input").val();
          var n =parseInt(ise)+1;
                this.noX++;

          $this.siblings("span").text(n);
          if($this.parent().parent().children("em").hasClass("pitch_on")){
            var mo = $this.parent().parent().children("em");
            this.plusMod(mo,totalH,2,this.noX);
            this.noX=0;
          }


  },
        //删除
        big_cart_remove:function (){
          $(".commodity_list_term .pitch_on").parent().remove();





  },
        reduceMod:function (e,totalH,mod){
          var tn = e.siblings().find(".qu_su").text(); /* 当前选中商品  */
          var tn1 = e.siblings().find(".zi").text(); /* 商品数量  */
          if(mod != 2){
            var Total = parseFloat(totalH) - (tn*tn1);  /* 总价格减该商品总数价格  */
            $("#total_price b").text(Total.toFixed(2));
          }else{
            /* 合计加单价-1 */
            var Total = parseFloat(totalH) - parseFloat(tn);    /* 总价格减该商品总数价格  */
            $("#total_price b").text(Total.toFixed(2));
          }

  },
        /* 加  */
        plusMod: function (e,totalH,mod,noX){
          var tn = e.siblings().find(".qu_su").text(); /* 当前选中商品  */
          var tn1 = e.siblings().find(".zi").text(); /* 商品数量  */
          if(mod != 2){
            var Total = parseFloat(totalH)+(tn*tn1);    /* 总价格加上该商品总数价格  */
            $("#total_price b").text(Total.toFixed(2));
          }else{
            /* 合计加单价+1 */
            var Total = parseFloat(totalH)+(parseFloat(tn)+(noX-1));    /* 总价格加上该商品总数价格  */
            $("#total_price b").text(Total.toFixed(2));
          }

        },
        /*全选该店商品价格 加*/
        commodityPlusMod:function (e,totalH){
          var qu = e.parents(".commodity_list").find(".pitch_on").parent().find(".qu_su");
          var quj = e.parents(".commodity_list").find(".pitch_on").parent().find(".zi");
          var Total = 0;
          var erTotal = true;
          /* 该商品全部金额  */
          for(var i=0; i<qu.length; i++)
          {
            var n = qu.eq(i).text();
            var n1 = quj.eq(i).text();
            /*合计价格*/
            if(erTotal){
              Total = parseFloat(totalH) +(parseFloat(n)*parseFloat(n1));
              if(Total < 0)
                Total=0;
              erTotal = false;
            }else{
              Total = parseFloat(Total) + (parseFloat(n)*parseFloat(n1));
              if(Total < 0)
                Total=0;
            }
          }
          $("#total_price b").text(Total.toFixed(2)); /* 合计金额  */
        },

        /*全选该店商品价格 减*/
        commodityReduceMod:function (e,totalH){
          var qu = e.parents(".commodity_list").find(".pitch_on").parent().find(".qu_su");
          var quj = e.parents(".commodity_list").find(".pitch_on").parent().find(".zi");
          var Total = 0;

          var erTotal = true;
          /* 该商品全部金额  */
          for(var i=0; i<qu.length; i++)
          {
            var n = qu.eq(i).text();
            var n1 = quj.eq(i).text();
            /*合计价格*/
            if(erTotal){
              Total = parseFloat(totalH) - (parseFloat(n)*parseFloat(n1));
              this.plus = parseFloat(n)*parseFloat(n1);
              if(Total < 0)
                Total=0;
              erTotal = false;
            }else{
              Total = parseFloat(Total) - (parseFloat(n)*parseFloat(n1));
              this.plus = parseFloat(n)*parseFloat(n1);
              if(Total < 0)
                Total=0;
            }

            $("#total_price b").text(Total.toFixed(2)); /* 合计金额  */
          }

          return plus;
        },
        /*全部商品价格*/
        commodityWhole:function () {

          var je = $(".commodity_list").find(".pitch_on").parent().find(".qu_su");
          var je1 = $(".commodity_list").find(".pitch_on").parent().find(".zi");

          /* 合计金额  */
          /*var je = $(".commodity_box .select .qu_su"); /!* 全部商品单价  *!/
          var je1 = $(".commodity_box .select .zi");  /!* 全部商品数量  *!/*/
          var TotalJe = 0;
          for(var i=0; i<je.length; i++)
          {
            var n = je.eq(i).text();
            var n1 = je1.eq(i).text();
            TotalJe = TotalJe + (parseFloat(n)*parseFloat(n1));

          }
          $("#total_price b").text(TotalJe.toFixed(2)); /* 合计金额  */
        },
        selectProduct(id){//选中购物车商品
          axios.post(store.getAddress()+'/api/wxapp/cart/select',{
            "id":id,
          }).then(function (response) {
            console.log(response)
            if (response.data.code == 200) {
              //打印选中
            } else {
              //只有失败的时候才提示
            }
          }).catch(function (error) {
            console.log(error);
          })
        },
        disSelectProduct(id){//取消选中购物车商品
          axios.post(store.getAddress()+'/api/wxapp/cart/unSelect',{
            "id":id,
          }).then(function (response) {
            console.log(response)
            if (response.data.code == 200) {
              //打印选中
            } else {
              //只有失败的时候才提示
            }
          }).catch(function (error) {
            console.log(error);
          })
        },
        selectAll(){
          axios.post(store.getAddress()+'/api/wxapp/cart/selectAll',{
            "uid":store.fetch("uid"),
          }).then(function (response) {
            console.log(response)
            if (response.data.code == 200) {
              //打印选中
            } else {
              //只有失败的时候才提示
            }
          }).catch(function (error) {
            console.log(error);
          })
        },
        unSelectAll(){
          axios.post(store.getAddress()+'/api/wxapp/cart/cancelAll',{
            "uid":store.fetch("uid"),
          }).then(function (response) {
            console.log(response)
            if (response.data.code == 200) {
              //打印选中
            } else {
              //只有失败的时候才提示
            }
          }).catch(function (error) {
            console.log(error);
          })
        }

      },
      updated(){
        let _this=this;
        _this.allThis=$(".commodity_box .select .singleEm")
        $(".select .singleEm").click(function(){


          var totalH = $("#total_price b").text(); /* 合计金额  */

            /* 单选商品  */
            if($(this).hasClass("pitch_on")){

              $(this).removeClass("pitch_on");
              $("#all_pitch_on").removeClass("pitch_on");
              _this.reduceMod($(this),totalH);
              //服务器取消选中
              _this.disSelectProduct($(this).next("div").html())


            }else{
              $(this).addClass("pitch_on");
              _this.selectProduct($(this).next("div").html())
              var n = $(this).parents("ul").children().find(".pitch_on");
              var n1 = $(this).parents("ul").children();
              _this.plusMod($(this),totalH,0,_this.noX);


              /*商品全部选中时*/
              var fot = $(".commodity_list_term  .pitch_on");
              var fot1 = $(".commodity_list_term  em");
              console.log("fot.length"+fot.length)
              console.log("fot1.length"+fot1.length)
              if(fot.length == fot1.length){
                $("#all_pitch_on").addClass("pitch_on");
              }

            }

          //计算选择数值


        });
        /* 底部全选  */





        /* 编辑商品  */
        $("#rem_s").click(function(){
          if(_this.topb == 0){
            $(this).text("完成");
            $(".total_amount").hide(); /* 合计  */
            $("#confirm_cart").hide(); /* 结算  */
            $("#confirm_cart1").show(); /* 删除 */
            _this.topb = 1;
          }else{
            _this.topb = 0;
            $(this).text("编辑");
            $(".total_amount").show(); /* 合计  */
            $("#confirm_cart").show(); /* 结算  */
            $("#confirm_cart1").hide(); /* 删除 */
            _this.allThis.removeClass("pitch_on"); /* 取消所有选择  */
            $("#all_pitch_on").removeClass("pitch_on"); /* 取消所有选择  */
            $("#total_price b").text("0"); /*合计价格清零*/

          }

        });

        $(".minus").click(function() {
          var $this = $(this);
          var totalH = $("#total_price b").text(); /* 合计金额  */
          var ise = $this.siblings("span").text();
          var gc_id = $this.siblings("input").val();
          if(_this.noX <= 0){
            _this.noX = 0;
          }else{
            _this.noX--;
          };

          if(parseInt(ise) <= 1){
            $this.siblings("span").text("1");
          }else{
            var n =parseInt(ise)-1;
            $this.siblings("span").text(n);
            if($this.parent().parent().children("em").hasClass("pitch_on")){
              var mo = $this.parent().parent().children("em");
              _this.reduceMod(mo,totalH,2,_this.noX);
              _this.noX=0;
            }

          }
        });

        $(".plus").click(function(){
          //加
          var $this = $(this);
          var totalH = $("#total_price b").text(); /* 合计金额  */
          var ise = $this.siblings("span").text();
          var gc_id = $this.siblings("input").val();
          var n =parseInt(ise)+1;
          _this.noX++;

          $this.siblings("span").text(n);
          if($this.parent().parent().children("em").hasClass("pitch_on")){
            var mo = $this.parent().parent().children("em");
            _this.plusMod(mo,totalH,2,_this.noX);
            _this.noX=0;
          }
        })

        //删除
        $("#confirm_cart1").click(function(){
          let t=$(".commodity_list_term .pitch_on").next("div").text()
          $(".commodity_list_term .pitch_on").each(function(){
            axios.post(store.getAddress()+"/api/wxapp/cart/delete",{"id":$(this).next("div").text()})
              .then(function (responese) {
                console.log(responese)

              }).catch(function (err) {
                console.log(err)
            })

          });
          $(".commodity_list_term .pitch_on").parent().remove();
          /*$(".commodity_list .tite_tim > em.pitch_on").parents(".commodity_box").remove();*/
        })


        //去结算,到生成订单页
        $("#confirm_cart").click(function(){

          console.log("选中的个数"+$(".commodity_list_term .pitch_on").length)
         /* _this.$router.push("placeOrder")*/

          if($(".commodity_list_term .pitch_on").length==0){
            _this.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: '请选择商品',
              time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })
          }else{

            if(store.isDev()){
              _this.$router.push("placeOrder")
            }else{
              if(store.judge()==1){
                window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
                  "code": "91",
                  "index":0,
                  "url":store.getNextAddress()+"placeOrder"
                });
              }else if(store.judge()==0){
                window.androidXingJiApp.postMessage(JSON.stringify({
                  "code": "91",
                  "index":0,
                  "url":store.getNextAddress()+"placeOrder"}));
              }
            }


          }

        })
      },
      mounted:function () {

        this.isDev=store.isDev();
        var _this=this;
        let uid=store.fetch("uid");
        if(uid==undefined||uid==null||uid==''){//未登录，需要跳转到登录页
          store.save("lastPage","shopIndex")
          store.save("index",3)
          if(store.judge()==1){
            window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
              "code": "91",
              "index":0,
              "url":store.getNextAddress()+"mobileLogin"
            });
          }else if(store.judge()==0){//安卓
            window.androidXingJiApp.postMessage(JSON.stringify({
              "code": "91",
              "index":0,
              "url":store.getNextAddress()+"mobileLogin"}));
          }else if(store.judge()==3){
            _this.$router.push("mobileLogin")
          }


        }

        $("#all_pitch_on").click(function(){
          console.log("点击全选")
          console.log(this)
          console.log($(this))
          console.log(_this.allThis)

          if(!$(this).hasClass("pitch_on")){
            $(this).addClass("pitch_on");
            _this.allThis.removeClass("pitch_on");
            _this.allThis.addClass("pitch_on");
            /*总价格*/
            _this. commodityWhole();
            _this.selectAll();


          }else{
            console.log("有pitch——on")
            $(this).removeClass("pitch_on");
            _this.allThis.removeClass("pitch_on");
            $("#total_price b").text("0");
            _this.unSelectAll();

          }
          //计算选择数值

        });


        var fot = $(".commodity_list_term  .pitch_on");
        var fot1 = $(".commodity_list_term  em");

        if(fot.length == fot1.length){
          $("#all_pitch_on").addClass("pitch_on");
        }

        axios.post(store.getAddress()+'/api/wxapp/cart/list',{
          "uid":store.fetch("uid"),

        }).then(function (response) {
          console.log(response)
          if (response.data.code == 200) {
            console.log(response)
            _this.productList=response.data.list
            _this.$nextTick(function () {
              _this.commodityWhole();
              //页面初始化完成，全选是否选中
              var fot = $(".commodity_list_term  .pitch_on");
              var fot1 = $(".commodity_list_term  em");
              console.log("fot.length"+fot.length)
              console.log("fot1.length"+fot1.length)
              if(fot.length == fot1.length){
                $("#all_pitch_on").addClass("pitch_on");
              }else {
                $("#all_pitch_on").removeClass("pitch_on");
              }

            })
          } else {

          }
        }).catch(function (error) {
          console.log(error);
        })

        //下面是计算购物车金额的


      }
    }
</script>

<style scoped>
  @import "../../css/common/common.css";
@import "../../css/other/index.css";
</style>
