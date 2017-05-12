<template>
 <div class="customer">
   <div class="d-zxkf">
     <div class="d-h f-24-b">客服咨询</div>
     <div class="d-tip f-14-b">您也可以致电驴爸爸 <a href="tel:021-68412680" style="color:#f96868;">021-68412680 </a>获取帮助！</div>

     <div class="d-c">
       <div class="d-c-l d-c-name">
         <label class="f-16-g">您的称呼（必填）</label>
         <input class="f-14-b" data="请输入" value="请输入" type="text" name="username" id="username" v-model="username">
       </div>
       <div class="d-c-l d-c-phone">
         <label class="f-16-g">联系电话（必填）</label>
         <input class="f-14-b" data="请输入" value="请输入" type="text" name="phone" id="phone" v-model="phone">
       </div>
       <div class="d-c-l clearFix">
         <span class="f-16-g">回电时间</span>
         <div class="callback-date">
           <select class="callback-c f-14-b" id="call_back_time" v-model="time">
             <option value="全天均可">全天均可</option>
             <option value="非工作时间">非工作时间</option>
           </select>
           <i class="iconfont1 icon-jiantouxia callback-jt"></i>
         </div>
       </div>
       <div class="zx-c">
         <div class="f-16-g zx-c-title">咨询内容</div>
         <textarea class="zx-c-con f-14-b" id="message" v-model="content"></textarea>
       </div>
     </div>
     <div class="d-btn" id="submit" @click="submit">确定</div>

   </div>
 </div>
</template>

<script type="text/ecmascript-6">
  import {BaseUrltest} from 'src/common/js/base.js';
  export default {
    data() {
      return {
        username: '',
        phone: '',
        time: '',
        content: ''
      };
    },
  methods: {
    submit() {
      let jsondata = {'username': this.username, 'phone': this.phone, 'time': this.time, 'content': this.content};
      this.$http.post(BaseUrltest() + '&msg=consult', jsondata, {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}).then(response => {
        console.log(111);
      }, response => {
        // error callback
      });
    }
  }
  };
</script>

<style>
  .customer{position: absolute;top: 0;left: 0;bottom: 50px;overflow: auto;width: 100%}
  /*改版 咨询页  star*/
  .d-zxkf{padding:0 15px;width: 100%;box-sizing: border-box;padding-bottom: 50px;}
  .d-zxkf .close-btn{margin:1.5rem 0 0 1.5rem;width:3rem;}
  .d-zxkf .close-btn .icon-close{font-size: 28px;}
  .d-zxkf .d-h{margin:25px auto 0 auto;}
  .d-zxkf .d-c{margin:0 auto;}
  .d-zxkf .d-c .d-c-l{height:76px;line-height:76px;border-bottom:1px solid #e6e6e6;}
  .d-zxkf .d-c .d-c-name input,
  .d-zxkf .d-c .d-c-phone input{width:200px;height:40px;margin-top:18px;float:right;text-align: right;border:none;line-height: 20px;}
  .d-zxkf .d-c .callback-date{float: right;display: inline-block;position:relative;margin-right: 15px;}
  .d-zxkf .callback-date .callback-c{ height:40px;width:100px; position:absolute;top:18px;right:0;z-index: 3;background:rgba(255,255,255,0);direction: rtl;padding-right: 30px;border: none;outline: none;appearance:none;-moz-appearance:none;-webkit-appearance:none;-ms-appearance:none;         }
  .d-zxkf .callback-date .callback-jt{margin-left:15px;color:#898989;position: absolute;right:0;z-index: 2;}
  .d-zxkf .d-c .zx-c{padding-bottom: 20px;}
  .d-zxkf .zx-c .zx-c-title{height:76px;line-height:76px}
  .d-zxkf .zx-c .zx-c-con{width:100%;box-sizing:border-box;background: #F6F6F6;border-radius: 2px;height:6rem;border:none;outline: none;resize:none;padding:1rem 1.5rem;}
  .d-zxkf .d-btn{margin:0 auto;height:50px;border-radius: 2px;background: #f96868;font-size: 16px;color: #FFFFFF;text-align: center;line-height: 50px;}
  .d-zxkf .d-tip{padding:5px 15px 0 0px;}
  /*改版 咨询页  end*/
</style>
