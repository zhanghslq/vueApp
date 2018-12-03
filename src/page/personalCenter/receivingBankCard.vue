<template>
    <div>
      <!--头部 开始-->
      <header>
        <router-link to="editBankCard" class="returnBtn"></router-link>

        银行卡
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="addressCorrel">

          <a v-for="card in bankCardList" class="receiving" v-on:click="editBankCard(card.id,card.cardId)">
            <div class="receivingLeft">
              <div class="leftName">
                <span>{{card.cardholder}}</span>
                <em>{{card.cardId}}</em>
              </div>
              <p>

                {{card.bankName+"  "+card.branchBank}}</p>
            </div>
            <div class="receivingRight">
              <em></em>
            </div>
          </a>

          <router-link to="/newlyCard">
            <a  class="newlyAdded">+ 新增银行卡</a>
          </router-link>
        </div>
      </main>
    </div>
</template>

<script>
  import store from '../../service/store'
  import axios from 'axios'
    export default {
        name: "receivingBankCard",
      data(){
          return{
            bankCardList:[],

          }
      },
      methods:{
        editBankCard(id){
          this.$router.push({ name: 'modifyCard', query: { id: id }})
        }
      },
      created:function () {
        var _this=this
        axios.post(store.getAddress()+'/api/wxapp/account/getBankCardList',{
          "uid":store.fetch("uid"),
          "page":1,
          "limit":10

        })
          .then(function (response) {
              _this.bankCardList=response.data.list
          })
          .catch(function (error) {
              console.log(error)
          })

      }
    }
</script>

<style scoped>
@import "../../css/other/threeLevel.css";
</style>
