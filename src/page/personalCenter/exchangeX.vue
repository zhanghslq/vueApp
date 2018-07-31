<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        兑换X币
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="exchangeMain" id="navcon02">
          <div class="exchangeNav">
            <a href="javascript:void(0);" class="Cur">余额兑换</a>
            <a href="javascript:void(0);">现金兑换</a>
          </div>
          <div class="exchangeCont">
            <div class="contInfo" style="display: block;">
              <div class="exchangeMoney">
                <p>兑换金额(元)</p>
                <input type="text" placeholder="请输入兑换金额">
                <div class="available"><span>可用余额：<em>0.00</em>元</span><a href="javascript:void(0);">全部兑换</a></div>
              </div>
              <p class="egulations">1元人民币兑换1X币</p>
              <a href="#" class="exchangeBtn">兑换X币</a>
            </div>
          </div>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
  import '../../js/other/conformity.js'
    export default {
        name: "exchangeX",
      methods:{
        exchangeTab:  function (){
    var $li = $('.exchangeNav a');
    var $ul = $('.exchangeCont .contInfo');
    $("#navcon02").css('height',$ul.eq(0).height())
    $li.click(function(){
      var $this = $(this);
      var $t = $this.index();
      $li.removeClass();
      $this.addClass('Cur');
      $ul.css('display','none');
      $ul.eq($t).css('display','block');
      $("#navcon02").css('height',$ul.eq($t).height())
    })
  }
      },
      mounted:function () {
        this.exchangeTab();
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
