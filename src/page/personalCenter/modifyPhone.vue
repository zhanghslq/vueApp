<template>
    <div>
      <!--头部 开始-->
      <header>
        <router-link to="/accountInfo">
          <a  class="returnBtn"></a>
        </router-link>

        手机号
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="modifyMain">
          <div class="mobile" v-html="mobile"></div>
          <router-link to="updateMobileLogin">
            <a href="javascript:void(0);" class="replaceBtn">更换手机号</a>
          </router-link>



        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "modifyPhone",
        data(){
            return{
              mobile:''
            }
        },
      mounted(){
          this.mobile=this.$route.query.mobile
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
