<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        修改昵称
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="modifyMain">
          <div class="modifyInfo">
            <input type="text" v-model="username"  placeholder="请输入">
          </div>
          <p>限2-16个字符</p>
          <a v-on:click="updateName()" class="preservationBtn">保存</a>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
  import axios from 'axios'
  import store from '../../service/store'
    export default {
        name: "modifyName",
        data(){
            return{
              username:''
            }
        },
        methods:{
          updateName(){
            console.log("jinru ")
            let self=this;
            axios.post("/api/api/wxapp/account/update",
              {"uid":store.fetch("uid"),"nickName":self.username})
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
        this.username=this.$route.query.name
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
