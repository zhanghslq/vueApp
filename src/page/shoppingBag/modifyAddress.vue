<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        修改收货地址
        <a href="javascript:void(0);" class="releaseBtn">删除</a>
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="addressCorrel">
          <div class="addressFillIn">
            <div class="fillInfo">
              <i>*</i>
              <span>收货人：</span>
              <input type="text" name="" placeholder="请输入姓名">
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>手机号码：</span>
              <input type="text" name="" placeholder="请输入手机号">
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>所在地区：</span>
              <a @click="toShow" class="choiceCity" id="choiceCity">{{res}}</a>
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>详细地址：</span>
              <textarea class="detailedAdd" placeholder="请输入详细地址"></textarea>
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>身份证号：</span>
              <input type="text" name="" placeholder="请输入身份证号">
            </div>
          </div>
          <div class="identification">
            <div class="idLeft"><span>身份证正反面照片</span><em>(选填)</em></div>
            <em class="idRight"></em>
          </div>
          <div class="default">
            <div class="defaultLeft"><span>该地址为当前默认地址</span></div>
          </div>
          <a href="#" class="preservation">保存</a>
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
      name: "modifyAddress",
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
      components:{
        vuePickers
      },
      methods:{
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
      },
      mounted:function () {

      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
@import "../../css/other/threeLevel.css";
</style>
