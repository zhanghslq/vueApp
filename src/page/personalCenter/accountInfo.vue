<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        账号信息
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="accountMain">
          <div class="accoutnInfo">
            <input type="file" id="imageFile" style="display: none" ref="upload"/>
            <label for="imageFile">
              <a>
                <span class="infoLeft">头像</span>
                <div class="infoRight">
                  <img :src="imageUrl">
                  <em></em>
                </div>
              </a>
            </label>
            <mt-progress v-if="!(progress==0||progress==100)" :value="progress" :bar-height="5"
                         class="progress"></mt-progress>

          <router-link :to="{path:'modifyName',query:{name:username}}">
              <span class="infoLeft">昵称</span>
              <div class="infoRight">
                <span>{{username}}</span>
                <em></em>
              </div>
          </router-link>

            <router-link :to="{path:'/modifyWechat',query:{'wechatNumber':wechat}}">
              <span class="infoLeft">微信号</span>
              <div class="infoRight">
                <span>{{wechat}}</span>
                <em></em>
              </div>
            </router-link>

            <router-link :to="{path:'/modifyAutograph',query:{'personalitySignature':sign}}">
              <span class="infoLeft">个性签名</span>
              <div class="infoRight">
                <span>{{sign}}</span>
                <em></em>
              </div>
            </router-link>
            <router-link :to="{path:'/modifyPhone',query:{'mobile':mobile}}">
              <span class="infoLeft">手机号</span>
              <div class="infoRight">
                <span>{{mobile}}</span>
                <em></em>
              </div>
            </router-link>

          </div>
          <div class="accoutnInfo">
            <a href="javascript:void(0);">
              <span class="infoLeft">ID</span>
              <div class="infoRight">
                <span>{{id}}</span>
              </div>
            </a>
            <a href="javascript:void(0);">
              <span class="infoLeft">累计消费</span>
              <div class="infoRight">
                <span>{{consumption}}元</span>
              </div>
            </a>
          </div>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
  import axios from 'axios';
  import Progress from 'mint-ui/lib/progress';
  import 'mint-ui/lib/Progress/style.css';
  //创建axios的实例
  const axiosInstance = axios.create({});
  import store from '../../service/store'
    export default {
        name: "accountInfo",
        data(){
          return{
            username:'',
            imageUrl:'',
            wechat:'',
            sign:'',
            mobile:'',
            id:'',
            consumption:0,//累计消费
            files: [], // 文件
            uploadToken: '', // 上传文件 token
            previewAvatar: '', // 页面展示的avatar
            progress: 0, // 进度条

          }
        },
      components: {
        [Progress.name]: Progress,   //mint-ui引入组件的方法
      },
      methods:{
        getToken(){
          var  self=this;
          axios.post(
            '/api/api/wxapp/qiniu/upToken'
          ).then(function (response) {
            console.log(response)
            self.uploadToken=response.data.data.upToken
            console.log(self.uploadToken)
            console.log(response.data.data.upToken)
          })
            .catch(function (error) {
              console.log(error);
            });
        },
        getMessage(){
          var _this=this
          axios.post('/api//api/wxapp/account/info',{
            "uid":store.fetch("uid")
          })
            .then(function (response) {
              _this.username=response.data.data.nickName
              /*_this.wechat=response.data.data.wechat*/
              _this.imageUrl=response.data.data.photo
              _this.sign=response.data.data.personalitySignature
              _this.mobile=response.data.data.mobile
              _this.id=response.data.data.ucode
              _this.consumption=response.data.data.consumeTotal
            })
            .catch(function (error) {
              console.log(error);
            })
        }
      },
      mounted:function () {
        this.getToken();
        this.getMessage();
        let self = this;
        //页面加载 拉去token
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
              axios.post('/api/api/wxapp/account/update',{
                "uid":store.fetch("uid"),
                "photo":res.data.key
              }).then(function(re){
                  self.getMessage()
              }

              ).catch(function(err) {
                console.log('err', err);
              });



            })
            .catch(function(err) {
              console.log('err', err);
            });
        });

      }
    }
</script>

<style scoped>

@import "../../css/other/personalCenter.css";
</style>
