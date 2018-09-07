import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
export default {

  fetch: function(STORAGE_KEY) {
    let  s=window.localStorage.getItem(STORAGE_KEY);
    if(s==null){
      return s;
    }
    return window.JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')

  },

  save: function(STORAGE_KEY,items) {

    window.localStorage.setItem(STORAGE_KEY, window.JSON.stringify(items))

  },
  checkAreaData(){
      var self=this;
      if(self.fetch("prov_ids")==null){
        console.log("获取省份")
        axios.post("/api/api/wxapp/district/listProvinceForH5")
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
        axios.post("/api/api/wxapp/district/listCityForH5")
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
        axios.post("/api/api/wxapp/district/listDistForH5")
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
  }



}
