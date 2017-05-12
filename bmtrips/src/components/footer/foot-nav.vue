<template>
  <div class="footer-nav">
    <div class="index-container">
      <div class="index-list-info">
        <div class="bm-different">
          <div class="bm-different-one" >
            <img src="./lvbaba.png">
            <div class="title">驴爸爸不一样</div>
          </div>
          <div class="bm-different-two">
            <ul class="clearFix">
              <li>
                <i class="iconfont1 icon-tese c-m"></i>
                <div class="text1 f-16-b">无购物店</div>
                <div class="text2 f-14-g">进店赔钱</div>
              </li>
              <li>
                <i class="iconfont1 icon-tese3 c-m"></i>
                <div class="text1 f-16-b">私家小团</div>
                <div class="text2 f-14-g">无外人</div>
              </li>
              <li>
                <i class="iconfont1 icon-tese1 c-m"></i>
                <div class="text1 f-16-b">专车专导</div>
                <div class="text2 f-14-g">语言交通都省心</div>
              </li>
              <li>
                <i class="iconfont1 icon-tese2 c-m"></i>
                <div class="text1 f-16-b">行程可改</div>
                <div class="text2 f-14-g">酒店行程可改</div>
              </li>
              <li>
                <i class="iconfont1 icon-tese5 c-m"></i>
                <div class="text1 f-16-b">优质行程</div>
                <div class="text2 f-14-g">反复打磨玩法</div>
              </li>
              <li>
                <i class="iconfont1 icon-tese4 c-m"></i>
                <div class="text1 f-16-b">专属客服</div>
                <div class="text2 f-14-g">7x24小时</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="lx-bm">
        <div class="title f-18-b">联系我们</div>
        <ul class="clearFix">
          <li>
            <i class="iconfont1 icon-dianhua1"></i>
            <div class="text1 f-16-b">致电驴爸爸</div>
            <a class="text2 f-14-g" href="tel:021-68412680">021-68412680</a>
          </li>
          <li>
            <i class="iconfont1 icon-dianhua"></i>
            <div class="text1 f-16-b">驴爸爸回电</div>
            <div class="text2 f-14-g">灵活方便省话费</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="wx-footer">
      <div class="cooperation-platform">
        <!--<div class="title f-18-b">合作平台</div>-->
        <!--<div class="cont clearFix">-->
          <!--<img class="footer-xc" src="./logo-ctrip.png">-->
          <!--<img class="footer-allx" src="./logo-alitrip.png">-->
          <!--&lt;!&ndash;<img class="footer-tc" src="./logo-tongcheng.png">&ndash;&gt;-->
          <!--<img class="footer-mfw" src="./logo-mafengwo.png">-->
        <!--</div>-->
      </div>
      <div class="company-info">
        客服咨询：<a href="tel:021-68412680" style="color:#75777E;">021-XXXXXXXX</a><br>
        上海市徐汇区新漕河泾国际商务中心B座31楼<br>
        上海酷睿网络科技股份有限公司<br>
        国家旅游局经营许可证号: XXXXXXXXX<br>
        沪ICP备XXXXXXXX号
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {

  };
</script>

<style>
  /*斑马不一样*/
  .index-container .bm-different{background: #F6F6F6;border-radius: 2px;padding:40px 0 30px 0;}
  .index-container .bm-different-one{text-align: center;}
  .index-container .bm-different-one img{width:51px;height:auto;display: block;margin:0 auto;}
  .index-container .bm-different-one .title{font-size: 24px;color: #F96868;letter-spacing: 0px;line-height: 40px;margin-top: 10px;margin-bottom: 30px;}
  .index-container .bm-different-two{text-align: center;}
  .index-container .bm-different-two ul{width:100%;}
  .index-container .bm-different-two ul li{width:33.3%;margin-bottom:4rem;float: left;}
  .index-container .bm-different-two .iconfont{color:#f96868;font-size: 36px;}
  .index-container .bm-different-two .text1{font-size: 16px;color: #1E1E1E;letter-spacing: 0px;line-height: 20px;margin:1.3rem 0 1rem 0;}
  .index-container .bm-different-two .text2{font-size: 14px;color: #75777E;letter-spacing: 0px;}
  /*联系斑马*/
  .index-container .lx-bm{padding:60px 0;text-align: center;}
  .index-container .lx-bm .title{font-weight:bold;font-size: 18px;color: #5A5B5D;letter-spacing: 0px;line-height: 20px;margin-bottom: 25px;}
  .index-container .lx-bm ul{width:100%;}
  .index-container .lx-bm ul li{float: left;width:50%;}
  .index-container .lx-bm ul .icon-zdbm{color:#f96868;font-size:36px;}
  .index-container .lx-bm ul .icon-bmhd{color:#62A8EA;font-size:36px;}
  .index-container .lx-bm ul .text1{font-size: 16px;color: #1E1E1E;letter-spacing: 0px;line-height: 20px;margin:10px 0 5px 0;}
  .index-container .lx-bm ul .text2{font-size: 14px;color: #75777E;letter-spacing: 0px;}
  .index-container .alllink{position:absolute;bottom:-6px;right:0;}
  .index-container .check-xq{background: #fff;padding-left: 3px;}
  .index-container .jiantou{margin-left:10px;}
  /*底部信息*/
  .wx-footer{margin-top: -20px;padding:40px 17px;background: #F6F6F6;margin:0 auto;}
  .wx-footer .cooperation-platform{padding-bottom: 20px;}
  .wx-footer .cooperation-platform .title{letter-spacing: 0px;text-align: center;margin-bottom: 20px;font-size: 18px;color: #1e1e1e;line-height: 20px;}
  .wx-footer .cooperation-platform .cont{margin:0 auto;display: flex}
  .wx-footer .cooperation-platform .footer-xc,
  .wx-footer .cooperation-platform .footer-allx,
  .wx-footer .cooperation-platform .footer-tc{width:75px;height:34px;float: left;margin-right: 15px;flex: 1}
  .wx-footer .cooperation-platform .footer-mfw{width:75px;height:34px;}
  .wx-footer .company-info{width:100%;text-align: center;font-size: 14px;color: #898989;letter-spacing: 0;line-height: 28px;}
  .wx-footer .bm-logo{width:82px;height:64px;margin:0 auto;}
</style>
