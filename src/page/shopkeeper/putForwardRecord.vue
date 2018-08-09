<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        提现纪录
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="recordMain">
          <ul>
            <li>
              <div class="timeTitle">
                <span>2018年3月</span>
                <i></i>
              </div>
              <div class="recordCont">
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
              </div>
            </li>
            <li>
              <div class="timeTitle">
                <span>2018年3月</span>
                <i></i>
              </div>
              <div class="recordCont">
                <p class="noTime">暂无信息</p>
              </div>
            </li>
            <li>
              <div class="timeTitle">
                <span>2018年3月</span>
                <i></i>
              </div>
              <div class="recordCont">
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
              </div>
            </li>
            <li>
              <div class="timeTitle">
                <span>2018年3月</span>
                <i></i>
              </div>
              <div class="recordCont">
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
              </div>
            </li>
            <li>
              <div class="timeTitle">
                <span>2018年3月</span>
                <i></i>
              </div>
              <div class="recordCont">
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
              </div>
            </li>
            <li>
              <div class="timeTitle">
                <span>2018年3月</span>
                <i></i>
              </div>
              <div class="recordCont">
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
                <div class="recordInfo">
                  <span>6月4日 10:31</span>
                  <em>130.48</em>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
    </div>
</template>

<script>
    export default {
      name: "putForwardRecord",
      mounted:function () {
        // nav收缩展开
        $('.recordMain .timeTitle').on('click',function(){
          if (!$('.nav').hasClass('nav-mini')) {
            if ($(this).next().css('display') == "none") {
              //展开未展开
              $('.recordMain li').children('.recordCont').slideUp();
              $(this).next('.recordCont').slideDown();
              $(this).parent('li').addClass('active').siblings('li').removeClass('active');
            }else{
              //收缩已展开
              $(this).next('.recordCont').slideUp();
              $('.recordMain li').removeClass('active');
            }
          }
        });
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
@import "../../css/other/fragmentary.css";
</style>
