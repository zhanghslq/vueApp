<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        申请退款
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="selectTypeMain">
          <div class="productSelect">
            <a  class="infoMiddle" v-for="(product,index) in productList" :key="index">
              <div class="middleImg"><img :src="product.goodsTitleImg"></div>
              <div class="middleDet">
                <div class="middleTitle">
                  <p>{{product.goodsTitle}}</p>
                </div>
                <div class="orderNum">X{{product.quantity}}</div>
              </div>
            </a>
          </div>
          <div class="refundMain">
            <a >
              <div class="refundmLeft">
                <h5>订单物流号：</h5>
              </div>
              <div class="refundmRight" style="float: left;">
                <input type="text" v-model="shipOrderNumber" class="pleSel" placeholder="请输入订单号">
              </div>
            </a>
            <a >

              <div class="refundAmount">
                <h5>退款金额：</h5>
                <span>￥<em>{{totalAmount}}</em></span>
              </div>
            </a>
          </div>
          <div class="mostRefunds">
            <p>最多 ￥<span>{{totalAmount}}</span><!--，含发货邮费￥<span>0.00</span>--></p>
          </div>
          <div class="refundsExplain">
            <div class="explainTitle">退款说明：</div>
            <textarea placeholder="选填" v-model="refundText"></textarea>
          </div>
          <div class="uploadCredentials">
            <div class="uploadTitle">上传凭证</div>
            <div >

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
          <div class="submissionBtn">
            <a v-on:click="submitRefund()">提交</a>
          </div>
        </div>
      </main>
      <!--中间 结束-->
      <!--弹层开始-->
      <!--<div class="elasticBox">
        <div class="blackBag"></div>
        <div class="boxContent">
          &lt;!&ndash;退款原因&ndash;&gt;
          <div class="reasonInfo">
            <div class="textTitle">
              退款原因
              <em class="closeBtn"></em>
            </div>
            <ul class="refundPick">
              <li><span>数量不够</span><em  ></em></li>
              <li><span>数量不够数量不够数量不够</span><em ></em></li>
              <li><span>数量不够数量不够数量不够</span><em > </em></li>

            </ul>
          </div>
          &lt;!&ndash;货物状态&ndash;&gt;
          <div class="stateInfo">
            <div class="textTitle">
              货物状态
              <em class="closeBtn"></em>
            </div>
            <ul class="refundPick">
              <li><span>未收到货</span><em ></em></li>
              <li><span>已收到货</span><em></em></li>
            </ul>
          </div>
        </div>
      </div>-->
    </div>
</template>

<script>
  import {ImageUpload , ImagePreview} from 'vue-image-upload-preview'
  import 'vue-layer-mobile/need/layer.css'
  import axios from 'axios'
  import store from '../../service/store'
  const axiosInstance = axios.create({});
    export default {
      name: "applicationRefund",
      data(){
        return{
          productStatus:'',//货物状态
          backReason:'',//退款原因
          refundText:'',
          productList:[],//订单包含的商品列表
          totalAmount:'',
          orderId:'',
          status:2,
          orderStatus:'',


          msg: 'Welcome to Your Vue.js App',
          images:[],
          index:-1,
          uploadToken:'',
          imageSrc:[],//图片在七牛上的存储标值
          shipOrderNumber:'',//退货物流单号


        }
      },
      updated(){
        console.log(this.images)
      },
      components: {
        'image-preview':ImagePreview,
        'image-upload':ImageUpload
      },
      computed:{
        preImages(){
          return this.images.map(v=>{return v.src});
        },
      },
      methods:{
        getToken(){
          var  self=this;
          axios.post(
            store.getAddress()+'/api/wxapp/qiniu/upToken'
          ).then(function (response) {
            console.log(response)
            self.uploadToken=response.data.data.upToken

          })
            .catch(function (error) {
              console.log(error);
            });
        },
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
        uploadImages(){
          var _this=this;
          //遍历图片的数组，然后上传
          _this.images.forEach((item,index)=>{

            if(item!=undefined){//判断文件是否为空，空的就不上传，不更新
              var data = new FormData();
              data.append('token', _this.uploadToken);
              data.append('file', item.file);
              axiosInstance({
                method: 'POST',
                url: 'http://up.qiniu.com',
                data: data,

              }).then(function(res) {
                _this.imageSrc.push(res.data.key)//把七牛返回的标志存储起来，之后一起上传

              }).catch(function(err) {
                console.log('err', err);
              });
            }
          })

        },
        submitRefund(){//提交申请退款的请求
          var _this=this;
          _this.uploadImages()

          /*提交申请之前需要先进行上传图片，然后把上传之后得到的存起来数组*/

        },
        submitCommit(){
          let _this=this;
          if(_this.images.length==_this.imageSrc.length){
            axios.post(store.getAddress()+"/api/wxapp/order/support",{
              "uid":store.fetch("uid"),
              "orderId":_this.orderId,
              "op":_this.status,
              "imgs":JSON.stringify(_this.imageSrc),
              "shipOrderNumber":_this.shipOrderNumber,
              "remark":_this.refundText
            }).then(function (response) {
              if(response.data.code==200){
                _this.$layer.toast({
                  icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
                  content: '退款申请已提交',
                  time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
                })
                _this.$router.push("refundProgress")
              }else{
                _this.$layer.toast({
                  icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
                  content: response.data.message,
                  time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
                })
              }
              _this.imageSrc=[]
            }).catch(function (error) {
              console.log(error)

            })
          }else{//还没上传完成
            _this.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: '请等待图片上传完成',
              time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })
          }
        },
         refundReason(){
          $(".refundMain #reason").on("click",function(){
            $(".elasticBox").show();
            $(".elasticBox .boxContent .reasonInfo").show();
          });
          $(".elasticBox .closeBtn").on("click",function(){
            $(".elasticBox").hide();
            $(".elasticBox .boxContent .reasonInfo").hide();
          });
    },
         refundState(){
          $(".refundMain #state").on("click",function(){
            $(".elasticBox").show();
            $(".elasticBox .boxContent .stateInfo").show();
          });
          $(".elasticBox .closeBtn").on("click",function(){
            $(".elasticBox").hide();
            $(".elasticBox .boxContent .stateInfo").hide();
          });
        },
        getOrder(){

        }


      },
      destroyed(){
       /* $(".stateInfo .refundPick li span em").unbind()
        $(".reasonInfo .refundPick li span em").unbind()*/
      },
      updated(){
       /* $(".reasonInfo .refundPick li  em").click(function () {
          console.log(this)
          $(".reasonInfo .refundPick li  em").each(function () {
            $(this).removeClass("Cur")
          })
          $(this).addClass("Cur")

          console.log($(this).text())
        })*/
      },
      watch:{
        imageSrc:{
          handler(curVal,oldVal){

            if(curVal.length!=0&&curVal.length==this.images.length){
                this.submitCommit();
            }
          },
          deep:true
        },

      },
      mounted(){
        var _this=this;

        this.getToken();
        this.orderId=this.$route.query.orderId;
        this.totalAmount=this.$route.query.totalAmount;
        this.orderStatus=this.$route.query.status;
        if(this.orderStatus==2){
          this.status=1//未收到货，仅退款
        }else if(this.orderStatus==5){//交易成功
          this.status=2//已收到货，退货退款
        }
        this.refundReason();
        this.refundState();

        axios.post(store.getAddress()+"/api/wxapp/order/details",{
          "uid":store.fetch("uid"),
          "orderId":_this.orderId

        }).then(function (response) {
          _this.productList=response.data.data.lines
        }).catch(function (error) {
          console.log(error)
        })
/*下面是直接赋值来的方法，需要具体使用的时候具体修改，在选择图片的时候上传图片，并记录图片的，然后点击删除的时候需要删除对应的标值*/

        /*$(".reasonInfo .refundPick li  em").click(function () {

          $(".reasonInfo .refundPick li  em").each(function () {
            $(this).removeClass("Cur")
          })
          $(this).addClass("Cur")

          _this.backReason=$(this).prev("span").text()

          $("#chooseReason").html(_this.backReason)

        })*/


        /*$(".stateInfo .refundPick li  em").click(function () {
          $(".stateInfo .refundPick li  em").each(function () {
            $(this).removeClass("Cur")
          })
          $(this).addClass("Cur")

          _this.productStatus=$(this).prev("span").text()
          /!*if(_this.productStatus=='已收到货'){
            _this.status=2
          }else{
            _this.status=1;
          }*!/

          $("#chooseState").html(_this.productStatus)

        })*/
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
<style scoped>
  .image_upload{ width: 1.44rem;
    height: 1.44rem;
    border: none;
    cursor: pointer;
    display: block;
    margin:0.1rem 0.2rem 0.1rem 0;
    background: url(../../images/common/credenPic.jpg) no-repeat;
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
