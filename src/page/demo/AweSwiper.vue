<template>
    <div>
      <div id="top">
        <div class="addr">
          <div class="message"><span></span><em>5</em></div>
          <div class="search">
            <em></em>
            <router-link to="search">
              <input type="text" placeholder="搜索喜欢的宝贝">
            </router-link>
          </div>
          <router-link to="selecTregion">
            <a  class="cityCode">北京市 <em class="triangle"></em></a>
          </router-link>

        </div>
        <swiper :options="swiperOptionNav" ref="nav">
          <swiper-slide>
            <span>首页</span>

          </swiper-slide>
          <swiper-slide>
            <span>第二页</span>
          </swiper-slide>
          <!--<swiper-slide v-for="(item,index) in topList" :key="index" >
            <span>{{item.name}}</span>
          </swiper-slide>-->

        </swiper>


      </div>
      <swiper ref='page'
              :options="swiperOptionPage">
        <swiper-slide >
          <swiper :options="swiperOptionScroll">
            <swiper-slide >
              <div class="homePageMain">
                <!--轮播图-->
                <div class="carouseContent swiper-no-swiping">
                  <div id="carouselMain">
                    <div class="tempWrap">
                      <ul class="img">
                        <li><a href="#"><img src="../../images/temporary/banner1.jpg"></a></li>
                        <li><a href="#"><img src="../../images/temporary/banner2.jpg"></a></li>
                        <li><a href="#"><img src="../../images/temporary/banner3.jpg"></a></li>
                        <li><a href="#"><img src="../../images/temporary/banner4.jpg"></a></li>
                      </ul>
                    </div>
                    <div class="carouselBtn">
                      <ul>
                        <li class="on">1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!--二级导航-->
                <div class="classification">
                  <a href="tenCommendation.html"><em class="everydayIcon"></em> 每日十荐</a>
                  <a href="newGrowGrass.html"><em class="shareIcon"></em> 新品种草</a>
                  <a href="xingjiProduce.html"><em class="productIcon"></em> 猩际出品</a>
                  <a href="#"><em class="classificaIcon"></em> 分类</a>
                </div>
                <div class="recommend">
                  <a href="#" class="recommendLeft"><img src="../../images/temporary/commodity1.jpg"></a>
                  <div class="recommendRight">
                    <a href="#" class="rightOne"><img src="../../images/temporary/commodity2.jpg"></a>
                    <div class="rightTwo">
                      <a href="#" class="rightTwoLeft"><img src="../../images/temporary/commodity3.jpg"></a>
                      <a href="#" class="rightTwoRight"><img src="../../images/temporary/commodity4.jpg"></a>
                    </div>
                  </div>
                </div>
                <!--爆品秒杀-->
                <div class="secKill">
                  <h2>爆品秒杀</h2>

                </div>
                <!--超值热卖-->
                <div class="hotSelling">
                  <h2>超值热卖</h2>
                  <div class="hotMain">
                    <a href="#"><img src="../../images/temporary/commodity7.jpg"></a>
                    <a href="#"><img src="../../images/temporary/commodity7.jpg"></a>
                    <a href="#"><img src="../../images/temporary/commodity7.jpg"></a>
                    <a href="#"><img src="../../images/temporary/commodity7.jpg"></a>
                    <a href="#"><img src="../../images/temporary/commodity7.jpg"></a>
                    <a href="#"><img src="../../images/temporary/commodity7.jpg"></a>
                    <a href="#"><img src="../../images/temporary/commodity7.jpg"></a>
                    <a href="#"><img src="../../images/temporary/commodity7.jpg"></a>
                    <a href="#"><img src="../../images/temporary/commodity7.jpg"></a>
                    <a href="#"><img src="../../images/temporary/commodity7.jpg"></a>
                    <a href="#"><img src="../../images/temporary/commodity7.jpg"></a>
                    <a href="#"><img src="../../images/temporary/commodity7.jpg"></a>
                    <a href="#"><img src="../../images/temporary/commodity7.jpg"></a>
                    <a href="#"><img src="../../images/temporary/commodity7.jpg"></a>
                    <a href="#"><img src="../../images/temporary/commodity7.jpg"></a>
                    <a href="#"><img src="../../images/temporary/commodity7.jpg"></a>
                    <a href="#"><img src="../../images/temporary/commodity7.jpg"></a>
                  </div>
                </div>
                <div class="guessLike">
                  <h2>猜你喜欢</h2>
                  <div class="likeMain">
                    <a href="#">
                      <img src="../../images/temporary/commodity8.jpg">
                      <p>【原味】【9杯装】熊猫有礼&新农新疆冰淇淋</p>
                      <div class="price">
                        <span class="now">￥<em>65.</em> 00 </span>
                        <span class="original">￥<em>76.</em> 00 </span>
                      </div>
                    </a>
                    <a href="#">
                      <img src="../../images/temporary/commodity8.jpg">
                      <p>【原味】【9杯装】熊猫有礼&新农新疆冰淇淋</p>
                      <div class="price">
                        <span class="now">￥<em>65.</em> 00 </span>
                        <span class="original">￥<em>76.</em> 00 </span>
                      </div>
                    </a>
                    <a href="#">
                      <img src="../../images/temporary/commodity8.jpg">
                      <p>【原味】【9杯装】熊猫有礼&新农新疆冰淇淋</p>
                      <div class="price">
                        <span class="now">￥<em>65.</em> 00 </span>
                        <span class="original">￥<em>76.</em> 00 </span>
                      </div>
                    </a>
                    <a href="#">
                      <img src="../../images/temporary/commodity8.jpg">
                      <p>【原味】【9杯装】熊猫有礼&新农新疆冰淇淋</p>
                      <div class="price">
                        <span class="now">￥<em>65.</em> 00 </span>
                        <span class="original">￥<em>76.</em> 00 </span>
                      </div>
                    </a>
                    <a href="#">
                      <img src="../../images/temporary/commodity8.jpg">
                      <p>【原味】【9杯装】熊猫有礼&新农新疆冰淇淋</p>
                      <div class="price">
                        <span class="now">￥<em>65.</em> 00 </span>
                        <span class="original">￥<em>76.</em> 00 </span>
                      </div>
                    </a>
                    <a href="#">
                      <img src="../../images/temporary/commodity8.jpg">
                      <p>【原味】【9杯装】熊猫有礼&新农新疆冰淇淋</p>
                      <div class="price">
                        <span class="now">￥<em>65.</em> 00 </span>
                        <span class="original">￥<em>76.</em> 00 </span>
                      </div>
                    </a>
                    <a href="#">
                      <img src="../../images/temporary/commodity8.jpg">
                      <p>【原味】【9杯装】熊猫有礼&新农新疆冰淇淋</p>
                      <div class="price">
                        <span class="now">￥<em>65.</em> 00 </span>
                        <span class="original">￥<em>76.</em> 00 </span>
                      </div>
                    </a>
                    <a href="#">
                      <img src="../../images/temporary/commodity8.jpg">
                      <p>【原味】【9杯装】熊猫有礼&新农新疆冰淇淋</p>
                      <div class="price">
                        <span class="now">￥<em>65.</em> 00 </span>
                        <span class="original">￥<em>76.</em> 00 </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
        </swiper-slide>
        <swiper-slide>
          <swiper :options="swiperOptionScroll">
          <swiper-slide >
            <!--美妆护肤-->
            <div class="carouseContent swiper-no-swiping">
              <div id="beautyMain">
                <div class="tempWrap">
                  <ul class="beautyimg">
                    <li><a href="#"><img src="../../images/temporary/banner1.jpg"></a></li>
                    <li><a href="#"><img src="../../images/temporary/banner2.jpg"></a></li>
                    <li><a href="#"><img src="../../images/temporary/banner3.jpg"></a></li>
                    <li><a href="#"><img src="../../images/temporary/banner4.jpg"></a></li>
                  </ul>
                </div>
                <div class="beautyBtn">
                  <ul>
                    <li class="on">1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="beautySelect">
              <a href="#">
                <em class="facial"></em>
                <span>人气面膜</span>
              </a>
              <a href="#">
                <em class="cream"></em>
                <span>精华面霜</span>
              </a>
              <a href="#">
                <em class="milk"></em>
                <span>保湿水乳</span>
              </a>
              <a href="#">
                <em class="setBox"></em>
                <span>量贩套盒</span>
              </a>
              <a href="#">
                <em class="makeUp"></em>
                <span>彩妆香氛</span>
              </a>
              <a href="#">
                <em class="face"></em>
                <span>面部清洁</span>
              </a>
              <a href="#">
                <em class="nurse"></em>
                <span>身体洗护</span>
              </a>
              <a href="#">
                <em class="instrument"></em>
                <span>美容仪器</span>
              </a>
            </div>
            <div class="flashSale">
              <div class="saleTitle">
                <h3>限时抢购</h3>
                <span><em class="tiemIcon"></em><em class="timeNum">20:28:28</em></span>
              </div>
              <div class="swiper-container1 flashSaleList">
                <div class="swiper-wrapper">
                  <div class="swiper-slide">
                    <a href="#">
                      <div class="listPics">
                        <img src="../../images/temporary/commodity9.png">
                        <em></em>
                      </div>
                      <h4>精华导入洁面仪精华导入洁面仪</h4>
                      <div class="priceIng">
                        <span class="newPrice">￥<em>79</em></span>
                        <span class="pastPrice">￥<em>179</em></span>
                      </div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="#">
                      <div class="listPics">
                        <img src="../../images/temporary/commodity9.png">
                        <em></em>
                      </div>
                      <h4>精华导入洁面仪精华导入洁面仪</h4>
                      <div class="priceIng">
                        <span class="newPrice">￥<em>79</em></span>
                        <span class="pastPrice">￥<em>179</em></span>
                      </div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="#">
                      <div class="listPics">
                        <img src="../../images/temporary/commodity9.png">
                        <em></em>
                      </div>
                      <h4>精华导入洁面仪精华导入洁面仪</h4>
                      <div class="priceIng">
                        <span class="newPrice">￥<em>79</em></span>
                        <span class="pastPrice">￥<em>179</em></span>
                      </div>
                    </a>
                  </div>
                  <div class="swiper-slide earlyNoticeMain">
                    <div class="earlyNotice">
                      <em></em><span>下期预告</span><em></em>
                    </div>
                  </div>
                  <div class="swiper-slide">
                    <a href="#">
                      <div class="listPics">
                        <img src="../../images/temporary/commodity9.png">
                        <em></em>
                      </div>
                      <h4>精华导入洁面仪精华导入洁面仪</h4>
                      <div class="priceIng">
                        <span class="newPrice">￥<em>79</em></span>
                        <span class="pastPrice">￥<em>179</em></span>
                      </div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="#">
                      <div class="listPics">
                        <img src="../../images/temporary/commodity9.png">
                        <em></em>
                      </div>
                      <h4>精华导入洁面仪精华导入洁面仪</h4>
                      <div class="priceIng">
                        <span class="newPrice">￥<em>79</em></span>
                        <span class="pastPrice">￥<em>179</em></span>
                      </div>
                    </a>
                  </div>
                  <div class="swiper-slide">
                    <a href="#">
                      <div class="listPics">
                        <img src="../../images/temporary/commodity9.png">
                        <em></em>
                      </div>
                      <h4>精华导入洁面仪精华导入洁面仪</h4>
                      <div class="priceIng">
                        <span class="newPrice">￥<em>79</em></span>
                        <span class="pastPrice">￥<em>179</em></span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="activitiesSelect">
              <div class="titles">精选活动</div>
              <div class="selectCont">
                <div class="seleLeft"><a href="#"><img src="../../images/index/activity1.jpg"></a></div>
                <div class="seleRight">
                  <a href="#"><img src="../../images/index/activity2.jpg"></a>
                  <a href="#"><img src="../../images/index/activity3.jpg"></a>
                </div>
              </div>
            </div>
            <div class="nationalMain">
              <div class="titles">环球国家馆</div>
              <div class="nationalInfo">
                <a href="#"><img src="../../images/index/country1.jpg"></a>
                <a href="#"><img src="../../images/index/country2.jpg"></a>
                <a href="#"><img src="../../images/index/country3.jpg"></a>
              </div>
              <div class="propaganda">
                <a href="#" class="propagendaBanner">
                  <img src="../../images/temporary/3.jpg">
                  <div class="picTitle">
                    <h3>清洁肌肤</h3>
                    <span>护肤第一步</span>
                  </div>
                  <em class="triangle"></em>
                </a>
                <div class="swiper-container2 propagandaList">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="listPics">
                          <img src="../../images/temporary/commodity9.png">
                        </div>
                        <h4>【金晨同款】KOEHL晶彩【金晨同款】KOEHL晶彩</h4>
                        <div class="priceIng">
                          <span class="newPrice">￥<em>140</em>.06</span>
                          <span class="membership">会员价</span>
                        </div>
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="listPics">
                          <img src="../../images/temporary/commodity9.png">
                        </div>
                        <h4>【金晨同款】KOEHL晶彩【金晨同款】KOEHL晶彩</h4>
                        <div class="priceIng">
                          <span class="newPrice">￥<em>140</em>.06</span>
                          <span class="membership">会员价</span>
                        </div>
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="listPics">
                          <img src="../../images/temporary/commodity9.png">
                        </div>
                        <h4>【金晨同款】KOEHL晶彩【金晨同款】KOEHL晶彩</h4>
                        <div class="priceIng">
                          <span class="newPrice">￥<em>140</em>.06</span>
                          <span class="membership">会员价</span>
                        </div>
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="listPics">
                          <img src="../../images/temporary/commodity9.png">
                        </div>
                        <h4>【金晨同款】KOEHL晶彩【金晨同款】KOEHL晶彩</h4>
                        <div class="priceIng">
                          <span class="newPrice">￥<em>140</em>.06</span>
                          <span class="membership">会员价</span>
                        </div>
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="listPics">
                          <img src="../../images/temporary/commodity9.png">
                        </div>
                        <h4>【金晨同款】KOEHL晶彩【金晨同款】KOEHL晶彩</h4>
                        <div class="priceIng">
                          <span class="newPrice">￥<em>140</em>.06</span>
                          <span class="membership">会员价</span>
                        </div>
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="listPics">
                          <img src="../../images/temporary/commodity9.png">
                        </div>
                        <h4>【金晨同款】KOEHL晶彩【金晨同款】KOEHL晶彩</h4>
                        <div class="priceIng">
                          <span class="newPrice">￥<em>140</em>.06</span>
                          <span class="membership">会员价</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="propaganda">
                <a href="#" class="propagendaBanner">
                  <img src="../../images/temporary/3.jpg">
                  <div class="picTitle">
                    <h3>清洁肌肤</h3>
                    <span>护肤第一步</span>
                  </div>
                  <em class="triangle"></em>
                </a>
                <div class="swiper-container2 propagandaList">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="listPics">
                          <img src="../../images/temporary/commodity9.png">
                        </div>
                        <h4>【金晨同款】KOEHL晶彩【金晨同款】KOEHL晶彩</h4>
                        <div class="priceIng">
                          <span class="newPrice">￥<em>140</em>.06</span>
                          <span class="membership">会员价</span>
                        </div>
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="listPics">
                          <img src="../../images/temporary/commodity9.png">
                        </div>
                        <h4>【金晨同款】KOEHL晶彩【金晨同款】KOEHL晶彩</h4>
                        <div class="priceIng">
                          <span class="newPrice">￥<em>140</em>.06</span>
                          <span class="membership">会员价</span>
                        </div>
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="listPics">
                          <img src="../../images/temporary/commodity9.png">
                        </div>
                        <h4>【金晨同款】KOEHL晶彩【金晨同款】KOEHL晶彩</h4>
                        <div class="priceIng">
                          <span class="newPrice">￥<em>140</em>.06</span>
                          <span class="membership">会员价</span>
                        </div>
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="listPics">
                          <img src="../../images/temporary/commodity9.png">
                        </div>
                        <h4>【金晨同款】KOEHL晶彩【金晨同款】KOEHL晶彩</h4>
                        <div class="priceIng">
                          <span class="newPrice">￥<em>140</em>.06</span>
                          <span class="membership">会员价</span>
                        </div>
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="listPics">
                          <img src="../../images/temporary/commodity9.png">
                        </div>
                        <h4>【金晨同款】KOEHL晶彩【金晨同款】KOEHL晶彩</h4>
                        <div class="priceIng">
                          <span class="newPrice">￥<em>140</em>.06</span>
                          <span class="membership">会员价</span>
                        </div>
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="listPics">
                          <img src="../../images/temporary/commodity9.png">
                        </div>
                        <h4>【金晨同款】KOEHL晶彩【金晨同款】KOEHL晶彩</h4>
                        <div class="priceIng">
                          <span class="newPrice">￥<em>140</em>.06</span>
                          <span class="membership">会员价</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="propaganda">
                <a href="#" class="propagendaBanner">
                  <img src="../../images/temporary/3.jpg">
                  <div class="picTitle">
                    <h3>清洁肌肤</h3>
                    <span>护肤第一步</span>
                  </div>
                  <em class="triangle"></em>
                </a>
                <div class="swiper-container2 propagandaList">
                  <div class="swiper-wrapper">
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="listPics">
                          <img src="../../images/temporary/commodity9.png">
                        </div>
                        <h4>【金晨同款】KOEHL晶彩【金晨同款】KOEHL晶彩</h4>
                        <div class="priceIng">
                          <span class="newPrice">￥<em>140</em>.06</span>
                          <span class="membership">会员价</span>
                        </div>
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="listPics">
                          <img src="../../images/temporary/commodity9.png">
                        </div>
                        <h4>【金晨同款】KOEHL晶彩【金晨同款】KOEHL晶彩</h4>
                        <div class="priceIng">
                          <span class="newPrice">￥<em>140</em>.06</span>
                          <span class="membership">会员价</span>
                        </div>
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="listPics">
                          <img src="../../images/temporary/commodity9.png">
                        </div>
                        <h4>【金晨同款】KOEHL晶彩【金晨同款】KOEHL晶彩</h4>
                        <div class="priceIng">
                          <span class="newPrice">￥<em>140</em>.06</span>
                          <span class="membership">会员价</span>
                        </div>
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="listPics">
                          <img src="../../images/temporary/commodity9.png">
                        </div>
                        <h4>【金晨同款】KOEHL晶彩【金晨同款】KOEHL晶彩</h4>
                        <div class="priceIng">
                          <span class="newPrice">￥<em>140</em>.06</span>
                          <span class="membership">会员价</span>
                        </div>
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="listPics">
                          <img src="../../images/temporary/commodity9.png">
                        </div>
                        <h4>【金晨同款】KOEHL晶彩【金晨同款】KOEHL晶彩</h4>
                        <div class="priceIng">
                          <span class="newPrice">￥<em>140</em>.06</span>
                          <span class="membership">会员价</span>
                        </div>
                      </a>
                    </div>
                    <div class="swiper-slide">
                      <a href="#">
                        <div class="listPics">
                          <img src="../../images/temporary/commodity9.png">
                        </div>
                        <h4>【金晨同款】KOEHL晶彩【金晨同款】KOEHL晶彩</h4>
                        <div class="priceIng">
                          <span class="newPrice">￥<em>140</em>.06</span>
                          <span class="membership">会员价</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        </swiper>
        </swiper-slide>

      </swiper>
      <footer class="memberFooter">

        <router-link to="/index" class="active">
          <i class="homePage"></i><span>首页</span>
        </router-link>
        <router-link to="/findPage" >
          <i class="find"></i><span>发现</span>

        </router-link>
        <router-link to="/shopIndex" >
          <i class="shopp"></i><span>购物袋</span>
        </router-link>
        <router-link to="/personalPage" >
          <i class="personal"></i><span>个人中心</span>
        </router-link>
        <router-link to="/shopkeeperPage" >
          <i class="shopkeeper"></i><span>我是店主</span>
        </router-link>
      </footer>
    </div>
</template>

<script>
  import {swiper,swiperSlide} from 'vue-awesome-swiper'
  import {TouchSlide} from "../../js/plugins/TouchSlide.1.1.min";

  export default {
        name: "AweSwiper",
      data(){
          let  _this=this;
        let barwidth = 36 //导航粉色条的长度px
        let tSpeed = 300 //切换速度300ms
       return{
         topList:[],
         pageList:[],
         swiperOptionNav:{
           slidesPerView: 5,
           freeMode: true,

         },
         swiperOptionPage:{
           watchSlidesProgress: true,
           resistanceRatio: 0,


         },
         swiperOptionScroll:{
           slidesOffsetBefore: 72,
           direction: 'vertical',
           freeMode: true,
           slidesPerView: 'auto',

           mousewheel: {
             releaseOnEdges: true,
           },
         }
       }
      },
      components:{
         swiper,
        swiperSlide,
        TouchSlide,

      },
      methods:{
        bannerFocusImg: function () {
          TouchSlide({
            slideCell: '#carouselMain',
            titCell: '.carouselBtn ul',
            mainCell: '.img',
            effect: 'leftLoop',
            autoPlay: true,
            autoPage: true,
            interTime: 3000
          });
          let width1 = $(window).width();
          let height1 = parseInt(width1 / 3 * 2)
          $('#carouselMain li a').css('max-height', height1)
        },
        /*轮播图*/
        beautyImg: function () {
          TouchSlide({
            slideCell: "#beautyMain",
            titCell: ".beautyBtn ul",
            mainCell: ".beautyimg",
            effect: "leftLoop",
            autoPlay: true,
            autoPage: true,
            interTime: 3000
          });
          var width = $(window).width();
          var height = parseInt(width / 3 * 2);
          $("#carouselMain li a").css("max-height", height);

        },
        /*限时抢购*/
        timeLimit: function (){
          var swiper1 = new Swiper('.swiper-container1', {
            slidesPerView: 3,
            pagination: {
              el: '.swiper-pagination1',
              clickable: true,
            },
          });
        },
        /*美妆护肤下面的滑动列表*/
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
      mounted(){

      }

    }
</script>

<style scoped>
  @import '../../css/plugins/swiper.min.css';
  @import '../../css/plugins/plugIn.css';
  @import "../../css/common/common.css";
  @import '../../css/other/index.css';
</style>
