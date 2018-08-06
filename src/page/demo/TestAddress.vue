<template>
    <div>
      <span @click="choose">{{province+ city + county}}</span>
      <p class="pwrap" v-if="show">
        <v-distpicker type="mobile" @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea"></v-distpicker>
      </p>
    </div>
</template>

<script>

  import VDistpicker from 'v-distpicker'
  export default {
    components: { VDistpicker },
    data() {
      return {
        show:false,
        province:'请选择城市',
        city:'',
        county:''
      }
    },
    methods: {
      choose(){
        this.show=true
      },
      onChangeProvince(a){
        console.log(a)
        this.province=a.value
      },
      onChangeCity(a){
        console.log(a)
        this.city=a.value
      },
      onChangeArea(a){
        console.log(a)
        this.county=a.value
        this.show=false
      }
    },
  }
</script>

<style scoped>
  .pwrap{
    height: 400px;
    overflow-y: auto;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .pwrap>>>.distpicker-address-wrapper{
    color: #999;
  }
  .pwrap>>>.address-header{
    position: fixed;
    bottom: 400px;
    width: 100%;
    background: #000;
    color:#fff;
  }
  .pwrap>>>.address-header ul li{
    flex-grow: 1;
    text-align: center;
  }
  .pwrap>>>.address-header .active{
    color: #fff;
    border-bottom:#666 solid 8px
  }
  .pwrap>>>.address-container .active{
    color: #000;
  }
</style>
