<template>
<a v-on:click="test">点击测试和</a>
</template>

<script>
  import 'vue-layer-mobile/need/layer.css'
    export default {
        name: "test",
      methods:{
          test(){
            let _this=this;
            _this.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: '注册并绑定上级成功',
              time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })
              alert("谈完准备跳转")
              _this.toUrl(response.data.data.isStoreKeeper)

          }
      }
    }
</script>

<style scoped>

</style>
