<template>
    <div>
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
            银行卡
        <router-link to="receivingBankCard">
          <a  class="releaseBtn">编辑</a>
        </router-link>
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>


        <div class="addressCorrel">
          <a v-for="card in bankCardList" class="receiving" v-on:click="chooseBankCard(card.id,card.cardId)">
            <div class="receivingLeft">
              <div class="leftName">
                <span>{{card.cardholder}}</span>
                <em>{{card.cardId}}</em>
              </div>
              <p>

                {{card.bankName+"  "+card.branchBank}}</p>
            </div>

            <div class="receivingRight">
              <em class="selectCircle" v-if="cardId==card.id"></em>
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
  import axios from 'axios'
  import store from '../../service/store'
    export default {
        name: "editBankCard",
      data(){
            return{
              bankCardList:[],
              cardId:'',
              cardNumber:'',



          }
      },
      created(){
        store.checkAreaData();

        var _this=this

        axios.post(store.getAddress()+'/api/wxapp/account/getBankCardList', {
          "uid": store.fetch("uid"),
          "page":1,
          "liimt":10
        })
          .then(function (response) {

            _this.bankCardList=response.data.list
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      methods:{
        chooseBankCard(id,cardNumber){
            this.cardId=id;
            this.cardNumber=cardNumber;
            localStorage.setItem("chooseCardId",id)
            this.$router.push({path:'putForward',query:{"cardId":this.cardId,"cardNumber":this.cardNumber}})

        },
      },
      mounted(){

      }
    }
</script>

<style scoped>
  @import "../../css/common/common.css";
@import "../../css/other/threeLevel.css";
</style>
