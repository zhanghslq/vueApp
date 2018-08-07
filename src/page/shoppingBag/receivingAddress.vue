<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        收货地址
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="addressCorrel">

          <a v-for="address in addresses" class="receiving">
            <div class="receivingLeft">
              <div class="leftName">
                <span>李宗森</span>
                <em>13811203297</em>
              </div>
              <p>

                <em v-if="address.isDefault">[默认地址] </em>{{address.provinceName+address.cityName+address.areaName+address.detailAddress}}</p>
            </div>
            <div class="receivingRight">
              <em></em>
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
    export default {
        name: "receivingAddress",
      data(){
          return{
            addresses:[]
          }
      },
      mounted:function () {
        var _this=this
        axios.post('/api//api/wxapp/deliveryAddress/list',{
          "uid":1
        })
          .then(function (response) {
              _this.addresses=response.data.list
          })
          .catch(function (error) {
              console.log("请检查重试")
          })

      }
    }
</script>

<style scoped>
@import "../../css/other/threeLevel.css";
</style>
