<template>
 <div class="ordering">
   <div class="cust-index-1">
     <div class="cust-index-img">
       <img src="./customize-index.png">
     </div>
     <div class="cust-index-1-div">
       <div class="title-blue">私人定制</div>
       <div class="subtitle">
         <p>不走寻常路，不玩老套路</p>
         <p>驴爸爸专业旅行定制师更懂你</p>
       </div>
     </div>
     <div class="cust-index-2-div clearFix">
       <div class="title">选择目的地</div>
       <div class="order-wrap clearFix">
         <div class="section"  v-for="(con,index) in country" v-bind:class="{secactive:con.active}" @click="activeClick(con,index)">{{con.select}}</div>
         <!--<div class="section" v-bind:class="{secactive:isact}" @click="!isact">非洲</div>-->
       </div>
     </div>
     <ul class="form">
       <li class="form-item">
         <label for="name">姓名</label>
         <div class="input-style"><input type="text" id="name" v-model="name" placeholder="请输入"/></div>
       </li>
       <li  class="form-item">
         <label for="phone">手机号</label>
         <div class="input-style"><input type="text" id="phone" v-model="tel"  placeholder="请输入"/></div>
       </li>
       <li  class="form-item">
         <label for="time">出发时间</label>
         <div class="input-style"><input type="text" id="time" v-model="time"  placeholder="请输入"/></div>
       </li>
       <li class="form-item">
         <label for="">游玩天数</label>
         <div class="input-style"><select name="" v-model="day"  id="day">
           <option value="">1</option>
           <option value="">2</option>
           <option value="">3</option>
           <option value="">4</option>
         </select></div>
       </li>
       <li class="form-textarea">
         <textarea name="" id="" cols="30" v-model="note"  rows="10" placeholder="备注"></textarea>
       </li>
     </ul>
     <div class="form-btn">
       <input type="button" value="提交需求单"/>
     </div>
   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';
  export default {
    data() {
      return {
        activeIndex: null,
        country: [{select: '日本'}, {select: '韩国'}, {select: '菲律宾'}, {select: '巴黎'}],
        isactive: false,
        newcountry: []
      };
  },
  methods: {
    activeClick(con, index) {
      this.$nextTick(function () {
        if (con.active) {
          Vue.set(con, 'active', false);
        } else {
          Vue.set(con, 'active', true);
        };
        this.newcountry = this._countryAct(this.country);
      });
    },
    _countryAct(item) {
      var newcon = [];
      for (let i = 0; i < item.length; i++) {
        if (item[i].active) {
          newcon.push(item[i]);
        };
      };
      return newcon;
    }
  }
  };
</script>

<style>
  .ordering{position: absolute;top: 0;left: 0;bottom: 50px;overflow: auto;width: 100%}
  .cust-index-1{position: relative}
  .cust-index-1 img{position: absolute;width: 101px;right: 0;top: 54px;}
  .cust-index-1-div{padding-top: 116px;margin-left: 30px;}
  .title-blue{font-size: 48px;color: #88A9E3;}
  .subtitle{color: #333333;line-height: 28px;font-size: 16px;margin-top: 35px;}
  .cust-index-2-div{margin-top: 35px;}
  .cust-index-2-div .title{font-size: 18px;height: 50px;line-height: 50px;padding-left: 15px;}
  .order-wrap{margin:0 15px 30px 15px}
  .order-wrap .section{width: 75px;height: 40px;line-height:40px;text-align:center;background: #F6F6F6;font-size: 14px;margin-right: 15px;float: left;}
  .order-wrap .secactive{background: #F96868; color: #fff;}
  .form{padding: 0 10px}
  .form-item{position:relative;border-bottom: 0.5px solid #e6e6e6;height: 50px;line-height: 50px}
  .form-item label{width: 100px;color:#898989;font-size:14px;display: inline-block;}
  .form-item .input-style{position: absolute;right: 0;bottom: 5px;height: 45px;}
  .form-item .input-style input{height: 40px;border: none;line-height: 50px;text-align: right;outline: none;}
  .form-textarea{width: 100%;margin-top: 20px;}
  .form-textarea textarea{width: 100%;border: none;background: #f6f6f6;}
  .form-btn{padding:10px;}
  .form-btn input{width: 100%;height: 50px;background: #89ABE3;border: 0;color: #fff}
</style>
