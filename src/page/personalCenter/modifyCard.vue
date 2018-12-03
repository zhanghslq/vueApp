<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        修改银行卡信息
        <a v-on:click="deleteCard()" class="releaseBtn">删除</a>
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="addressCorrel">
          <div class="addressFillIn">
            <div class="fillInfo">
              <i>*</i>
              <span>持卡人：</span>
              <input type="text" v-model="cardholder" name="" placeholder="请输入姓名">
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>手机号：</span>
              <input  type="text" v-model="phoneNumber" name="" placeholder="请输入手机号">
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>银行卡号：</span>
              <input  type="text" v-model="cardNumber" name="" placeholder="请输入银行卡号">
            </div>


            <div class="fillInfo">
              <i>*</i>
              <span>所在地区：</span>
              <a @click="toShow" class="choiceCity" id="choiceCity">{{res}}</a>
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>银行名称：</span>
              <input  placeholder="请输入详细地址" v-model="bankName">
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>分支行：</span>
              <input  placeholder="请输入详细地址" v-model="branchBank">
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>身份证号：</span>
              <input type="text" name="" placeholder="请输入身份证号" v-model="idNumber">
            </div>
          </div>


          <a v-on:click="updateCard()" class="preservation">保存</a>
        </div>
      </main>
      <!--中间 结束-->
      <vue-pickers
        :show="show"
        :link="link"
        :columns="columns"
        :selectData="pickData"
        :defaultData="defaultData"
        @cancel="close"
        @confirm="confirmFn"></vue-pickers>
    </div>
</template>

<script>
  import vuePickers from 'vue-pickers'
  import 'vue-layer-mobile/need/layer.css'
  import store from '../../service/store'
  import axios from 'axios'
    export default {
      name: "modifyCard",
      data() {
        return {
          cardId:'',
          cardNumber:'',
          bankName:'',
          branchBank:'',
          isCopy: '',
          res: '请点击选择省市区',
          show: false,
          columns: 3,
          link: true,
          defaultData:[],
          pickData: {
            data1: [],
            data2: [],
            data3: []
          },
          prov_id:'',
          city_id:'',
          area_id:'',

          cardholder:'',
          phoneNumber:'',
          detailAddress:'',
          idNumber:'',

          //手机号
          mobile:'',
          //省份编码
          provinceCode:'',
          //城市编码
          cityCode:'',
          //区编码
          areaCode:'',
          //详细地址

        }
      },

      components:{
        vuePickers,

      },
      methods:{
        deleteCard(){
          var self =this;
          axios.post(store.getAddress()+'/api/wxapp/account/delBankCard',{
            "id":self.cardId,
            "uid":store.fetch("uid")
          }).then(function (response) {
            let msg="删除成功";
            if(response.data.code!=200){
              msg="删除失败";
            }
            self.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: msg,
              time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })
            self.$router.push("receivingBankCard")

          }).catch(function (err) {
            console.log(err)
          })
        },
        updateCard(){//提交更新
          var _this=this;
          if (_this.phoneNumber === '') {
            _this.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: '手机号不能为空',
              time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })
          }else {
            var reg=/^1[3456789]\d{9}$/;
            if(!reg.test(_this.phoneNumber)){
              _this.$layer.toast({
                icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
                content: '请填写正确的手机号',
                time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
              })
            }else{
              axios.post(store.getAddress()+'/api/wxapp/account/editBankCard',{
                "id":_this.cardId,
                "cardId":_this.cardNumber,
                "bankName":_this.bankName,
                "branchBank":_this.branchBank,
                "uid":store.fetch("uid"),
                "cardholder":_this.cardholder,
                "cellPhone":_this.phoneNumber,
                "provinceCode":_this.prov_id,
                "cityCode":_this.city_id,
                "areaCode":_this.area_id,
                "idNumber":_this.idNumber,
              }).then(function (response) {
                console.log(response)
                _this.$router.push("receivingBankCard")
              }).catch(function (error) {
                console.log(error)
              })
            }
          }

        },

        close() {
          this.show = false
        },
        confirmFn(val) {
          this.show = false
          this.res = val.select1.text + val.select2.text + val.select3.text
          this.prov_id=val.select1.value
          this.city_id=val.select2.value
          this.area_id=val.select3.value
          this.pickData.default = [val.select1, val.select2, val.select3]
        },
        toShow() {
          this.show = true
        },
        checkSelfAreaData(){

          var self=this;
          if(store.fetch("prov_ids")==null){

            axios.post(store.getAddress()+"/api/wxapp/district/listProvinceForH5")
              .then(function (responese) {
                if(responese.data.code==200){
                  store.save("prov_ids",responese.data.list)

                  self.pickData.data1=store.fetch("prov_ids")
                }else {
                  console.log("服务器正忙")
                }
              }).catch(function (err) {
              console.log(err)
            })
          }else{self.pickData.data1=store.fetch("prov_ids")}
          if(store.fetch("city_ids")==null){
            axios.post(store.getAddress()+"/api/wxapp/district/listCityForH5")
              .then(function (responese) {
                if(responese.data.code==200){
                  store.save("city_ids",window.JSON.parse(responese.data.list))

                  self.pickData.data2=store.fetch("city_ids")
                }else {
                  console.log("服务器正忙")
                }
              }).catch(function (err) {
              console.log(err)
            })
          }else{self.pickData.data2=store.fetch("city_ids")}
          if(store.fetch("area_ids")==null){
            axios.post(store.getAddress()+"/api/wxapp/district/listDistForH5")
              .then(function (responese) {
                if(responese.data.code==200){
                  store.save("area_ids",window.JSON.parse(responese.data.list))
                  self.pickData.data3=store.fetch("area_ids")

                }else {
                  console.log("服务器正忙")
                }
              }).catch(function (err) {
              console.log(err)
            })
          }else{self.pickData.data3=store.fetch("area_ids")}
        },

      },
      mounted:function () {

        var _this=this;

        _this.checkSelfAreaData();
        this.pickData.data1=store.fetch("prov_ids")
        this.pickData.data2=store.fetch("city_ids")
        this.pickData.data3=store.fetch("area_ids")

        this.cardId=this.$route.query.id;

        axios.post(store.getAddress()+'/api/wxapp/account/getBankCardInfo',{
         "id":_this.cardId,
          "uid":store.fetch("uid")
        }).then(function (responese) {

          _this.cardholder=responese.data.data.cardholder
          _this.cardNumber=responese.data.data.cardId
          _this.prov_id=responese.data.data.provinceCode
          _this.city_id=responese.data.data.cityCode
          _this.area_id=responese.data.data.areaCode
          _this.pickData.default = [{"text":responese.data.data.provinceName,"value":responese.data.data.provinceCode},
            {"text":responese.data.data.cityName,"value":responese.data.data.cityCode},
            {"text":responese.data.data.areaName,"value":responese.data.data.areaCode},]
          _this.res=responese.data.data.provinceName+responese.data.data.cityName+responese.data.data.areaName
          _this.branchBank=responese.data.data.branchBank
          _this.idNumber=responese.data.data.idNumber
          _this.bankName=responese.data.data.bankName


          _this.phoneNumber=responese.data.data.cellPhone

        }).catch(function (err) {
          console.log(err)
        })





      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
@import "../../css/other/threeLevel.css";
</style>

