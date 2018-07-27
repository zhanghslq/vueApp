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
/**
 *  Author:gj
 *  Create time:2018/07/04
 *  Description :检查字符串是否为空
 **/
function checkNull(string){
    if (string === null || string === undefined || string === '') return true;
    return false;
}
/**
 *  Author:gj
 *  Create time:2018/07/04
 *  Description :手机号码验证
 **/
function checkMobilePhone(n) {
    var u = ["134", "135", "136", "137", "138", "139", "150", "151", "152", "157", "158", "159", "182", "183", "187", "188"],
    f = ["130", "131", "132", "155", "156", "185", "186"],
    e = ["133", "153", "180", "189", "170", "181", "177", "176", "184", "178"],
    t = [];
    if (t = t.concat(u, f, e), n == "") return 1;
    if (n.length != 11 || isNaN(n)) return 2;
    for (var o = n.substr(0, 3), r = !1, i = 0, i = 0; i < t.length; i++) if (o == t[i]) {
        r = !0;
        break
    }
    return r ? 0 : 2;
}

/**
 *  Author:gj
 *  Create time:2018/07/16
 *  Description :缩略图点开大图
 **/
var initPhotoSwipeFromDOM = function(gallerySelector) {
  // 解析来自DOM元素幻灯片数据（URL，标题，大小...）
  var parseThumbnailElements = function(el) {
      var thumbElements = el.childNodes,
          numNodes = thumbElements.length,
          items = [],
          figureEl,
          linkEl,
          size,
          item,
    divEl;

      for(var i = 0; i < numNodes; i++) {
          figureEl = thumbElements[i];
          // 仅包括元素节点
          if(figureEl.nodeType !== 1) {
              continue;
          }
    divEl = figureEl.children[0];
          linkEl = divEl.children[0]; // <a> element
          size = linkEl.getAttribute('data-size').split('x');
          // 创建幻灯片对象
          item = {
              src: linkEl.getAttribute('href'),
              w: parseInt(size[0], 10),
              h: parseInt(size[1], 10)
          };
          if(figureEl.children.length > 1) {
              item.title = figureEl.children[1].innerHTML; 
          }
          if(linkEl.children.length > 0) {
              // <img> 缩略图节点, 检索缩略图网址
              item.msrc = linkEl.children[0].getAttribute('src');
          } 
          item.el = figureEl; // 保存链接元素 for getThumbBoundsFn
          items.push(item);
      }
      return items;
  };

  // 查找最近的父节点
  var closest = function closest(el, fn) {
      return el && ( fn(el) ? el : closest(el.parentNode, fn) );
  };
  // 当用户点击缩略图触发
  var onThumbnailsClick = function(e) {
      e = e || window.event;
      e.preventDefault ? e.preventDefault() : e.returnValue = false;

      var eTarget = e.target || e.srcElement;
      var clickedListItem = closest(eTarget, function(el) {
          return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
      });

      if(!clickedListItem) {
          return;
      }
      var clickedGallery = clickedListItem.parentNode,
          childNodes = clickedListItem.parentNode.childNodes,
          numChildNodes = childNodes.length,
          nodeIndex = 0,
          index;
      for (var i = 0; i < numChildNodes; i++) {
          if(childNodes[i].nodeType !== 1) { 
              continue; 
          }

          if(childNodes[i] === clickedListItem) {
              index = nodeIndex;
              break;
          }
          nodeIndex++;
      }
    if(index >= 0) {
          // open PhotoSwipe if valid index found
          openPhotoSwipe( index, clickedGallery );
      }
      return false;
  };

  var photoswipeParseHash = function() {
      var hash = window.location.hash.substring(1),
      params = {};

      if(hash.length < 5) {
          return params;
      }

      var vars = hash.split('&');
      for (var i = 0; i < vars.length; i++) {
          if(!vars[i]) {
              continue;
          }
          var pair = vars[i].split('=');  
          if(pair.length < 2) {
              continue;
          }           
          params[pair[0]] = pair[1];
      }

      if(params.gid) {
          params.gid = parseInt(params.gid, 10);
      }

      return params;
  };

  var openPhotoSwipe = function(index, galleryElement, disableAnimation, fromURL) {
      var pswpElement = document.querySelectorAll('.pswp')[0],
          gallery,
          options,
          items;

      items = parseThumbnailElements(galleryElement);

      // 这里可以定义参数
      options = {
        barsSize: { 
          top: 100,
          bottom: 100
        }, 
     fullscreenEl : false,
    shareButtons: [
    {id:'wechat', label:'分享微信', url:'#'},
    {id:'weibo', label:'新浪微博', url:'#'},
    {id:'download', label:'保存图片', url:'{{raw_image_url}}', download:true}
    ],

          galleryUID: galleryElement.getAttribute('data-pswp-uid'),

          getThumbBoundsFn: function(index) {
              var thumbnail = items[index].el.getElementsByTagName('img')[0], 
                  pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                  rect = thumbnail.getBoundingClientRect(); 
              return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
          }

      };

      if(fromURL) {
          if(options.galleryPIDs) {

              for(var j = 0; j < items.length; j++) {
                  if(items[j].pid == index) {
                      options.index = j;
                      break;
                  }
              }
          } else {

              options.index = parseInt(index, 10) - 1;
          }
      } else {
          options.index = parseInt(index, 10);
      }

      if( isNaN(options.index) ) {
          return;
      }

      if(disableAnimation) {
          options.showAnimationDuration = 0;
      }
      gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
      gallery.init();
  };

  var galleryElements = document.querySelectorAll( gallerySelector );

  for(var i = 0, l = galleryElements.length; i < l; i++) {
      galleryElements[i].setAttribute('data-pswp-uid', i+1);
      galleryElements[i].onclick = onThumbnailsClick;
  }

  var hashData = photoswipeParseHash();
    if(hashData.pid && hashData.gid) {
        openPhotoSwipe( hashData.pid ,  galleryElements[ hashData.gid - 1 ], true, true );
    }
};

initPhotoSwipeFromDOM('.my-gallery');
  $(".my-gallery>figure>div").each(function(){
  $(this).height($(this).width());
});
function more(obj,id) {
  if ($('#txt'+id).is(":hidden")) {
    $('#p'+id).hide();
    $('#txt'+id).show();
    obj.innerHTML='收起';
  } else {
    $('#p'+id).show();
    $('#txt'+id).hide();
    obj.innerHTML='全文';
  }
}
