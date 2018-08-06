<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        营销助手
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="maketingMain" id="navcon04">
          <div class="maketingNav fix">
            <a href="javascript:void(0);" class="Cur">热销产品</a>
            <a href="javascript:void(0);">近期访客</a>
          </div>
          <div class="maketingCont">
            <div class="contInfo" style="display: block;">
              <a href="#">
                <div class="infoLeft">
                  <img src="../../images/temporary/commodity9.png">
                </div>
                <div class="infoRight">
                  <div class="infoTitle">
                    <p>百分百进口美棉 空气感纯棉卫生棉套装（日用3包+夜用</p>
                    <span>￥<em>118</em>.80</span>
                  </div>
                  <span class="promotion">推广赚¥14.26</span>
                  <p class="advantage">热门开单利器，分享的不二之选</p>
                </div>
              </a>
              <a href="#">
                <div class="infoLeft">
                  <img src="../../images/temporary/commodity9.png">
                </div>
                <div class="infoRight">
                  <div class="infoTitle">
                    <p>百分百进口美棉 空气感纯棉卫生棉套装（日用3包+夜用</p>
                    <span>￥<em>118</em>.80</span>
                  </div>
                  <span class="promotion">推广赚¥14.26</span>
                  <p class="advantage">热门开单利器，分享的不二之选</p>
                </div>
              </a>
              <a href="#">
                <div class="infoLeft">
                  <img src="../../images/temporary/commodity9.png">
                </div>
                <div class="infoRight">
                  <div class="infoTitle">
                    <p>百分百进口美棉 空气感纯棉卫生棉套装（日用3包+夜用</p>
                    <span>￥<em>118</em>.80</span>
                  </div>
                  <span class="promotion">推广赚¥14.26</span>
                  <p class="advantage">热门开单利器，分享的不二之选</p>
                </div>
              </a>
              <a href="#">
                <div class="infoLeft">
                  <img src="../../images/temporary/commodity9.png">
                </div>
                <div class="infoRight">
                  <div class="infoTitle">
                    <p>百分百进口美棉 空气感纯棉卫生棉套装（日用3包+夜用</p>
                    <span>￥<em>118</em>.80</span>
                  </div>
                  <span class="promotion">推广赚¥14.26</span>
                  <p class="advantage">热门开单利器，分享的不二之选</p>
                </div>
              </a>
              <a href="#">
                <div class="infoLeft">
                  <img src="../../images/temporary/commodity9.png">
                </div>
                <div class="infoRight">
                  <div class="infoTitle">
                    <p>百分百进口美棉 空气感纯棉卫生棉套装（日用3包+夜用</p>
                    <span>￥<em>118</em>.80</span>
                  </div>
                  <span class="promotion">推广赚¥14.26</span>
                  <p class="advantage">热门开单利器，分享的不二之选</p>
                </div>
              </a>
              <a href="#">
                <div class="infoLeft">
                  <img src="../../images/temporary/commodity9.png">
                </div>
                <div class="infoRight">
                  <div class="infoTitle">
                    <p>百分百进口美棉 空气感纯棉卫生棉套装（日用3包+夜用</p>
                    <span>￥<em>118</em>.80</span>
                  </div>
                  <span class="promotion">推广赚¥14.26</span>
                  <p class="advantage">热门开单利器，分享的不二之选</p>
                </div>
              </a>

            </div>
            <div class="contInfo">
              <!--暂无访客记录-->
              <div class="noTime">
                <img src="../../images/secondLevel/noTimeIcon.png">
                <p>暂无访客记录</p>
              </div>
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
      name: "marketing",
    methods:{
          /*营销助手 tab切换*/
      markeingTab: function (){
      var $li = $('.maketingNav a');
      var $ul = $('.maketingCont .contInfo');
      $("#navcon04").css('height',$ul.eq(0).height())
      $li.click(function(){
        var $this = $(this);
        var $t = $this.index();
        $li.removeClass();
        $this.addClass('Cur');
        $ul.css('display','none');
        $ul.eq($t).css('display','block');
        $("#navcon04").css('height',$ul.eq($t).height())
      })
    },
  },
      mounted:function () {
        this.markeingTab()
      }

    }
</script>

<style scoped>
  @import "../../css/common/common.css";
@import "../../css/other/fragmentary.css";
</style>
