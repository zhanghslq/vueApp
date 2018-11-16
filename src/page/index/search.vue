<template>
  <div >
  <!--头部 开始-->
  <header>
    <div class="searchHead">
      <div class="search">
        <em v-on:click="searchList"></em>
        <input type="text" v-model="kw" placeholder="搜索喜欢的宝贝">
      </div>

        <a  class="cancelBtn" v-on:click="toBack()">取消</a>

    </div>
  </header>
  <!--头部 结束-->
  <!--中间 开始-->
  <main>
    <div class="searchMain">
      <div class="searchTitle">热门搜索</div>
      <div class="searchInfo">
        <a href="#">超值梁板</a><a href="#">超值梁板</a><a href="#">超值梁板超值梁板</a>
      </div>
    </div>
  </main>
  <!--中间 结束--><!--底部 开始-->
  </div>
</template>

<script>
  import store from '../../service/store'
export default {
  name: 'search',
  data(){
    return{
      kw:''
    }
  },
  methods:{
    toBack(){
      if(store.isDev()){
        this.$router.back(-1)
      }else{

        if(store.judge()==1) {
          window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
            "code": "91",
            "index":1,
            "url":store.getNextAddress()+"index"
          });
        }else if(store.judge()==0) {
          window.androidXingJiApp.postMessage(JSON.stringify({
            "code": "91",
            "index":1,
            "url":store.getNextAddress()+"index"}));
        }
        /*if(store.judge()==0){
          window.androidXingJiApp.postMessage(JSON.stringify({
            "code": "66",
          }))
        }else if(store.judge()==1){
          window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
            "code": "66",
          });
        }*/
      }

    },
    searchList(){
      store.save("kw",this.kw)
      this.$router.push({ name: 'searchList', params: { kw: this.kw }})
    }
  },



}
</script>
<style scoped >
  @import "../../css/common/common.css";
  @import "../../css/other/secondLevel.css";
</style>

