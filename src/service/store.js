import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default {

  fetch: function(STORAGE_KEY) {

    return window.JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')

  },

  save: function(STORAGE_KEY,items) {

    window.localStorage.setItem(STORAGE_KEY, window.JSON.stringify(items))

  }

}
