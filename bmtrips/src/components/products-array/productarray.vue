<template>
  <div class="container-productarr">
    <div class="search-content"><i onclick="window.history.go(-1)" class="iconfont icon-ic_chevron_left_px goback"></i><div class="search-wrap"><search :hotData="hotData"></search></div></div>
    <productlist :listDatas="prolist"></productlist>
  </div>
</template>

<script type="text/ecmascript-6">
  import search from 'components/search/search.vue';
  import productlist from 'components/productlist/productlist.vue';
  import {BaseUrltest1} from 'src/common/js/base.js';
export default {
  props: ['hotData'],
  data() {
    return {
      prolist: []
    };
  },
  created() {
    let jsondata = this.$route.params;
    this.$http.get(BaseUrltest1() + '?msg=productlist' + '&XDEBUG_SESSION_START=14526&id=' + jsondata.id).then(response => {
      this.prolist = response.body;
      console.log(this.prolist);
    }, response => {
      // error callback
    });
  },
  components: {
    search,
    productlist
  }
};
</script>

<style>
  @import "../../common/css/iconfont.css";
.container-productarr{position: absolute;left: 0;top: 0;bottom: 50px;width: 100%;box-sizing: border-box;overflow: auto}
  .search-content{width: 100%;position: relative;border-bottom: 1px solid #E6E6E6}
  .search-content .searchBox{border-bottom: none;}
  .search-content .goback{font-size: 35px;color: #474747;line-height: 40px;width:35px;position:absolute;left:0;top:5px;text-align: center;}
  .search-content .search-wrap{margin-left: 35px;}

</style>
