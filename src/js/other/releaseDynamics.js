/**
 *    Author:gj
 *　　Create time:2018/07/13
 *　　Description :发布动态
 **/
$(function (){
    controlNum(); //监听字数
    findSlide1(); //专题左右滑动内容
    findSlide2();
    findPageTab();//tab切换
    commodity();  //商品弹层
    lookcheckUp(); //查看收起
    topicTab();   //话题tab切换
    sort();       //综合排序
})

/*监听字数*/
function controlNum(){
    //封装一个限制字数方法
    var checkStrLengths = function (str, maxLength) {
        var maxLength = maxLength;
        var result = 0;
        if (str && str.length > maxLength) {
            result = maxLength;
        } else {
            result = str.length;
        }
        return result;
    }

    //监听输入
    $(".wishContent").on('input propertychange', function () {

        //获取输入内容
        var userDesc = $(this).val();

        //判断字数
        var len;
        if (userDesc) {
            len = checkStrLengths(userDesc, 800);
        } else {
            len = 0
        }

        //显示字数
        $(".wordsNum").html(len + '/800');
    });
}

/*发现首页左右滑动*/
function findSlide1(){
    var swiper1 = new Swiper('.swiper-container', {
      slidesPerView: 2.2,
      spaceBetween: 8,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
}
function findSlide2(){
    var swiper1 = new Swiper('.swiper-container2', {
      slidesPerView: 3.4,
      spaceBetween: 8,
      pagination: {
        el: '.swiper-pagination2',
        clickable: true,
      },
    });
}
/*发现首页tab切换*/
function findPageTab(){
    var $li = $('.tabNav a');
    var $ul = $('.tabList .tabListInfo');
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
/*话题 tab切换*/
function topicTab(){
    var $li = $('.titleRight a');
    var $ul = $('.tabList .tabListInfo');
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
/*弹出层*/
function commodity(){
    $(".dynamic .relevantBtn").on("click",function(){
        $("body").css({"height":"100%","overflow":"hidden"})
        $(".elasticBox").show();
    });
    $(".elasticBox .blackBag").on("click",function(){
        $("body").css({"height":"auto","overflow":"auto"})
        $(".elasticBox").hide();
    })
}
/*查看收起*/
function lookcheckUp(){
      var content = $(".upText .firstText").html();
        var more = true;
        //限制字符个数
        var hide = function (){
            $(".upText .firstText").each(function(){
                var maxheight=120;
                if($(this).text().length>maxheight){
                    $(this).text($(this).text().substring(0,maxheight));
                    $(this).html($(this).html()+'...');
                    more = true;
                    $('.upBtn').html("查看更多");
                } else {
                    $('.upBtn').hide();
                }
            });
         };
     hide();
     $('.upBtn').click(function(){
         if(more){
             $(".upText .firstText").html(content);
             $(this).html("收起");
             more = false;
         }else{
             hide();
         }
     });
}
/*综合排序*/
function sort(){
    $(".topiTitle .titleLeft").on("click",function(){
        $("body").css({"height":"100%","overflow":"hidden"})
        $(".dropDownBox").show();
    });
    $(".dropDownBox .blackBag").on("click",function(){
        $("body").css({"height":"auto","overflow":"auto"})
        $(".dropDownBox").hide();
    })
}