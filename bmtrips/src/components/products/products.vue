<template>
 <div class="index-product">
   <loading :isLoading="isLoading"></loading>
   <search :hotDatalist="hotData"></search>
   <div class="d-1">
     <ul class="clearFix">
       <li class="d-1-sjxt" v-for="item in division" :style="{backgroundImage: 'url(' + item.typeimgurl + ')'}">
         <router-link :to="{name:'productclass',params:{id:item.divisionurl.params.triplist}}">
           <div class="d-1-t">
             <div class="d-1-t1">{{item.typename}}</div>
             <div class="d-1-t2">Private Trip</div>
           </div>
         </router-link>
       </li>
       <!--<li class="d-1-jzpt">-->
         <!--<router-link :to="{name:'productclass',params:'organizedtour'}">-->
          <!--<div class="d-1-t">-->
             <!--<div class="d-1-t1">精致拼团</div>-->
             <!--<div class="d-1-t2">Mini Trip Groups</div>-->
            <!--</div>-->
         <!--</router-link>-->
       <!--</li>-->
     </ul>
   </div>
   <div class="d-3 popularline">
     <hotcountry :hotData="hotData"></hotcountry>
   </div>
   <div class="hot-trip" v-for="listData in listData">
     <div>
       <span class="title f-18-b">{{listData.typename}}</span>
       <router-link :to="{name:'productclass',params:{id:listData.listallurl.params.triplist}}" class="more">查看全部<i class="iconfont1 icon-jiantouyou"></i></router-link>
     </div>
      <div id="popularline">
       <productlist :listDatas="listData.item"></productlist>
     </div>
     <!--<div class="drop">点击加载更多</div>-->
   </div>

 </div>
</template>

<script type="text/ecmascript-6">
import search from 'components/search/search';
import hotcountry from 'components/hotcountry/hotcountry';
import productlist from 'components/productlist/productlist.vue';
import loading from 'components/loading/loading.vue';
import {BaseUrltest1, BaseUrl} from 'src/common/js/base.js';
export default {
  props: ['hotData'],
  data() {
  return {
    isLoading: true,
    listData: [],
    division: []
  };
},
created() {
  this.$http.get(BaseUrl() + '?msg=list').then(response => {
    this.listData = response.body;
  }, response => {
    // error callback
  });
  this.$http.get(BaseUrltest1() + '?msg=division' + '&XDEBUG_SESSION_START=18137').then(response => {
    this.division = response.body;
    this.isLoading = false;
  }, response => {
    // error callback
    console.log(response);
  });
},
  components: {
    search,
    hotcountry,
    productlist,
    loading
  }
};
</script>

<style>
  .index-product{position: absolute;top: 0;left: 0;bottom: 50px;box-sizing: border-box;width: 100%;overflow: auto;}
  .index-product .d-1{width:100%;padding:15px 0 0 0;margin-bottom: 30px;}
  .index-product .d-1 ul{display: flex;}
  .index-product .d-1 ul>li{border-radius: 2px;height:120px;flex: 1;display: inline-block;text-align: center;margin: 0  0 0 10px}
  .index-product .d-1 ul>li:last-child{margin-right: 10px}
  .index-product .d-1 .d-1-jzpt a,.index-product .d-1 .d-1-sjxt a{display: block;width:100%;height:100%;position:relative;}
  .index-product .d-1 .d-1-sjxt .d-1-t{position:absolute;left:0;bottom:0;padding:0 13px;}
  .index-product .d-1-t .d-1-t1{font-size: 18px;color: #FFFFFF;line-height: 20px;}
  .index-product .d-1-t .d-1-t2{font-size: 11px;color: #FFFFFF;margin-bottom: 0.7rem;}
  .index-product .d-2 .mdd-list img{width: 100%;height: 10rem;border-radius: 2px;display: block;}
  .index-product .d-3{padding:0 15px;}
  .hot-trip .title{margin-bottom: 10px;margin-left: 15px;}
  .hot-trip .more{float: right;margin-right: 20px;color:#74777E;}
  .hot-trip .drop{text-align: center;line-height: 70px;}
</style>
