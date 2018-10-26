<template>
    <div>
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        优惠券
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="couponMain" id="navcon03">
          <div class="couponNav fix">
            <a href="javascript:void(0);" class="Cur">未使用</a>
            <a href="javascript:void(0);">已使用</a>
            <a href="javascript:void(0);">已过期</a>
          </div>
          <div class="couponContent">
            <div class="couponList" style="display: block;">
              <div class="notice">
                <em></em>
                <p>您共有<span>10</span>张优惠券，快去使用吧</p>
              </div>
              <a href="#" class="notUsed">
                <div class="notUsedLeft">
                  <span>￥<em>100</em></span>
                  <p>满899元可用</p>
                </div>
                <div class="notUsedRight">
                  <h3>专享券</h3>
                  <p>全场除满减任选外通用</p>
                  <span>全场除满减任选外通用</span>
                </div>
              </a>
              <a href="#" class="notUsed">
                <div class="notUsedLeft">
                  <span>￥<em>100</em></span>
                  <p>满899元可用</p>
                </div>
                <div class="notUsedRight">
                  <h3>专享券</h3>
                  <p>全场除满减任选外通用</p>
                  <span>全场除满减任选外通用</span>
                </div>
              </a><a href="#" class="notUsed">
                <div class="notUsedLeft">
                  <span>￥<em>100</em></span>
                  <p>满899元可用</p>
                </div>
                <div class="notUsedRight">
                  <h3>专享券</h3>
                  <p>全场除满减任选外通用</p>
                  <span>全场除满减任选外通用</span>
                </div>
              </a><a href="#" class="notUsed">
                <div class="notUsedLeft">
                  <span>￥<em>100</em></span>
                  <p>满899元可用</p>
                </div>
                <div class="notUsedRight">
                  <h3>专享券</h3>
                  <p>全场除满减任选外通用</p>
                  <span>全场除满减任选外通用</span>
                </div>
              </a><a href="#" class="notUsed">
                <div class="notUsedLeft">
                  <span>￥<em>100</em></span>
                  <p>满899元可用</p>
                </div>
                <div class="notUsedRight">
                  <h3>专享券</h3>
                  <p>全场除满减任选外通用</p>
                  <span>全场除满减任选外通用</span>
                </div>
              </a><a href="#" class="notUsed">
                <div class="notUsedLeft">
                  <span>￥<em>100</em></span>
                  <p>满899元可用</p>
                </div>
                <div class="notUsedRight">
                  <h3>专享券</h3>
                  <p>全场除满减任选外通用</p>
                  <span>全场除满减任选外通用</span>
                </div>
              </a>
              <a href="#" class="notUsed">
                <div class="notUsedLeft">
                  <span>￥<em>100</em></span>
                  <p>满899元可用</p>
                </div>
                <div class="notUsedRight">
                  <h3>专享券</h3>
                  <p>全场除满减任选外通用</p>
                  <span>全场除满减任选外通用</span>
                </div>
              </a>
              <a href="#" class="notUsed">
                <div class="notUsedLeft">
                  <span>￥<em>100</em></span>
                  <p>满899元可用</p>
                </div>
                <div class="notUsedRight">
                  <h3>专享券</h3>
                  <p>全场除满减任选外通用</p>
                  <span>全场除满减任选外通用</span>
                </div>
              </a>
              <a href="#" class="notUsed">
                <div class="notUsedLeft">
                  <span>￥<em>100</em></span>
                  <p>满899元可用</p>
                </div>
                <div class="notUsedRight">
                  <h3>专享券</h3>
                  <p>全场除满减任选外通用</p>
                  <span>全场除满减任选外通用</span>
                </div>
              </a>
            </div>
            <div class="couponList">
              <a href="#" class="alreadyUsed">
                <div class="notUsedLeft">
                  <span>￥<em>100</em></span>
                  <p>满899元可用</p>
                </div>
                <div class="notUsedRight">
                  <h3>专享券</h3>
                  <p>全场除满减任选外通用</p>
                  <span>全场除满减任选外通用</span>
                </div>
              </a>
              <a href="#" class="alreadyUsed">
                <div class="notUsedLeft">
                  <span>￥<em>100</em></span>
                  <p>满899元可用</p>
                </div>
                <div class="notUsedRight">
                  <h3>专享券</h3>
                  <p>全场除满减任选外通用</p>
                  <span>全场除满减任选外通用</span>
                </div>
              </a>
            </div>
            <div class="couponList">
              <a href="#" class="runOut">
                <div class="notUsedLeft">
                  <span>￥<em>100</em></span>
                  <p>满899元可用</p>
                </div>
                <div class="notUsedRight">
                  <h3>专享券</h3>
                  <p>全场除满减任选外通用</p>
                  <span>全场除满减任选外通用</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
</template>

<script>

    export default {
        name: "coupon",
      methods:{
        /*优惠券 tab切换*/
        couponsTab: function (){
           var $li = $('.couponNav a');
           var $ul = $('.couponContent .couponList');
           $("#navcon03").css('height',$ul.eq(0).height())
           $li.click(function(){
             var $this = $(this);
             var $t = $this.index();
             $li.removeClass();
             $this.addClass('Cur');
             $ul.css('display','none');
             $ul.eq($t).css('display','block');
             $("#navcon03").css('height',$ul.eq($t).height())
           })
        },
      },
      mounted:function () {
        this.couponsTab()
      }
    }
</script>

<style scoped>
  @import "../../css/common/common.css";
@import "../../css/other/personalCenter.css";
</style>
