<template>
  <div class="productslist">
    <div class="d-3 product-info-list-wrap" v-for="item in listDatas">
      <div class="d-3-list product-info-wrap"  type='1' days="16">
        <router-link :to="{name:'productdetail',params:{id:item.id}}" class='picture'>
          <img alt="" class="d-3-list-img" :src='item.imgurl'>
          <div class="d-3-list-t1">
            <span class="f-16-b">{{item.title}}</span>

          </div>
          <div class="f-14-g">{{item.subtitle}}</div>
          <div class="d-3-list-pf">
            <span class="price">¥{{item.price}}</span>
							<span class="star-xx">
																	<i class="iconfont1 icon-xingji c-m"></i>
																	<i class="iconfont1 icon-xingji c-m"></i>
																	<i class="iconfont1 icon-xingji c-m"></i>
																	<i class="iconfont1 icon-xingji c-m"></i>
																	<i class="iconfont1 icon-xingji c-m"></i>
																							</span>
            <span class="f-14-g pf">{{item.score}}</span>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {BaseUrl} from 'src/common/js/base.js';
export default {
props: ['listDatas'],
    data() {
  return {};
},
created() {
  this.$http.get(BaseUrl() + '?msg=swiper').then(response => {
    this.someData = response.body;
  }, response => {
    // error callback
  });
}
};
</script>

<style>
  .productslist .d-3{padding: 10px 15px 0 15px}
  .productslist .d-3 .d-3-list{width:100%;padding-bottom: 20px;}
  .productslist .d-3 .d-3-list .d-3-list-img{width:100%;height:230px;margin-bottom: 10px;border-radius: 2px;}
</style>
