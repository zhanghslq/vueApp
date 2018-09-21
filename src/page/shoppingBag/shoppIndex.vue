<template>
    <div>
      <header class="fix">
        购物袋
        <a href="javascript:void(0);" class="releaseBtn" id="rem_s">编辑</a>
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="shoppBagMain">
          <form method="post"  name="cart_form" target="_self" id="cart_form" action="">
            <div class="commodity_list_box">
              <div class="cart_top">
              </div>
              <div class="commodity_box">
                <div class="commodity_list">
                  <!--店名信息-->
                  <!--<div class="tite_tim select" style="display: none;">
                    <em aem="1" cart_id="84"></em>
                  </div>-->

                  <ul class="commodity_list_term" v-for="product in productList">

                    <li class="select">
                      <em aem="0" cart_id="84" class="choiceIcon"> </em>
                      <div style="display: none">{{product.id}}</div>
                      <div class="listPic"><img v-bind:src=product.productTitleImg ></div>
                      <p class="copywriting">{{product.productName}}</p>
                      <div class="price now_value">
                        <p class="now_value"><i>￥</i><b class="qu_su"><small>{{product.price}}</small></b></p>
                      </div>
                      <div class="quantity div_right">
                        <i class="minus">-</i>
                        <span class="zi">1</span>
                        <input type="hidden" value="84">
                        <i class="plus">+</i>
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
          <div class="shoppEmpty" style="display: none;">
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
      </main>
      <!--中间 结束-->
      <!--底部 开始-->
      <footer class="memberFooter">
        <router-link to="/index">
          <i class="homePage"></i><span>首页</span>
        </router-link>
        <router-link to="/findPage" >
          <i class="find"></i><span>发现</span>
        </router-link>
        <router-link to="/shopIndex" class="active">
          <i class="shopp"></i><span>购物袋</span><em>99</em>
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




   /* $(".commodity_list .tite_tim > em.pitch_on").parents(".commodity_box").remove();*/
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
          /* 合计金额  */
          var je = $(".commodity_box .select .qu_su"); /* 全部商品单价  */
          var je1 = $(".commodity_box .select .zi");  /* 全部商品数量  */
          var TotalJe = 0;
          for(var i=0; i<je.length; i++)
          {
            var n = je.eq(i).text();
            var n1 = je1.eq(i).text();
            TotalJe = TotalJe + (parseFloat(n)*parseFloat(n1));

          }
          $("#total_price b").text(TotalJe.toFixed(2)); /* 合计金额  */
        },

      },
      updated(){
        let _this=this;
        _this.allThis=$(".commodity_box .select em")
        $(".select em").click(function(){
          var su = $(this).attr("aem");
          var carts_id=$(this).attr("cart_id");
          var totalH = $("#total_price b").text(); /* 合计金额  */
          if(su == 0){
            /* 单选商品  */
            if($(this).hasClass("pitch_on")){
              /*去该店全选*/
              $(this).parents("ul").siblings(".select").find("em").removeClass("pitch_on");
              /*去底部全选*/
              $("#all_pitch_on").removeClass("pitch_on");
              $(this).removeClass("pitch_on");
              _this.reduceMod($(this),totalH);
              _this.cart_id[carts_id]="";
              delete _this.cart_id[carts_id];
            }else{
              $(this).addClass("pitch_on");
              var n = $(this).parents("ul").children().find(".pitch_on");
              var n1 = $(this).parents("ul").children();
              _this.plusMod($(this),totalH,0,_this.noX);
              _this.cart_id[carts_id]="";
              /*该店商品全选中时*/
              if(n.length == n1.length){
                $(this).parents("ul").siblings(".select").find("em").addClass("pitch_on");
              }
              /*商品全部选中时*/
              var fot = $(".commodity_list_box .tite_tim .pitch_on");
              var fot1 = $(".commodity_list_box .tite_tim em");
              if(fot.length == fot1.length)
                $("#all_pitch_on").addClass("pitch_on");
            }
          }else{
            /* 全选该店铺  */
            if($(this).hasClass("pitch_on")){
              /*去底部全选*/
              $("#all_pitch_on").removeClass("pitch_on");
              $(this).removeClass("pitch_on");

              _this.commodityReduceMod($(this),totalH);
              $(this).parent().siblings("ul").find("em").removeClass("pitch_on");
              delete _this.cart_id[carts_id];
            }else{
              _this.commodityReduceMod($(this),totalH);

              $(this).addClass("pitch_on");

              $(this).parent().siblings("ul").find("em").addClass("pitch_on");

              if(plus != NaN && plus != undefined){
                totalH = parseFloat(totalH)-parseFloat(plus);
              }

              _this.commodityPlusMod($(this),totalH);
              _this.cart_id[carts_id]="";
              /*商品全部选中时*/
              var fot = $(".commodity_list_box .tite_tim .pitch_on");
              var fot1 = $(".commodity_list_box .tite_tim em");
              if(fot.length == fot1.length)
                $("#all_pitch_on").addClass("pitch_on");

            }
          }
          //计算选择数值


        });
        /* 底部全选  */


        $("#all_pitch_on").click(function(){
          if(_this.bot == 0){
            $(this).addClass("pitch_on");
            _this.allThis.removeClass("pitch_on");
            _this.allThis.addClass("pitch_on");
            /*总价格*/
            _this. commodityWhole();
            _this.bot = 1;
            //重新加入属性对象
            for(var key in _this.cart_id_copy){
              _this.cart_id[key]="";
            }
          }else{
            $(this).removeClass("pitch_on");
            _this.allThis.removeClass("pitch_on");
            $("#total_price b").text("0");
            _this.bot = 0;
            //移除全部对象
            for(var key in _this.cart_id){
              delete _this.cart_id[key];
            }
          }
          //计算选择数值

        });


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
            axios.post("/api/api/wxapp/cart/delete",{"id":$(this).next("div").text()})
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
          var ids=[];
          $(".commodity_list_term .pitch_on").each(function(){
            ids.push($(this).next("div").text())
            //存入localstorage，然后在下个页面取出
            store.save("placeOrderChooseIds",ids)
            _this.$router.push("placeOrder")

          });


          $(".commodity_list_term .pitch_on").parent().remove();
          /*$(".commodity_list .tite_tim > em.pitch_on").parents(".commodity_box").remove();*/
        })
      },
      mounted:function () {
        let _this=this;
        axios.post('/api//api/wxapp/cart/list',{
          "uid":store.fetch("uid"),

        }).then(function (response) {
          console.log(response)
          if (response.data.code == 200) {
            console.log(response)
            _this.productList=response.data.list

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
