<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        我的通知
        <router-link class="remind" to="remindSetUp">
          提醒设置
        </router-link>

      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="myNoticeMain">

         <router-link to="outorder">
            <em class="schoolIcon"></em>
            <div class="noticeTitle">
              <h3>捕手号外</h3>
              <p>麻辣小龙虾3.6斤装低至75</p>
            </div>
            <div class="times">
              <p>06/14 12:53</p>
              <span></span>
            </div>
         </router-link>
          <a href="#">
            <em class="shopsIcon"></em>
            <div class="noticeTitle">
              <h3>店铺通知</h3>
              <p>暂无消息</p>
            </div>
            <div class="times">
              <p>06/14 12:53</p>
            </div>
          </a>
          <a href="#">
            <em class="systemIcon"></em>
            <div class="noticeTitle">
              <h3>系统消息</h3>
              <p>暂无消息</p>
            </div>
          </a>
          <router-link to="transacitonLogistics">
            <em class="transactionIcon"></em>
            <div class="noticeTitle">
              <h3>交易物流</h3>
              <p>暂无消息</p>
            </div>
          </router-link>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "myNotice"
    }
</script>

<style scoped>
  @import "../../css/common/common.css";
  @import "../../css/other/fragmentary.css";
</style>
