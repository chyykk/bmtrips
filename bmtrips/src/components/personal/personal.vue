<template>
 <div>
   <div class="container personal-index-wrap">
     <div class="title-box clearFix">
       <div class="left f-24-b">我的驴爸爸</div>
       <div class="head-portrait">
         <form name="upload-img" class="upload-img">
           <input type="hidden" id="file" accept="image/*">
         </form>
         <div class="picture" id="view"></div>
       </div>
     </div>
     <div class="content-box">
       <ul class="form-list-info">
         <li @click="alert">
           <a href="#" >
             <div class="left-text f-16-g">我的订单</div>
             <i class="iconfont iconfont1 icon-youjian"></i>
           </a>
         </li>
         <li @click="alert">
           <a href="#">
             <div class="left-text f-16-g">常用出行人</div>
             <i class="iconfont iconfont1 icon-youjian"></i>
           </a>
         </li>
         <li @click="alert">
           <a href="#">
             <div class="left-text f-16-g">我的信息</div>
             <i class="iconfont iconfont1 icon-youjian"></i>
           </a>
         </li>
         <li @click="alert">
           <a href="#">
             <div class="left-text f-16-g">关于驴爸爸</div>
             <i class="iconfont iconfont1 icon-youjian"></i>
           </a>
         </li>
         <li @click="alert">
           <a href="#">
             <div class="left-text f-16-g">未登录</div>
           </a>
         </li>
       </ul>
     </div>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
     alert: function() {
       alert('程序猿开发中');
       return false;
     }
  }
  };
</script>

<style>
  @import "../../common/css/iconfont.css";
  .personal-index-wrap{margin: 0 15px;}
  .personal-index-wrap .title-box .left{}
  .title-box{margin-top: 30px;height: 75px;line-height: 75px;position: relative; border-bottom: 1px solid #E6E6E6}
  .head-portrait .picture{height: 50px;width: 50px;background: url("./default-head.png") no-repeat center;background-size:100% 100%;position: absolute;right: 0px;bottom: 13px;border-radius: 100%}
  .form-list-info{width:100%;}
  .form-list-info li{height:76px;line-height: 76px;width: 100%;position:relative;}
  .form-list-info li>a{display: block;width:100%;height:100%;left:0;border-bottom: 1px solid #E6E6E6;position:absolute;}
  .form-list-info li .left-text{display: inline-block;}
  .form-list-info li .icon-youjian,
  .form-list-info li .icon-jiantouxia{float: right;color:#C3C3C3;font-size: 14px;margin-left:10px;}
  .form-list-info li  .text{float: right;display: inline-block;height:100%;line-height: 7.6rem;}

</style>
