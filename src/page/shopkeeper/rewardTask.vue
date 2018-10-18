<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        奖励任务
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="rewardTaskMain" id="rewardTaskNav">
          <div class="rewardNav fix">
            <a href="javascript:void(0);" class="Cur">任务列表</a>
            <a href="javascript:void(0);">我参与的</a>
            <a href="javascript:void(0);">我的奖励</a>
          </div>
          <div class="rewardCont">
            <div class="contInfo" style="display: block;">
              <a href="#" class="rewardBanner"><img src="../../images/temporary/rewardPic.jpg"></a>
              <div class="highestTime">
                <div class="timeLeft">
                  <p>时间：<em>06/25-06/26</em></p>
                  <p>最高奖励：<em>1500</em>X币</p>
                </div>
                <div class="timeRight" title="2018/08/04 23:06:00"></div>
              </div>
              <div class="currentSale">
                <p>当前销售额：0元</p>
                <ul class="saleInfo">
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                </ul>
                <a href="#" class="wantBtn">我要参与</a>
              </div>
              <div class="updateTime">最新数据更新时间：06/25 13:30:00</div>
            </div>
            <div class="contInfo">
              <a href="#" class="rewardBanner"><img src="../../images/temporary/rewardPic.jpg"></a>
              <div class="highestTime">
                <div class="timeLeft">
                  <p>时间：<em>06/25-06/26</em></p>
                  <p>最高奖励：<em>1500</em>X币</p>
                </div>
                <div class="timeRight" title="2018/08/05 10:06:00"></div>
              </div>
              <div class="currentSale">
                <p>当前销售额：0元</p>
                <ul class="saleInfo">
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                  <li><span>LV1销售额达到298元奖励10X币</span><em></em></li>
                </ul>
                <span class="haveHand">任务进行中……</span>
              </div>
              <div class="updateTime">最新数据更新时间：06/25 13:30:00</div>
            </div>
            <div class="contInfo">
              <ul class="myReward">
                <li>
                  <p><em>0</em>个</p>
                  <span>已完成任务</span>
                </li>
                <li>
                  <p><em>0</em>个</p>
                  <span>已完成任务</span>
                </li>
                <li>
                  <p><em>0</em>个</p>
                  <span>已完成任务</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
</template>

<script>
  import $ from 'jquery'
    export default {
    name: "rewardTask",
      data(){
      return {
        timer:null
      }
      },
      methods:{
        /*奖励任务 tab切换*/
    rewardTab: function (){
    var $li = $('.rewardNav a');
    var $ul = $('.rewardCont .contInfo');
    $("#rewardTaskNav").css('height',$ul.eq(0).height())
    $li.click(function(){
      var $this = $(this);
      var $t = $this.index();
      $li.removeClass();
      $this.addClass('Cur');
      $ul.css('display','none');
      $ul.eq($t).css('display','block');
      $("#rewardTaskNav").css('height',$ul.eq($t).height())
    })
  },
  /*奖励任务时间倒计时*/
        show_time: function () {
          var vm=this
        $(".highestTime .timeRight").each(function() {
          var endtime = '2018/12/03 17:51:00';
          var time_start = new Date().getTime(); //设定当前时间
          var time_end = new Date(endtime).getTime(); //设定目标时间
          var time_distance = time_end - time_start;
          if (time_distance >= 0) {
            var int_day = Math.floor(time_distance / 86400000)
            time_distance -= int_day * 86400000;
            var int_hour = Math.floor(time_distance / 3600000)
            time_distance -= int_hour * 3600000;
            var int_minute = Math.floor(time_distance / 60000)
            time_distance -= int_minute * 60000;
            var int_second = Math.floor(time_distance / 1000)
            /*if (int_day < 10) {
              int_day = "0" + int_day;
            }*/
            if (int_hour < 10) {
              int_hour = "0" + int_hour;
            }
            if (int_minute < 10) {
              int_minute = "0" + int_minute;
            }
            if (int_second < 10) {
              int_second = "0" + int_second;
            }
            $(this).html("剩" + int_hour + "：" + int_minute + "：" + int_second);
          }else{
            clearInterval(vm.timer);
          }

        })
      },
      },
      mounted:function () {
      this.rewardTab();
        this.timer = setInterval(this.show_time,1000);
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/fragmentary.css";
</style>
