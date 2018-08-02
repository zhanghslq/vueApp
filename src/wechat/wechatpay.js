function onBridgeReady(){
  WeixinJSBridge.invoke(
    'getBrandWCPayRequest', {
      "appId":"wx2421b1c4370ec43b",     //公众号名称，由商户传入
      "timeStamp":"1395712654",         //时间戳，自1970年以来的秒数
      "nonceStr":"e61463f8efa94090b1f366cccfbbb444", //随机串
      "package":"prepay_id=u802345jgfjsdfgsdg888",
      "signType":"MD5",         //微信签名方式：
      "paySign":"70EA570631E4BB79628FBCA90534C63FF7FADD89" //微信签名
    },
    function(res){
      if(res.err_msg == "get_brand_wcpay_request:ok" ){
        // 使用以上方式判断前端返回,微信团队郑重提示：
        //res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
      }
    });
}
if (typeof WeixinJSBridge == "undefined"){
  if( document.addEventListener ){
    document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
  }else if (document.attachEvent){
    document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
    document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
  }
}else{
  onBridgeReady();
}
//--------------------------------------上面是微信官方代码
//https://open.weixin.qq.com/connect/oauth2/authorize?appid=APPID&redirect_uri=REDIRECT_URI&response_type=code&scope=SCOPE&state=STATE#we-chat_redirect
//vue h5 微信支付代码
weixinPay:function(data){
  var vm= this;
  if (typeof WeixinJSBridge == "undefined"){//微信浏览器内置对象。参考微信官方文档
    if( document.addEventListener ){
      document.addEventListener('WeixinJSBridgeReady', vm.onBridgeReady(data), false);
    }else if (document.attachEvent){
      document.attachEvent('WeixinJSBridgeReady', vm.onBridgeReady(data));
      document.attachEvent('onWeixinJSBridgeReady',vm.onBridgeReady(data));
    }
  }else{
    vm.onBridgeReady(data);
  }
},
onBridgeReady:function(data){
  var  vm = this;
  WeixinJSBridge.invoke(
    'getBrandWCPayRequest',{
      debug:true,
      "appId":data.appId,     //公众号名称，由商户传入
      "timeStamp":data.timeStamp, //时间戳，自1970年以来的秒数
      "nonceStr":data.nonceStr, //随机串
      "package":data.package,
      "signType":data.signType, //微信签名方式：
      "paySign":data.paySign, //微信签名
      //这里的信息从后台返回的接口获得。
      jsApiList: [
        'chooseWXPay'
      ]
    },
    function(res){
      // 使用以上方式判断前端返回,微信团队郑重提示：res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
      if(res.err_msg == "get_brand_wcpay_request:ok" ){
        if(vm.fromRoute == 'personal'){
          window.location.href = vm.BASE_URL + 'index.html#/depositResult'
        }else {
          vm.confirmTry();
        }
      }else{
        alert("取消支付！");
      }
    }
  );
}


wx.config({
  debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
  appId: '@shareInfo.AppId', // 必填，公众号的唯一标识
  timestamp: '@shareInfo.TimeStamp', // 必填，生成签名的时间戳
  nonceStr: '@shareInfo.NonceStr', // 必填，生成签名的随机串
  signature: '@shareInfo.Signature',// 必填，签名，见附录1
  jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
});
var title = "时光飞逝，这是@(String.IsNullOrEmpty(ViewBag.NickName)?"你":ViewBag.NickName)十年之后的样子";//分享标题
var desc = "想要告诉你，慧吃才会更美！";// 分享描述
var link = "@Request.Url.ToString()";
var imgUrl = "@ViewBag.HeadImgUrl"; // 分享图标
wx.ready(function () {
  wx.onMenuShareAppMessage({
    title: title, // 分享标题
    desc: desc, // 分享描述
    link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: imgUrl, // 分享图标
    type: 'link', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {
      // 用户确认分享后执行的回调函数
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
    }
  });
  wx.onMenuShareTimeline({
    title: title, // 分享标题
    link: link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
    imgUrl: imgUrl, // 分享图标
    success: function () {
      // 用户确认分享后执行的回调函数
    },
    cancel: function () {
      // 用户取消分享后执行的回调函数
    }
  });
  wx.error(function (res) {
    alert(res.errMsg);  //打印错误消息。及把 debug:false,设置为debug:true就可以直接在网页上看到弹出的错误提示
  });
});
