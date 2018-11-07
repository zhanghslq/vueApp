<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        <router-link :to="{path:'',query:{}}">
          <div class="classifiSearch">
            <em></em>
            <input type="text" placeholder="搜索喜欢的宝贝">
          </div>
        </router-link>
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="classifiMain">
          <div class="classifiContent">
            <div class="classifiLeft">
              <div class="leftnavList">
                <a href="javascript:void(0);"  v-bind:class="{'Cur':index==0}" v-for="(item,index) in typeList" :id="item.id">{{item.name}}</a>

              </div>
            </div>
            <div class="classifiRight">
              <div class="rightContent">
                <div class="contentIng" v-for="(item,index) in typeList"   :key="index" :style="{display:(index==0?'block':'none')}" >
                  <div class="contentTitle"><em></em><span>分类</span><em></em></div>
                  <div class="contentInfo">
                    <router-link to="classificationTwoPage" v-for="(ite,inde) in item.childen" :key="inde" :id="ite.id">
                      <div class="infoPic"><img :src="ite.icon"></div>
                      <span>{{ite.name}}</span>
                    </router-link>
                  </div>
                  <div class="contentTitle"><em></em><span>热门品牌</span><em></em></div>
                  <div class="contentInfo">
                    <a href="#">
                      <div class="infoPic"><img src="../../images/temporary/commodity10.png"></div>
                      <span>坚果炒货</span>
                    </a>

                    <a href="#">
                      <div class="infoPic"><img src="../../images/temporary/commodity10.png"></div>
                      <span>坚果炒货</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>

 import store from '../../service/store'
 import axios from 'axios'

    export default {
        name: "classification",
      data(){
          return{
            typeList:[]
          }
      },
      updated(){
        var $li = $('.leftnavList a');
        var $ul = $('.rightContent .contentIng');
        $li.click(function(){
          var $this = $(this);
          var $t = $this.index();
          $li.removeClass();
          $this.addClass('Cur');
          $ul.css('display','none');
          $ul.eq($t).css('display','block');
        })
      },
      mounted(){
          var _this=this;
        axios.post(store.getAddress()+"/api/wxapp/category/listAll").then(function (responese) {
         if(responese.data.code==200){
           _this.typeList=responese.data.list;


         }
        }).catch(function (error) {
          console.log(error)
        })

        var $li = $('.leftnavList a');
        var $ul = $('.rightContent .contentIng');
        $li.click(function(){
          var $this = $(this);
          var $t = $this.index();
          $li.removeClass();
          $this.addClass('Cur');
          $ul.css('display','none');
          $ul.eq($t).css('display','block');
        })
      },
      destroyed(){
        $('.leftnavList a').unbind("click")
      }
    }
</script>

<style scoped>
  @import "../../css/plugins/swiper.min.css";
  @import "../../css/common/common.css";
@import "../../css/other/secondLevel.css";
</style>
