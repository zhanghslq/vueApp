<template>
  <div >
  <!--头部 开始-->
  <header>
    <div class="searchHead">
      <div class="search">
        <em v-on:click="searchList"></em>
        <input type="text" v-model="kw" placeholder="搜索喜欢的宝贝">
      </div>

        <a  class="cancelBtn" @click="$router.back(-1)">取消</a>

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

