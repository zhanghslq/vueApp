/**
 *    Author:gj
 *　　Create time:2018/07/05
 *　　Description :小零碎
 **/
$(function(){
   shareBox();
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