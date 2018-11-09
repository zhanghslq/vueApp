/**
 *    Author:gj
 *　　Create time:2018/07/05
 *　　Description :小零碎
 **/
$(function(){
   shareBox();
   dataTab();            //数据中心tab切换
   rotationShopp();     //商品详情轮播图
   explain();           //商品说明弹层
   choiseShopp();       //商品选择弹层
   makeUpone();
   refundReason();      //退款--原因
   refundState();       //退款--状态
   refundExchange();    //退款--换货
})
$(".codeBtn a.obtain").on("click", function() {
    var validCode=true;
    var time=60;
    var code=$(this);
    //判断再点点击
    if(code.hasClass('lock')) return false;

    code.addClass('lock');

    //判断时间
    if (validCode) {
        validCode=false;
    var t=setInterval(function  () {
        time--;
        code.addClass("obtainNo");
        code.html(time+"秒");
        if (time==0) {
            code.removeClass('lock');
            clearInterval(t);
            code.html("获取验证码");
            validCode=true;
        code.removeClass("obtainNo");
        }
    },1000)
    }
});

/*分享的弹层 开始*/
function shareBox(){
    $(".shareMain .cancelBtn").on("click",function(){
        $(".elasticBox").hide();
    })
    $(".shareBtn").on("click",function(){
        $(".elasticBox").show();
    })
}
/*分享的弹层 结束*/
/*数据中心的tab切换 开始*/
function dataTab(){
     var $li = $('#datacon .tabNave li');
    var $ul = $('#datacon .tabCont li');
    $("#datacon").css('height',$ul.eq(0).height())
    $li.click(function(){
        var $this = $(this);
        var $t = $this.index();
        $li.removeClass();
        $this.addClass('Cur');
        $ul.css('display','none');
        $ul.eq($t).css('display','block');
        $("#datacon").css('height',$ul.eq($t).height())
    })
}
/*数据中心的tab切换 结束*/


/*商品详情的轮播图*/
function rotationShopp(){
      var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });
    $("#choisShopp,#explain,.distribution").click(function(){
       swiper.autoplay.stop();
    });
    $(".choiceGoods .closeBtning,.addCart,.explainText .closeBtn,.picker").click(function(){
       swiper.autoplay.start();
    });
}
/*商品说明弹层 开始*/
function explain(){
    $(".choiceProduct #explain").on("click",function(){
        $("body").css({"height":"100%","overflow":"hidden"})
        $(".elasticBox").show();
    });
    $(".elasticBox .closeBtn").on("click",function(){
        $("body").css({"height":"auto","overflow":"auto"})
        $(".elasticBox").hide();
    })
}
/*商品说明弹层 结束*/

/*商品选择弹层 开始*/
function choiseShopp(){
    $("#choisShopp").on("click",function(){
        $("body").css({"height":"100%","overflow":"hidden"})
        $(".choicElastic").show();
        $(".minus").click(function() {
            var t = $(this).parent().find('.num');
            t.text(parseInt(t.text()) - 1);
            if (t.text() <= 1) {
              t.text(1);
            }
        });
        $(".plus").click(function() {
            var t = $(this).parent().find('.num');
            t.text(parseInt(t.text()) + 1);
            if (t.text() <= 1) {
              t.text(1);
            }
        });
    });
    $(".choicElastic .closeBtning").on("click",function(){
      
        $("body").css({"height":"auto","overflow":"auto"})
        $(".choicElastic").hide();
    })
}
/*商品选择弹层 结束*/
/*热卖推荐*/
function makeUpone(){
    var swiper1 = new Swiper('.swiper-container2', {
      slidesPerView: 3.5,
      pagination: {
        el: '.swiper-pagination2',
        clickable: true,
      },
    });
}
/*退款选择项弹层 开始*/
function refundReason(){
    $(".refundMain #reason").on("click",function(){
        $(".elasticBox").show();
        $(".elasticBox .boxContent .reasonInfo").show();
    });
    $(".elasticBox .closeBtn").on("click",function(){
        $(".elasticBox").hide();
        $(".elasticBox .boxContent .reasonInfo").hide();
    });
}
function refundState(){
    $(".refundMain #state").on("click",function(){
        $(".elasticBox").show();
        $(".elasticBox .boxContent .stateInfo").show();
    });
    $(".elasticBox .closeBtn").on("click",function(){
        $(".elasticBox").hide();
        $(".elasticBox .boxContent .stateInfo").hide();
    });
}
function refundExchange(){
    $(".refundMain #refunExchange").on("click",function(){
        $(".elasticBox").show();
        $(".elasticBox .boxContent .exchangeInfo").show();
    });
    $(".elasticBox .closeBtn").on("click",function(){
        $(".elasticBox").hide();
        $(".elasticBox .boxContent .exchangeInfo").hide();
    });
}

/*退款选择项弹层 结束*/