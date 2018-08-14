<template>
    <div>
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        选择地区
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main style="margin-top: 0.9rem">
        <p class="promptText">各地区售卖商品不同，请根据您的收货地址选择相应的地区</p>
        <p class="smallPrompt">快捷收货地址选择</p>
        <div class="defaultAddress">
          <span>北京市北京市</span>
          <a href="#">默认地址</a>
        </div>
        <p class="smallPrompt">当前定位地区</p>
        <div class="location">
          <span>廊坊市</span>
        </div>
        <div class="countryAreaMain" style="margin:0;">
          <ul id="city">
          </ul>
          <div class="letterList tregionList">
            <em>#</em>
            <em>$</em>
            <em flag="item0" title="0">A</em>
            <em flag="item1" title="1">B</em>
            <em flag="item2" title="2">C</em>
            <em flag="item3" title="3">F</em>
            <em flag="item4" title="4">G</em>
            <em flag="item5" title="5">H</em>
            <em flag="item6" title="6">J</em>
            <em flag="item7" title="7">L</em>
            <em flag="item8" title="8">N</em>
            <em flag="item9" title="9">Q</em>
            <em flag="item10" title="10">S</em>
            <em flag="item11" title="11">T</em>
            <em flag="item12" title="12">X</em>
            <em flag="item13" title="13">Y</em>
            <em flag="item14" title="14">Z</em>
          </div>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
    export default {
        name: "selecTregion",
      methods:{
        phone_json:function () {
      var data = this.mobileArray();
      var letterArray = this.generateSmall();
      var phone_list = [];
      $.each(letterArray, function (index_z, item_z) {
        var phoneArray = [];
        var phone = [];
        $.each(data, function (index_h, item_h) {
          if (item_h.letter === item_z) {
            phoneArray.push(item_h);
          }
        });
        if (phoneArray.length !== 0) {
          phone['letter'] = item_z;
          phone['list'] = phoneArray;
          phone_list.push(phone);
        }
      });
      this.phone_view(phone_list);
    },
    generateSmall:function () {
      var str = [];
      for (var i = 0; i < 26; i++) {
        str.push(String.fromCharCode((65 + i)));
      }
      return str;
    },

    phone_view: function (phone_list) {
      var map = '';
      $.each(phone_list, function (index_h, item_h) {
        var item = 'item' + index_h;
        map += "<li class='letter item' id=" + item + ">" + item_h.letter + "</li>";
        $.each(item_h.list, function (index_l, item_l) {
          map += "<li class='phone'>";
          map += "<span>" + item_l.name + "</span>";
          map += "</li>";
        });
      });
      $('#city').append(map);
      var _this=this;
      $(".phone").on("click", function (e) {
        var hao = $(this).children('span').text();
        _this.$router.push({ name: 'index', params: { city: hao }})
      });
    },
        mobileArray:function () {
          var mobileArray = {
            "0": {
              "name": "安徽",
              "code": "",
              "title": "",
              "letter": "A"
            },
            "1": {
              "name": "北京",
              "code": "",
              "title": "",
              "letter": "B"
            },
            "2": {
              "name": "重庆",
              "code": "",
              "title": "",
              "letter": "C"
            },
            "3": {
              "name": "福建",
              "code": "",
              "title": "",
              "letter":"F"
            },
            "4": {
              "name": "广东",
              "code": "",
              "title": "",
              "letter": "G"
            },
            "5": {
              "name": "广西",
              "code": "",
              "title": "",
              "letter": "G"
            },
            "6": {
              "name": "贵州",
              "code": "",
              "title": "",
              "letter": "G"
            },
            "7": {
              "name": "甘肃",
              "code": "",
              "title": "",
              "letter": "G"
            },
            "8": {
              "name": "河北",
              "code": "",
              "title": "",
              "letter": "H"
            },
            "9": {
              "name": "黑龙江",
              "code": "",
              "title": "",
              "letter": "H"
            },
            "10": {
              "name": "河南",
              "code": "",
              "title": "",
              "letter": "H"
            },
            "11": {
              "name": "湖北",
              "code": "",
              "title": "",
              "letter": "H"
            },
            "12": {
              "name": "湖南",
              "code": "",
              "title": "",
              "letter": "H"
            },
            "13": {
              "name": "海南",
              "code": "",
              "title": "",
              "letter": "H"
            },
            "14": {
              "name": "吉林",
              "code": "",
              "title": "",
              "letter": "J"
            },
            "15": {
              "name": "江苏",
              "code": "",
              "title": "",
              "letter": "J"
            },
            "16": {
              "name": "江西",
              "code": "",
              "title": "",
              "letter": "J"
            },
            "17": {
              "name": "辽宁",
              "code": "",
              "title": "",
              "letter": "L"
            },
            "18": {
              "name": "内蒙古",
              "code": "",
              "title": "",
              "letter": "N"
            },
            "19": {
              "name": "宁夏",
              "code": "",
              "title": "",
              "letter": "N"
            },
            "20": {
              "name": "青海",
              "code": "",
              "title": "",
              "letter": "Q"
            },
            "21": {
              "name": "山西",
              "code": "",
              "title": "",
              "letter": "S"
            },
            "22": {
              "name": "上海",
              "code": "",
              "title": "",
              "letter": "S"
            },
            "23": {
              "name": "山东",
              "code": "",
              "title": "",
              "letter": "S"
            },
            "24": {
              "name": "四川",
              "code": "",
              "title": "",
              "letter": "S"
            },
            "25": {
              "name": "陕西",
              "code": "",
              "title": "",
              "letter": "S"
            },
            "26": {
              "name": "天津",
              "code": "",
              "title": "",
              "letter": "T"
            },
            "27": {
              "name": "西藏",
              "code": "",
              "title": "",
              "letter": "X"
            },
            "28": {
              "name": "新疆",
              "code": "",
              "title": "",
              "letter": "X"
            },
            "29": {
              "name": "云南",
              "code": "",
              "title": "",
              "letter": "Y"
            },
            "30": {
              "name": "浙江",
              "code": "",
              "title": "",
              "letter": "Z"
            }
          };
          return mobileArray;
        }
      },

      mounted:function () {
        this.phone_json();
        $(".letterList em").click(function () {
          var oA = $(this);
          var index = oA.attr("title");
          console.log();
          var h = $(".item").eq(index).offset().top;
          if (oA.attr("class") !== "current") {
            var h = h - $("header").height() +'px';
            $('html,body').animate({scrollTop: h}, 300);
          }
        })
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/login.css";
</style>
