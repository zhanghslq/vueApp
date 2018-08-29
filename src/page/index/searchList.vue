<template>
    <div>
      <!--头部 开始-->
      <header class="fix">
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        <div class="searchHead searchList">
          <div class="search">
            <em></em>
            <router-link to="search">
              <input type="text" placeholder="搜索喜欢的宝贝">
            </router-link>

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
          <div class="searchCont">
            <div class="searchContInfo" style="display: block;">
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
          </div>
        </div>
      </main>
    </div>
</template>

<script>
    export default {
      name: "searchList",
      data(){
        return{
          //搜索得到的商品集合
          productList:[]
        }
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
          let _this=this
          axios.post('/api//api/wxapp/product/list',{
            "kw":_this.kw,
            "page":1,
            "limit":10
          })
            .then(function (response) {
              console.log(response)
              if(response.data.code==200){

              }else{

              }

            })
            .catch(function (error) {
              console.log(error);
            })
        },
      },updated(){
        this.searchTab();
      },
      mounted:function () {
        let _this=this;
        let kw = this.$route.params.kw


      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/secondLevel.css";
</style>
