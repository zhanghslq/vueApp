<template>
  <div class="header">
    <label class="avatar-bg">
      <!--默认显示的一张图片-->
      <div class="avatar" v-if="!previewAvatar">aaaaaaaaaa</div>
      <!--七牛回调的图片path-->
      <img :src="previewAvatar" class="real-photo" v-if="previewAvatar">
      <input ref="upload" id="upload" type="file" class="realfilebt"/>
    </label>
    <!--mint-ui的progress的库-->
    <mt-progress v-if="!(progress==0||progress==100)" :value="progress" :bar-height="5"
                 class="progress"></mt-progress>
  </div>
</template>

<script>
    import axios from 'axios';
    import Progress from 'mint-ui/lib/progress';
    import 'mint-ui/lib/Progress/style.css';
    //创建axios的实例
    const axiosInstance = axios.create({});

    export default {
      name: 'Testqiniu',
      data() {
        return {
          files: [], // 文件
          uploadToken: '', // 上传文件 token
          previewAvatar: '', // 页面展示的avatar
          progress: 0, // 进度条
        };
      },
      //node版本要是8+，以上才能使用async await的方法
      async mounted() {
        let self = this;
        //页面加载 拉去token



        axios.post(
           '/api/api/wxapp/qiniu/upToken'
        ).then(function (response) {
          console.log(response)
          self.uploadToken=response.data.data.upToken
          console.log(self.uploadToken)
        })
          .catch(function (error) {
            console.log(error);
          });
        console.log("自己的token"+self.uploadToken)
        this.$refs.upload.addEventListener('change', function() {
          //console.log(this.files)
          var data = new FormData();
          data.append('token', self.uploadToken);
          data.append('file', this.files[0]);
          axiosInstance({
            method: 'POST',
            url: 'http://up.qiniu.com',
            data: data,
            onUploadProgress: function(progressEvent) {
              var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
              //console.log(percentCompleted)
              //对应上传进度条
              self.progress = percentCompleted;
            },
          })
            .then(function(res) {
              console.log(res)
              //console.log('res',res)
              let { base_url, path } = res.data;
              //页面所用字段
              self.previewAvatar = `${base_url}${path}?imageView2/1/w/154/h/154`;
              //传给后台不完整
              self.formData.avatar = `${path}`;
              console.log(self.formData.avatar)

            })
            .catch(function(err) {
              console.log('err', err);
            });
        });
      },
      components: {
        [Progress.name]: Progress,   //mint-ui引入组件的方法
      },
    };
</script>

<style scoped>

</style>
