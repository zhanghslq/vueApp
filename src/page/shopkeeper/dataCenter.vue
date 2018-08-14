<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        数据中心
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="dataCenter">
          <div class="dataCenterInfo">
            <div class="dataTitle">
              <em></em>
              <h3>店铺指数</h3>
              <span>销售额越高分值越高</span>
            </div>
            <div class="fraction">
              <p>还差100分就有机会获得更多销售奖励</p>
              <div class="progress">
                <div class="progressBar" style="width:10%;">
                  <div class="progressVal">10</div>
                </div>
              </div>
            </div>
          </div>
          <div class="dataCenterInfo">
            <div class="dataTitle">
              <em></em>
              <h3>今日概览</h3>
            </div>
            <ul class="todayIng">
              <li>
                <span><em>0</em>笔</span>
                <p>今日订单</p>
              </li>
              <li>
                <span><em>0</em>元</span>
                <p>今日收益</p>
              </li>
              <li>
                <span><em>0</em>元</span>
                <p>今日销售额</p>
              </li>
            </ul>
          </div>
          <div class="dataCenterInfo">
            <div class="dataTitle">
              <em></em>
              <h3>销售概览</h3>
            </div>
            <div class="dataTaber"  id="datacon">
              <ul class="tabNave">
                <li class="Cur">
                  <span><em>0</em>元</span>
                  <p>累计销售额</p>
                </li>
                <li>
                  <span><em>0</em>元</span>
                  <p>累计收益</p>
                </li>
              </ul>
              <ul class="tabCont">
                <li style="display: block;">
                  <div class="contInfo">
                    <span><em>0</em>元</span>
                    <p>美食买手销售额</p>
                  </div>
                  <div class="contInfo">
                    <span><em>0</em>元</span>
                    <p>猩际优选销售额</p>
                  </div>
                </li>
                <li>
                  <div class="contInfo">
                    <span><em>0</em>元</span>
                    <p>美食买手收益</p>
                  </div>
                  <div class="contInfo">
                    <span><em>0</em>元</span>
                    <p>猩际优选收益</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="dataCenterInfo">
            <div class="dataTitle">
              <em></em>
              <h3>本地生活概览</h3>
            </div>
            <div class="dataTaber"  id="datacon02">
              <ul class="tabNave">
                <li>
                  <span><em>0</em>元</span>
                  <p>累计订单</p>
                </li>
                <li>
                  <span><em>0</em>元</span>
                  <p>累计收益</p>
                </li>
              </ul>
              <!--                 <ul class="tabCont" style="display: none;">
                                  <li style="display: block;">
                                      <div class="contInfo">
                                          <span><em>0</em>元</span>
                                          <p>美食买手销售额</p>
                                      </div>
                                      <div class="contInfo">
                                          <span><em>0</em>元</span>
                                          <p>猩际优选销售额</p>
                                      </div>
                                  </li>
                                  <li>
                                      <div class="contInfo">
                                          <span><em>0</em>元</span>
                                          <p>美食买手收益</p>
                                      </div>
                                      <div class="contInfo">
                                          <span><em>0</em>元</span>
                                          <p>猩际优选收益</p>
                                      </div>
                                  </li>
                              </ul> -->
            </div>
          </div>
          <div class="dataCenterInfo">
            <div class="dataTitle">
              <em></em>
              <h3>2018/07</h3>
            </div>
            <div class="dataTaber">
              <ul class="tabNave">
                <li>
                  <span><em>0</em>元</span>
                  <p>销售额</p>
                </li>
                <li>
                  <span><em>0</em>元</span>
                  <p>收益</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="dataCenterInfo">
            <div class="dataTitle">
              <em></em>
              <h3>2018/06</h3>
            </div>
            <div class="dataTaber">
              <ul class="tabNave">
                <li>
                  <span><em>0</em>元</span>
                  <p>销售额</p>
                </li>
                <li>
                  <span><em>0</em>元</span>
                  <p>收益</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="dataCenterInfo">
            <div class="dataTitle">
              <em></em>
              <h3>2018/05</h3>
            </div>
            <div class="dataTaber">
              <ul class="tabNave">
                <li>
                  <span><em>0</em>元</span>
                  <p>销售额</p>
                </li>
                <li>
                  <span><em>0</em>元</span>
                  <p>收益</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "dataCenter"
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/fragmentary.css";
</style>
