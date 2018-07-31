<template>
    <div>
      <!--头部 开始-->
      <header>
        <a href="javascript:history.go(-1);" class="returnBtn"></a>
        修改收货地址
        <a href="javascript:void(0);" class="releaseBtn">删除</a>
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
            <div class="idLeft"><span>身份证正反面照片</span><em>(选填)</em></div>
            <em class="idRight"></em>
          </div>
          <div class="default">
            <div class="defaultLeft"><span>该地址为当前默认地址</span></div>
          </div>
          <a href="#" class="preservation">保存</a>
        </div>
      </main>
      <!--中间 结束-->
    </div>
</template>

<script>
  import  {city} from '../../js/plugins/city'
  var Picker = require("../../js/plugins/picker.min");
  // import '../../js/other/login'
    export default {
      name: "modifyAddress",
      data (){
          return {
            city,
            Picker
          }
      },
      components:{
      },
      methods:{

      },
      mounted:function () {
          var nameEl = document.getElementById('choiceCity');
          var first = []; /* 省，直辖市 */
          var second = []; /* 市 */
          var third = []; /* 镇 */
          var selectedIndex = [0, 0, 0]; /* 默认选中的地区 */
          var checked = [0, 0, 0]; /* 已选选项 */
          function creatList(obj, list){
            obj.forEach(function(item, index, arr){
              var temp = new Object();
              temp.text = item.name;
              temp.value = index;
              list.push(temp);
            })
          }

          creatList(city, first);

          if (city[selectedIndex[0]].hasOwnProperty('sub')) {
            creatList(city[selectedIndex[0]].sub, second);
          } else {
            second = [{text: '', value: 0}];
          }

          if (city[selectedIndex[0]].sub[selectedIndex[1]].hasOwnProperty('sub')) {
            creatList(city[selectedIndex[0]].sub[selectedIndex[1]].sub, third);
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
              firstChange();
            } else if (index === 1) {
              secondChange();
            }

            function firstChange() {
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
            }

            function secondChange() {
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
            }

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
