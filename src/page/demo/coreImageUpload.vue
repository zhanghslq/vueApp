<template>
  <div class="upload clear">
    <span>营业执照</span>
    <vue-core-image-upload
      :class="['btn', 'btn-primary']"
      :crop="false"
      @imageuploaded="imageuploaded"
      input-of-file="file"
      :max-file-size="5242880"
      :url="uploadUrl">
      <img width="150" :src="formData.license" />
    </vue-core-image-upload>
  </div>
</template>

<script>
  import VueCoreImageUpload  from 'vue-core-image-upload'
  //上传图片
    export default {
        name: "coreImageUpload",
      components:{
        VueCoreImageUpload
      },
      methods:{
        imageuploaded:function(res) {
          console.log(res)
          if(res.code == 0){
            this.formData.license = res.url;
          }
        },
      }
    }
</script>

<style scoped>

</style>
