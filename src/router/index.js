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
import searchList from '../page/index/searchList'
import selecTregion from '../page/index/selecTregion'

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
import myOrder from '../page/personalCenter/myOrder'
import lookLogistics from '../page/personalCenter/lookLogistics'
import orderDetailsTransaction from '../page/personalCenter/orderDetailsTransaction'
import orderDetails from '../page/personalCenter/orderDetails'
import orderDetailsCollect from '../page/personalCenter/orderDetailsCollect'
import orderDetailsGoods from '../page/personalCenter/orderDetailsGoods'
import orderDetailsPayment from '../page/personalCenter/orderDetailsPayment'
import orderDetailsRefund from '../page/personalCenter/orderDetailsRefund'
import modifyAutograph from '../page/personalCenter/modifyAutograph'
import modifyWechat from '../page/personalCenter/modifyWechat'

import newlyAddress from '../page/shoppingBag/newlyAddress'
import editAddress from '../page/shoppingBag/editAddress'
import placeOrder from '../page/shoppingBag/placeOrder'


import TestPost from '../page/demo/TestPost'
import address from '../page/demo/address'
import TestAddress from '../page/demo/TestAddress'
import TestAlert from '../page/demo/TestAlert'
import img from '../page/demo/img'
import img2 from '../page/demo/img2'
import regShop from '../page/demo/regShop'
import regShopImg from '../page/demo/regShopImg'
import imageUploader from '../page/demo/ImageUploader'
import swiper from '../page/demo/swiper'
import carrousel from '../page/demo/carrousel'
import demoSwiper from '../page/demo/demoSwiper'
import AweSwiper from '../page/demo/AweSwiper'
import Testqiniu from '../page/demo/Testqiniu'


import conventionalGood from '../page/shoppingBag/conventionalGood'
import commodityPage from '../page/shoppingBag/commodityPage'
import highlncome from '../page/shopkeeper/highlncome'
import marketing from '../page/shopkeeper/marketing'
import putForward from '../page/shopkeeper/putForward'
import recruitment from '../page/shopkeeper/recruitment'
import rewardDetails from '../page/shopkeeper/rewardDetails'
import shopkeeperPage from '../page/shopkeeper/shopkeeperPage'
import rewardTask from '../page/shopkeeper/rewardTask'
import business from '../page/shopkeeper/business'
import businessSchool from '../page/shopkeeper/businessSchool'
import shopkeeperContactUs from '../page/shopkeeper/contactUs'
import managementInfo from '../page/shopkeeper/managementInfo'
import myClient from '../page/shopkeeper/myClient'
import myNotice from '../page/shopkeeper/myNotice'
import newBrochure from '../page/shopkeeper/newBrochure'
import newBrochureDetail from '../page/shopkeeper/newBrochureDetail'
import outorder from '../page/shopkeeper/outorder'
import putForwardRecord from '../page/shopkeeper/putForwardRecord'
import shopKeepSelection from '../page/shopkeeper/shopKeepSelection'
import newBrochureInfo from '../page/shopkeeper/newBrochureInfo'
import putForwardAdminist from '../page/shopkeeper/putForwardAdminist'
import salesOrder from '../page/shopkeeper/salesOrder'
import shopkeSelection from '../page/shopkeeper/shopkeSelection'
import dataCenter from '../page/shopkeeper/dataCenter'

import receivingAddress from '../page/shoppingBag/receivingAddress'
import tradeFail from '../page/shoppingBag/tradeFail'
import tradeSuccessful from '../page/shoppingBag/tradeSuccessful'

import testSwiper from '../page/复杂/test'
Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  routes: [
    {
      path:'/editAddress',
      meta:{
        keepAlive:true
      },
      name:'editAddress',
      component:editAddress
    },{
      path:'/placeOrder',
      name:'placeOrder',
      component:placeOrder
    },{
      path:'/modifyWechat',
      name:'modifyWechat',
      component:modifyWechat
    },{
      path:'/modifyAutograph',
      name:'modifyAutograph',
      component:modifyAutograph
    },{
      path:'/Testqiniu',
      name:'Testqiniu',
      component:Testqiniu
    },{
      path:'/AweSwiper',
      name:'AweSwiper',
      component:AweSwiper
    },{
      path:'/demoSwiper',
      name:'demoSwiper',
      component:demoSwiper
    },{
      path:'/orderDetailsRefund',
      name:'orderDetailsRefund',
      component:orderDetailsRefund
    },{
      path:'/orderDetailsPayment',
      name:'orderDetailsPayment',
      component:orderDetailsPayment
    },{
      path:'/orderDetailsGoods',
      name:'orderDetailsGoods',
      component:orderDetailsGoods
    },{
      path:'/orderDetailsCollect',
      name:'orderDetailsCollect',
      component:orderDetailsCollect
    },{
      path:'/orderDetails',
      name:'orderDetails',
      component:orderDetails
    },{
      path:'/orderDetailsTransaction',
      name:'orderDetailsTransaction',
      component:orderDetailsTransaction
    },{
      path:'/lookLogistics',
      name:'lookLogistics',
      component:lookLogistics
    },{
      path:'/carrousel',
      name:'carrousel',
      component:carrousel
    },{
      path:'/testSwiper',
      name:'testSwiper',
      component:testSwiper
    },{
      path:'/myOrder',
      name:'myOrder',
      component:myOrder
    },{
      path:'/swiper',
      name:'swiper',
      component:swiper
    },{
      path:'/tradeFail',
      name:'tradeFail',
      component:tradeFail
    },{
      path:'/tradeSuccessful',
      name:'tradeSuccessful',
      component:tradeSuccessful
    },{
      path:'/selecTregion',
      name:'selecTregion',
      component:selecTregion
    },{
      path:'/dataCenter',
      name:'dataCenter',
      component:dataCenter
    },{
      path:'/searchList',
      name:'searchList',
      component:searchList
    },{
      path:'/imageUploader',
      name:'imageUploader',
      component:imageUploader
    }, {
      path:'/newBrochureInfo',
      name:'newBrochureInfo',
      component:newBrochureInfo
    },{
      path:'/putForwardAdminist',
      name:'putForwardAdminist',
      component:putForwardAdminist
    },{
      path:'/salesOrder',
      name:'salesOrder',
      component:salesOrder
    },{
      path:'/shopkeSelection',
      name:'shopkeSelection',
      component:shopkeSelection
    },{
      path:'/putForwardRecord',
      name:'putForwardRecord',
      component:putForwardRecord
    },{
      path:'/regShopImg',
      name:'regShopImg',
      component:regShopImg
    },{
      path:'/regShop',
      name:'regShop',
      component:regShop
    },{
      path:'/newlyAddress',
      name:'newlyAddress',
      component:newlyAddress
    },{
      path:'/img2',
      name:'img2',
      component:img2
    },{
      path:'/receivingAddress',
      name:'receivingAddress',
      component:receivingAddress
    },{
      path:'/business',
      name:'business',
      component:business
    },{
      path:'/businessSchool',
      name:'businessSchool',
      component:businessSchool
    },{
      path:'/shopkeeperContactUs',
      name:'shopkeeperContactUs',
      component:shopkeeperContactUs
    },{
      path:'/managementInfo',
      name:'managementInfo',
      component:managementInfo
    },{
      path:'/myNotice',
      name:'myNotice',
      component:myNotice
    },{
      path:'/myClient',
      name:'myClient',
      component:myClient
    },{
      path:'/newBrochure',
      name:'newBrochure',
      component:newBrochure
    },{
      path:'/newBrochureDetail',
      name:'newBrochureDetail',
      component:newBrochureDetail
    },{
      path:'/outorder',
      name:'outorder',
      component:outorder
    },{
      path:'/shopKeepSelection',
      name:'shopKeepSelection',
      component:shopKeepSelection
    },{
      path:'/rewardTask',
      name:'rewardTask',
      component:rewardTask
    },{
      path:'/img',
      name:'img',
      component:img
    },{
      path:'/shopkeeperPage',
      name:'shopkeeperPage',
      component:shopkeeperPage
    },{
      path:'/rewardDetails',
      name:'rewardDetails',
      component:rewardDetails
    },{
      path:'/recruitment',
      name:'recruitment',
      component:recruitment
    },{
      path:'/putForward',
      name:'putForward',
      component:putForward
    },{
      path:'/marketing',
      name:'marketing',
      component:marketing
    },{
      path:'/highlncome',
      name:'highlncome',
      component:highlncome
    },{
      path:'/commodityPage',
      name:'commodityPage',
      component:commodityPage
    },{
      path:'/TestPost',
      name:'TestPost',
      component:TestPost
    },{
      path:'/TestAlert',
      name:'TestAlert',
      component:TestAlert
    },{
      path:'/conventionalGood',
      name:'conventionalGood',
      component:conventionalGood
    },{
      path:'/TestAddress',
      name:'TestAddress',
      component:TestAddress
    },{
      path:'/address',
      name:'address',
      component:address
    },{
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
      meta:{keepAlive:true},
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
