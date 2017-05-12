<template>
  <div class="main">
    <loading :isLoading="isLoading"></loading>
    <search :hotDatalist="hotData"></search>
    <div class="swiper-banner">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div  class="swiper-slide" v-for="item in someData">
            <router-link :to="{name:'productarr',params:{id:item.swiperrul.params.triplist}}">
              <img :src="item.swiperimgurl" alt=""/>
            </router-link>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="pro-wrapper">
      <indexpro v-for="coun in groupData"  :coun='coun' :key="index"></indexpro>
      <!--渲染旅游list-->
      <div class="srdz-cont">
        <div class="srdz-text">
          <div class="text1">私人订制</div>
          <div class="text2">为个性旅游需求而生</div>
        </div>
        <router-link to="/ordering" class="srdz-btn">了解服务</router-link>
      </div>
      <div class="hot-coun">
        <hotcountry :hotData="hotData"></hotcountry>
      </div>
      <div class="ratings-wrap">
        <div class="list-title mb-25">
          <span class="left f-18-b">近期客户评价</span>
        </div>
        <ratings :ratings="ratings"></ratings>
      </div>
      <foot></foot>
    </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import search from 'components/search/search';
  import hotcountry from 'components/hotcountry/hotcountry';
  import ratings from 'components/ratings/ratings';
  import foot from 'components/footer/foot-nav';
  import Swiper from '../../../static/swiper.min.js';
  import indexpro from 'components/index-product/indexproduct.vue';
  import loading from 'components/loading/loading.vue';
  import {BaseUrltest1} from 'src/common/js/base.js';
  export default {
    props: ['hotData'],
    data() {
      return {
        someData: [],
        groupData: [],
        ratings: [],
        isLoading: true
      };
    },
  beforeCreate () {

  },
  methods: {
    plus: function() {
//      this.$nextTick(function () {
//        var mySwiper = new Swiper('.swiper-banner .swiper-container', {
//        autoplay: 1000,
//        pagination: '.swiper-pagination',
//        observer: true,
//        observeParents: true
//      });
//      console.log(mySwiper);
//      });
    }
  },
   created() {
    this.$http.get(BaseUrltest1() + '?msg=swiper' + '&XDEBUG_SESSION_START=14526').then(response => {
      this.someData = response.body;
      this.isLoading = false;
    }, response => {
      // error callback
    });
//     this.$http.get('/api/swiper').then(response => {
//       this.someData = response.body;
//       this.isLoading = false;
//     }, response => {
//       // error callback
//     });
     this.$http.get(BaseUrltest1() + '?msg=group' + '&XDEBUG_SESSION_START=14526').then(response => {
       this.groupData = response.body;
     }, response => {
       // error callback
     });
//    this.$http.get('http://192.168.1.89:8000/Cooee.Web.AppSdk/app/interface.php?msg=hot&XDEBUG_SESSION_START=16992').then(response => {
//      this.hotData = response.body;
//    }, response => {
//      // error callback
//    });
    this.$http.get(BaseUrltest1() + '?msg=consume' + '&XDEBUG_SESSION_START=14526').then(response => {
      this.ratings = response.body;
    }, response => {
      // error callback
    });
  },
    components: {
      search,
      hotcountry,
      ratings,
      foot,
      indexpro,
      loading
    },
  mounted () {
      Swiper('.swiper-banner .swiper-container', {
        autoplay: 1000,
        slidesPerView: 'auto',
        initialSlide: 1,
        observer: true
      });
   }
  };
</script>

<style>
  @import "../../../static/css/swiper-3.4.2.min.css";
  .main{width: 100%;position: absolute;top: 0;left: 0;bottom:50px;overflow:auto;}
  .swiper-banner{
    width: 100%;
    height: 250px;
  }
  .swiper-banner .swiper-container{height: 100%}
  .swiper-banner img{width: 100%;height: 100%}
  .pro-wrapper{padding: 8px;}
  .list-title{
    height: 20px;
    line-height: 20px;
    margin-top: 15px;
  }
  .list-title .name{
    float: left;
    font-size: 18px;
  }
  .hot-coun{margin-bottom: 30px;}
  .list-title .more{float: right;  font-size: 16px;color:#74777E}
  .content{  height: 270px; margin: 10px 0 0 0;}
  .content .pro-list{width: 260px;margin-right:10px;position: relative;display: inline-block}
  .content .pro-list img{width:100%;height:173px;display: block;}
   .content .list-text{padding:10px 0 5px 0;width:100%;text-align: left;}
   .content .first-title{font-size: 16px;color: #1E1E1E;line-height: 20px;margin-bottom: 0.5rem;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;}
  .content .sub-title{font-size: 14px;color: #75777E;width:100%;}
   .content .list-price{position:absolute;background-color: rgba(28,28,28,0.7);top:0;right:0;color:#fff;padding:0 1rem;height:2.4rem;line-height: 2.4rem;border-radius: 0 2px;font-size: 14px;color: #FFFFFF;}
  .srdz-cont{height:230px;background:url("index-srdz.png") no-repeat center;background-size:100% 100%;border-radius: 2px;padding-top:3rem;margin-bottom: 30px;}
  .srdz-cont .srdz-text {margin-left:30px;}
  .srdz-cont .srdz-text .text1{font-size: 36px;color: #FFFFFF;letter-spacing: 0px;margin-bottom: 11px;}
  .srdz-cont .srdz-text .text2{font-size: 16px;color: #FFFFFF;letter-spacing: 0px;line-height: 20px;}
   .srdz-cont .srdz-btn{display: block;margin:40px 0 0 30px;width:80px;height:40px;text-align: center;background-color: rgba(28,28,28,0.7);border-radius: 2px;font-size: 14px;color: #FFFFFF;line-height: 40px;}
  .index-container .content .mdd-list{width:10rem;position:relative;display: inline-block;}
  .index-container .content .mdd-list img{width:100%;height:10rem;border-radius: 2px;display: block;}
  .ratings-wrap .mb-25{margin-bottom: 25px;margin-top: 10px}

</style>
