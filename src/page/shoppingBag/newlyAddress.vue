<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        新增收货地址
      </header>
      <!--头部 结束-->
      <!--中间 开始-->
      <main>
        <div class="addressCorrel">
          <div class="addressFillIn">
            <div class="fillInfo">
              <i>*</i>
              <span>收货人：</span>
              <input type="text" name="" placeholder="请输入姓名">
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>手机号码：</span>
              <input type="text" name="" placeholder="请输入手机号">
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>所在地区：</span>
              <a href="javascript:void(0);" class="choiceCity" id="choiceCity">请点击选择省市区</a>
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>详细地址：</span>
              <textarea class="detailedAdd" placeholder="请输入详细地址"></textarea>
            </div>
            <div class="fillInfo">
              <i>*</i>
              <span>身份证号：</span>
              <input type="text" name="" placeholder="请输入身份证号">
            </div>
          </div>
          <div class="identification">
            <div class="idTop">
              <div class="idLeft"><span>身份证正反面照片</span><em>(选填)</em></div>
              <em class="idRight idCur"></em>
            </div>
            <div class="idBottom">
              <p>温馨提示：请上传原始比例的身份证正反面，请勿裁剪涂改，保证身份信息清晰显示，否则无法通过审核</p>
              <div class="idPhoto">
                <div class="idPhotoInfo">
                  <div class="photoLeft"></div>
                  <div class="photoRight"></div>
                </div>
                <p>若您已上传过当前身份证对应的照片 <a href="#">立即同步</a></p>
              </div>
              <div class="explain">
                <p>为什么需要上传身份信息？</p>
                <p>根据海关规定，购买跨境商品需要办理清关手续，请您配合上传身份信息，以确保您购买的商品顺利通过海关检查。（猩际优选承诺所传身份证明只用于办理跨境商品的清关手续，不作他途使用，其他任何人均无法查看）购买跨境商品时，提交的身份证信息需与下单时所填写的收货人相符</p>
              </div>
            </div>
          </div>
          <div class="default">
            <div class="defaultLeft"><span>设置为默认地址</span><em>(注:每次下单时都会使用该地址)</em></div>
            <label class="ui-switch">
              <input type="checkbox">
            </label>
          </div>
          <a href="#" class="preservation">保存</a>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
  import {city} from "../../js/plugins/city";
  //import Picker from '../../js/plugins/picker.min.js'
    export default {
        name: "newlyAddress",
      methods:{
        secondChange: function () {
    third = [];
    checked[1] = selectedIndex;
    var first_index = checked[0];
    if (city[first_index].sub[selectedIndex].hasOwnProperty('sub')) {
      var secondCity = city[first_index].sub[selectedIndex];
      creatList(secondCity.sub, third);
      picker.refillColumn(2, third);
      picker.scrollColumn(2, 0)
    } else {
      third = [{text: '', value: 0}];
      checked[2] = 0;
      picker.refillColumn(2, third);
      picker.scrollColumn(2, 0)
    }
  }  ,
        creatList: function (obj, list){
    obj.forEach(function(item, index, arr){
      var temp = new Object();
      temp.text = item.name;
      temp.value = index;
      list.push(temp);
    })
  },
        firstChange: function () {
    second = [];
    third = [];
    checked[0] = selectedIndex;
    var firstCity = city[selectedIndex];
    if (firstCity.hasOwnProperty('sub')) {
      creatList(firstCity.sub, second);

      var secondCity = city[selectedIndex].sub[0]
      if (secondCity.hasOwnProperty('sub')) {
        creatList(secondCity.sub, third);
      } else {
        third = [{text: '', value: 0}];
        checked[2] = 0;
      }
    } else {
      second = [{text: '', value: 0}];
      third = [{text: '', value: 0}];
      checked[1] = 0;
      checked[2] = 0;
    }

    picker.refillColumn(1, second);
    picker.refillColumn(2, third);
    picker.scrollColumn(1, 0)
    picker.scrollColumn(2, 0)
  },
      },
      components:{
        Picker
      },
      mounted:function () {
        var nameEl = document.getElementById('choiceCity');
        var first = []; /* 省，直辖市 */
        var second = []; /* 市 */
        var third = []; /* 镇 */
        var selectedIndex = [0, 0, 0]; /* 默认选中的地区 */
        var checked = [0, 0, 0]; /* 已选选项 */
        this.creatList(city, first);
        if (city[selectedIndex[0]].hasOwnProperty('sub')) {
          this.creatList(city[selectedIndex[0]].sub, second);
        } else {
          second = [{text: '', value: 0}];
        }

        if (city[selectedIndex[0]].sub[selectedIndex[1]].hasOwnProperty('sub')) {
          this.creatList(city[selectedIndex[0]].sub[selectedIndex[1]].sub, third);
        } else {
          third = [{text: '', value: 0}];
        }

        var picker = new Picker({
          data: [first, second, third],
          selectedIndex: selectedIndex,
          title: '地址选择'
        });

        picker.on('picker.select', function (selectedVal, selectedIndex) {
          var text1 = first[selectedIndex[0]].text;
          var text2 = second[selectedIndex[1]].text;
          var text3 = third[selectedIndex[2]] ? third[selectedIndex[2]].text : '';

          nameEl.innerText = text1 + ' ' + text2 + ' ' + text3;
        });

        picker.on('picker.change', function (index, selectedIndex) {
          if (index === 0){
            this.firstChange();
          } else if (index === 1) {
            this.secondChange();
          }
          //

        });

        nameEl.addEventListener('click', function () {
          picker.show();
        });
      }
    }
</script>

<style scoped>
@import "../../css/common/common.css";
  @import "../../css/other/threeLevel.css";
</style>
