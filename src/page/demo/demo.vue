<template>
    <div>
        <!--单个-->
        <p>分组</p>
        <div class="item2">
          <img src="../../images/temporary/sb1.jpg" preview="2" preview-text="描述文字">
          <img src="../../images/temporary/sb1.jpg" preview="2" preview-text="描述文字2">
        </div>
    </div>
</template>


<script type="text/javascript">
  import Vue from 'vue'
  import vuePhotoPreview from 'vue-photo-preview'
  import 'vue-photo-preview/dist/skin.css'
  var options={
    fullscreenEl:false //关闭全屏按钮
  }
  Vue.use(vuePhotoPreview,options)
  export default {
    name: 'demo',
    mounted:function(){
      setTimeout(() => {
        this.$previewRefresh()
      }, 2000);
    }
  }
</script>
<style scoped>
  .item img{
    width: 100%;
  }
  .item2 img{
    width: 44%;
    margin: 2%;
  }
</style>
