<template>
  <div>
    <div class="page-head">
      <div  onclick="window.history.go(-1)" class="left back">
        <i class="iconfont icon-fanhuijian"></i>
        <span class="left-text"></span>
      </div>
      <div class="head-title">登陆</div>
    </div>
    <div class="signin">
       <div class="phone-box">

       </div>
      <div class="phone-box">

      </div>
      <div class="phone-box">

      </div>
      <input type="button" class="phone-button" value="提交"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style>
  /*网页头部共用样式*/
  .page-head{position:fixed;top:0;left:0;text-align:center;height:45px;line-height: 45px;width:100%;background: #FFFFFF;box-shadow: 0 1px 0 0 #E6E6E6;}
  .page-head .head-title{font-size: 16px;color: #474747;letter-spacing: 0;font-weight: bold;}
  .page-head .left{height:100%; position:absolute;top:0;left:15px;font-size: 16px;color: #474747;letter-spacing: 0;line-height: 45px;}
  .page-head .left .left-text{color:#474747;line-height: 24px;}
  .page-head .right{height:100%;position:absolute;top:0;right:15px;font-size: 16px;color: #474747;}
  .signin{margin-top:45px;width: 100%;box-sizing: border-box;padding: 0 2%;}
  .phone-box{height: 76px;line-height: 76px;border-bottom: 1px solid #E6E6E6;width: 100%;}
  .phone-button{width:100%;height: 60px;border: none;background: #f96868;font-size: 20px;color: #fff;margin-top: 10px;}
</style>
