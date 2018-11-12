<template>
  <div>
    <header>
      <a href="javascript:history.go(-1);" class="returnBtn"></a>
      登录
    </header>

    <!--头部 结束-->
    <!--中间 开始-->
    <main>
      <div class="mobileMain">
        <p>验证手机号登录</p>
        <div class="mobileInfo">
          <router-link to="/selectCountryArea">
             <a href="javascript:void(0);" class="areaCode">+ 86 <em></em></a>
          </router-link>
          <input type="type"  class="phoneNum" id="phoneNum" v-model="phoneNumInput">
        </div>
        <div class="mobileInfo">
          <input type="text" class="codeNum" placeholder="请输入验证码" v-model="securityCode">
          <div class="codeBtn">
            <a href="javascript:void(0);" class="obtain fr" v-on:click="check($event)">获取验证码</a>
          </div>
        </div>
        <div class="voice">收不到短信，试试 <a href="javascript:void(0);">语音验证码</a></div>

          <a  class="logonBtn" v-on:click="login()">登录</a>

      </div>
    </main>
  </div>
</template>

<script>
/* eslint-disable */
import store from '../../service/store'
import 'vue-layer-mobile/need/layer.css'
import axios from 'axios'
export default {
  name: 'mobileLogin',
  data(){
    return {
      phoneNumInput:'',
      securityCode:''
    }
  },
  methods: {
    login:function(){
      let _this=this;
      axios.post(store.getAddress()+'/api/wxapp/sms/validCode',{
        "mobile":this.phoneNumInput,
        "code":this.securityCode
      })
        .then(function (response) {
          console.log(response)
          if(response.data.code==200){
            console.log(response)
            store.save("uid",response.data.data.uid)
            store.save("mobile",response.data.data.mobile)
            if(response.data.data.isStoreKeeper){
              store.save("isStoreKeeper",1)

              if(store.fetch("lastPage")=='[]'||store.fetch("lastPage")==''||store.fetch("lastPage")==undefined||store.fetch("lastPage")==null){
                store.save("lasePage","index")
              }
              if(store.judge()==1){
                window.webkit.messageHandlers.currentCookies.postMessage({
                  "code": "81",
                  "role":"1",
                });

                window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
                  "code": "91",
                  "url":store.getNextAddress()+store.fetch("lastPage")
                });
              }else if(store.judge()==0){
                window.androidXingJiApp.postMessage(JSON.stringify({
                  "code": "81",
                  "role":"1",
                }));

                window.androidXingJiApp.postMessage(JSON.stringify({
                  "code": "91",
                  "url":store.getNextAddress()+store.fetch("lastPage")}));
              }
            }else{
              store.save("isStoreKeeper",0)
              if(store.judge()==1){
                window.webkit.messageHandlers.currentCookies.postMessage({
                  "code": "81",
                  "role":"0",
                });
                window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
                  "code": "91",
                  "url":store.getNextAddress()+store.fetch("lastPage")
                });
              }else if(store.judge()==0){
                window.androidXingJiApp.postMessage(JSON.stringify({
                  "code": "81",
                  "role":"0",}));

                window.androidXingJiApp.postMessage(JSON.stringify({
                  "code": "91",
                  "url":store.getNextAddress()+store.fetch("lastPage")}));
              }

            }

          }else{
            _this.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: response.data.message,
              time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })

          }
        })
        .catch(function (error) {
          console.log(error);
        })
    },
    getCode: function(){
      let _this=this;
      axios.post(store.getAddress()+'/api/wxapp/sms/sendAuthCode',{
        "mobile":this.phoneNumInput
      })
        .then(function (response) {
          if(response.data.code==200){
            _this.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: '已成功发送验证码',
              time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })
          }else{
            _this.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: response.data.message,
              time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })
          }

        })
        .catch(function (error) {
          console.log(error);
        })
    },
    check: function (e) {

      var validCode = true
      var time = 60
      var code = e.currentTarget
      // 判断再点点击
      if (code.classList.contains('lock')) return false

      this.getCode();
      code.classList.add('lock')
      // 判断时间
      if (validCode) {
        validCode = false
        var t = setInterval(function () {
          time--
          code.classList.add('obtainNo')
          code.innerHTML = time + '秒'
          if (time === 0) {
            code.classList.remove('lock')
            clearInterval(t)
            code.innerHTML = '获取验证码'
            validCode = true
            code.classList.remove('obtainNo')
          }
        }, 1000)
      }
    },

    mobile_view: function (mobile) {
      var mobile = '+'+ mobile+'  <em></em>';
      $('.areaCode').append(mobile);
    },


  },
  mounted: function() {
      var mobile = this.$route.params.mobileAddress
      if(mobile){
        $('.areaCode').empty()
        this.mobile_view(mobile)
      }

//1：登录后把用户信息存储到本地（code：81 , role :0普通 1我是店主），
// 除了code，role这两个字段名称固定，其他的不用固定，传什么本地以key-value的形式存什么。
   /* window.webkit.messageHandlers.currentCookies.postMessage({
      "code": "81",
      "role":"1",
      "loginname":"xiaoma",
      "password":"adfadfjjkkjjkdjkjjjkjkkjkjkjkkklkljdf"
  });

    //2：网页获取本地存储的数据（code：82 ）
   // 网页需要添加js方法  saveMobileData(string)，当原生获取到82方法时，
    // 会将本地存储的key-value形式的数据组合成json字符串形式返回给H5
    window.webkit.messageHandlers.currentCookies.postMessage({
      "code": "82"});

    //微信支付
    window.webkit.messageHandlers.currentCookies.postMessage({
      "code": "83",
      "payStr":"微信支付的字符串"
  });

    //打开新页面
    window.webkit.messageHandlers.currentCookies.postMessage({
      "code": "91",
      "url":"http://www.baidu.com"
      });



    //5：退出登录（code：99）
    window.webkit.messageHandlers.currentCookies.postMessage({
      "code": "99"
      });

   // 6：清除缓存（code：100  解决改变网页样式手机上不及时显示）
    window.webkit.messageHandlers.currentCookies.postMessage({
      "code": "99"
      });*/

  }
}
</script>
<style scoped >
  @import "../../css/common/common.css";
  @import "../../css/other/login.css";


</style>
<style scoped>

</style>
