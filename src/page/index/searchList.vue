<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        <div class="searchHead searchList">
          <div class="search">
            <em v-on:click="querySearchList()"></em>

              <input type="text" v-model="kw" placeholder="搜索喜欢的宝贝">

          </div>
        </div>
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="searchListMain" id="navcon01">
          <div class="tabNav">
            <a href="javascript:void(0);" class="Cur">默认</a>
            <a href="javascript:void(0);">销量</a>
            <a href="javascript:void(0);">
              价格
              <div class="sortIcon">
                <em class="Cur"></em>
                <em></em>
              </div>
            </a>
          </div>
          <scroller class="searchCont" :on-infinite="infinite"  :on-refresh = "refresh" ref="my_scroller" :noDataText="noDataText">

            <div class="searchContInfo" style="display: block;">
              <router-link :to="{name:'commodityPage',query:{'id':product.id,'skuId':product.skuId}}" v-for="(product,index) in productList" :key="index">
                <div class="infoPic"><img :src="product.titleImage"></div>
                <p>{{product.title}}</p>
                <div class="price">
                  <span class="presentNum">￥<em>{{product.actualPrice}}</em></span>
                  <span class="timePri">￥<em>{{product.price}}</em></span>
                </div>
                <div class="discount">
                  <span class="limit">限时直降</span>
                </div>
              </router-link>

            </div>

            <div class="searchContInfo">
              <a href="#">
                <div class="infoPic"><img src="../../images/temporary/commodity12.png"></div>
                <p>【任选】【百草味-手剥小白杏200g】坚果干果</p>
                <div class="price">
                  <span class="presentNum">￥<em>19</em>.9</span>
                  <span class="timePri">￥<em>19</em>.9</span>
                </div>
                <div class="discount">
                  <span class="limit">限时直降</span>
                </div>
              </a>
            </div>
            <div class="searchContInfo">
              <a href="#">
                <div class="infoPic"><img src="../../images/temporary/commodity12.png"></div>
                <p>【任选】【百草味-手剥小白杏200g】坚果干果</p>
                <div class="price">
                  <span class="presentNum">￥<em>19</em>.9</span>
                  <span class="timePri">￥<em>19</em>.9</span>
                </div>
                <div class="discount">
                  <span class="limit">限时直降</span>
                </div>
              </a>
            </div>
          </scroller>
        </div>
      </main>
    </div>
</template>
<script>
  import axios from 'axios'
  import store from '../../service/store'

    export default {

      name: "searchList",
      data(){
        return{
          //搜索得到的商品集合
          productList:[],
          kw:'',
          noDataText:'我也是有底线的',
          pageNumber:0,
        }
      },
      created(){
        store.checkAreaData();
      },
      methods:{
        searchTab:function (){
          var $li = $('.tabNav a');
          var $ul = $('.searchCont .searchContInfo');
          $("#navcon01").css('height',$ul.eq(0).height())
          $li.click(function(){
            var $this = $(this);
            var $t = $this.index();
            $li.removeClass();
            $this.addClass('Cur');
            $ul.css('display','none');
            $ul.eq($t).css('display','block');
            $("#navcon01").css('height',$ul.eq($t).height())
          })
        },
        querySearchList(){
          store.save("kw",this.kw)
          let _this=this
          axios.post(store.getAddress()+'/api/wxapp/product/list',{
            "kw":_this.kw,
            "page":_this.pageNumber,
            "limit":10
          })
            .then(function (response) {
              console.log(response)
              if(response.data.code==200){
                _this.productList=_this.productList.concat(response.data.list)
              }else{

              }

            })
            .catch(function (error) {
              console.log(error);
            })
        },
        refreshData(){
          store.save("kw",this.kw)
          let _this=this
          axios.post(store.getAddress()+'/api/wxapp/product/list',{
            "kw":_this.kw,
            "page":_this.pageNumber,
            "limit":10
          })
            .then(function (response) {
              console.log(response)
              if(response.data.code==200){
                _this.productList=response.data.list
              }else{

              }

            })
            .catch(function (error) {
              console.log(error);
            })
        },
        infinite(){
          this.pageNumber ++;
          console.log("加载更多")//加载更多，即往数据里面push新的数据，需要在原来的基础上继续加载剩余的数据
          this.querySearchList();
          this.$refs.my_scroller.finishInfinite(true);
          this.$refs.my_scroller.resize()
        },
        refresh(){
          this.pageNumber = 1;
          console.log("重新加载")
          this.refreshData();
          this.$refs.my_scroller.finishPullToRefresh()//结束动作，在完成调用时执行

        }

      },
      updated(){
        this.searchTab();

      },
      destroyed(){
        console.log("销毁searchList")
      },
      mounted:function () {
        let _this=this;
        _this.kw = store.fetch("kw")

      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/secondLevel.css";
</style>
