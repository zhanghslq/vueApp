<template>
<div>
  {{msg}}
</div>
</template>

<script>
  import axios from 'axios'
  import {baseUrl} from '../../config/env'
    export default {
        name: "TestPost",
      data:function(){
          return{
            msg:'hello'
          }

      },
      components:{
        baseUrl,
        axios
      },
      methods:{

      },
      mounted:function () {
        var _this=this
        axios.post('/api/api/wxapp/cart/list',{
          "uid":1
        })
          .then(function (response) {
            console.log(response);
           _this.msg=response.data
          })
          .catch(function (error) {
            console.log(error);
          })
      }
    }
</script>

<style scoped>

</style>
