import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default {
  judge(){
    var browser = {
      versions: function() {
        var u = navigator.userAgent,
          app = navigator.appVersion;
        return { //移动终端浏览器版本信息
          trident: u.indexOf('Trident') > -1, //IE内核
          presto: u.indexOf('Presto') > -1, //opera内核
          webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
          gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
          mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
          ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
          android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器
          iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
          iPad: u.indexOf('iPad') > -1, //是否iPad
          webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部
        };
      }(),
      language: (navigator.browserLanguage || navigator.language).toLowerCase()
    }
    //判断：
    var and=browser.versions.android;//android
    var ios=browser.versions.ios;//ios
    if(and){//0代表安卓
      return 0;
    }else if(ios){//1代表ios
      return 1;
    }else {//3代表其他
      return 3;
    }

  },
  fetch: function(STORAGE_KEY) {
    let  s=window.localStorage.getItem(STORAGE_KEY);
    if(s==null){
      return s;
    }
    return window.JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')

  },

  getAddress: function() {//获取域名，浏览器测试的时候，跨域访问，真机的时候直接配置地址
    return "https://api.xingjiyouxuan.com";
    //     //return "/api";
  },
  isDev(){
    return false;
  },
  getNextAddress: function() {//获取域名，浏览器测试的时候，跨域访问，真机的时候直接配置地址
    return "https://api.xingjiyouxuan.com/dist/#/";
  },

  save: function(STORAGE_KEY,items) {

    window.localStorage.setItem(STORAGE_KEY, window.JSON.stringify(items))

  },
  checkAreaData(){
      var self=this;
      if(self.fetch("prov_ids")==null){
        console.log("获取省份")
        axios.post(self.getAddress()+"/api/wxapp/district/listProvinceForH5")
          .then(function (responese) {
            if(responese.data.code==200){
              self.save("prov_ids",responese.data.list)
            }else {
              console.log("服务器正忙")
            }
          }).catch(function (err) {
            console.log(err)
        })
      }
      if(self.fetch("city_ids")==null){
        axios.post(self.getAddress()+"/api/wxapp/district/listCityForH5")
          .then(function (responese) {
            if(responese.data.code==200){
              self.save("city_ids",window.JSON.parse(responese.data.list))
            }else {
              console.log("服务器正忙")
            }
          }).catch(function (err) {
            console.log(err)
        })
      }
      if(self.fetch("area_ids")==null){
        axios.post(self.getAddress()+"/api/wxapp/district/listDistForH5")
          .then(function (responese) {
            if(responese.data.code==200){
              self.save("area_ids",window.JSON.parse(responese.data.list))
            }else {
              console.log("服务器正忙")
            }
          }).catch(function (err) {
            console.log(err)
        })
      }
  },



}
