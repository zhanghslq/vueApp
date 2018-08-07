<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        新增收货地址
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
            <div class="idTop">
              <div class="idLeft"><span>身份证正反面照片</span><em>(选填)</em></div>
              <em class="idRight idCur"></em>
            </div>
            <div class="idBottom">
              <p>温馨提示：请上传原始比例的身份证正反面，请勿裁剪涂改，保证身份信息清晰显示，否则无法通过审核</p>
              <div class="idPhoto">
                <div class="idPhotoInfo">
                  <div class="photoLeft"></div>
                  <div class="photoRight"></div>
                </div>
                <p>若您已上传过当前身份证对应的照片 <a href="#">立即同步</a></p>
              </div>
              <div class="explain">
                <p>为什么需要上传身份信息？</p>
                <p>根据海关规定，购买跨境商品需要办理清关手续，请您配合上传身份信息，以确保您购买的商品顺利通过海关检查。（猩际优选承诺所传身份证明只用于办理跨境商品的清关手续，不作他途使用，其他任何人均无法查看）购买跨境商品时，提交的身份证信息需与下单时所填写的收货人相符</p>
              </div>
            </div>
          </div>
          <div class="default">
            <div class="defaultLeft"><span>设置为默认地址</span><em>(注:每次下单时都会使用该地址)</em></div>
            <label class="ui-switch" >
              <input type="checkbox"   id="test">
            </label>
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
    name: "newlyAddress",
    components: {
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

      methods:{
      test(){
        console.log("进入test")
        if(document.getElementById("test").checked){
          console.log("选中")
        }else {
          console.log("this")
        }
      },
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
