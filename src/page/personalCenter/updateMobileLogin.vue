<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        更新手机号
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="mobileMain mt5">
          <div class="mobileInfo">

            <router-link to="/personal/selectCountryArea">
              <a  class="areaCode">+ 86  <em></em></a>
            </router-link>


            <input type="type" name="" v-model="phoneNumberInput" class="phoneNum">
          </div>
          <div class="mobileInfo">
            <input type="text" class="codeNum" v-model="securityCode" placeholder="请输入验证码">
            <div class="codeBtn">
              <a href="javascript:void(0);" class="obtain fr" v-on:click="check($event)">获取验证码</a>
            </div>
          </div>
          <a v-on:click="checkCode()" class="bindingBtn">绑定新号码</a>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
  //需要携带值跳转
  import store from '../../service/store'
  import 'vue-layer-mobile/need/layer.css'
  import axios from 'axios'
    export default {
        name: "updateMobileLogin",
      data(){
          return{
            phoneNumberInput:'',
            securityCode:''
          }
      },
      methods:{
        checkCode:function(){
          let _this=this;
          axios.post('/api//api/wxapp/sms/validCode',{
            "mobile":_this.phoneNumberInput,
            "code":_this.securityCode
          })
            .then(function (response) {
              console.log(response)
              if(response.data.code==200){
                axios.post('/api/api/wxapp/account/update',{
                  "uid":store.fetch("uid"),
                  "	mobile":_this.phoneNumberInput
                }).then(function (responese) {
                  if(response.data.code==200){
                    _this.$layer.toast({
                      icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
                      content: '已成功更换手机号',
                      time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
                    })
                    _this.$router.push({ name: 'modifyPhone', query: { mobile: _this.phoneNumberInput }})
                  }else {
                    _this.$layer.toast({
                      icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
                      content: response.data.message,
                      time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
                    })
                  }
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
        getCode: function(){
          let _this=this;
          axios.post('/api//api/wxapp/sms/sendAuthCode',{
            "mobile":_this.phoneNumberInput
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
        mobile_view:function (mobile) {
          var mobile = '+'+mobile+'  <em></em>';
          $('.areaCode').append(mobile);
        },

      },
      mounted(){
        var mobile = this.$route.params.mobileAddress
        if(mobile){
          $('.areaCode').empty()
          this.mobile_view(mobile)
        }
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/login.css";
</style>
