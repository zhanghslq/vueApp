<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        修改收货地址
        <a v-on:click="deleteAddress()" class="releaseBtn">删除</a>
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="addressCorrel">
          <div class="addressFillIn">
            <div class="fillInfo">
              <i>*</i>
              <span>收货人：</span>
              <input type="text" v-model="consignee" name="" placeholder="请输入姓名">
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>手机号码：</span>
              <input type="text" v-model="phoneNumber" name="" placeholder="请输入手机号">
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>所在地区：</span>
              <a @click="toShow" class="choiceCity" id="choiceCity">{{res}}</a>
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>详细地址：</span>
              <textarea class="detailedAdd" placeholder="请输入详细地址" v-model="detailAddress"></textarea>
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>身份证号：</span>
              <input type="text" name="" placeholder="请输入身份证号" v-model="idNumber">
            </div>
          </div>
          <div class="identification">
            <div class="idLeft"><span>身份证正反面照片</span><em>(选填)</em></div>
            <em class="idRight"></em>
          </div>
          <div class="default" v-if="isDefault">
            <div class="defaultLeft"><span>该地址为当前默认地址</span></div>
          </div>
          <div class="default" v-if="!isDefault">
            <div class="defaultLeft"><span>设置为默认地址</span><em>(注:每次下单时都会使用该地址)</em></div>
            <label class="ui-switch" >
              <input type="checkbox"   id="test" v-on:click="isCheckDefault">
            </label>
          </div>
          <a v-on:click="updateAddress()" class="preservation">保存</a>
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
  import store from '../../service/store'
  import axios from 'axios'
  import vuePickers from 'vue-pickers'
    export default {
      name: "modifyAddress",
      data() {
        return {
          isCopy: '',
          res: '请点击选择省市区',
          show: false,
          columns: 3,
          link: true,
          defaultData:[{"text":"\u5929\u6d25\u5e02","value":"120000"},{"text":"\u53bf","value":"120200"},{"text":"\u5b81\u6cb3\u53bf","value":"120221"}],
          pickData: {
            data1: [],
            data2: [],
            data3: []
          },
          prov_id:'',
          city_id:'',
          area_id:'',
          address_id:'',
          consignee:'',
          phoneNumber:'',
          detailAddress:'',
          idNumber:'',
          isDefault:false,
          upisDefault:0,
        }
      },
      components:{
        vuePickers
      },
      methods:{
        deleteAddress(){
          var self =this;
          axios.post('/api/api/wxapp/deliveryAddress/delete',{
            "id":self.address_id
          }).then(function (responese) {
            let msg="删除成功";
            if(responese.data.code!=200){
              msg="删除失败";
            }
            self.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: msg,
              time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })
            self.$router.push("receivingAddress")

          }).catch(function (err) {
            console.log(err)
          })
        },
        updateAddress(){//提交更新
          var _this=this;
          axios.post('/api/api/wxapp/deliveryAddress/add',{
            "id":_this.address_id,
            "uid":store.fetch("uid"),
            "consignee":_this.consignee,
            "mobile":_this.phoneNumber,
            "provinceCode":_this.prov_id,
            "cityCode":_this.city_id,
            "areaCode":_this.area_id,
            "detailAddress":_this.detailAddress,
            "idNumber":_this.idNumber,
            "frontOfIdCard":_this.frontOfIdCard,
            "reverseSideOfIdCard":_this.reverseSideOfIdCard,
            "isDefault":_this.upisDefault
          }).then(function (responese) {
            console.log(responese)
            _this.$router.push("receivingAddress")
          })
        },
        isCheckDefault(){
          if(document.getElementById("test").checked){
            this.upisDefault=1;
          }else {
            this.upisDefault=0;
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
      },
      mounted:function () {
        var _this=this;

        store.checkAreaData();
        this.pickData.data1=store.fetch("prov_ids")
        this.pickData.data2=store.fetch("city_ids")
        this.pickData.data3=store.fetch("area_ids")

        this.address_id=this.$route.params.id;

        axios.post('/api/api/wxapp/deliveryAddress/item',{
         "id":_this.address_id
        }).then(function (responese) {
            console.log(responese)
          _this.consignee=responese.data.data.consignee
          _this.prov_id=responese.data.data.provinceCode
          _this.city_id=responese.data.data.cityCode
          _this.area_id=responese.data.data.areaCode
          _this.pickData.default = [{"text":responese.data.data.provinceName,"value":responese.data.data.provinceCode},
            {"text":responese.data.data.cityName,"value":responese.data.data.cityCode},
            {"text":responese.data.data.areaName,"value":responese.data.data.areaCode},]
          _this.res=responese.data.data.provinceName+responese.data.data.cityName+responese.data.data.areaName
          _this.detailAddress=responese.data.data.detailAddress
          _this.idNumber=responese.data.data.idNumber
          _this.isDefault=responese.data.data.isDefault
          if(responese.data.data.isDefault){
            _this.upisDefault=1
            console.log(responese.data.data.isDefault)
          }
          console.log("out======"+responese.data.data.isDefault)
          _this.phoneNumber=responese.data.data.mobile

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
