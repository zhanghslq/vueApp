<template>
  <div>
    <!--头部 开始-->
    <header>
      <a href="javascript:history.go(-1);" class="returnBtn"></a>
      修改微信号
    </header>
    <!--头部 结束-->
    <!--中间 开始-->
    <main>
      <div class="modifyMain">
        <div class="modifyInfo">
          <input type="text" v-model="wechatNumber"  placeholder="请输入">
        </div>
        <p>限2-16个字符</p>
        <a v-on:click="updateWechat()" class="preservationBtn">保存</a>
      </div>
    </main>
    <!--中间 结束-->
  </div>
</template>

<script>
  import store from '../../service/store'
  import axios from 'axios'
    export default {
      name: "modifyWechat",
      data(){
        return{
          wechatNumber:''
        }
      },
      methods:{
        updateWechat(){
          console.log("jinru ")
          let self=this;
          axios.post("/api/api/wxapp/account/update",
            {"uid":store.fetch("uid"),"wechat":self.wechatNumber})
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
        this.wechatNumber=this.$route.query.wechatNumber
      }
    }
</script>

<style scoped>
  @import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
