/**
 *    Author:gj
 *　　Create time:2018/07/26
 *　　Description :
 **/
$(function(){
   exchangeTab();  //兑换tab切换
   searchTab();  //搜索列表tab切换
   shoppSettlement(); //购物车结算
   collectionTab(); //我的收藏tab切换
   couponsTab();   //优惠券tab切换
   markeingTab();    //营销助手tab切换
   rewardTab();      //奖励任务tab切换
   show_time();      //奖励任务时间倒计时
})

/*兑换tab切换*/
function exchangeTab(){
    var $li = $('.exchangeNav a');
    var $ul = $('.exchangeCont .contInfo');
    $("#navcon02").css('height',$ul.eq(0).height())
    $li.click(function(){
        var $this = $(this);
        var $t = $this.index();
        $li.removeClass();
        $this.addClass('Cur');
        $ul.css('display','none');
        $ul.eq($t).css('display','block');
        $("#navcon02").css('height',$ul.eq($t).height())
    })
}

/*搜索列表 tab切换*/
function searchTab(){
    var $li = $('.tabNav a');
    var $ul = $('.searchCont .searchContInfo');
    $("#navcon01").css('height',$ul.eq(0).height())
    $li.click(function(){
        var $this = $(this);
        var $t = $this.index();
        $li.removeClass();
        $this.addClass('Cur');
        $ul.css('display','none');
        $ul.eq($t).css('display','block');
        $("#navcon01").css('height',$ul.eq($t).height())
    })
}

/*购物车结算*/
function shoppSettlement(){
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
    $(".minus").click(function() {
        var $this = $(this);
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
    });
    
    $(".plus").click(function(){
        //加
        var $this = $(this);
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
    })
    
     //删除
     $("#confirm_cart1").click(function(){
        $(".commodity_list_term .pitch_on").parent().remove();
        $(".commodity_list .tite_tim > em.pitch_on").parents(".commodity_box").remove();    
     })
}

/*我的收藏tab切换*/
function collectionTab(){
    var $li = $('.collectionNav a');
    var $ul = $('.collectionList .listInfo');
    $("#navcon03").css('height',$ul.eq(0).height())
    $li.click(function(){
        var $this = $(this);
        var $t = $this.index();
        $li.removeClass();
        $this.addClass('Cur');
        $ul.css('display','none');
        $ul.eq($t).css('display','block');
        $("#navcon03").css('height',$ul.eq($t).height())
    })
}
/*优惠券 tab切换*/
function couponsTab(){
    var $li = $('.couponNav a');
    var $ul = $('.couponContent .couponList');
    $("#navcon03").css('height',$ul.eq(0).height())
    $li.click(function(){
        var $this = $(this);
        var $t = $this.index();
        $li.removeClass();
        $this.addClass('Cur');
        $ul.css('display','none');
        $ul.eq($t).css('display','block');
        $("#navcon03").css('height',$ul.eq($t).height())
    })
}
/*营销助手 tab切换*/
function markeingTab(){
    var $li = $('.maketingNav a');
    var $ul = $('.maketingCont .contInfo');
    $("#navcon04").css('height',$ul.eq(0).height())
    $li.click(function(){
        var $this = $(this);
        var $t = $this.index();
        $li.removeClass();
        $this.addClass('Cur');
        $ul.css('display','none');
        $ul.eq($t).css('display','block');
        $("#navcon04").css('height',$ul.eq($t).height())
    })
}
/*奖励任务 tab切换*/
function rewardTab(){
    var $li = $('.rewardNav a');
    var $ul = $('.rewardCont .contInfo');
    $("#rewardTaskNav").css('height',$ul.eq(0).height())
    $li.click(function(){
        var $this = $(this);
        var $t = $this.index();
        $li.removeClass();
        $this.addClass('Cur');
        $ul.css('display','none');
        $ul.eq($t).css('display','block');
        $("#rewardTaskNav").css('height',$ul.eq($t).height())
    })
} 
/*奖励任务时间倒计时*/
function show_time() {
    $(".highestTime .timeRight").each(function() {
        var endtime = $(this).prop("title");
        var time_start = new Date().getTime(); //设定当前时间
        var time_end = new Date(endtime).getTime(); //设定目标时间
        var time_distance = time_end - time_start;
        var timer;
        if (time_distance >= 0) {
            var int_day = Math.floor(time_distance / 86400000)
            time_distance -= int_day * 86400000;
            var int_hour = Math.floor(time_distance / 3600000)
            time_distance -= int_hour * 3600000;
            var int_minute = Math.floor(time_distance / 60000)
            time_distance -= int_minute * 60000;
            var int_second = Math.floor(time_distance / 1000)
            if (int_day < 10) {
                int_day = "0" + int_day;
            }
            if (int_hour < 10) {
                int_hour = "0" + int_hour;
            }
            if (int_minute < 10) {
                int_minute = "0" + int_minute;
            }
            if (int_second < 10) {
                int_second = "0" + int_second;
            }
            $(this).html("剩" + int_hour + "：" + int_minute + "：" + int_second);
        }else{
            clearInterval(timer);
            $(this).html('00：00：00');
        }

    })
    timer = setTimeout("show_time()", 1000);
}