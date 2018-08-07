<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        账号信息
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="accountMain">
          <div class="accoutnInfo">
            <a href="#">
              <span class="infoLeft">头像</span>
              <div class="infoRight">
                <img :src="imageUrl">
                <em></em>
              </div>
            </a>
            <a href="#">
              <span class="infoLeft">昵称</span>
              <div class="infoRight">
                <span>{{username}}</span>
                <em></em>
              </div>
            </a>
            <a href="#">
              <span class="infoLeft">微信号</span>
              <div class="infoRight">
                <span>{{wechat}}</span>
                <em></em>
              </div>
            </a>
            <a href="#">
              <span class="infoLeft">个性签名</span>
              <div class="infoRight">
                <span>{{sign}}</span>
                <em></em>
              </div>
            </a>
            <a href="#">
              <span class="infoLeft">手机号</span>
              <div class="infoRight">
                <span>{{mobile}}</span>
                <em></em>
              </div>
            </a>
          </div>
          <div class="accoutnInfo">
            <a href="javascript:void(0);">
              <span class="infoLeft">ID</span>
              <div class="infoRight">
                <span>{{id}}</span>
              </div>
            </a>
            <a href="javascript:void(0);">
              <span class="infoLeft">累计消费</span>
              <div class="infoRight">
                <span>{{consumption}}元</span>
              </div>
            </a>
          </div>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
  import axios from 'axios'
    export default {
        name: "accountInfo",
        data(){
          return{
            username:'',
            imageUrl:'',
            wechat:'',
            sign:'',
            mobile:'',
            id:'',
            consumption:0//累计消费
          }
        },
      mounted:function () {
        var _this=this
        axios.post('/api//api/wxapp/account/info',{
          "uid":1
        })
          .then(function (response) {
            _this.username=response.data.data.nickName
            _this.imageUrl=response.data.data.photo
            _this.sign=response.data.data.personalitySignature
            _this.mobile=response.data.data.mobile
            _this.id=response.data.data.ucode
            _this.consumption=response.data.data.consumeTotal
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    }
</script>

<style scoped>

@import "../../css/other/personalCenter.css";
</style>
