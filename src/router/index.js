import Vue from 'vue'
import Router from 'vue-router'
import login from '../page/login/login'
import mobileLogin from '../page/login/mobileLogin'
import search from '../page/index/search'
import selectCountryArea from '../page/login/selectCountryArea'
import tenCommendation from '../page/index/tenCommendation'
import newGrowGrass from '../page/index/newGrowGrass'
import index from '../page/index/index'
import VueResource from 'vue-resource'
import catcherRecommend from '../page/find/catcherRecommend'
import classification from '../page/index/classification'
import classificationTwoPage from '../page/index/classificationTwoPage'
import popularBrand from '../page/index/popularBrand'
import dynamicDetails from '../page/find/dynamicDetails'
import demo from '../page/demo/demo'
import findPage from '../page/find/findPage'
import hotTopic from '../page/find/hotTopic'
import personalHomePage from '../page/find/personalHomePage'
import releaseDynamics from '../page/find/releaseDynamics'
import upload from '../page/demo/upload'
import topic from '../page/find/topic'
import onlineCustomers from '../page/find/onlineCustomers'
import Xcurrency from '../page/personalCenter/Xcurrency'
import shopIndex from '../page/shoppingBag/shoppIndex'
import modifyAddress from '../page/shoppingBag/modifyAddress'
import accountInfo from '../page/personalCenter/accountInfo'
import aboutUS from '../page/personalCenter/aboutUS'
import coupon from '../page/personalCenter/coupon'
import detailedPage from '../page/personalCenter/detailedPage'
import exchangeX from '../page/personalCenter/exchangeX'
import memberCenter from '../page/personalCenter/memberCenter'
import modifyName from '../page/personalCenter/modifyName'
import modifyPhone from '../page/personalCenter/modifyPhone'
import myCollection from '../page/personalCenter/myCollection'
import personalPage from '../page/personalCenter/personalPage'
import refundProgress from '../page/personalCenter/refundProgress'
import remindSetUp from '../page/personalCenter/remindSetUp'
import selectCountryAreaPersonal from '../page/personalCenter/selectCountryArea'
import setUp from '../page/personalCenter/setUp'
import updateMobileLogin from '../page/personalCenter/updateMobileLogin'
Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  routes: [
    {
      path:'/detailedPage',
      name:'detailedPage',
      component:detailedPage
    },{
      path:'/updateMobileLogin',
      name:'updateMobileLogin',
      component:updateMobileLogin
    },{
      path:'/setUp',
      name:'setUp',
      component:setUp
    },{
      path:'/personal/selectCountryArea',
      name:'selectCountryAreaPersonal',
      component:selectCountryAreaPersonal
    },{
      path:'/remindSetUp',
      name:'remindSetUp',
      component:remindSetUp
    },{
      path:'/refundProgress',
      name:'refundProgress',
      component:refundProgress
    },{
      path:'/personalPage',
      name:'personalPage',
      component:personalPage
    },{
      path:'/myCollection',
      name:'myCollection',
      component:myCollection
    }, {
      path:'/modifyPhone',
      name:'modifyPhone',
      component:modifyPhone
    },{
      path:'/modifyName',
      name:'modifyName',
      component:modifyName
    },{
      path:'/memberCenter',
      name:'memberCenter',
      component:memberCenter
    },{
      path:'/exchangeX',
      name:'exchangeX',
      component:exchangeX
    },
    {
      path:'/aboutUS',
      name:'aboutUS',
      component:aboutUS
    },{
      path:'/coupon',
      name:'coupon',
      component:coupon
    },
    {
      path:'/accountInfo',
      name:'accountInfo',
      component:accountInfo
    },
    {
      path: '/onlineCustomers',
      name: 'onlineCustomers',
      component: onlineCustomers
    },{
      path: '/modifyAddress',
      name: 'modifyAddress',
      component: modifyAddress
    },{
      path: '/shopIndex',
      name: 'shopIndex',
      component: shopIndex
    },{
      path: '/Xcurrency',
      name: 'Xcurrency',
      component: Xcurrency
    },{
      path: '/demo',
      name: 'demo',
      component: demo
    },{
      path: '/topic',
      name: 'topic',
      component: topic
    },{
      path: '/upload',
      name: 'upload',
      component: upload
    },{
      path: '/releaseDynamics',
      name: 'releaseDynamics',
      component: releaseDynamics
    },{
      path: '/personalHomePage',
      name: 'personalHomePage',
      component: personalHomePage
    },{
      path: '/findPage',
      name: 'findPage',
      component: findPage
    },
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/mobileLogin',
      name: 'mobileLogin',
      component: mobileLogin
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/selectCountryArea',
      name: 'selectCountryArea',
      component: selectCountryArea
    },
    {
      path: '/tenCommendation',
      name: 'tenCommendation',
      component: tenCommendation
    },
    {
      path: '/newGrowGrass',
      name: 'newGrowGrass',
      component: newGrowGrass
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/catcherRecommend',
      name: 'catcherRecommend',
      component: catcherRecommend
    },
    {
      path: '/classification',
      name: 'classification',
      component: classification
    },
    {
      path: '/classificationTwoPage',
      name: 'classificationTwoPage',
      component: classificationTwoPage
    },{
      path: '/popularBrand',
      name: 'popularBrand',
      component: popularBrand
    },{
      path: '/dynamicDetails',
      name: 'dynamicDetails',
      component: dynamicDetails
    },
    {
      path: '/hotTopic',
      name: 'hotTopic',
      component: hotTopic
    }


  ]
})
