<link rel="stylesheet" href="../../common/css/common.css"/>
<template>
  <div class="search">
    <div class="searchBox clearFix">
      <div class="cont" @click='showDetail'>
        <input class="cont-text decoration-input" v-model.trim="sszd"  type="text" name="ser-cont" value=""  placeholder="搜索产品／目的地">
        <i class="iconfont icon-sousuo_sousuo"></i>
      </div>
    </div>
    <div class="search-fix" v-show="detailShow">
      <div class="searchBox clearFix">
        <div class="cont">
          <input class="cont-text"  type="text" name="ser-cont" v-model.trim="sszd" @keyup.enter='siteSearch' placeholder="搜索产品／目的地">
          <button type="button" class="cont-btn" @click="siteSearch"><i class="iconfont icon-sousuo_sousuo"></i></button>
        </div>
        <div class="c-q f-14-m cancel-btn" @click='hideDetail'>取消</div>
      </div>
      <!-- search end -->
      <!-- content -->
      <div class="d-1">
        <div class="d-1-t f-16-g">目的地</div>
        <div class="d-1-c clearFix destination_list">
          <div class="d-1-c-l f-14-b destination" v-for="item in hotDatalist">{{item.typename}}</div></div>
      </div>
      <div class="d-2">
        <div class="d-2-t f-16-g">搜索历史</div>
        <ul class="d-2-c clearFix search-history-list">
          <li class="d-2-c-l history" v-for="item in hitem">
            <router-link to="/productarr/item">
              <i class="iconfont1 icon-sousuo"></i>
              <span class="f-14-b">{{item}}</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="d-qk f-16-m clear-history" @click="clearItem">清除搜索历史</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
 export default{
   props: ['hotDatalist'],
 data() {
   return {
     detailShow: false,
     sszd: '',
     thisurl: 'http://192.168.0.222:8000/productdetail',
     hitem: []
   };
 },
 mounted() {
   let {historyItems} = localStorage;
   if (historyItems) {
     this.hitem = historyItems.split('|');
   }
 },
 methods: {
   showDetail() {
     this.detailShow = true;
   },
   hideDetail() {
     this.detailShow = false;
   },
   siteSearch() {
     this._setHistoryItems(this.sszd);
     this.$router.push({path: '/productsearch', query: {query: this.sszd}});
     this.sszd = '';
     this.detailShow = false;
   },
   _setHistoryItems(keyword) {
     let {historyItems} = localStorage;
     if (historyItems === undefined) {
       localStorage.historyItems = keyword;
     } else {
       this.hitem = historyItems.split('|');
       const isExists = this.hitem.filter(e => e === keyword).length > 0;
       if (isExists) {
         historyItems = keyword + '|' + this.hitem.filter(e => e !== keyword).join('|');
       } else {
         historyItems += '|' + keyword;
       }
       localStorage.historyItems = historyItems;
     }
   },
   clearItem() {
     localStorage.clear();
     this.hitem = localStorage;
   }
 }
 };
</script>

<style>
  @import "../../common/css/iconfont.css";
  @import "../../common/css/common.css";
 .searchBox{padding:10px 15px 10px 10px;background: #fff;width:100%;box-sizing:border-box;border-bottom:1px solid #E6E6E6;}
 .searchBox .cont{height:28px;width:100%;box-sizing:border-box;padding:0 20px 0rem 30px;margin:0 auto;position:relative;background: #EAEBED;border-radius: 2px;display: inline-block;}
 .search-fix .searchBox .cont{width: 88%;display: inline-block}
 .searchBox .cont-text{height:100%;background:none;border:none;letter-spacing:0px;width:100%;font-size: 14px;color: #898989;line-height: 28px;}
 .searchBox .iconfont{width: 30px;height: 30px;position: absolute;left: 0;top: 0;color:#898989;z-index: 10;line-height: 30px;text-align: center;font-size: 14px}
 .searchBox input:-ms-input-placeholder{color: #75777E;}

  .search-fix{position: fixed;top: 0;left: 0;bottom:40px;width: 100%;height: 100%;background: #fff;z-index: 100;}
  .searchBox .cancel-btn{display: inline-block;}
  .searchBox .cont-btn{width: 30px;height:100%;position: absolute;border:0px;background:none;left: 0;top: 0;color:#898989;z-index: 10;line-height: 30px;text-align: center;font-size: 14px}
  .search-fix .d-1{margin:0 15px;padding-bottom: 15px;border-bottom: 1px solid #e6e6e6;}
  .search-fix .d-1-t{padding:28px 0;}
  .search-fix .d-1-c .d-1-c-l{width:108px;height:40px;background: #F6F6F6;border-radius: 2px;margin:0 10px 15px 0;text-align: center;line-height: 40px;display: inline-block;float: left;}
  .search-fix .d-1-c .select{background: #f96868;font-size: 14px;color: #FFF0F0;}
  .search-fix .d-2{width:100%;}
  .search-fix .d-2 .d-2-t{padding:28px 0 28px 15px;}
  .search-fix .d-2 .d-2-c{width:100%;}
  .search-fix .d-2 .d-2-c li{width:100%;padding:10px 15px;}
  .search-fix .d-2-c .icon-sousuo{margin-right: 1rem;color:#898989;}
  .search-fix .d-qk{width:100%;padding:20px 0;text-align: center;}

</style>
