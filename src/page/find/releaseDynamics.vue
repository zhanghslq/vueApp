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
  import ImgUploadeFiles from '../../js/plugins/imgFileupload.js'
    export default {
        name: "releaseDynamics",
      methods:{
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
        var imgFile = new ImgUploadeFiles('.uploadPic',function(e){
          e.init({
            MAX : "n", //限制个数
            MH : 5800, //像素限制高度
            MW : 5900, //像素限制宽度
            callback : function(arr){
            }
          });
        });
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
@import "../../css/other/fragmentary.css";
</style>
