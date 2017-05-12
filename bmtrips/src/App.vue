<template>
  <div>
    <router-view :hotData="hotData"></router-view>
    <div class="wx-menu">
      <ul class="clearFix">
        <li class="wx-menu-l index-index">
          <router-link to="/first">
           <i class="iconfont1 iconfont icon-shouye sel-color"></i>
           <div class="text sel-color">首页</div>
          </router-link>
        </li>
        <li class="wx-menu-l index-tourismhomepage product-lists">
          <router-link to="/products">
            <i class="iconfont1 iconfont icon-lvyou"></i>
            <div class="text">旅游产品</div>
          </router-link>
        </li>
        <li class="wx-menu-l index-customize">
          <router-link to="/ordering">
            <i class="iconfont1 iconfont icon-sirendingzhi"></i>
            <div class="text">私人定制</div>
          </router-link>
        </li>
        <li class="wx-menu-l index-leave_message">
          <router-link to="/customer">
            <i class="iconfont1 iconfont icon-customservice"></i>
            <div class="text">客服</div>
          </router-link>
        </li>
        <li class="wx-menu-l personal-index">
          <router-link to="/personal">
            <i class="iconfont1 iconfont icon-gerenzhongxin"></i>
            <div class="text">个人中心</div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script  type="text/ecmascript-6">
  import {BaseUrl} from 'src/common/js/base.js';
export default {
  data() {
  return {
    hotData: []
  };
},
  created () {
  this.$http.get(BaseUrl() + '?msg=hot' + '&XDEBUG_SESSION_START=14526').then(response => {
    this.hotData = response.body;
  }, response => {
    // error callback
  });
}
};
</script>

<style>
  @import "common/css/iconfont.css";
  /*底部菜单*/
  .loading{position: fixed;bottom: 50px;left: 0;top:0;width: 100%;background: #fff;z-index: 1002}
  .wx-menu{position:fixed;left:0;bottom:0;height:50px;width:100%;background: #fff;z-index: 1001;border-top:1px solid #e6e6e6;}
  .wx-menu ul{display: flex}
  .wx-menu ul .wx-menu-l{flex:1;position:relative;text-align: center;padding-top:7px;}
  .wx-menu ul .wx-menu-l .iconfont1{color:#75777E;font-size: 22px;}
  .wx-menu ul .wx-menu-l .text{font-size: 10px;color: #000000;}
  .wx-menu .sel-color i{color:#f96868 !important;}
  .wx-menu .sel-color div{color:#f96868 !important;}
</style>
