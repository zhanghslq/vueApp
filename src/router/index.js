import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

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
      path:'/editBankCard',
      name:'editBankCard',
      component(resolve){
        require(['../page/personalCenter/editBankCard.vue'],resolve)
      }

    },{
      path:'/receivingBankCard',
      name:'receivingBankCard',
      component(resolve){
        require(['../page/personalCenter/receivingBankCard.vue'],resolve)
      }

    },{
      path:'/modifyCard',
      name:'modifyCard',
      component(resolve){
        require(['../page/personalCenter/modifyCard.vue'],resolve)
      }

    },{
      path:'/newlyCard',
      name:'newlyCard',
      component(resolve){
        require(['../page/personalCenter/newlyCard.vue'],resolve)
      }

    },{
      path:'/service',
      name:'service',
      component(resolve){
        require(['../page/personalCenter/service.vue'],resolve)
      }

    },{
      path:'/applicationRefunding',
      name:'applicationRefunding',
      component(resolve){
        require(['../page/personalCenter/applicationRefunding.vue'],resolve)
      }

    },{
      path:'/applyforExchange',
      name:'applyforExchange',
      component(resolve){
        require(['../page/personalCenter/applyforExchange.vue'],resolve)
      }

    },{
      path:'/applicationRefund',
      name:'applicationRefund',
      component(resolve){
        require(['../page/personalCenter/applicationRefund.vue'],resolve)
      }

    },{
      path:'/selectServiceType',
      name:'selectServiceType',
      component(resolve){
        require(['../page/personalCenter/selectServiceType.vue'],resolve)
      }

    },{
      path:'/camera',
      name:'camera',
      component(resolve){
        require(['../page/personalCenter/camera.vue'],resolve)
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
      path:'/myOrder',
      name:'myOrder',
      component(resolve){
        require(['../page/personalCenter/myOrder.vue'],resolve)
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
    }, {
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
    },{
      path:'/newlyAddress',
      name:'newlyAddress',
      component(resolve){
        require(['../page/shoppingBag/newlyAddress.vue'],resolve)
      }
    },{
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
    },{
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
    },{
      path:'/conventionalGood',
      name:'conventionalGood',
      component(resolve){
        require(['../page/shoppingBag/conventionalGood.vue'],resolve)
      }
    },{
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
    },{
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
        require(['../page/login/mobileLogin.vue'],resolve)
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
