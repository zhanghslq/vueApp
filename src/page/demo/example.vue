<template>
  <div class="views">
    <div class="view view-main">
      <!-- navbar -->
      <!-- <div class="navbar">
      <div class="navbar-inner" data-page="home">
          <div class="left"></div>
          <div class="center"></div>
          <div class="right"></div>
      </div>
      </div> -->
      <!-- Pages -->
      <div class="pages">
        <div class="page" data-page="home">
          <div class="page-content hide-tabbar-on-scroll">
            <div class="list-block">
              <ul>
                <li>
                  <div class="item-content">
                    <div class="item-inner">
                      <div class="item-title label">收货人
                        <font class="color-red">*</font>
                      </div>
                      <div class="item-input">
                        <input type="text" placeholder="收货人姓名" name="consignee">
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item-content">
                    <div class="item-inner">
                      <div class="item-title label">联系电话
                        <font class="color-red">*</font>
                      </div>
                      <div class="item-input">
                        <input type="tel" placeholder="手机号" name="telephone">
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item-content">
                    <div class="item-inner">
                      <div class="item-title label">所在地区
                        <font class="color-red">*</font>
                      </div>
                      <div class="item-input">
                        <input type="text" placeholder="请选择城市" readonly id="location" name="location">
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="item-content">
                    <div class="item-inner">
                      <div class="item-title label">详细地址
                        <font class="color-red">*</font>
                      </div>
                      <div class="item-input">
                        <input type="text" placeholder="街道、楼号" name="detailedAddress">
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <!-- /.list-block -->
            <div class="content-block">
              <span class="button button-big button-fill">确定</span>
            </div>
          </div>
          <!-- /.page-content -->
        </div>
        <!-- /.page -->
      </div>
      <!-- /.pages -->
    </div>
    <!-- /.view -->
  </div>
</template>

<script>
  import $ from 'jquery'
    export default {
      name: "example",
      methods:{
          init:function () {
            function getProvince(regions) {
              return regions['provincesArr'];
            }

            /**
             * [getCity 获取市]
             * @param  {[Object]} regions      [省市区数据]
             * @param  {[String]} provinceName [省名]
             * @return {[Array]}               [市数组]
             */
            function getCity(regions, provinceName) {
              return regions['provinces'][provinceName]['citiesArr'];
            }

            /**
             * [getArea 获取区]
             * @param  {[Object]} regions      [省市区数据]
             * @param  {[String]} provinceName [省名]
             * @param  {[String]} cityName     [市名]
             * @return {[Array]}               [区数组]
             */
            function getArea(regions, provinceName, cityName) {

              return regions['provinces'][provinceName]['cities'][cityName]['areasArr'];

            }

            // 初始化 Framework7
            var myApp = new Framework7();

            // 初始化省市区
            var province = getProvince(regions),
              city = getCity(regions, '北京市'),
              area = getArea(regions, '北京市', '北京市');

            // 保存 picker 选择的省
            var provinceSelect = '';

            // 省市区联动 / Framework7 picker
            var pickerLocation = myApp.picker({
              input: '#location',
              rotateEffect: true,
              toolbarTemplate: '<div class="toolbar">\
                            <div class="toolbar-inner">\
                                <div class="left">\
                                    <a href="#" class="link close-picker">取消</a>\
                                </div>\
                                <div class="right">\
                                    <a href="#" class="link close-picker">完成</a>\
                                </div>\
                            </div>\
                        </div>',
              cols: [{
                cssClass: 'f-s-14',
                width: '33.33%',
                textAlign: 'left',
                values: province,
                onChange: function(picker, province) {
                  if (picker.cols[1].replaceValues) {
                    provinceSelect = province;
                    city = getCity(regions, province);
                    area = getArea(regions, province, city[0]);
                    picker.cols[1].replaceValues(city);
                    picker.cols[2].replaceValues(area);
                  }
                }
              },
                {
                  cssClass: 'f-s-14',
                  width: '33.33%',
                  textAlign: 'center',
                  values: city,
                  onChange: function(picker, city) {
                    if (picker.cols[2].replaceValues) {
                      area = getArea(regions, provinceSelect, city);
                      picker.cols[2].replaceValues(area);
                    }
                  }
                },
                {
                  cssClass: 'f-s-14',
                  width: '33.33%',
                  textAlign: 'right',
                  values: area,
                }
              ]
            })
          },
      },
      mounted:function () {
        this.init()
      }
    }
</script>

<style scoped>
@import 'https://cdn.bootcss.com/framework7/1.6.5/css/framework7.ios.min.css' ;
@import 'https://cdn.bootcss.com/framework7/1.6.5/css/framework7.ios.colors.min.css';
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .phone, .phone iframe {
    height: 100%;
    width: 100%;
  }

  @media(min-width:765px) {
    .phone {
      position: absolute;
      top: 50%;
      left: 50%;
      background: #111;
      border-radius: 55px;
      box-shadow: 0px 0px 0px 2px #aaa;
      width: 320px;
      height: 568px;
      margin: -400px 0 0 -160px;
      padding: 105px 25px;
    }

    .phone::before {
      content: '';
      width: 60px;
      height: 10px;
      border-radius: 10px;
      position: absolute;
      left: 50%;
      margin-left: -30px;
      background: #333;
      top: 50px;
    }

    .phone::after {
      content: '';
      position: absolute;
      width: 60px;
      height: 60px;
      left: 50%;
      margin-left: -30px;
      bottom: 20px;
      border-radius: 100%;
      box-sizing: border-box;
      border: 5px solid #333;
    }

    .phone iframe {
      width: 320px;
      height: 568px;
      display: block;
      width: 100%;
    }

  }

  /*LOOP - Font Size */
  .f-s-2 {
    font-size: 2px !important;
  }

  .f-s-4 {
    font-size: 4px !important;
  }

  .f-s-6 {
    font-size: 6px !important;
  }

  .f-s-8 {
    font-size: 8px !important;
  }

  .f-s-10 {
    font-size: 10px !important;
  }

  .f-s-12 {
    font-size: 12px !important;
  }

  .f-s-14 {
    font-size: 14px !important;
  }

  .f-s-16 {
    font-size: 16px !important;
  }

  .f-s-18 {
    font-size: 18px !important;
  }

  .f-s-20 {
    font-size: 20px !important;
  }

  .f-s-22 {
    font-size: 22px !important;
  }

  .f-s-24 {
    font-size: 24px !important;
  }

  .f-s-26 {
    font-size: 26px !important;
  }

  .f-s-28 {
    font-size: 28px !important;
  }

  .f-s-30 {
    font-size: 30px !important;
  }

  .f-s-32 {
    font-size: 32px !important;
  }

  .f-s-34 {
    font-size: 34px !important;
  }

  .f-s-36 {
    font-size: 36px !important;
  }

  .f-s-38 {
    font-size: 38px !important;
  }

  .f-s-40 {
    font-size: 40px !important;
  }

</style>
