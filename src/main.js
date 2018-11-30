// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable */

import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import layer from 'vue-layer-mobile'
import VueScroller from 'vue-scroller'

import Validator from 'vue-validator'

Vue.use(Vuex)
Vue.use(VueScroller)
Vue.use(layer)
Vue.use(VueAwesomeSwiper)
Vue.use(Validator)
/* eslint-disable */
import $ from 'jquery'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
