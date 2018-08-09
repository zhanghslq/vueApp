<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        发布动态
        <a href="#" class="releaseBtn">发布</a>
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="releaseDynamics">
          <div class="releaseContent">
            <div class="textareaBox">
              <textarea class="wishContent" placeholder="输入文字不超过800个字" maxlength="800"></textarea>
              <span class="wordsNum">0/800</span>
            </div>

            <div class="uploadPic">
              <img class="image_sty" :src="image.src" alt="" v-for="(image , i) in images" @click="bingtap_preview(i)">
              <image-upload
                class="image_upload"
                url='https://tsesb.yunjuhe.com.cn/medicalServer/doctor/uploadServerImage'
                :touch-size = 1
                :multiple = true
                field-name = 'serverImgFile'
                :max-count = 10
                @chooseImages='bindtap_chooseImages'
              />

              <image-preview
                style="z-index:200"
                :images="preImages"
                v-model="index"
                :numIsShow="true"
                :deleteIsShow="true"
                @delete="bindtap_delete"
              />
            </div>

          </div>
          <div class="addGoods">
            <a href="#">
              <span>添加商品</span>
              <em></em>
            </a>
          </div>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
  import {ImageUpload , ImagePreview} from 'vue-image-upload-preview'

  export default {
        name: "releaseDynamics",
    components: {
      'image-preview':ImagePreview,
      'image-upload':ImageUpload
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        images:[],
        index:-1,
      }
    },
    computed:{
      // 预览图片路径
      preImages(){
        return this.images.map(v=>{return v.src});
      },
    },
    methods:{
      /**
       *  绑定函数 -- 选择图片
       */
      bindtap_chooseImages(res){
        if (Array.isArray(res)) {
          this.images = this.images.concat(res);
        }else {
          console.log(res);
        }
      },
      /**
       *  绑定函数 -- 删除图片
       */
      bindtap_delete(){
        this.images = this.images.filter((v,i) => {
          return this.index!=i;
        })
      },
      /**
       *  绑定函数 -- 预览图片
       */
      bingtap_preview(i){
        this.index = i;
      },
      /**
       *  绑定函数 -- 取消预览
       */
      bingtap_hiddenImg() {
        this.index = -1;
      },
      /**
       *  绑定函数 -- 上传图片
       */
      bindtap_upload(){
        this.$refs.imgaeUpload.uploadImages(this.images)
          .then(res => {
            console.log(res);
          })
          .catch(err => {
            console.log(err);
          })
      },
        /*监听字数*/
        controlNum: function (){
    //封装一个限制字数方法
    var checkStrLengths = function (str, maxLength) {
      var maxLength = maxLength;
      var result = 0;
      if (str && str.length > maxLength) {
        result = maxLength;
      } else {
        result = str.length;
      }
      return result;
    }

    //监听输入
    $(".wishContent").on('input propertychange', function () {

      //获取输入内容
      var userDesc = $(this).val();

      //判断字数
      var len;
      if (userDesc) {
        len = checkStrLengths(userDesc, 800);
      } else {
        len = 0
      }

      //显示字数
      $(".wordsNum").html(len + '/800');
    });
  }
      },
      mounted:function () {
        this.controlNum()
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
@import "../../css/other/fragmentary.css";
</style>
<style scoped>
  .image_upload{ width: 1.44rem;
    height: 1.44rem;
    border: none;
    cursor: pointer;
    display: block;
    margin:0.1rem 0.2rem 0.1rem 0;
    background: url(../../images/common/addPicbtn.png) no-repeat;
    background-size: 100%;}
  .image_sty{
    width: 1.42rem;
    height: 1.42rem;
    border:solid 0.01rem #ccc;
    margin:0.1rem 0.2rem 0.1rem 0;
    float: left;
    position: relative;
    box-shadow: 0 0 0.1rem #eee;
  }
</style>
