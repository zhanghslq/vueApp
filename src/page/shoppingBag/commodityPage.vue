<template>
    <div>
      <div class="conventionalContent">
        <!--头部 开始-->
        <div class="transparent fix">
          <div class="transparentBg"></div>
          <div class="transparentCon">
            <a href="javascript:history.go(-1);" class="returnBtn"></a>
            <div class="detailTabNav">
              <ul class="conventTab">
                <li class="on">商品</li>
                <li>相关</li>
                <li>详情</li>
              </ul>
            </div>
            <a href="javascript:void(0);" class="likeIcon"></a>
            <a href="#" class="shareBtn"></a>
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
                      <li>
                        <a href="#">
                          <img src="../../images/temporary/commodity8.png">
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="../../images/temporary/10.png">
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="../../images/temporary/commodity9.png">
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <img src="../../images/temporary/10.png">
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
              <h4>爱敬KCS魅力香水洗发水护发素套装清爽柔顺持久留香女士1200ML</h4>
              <p>含3大秀发营养层层浸透抵御干燥毛发，从根本解决外油内干让秀发具有柔韧、弹性、莹亮。内涵气质花果香调植物护发精油修护毛糙补充水分，香味保持超过12小时（实际效果因人而异）让您每天散发自然迷人香氛。</p>
            </div>
            <div class="choiceProduct">
              <a href="#" id="choisShopp">
                <span>选择 颜色</span>
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
              <a href="#" id="explain">
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
                  <a href="#">
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
                  <a href="#">
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
                  <a href="#">
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
                  <a href="#">
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
                  <a href="#">
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
                  <a href="#">
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
              <li><label>品牌</label><span>age 20’s/爱敬</span></li>
              <li><label>国家</label><span>韩国</span></li>
              <li><label>保质期</label><span>3年</span></li>
              <li><label>规格</label><span>600ml</span></li>
              <li><label>产地</label><span>富川</span></li>
              <li><label>快递信息</label><span>全国发货</span></li>
              <li><label>服务信息</label><span>有商家从山东威海发货</span></li>
            </ul>
            <div class="detailCont">
              <img src="../../images/temporary/12.jpg">
              <img src="../../images/temporary/12.jpg">
            </div>
          </div>
        </div>
        <!--中间 结束-->
        <!--底部 开始-->
        <div class="conventFooter">
          <a href="#" class="shoppBox"><img src="../../images/common/shoppBoxIcon.png"></a>
          <a href="#" class="chat"><img src="../../images/common/chatIcon.png"></a>
          <a href="javascript:void(0);" class="join">加入购物袋</a>
          <a href="#" class="immediately">立即购买</a>
        </div>
        <!--底部 结束-->
        <a href="#" class="serviceIcon"></a>
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
              <div class="goodsPLeft"><img src="../../images/temporary/commodity9.png"></div>
              <div class="goodsright">
                <span class="priceNum">￥<em>94</em>.00</span>
                <span class="pleasChoise">请选择：颜色</span>
              </div>
              <a href="javascript:void(0);" class="closeBtning"></a>
            </div>
            <div class="colourInfo">
              <div class="infoTitle">颜色</div>
              <ul>
                <li class="Cur">黑色</li>
                <li>黑色</li>
                <li>黑色</li>
              </ul>
            </div>
            <div class="numbers">
              <div class="numLeft">数量</div>
              <div class="numRight">
                <a href="javascript:void(0);" class="minus">-</a>
                <span class="num">1</span>
                <a href="javascript:void(0);" class="plus">+</a>
              </div>
            </div>
            <a href="#" class="addCart">加入购物袋</a>
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
  import {TouchSlide} from "../../js/plugins/TouchSlide.1.1.min";
  import Swiper from 'swiper'
  import {city} from "../../js/plugins/city";
  import vuePickers from 'vue-pickers'
  import {provs_data, citys_data, dists_data} from 'vue-pickers/lib/areaData'

export default {
  name: "commodityPage",
  components:{
    Swiper,
    TouchSlide,
    city,
    vuePickers
  },
  data() {
    return {
      isCopy: '',
      res: '北京市',
      show: false,
      columns: 3,
      link: true,
      pickData: {
        data1: provs_data,
        data2: citys_data,
        data3: dists_data
      }
    }
  },
  methods: {
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
    bannerFocusImg: function () {
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
  },
    mounted: function () {
      this.bannerFocusImg()
      this.makeUpone()
      //自带js
      $(window).scroll(function () {
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
