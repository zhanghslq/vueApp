<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"/>
  </div>
</template>
<script>
/*eslint-disable*/
export default {
  name: 'App',

  mounted:function () {
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
  }
}
</script>
<style >
@import './css/common/common.css';
</style>
