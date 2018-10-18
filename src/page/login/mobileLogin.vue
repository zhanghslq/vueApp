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
            _this.$router.push("index");

          }else{
            console.log("jinrushelse")
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
  }
}
</script>
<style scoped >
  @import "../../css/common/common.css";
  @import "../../css/other/login.css";


</style>
<style scoped>

</style>
