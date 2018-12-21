<template>
  <div>
    <div class="leavingMessage" >
      <a href="javascript:history.go(-1);" class="returnBtn"></a>
      <iframe src="https://chat.weiliaokefu.com/mobile-index-cid-31204" >

      </iframe>
    </div>
  </div>

</template>

<script>
    export default {
        name: "service"
    }
</script>

<style scoped>
@import "../../css/common/common.css";
</style>
<style scoped>
  body{
    background: #f8f8f8;
  }
  .leavingMessage{
    width: 100%;
    overflow: hidden;
    height: 100%;
    position: relative;
  }
  .leavingMessage iframe{
    width:100%;
    height: 13rem;
    border:none;
    overflow-y: auto;
  }
  .leavingMessage .returnBtn{
    width: 0.19rem;
    height: 0.34rem;
    display: block;
    background: url(../../images/common/returnIcon.png) no-repeat;
    background-size: 100%;
    position: absolute;
    top: 0.3rem;
    left: 0.35rem;
  }

  @media (device-height:568px) and (-webkit-min-device-pixel-ratio:2){
    @media only screen and (max-device-width :480px){
      .leavingMessage .returnBtn{
        position: absolute;
        top: 0.4rem;
        left: 0.4rem;
      }
      .leavingMessage iframe{
        height: 13rem;
      }
    }
    @media only screen and (min-device-width :481px){
      .leavingMessage .returnBtn{
        position: absolute;
        top: 0.4rem;
        left: 0.4rem;
      }
      .leavingMessage iframe{
        height: 13rem;
      }
    }
  }
</style>
