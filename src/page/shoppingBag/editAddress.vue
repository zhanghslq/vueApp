<template>
    <div>
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        收货地址
        <router-link to="receivingAddress">
          <a  class="releaseBtn">编辑</a>
        </router-link>
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>


        <div class="addressCorrel">
          <a v-for="address in addresses" class="receiving" v-on:click="chooseAddress(address.id)">
            <div class="receivingLeft">
              <div class="leftName">
                <span>{{address.consignee}}</span>
                <em>{{address.mobile}}</em>
              </div>
              <p>

                <em v-if="address.isDefault">[默认地址] </em>{{address.provinceName+address.cityName+address.areaName+address.detailAddress}}</p>
            </div>
            <div class="receivingRight" v-if="defaultId==''||defaultId==undefined">

              <em v-if="address.isDefault" class="selectCircle"></em>

            </div>
            <div class="receivingRight" v-else>
              <em class="selectCircle" v-if="defaultId==address.id"></em>
            </div>

          </a>

          <router-link to="/newlyAddress">
            <a  class="newlyAdded">+ 新增收货地址</a>
          </router-link>

        </div>
      </main>
    </div>
</template>

<script>
  import axios from 'axios'
  import store from '../../service/store'
    export default {
        name: "editAddress",
      data(){
            return{
              addresses:[],
              defaultId:'',

          }
      },
      methods:{
        chooseAddress(id){
            this.defaultId=id;
            localStorage.setItem("chooseAddressId",id)
            this.$router.push("placeOrder")

        }
      },
      mounted(){
        var _this=this

        let id=_this.$route.params.id;
        if(id!=undefined && id!=null && id!=''){
          _this.defaultId=id;
        }
        axios.post(store.getAddress()+'/api/wxapp/deliveryAddress/list', {
          "uid": store.fetch("uid")
        })
          .then(function (response) {
            console.log(response)
            console.log(response.data.list)
            _this.addresses=response.data.list
          })
          .catch(function (error) {
            console.log("请检查重试")
          })
      }
    }
</script>

<style scoped>
  @import "../../css/common/common.css";
@import "../../css/other/threeLevel.css";
</style>
