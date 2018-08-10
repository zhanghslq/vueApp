/**
 *    Author:gj
 *　　Create time:2018/07/04
 *　　Description :手机页面自适应
 **/
 !function(){
//缩放
    var cw=document.documentElement.clientWidth||document.body.clientWidth,
    zoom=cw/375;
    if(cw>750)zoom=2;
    window.zoom=zoom/2;
    document.write('<style id="htmlzoom">html{font-size:'+(zoom*50)+'px;}</style>');
    window.addEventListener('resize',function(){
           cw=document.documentElement.clientWidth||document.body.clientWidth,zoom=cw/375;
           if(cw>750)zoom=2;
           window.zoom=zoom/2;
           document.getElementById('htmlzoom').innerHTML='html{font-size:'+(zoom*50)+'px;}';
    });
}();

/*function more(obj,id) {
  if ($('#txt'+id).is(":hidden")) {
    $('#p'+id).hide();
    $('#txt'+id).show();
    obj.innerHTML='收起';
  } else {
    $('#p'+id).show();
    $('#txt'+id).hide();
    obj.innerHTML='全文';
  }
}*/
