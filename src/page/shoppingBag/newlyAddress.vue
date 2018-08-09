<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        新增收货地址
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="addressCorrel">
          <div class="addressFillIn">
            <div class="fillInfo">
              <i>*</i>
              <span>收货人：</span>
              <input type="text" name="" placeholder="请输入姓名">
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>手机号码：</span>
              <input type="text" name="" placeholder="请输入手机号">
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>所在地区：</span>
              <a @click="toShow" class="choiceCity" id="choiceCity">{{res}}</a>

            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>详细地址：</span>
              <textarea class="detailedAdd" placeholder="请输入详细地址"></textarea>
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>身份证号：</span>
              <input type="text" name="" placeholder="请输入身份证号">
            </div>
          </div>
          <div class="identification">
            <div class="idTop">
              <div class="idLeft"><span>身份证正反面照片</span><em>(选填)</em></div>
              <em class="idRight idCur"></em>
            </div>
            <div class="idBottom">
              <p>温馨提示：请上传原始比例的身份证正反面，请勿裁剪涂改，保证身份信息清晰显示，否则无法通过审核</p>
              <div class="idPhoto">
                <div class="idPhotoInfo">
                  <div class="photoLeft">
                    <div class="img-uploader"
                         @drop="handleDrop"
                         ref="uploader">

                      <!--没有图片显示点击上传-->
                      <p class="img-uploader-placeholder" v-if="!hasImages">{{placeholder}}</p>

                      <!--图片预览列表-->
                      <div v-if="hasImages" class="img-uploader-preview-list">
                        <div v-for="(data,index) in imageDataList" class="img-uploader-preview">

                          <div class="preview-img">
                            <img :src="data"/>
                          </div>
                          <!--信息窗-->
                          <div class="img-uploader-mask" v-if="hasImages">
                            <!--<p class="img-uploader-file-size">10MB</p>-->
                            <p class="img-uploader-file-name" @click='openInput()'>{{fileNameList[index]}}</p>
                          </div>
                          <img src="../../assets/round_close.svg" class="img-uploader-delete-btn" @click="deleteImg(index)"/>
                        </div>
                      </div>
                      <label :for="inputId" class="img-uploader-label" v-if="!hasImages"></label>
                      <!-- input-->
                      <input
                        style="display: none"
                        :id="inputId"
                        ref="input"
                        type="file"
                        accept="image/gif,image/jpeg,image/jpg,image/png,image/svg"
                        multiple="multiple"
                        @change="handleFileChange"/>

                      <!--错误提示-->
                      <div class="img-uploader-error" v-if="errorText.length">{{errorText}}</div>



                    </div>
                  </div>
                  <div class="photoRight">

                  </div>
                </div>
                <p>若您已上传过当前身份证对应的照片 <a href="#">立即同步</a></p>
              </div>
              <div class="explain">
                <p>为什么需要上传身份信息？</p>
                <p>根据海关规定，购买跨境商品需要办理清关手续，请您配合上传身份信息，以确保您购买的商品顺利通过海关检查。（猩际优选承诺所传身份证明只用于办理跨境商品的清关手续，不作他途使用，其他任何人均无法查看）购买跨境商品时，提交的身份证信息需与下单时所填写的收货人相符</p>
              </div>
            </div>
          </div>
          <div class="default">
            <div class="defaultLeft"><span>设置为默认地址</span><em>(注:每次下单时都会使用该地址)</em></div>
            <label class="ui-switch" >
              <input type="checkbox"   id="test">
            </label>
          </div>
          <a href="#" class="preservation">保存</a>
        </div>
      </main>
      <!--中间 结束-->
      <vue-pickers
        :show="show"
        :link="link"
        :columns="columns"
        :selectData="pickData"
        @cancel="close"
        @confirm="confirmFn"></vue-pickers>
    </div>
</template>

<script>
  import vuePickers from 'vue-pickers'
  import {provs_data, citys_data, dists_data} from 'vue-pickers/lib/areaData'
  import resizeImage from '@/components/resize';
  export default {
    name: "newlyAddress",
    props: {
      // 占位文字
      placeholder: {
        default: '点击上传图片',
        type: String
      },
      // 文件更改回调
      onChange: {
        type: Function
      },
      // 图片大小的最大值(KB)
      maxSize: {
        default: 3072,
        type: Number
      }
    },
    components: {
      vuePickers
    },
    data() {
      return {
        isCopy: '',
        res: '请点击选择省市区',
        show: false,
        columns: 3,
        link: true,
        pickData: {
          data1: provs_data,
          data2: citys_data,
          data3: dists_data
        },
        // input 的id
        inputId: '',
        // 预览图片地址
        imageDataList: [],
        // 文件名
        fileNameList: [],
        // 错误提示
        errorText: '',
        // 图片计数
        countText: ''

      }
    },

      methods:{
      test(){
        console.log("进入test")
        if(document.getElementById("test").checked){
          console.log("选中")
        }else {
          console.log("this")
        }
      },
        close() {
          this.show = false
        },
        confirmFn(val) {
          this.show = false
          this.res = val.select1.text + val.select2.text + val.select3.text
          this.pickData.default = [val.select1, val.select2, val.select3]
        },
        toShow() {
          this.show = true
        },
        handleFileChange(){
          let input = this.$refs.input;
          let files = input.files;
          this.handleFile(files);
        },
        handleDrop (e) {
          // 获取文件列表
          let files = e.dataTransfer.files;
          this.handleFile(files);
        },
        preventDefaultEvent(eventName){
          document.addEventListener(eventName, function (e) {
            e.preventDefault();
          }, false);
        },
        openInput(){
          document.getElementById(this.inputId).click();
        },
        deleteImg(index){
          this.imageDataList.splice(index, 1);
          this.countText = `${this.imageDataList.length}张图片`;
        },
        // 处理图片
        handleFile (files) {

          if (files && files.length > 0) {
            this.fileNameList.length = 0;
            this.imageDataList.length = 0;
          }

          for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let size = Math.floor(file.size / 1024);
            if (size > this.maxSize) {
              this.errorText = `文件大小不能超过${this.sizeFormatted}`;
              return false;
            }
            this.fileNameList.push(file.name);
          }

          if (files && files.length > 0) {
            this.countText = `${files.length}张图片`;
          }
          // 文件选择事件
//        this.onChange && this.onChange(files)
          this.$emit('onChange', files);

          this.preview(files);
        },
        // 预览图片
        preview (files) {
          let _this = this;
          if (!files || !window.FileReader) return;

          for (let i = 0; i < files.length; i++) {
            let file = files[i];
            let reader = new FileReader();
            reader.onload = function (e) {

              resizeImage(e.target.result, 150, 150, function (result) {
                _this.imageDataList.push(result);
              });

            };
            reader.readAsDataURL(file);
          }
        }
      },
    computed: {
      // 是否有图片
      hasImages () {
        return this.imageDataList.length > 0;
      },
      // 格式化的文件大小，可读的
      sizeFormatted () {
        let result = 0;
        if (this.maxSize < 1024) {
          result = this.maxSize + 'K';
        } else {
          result = (this.maxSize / 1024).toFixed(this.maxSize % 1024 > 0 ? 2 : 0) + 'M';
        }
        return result;
      }
    },
      mounted:function () {
        $(".identification .idTop").on("click",function(){
          if (!$('.nav').hasClass('nav-mini')) {
            if ($(this).next().css('display') == "none") {
              //展开未展开
              $('.identification .idTop').children('.identification .idBottom').slideUp();
              $(this).next('.identification .idBottom').slideDown();
              $(this).parent('div').addClass('active').siblings('div').removeClass('active');
            }else{
              //收缩已展开
              $(this).next('.identification .idBottom').slideUp();
              $('.identification').removeClass('active');
            }
          }
        })
        // 防止多个组件互相影响
        this.inputId = this.id || Math.round(Math.random() * 100000);

        ['drop', 'dragenter', 'dragover', 'dragleave'].forEach((eventName) => {
          this.preventDefaultEvent(eventName);
        });

      }
    }
</script>
<style scoped>

  .img-uploader {
    position: relative;
    display: inline-block;
    min-width: 3.36rem;
    max-width: 3.36rem;
    height: calc(150px + 25px * 2);
    width: auto;
    border-radius: 5px;
    background: #ebebeb;
  }

  .img-uploader-placeholder {
    margin: 0;
    position: absolute;
    font-size: 15px;
    width: 100%;
    color: #aaa;
    text-align: center;
    top: 50%;
    transform: translate(0%, -50%);
  }

  .img-uploader-preview-list {
    margin: 5px 10px;
    height: calc(150px + 18px * 2);
    /*width: 100%;*/
    white-space: nowrap;
    overflow: hidden;
    overflow-x: auto;
    -webkit-backface-visibility: hidden;
    -webkit-overflow-scrolling: touch;
    text-align: center;
  }

  .img-uploader-preview {
    display: inline-block;
    z-index: 2;
    min-height: 150px;
    margin: 10px;
    border-radius: 10px;
    background: #333;
    transition: 0.3s cubic-bezier(0.3, 0, 0.2, 1);
  }

  .img-uploader-preview:hover {
    transform: scale(1.02);
  }

  .img-uploader-preview:hover .img-uploader-mask {
    display: block;
  }

  .img-uploader-preview:hover .img-uploader-delete-btn {
    display: block;
  }

  .img-uploader-preview .preview-img {
    width: 150px;
    height: 150px;
    overflow: hidden;
  }

  .img-uploader-label {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    cursor: pointer;
    margin-bottom: 0;
  }

  .img-uploader-mask {
    display: none;
    position: absolute;
    bottom: 0;
    width: 150px;
    border-radius: 1px;
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
  }

  .img-uploader-delete-btn {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    margin: 5px;
    width: 25px;
    height: 25px;
  }

  .img-uploader-file-name {
    color: white;
    font-size: 5px;
    padding-top: 10px;
    margin: 0;
    display: inline-block;
    max-width: 90%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    cursor: pointer;
  }

  .img-uploader-error {
    color: #e55;
    font-size: 12px;
    position: absolute;
    bottom: -28px;
    width: 100%;
  }
</style>
<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/threeLevel.css";
</style>

