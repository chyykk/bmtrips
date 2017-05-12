<template>
  <div class="country">
    <div class="list-title" >
      <span class="name">{{coun.typename}}</span>
      <router-link :to="{name:'productclass',params:{id:coun.groupallurl.params.triplist}}" class="more">查看全部<i class="iconfont1 icon-jiantouyou"></i></router-link>
    </div>
    <div class="content">
      <div class="swiper">
        <div class="swiper-container swiper-container1">
          <div class="swiper-wrapper">
            <router-link :to="{name:'productdetail',params:{id:item.id}}" class="swiper-slide pro-list"  v-for="item in coun.item" :key="index">
              <img alt="【9人Mini团】日本札幌+洞爷湖+登别+小樽·6日5晚" :src='item.imgurl'>
              <div class="list-text">
                <div class="first-title f-16-b">{{item.title}}</div>
                <div class="product-score">
													<span class="star-xx">
                            <i class="iconfont1 icon-xingji c-m"></i>
                            <i class="iconfont1 icon-xingji c-m"></i>
                            <i class="iconfont1 icon-xingji c-m"></i>
                            <i class="iconfont1 icon-xingji c-m"></i>
                            <i class="iconfont1 icon-xingji c-m"></i>
                          </span>
                  <span class="f-14-m">{{item.score}}分</span>
                </div>
                <div class="sub-title f-14-g">{{item.subtitle}}</div>
              </div>
              <div class="list-price"><span class="price-bs">¥</span>{{item.price}}</div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Swiper from '../../../static/swiper-3.4.2.min.js';
export default {
  props: ['coun'],
  mounted () {
  var Swipe = new Swiper('.swiper-container1', {
    slidesPerView: 'auto',
    paginationClickable: true
    });
    Swipe.observer = true;
 }
};
</script>

<style>

</style>
