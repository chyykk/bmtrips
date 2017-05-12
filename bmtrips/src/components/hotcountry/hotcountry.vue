<template>
  <div class="hot-country">
    <p class="f-18-b">热门目的地</p>
    <div class="hot-country-wrap">
      <div class="swiper-container hotcountry-content">
        <div class="swiper-wrapper">
          <router-link :to="{name:'productarr',params:{id:item.typeurl.params.triplist}}" class="swiper-slide hot-trip-country mdd-list"  v-for='(item,index) in hotData' :key="index">
            <img :src='item.typeimgurl'>
            <div class="list-text">
              <div class="sub-title f-14-g">{{item.typename}}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from '../../../static/swiper-3.4.2.min.js';
  export default {
    props: ['hotData'],
    data() {
    return {};
  },
  mounted () {
    var Swipers = new Swiper('.hotcountry-content', {
      slidesPerView: 'auto',
      paginationClickable: true
    });
    Swipers.observer = true;
  }
  };
</script>

<style>
  @import "../../common/css/common.css";
  .hot-country-wrap{margin-bottom: 10px;}
  .hot-country h1{font-weight: 300}
  .hot-country .mdd-list{width: 110px;position: relative;display: inline-block;margin-top: 20px;}
  .hot-trip-country{padding-right: 15px;}
  .hot-country .mdd-list img{width: 100%;height: 100px;border-radius: 3px}
  .hot-country .mdd-list .list-text{padding: 10px 0 15px 0;width: 100%;text-align: left;}
</style>
