<template>
    <div>
      <div class="conventionalContent">
        <!--头部 开始-->
        <div class="transparent fix">
          <div class="transparentBg"></div>
          <div class="transparentCon">
            <a  v-on:click="toBack()" class="returnBtn"></a>
            <div class="detailTabNav">
              <ul class="conventTab">
                <li class="on">商品</li>
                <li>相关</li>
                <li>详情</li>
              </ul>
            </div>
            <a href="javascript:void(0);" class="likeIcon"></a>
            <a  class="shareBtn"></a>
          </div>
        </div>
        <!--头部 结束-->
        <!--中间 开始-->
        <div class="conventionalMain">
          <div class="productDetail">
            <div class="productCarouse">
              <div class="carouseContent">
                <div id="carouselMain">
                  <div class="tempWrap">
                    <ul class="img">
                      <li v-for="(imageTop,index)  in detailsImg" :key="index">
                        <a >
                          <img :src="imageTop">
                        </a>
                      </li>

                    </ul>
                  </div>
                  <div class="carouselBtn">
                    <ul>
                      <li class="on">1</li>
                      <li>2</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="salesNum">
                <em></em>
                <span>近期销量<i>16350</i>笔</span>
              </div>
            </div>
            <div class="productExplain">
              <div class="commodityPrice">
                <div class="countDown">
                  <span class="now">￥<em>94.00</em></span>
                  <div class="member">
                    <span>限时直降</span>
                    <span>会员价￥<em>86.04</em></span>
                  </div>
                  <div class="endTime">
                    <em>距结束剩</em>
                    <div class="times">
                      <span>58</span>
                      <i>:</i>
                      <span>36</span>
                      <i>:</i>
                      <span>42</span>
                    </div>
                  </div>
                </div>
                <div class="earn">推广赚<em>7.52</em>元</div>
                <div class="voucher"><em></em><span>您有一张10元满减劵，下单即可使用</span></div>
              </div>
              <h4>{{goodsTitle}}</h4>
              <p>{{goodsLongTitle}}</p>
            </div>
            <div class="choiceProduct">
              <a  id="choisShopp">
                <span>规格</span>
                <div class="threePoints">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </a>
              <a @click="toShow">
                <span>配送</span>
                <div class="distribution">
                  <h5 id="choiceCity">{{res}}</h5>
                  <em>包邮</em>
                </div>
                <div class="threePoints">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </a>
              <a  id="explain">
                <span>说明</span>
                <div class="distribution">
                  <h5>精选臻品|中国人寿保障|超市赔付</h5>
                </div>
                <div class="threePoints">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
              </a>
            </div>
          </div>
          <div class="productDetail" id="pro_relevant">
            <div class="plateTitle">热卖推荐</div>
            <div class="swiper-container2 propagandaList">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <a >
                    <div class="listPics">
                      <img src="../../images/temporary/commodity9.png">
                    </div>
                    <h4>公牛车载充电点烟器式车充USB</h4>
                    <div class="priceIng">
                      <span class="newPrice">￥<em>140</em>.06</span>
                      <span class="originalPrice">￥69</span>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a >
                    <div class="listPics">
                      <img src="../../images/temporary/commodity9.png">
                    </div>
                    <h4>公牛车载充电点烟器式车充USB</h4>
                    <div class="priceIng">
                      <span class="newPrice">￥<em>140</em>.06</span>
                      <span class="originalPrice">￥69</span>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a >
                    <div class="listPics">
                      <img src="../../images/temporary/commodity9.png">
                    </div>
                    <h4>公牛车载充电点烟器式车充USB</h4>
                    <div class="priceIng">
                      <span class="newPrice">￥<em>140</em>.06</span>
                      <span class="originalPrice">￥69</span>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a >
                    <div class="listPics">
                      <img src="../../images/temporary/commodity9.png">
                    </div>
                    <h4>公牛车载充电点烟器式车充USB</h4>
                    <div class="priceIng">
                      <span class="newPrice">￥<em>140</em>.06</span>
                      <span class="originalPrice">￥69</span>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a >
                    <div class="listPics">
                      <img src="../../images/temporary/commodity9.png">
                    </div>
                    <h4>公牛车载充电点烟器式车充USB</h4>
                    <div class="priceIng">
                      <span class="newPrice">￥<em>140</em>.06</span>
                      <span class="originalPrice">￥69</span>
                    </div>
                  </a>
                </div>
                <div class="swiper-slide">
                  <a >
                    <div class="listPics">
                      <img src="../../images/temporary/commodity9.png">
                    </div>
                    <h4>公牛车载充电点烟器式车充USB</h4>
                    <div class="priceIng">
                      <span class="newPrice">￥<em>140</em>.06</span>
                      <span class="originalPrice">￥69</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="productDetail" id="pro_shopInfo">
            <div class="plateTitle">商品信息</div>
            <ul class="commodityInfo">
              <li><label>品牌</label><span>{{brandName}}</span></li>
              <li><label>国家</label><span>{{locality}}</span></li>
              <li><label>保质期</label><span>3年</span></li>
              <li><label>规格</label><span></span></li>
              <li><label>产地</label><span>富川</span></li>
              <li><label>快递信息</label><span>{{expressInfo}}</span></li>
              <li><label>服务信息</label><span>{{serviceInfo}}</span></li>
            </ul>
            <div class="detailCont" v-html="detailsContent">
              <!--<img src="../../images/temporary/12.jpg">
              <img src="../../images/temporary/12.jpg">-->
            </div>
          </div>
        </div>
        <!--中间 结束-->
        <!--底部 开始-->
        <div class="conventFooter">

          <a  class="shoppBox" v-on:click="toShopIndex()"><img src="../../images/common/shoppBoxIcon.png"></a>


          <a  class="chat"><img src="../../images/common/chatIcon.png"></a>
          <a v-on:click="addShopCart()" class="join">加入购物袋</a>
          <a  class="immediately" v-on:click="nowBuy()">立即购买</a>
        </div>
        <!--底部 结束-->
        <a  class="serviceIcon"></a>
      </div>
      <!--说明弹层 开始-->
      <div class="elasticBox">
        <div class="blackBag"></div>
        <div class="boxContent">
          <!--说明弹层-->
          <div class="explainText">
            <div class="textTitle">
              猩际优选品牌承诺
              <em class="closeBtn"></em>
            </div>
            <h5>精选臻品</h5>
            <p>源头品质甄选，原产地直供，专业团队品鉴采集</p>
            <h5>中国人寿保障</h5>
            <p>猩际优选已投保中国人寿财产保险股份有限公司食品安全责任险</p>
            <h5>超时赔付</h5>
            <p>2-4天发出。如订单5天内未从仓库发出，每延迟一天赔偿订单金额的10%直至赔满单价。</p>
          </div>
        </div>
      </div>
      <!--说明弹层 结束-->
      <!--选择弹层 开始-->
      <div class="choicElastic">
        <div class="choicblackBag"></div>
        <div class="choicCont">
          <!--选择弹层-->
          <div class="choiceGoods">
            <div class="goodsPrice">
              <div class="goodsPLeft"><img :src="goodsTitleImg"></div>
              <div class="goodsright">
                <span class="priceNum">￥{{actualPrice}}</span>
                <span class="pleasChoise" >请选择：颜色</span>
              </div>
              <a href="javascript:void(0);" class="closeBtning"></a>
            </div>
            <div class="choicMain">

            <div class="colourInfo" v-for="skuItem in skuTags">
              <div class="infoTitle" :value="skuItem.tagsId">{{skuItem.tagsName}}</div>
              <ul>
                <li v-on:click="chooseTag($event)" v-for="(ite,index) in skuItem.tagsValue" :class="{'Cur' : index == 0 }" :value="ite.valueId" >{{ite.valueName}}</li>

              </ul>
            </div>

            <div class="numbers">
              <div class="numLeft">数量</div>
              <div class="numRight">
                <a href="javascript:void(0);" class="minus">-</a>
                <span class="num" v-html="quantity"></span>
                <a href="javascript:void(0);" class="plus">+</a>
              </div>
            </div>
            <a v-on:click="addShopCart()"  class="addCart">加入购物袋</a>
            </div>
          </div>
        </div>
      </div>
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
  import $ from 'jquery'
  import store from '../../service/store'
  import axios from 'axios'
  import {TouchSlide} from "../../js/plugins/TouchSlide.1.1.min";
  import Swiper from 'swiper'
  import vuePickers from 'vue-pickers'


export default {
  name: "commodityPage",

  components:{
    Swiper,
    TouchSlide,
    vuePickers
  },
  data() {
    return {
      isFirst:0,
      quantity:1,//商品数量
      isCopy: '',
      res: '北京市',
      show: false,
      columns: 3,
      link: true,
      pickData: {
        data1: [],
        data2: [],
        data3: []
      },
      goodsId:'',//商品id
      skuId:'',
      actualPrice:'',//商品实际价格
      goodsTitle:'',
      goodsTitleImg:'',
      goodsLongTitle:'',
      detailsImg:[],
      detailsContent:'',
      brandId:'',
      brandName:'',
      categoryName:'',
      currentSku:'',//准备作为当前选中的sku
      locality:'',//国家
      expressInfo:'',
      serviceInfo:'',
      //先暂定颜色规格需要选择
      colorValueId:'',//颜色id
      specificationValueId:'',//规格id
      skuTags:[],//商品的所有规格
      allSkus:[],//所有的商品规格组合
      tagsIdStr:'0',

      isShopIndex:false,
    }
  },

  methods: {
    toBack(){//回退一步
      var _this=this;
      if(store.isDev()){
        _this.$router.go(-1)
      }else{//正式
        if(_this.isShopIndex){//从购物袋过来的
          if(store.judge()==0){//andriod    暂时先用跳转
            window.androidXingJiApp.postMessage(JSON.stringify({
              "code": "91",
              "index": 3,
              "url": store.getNextAddress() + "shopIndex"
            }));

          }else if(store.judge()==1){//ios
            window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
              "code": "99",
            });
          }
        }else {
          _this.$router.go(-1)
        }

      }
    },
    toShopIndex(){
      if(store.isDev()){
        this.$router.push("shopIndex")
      }else{
        if(store.judge()==1){
          window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
            "code": "91",
            "index":3,
            "url":store.getNextAddress()+"shopIndex"
          });
        }else if(store.judge()==0){
          window.androidXingJiApp.postMessage(JSON.stringify({
            "code": "91",
            "index":3,
            "url":store.getNextAddress()+"shopIndex"}));
        }
      }
    },
    nowBuy(){

      if(store.fetch("uid")==undefined||store.fetch("uid")==''||store.fetch("uid")==null){
        store.save("index",3)
        store.save("lastPage","commodityPage")
        this.$layer.toast({
          icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
          content: '请先登录',
          time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
        })
        this.$router.push({path:'mobileLogin'})

      }else{
        this.$router.push({path:'placeOrder',query:{"skuId":this.skuId,"quantity":this.quantity}})
      }

    },
    chooseTag(e){//每次选择规格的时候都需要计算一次
      var lis=$(e.target).parent().children();

      for (let i=0;i<lis.length;i++) {
        $(lis[i]).removeClass("Cur")
      }
      $(e.target).addClass("Cur")

      this.tagsIdStr='0';
      var self =this;
      console.log("colorOnfo")
      let a=1;
      $(".colourInfo").each(function () {

        console.log("each")

        let parTag;
        console.log($(this.firstChild).attr("value"))
        parTag=$(this.firstChild).attr("value")



        let choseTag='';
       $(this).find("li").each(function () {
         if($(this).hasClass("Cur")){
           console.log($(this).attr("value"))
           choseTag=$(this).attr("value")
         }
       })


        if(a==2){
          self.tagsIdStr+="-"+parTag+"_"+choseTag
        }
        if(a==1){
          self.tagsIdStr=parTag+"_"+choseTag
          a=2
        }
      })//遍历完成

      console.log("tagstr========"+self.tagsIdStr)

      var allSkus=this.allSkus;
      for (let i = 0; i < allSkus.length; i++) {
          if(allSkus[i].tagsIdStr==self.tagsIdStr){
            console.log(allSkus[i].skuId)
            console.log(allSkus[i].tagsIdStr)

            self.skuId=allSkus[i].skuId
          }


      }


    },
    //加入购物车
    addShopCart(){
      let self=this;
      /*if(self.skuTags.length=0){//证明可以直接添加购物车*/

      if(store.fetch("uid")==undefined||store.fetch("uid")==''||store.fetch("uid")==null){
        store.save("index",3)

        store.save("lastPage","commodityPage")
        this.$layer.toast({
          icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
          content: '请先登录',
          time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
        })
        this.$router.push({path:'mobileLogin'})

      }else{
        axios.post(store.getAddress()+"/api/wxapp/cart/add",{"uid":store.fetch("uid"),"quantity":self.quantity,"skuId":self.skuId})
          .then(function (responese) {
            console.log(responese)
            $(".choicElastic .closeBtning").click();
            let msg="添加购物车成功";
            if(responese.data.code!=200){
              msg="添加购物车失败";
            }
            self.$layer.toast({
              icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
              content: msg,
              time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
            })
          })
      }
    },
    /*商品说明弹层 开始*/
     explain(){
    $(".choiceProduct #explain").on("click",function(){
      $("body").css({"height":"100%","overflow":"hidden"})
      $(".elasticBox").show();
    });
    $(".elasticBox .closeBtn").on("click",function(){
      $("body").css({"height":"auto","overflow":"auto"})
      $(".elasticBox").hide();
    })
  },
  /*商品说明弹层 结束*/

  /*商品选择弹层 开始*/
   choiseShopp(){
     let self=this;
    $("#choisShopp").on("click",function(){
      $("body").css({"height":"100%","overflow":"hidden"})
      $(".choicElastic").show();
      $(".minus").click(function() {

        self.quantity=self.quantity-1;

        if (self.quantity <= 1) {
          self.quantity=1;
        }
      });
      $(".plus").click(function() {
        self.quantity=self.quantity + 1
        if (self.quantity <= 1) {
          self.quantity=1;
        }
      });
    });
    $(".choicElastic .closeBtning").on("click",function(){

      $("body").css({"height":"auto","overflow":"auto"})
      $(".choicElastic").hide();
    })
  },
    close() {
      this.show = false
    },
    confirmFn(val) {
     var _this=this;
     this.show = false
      if(val.select2!=undefined){
        _this.res = val.select1.text+val.select2.text
      }
      if(val.select3!=undefined){
       _this.res+=val.select3.text
      }

      this.pickData.default = [val.select1, val.select2, val.select3]
    },
    toShow() {
      this.show = true
      console.log(this.detailsImg)
    },
    bannerFocusImg: function () {
     if(this.isFirst==0){
       this.isFirst=1;
       TouchSlide({
         slideCell: "#carouselMain",
         titCell: ".carouselBtn ul",
         mainCell: ".img",
         effect: "leftLoop",
         autoPlay: true,
         autoPage: true,
         interTime: 3000
       });
       var width = $(window).width();
       var height = parseInt(width / 3 * 2);
       $("#carouselMain li a").css("max-height", height);
     }


    },
    makeUpone: function (){
      var swiper1 = new Swiper('.swiper-container2', {
        slidesPerView: 3.5,
        pagination: {
          el: '.swiper-pagination2',
          clickable: true,
        },
      });
    },

    checkSelfAreaData(){

      var self=this;
      if(store.fetch("prov_ids")==null){

        axios.post(store.getAddress()+"/api/wxapp/district/listProvinceForH5")
          .then(function (responese) {
            if(responese.data.code==200){
              store.save("prov_ids",responese.data.list)

              self.pickData.data1=store.fetch("prov_ids")
            }else {
              console.log("服务器正忙")
            }
          }).catch(function (err) {
          console.log(err)
        })
      }else{self.pickData.data1=store.fetch("prov_ids")}
      if(store.fetch("city_ids")==null){
        axios.post(store.getAddress()+"/api/wxapp/district/listCityForH5")
          .then(function (responese) {
            if(responese.data.code==200){
              store.save("city_ids",window.JSON.parse(responese.data.list))

              self.pickData.data2=store.fetch("city_ids")
            }else {
              console.log("服务器正忙")
            }
          }).catch(function (err) {
          console.log(err)
        })
      }else{self.pickData.data2=store.fetch("city_ids")}
      if(store.fetch("area_ids")==null){
        axios.post(store.getAddress()+"/api/wxapp/district/listDistForH5")
          .then(function (responese) {
            if(responese.data.code==200){
              store.save("area_ids",window.JSON.parse(responese.data.list))
              self.pickData.data3=store.fetch("area_ids")

            }else {
              console.log("服务器正忙")
            }
          }).catch(function (err) {
          console.log(err)
        })
      }else{self.pickData.data3=store.fetch("area_ids")}
    },
  },
  updated(){
    this.bannerFocusImg()
  },
  destroyed(){
      $(window).unbind(scroll())
  },
  deactivated(){
    this.$destroy(true)
  },
  /*beforeRouteLeave(to,from,next){
    if(to.name=='searchList'){
      to.meta.keepAlive=true
    }
    next()
  },*/
    created(){

    },

    mounted: function () {
    var _this=this;

      _this.checkSelfAreaData();

      if(store.fetch("isShopIndex")==1){
        _this.isShopIndex=true;
      }

      this.productId=this.$route.query.id
      this.skuId=this.$route.query.skuId

      if(this.productId==undefined){
          this.productId=store.fetch("commodityproductId")
          this.skuId=store.fetch("commodityskuId")
      }else {
        store.save("commodityproductId",this.productId)
        store.save("commodityskuId",this.skuId)
      }
      axios.post(store.getAddress()+'/api/wxapp/product/details',{
        "productId":_this.productId,
        "skuId":_this.skuId
      }).then(function (responese) {
        if(responese.data.code==200){

          _this.goodsLongTitle=responese.data.data.goodsLongTitle
          _this.goodsTitleImg=responese.data.data.goodsTitleImg
          _this.detailsImg=responese.data.data.detailsImg
          _this.detailsContent=responese.data.data.detailsContent
          _this.goodsTitle=responese.data.data.goodsTitle
          _this.brandName=responese.data.data.brandName
          _this.skuId=responese.data.data.skuId
          _this.locality=responese.data.data.locality
          _this.expressInfo=responese.data.data.expressInfo
          _this.serviceInfo=responese.data.data.serviceInfo
          _this.skuTags=responese.data.data.skuTags
          _this.actualPrice=responese.data.data.actualPrice
          _this.allSkus=responese.data.data.allSkus

          console.log(responese)

        }else {
          console.log("服务器正忙")
        }
      }).catch(function (err) {
        console.log(err)
      })

    this.explain();
    this.choiseShopp();

    this.makeUpone()
      //自带js
      /*滚动*/
      var nav = $(".conventTab"); //得到导航对象
      var relevant = $("#pro_relevant").offset().top;
      var shopinfo = $("#pro_shopInfo").offset().top; //得到导航对象
      var win = $(window); //得到窗口对象
      var sc = $(document);//得到document文档对象。
      win.scroll(function () {
        if ($(".productDetail:eq(0)").is(":visible")) {
          if (sc.scrollTop() > shopinfo - 200) {
            $(".conventTab li:eq(2)").addClass("on").siblings().removeClass("on");
          } else if (sc.scrollTop() > relevant - 100) {
            $(".conventTab li:eq(1)").addClass("on").siblings().removeClass("on");
          } else {
            $(".conventTab li:eq(0)").addClass("on").siblings().removeClass("on");
          }
        }

        var $scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
        var $tabScroll = $(".transparent").offset().top - 200;
        if ($scrolltop >= $tabScroll) {
          $(".transparent .transparentBg").css({"opacity": "1"});
          $(".detailTabNav").css({"opacity": "1"});
          if ($tabScroll < 0) {
            $(".transparent .transparentBg").css({"opacity": "0"});
            $(".detailTabNav").css({"opacity": "0"});
          }
        }
      });
      //还需要引入的js
    }
}
</script>

<style scoped>
@import "../../css/common/common.css";
@import "../../css/plugins/swiper.min.css";
@import "../../css/other/threeLevel.css";
</style>
