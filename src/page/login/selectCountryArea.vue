<template>
  <div>
    <header class="fix">
      <a href="javascript:history.go(-1);" class="returnBtn"></a>
      选择国家/地区
    </header>
    <!--头部 结束-->
    <!--中间 开始-->
    <main>
      <div class="countryAreaMain">
        <ul id="phone">
        </ul>
        <div class="letterList">
          <em flag="item0" title="0">A</em>
          <em flag="item1" title="1">B</em>
          <em flag="item2" title="2">C</em>
          <em flag="item3" title="3">D</em>
          <em flag="item4" title="4">E</em>
          <em flag="item5" title="5">F</em>
          <em flag="item6" title="6">G</em>
          <em flag="item7" title="7">H</em>
          <em flag="item8" title="8">J</em>
          <em flag="item9" title="9">K</em>
          <em flag="item10" title="10">L</em>
          <em flag="item11" title="11">M</em>
          <em flag="item12" title="12">N</em>
          <em flag="item13" title="13">P</em>
          <em flag="item14" title="14">R</em>
          <em flag="item15" title="15">S</em>
          <em flag="item16" title="16">T</em>
          <em flag="item17" title="17">W</em>
          <em flag="item18" title="18">X</em>
          <em flag="item19" title="19">Y</em>
          <em flag="item20" title="20">Z</em>
        </div>
      </div>
    </main>
    <!--中间 结束-->
  </div>
</template>

<script>
/* eslint-disable */
import $ from 'jquery'
export default {
  name: 'selectCountryArea',
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

    phone_view:function (phone_list) {
  var map = '';
  $.each(phone_list, function (index_h, item_h) {
    var item = 'item' + index_h;
    map += "<li class='letter item' id=" + item + ">" + item_h.letter + "</li>";
    $.each(item_h.list, function (index_l, item_l) {
      map += "<li class='phone'>";
      map += "<span >" + item_l.name + "</span>";
      map += "<em>" + item_l.code + "</em>";
      map += "</li>";
    });
  });
  $('#phone').append(map);
  var _this=this;
  $(".phone").on("click", function (e) {
    var hao = $(this).children('em').text();
    console.log(hao)
    _this.$router.push({ name: 'mobileLogin', params: { mobileAddress: hao }})
  });
},
    mobileArray:function () {
  var mobileArray = {
    "0": {
      "name": "安哥拉",
      "code": "0244",
      "title": "Angola",
      "letter": "A"
    },
    "1": {
      "name": "阿富汗",
      "code": "93",
      "title": "Afghanistan",
      "letter": "A"
    },
    "2": {
      "name": "阿曼",
      "code": "968",
      "title": "Oman",
      "letter": "A"
    },
    "3": {
      "name": "埃及",
      "code": "20",
      "title": "Egypt",
      "letter": "A"
    },
    "4": {
      "name": "阿尔巴尼亚",
      "code": "335",
      "title": "Albania",
      "letter": "A"
    },
    "5": {
      "name": "爱尔兰",
      "code": "353",
      "title": "Ireland",
      "letter": "A"
    },
    "6": {
      "name": "阿尔及利亚",
      "code": "213",
      "title": "Algeria",
      "letter": "A"
    },
    "7": {
      "name": "安道尔共和国",
      "code": "376",
      "title": "Andorra",
      "letter": "A"
    },
    "8": {
      "name": "安圭拉岛",
      "code": "1254",
      "title": "Anguilla",
      "letter": "A"
    },
    "9": {
      "name": "安提瓜和巴布达",
      "code": "1268",
      "title": "Antigua and Barbuda",
      "letter": "A"
    },
    "10": {
      "name": "阿根廷",
      "code": "54",
      "title": "Argentina",
      "letter": "A"
    },
    "11": {
      "name": "埃塞俄比亚",
      "code": "251",
      "title": "Ethiopia",
      "letter": "A"
    },
    "12": {
      "name": "阿森松",
      "code": "247",
      "title": "Ascension",
      "letter": "A"
    },
    "13": {
      "name": "爱沙尼亚",
      "code": "372",
      "title": "Estonia",
      "letter": "A"
    },
    "14": {
      "name": "奥地利",
      "code": "43",
      "title": "Austria",
      "letter": "A"
    },
    "15": {
      "name": "阿塞拜疆",
      "code": "994",
      "title": "Azerbaijan",
      "letter": "A"
    },
    "16": {
      "name": "巴哈马",
      "code": "1242",
      "title": "Bahamas",
      "letter": "B"
    },
    "17": {
      "name": "巴林",
      "code": "973",
      "title": "Bahrain",
      "letter": "B"
    },
    "18": {
      "name": "冰岛",
      "code": "354",
      "title": "Iceland",
      "letter": "B"
    },
    "19": {
      "name": "巴巴多斯",
      "code": "1246",
      "title": "Barbados",
      "letter": "B"
    },
    "20": {
      "name": "巴基斯坦",
      "code": "92",
      "title": "Pakistan",
      "letter": "B"
    },
    "21": {
      "name": "巴拿马",
      "code": "507",
      "title": "Panama",
      "letter": "B"
    },
    "22": {
      "name": "巴布亚新几内亚",
      "code": "675",
      "title": "Papua New Cuinea",
      "letter": "B"
    },
    "23": {
      "name": "巴拉圭",
      "code": "595",
      "title": "Paraguay",
      "letter": "B"
    },
    "24": {
      "name": "白俄罗斯",
      "code": "375",
      "title": "Belarus",
      "letter": "B"
    },
    "25": {
      "name": "比利时",
      "code": "32",
      "title": "Belgium",
      "letter": "B"
    },
    "26": {
      "name": "伯利兹",
      "code": "501",
      "title": "Belize",
      "letter": "B"
    },
    "27": {
      "name": "贝宁",
      "code": "229",
      "title": "Benin",
      "letter": "B"
    },
    "28": {
      "name": "百慕大群岛",
      "code": "1441",
      "title": "Bermuda Is",
      "letter": "B"
    },
    "29": {
      "name": "玻利维亚",
      "code": "591",
      "title": "Bolivia",
      "letter": "B"
    },
    "30": {
      "name": "博茨瓦纳",
      "code": "267",
      "title": "Botswana",
      "letter": "B"
    },
    "31": {
      "name": "巴西",
      "code": "55",
      "title": "Brazil",
      "letter": "B"
    },
    "32": {
      "name": "保加利亚",
      "code": "359",
      "title": "Bulgaria",
      "letter": "B"
    },
    "33": {
      "name": "布基纳法索",
      "code": "226",
      "title": "Burkina Faso",
      "letter": "B"
    },
    "34": {
      "name": "布隆迪",
      "code": "257",
      "title": "Burundi",
      "letter": "B"
    },
    "35": {
      "name": "朝鲜",
      "code": "850",
      "title": "North Korea",
      "letter": "C"
    },
    "36": {
      "name": "丹麦",
      "code": "420",
      "title": "Denmark",
      "letter": "D"
    },
    "37": {
      "name": "多米尼加共和国",
      "code": "1890",
      "title": "Dominica Rep",
      "letter": "D"
    },
    "38": {
      "name": "德国",
      "code": "49",
      "title": "Germany",
      "letter": "D"
    },
    "39": {
      "name": "厄瓜多尔",
      "code": "593",
      "title": "Ecuador",
      "letter": "E"
    },
    "40": {
      "name": "斐济",
      "code": "679",
      "title": "Fiji",
      "letter": "F"
    },
    "41": {
      "name": "芬兰",
      "code": "358",
      "title": "Finland",
      "letter": "F"
    },
    "42": {
      "name": "法国",
      "code": "33",
      "title": "France",
      "letter": "F"
    },
    "43": {
      "name": "法属圭亚那",
      "code": "594",
      "title": "French Guiana",
      "letter": "F"
    },
    "44": {
      "name": "法属玻利尼西亚",
      "code": "689",
      "title": "French Polynesia",
      "letter": "F"
    },
    "45": {
      "name": "冈比亚",
      "code": "220",
      "title": "Gambia",
      "letter": "G"
    },
    "46": {
      "name": "哥斯达黎加",
      "code": "506",
      "title": "Costa Rica",
      "letter": "G"
    },
    "47": {
      "name": "古巴",
      "code": "53",
      "title": "Cuba",
      "letter": "G"
    },
    "48": {
      "name": "哥伦比亚",
      "code": "57",
      "title": "Colombia",
      "letter": "G"
    },
    "49": {
      "name": "刚果",
      "code": "242",
      "title": "Congo",
      "letter": "G"
    },
    "50": {
      "name": "格鲁吉亚",
      "code": "995",
      "title": "Georgia",
      "letter": "G"
    },
    "51": {
      "name": "格林纳达",
      "code": "1809",
      "title": "Grenada",
      "letter": "G"
    },
    "52": {
      "name": "关岛",
      "code": "1671",
      "title": "Guam",
      "letter": "G"
    },
    "53": {
      "name": "圭亚那",
      "code": "592",
      "title": "Guyana",
      "letter": "G"
    },
    "54": {
      "name": "海地",
      "code": "509",
      "title": "Haiti",
      "letter": "H"
    },
    "55": {
      "name": "韩国",
      "code": "82",
      "title": "Korea",
      "letter": "H"
    },
    "56": {
      "name": "荷属安的列斯",
      "code": "599",
      "title": "Netheriands Antilles",
      "letter": "H"
    },
    "57": {
      "name": "荷兰",
      "code": "31",
      "title": "Netherlands",
      "letter": "H"
    },
    "58": {
      "name": "洪都拉斯",
      "code": "504",
      "title": "Honduras",
      "letter": "H"
    },
    "59": {
      "name": "哈萨克斯坦",
      "code": "327",
      "title": "Kazakstan",
      "letter": "H"
    },
    "60": {
      "name": "加蓬",
      "code": "241",
      "title": "Gabon",
      "letter": "J"
    },
    "61": {
      "name": "捷克",
      "code": "420",
      "title": "Czech Republic",
      "letter": "J"
    },
    "62": {
      "name": "几内亚",
      "code": "224",
      "title": "Guinea",
      "letter": "J"
    },
    "63": {
      "name": "加纳",
      "code": "233",
      "title": "Ghana",
      "letter": "J"
    },
    "64": {
      "name": "加拿大",
      "code": "1",
      "title": "Canada",
      "letter": "J"
    },
    "65": {
      "name": "吉布提",
      "code": "253",
      "title": "Djibouti",
      "letter": "J"
    },
    "66": {
      "name": "吉尔吉斯坦",
      "code": "331",
      "title": "Kyrgyzstan",
      "letter": "J"
    },
    "67": {
      "name": "柬埔寨",
      "code": "855",
      "title": "Kampuchea (Cambodia )",
      "letter": "J"
    },
    "68": {
      "name": "科特迪瓦",
      "code": "225",
      "title": "Ivory Coast",
      "letter": "K"
    },
    "69": {
      "name": "开曼群岛",
      "code": "1345",
      "title": "Cayman Is",
      "letter": "K"
    },
    "70": {
      "name": "喀麦隆",
      "code": "237",
      "title": "Cameroon",
      "letter": "K"
    },
    "71": {
      "name": "肯尼亚",
      "code": "254",
      "title": "Kenya",
      "letter": "K"
    },
    "72": {
      "name": "库克群岛",
      "code": "682",
      "title": "Cook Is",
      "letter": "K"
    },
    "73": {
      "name": "科威特",
      "code": "965",
      "title": "Kuwait",
      "letter": "K"
    },
    "74": {
      "name": "老挝",
      "code": "856",
      "title": "Laos",
      "letter": "L"
    },
    "75": {
      "name": "拉脱维亚",
      "code": "371",
      "title": "Latvia",
      "letter": "L"
    },
    "76": {
      "name": "黎巴嫩",
      "code": "961",
      "title": "Lebanon",
      "letter": "L"
    },
    "77": {
      "name": "莱索托",
      "code": "266",
      "title": "Lesotho",
      "letter": "L"
    },
    "78": {
      "name": "利比里亚",
      "code": "231",
      "title": "Liberia",
      "letter": "L"
    },
    "79": {
      "name": "利比亚",
      "code": "218",
      "title": "Libya",
      "letter": "L"
    },
    "80": {
      "name": "列支敦士登",
      "code": "423",
      "title": "Liechtenstein",
      "letter": "L"
    },
    "81": {
      "name": "立陶宛",
      "code": "370",
      "title": "Lithuania",
      "letter": "L"
    },
    "82": {
      "name": "卢森堡",
      "code": "352",
      "title": "Luxembourg",
      "letter": "L"
    },
    "83": {
      "name": "马达加斯加",
      "code": "261",
      "title": "Madagascar",
      "letter": "M"
    },
    "84": {
      "name": "马拉维",
      "code": "265",
      "title": "Malawi",
      "letter": "M"
    },
    "85": {
      "name": "马来西亚",
      "code": "60",
      "title": "Malaysia",
      "letter": "M"
    },
    "86": {
      "name": "缅甸",
      "code": "95",
      "title": "Burma",
      "letter": "M"
    },
    "87": {
      "name": "马尔代夫",
      "code": "960",
      "title": "Maldives",
      "letter": "M"
    },
    "88": {
      "name": "马里",
      "code": "223",
      "title": "Mali",
      "letter": "M"
    },
    "89": {
      "name": "孟加拉国",
      "code": "880",
      "title": "Bangladesh",
      "letter": "M"
    },
    "90": {
      "name": "马耳他",
      "code": "356",
      "title": "Malta",
      "letter": "M"
    },
    "91": {
      "name": "马里亚那群岛",
      "code": "1670",
      "title": "Mariana Is",
      "letter": "M"
    },
    "92": {
      "name": "马提尼克",
      "code": "596",
      "title": "Martinique",
      "letter": "M"
    },
    "93": {
      "name": "毛里求斯",
      "code": "230",
      "title": "Mauritius",
      "letter": "M"
    },
    "94": {
      "name": "墨西哥",
      "code": "52",
      "title": "Mexico",
      "letter": "M"
    },
    "95": {
      "name": "摩尔多瓦",
      "code": "373",
      "title": "Moldova",
      "letter": "M"
    },
    "96": {
      "name": "摩纳哥",
      "code": "377",
      "title": "Monaco",
      "letter": "M"
    },
    "97": {
      "name": "蒙古",
      "code": "976",
      "title": "Mongolia",
      "letter": "M"
    },
    "98": {
      "name": "蒙特塞拉特岛",
      "code": "1664",
      "title": "Montserrat Is",
      "letter": "M"
    },
    "99": {
      "name": "摩洛哥",
      "code": "212",
      "title": "Morocco",
      "letter": "M"
    },
    "100": {
      "name": "莫桑比克",
      "code": "258",
      "title": "Mozambique",
      "letter": "M"
    },
    "101": {
      "name": "澳大利亚",
      "code": "61",
      "title": "Australia",
      "letter": "A"
    },
    "102": {
      "name": "纳米比亚",
      "code": "264",
      "title": "Namibia",
      "letter": "N"
    },
    "103": {
      "name": "瑙鲁",
      "code": "674",
      "title": "Nauru",
      "letter": "N"
    },
    "104": {
      "name": "尼泊尔",
      "code": "977",
      "title": "Nepal",
      "letter": "N"
    },
    "105": {
      "name": "尼加拉瓜",
      "code": "505",
      "title": "Nicaragua",
      "letter": "N"
    },
    "106": {
      "name": "尼日尔",
      "code": "227",
      "title": "Niger",
      "letter": "N"
    },
    "107": {
      "name": "尼日利亚",
      "code": "234",
      "title": "Nigeria",
      "letter": "N"
    },
    "108": {
      "name": "挪威",
      "code": "47",
      "title": "Norway",
      "letter": "N"
    },
    "109": {
      "name": "澳门",
      "code": "853",
      "title": "Macao",
      "letter": "A"
    },
    "110": {
      "name": "秘鲁",
      "code": "51",
      "title": "Peru",
      "letter": "M"
    },
    "111": {
      "name": "菲律宾",
      "code": "63",
      "title": "Philippines",
      "letter": "F"
    },
    "112": {
      "name": "波兰",
      "code": "48",
      "title": "Poland",
      "letter": "B"
    },
    "113": {
      "name": "葡萄牙",
      "code": "351",
      "title": "Portugal",
      "letter": "P"
    },
    "114": {
      "name": "波多黎各",
      "code": "1787",
      "title": "Puerto Rico",
      "letter": "P"
    },
    "115": {
      "name": "卡塔尔",
      "code": "974",
      "title": "Qatar",
      "letter": "K"
    },
    "116": {
      "name": "留尼旺",
      "code": "262",
      "title": "Reunion",
      "letter": "L"
    },
    "117": {
      "name": "罗马尼亚",
      "code": "40",
      "title": "Romania",
      "letter": "L"
    },
    "118": {
      "name": "日本",
      "code": "81",
      "title": "Japan",
      "letter": "R"
    },
    "119": {
      "name": "俄罗斯",
      "code": "7",
      "title": "Russia",
      "letter": "E"
    },
    "120": {
      "name": "圣卢西亚",
      "code": "1758",
      "title": "Saint Lueia",
      "letter": "S"
    },
    "121": {
      "name": "圣文森特岛",
      "code": "1784",
      "title": "Saint Vincent",
      "letter": "S"
    },
    "122": {
      "name": "东萨摩亚(美)",
      "code": "684",
      "title": "Samoa Eastern",
      "letter": "D"
    },
    "123": {
      "name": "西萨摩亚",
      "code": "685",
      "title": "Samoa Western",
      "letter": "X"
    },
    "124": {
      "name": "圣马力诺",
      "code": "378",
      "title": "San Marino",
      "letter": "S"
    },
    "125": {
      "name": "圣多美和普林西比",
      "code": "239",
      "title": "Sao Tome and Principe",
      "letter": "S"
    },
    "126": {
      "name": "萨尔瓦多",
      "code": "503",
      "title": "EI Salvador",
      "letter": "S"
    },
    "127": {
      "name": "沙特阿拉伯",
      "code": "966",
      "title": "Saudi Arabia",
      "letter": "S"
    },
    "128": {
      "name": "塞内加尔",
      "code": "221",
      "title": "Senegal",
      "letter": "S"
    },
    "129": {
      "name": "塞舌尔",
      "code": "248",
      "title": "Seychelles",
      "letter": "S"
    },
    "130": {
      "name": "塞拉利昂",
      "code": "232",
      "title": "Sierra Leone",
      "letter": "S"
    },
    "131": {
      "name": "新加坡",
      "code": "65",
      "title": "Singapore",
      "letter": "X"
    },
    "132": {
      "name": "斯洛伐克",
      "code": "421",
      "title": "Slovakia",
      "letter": "S"
    },
    "133": {
      "name": "斯洛文尼亚",
      "code": "386",
      "title": "Slovenia",
      "letter": "X"
    },
    "134": {
      "name": "所罗门群岛",
      "code": "677",
      "title": "Solomon Is",
      "letter": "S"
    },
    "135": {
      "name": "索马里",
      "code": "252",
      "title": "Somali",
      "letter": "S"
    },
    "136": {
      "name": "南非",
      "code": "27",
      "title": "South Africa",
      "letter": "N"
    },
    "137": {
      "name": "西班牙",
      "code": "34",
      "title": "Spain",
      "letter": "X"
    },
    "138": {
      "name": "塞浦路斯",
      "code": "357",
      "title": "Cyprus",
      "letter": "S"
    },
    "139": {
      "name": "斯里兰卡",
      "code": "94",
      "title": "SriLanka",
      "letter": "X"
    },
    "140": {
      "name": "圣卢西亚",
      "code": "1758",
      "title": "St.Lucia",
      "letter": "S"
    },
    "141": {
      "name": "圣文森特",
      "code": "1784",
      "title": "St.Vincent",
      "letter": "S"
    },
    "142": {
      "name": "苏丹",
      "code": "249",
      "title": "Sudan",
      "letter": "S"
    },
    "143": {
      "name": "苏里南",
      "code": "597",
      "title": "Suriname",
      "letter": "S"
    },
    "144": {
      "name": "斯威士兰",
      "code": "268",
      "title": "Swaziland",
      "letter": "X"
    },
    "145": {
      "name": "瑞典",
      "code": "46",
      "title": "Sweden",
      "letter": "R"
    },
    "146": {
      "name": "瑞士",
      "code": "41",
      "title": "Switzerland",
      "letter": "R"
    },
    "147": {
      "name": "叙利亚",
      "code": "963",
      "title": "Syria",
      "letter": "X"
    },
    "148": {
      "name": "台湾省",
      "code": "886",
      "title": "Taiwan",
      "letter": "T"
    },
    "149": {
      "name": "塔吉克斯坦",
      "code": "992",
      "title": "Tajikstan",
      "letter": "T"
    },
    "150": {
      "name": "坦桑尼亚",
      "code": "255",
      "title": "Tanzania",
      "letter": "T"
    },
    "151": {
      "name": "泰国",
      "code": "66",
      "title": "Thailand",
      "letter": "T"
    },
    "152": {
      "name": "多哥",
      "code": "228",
      "title": "Togo",
      "letter": "D"
    },
    "153": {
      "name": "汤加",
      "code": "676",
      "title": "Tonga",
      "letter": "T"
    },
    "154": {
      "name": "特立尼达和多巴哥",
      "code": "1809",
      "title": "Trinidad and Tobago",
      "letter": "T"
    },
    "155": {
      "name": "突尼斯",
      "code": "216",
      "title": "Tunisia",
      "letter": "T"
    },
    "156": {
      "name": "土耳其",
      "code": "90",
      "title": "Turkey",
      "letter": "T"
    },
    "157": {
      "name": "土库曼斯坦",
      "code": "993",
      "title": "Turkmenistan",
      "letter": "T"
    },
    "158": {
      "name": "乌干达",
      "code": "256",
      "title": "Uganda",
      "letter": "W"
    },
    "159": {
      "name": "乌克兰",
      "code": "380",
      "title": "Ukraine",
      "letter": "W"
    },
    "160": {
      "name": "阿拉伯联合酋长国",
      "code": "971",
      "title": "United Arab Emirates",
      "letter": "A"
    },
    "161": {
      "name": "英国",
      "code": "44",
      "title": "United Kiongdom",
      "letter": "Y"
    },
    "162": {
      "name": "美国",
      "code": "1",
      "title": "United States of America",
      "letter": "M"
    },
    "163": {
      "name": "乌拉圭",
      "code": "598",
      "title": "Uruguay",
      "letter": "W"
    },
    "164": {
      "name": "乌兹别克斯坦",
      "code": "233",
      "title": "Uzbekistan",
      "letter": "W"
    },
    "165": {
      "name": "委内瑞拉",
      "code": "58",
      "title": "Venezuela",
      "letter": "W"
    },
    "166": {
      "name": "越南",
      "code": "84",
      "title": "Vietnam",
      "letter": "Y"
    },
    "167": {
      "name": "危地马拉",
      "code": "502",
      "title": "Guatemala",
      "letter": "W"
    },
    "168": {
      "name": "文莱",
      "code": "673",
      "title": "Brunei",
      "letter": "W"
    },
    "169": {
      "name": "希腊",
      "code": "30",
      "title": "Greece",
      "letter": "X"
    },
    "170": {
      "name": "匈牙利",
      "code": "36",
      "title": "Hungary",
      "letter": "X"
    },
    "171": {
      "name": "新西兰",
      "code": "64",
      "title": "New Zealand",
      "letter": "X"
    },
    "172": {
      "name": "香港",
      "code": "852",
      "title": "Hongkong",
      "letter": "X"
    },
    "173": {
      "name": "也门",
      "code": "967",
      "title": "Yemen",
      "letter": "Y"
    },
    "174": {
      "name": "南斯拉夫",
      "code": "381",
      "title": "Yugoslavia",
      "letter": "N"
    },
    "175": {
      "name": "亚美尼亚",
      "code": "374",
      "title": "Armenia",
      "letter": "Y"
    },
    "176": {
      "name": "印度",
      "code": "91",
      "title": "India",
      "letter": "Y"
    },
    "177": {
      "name": "印度尼西亚",
      "code": "62",
      "title": "Indonesia",
      "letter": "Y"
    },
    "178": {
      "name": "伊朗",
      "code": "98",
      "title": "Iran",
      "letter": "Y"
    },
    "179": {
      "name": "牙买加",
      "code": "1876",
      "title": "Jamaica",
      "letter": "Y"
    },
    "180": {
      "name": "伊拉克",
      "code": "964",
      "title": "Iraq",
      "letter": "Y"
    },
    "181": {
      "name": "以色列",
      "code": "972",
      "title": "Israel",
      "letter": "Y"
    },
    "182": {
      "name": "意大利",
      "code": "39",
      "title": "Italy",
      "letter": "Y"
    },
    "183": {
      "name": "约旦",
      "code": "962",
      "title": "Jordan",
      "letter": "Y"
    },
    "184": {
      "name": "津巴布韦",
      "code": "263",
      "title": "Zimbabwe",
      "letter": "J"
    },
    "185": {
      "name": "扎伊尔",
      "code": "243",
      "title": "Zaire",
      "letter": "Z"
    },
    "186": {
      "name": "乍得",
      "code": "235",
      "title": "Chad",
      "letter": "Z"
    },
    "187": {
      "name": "智利",
      "code": "56",
      "title": "Chile",
      "letter": "Z"
    },
    "188": {
      "name": "中国",
      "code": "86",
      "title": "China",
      "letter": "Z"
    },
    "189": {
      "name": "中非共和国",
      "code": "236",
      "title": "Central African Republic",
      "letter": "Z"
    },
    "190": {
      "name": "直布罗陀",
      "code": "350",
      "title": "Gibraltar",
      "letter": "Z"
    },
    "191": {
      "name": "赞比亚",
      "code": "260",
      "title": "Zambia",
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
      var h = $(".item").eq(index).offset().top;
      if (oA.attr("class") !== "current") {
        var h = h - $("header").height() +'px';
        $('html,body').animate({scrollTop: h}, 300);
      }
    });
  }
}




</script>
<style scoped>
  @import "../../css/common/common.css";
  @import "../../css/other/login.css";
</style>



