<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        购物袋
        <a href="javascript:void(0);" class="releaseBtn" id="rem_s">编辑</a>
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="shoppBagMain">
          <form method="post"  name="cart_form" target="_self" id="cart_form" action="">
            <div class="commodity_box">
              <div class="commodity_list">
                <ul class="commodity_list_term">
                  <li class="select">
                    <em aem="0" cart_id="84" class="choiceIcon"></em>
                    <div class="listPic"><img src="../../images/temporary/commodity6.png"></div>
                    <div class="listDetail">
                      <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                      <div class="priceQuantity">
                        <div class="price">￥<span class="qu_su"><em>19</em>.90</span></div>
                        <div class="quantity">
                          <i onclick="reducew(this)">-</i>
                          <span class="num zi">1</span>
                          <input type="hidden" value="84">
                          <i onclick="plusw(this)">+</i>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="settle_box">
              <div class="total select"><em id="all_pitch_on"></em><span>全选</span></div>
              <div class="priceBox">
                <p class="totalNum">总计<span id="total_price">￥<b><i>0</i>.00</b></span></p>
                <p class="discount">总额:<em>￥49.90</em> 立减:<em>￥30.00</em></p>
              </div>
              <div class="operation">
                <a href="javascript:void(0);" class="settlement settle_btn" id="confirm_cart">去结算</a>
                <a href="javascript:void(0);" class="del settle_btn" style="display: none;" id="confirm_cart1" onclick="big_cart_remove()">删除商品</a>
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
            <div class="lookOtherList mb1"><!--这里的mb1是只有购物车为空时才会有这个class名-->
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
        <a href="index.html"><i class="homePage"></i><span>首页</span></a>
        <a href="findPage.html"><i class="find"></i><span>发现</span></a>
        <a href="#" class="active"><i class="shopp"></i><span>购物袋</span><em>99</em></a>
        <a href="#"><i class="personal"></i><span>个人中心</span></a>
        <a href="#"><i class="shopkeeper"></i><span>我是店主</span></a>
      </footer>
      <!--底部 结束-->
    </div>
</template>

<script>
  //定义全局变量
  var i=0;

  //金额总和
  var money=0;

  //计算合计价格
  var cart_money=new Object();

  //全部商品ID
  var cart_id=new Object();
  //备份商品ID，用于全选后去掉全选又再次全选
  var cart_id_copy=new Object();

  var noX = 0;  /* 没选中时点击加减计算数量  */
  var allThis = $(".commodity_box .select em"); /*底部全选*/
  /* 减  */
  function reduceMod(e,totalH,mod,noX){
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

  };
  /* 加  */
  function plusMod(e,totalH,mod){
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

  };
  /*全选该店商品价格 加*/
  function commodityPlusMod(e,totalH){
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
  };
  var plus;
  /*全选该店商品价格 减*/
  function commodityReduceMod(e,totalH){
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
        plus = parseFloat(n)*parseFloat(n1);
        if(Total < 0)
          Total=0;
        erTotal = false;
      }else{
        Total = parseFloat(Total) - (parseFloat(n)*parseFloat(n1));
        plus = parseFloat(n)*parseFloat(n1);
        if(Total < 0)
          Total=0;
      }

      $("#total_price b").text(Total.toFixed(2)); /* 合计金额  */
    }

    return plus;
  };
  /*全部商品价格*/
  function commodityWhole() {
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
  };

  //选择结算商品

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
        reduceMod($(this),totalH);
        cart_id[carts_id]="";
        delete cart_id[carts_id];
      }else{
        $(this).addClass("pitch_on");
        var n = $(this).parents("ul").children().find(".pitch_on");
        var n1 = $(this).parents("ul").children();
        plusMod($(this),totalH,0,noX);
        cart_id[carts_id]="";
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

        commodityReduceMod($(this),totalH);
        $(this).parent().siblings("ul").find("em").removeClass("pitch_on");
        delete cart_id[carts_id];
      }else{
        commodityReduceMod($(this),totalH);

        $(this).addClass("pitch_on");

        $(this).parent().siblings("ul").find("em").addClass("pitch_on");

        if(plus != NaN && plus != undefined){
          totalH = parseFloat(totalH)-parseFloat(plus);
        }

        commodityPlusMod($(this),totalH);
        cart_id[carts_id]="";
        /*商品全部选中时*/
        var fot = $(".commodity_list_box .tite_tim .pitch_on");
        var fot1 = $(".commodity_list_box .tite_tim em");
        if(fot.length == fot1.length)
          $("#all_pitch_on").addClass("pitch_on");

      }
    }

    //计算选择数值
    number();

  });
  /* 底部全选  */

  var bot = 0;
  $("#all_pitch_on").click(function(){
    if(bot == 0){
      $(this).addClass("pitch_on");
      allThis.removeClass("pitch_on");
      allThis.addClass("pitch_on");
      /*总价格*/
      commodityWhole();
      bot = 1;
      //重新加入属性对象
      for(var key in cart_id_copy){
        cart_id[key]="";
      }
    }else{
      $(this).removeClass("pitch_on");
      allThis.removeClass("pitch_on");
      $("#total_price b").text("0");
      bot = 0;
      //移除全部对象
      for(var key in cart_id){
        delete cart_id[key];
      }
    }
    //计算选择数值
    number();
  });

  function number() {
    var num=0;
    for(var key in cart_id){
      num++;
    }
    //将选择的放入到计算里面
    //$("#confirm_cart").html("结算("+num+")");
  }
  /* 编辑商品  */
  var topb = 0;
  $("#rem_s").click(function(){
    if(topb == 0){
      $(this).text("完成");
      $(".total_amount").hide(); /* 合计  */
      $("#confirm_cart").hide(); /* 结算  */
      $("#confirm_cart1").show(); /* 删除 */
      topb = 1;
    }else{
      topb = 0;
      $(this).text("编辑");
      $(".total_amount").show(); /* 合计  */
      $("#confirm_cart").show(); /* 结算  */
      $("#confirm_cart1").hide(); /* 删除 */
      allThis.removeClass("pitch_on"); /* 取消所有选择  */
      $("#all_pitch_on").removeClass("pitch_on"); /* 取消所有选择  */
      $("#total_price b").text("0"); /*合计价格清零*/

    }

  });
  /* 加减  */
  function reducew(obj){
    //减
    var $this = $(obj);
    var totalH = $("#total_price b").text(); /* 合计金额  */
    var ise = $this.siblings("span").text();
    var gc_id = $this.siblings("input").val();
    if(noX <= 0){
      noX = 0;
    }else{
      noX--;
    };

    if(parseInt(ise) <= 1){
      $this.siblings("span").text("1");
    }else{
      var n =parseInt(ise)-1;
      $this.siblings("span").text(n);
      if($this.parent().parent().children("em").hasClass("pitch_on")){
        var mo = $this.parent().parent().children("em");
        reduceMod(mo,totalH,2,noX);
        noX=0;
      }
    }
  };

  function plusw(obj){
    //加
    var $this = $(obj);
    var totalH = $("#total_price b").text(); /* 合计金额  */
    var ise = $this.siblings("span").text();
    var gc_id = $this.siblings("input").val();
    var n =parseInt(ise)+1;
    noX++;

    $this.siblings("span").text(n);
    if($this.parent().parent().children("em").hasClass("pitch_on")){
      var mo = $this.parent().parent().children("em");
      plusMod(mo,totalH,2,noX);
      noX=0;
    }


  }
  //删除
  function big_cart_remove(){
    $(".commodity_list_term .pitch_on").parent().remove();
    $(".commodity_list .tite_tim > em.pitch_on").parents(".commodity_box").remove();
  }
  //删除
    export default {
      name: "shoppIndex",
      methods:{

      },
      mounted:function () {

      }
    }
</script>

<style scoped>
  @import "../../css/common/common.css";
@import "../../css/other/index.css";
</style>
