<template>
    <div class="white">
      <!--头部 开始-->
      <div class="transparent fix">
        <div class="transparentBg"></div>
        <div class="transparentCon">
          <a href="javascript:history.go(-1);" class="returnBtn"></a>
          捕手推荐
          <a href="#" class="shareBtn"></a>
        </div>
      </div>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="catcherRecommend dynamic">
          <div class="catcherHead"></div>
          <div class="mainText">
            <h2>好吃不怕胖的冰淇淋，这个夏天请给我来一打！</h2>
            <div class="author">
              <div class="authorLeft"><img src="../../images/temporary/7.jpg"></div>
              <div class="authorRight">
                <h3>生活家三宅</h3>
                <span>发现各种好物，追求有品生活</span>
              </div>
            </div>
            <div class="textInfo">
              <p>对吃货来说，最美滋滋度过夏天的方式就是吹着空调，大口吃冰。尤其是在炎炎烈日的时候，吃上一口透心凉的冰淇淋，真的是身心都舒畅，别提多爽了~</p>
              <img src="../../images/temporary/3.jpg">
              <p>对吃货来说，最美滋滋度过夏天的方式就是吹着空调，大口吃冰。尤其是在炎炎烈日的时候，吃上一口透心凉的冰淇淋，真的是身心都舒畅，别提多爽了~</p>
              <img src="../../images/temporary/3.jpg">
              <p>对吃货来说，最美滋滋度过夏天的方式就是吹着空调，大口吃冰。尤其是在炎炎烈日的时候，吃上一口透心凉的冰淇淋，真的是身心都舒畅，别提多爽了~</p>
              <img src="../../images/temporary/3.jpg">
            </div>
          </div>
          <div class="likeShare">
            <a href="javascript:void(0);">
              <em class="likeIcon"></em>
              <span>喜欢 <i>8</i></span>
            </a>
            <a href="javascript:void(0);">
              <em class="shareIcon"></em>
              <span>分享 <i>39</i></span>
            </a>
          </div>
          <a href="javascript:void(0)" class="relevantBtn">1个相关商品</a>
        </div>
      </main>
      <!--中间 结束-->
      <!--弹层 开始-->
      <div class="elasticBox">
        <div class="blackBag"></div>
        <div class="boxContent">
          <a href="#" class="shappCart"></a>
          <div class="boxMain">
            <div class="boxTitle">1个相关商品</div>
            <div class="boxInfo">
              <div class="boxInfoLeft"><a href="#"><img src="../../images/temporary/2.jpg"></a></div>
              <div class="boxInfoRight">
                <h3><a href="#">【99元任选6杯】爱茜茜里意大利榛子巧克力味冰淇淋</a></h3>
                <div class="priceIfon">
                  <div class="priceNum">
                    <span class="news">￥<em>63</em>.48</span>
                    <span class="used">￥69</span>
                  </div>
                  <a href="#" class="joinBtn">加入购物袋</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--弹层 结束-->
    </div>
</template>

<script>
  import $ from 'jquery'
  import Swiper from 'swiper'
    export default {
      name: "catcherRecommend",
      methods :{
        commodity: function (){
          $(".dynamic .relevantBtn").on("click",function(){
            $("body").css({"height":"100%","overflow":"hidden"})
            $(".elasticBox").show();
          });
          $(".elasticBox .blackBag").on("click",function(){
            $("body").css({"height":"auto","overflow":"auto"})
            $(".elasticBox").hide();
          })
        }
      },
      mounted: function () {
        this.commodity();
        $(window).scroll(function(){
          let $scrolltop=document.documentElement.scrollTop||document.body.scrollTop;
          var $tabScroll=$(".transparent").offset().top-200;
          if($scrolltop>=$tabScroll){
            $(".transparent .transparentBg").css({"opacity":"1"});
            if($tabScroll<0){
              $(".transparent .transparentBg").css({"opacity":"0"});
            }
          }

        })
      }
    }
</script>

<style scoped>

@import '../../css/common/common.css';
@import '../../css/other/threeLevel.css';
</style>
