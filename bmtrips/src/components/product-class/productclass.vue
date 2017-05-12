<template>
<div class="productclass">
  <div class="page-head">
    <div  onclick="window.history.go(-1)" class="left back">
      <i class="iconfont icon-fanhuijian"></i>
      <span class="left-text">旅游产品</span>
    </div>
    <div class="head-title">{{title}}</div>
  </div>
  <productlist :listDatas="prolist"></productlist>
</div>
</template>

<script type="text/ecmascript-6">
  import productlist from 'components/productlist/productlist.vue';
  import {BaseUrltest1} from 'src/common/js/base.js';
  export default {
    data() {
    return {
      prolist: [],
      title: ''
    };
  },
   created() {
    let jsondata = this.$route.params;
    this.$http.get(BaseUrltest1() + '?msg=productlist' + '&XDEBUG_SESSION_START=14526&id=' + jsondata.id).then(response => {
      this.prolist = response.body;
      this.title = this.prolist[0].typename;
    }, response => {
      // error callback
    });
  },
  components: {
    productlist
  }
  };
</script>

<style>
  @import "../../common/css/iconfont.css";
  .productclass{position: absolute;left: 0;top: 45px;bottom: 50px;width: 100%;box-sizing: border-box;overflow: auto}
  /*网页头部共用样式*/
  .page-head{position:fixed;top:0;left:0;text-align:center;height:45px;line-height: 45px;width:100%;background: #FFFFFF;box-shadow: 0 1px 0 0 #E6E6E6;}
  .page-head .head-title{font-size: 16px;color: #474747;letter-spacing: 0;font-weight: bold;}
  .page-head .left{height:100%; position:absolute;top:0;left:15px;font-size: 16px;color: #474747;letter-spacing: 0;line-height: 45px;}
  .page-head .left .left-text{color:#474747;line-height: 24px;}
  .page-head .right{height:100%;position:absolute;top:0;right:15px;font-size: 16px;color: #474747;}
</style>
