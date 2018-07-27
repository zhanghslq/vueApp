/**
 *    Author:gj
 *　　Create time:2018/07/05
 *　　Description :小零碎
 **/
$(function(){
   searchTab();  //搜索列表tab切换
})
$(".codeBtn a.obtain").on("click", function() {
    var validCode=true;
    var time=60;
    var code=$(this);
    //判断再点点击
    if(code.hasClass('lock')) return false;

    code.addClass('lock');

    //判断时间
    if (validCode) {
        validCode=false;
    var t=setInterval(function  () {
        time--;
        code.addClass("obtainNo");
        code.html(time+"秒");
        if (time==0) {
            code.removeClass('lock');
            clearInterval(t);
            code.html("获取验证码");
            validCode=true;
        code.removeClass("obtainNo");
        }
    },1000)
    }
});
/*搜索列表 tab切换*/
function searchTab(){
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
}

/**
 *  Author:gj
 *  Create time:2018/07/26
 *  Description :选择地址
 **/
 $(function(){
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
})
