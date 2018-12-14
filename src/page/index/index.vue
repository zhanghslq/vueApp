<template>
<div style="height: auto;overflow-y: hidden">
  <div id="top" class="fix">
    <div class="addr">
      <router-link to="myNotice">
        <div class="message"><span></span><em></em></div>
      </router-link>
      <div class="search" v-on:click="toSearch()">
        <em></em>
        <a >
          <!--<input type="text" placeholder="搜索喜欢的宝贝">-->
        </a>
      </div>
    <!--<router-link to="selecTregion">
      <a  class="cityCode">北京 <em class="triangle"></em></a>
    </router-link>-->
      <div class="scanMain" v-on:click="openCamera()">

      </div>
      <!--<a  class="cityCode" v-on:click="openCamera()">扫一扫 </a>-->

    </div>
    <div class="swiper-container" id="nav" style="background-color: white">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide-active" ><span>首页</span></div>
        <div class="swiper-slide" v-for="item in topList"><span>{{item.name}}</span></div>
      </div>
    </div>
  </div>

  <div  class="swiper-container  swiper-container-horizontal swiper-container-ios" id="page">
    <div class="swiper-wrapper">
      <div class="swiper-slide slidepage swiper-slide-active">
              <!--首页-->
        <div class="swiper-container scroll swiper-container-vertical swiper-container-free-mode swiper-container-ios">
          <div class="swiper-wrapper">
            <div class="swiper-slide slidescroll" style="height: auto">
              <div class="homePageMain content-slide" id="test">
                <!--轮播图-->
                <div class="carouseContent swiper-no-swiping">
                  <div id="carouselMain">
                    <div class="tempWrap">
                      <ul class="img">

                        <li v-for="img in topImageList" :key="img.id">
                          <a ><img :src="img.imgUrl"></a>
                        </li>

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
                  <router-link to="tenCommendation">
                    <em class="everydayIcon"></em> 每日十荐
                  </router-link>
                  <router-link to="newGrowGrass">

                    <em class="shareIcon"></em> 新品种草
                  </router-link>
                  <router-link to="xingjiProduce" >

                    <em class="productIcon"></em> 猩际出品
                  </router-link>

                  <router-link to="classification">
                    <em class="classificaIcon"></em> 分类
                  </router-link>
                </div>
                <div class="recommend">
                  <a  class="recommendLeft" v-if="listRecommendSpecial[0]!=undefined" ><img :src="listRecommendSpecial[0].imgUrl"></a>
                  <div class="recommendRight">
                    <a class="rightOne" v-if="listRecommendSpecial[1]!=undefined"><img :src="listRecommendSpecial[1].imgUrl"></a>
                    <div class="rightTwo">
                      <a  class="rightTwoLeft" v-if="listRecommendSpecial[2]!=undefined"><img :src="listRecommendSpecial[2].imgUrl"></a>
                      <a  class="rightTwoRight" v-if="listRecommendSpecial[3]!=undefined"><img :src="listRecommendSpecial[3].imgUrl"></a>
                    </div>
                  </div>
                </div>
                <!--爆品秒杀-->
                <div class="secKill" v-if="listSecKillSpecial.length!=0">
                  <h2>爆品秒杀</h2>
                  <div class="secKillMain">
                    <div class="swiper-container1 flashSaleList">
                      <div class="swiper-wrapper" id="bursting" >
                          <div v-for="(items ,index) in listSecKillSpecial"  :class="index === 0?'swiper-slide bursNav burCur ':'swiper-slide bursNav'" >

                            {{items.name}}

                          </div>




                      </div>
                      <div class="burstCont" v-for="(items ,index) in listSecKillSpecial">
                        <div v-if="index==0">
                          <div class="bursInfo" style="display: block;"  v-for="item in items.list">
                            <a>
                              <div class="burPic"><img :src="item.productTitleImage"></div>
                              <h5>{{item.productTitle}}</h5>
                              <span>￥<em>{{item.msPrice}}</em>.00</span>
                            </a>
                          </div>
                        </div>
                        <div v-else>
                          <div class="bursInfo" v-for="item in items.list">
                            <a >
                              <div class="burPic"><img :src="item.productTitleImage"></div>
                              <h5>{{item.productTitle}}</h5>
                              <span>￥<em>{{item.msPrice}}</em>.00</span>
                            </a>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
                <!--超值热卖-->
                <div class="hotSelling">
                  <h2>超值热卖</h2>
                  <div class="hotMain">
                    <a v-for="item in listHotSellSpecial"><img :src="item.imgUrl"></a>

                  </div>
                </div>
                <div class="guessLike">
                  <h2>猜你喜欢</h2>
                  <div class="likeMain">
                    <a href="#">
                      <div class="likePic">
                        <img src="../../images/temporary/commodity8.jpg">
                      </div>
                      <p>【原味】【9杯装】熊猫有礼&新农新疆冰淇淋</p>
                      <div class="price">
                        <span class="now">￥<em>65.</em> 00 </span>
                        <span class="original">￥<em>76.</em> 00 </span>
                      </div>
                    </a>
                    <a href="#">
                      <div class="likePic">
									<img src="../../images/temporary/commodity8.jpg">
								</div>
                      <p>【原味】【9杯装】熊猫有礼&新农新疆冰淇淋</p>
                      <div class="price">
                        <span class="now">￥<em>65.</em> 00 </span>
                        <span class="original">￥<em>76.</em> 00 </span>
                      </div>
                    </a>
                  <div style="height: 300px;">

                  </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="swiper-slide slidepage swiper-slide-next">
              <!--美妆护肤-->
        <div class="swiper-container scroll swiper-container-vertical swiper-container-free-mode swiper-container-ios">
          <div class="swiper-wrapper">
            <div class="swiper-slide slidescroll" style="height: auto">
              <div class="content-slide">
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
            </div>
            </div>
          </div>
        </div>
          </div>

      <div class="swiper-slide slidepage">

        <div class="swiper-container scroll swiper-container-vertical swiper-container-free-mode swiper-container-ios">
          <div class="swiper-wrapper">
            <div class="swiper-slide slidescroll" style="height: auto">
              <div class="homePageMain">
                <!--轮播图-->
                <div class="carouseContent swiper-no-swiping">
                  <div >
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
                      <div class="likePic">
									<img src="../../images/temporary/commodity8.jpg">
								</div>
                      <p>【原味】【9杯装】熊猫有礼&新农新疆冰淇淋</p>
                      <div class="price">
                        <span class="now">￥<em>65.</em> 00 </span>
                        <span class="original">￥<em>76.</em> 00 </span>
                      </div>
                    </a>
                    <a href="#">
                      <div class="likePic">
									<img src="../../images/temporary/commodity8.jpg">
								</div>
                      <p>【原味】【9杯装】熊猫有礼&新农新疆冰淇淋</p>
                      <div class="price">
                        <span class="now">￥<em>65.</em> 00 </span>
                        <span class="original">￥<em>76.</em> 00 </span>
                      </div>
                    </a>
                    <a href="#">
                      <div class="likePic">
									<img src="../../images/temporary/commodity8.jpg">
								</div>
                      <p>【原味】【9杯装】熊猫有礼&新农新疆冰淇淋</p>
                      <div class="price">
                        <span class="now">￥<em>65.</em> 00 </span>
                        <span class="original">￥<em>76.</em> 00 </span>
                      </div>
                    </a>
                    <a href="#">
                      <div class="likePic">
									<img src="../../images/temporary/commodity8.jpg">
								</div>
                      <p>【原味】【9杯装】熊猫有礼&新农新疆冰淇淋</p>
                      <div class="price">
                        <span class="now">￥<em>65.</em> 00 </span>
                        <span class="original">￥<em>76.</em> 00 </span>
                      </div>
                    </a>
                    <a href="#">
                      <div class="likePic">
									<img src="../../images/temporary/commodity8.jpg">
								</div>
                      <p>【原味】【9杯装】熊猫有礼&新农新疆冰淇淋</p>
                      <div class="price">
                        <span class="now">￥<em>65.</em> 00 </span>
                        <span class="original">￥<em>76.</em> 00 </span>
                      </div>
                    </a>
                    <a href="#">
                      <div class="likePic">
									<img src="../../images/temporary/commodity8.jpg">
								</div>
                      <p>【原味】【9杯装】熊猫有礼&新农新疆冰淇淋</p>
                      <div class="price">
                        <span class="now">￥<em>65.</em> 00 </span>
                        <span class="original">￥<em>76.</em> 00 </span>
                      </div>
                    </a>
                    <a href="#">
                      <div class="likePic">
									<img src="../../images/temporary/commodity8.jpg">
								</div>
                      <p>【原味】【9杯装】熊猫有礼&新农新疆冰淇淋</p>
                      <div class="price">
                        <span class="now">￥<em>65.</em> 00 </span>
                        <span class="original">￥<em>76.</em> 00 </span>
                      </div>
                    </a>
                    <a href="#">
                      <div class="likePic">
									<img src="../../images/temporary/commodity8.jpg">
								</div>
                      <p>【原味】【9杯装】熊猫有礼&新农新疆冰淇淋</p>
                      <div class="price">
                        <span class="now">￥<em>65.</em> 00 </span>
                        <span class="original">￥<em>76.</em> 00 </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>




    </div>
  </div>

  </div>
  <!--底部 开始-->
  <footer class="memberFooter" v-if="isDev">

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
  <!--底部 结束-->

    </div>
</template>

<script>
/* eslint-disable */
import store from '../../service/store'
import $ from 'jquery'
import {TouchSlide} from '../../js/plugins/TouchSlide.1.1.min'
import Swiper from 'swiper'

import axios from 'axios'
import 'vue-layer-mobile/need/layer.css'
let pageSwiper=null;





export default {
  name: 'index',
  data () {
    return {
      isDev:false,
      topList:[],//首页置顶导航
      pageList:[],
      topImageList:[],//首页轮播
      listRecommendSpecial:[],//推荐
      listSecKillSpecial:[],//爆款秒杀
      listHotSellSpecial:[],//热卖
      navSwiper:{},

    }
  },

  components: {
    Swiper,
    TouchSlide,
  },
  methods: {
    openCamera(){//打开相机扫描二维码
        if(store.isDev()){
          alert("test")
        }else{
          if(store.judge()==1){
            window.webkit.messageHandlers.currentCookies.postMessage({
              "code": "100",
            });

          }else if(store.judge()==0){
            window.androidXingJiApp.postMessage(JSON.stringify({
              "code": "100",
            }));
          }
        }
    },
    receiveResult(result) {//接受返回值信息
      let _this=this;
      if(result!=null&&result!=undefined&&result!=''){

        result=JSON.parse(result)

        if(result.uid!=undefined&&result.uid!=null&&result.uid!=''){

          store.save("lastPage","index")
          store.save("cameraResult",result)

          if(store.isDev()){
            this.$router.push("mobileLogin")
          }else{
            if(store.judge()==1){
              window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
                "code": "99"
              });
              window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
                "code": "91",
                "index":0,
                "url":store.getNextAddress()+"mobileLogin"
              });

            }else if(store.judge()==0){
              window.androidXingJiApp.postMessage(JSON.stringify({
                "code": "99",
              }));
              window.androidXingJiApp.postMessage(JSON.stringify({
                "code": "91",
                "index":0,
                "url":store.getNextAddress()+"mobileLogin"
              }));
            }
          }
        }else{
          _this.$layer.toast({
            icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
            content: "得到的结果取uid为空",
            time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
          })
        }
      }else{


        _this.$layer.toast({
          icon: 'icon-check', // 图标clssName 如果为空 toast位置位于下方,否则居中
          content: "扫描得到的结果为空",
          time: 2000 // 自动消失时间 toast类型默认消失时间为2000毫秒
        })
      }


    },
    toSearch(){
      if(store.isDev()){
        this.$router.push("search")
      }else{
        if(store.judge()==1) {
          window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
            "code": "91",
            "index":0,
            "url":store.getNextAddress()+"search"
          });
        }else if(store.judge()==0) {
          window.androidXingJiApp.postMessage(JSON.stringify({
            "code": "91",
            "index":0,
            "url":store.getNextAddress()+"search"}));
        }
      }

    },
    /*滑动导航切换内容*/
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
    navTab:function (){
      let _this = this
  //暂时设计每个slide大小需要一致
  let bar;
  let topBar;

  let tSpeed = 300 //切换速度300ms
  let clientWidth;
  let navSum;
  let navSlideWidth=75;
  let  navWidth;
  var navSwiper = new Swiper('#nav', {
    //observer:true,//修改swiper自己或子元素时，自动初始化swiper
    //observeParents:true,//修改swiper的父元素时，自动初始化swiper
    slidesPerView: 5,
    freeMode: true,
    on: {

      init: function() {

        navSlideWidth = this.slides.eq(0).css('width'); //导航字数需要统一,每个导航宽度一致

        console.log(navSlideWidth)
        bar = this.$el.find('.bar')
        bar.css('width', navSlideWidth)
        bar.transition(tSpeed)
        navSum = this.slides[this.slides.length - 1].offsetLeft //最后一个slide的位置

        clientWidth = parseInt(this.$wrapperEl.css('width')) //Nav的可视宽度
        navWidth = 0
        for (let i = 0; i < this.slides.length; i++) {
          navWidth += parseInt(this.slides.eq(i).css('width'))
        }
        topBar = this.$el.parents('body').find('#top') //页头



      },

    },
  });
  let progress;
  var pageSwiper = new Swiper('#page', {
    observer:true,//修改swiper自己或子元素时，自动初始化swiper
    //observeParents:true,//修改swiper的父元素时，自动初始化swiper
    //autoHeight: true, //高度随内容变化
    watchSlidesProgress: true,
    resistanceRatio: 0,
    //slidesPerView: 'auto',
    init(){
      /*$(".scroll .swiper-wrapper .swiper-slide .content-slide").each(function () {

        console.log($(this).height())
        $(this).parent().height($(this).height())
        $(this).parent().next().css("display","none")
        console.log($(this).parent().parent().parent(".scroll").height())

      })*/
    },
    on: {
      slideChange: function () {
        console.log(this.activeIndex);
        //$(".swiper-wrapper").css("height","100%");



          console.log("获取slide")


       /* var H = $(".content-slide").eq(this.activeIndex).height();
        $(".scroll .swiper-slide").css('height', H + 'px');
        $(".scroll .swiper-wrapper").css('height', H + 'px');*/
      },



      touchMove: function() {
        progress = this.progress

        bar.transition(0)
        bar.transform('translateX(' + navSum * progress + 'px)')
        //粉色255,72,145灰色51,51,51
        for (let i = 0; i < this.slides.length; i++) {
          let slideProgress = this.slides[i].progress
          if (Math.abs(slideProgress) < 1) {

            let r = Math.floor((235 - 51) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 51)
            let g = Math.floor((189 - 51) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 51)
            let b = Math.floor((104 - 51) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 51)
            navSwiper.slides.eq(i).find('span').css('color', 'rgba(' + r + ',' + g + ',' + b + ',1)')
          }
        }
      },
      transitionStart: function() {
        let activeIndex = this.activeIndex

        pageSwiper.slideTo(activeIndex,0)
        let activeSlidePosition = navSwiper.slides[activeIndex].offsetLeft

        //释放时导航粉色条移动过渡
        bar.transition(tSpeed)
        bar.transform('translateX(' + activeSlidePosition + 'px)')
        //释放时文字变色过渡
        navSwiper.slides.eq(activeIndex).find('span').transition(tSpeed)
        navSwiper.slides.eq(activeIndex).find('span').css('color', 'rgba(235,189,104,1)')
        if (activeIndex > 0) {
          navSwiper.slides.eq(activeIndex - 1).find('span').transition(tSpeed)
          navSwiper.slides.eq(activeIndex - 1).find('span').css('color', 'rgba(102,102,102,1)')
        }
        if (activeIndex < this.slides.length) {
          navSwiper.slides.eq(activeIndex + 1).find('span').transition(tSpeed)
          navSwiper.slides.eq(activeIndex + 1).find('span').css('color', 'rgba(102,102,102,1)')
        }
        //导航居中
        let navActiveSlideLeft = navSwiper.slides[activeIndex].offsetLeft //activeSlide距左边的距离

        navSwiper.setTransition(tSpeed)
        if (navActiveSlideLeft < (clientWidth - parseInt(navSlideWidth)) / 2) {
          navSwiper.setTranslate(0)
        } else if (navActiveSlideLeft > navWidth - (parseInt(navSlideWidth) + clientWidth) / 2) {
          navSwiper.setTranslate(clientWidth - navWidth)
        } else {
          navSwiper.setTranslate((clientWidth - parseInt(navSlideWidth)) / 2 - navActiveSlideLeft)
        }

      },
    }
  });

  navSwiper.on('tap', function() {
    let clickIndex = this.clickedIndex
    let clickSlide = this.slides.eq(clickIndex)
    pageSwiper.slideTo(clickIndex, 0);
    this.slides.find('span').css('color', 'rgba(102,102,102,1)');
    clickSlide.find('span').css('color', 'rgba(235,189,104,1)');
  })
      var scrollSwiper = new Swiper('.scroll', {
        //65是头部的高
        //36是top地址和搜索的高
        //observer: true,//修改swiper自己或子元素时，自动初始化swiper
        //observeParents:true,//修改swiper的父元素时，自动初始化swiper

        autoHeight: true,
        //slidesOffsetBefore: 72,
        direction: 'vertical',
        freeMode: true,
        slidesPerView: 'auto',

        slidesOffsetAfter: 80,
      })



     this.navSwiper=navSwiper;


},
  mobile_view: function (mobile) {
  var mobile = mobile+'  <em class="triangle"></em>';
  $('.cityCode').append(mobile);
}
},

  watch:{
    /*topList:function (value,oldValue) {
      this.navTab();
    }*/
  },
  updated(){
    this.timeLimit();         //限时抢购滑动图
    this.makeUpone();         //美妆护肤下面的滑动列表

  },
  activated(){
    var mobile = this.$route.params.city
    if(mobile){
      $('.cityCode').empty()
      this.mobile_view(mobile)
    }
  },

  destroyed(){
    $('#bursting .swiper-slide').unbind("click")
  },
  mounted () {
    window['receiveResult'] = (result) => {
      this.receiveResult(result)
    }
    var isStore=store.fetch("isStoreKeeper");
    if(!store.isDev()){
      if(1==isStore){
        if(store.judge()==1){
          window.webkit.messageHandlers.htmlSetAppActionCode.postMessage({
            "code": "81",
            "role":"1",
          });
        }else if(store.judge()==0){
          window.androidXingJiApp.postMessage(JSON.stringify({
            "code": "81",
            "role":"1",
          }));
        }
      }
    }

    this.isDev=store.isDev();

    this.beautyImg();
    let _this=this;
    axios.post(store.getAddress()+'/api/wxapp/home/listTopSpecial',{
    }).then(function (response) {
      console.log(response)
      if (response.data.code == 200) {
        console.log(response)
        _this.topImageList=response.data.list

        _this.$nextTick(function () {

          _this.bannerFocusImg();
        })

      } else {

      }
    }).catch(function (error) {
      console.log(error);
    })


      axios.post(store.getAddress()+'/api/wxapp/category/listTop').then(function (response) {
        console.log(response)
        if (response.data.code == 200) {
          _this.topList=response.data.list

        } else {

        }
      }).catch(function (error) {
        console.log(error);
      })

    //推荐
    axios.post(store.getAddress()+'/api/wxapp/home/listRecommendSpecial',{
    }).then(function (response) {
      console.log(response)
      if (response.data.code == 200) {
        _this.listRecommendSpecial=response.data.list

      } else {

      }
    }).catch(function (error) {
      console.log(error);
    })
    axios.post(store.getAddress()+'/api/wxapp/home/listHotSellSpecial',{
    }).then(function (response) {
      console.log(response)
      if (response.data.code == 200) {
        _this.listHotSellSpecial=response.data.list

      } else {

      }
    }).catch(function (error) {
      console.log(error);
    })

    //爆款秒杀
    axios.post(store.getAddress()+'/api/wxapp/home/listSecKillSpecial',{
    }).then(function (response) {
      console.log(response)
      if (response.data.code == 200) {
        _this.listSecKillSpecial=response.data.list
        _this.$nextTick(function () {
          //爆口秒杀 通过lass调取，一句可以搞定，用于页面中可能有多个导航的情况
          _this.timeLimit();
          $('#bursting .swiper-slide').click(function(){
            var i=$(this).index();
            var $this = $(this);
            $("#bursting .swiper-slide").removeClass("burCur");
            $this.addClass('burCur');
            $(".burstCont .bursInfo:eq("+i+")").show().siblings().hide();
          });

            _this.navTab();

        })
      } else {

      }
    }).catch(function (error) {
      console.log(error);
    })

    $("#two2").attr("height",$("#two").attr("height"))
    var mobile = this.$route.params.city
    if(mobile){
      $('.cityCode').empty()
      this.mobile_view(mobile)
    }


  }
}
</script>
<style scoped>
  @import '../../css/plugins/swiper.min.css';
  @import '../../css/plugins/plugIn.css';
  @import "../../css/common/common.css";
  @import '../../css/other/index.css';
</style>
<style lang="stylus" scoped>

    #nav {
      position: fixed !important;
      z-index: 222;
      left: 0;
      top: 48px;
      right: 0;
    }

    #page {
      left: 0;
      top: 72px;
      right: 0;
      bottom: 0;
    }

</style>
<style lang="stylus" scoped>
  .swiper-container,#page {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;

    .swiper-wrapper {
      .swiper-slide {
        height: 100%;
        overflow: auto;
      }
    }
  }
</style>



