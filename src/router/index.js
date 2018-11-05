import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
/*import mobileLogin from '../page/login/mobileLogin'
import search from '../page/index/search'
import tenCommendation from '../page/index/tenCommendation'
import newGrowGrass from '../page/index/newGrowGrass'
import index from '../page/index/index'

import catcherRecommend from '../page/find/catcherRecommend'
import classification from '../page/index/classification'
import classificationTwoPage from '../page/index/classificationTwoPage'
import popularBrand from '../page/index/popularBrand'
import searchList from '../page/index/searchList'
import selecTregion from '../page/index/selecTregion'
import xingjiProduce from '../page/index/xingjiProduce'

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
import helpService from '../page/personalCenter/helpService'
import opinionFeedback from '../page/personalCenter/opinionFeedback'
import questionAnswer from '../page/personalCenter/questionAnswer'

import newlyAddress from '../page/shoppingBag/newlyAddress'
import editAddress from '../page/shoppingBag/editAddress'
import placeOrder from '../page/shoppingBag/placeOrder'


/!*import TestPost from '../page/demo/TestPost'
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
import Testqiniu from '../page/demo/Testqiniu'*!/


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
import manageSystem from '../page/shopkeeper/manageSystem'
import codeShare from '../page/shopkeeper/codeShare'

import receivingAddress from '../page/shoppingBag/receivingAddress'
import tradeFail from '../page/shoppingBag/tradeFail'
import tradeSuccessful from '../page/shoppingBag/tradeSuccessful'*/

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
      component(resolve){
        require(['../page/shoppingBag/editAddress.vue'],resolve)
      }

    },{
      path:'/transacitonLogistics',
      name:'transacitonLogistics',
      component(resolve){
        require(['../page/shopkeeper/transacitonLogistics.vue'],resolve)
      }

    },{
      path:'/manageSystem',
      name:'manageSystem',
      component(resolve){
        require(['../page/shopkeeper/manageSystem.vue'],resolve)
      }

    },{
      path:'/questionAnswer',
      name:'questionAnswer',
      component(resolve){
        require(['../page/personalCenter/questionAnswer.vue'],resolve)
      }

    },{
      path:'/codeShare',
      name:'codeShare',
      component(resolve){
        require(['../page/shopkeeper/codeShare.vue'],resolve)
      }

    },{
      path:'/opinionFeedback',
      name:'opinionFeedback',
      component(resolve){
        require(['../page/personalCenter/opinionFeedback.vue'],resolve)
      }
    },{
      path:'/xingjiProduce',
      name:'xingjiProduce',
      component(resolve){
        require(['../page/index/xingjiProduce.vue'],resolve)
      }

    },{
      path:'/placeOrder',
      name:'placeOrder',
      component(resolve){
        require(['../page/shoppingBag/placeOrder.vue'],resolve)
      }
    },{
      path:'/helpService',
      name:'helpService',
      component(resolve){
        require(['../page/personalCenter/helpService.vue'],resolve)
      }
    },{
      path:'/modifyWechat',
      name:'modifyWechat',
      component(resolve){
        require(['../page/personalCenter/modifyWechat.vue'],resolve)
      }
    },{
      path:'/modifyAutograph',
      name:'modifyAutograph',
      component(resolve){
        require(['../page/personalCenter/modifyAutograph.vue'],resolve)
      }
    },{
      path:'/Testqiniu',
      name:'Testqiniu',
      component(resolve){
        require(['../page/demo/Testqiniu.vue'],resolve)
      }
    },{
      path:'/AweSwiper',
      name:'AweSwiper',
      component(resolve){
        require(['../page/demo/AweSwiper.vue'],resolve)
      }

    },{
      path:'/demoSwiper',
      name:'demoSwiper',
      component(resolve){
        require(['../page/demo/demoSwiper.vue'],resolve)
      }
    },{
      path:'/orderDetailsRefund',
      name:'orderDetailsRefund',
      component(resolve){
        require(['../page/personalCenter/orderDetailsRefund.vue'],resolve)
      }
    },{
      path:'/orderDetailsPayment',
      name:'orderDetailsPayment',
      component(resolve){
        require(['../page/personalCenter/orderDetailsPayment.vue'],resolve)
      }
    },{
      path:'/orderDetailsGoods',
      name:'orderDetailsGoods',
      component(resolve){
        require(['../page/personalCenter/orderDetailsGoods.vue'],resolve)
      }
    },{
      path:'/orderDetailsCollect',
      name:'orderDetailsCollect',
      component(resolve){
        require(['../page/personalCenter/orderDetailsCollect.vue'],resolve)
      }
    },{
      path:'/orderDetails',
      name:'orderDetails',
      component(resolve){
        require(['../page/personalCenter/orderDetails.vue'],resolve)
      }
    },{
      path:'/orderDetailsTransaction',
      name:'orderDetailsTransaction',
      component(resolve){
        require(['../page/personalCenter/orderDetailsTransaction.vue'],resolve)
      }
    },{
      path:'/lookLogistics',
      name:'lookLogistics',
      component(resolve){
        require(['../page/personalCenter/lookLogistics.vue'],resolve)
      }
    },{
      path:'/carrousel',
      name:'carrousel',
      component(resolve){
        require(['../page/demo/carrousel.vue'],resolve)
      }
    },{
      path:'/myOrder',
      name:'myOrder',
      component(resolve){
        require(['../page/personalCenter/myOrder.vue'],resolve)
      }
    },{
      path:'/swiper',
      name:'swiper',
      component(resolve){
        require(['../page/demo/swiper.vue'],resolve)
      }
    },{
      path:'/tradeFail',
      name:'tradeFail',
      component(resolve){
        require(['../page/shoppingBag/tradeFail.vue'],resolve)
      }

    },{
      path:'/tradeSuccessful',
      name:'tradeSuccessful',
      component(resolve){
        require(['../page/shoppingBag/tradeSuccessful.vue'],resolve)
      }
    },{
      path:'/selecTregion',
      name:'selecTregion',
      component(resolve){
        require(['../page/index/selecTregion.vue'],resolve)
      }
    },{
      path:'/dataCenter',
      name:'dataCenter',
      component(resolve){
        require(['../page/shopkeeper/dataCenter.vue'],resolve)
      }
    },{
      path:'/searchList',
      name:'searchList',
      component(resolve){
        require(['../page/index/searchList.vue'],resolve)
      }
    },/*{
      path:'/imageUploader',
      name:'imageUploader',
      component(resolve){
        require(['../page/demo/imageUploader.vue'],resolve)
      }
    },*/ {
      path:'/newBrochureInfo',
      name:'newBrochureInfo',
      component(resolve){
        require(['../page/shopkeeper/newBrochureInfo.vue'],resolve)
      }
    },{
      path:'/putForwardAdminist',
      name:'putForwardAdminist',
      component(resolve){
        require(['../page/shopkeeper/putForwardAdminist.vue'],resolve)
      }
    },{
      path:'/salesOrder',
      name:'salesOrder',
      component(resolve){
        require(['../page/shopkeeper/salesOrder.vue'],resolve)
      }
    },{
      path:'/shopkeSelection',
      name:'shopkeSelection',
      component(resolve){
        require(['../page/shopkeeper/shopkeSelection.vue'],resolve)
      }
    },{
      path:'/putForwardRecord',
      name:'putForwardRecord',
      component(resolve){
        require(['../page/shopkeeper/putForwardRecord.vue'],resolve)
      }
    },/*{
      path:'/regShopImg',
      name:'regShopImg',
      component(resolve){
        require(['../page/shopkeeper/regShopImg.vue'],resolve)
      }
    },*//*{
      path:'/regShop',
      name:'regShop',
      component:regShop
    },*/{
      path:'/newlyAddress',
      name:'newlyAddress',
      component(resolve){
        require(['../page/shoppingBag/newlyAddress.vue'],resolve)
      }
    },/*{
      path:'/img2',
      name:'img2',
      component:img2
    },*/{
      path:'/receivingAddress',
      name:'receivingAddress',
      component(resolve){
        require(['../page/shoppingBag/receivingAddress.vue'],resolve)
      }
    },{
      path:'/business',
      name:'business',
      component(resolve){
        require(['../page/shopkeeper/business.vue'],resolve)
      }

    },{
      path:'/businessSchool',
      name:'businessSchool',
      component(resolve){
        require(['../page/shopkeeper/businessSchool.vue'],resolve)
      }

    },{
      path:'/shopkeeperContactUs',
      name:'shopkeeperContactUs',
      component(resolve){
        require(['../page/shopkeeper/contactUs.vue'],resolve)
      }
    },{
      path:'/managementInfo',
      name:'managementInfo',
      component(resolve){
        require(['../page/shopkeeper/managementInfo.vue'],resolve)
      }
    },{
      path:'/myNotice',
      name:'myNotice',
      component(resolve){
        require(['../page/shopkeeper/myNotice.vue'],resolve)
      }
    },{
      path:'/myClient',
      name:'myClient',
      component(resolve){
        require(['../page/shopkeeper/myClient.vue'],resolve)
      }
    },{
      path:'/newBrochure',
      name:'newBrochure',
      component(resolve){
        require(['../page/shopkeeper/newBrochure.vue'],resolve)
      }
    },{
      path:'/newBrochureDetail',
      name:'newBrochureDetail',
      component(resolve){
        require(['../page/shopkeeper/newBrochureDetail.vue'],resolve)
      }
    },{
      path:'/outorder',
      name:'outorder',
      component(resolve){
        require(['../page/shopkeeper/outorder.vue'],resolve)
      }
    },{
      path:'/shopKeepSelection',
      name:'shopKeepSelection',
      component(resolve){
        require(['../page/shopkeeper/shopKeepSelection.vue'],resolve)
      }
    },{
      path:'/rewardTask',
      name:'rewardTask',
      component(resolve){
        require(['../page/shopkeeper/rewardTask.vue'],resolve)
      }
    },/*{
      path:'/img',
      name:'img',
      component:img
    },*/{
      path:'/shopkeeperPage',
      name:'shopkeeperPage',
      component(resolve){
        require(['../page/shopkeeper/shopkeeperPage.vue'],resolve)
      }
    },{
      path:'/rewardDetails',
      name:'rewardDetails',
      component(resolve){
        require(['../page/shopkeeper/rewardDetails.vue'],resolve)
      }
    },{
      path:'/recruitment',
      name:'recruitment',
      component(resolve){
        require(['../page/shopkeeper/recruitment.vue'],resolve)
      }
    },{
      path:'/putForward',
      name:'putForward',
      component(resolve){
        require(['../page/shopkeeper/putForward.vue'],resolve)
      }
    },{
      path:'/marketing',
      name:'marketing',
      component(resolve){
        require(['../page/shopkeeper/marketing.vue'],resolve)
      }
    },{
      path:'/highlncome',
      name:'highlncome',
      component(resolve){
        require(['../page/shopkeeper/highlncome.vue'],resolve)
      }
    },{
      path:'/commodityPage',
      name:'commodityPage',
      component(resolve){
        require(['../page/shoppingBag/commodityPage.vue'],resolve)
      }
    },/*{
      path:'/TestPost',
      name:'TestPost',
      component:TestPost
    },{
      path:'/TestAlert',
      name:'TestAlert',
      component:TestAlert
    },
    {
      path:'/TestAddress',
      name:'TestAddress',
      component:TestAddress
    },*/{
      path:'/conventionalGood',
      name:'conventionalGood',
      component(resolve){
        require(['../page/shoppingBag/conventionalGood.vue'],resolve)
      }
    },/*{
      path:'/address',
      name:'address',
      component(resolve){
        require(['../page/shoppingBag/address.vue'],resolve)
      }
    },*/{
      path:'/detailedPage',
      name:'detailedPage',
      component(resolve){
        require(['../page/personalCenter/detailedPage.vue'],resolve)
      }
    },{
      path:'/updateMobileLogin',
      name:'updateMobileLogin',
      component(resolve){
        require(['../page/personalCenter/updateMobileLogin.vue'],resolve)
      }
    },{
      path:'/setUp',
      name:'setUp',
      component(resolve){
        require(['../page/personalCenter/setUp.vue'],resolve)
      }
    },{
      path:'/personal/selectCountryArea',
      name:'selectCountryAreaPersonal',
      component(resolve){
        require(['../page/personalCenter/selectCountryArea.vue'],resolve)
      }
    },{
      path:'/remindSetUp',
      name:'remindSetUp',
      component(resolve){
        require(['../page/personalCenter/remindSetUp.vue'],resolve)
      }
    },{
      path:'/refundProgress',
      name:'refundProgress',
      component(resolve){
        require(['../page/personalCenter/refundProgress.vue'],resolve)
      }
    },{
      path:'/personalPage',
      name:'personalPage',
      component(resolve){
        require(['../page/personalCenter/personalPage.vue'],resolve)
      }
    },{
      path:'/myCollection',
      name:'myCollection',
      component(resolve){
        require(['../page/personalCenter/myCollection.vue'],resolve)
      }
    }, {
      path:'/modifyPhone',
      name:'modifyPhone',
      component(resolve){
        require(['../page/personalCenter/modifyPhone.vue'],resolve)
      }
    },{
      path:'/modifyName',
      name:'modifyName',
      component(resolve){
        require(['../page/personalCenter/modifyName.vue'],resolve)
      }
    },{
      path:'/memberCenter',
      name:'memberCenter',
      component(resolve){
        require(['../page/personalCenter/memberCenter.vue'],resolve)
      }
    },{
      path:'/exchangeX',
      name:'exchangeX',
      component(resolve){
        require(['../page/personalCenter/exchangeX.vue'],resolve)
      }
    },
    {
      path:'/aboutUS',
      name:'aboutUS',
      component(resolve){
        require(['../page/personalCenter/aboutUS.vue'],resolve)
      }
    },{
      path:'/coupon',
      name:'coupon',
      component(resolve){
        require(['../page/personalCenter/coupon.vue'],resolve)
      }
    },
    {
      path:'/accountInfo',
      name:'accountInfo',
      component(resolve){
        require(['../page/personalCenter/accountInfo.vue'],resolve)
      }
    },
    {
      path: '/onlineCustomers',
      name: 'onlineCustomers',
      component(resolve){
        require(['../page/find/onlineCustomers.vue'],resolve)
      }
    },{
      path: '/modifyAddress',
      name: 'modifyAddress',
      component(resolve){
        require(['../page/shoppingBag/modifyAddress.vue'],resolve)
      }
    },{
      path: '/shopIndex',
      name: 'shopIndex',
      component(resolve){
        require(['../page/shoppingBag/shoppIndex.vue'],resolve)
      }
    },{
      path: '/Xcurrency',
      name: 'Xcurrency',
      component(resolve){
        require(['../page/personalCenter/Xcurrency.vue'],resolve)
      }
    },/*{
      path: '/demo',
      name: 'demo',
      component: demo
    },*/{
      path: '/topic',
      name: 'topic',
      component(resolve){
        require(['../page/find/topic.vue'],resolve)
      }
    },/*{
      path: '/upload',
      name: 'upload',
      component(resolve){
        require(['../page/find/upload.vue'],resolve)
      }
    },*/{
      path: '/releaseDynamics',
      name: 'releaseDynamics',
      component(resolve){
        require(['../page/find/releaseDynamics.vue'],resolve)
      }
    },{
      path: '/personalHomePage',
      name: 'personalHomePage',
      component(resolve){
        require(['../page/find/personalHomePage.vue'],resolve)
      }
    },{
      path: '/findPage',
      name: 'findPage',
      component(resolve){
        require(['../page/find/findPage.vue'],resolve)
      }
    },
    {
      path: '/',
      name: 'login',
      component(resolve){
        require(['../page/login/login.vue'],resolve)
      }
    },
    {
      path: '/mobileLogin',
      name: 'mobileLogin',
      component(resolve){
        require(['../page/login/mobileLogin.vue'],resolve)
      }
    },
    {
      path: '/search',
      name: 'search',
      component(resolve){
        require(['../page/index/search.vue'],resolve)
      }

    },
    {
      path: '/selectCountryArea',
      name: 'selectCountryArea',
      component(resolve){
        require(['../page/login/selectCountryArea.vue'],resolve)
      }


    },
    {
      path: '/tenCommendation',
      name: 'tenCommendation',
      component(resolve){
        require(['../page/index/tenCommendation.vue'],resolve)
      }
    },
    {
      path: '/newGrowGrass',
      name: 'newGrowGrass',
      component(resolve){
        require(['../page/index/newGrowGrass.vue'],resolve)
      }
    },
    {
      path: '/index',
      name: 'index',
      meta:{keepAlive:true},
      component(resolve){
        require(['../page/index/index.vue'],resolve)
      }
    },
    {
      path: '/catcherRecommend',
      name: 'catcherRecommend',
      component(resolve){
        require(['../page/find/catcherRecommend.vue'],resolve)
      }
    },
    {
      path: '/classification',
      name: 'classification',
      component(resolve){
        require(['../page/index/classification.vue'],resolve)
      }
    },
    {
      path: '/classificationTwoPage',
      name: 'classificationTwoPage',
      component(resolve){
        require(['../page/index/classificationTwoPage.vue'],resolve)
      }
    },{
      path: '/popularBrand',
      name: 'popularBrand',
      component(resolve){
        require(['../page/index/popularBrand.vue'],resolve)
      }
    },{
      path: '/dynamicDetails',
      name: 'dynamicDetails',
      component(resolve){
        require(['../page/find/dynamicDetails.vue'],resolve)
      }
    },
    {
      path: '/hotTopic',
      name: 'hotTopic',
      component(resolve){
        require(['../page/find/hotTopic.vue'],resolve)
      }
    }
  ]
})
