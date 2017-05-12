<template>
  <div class="ratings">
    <div class="rate-box clearFix" v-for='(item, index) in ratings'>
      <div class="rate-left"><img :src='pic'></div>
      <div class="rate-right">
        <div class="rate-title-box">
          <div class="title-box-one clearFix">
            <span class="text1 f-14-b">{{item.userid}}</span>
            <span class="text2 f-14-g f-14-g-p">{{item.evaluatetime}}</span>
          </div>
          <div class="title-box-two f-14-b">{{item.title}}</div>
        </div>
        <div id="rate-content-box" class="rate-content-box f-14-g-p" ref="evaluate" onload="onload(index)">{{item.evaluate.substring(0, 50)}}</div>
        <div v-if="item.evaluate.length > 50" class="rate-box" v-on:click="show(index,$event)" :id="'btn_'+index">全部</div>
        <div class="rate-pic clearFix" v-if="item.img">
          <a href="#"  v-for="img in item.img">
            <img index="0" class="comment-pic"  :src='img.imgurl'>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import defaulth from 'components/ratings/default-head.png';
  export default {
    props: ['ratings'],
    data() {
    return {
      pic: defaulth
    };
  },
  methods: {
    show(a, $event) {
      var text = this.ratings[a].evaluate;
        if ($event.srcElement.innerHTML === '全部') {
          $event.srcElement.innerHTML = '收起';
          this.$refs.evaluate[a].innerHTML = text;
        } else {
          $event.srcElement.innerHTML = '全部';
         this.$refs.evaluate[a].innerHTML = text.substring(0, 50);
        };
    }
  }
  };
</script>

<style>

  .rate-box{margin-bottom: 30px}
  .rate-box .rate-left{display: inline-block;float: left;width:50px;height:50px;background: #D8D8D8;border-radius: 50%;}
  .rate-box .rate-left img{width: 100%;height: 100%}
  .rate-box .rate-right{width:280px;float: left;display: inline-block;margin-left: 1.5rem;}
  .rate-box .rate-pic a{display: inline-block;width: 70px;height: 70px;margin-right: 20px;float: left;background: #FFFFFF;border-radius: 2px;margin-top: 20px;}
  .rate-box .rate-pic a img{width: 100%;height: 100%}
</style>
