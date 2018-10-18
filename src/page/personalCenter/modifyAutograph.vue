<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        设置个性签名
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="modifyMain">
          <div class="textareaBox">
            <textarea class="wishContent" maxlength="40" v-model="personalitySignature"></textarea>
            <span class="wordsNum">0/40</span>
          </div>
          <a v-on:click="updateSign()" class="preservationBtn">保存</a>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
  import store from '../../service/store'
  import axios from 'axios'
    export default {
        name: "modifyAutograph",
      data(){
          return{
            personalitySignature:''
          }
      },
      methods:{
      autographNum(){
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
          len = checkStrLengths(userDesc, 40);
        } else {
          len = 0
        }

        //显示字数
        $(".wordsNum").html(len + '/40');
      });
    },
        updateSign(){
          let self=this;
          axios.post(store.getAddress()+"/api/wxapp/account/update",
            {"uid":store.fetch("uid"),"personalitySignature":self.personalitySignature})
            .then(function(resp) {
              console.log(resp)
              if(resp.data.code==200){
                self.$router.push("accountInfo")
              }else {
                console.log(resp)
              }
            }).catch(function (err) {
            console.log(err)
          })
        }
      },
      mounted(){
          this.autographNum();
          this.personalitySignature=this.$route.query.personalitySignature
      }
    }
</script>

<style scoped>
  @import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
