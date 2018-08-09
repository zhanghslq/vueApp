<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        提现信息管理
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="putForAdminist">
          <div class="putForFill">
            <div class="fillTo">
              <label>持卡人姓名：</label>
              <input type="text">
            </div>
            <div class="fillTo">
              <label>卡号：</label>
              <input type="text" class="cardNum">
              <a href="#" class='banks'>支持银行储蓄卡</a>
            </div>
            <div class="fillTo" >
              <label>省市：</label>
              <a href="javascript:void(0);" class="choiceCity" @click="toShow" id="choiceCity">{{res}}</a>
            </div>
            <div class="fillTo">
              <label>分支行：</label>
              <input type="text" class="cardNum">
            </div>
            <div class="fillTo">
              <label>手机号：</label>
              <input type="text" class="cardNum">
            </div>
            <div class="fillTo">
              <label>身份证号：</label>
              <input type="text">
            </div>
          </div>
          <a href="#" class="nextStepBtn">下一步</a>
          <div class="explain">
            <p>1、银行卡信息用来提现收款</p>
            <p>2、请确保姓名、卡号、分支行、省市、身份证号码信息真实准确且匹配</p>
            <p>3、验证通过后身份证号码不可修改</p>
            <p>4、补全信息后您还需要签订兼职劳动合同</p>
            <p>5、海外店主请添加官方管家：qxzl02提供提现所需信息</p>
          </div>
        </div>
      </main>
      <!--中间 结束-->
      <vue-pickers
        :show="show"
        :link="link"
        :columns="columns"
        :selectData="pickData"
        @cancel="close"
        @confirm="confirmFn"></vue-pickers>
    </div>
</template>

<script>
  import vuePickers from 'vue-pickers'
  import {provs_data, citys_data, dists_data} from 'vue-pickers/lib/areaData'
    export default {
      name: "putForwardAdminist",
      components:{
        vuePickers
      },
      data() {
        return {
          isCopy: '',
          res: '请点击选择省市区',
          show: false,
          columns: 3,
          link: true,
          pickData: {
            data1: provs_data,
            data2: citys_data,
            data3: dists_data
          }
        }
      },
      methods: {
        close() {
          this.show = false
        },
        confirmFn(val) {
          this.show = false
          this.res = val.select1.text + val.select2.text + val.select3.text
          this.pickData.default = [val.select1, val.select2, val.select3]
        },
        toShow() {
          this.show = true
        },
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/fragmentary.css";
</style>
