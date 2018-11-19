<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        我的收藏
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="collectionMain" id="navcon03">
          <div class="collectionNav">
            <a href="javascript:void(0);" class="Cur">全部宝贝</a>
            <a href="javascript:void(0);">即将开抢</a>
          </div>
          <div class="collectionList">
            <div class="listInfo" style="display: block;">
              <div class="infoCont">
                <a >
                  <div class="infoContLeft"><img src="../../images/temporary/commodity6.png"><span>01:26:02后开抢</span></div>
                  <div class="infoContRight">
                    <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                    <div class="similarPrice">
                      <span class="priceNum">￥<em>19</em>.90</span>
                      <span class="similarBtn">找相似</span>
                    </div>
                  </div>
                </a>
                <a >
                  <div class="infoContLeft"><img src="../../images/temporary/commodity6.png"></div>
                  <div class="infoContRight">
                    <p>健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                    <div class="similarPrice">
                      <span class="priceNum">￥<em>19</em>.90</span>
                      <span class="similarBtn">找相似</span>
                    </div>
                  </div>
                </a>
              </div>
              <p class="displayAll">已显示全部内容</p>
              <!--收藏为空-->
              <div class="collectionEmpty"  style="display: none">
                <img src="../../images/threeLevel/emptyPic.png">
                <p>收藏夹为空　　</p>
              </div>
            </div>
            <div class="listInfo">
              <div class="infoCont">
                <a >
                  <div class="infoContLeft"><img src="../../images/temporary/commodity6.png"><span>01:26:02后开抢</span></div>
                  <div class="infoContRight">
                    <p>2健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                    <div class="similarPrice">
                      <span class="priceNum">￥<em>19</em>.90</span>
                      <span class="similarBtn">找相似</span>
                    </div>
                  </div>
                </a>
                <a >
                  <div class="infoContLeft"><img src="../../images/temporary/commodity6.png"><span>01:26:02后开抢</span></div>
                  <div class="infoContRight">
                    <p>2健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                    <div class="similarPrice">
                      <span class="priceNum">￥<em>19</em>.90</span>
                      <span class="similarBtn">找相似</span>
                    </div>
                  </div>
                </a>
                <a >
                  <div class="infoContLeft"><img src="../../images/temporary/commodity6.png"><span>01:26:02后开抢</span></div>
                  <div class="infoContRight">
                    <p>2健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                    <div class="similarPrice">
                      <span class="priceNum">￥<em>19</em>.90</span>
                      <span class="similarBtn">找相似</span>
                    </div>
                  </div>
                </a>
                <a >
                  <div class="infoContLeft"><img src="../../images/temporary/commodity6.png"><span>01:26:02后开抢</span></div>
                  <div class="infoContRight">
                    <p>2健安喜(GNC)乳清蛋白粉蛋白质粉增肌粉健身进口 2磅</p>
                    <div class="similarPrice">
                      <span class="priceNum">￥<em>19</em>.90</span>
                      <span class="similarBtn">找相似</span>
                    </div>
                  </div>
                </a>
              </div>
              <p class="displayAll">已显示全部内容</p>
            </div>
          </div>
          <router-link to="shopIndex" class="shoppBtn">

          </router-link>

        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "myCollection",
      methods:{
        /*我的收藏tab切换*/
        collectionTab: function (){
      var $li = $('.collectionNav a');
      var $ul = $('.collectionList .listInfo');
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
    }
      },
      mounted:function () {
        this.collectionTab();
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/personalCenter.css";
</style>
