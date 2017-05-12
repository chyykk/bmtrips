<template>
    <div class = 'product-content'>
      <loading :isLoading="isLoading"></loading>
      <div class="container pro-detail">
        <div class="main-con">
          <div class="pro-detail-header clearFix">
            <div class="null-div"></div>
            <i class="iconfont icon-fanhuijian" onclick="window.history.go(-1)"></i>
            <div class="biaoti f-16-b">{{product.title}}</div>
          </div>
          <div class="pro-detail-head">
            <div class="swiper-container pro-detail-huandeng">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="pic in imgs">
                  <div class='banner-img' :style="{backgroundImage:'url(' + pic.imgurl + ')'}"></div>
                </div>
                <!--<div class="swiper-slide">-->
                  <!--<div class='banner-img'-->
                       <!--style="background-image: url('http://7xnvxo.com2.z0.glb.qiniucdn.com/580a0480aab05.jpg?imageView2/5/w/900/h/600|imageMogr2/thumbnail/900x600!/format/jpg/interlace/1/q/75')"></div>-->
                <!--</div>-->
                <!--<div class="swiper-slide">-->
                  <!--<div class='banner-img'-->
                       <!--style="background-image: url('http://7xnvxo.com2.z0.glb.qiniucdn.com/580a05c80231e.jpg?imageView2/5/w/900/h/600|imageMogr2/thumbnail/900x600!/format/jpg/interlace/1/q/75')"></div>-->
                <!--</div>-->
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
            </div>
            <div class="pro-detail-h-c">
              <div class="d-one">
                <div class="f-20-b title1 pro-biaoti">{{product.title}}</div>
                <div class="f-14-g title2">{{product.subtitle}}</div>
                <div class="star">
                        <span class="star-xx">
                                                                                        <i class="iconfont1 icon-xingji c-m icon-xingji-s"></i>
                                                            <i class="iconfont1 icon-xingji c-m "></i>
                                                            <i class="iconfont1 icon-xingji c-m "></i>
                                                            <i class="iconfont1 icon-xingji c-m "></i>
                                                            <i class="iconfont1 icon-xingji c-m "></i>
                                                                                </span>
                  <span class="star-score f-14-m">{{product.score}}</span>
                </div>
              </div>
              <div class="d-two" v-if="product.elected">
                <strong><em>产品经理推荐：</em></strong><br><span v-for="item in pdrcommad">{{item}}<br></span>                </div>
            </div>
          </div>
          <div class="pro-detail-con">
            <div class="pro-detail-c-list"><img class="all-trip" alt="泰国曼谷+华欣经典版 |  6日5晚私家团----预定流程" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/58b65e67d6f74.jpg?imageView2/2/w/750/format/jpg/interlace/1/q/80"><br></div>
            <div class="pro-detail-c-list trip_container jumpto-cotainer">
            <div class="all-trip-title">
              <div class="t1">行程</div>
            </div>
            <div class="clearFix"></div>
            <!--<div class="detail-nav" style="display:flex">-->
              <!--<div class="f-14-g xc-text">行程</div>-->
              <!--<div class="nummask"></div>-->
              <!--<div class="detail-nav-btn">-->
                <!--<i class="iconfont1 icon-liebiao"></i>-->
                <!--<div class="detail-nav-leibiao">-->
                  <!--<ul class="liebiao-con">-->
                    <!--<li class="liebiao-list f-16-g jh-trip">-->
                      <!--<i class="iconfont1 icon-jianhuahangcheng"></i>-->
                      <!--<span>简化行程</span>-->
                    <!--</li>-->
                    <!--<li class="liebiao-list f-16-g fysm-btn">-->
                      <!--<i class="iconfont1 icon-feiyongshuoming"></i>-->
                      <!--<span>费用说明</span>-->
                    <!--</li>-->
                    <!--<li class="liebiao-list f-16-g ydxz-btn">-->
                      <!--<i class="iconfont1 icon-yudingxuzhi"></i>-->
                      <!--<span>预定须知</span>-->
                    <!--</li>-->
                    <!--<li class="liebiao-list f-16-g khpj-btn">-->
                      <!--<a href="index_53.htm###">-->
                        <!--<i class="f-16-g iconfont1 icon-kehupingjia"></i>-->
                        <!--<span class="f-16-g">客户评价</span>-->
                      <!--</a>-->
                    <!--</li>-->
                  <!--</ul>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <div class="trip-list jumpto-block" v-for="item in product.day">
              <div class="day-trip">
                <div class="day-trip-d1">
                  <div class="line"></div>
                  <h2 class="day-num" id="trip_jumpto_0">D{{item.days}}</h2>
                </div>
                <div class="day-trip-d3">
                  <div class="day-trip-d3-list clearFix">
                    <i class="iconfont1 icon-hangcheng"></i>
                    <span class="f-14-m">行程</span>
                    <div class="right-text f-14-g-p">{{item.trip}}</div>
                  </div>
                  <div class="day-trip-d3-list clearFix">
                    <i class="iconfont1 icon-jiudian"></i>
                    <span class="f-14-m">酒店</span>
                    <div class="right-text f-14-g-p">{{item.hotel}}</div>
                  </div>
                  <div class="day-trip-d3-list clearFix">
                    <i class="iconfont1 icon-yongcan"></i>
                    <span class="f-14-m">用餐</span>
                    <div class="right-text f-14-g-p">{{item.dining}}</div>
                  </div>
                </div>
              </div>
              <div class="day-img-text" v-for="pitem in item.productdayitem">
                <div class="trip-content">
                  <div class="title f-18-b">{{pitem.title}}</div>
                  <div class='text f-14-g-p'>{{pitem.introduce}}</div>
                  <img alt="pitem.title" v-if="pitem.imgs.lenght == 1" v-for="img in pitem.imgs" :src="img" >
                  <div class="detail-img">
                    <div class="swiper-container detail-con-huandeng">
                      <div class="swiper-wrapper clearFix swiper-wrapper-hua">
                        <div class="swiper-slide img-list" v-for="img in pitem.imgs">
                          <img alt="" :src="img" >                                                                            </div>
                        <!--<div class="swiper-slide img-list">-->
                          <!--<img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;玉佛寺-曼谷-泰国-斑马旅游" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/5809ef76cd031.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" >                                                                            </div>-->
                      </div>
                    </div>
                  </div>
                  <div class="text f-14-g-p" v-if="pitem.remark">{{pitem.remark}}<br><br></div>                                                                                                                        </div>
            </div>
              <!--<div class="day-img-text">-->
                <!--<div class="trip-content">-->
                  <!--<div class="title f-18-b">酒店（二选一）</div>-->
                  <!--<div class="nicktabs">-->
                    <!--<ul class="clearFix">-->
                      <!--<li class="f-14-b active">-->
                        <!--IBIS曼谷宜必思酒店（三星）                                                                </li>-->
                      <!--<li class="f-14-b ">-->
                        <!--曼谷素坤逸希尔顿逸林酒店（五星）                                                                </li>-->
                    <!--</ul>-->
                  <!--</div>-->
                  <!--<div class="hotel-con">-->
                    <!--<div class="hotel-con-list" >-->
                      <!--<div class='text f-14-g-p'>曼谷宜必思酒店作为全球连锁的酒店，是有着极高性价比的下榻之地，和当地其他住宿相比，该住宿可以提供更多的服务和便利。-->
                        <!--<br /></div><img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;宜必思-曼谷-泰国-斑马旅游" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/5809ea44daa98.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" class="image">                                                                                                                        </div>-->
                    <!--<div class="hotel-con-list" style="display:none">-->
                      <!--<div class="text f-14-g-p">今天是您落地曼谷的日子，抵达曼谷后，根据航班时间我们的【专车专导】接您入住酒店稍作休息。我们为您优选的是曼谷素坤逸希尔顿逸林酒店 (DoubleTree by Hilton Hotel Sukhumvit Bangkok)。<br></div>                                                                                                                                                                                                            <div class="detail-img">-->
                      <!--<div class="swiper-container detail-con-huandeng">-->
                        <!--<div class="swiper-wrapper clearFix swiper-wrapper-hua">-->
                          <!--<div class="swiper-slide img-list"><img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;double tree 1" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/58872b1895adf.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" ></div>-->
                          <!--<div class="swiper-slide img-list"><img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;double tree" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/58872b18d2f64.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" ></div>-->
                          <!--<div class="swiper-slide img-list"><img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;double tree2" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/58872b191bd9e.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" ></div>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                      <!--<div class="text f-14-g-p"><br>*如遇所选酒店房满，我们将安排您入住同级别酒店:<br>【备选：①曼谷铂尔曼素坤逸大酒店(Pullman Bangkok Grande Sukhumvit) ②曼谷铂尔曼皇权酒店（Pullman Bangkok King Power）】<br><br></div>                                                                                                                        </div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            </div>
            <!--<div class="trip-list jumpto-block">-->
              <!--<div class="day-trip">-->
                <!--<div class="day-trip-d1">-->
                  <!--<div class="line"></div>-->
                  <!--<h2 class="day-num" id="trip_jumpto_0">D2</h2>-->
                <!--</div>-->
                <!--<div class="day-trip-d3">-->
                  <!--<div class="day-trip-d3-list clearFix">-->
                    <!--<i class="iconfont1 icon-hangcheng"></i>-->
                    <!--<span class="f-14-m">行程</span>-->
                    <!--<div class="right-text f-14-g-p">大皇宫 - 玉佛寺 - 暹罗广场 - 暹罗海洋世界 - 唐人街 - 曼谷克里普索人妖秀 / 曼谷大珍珠号夜游烛光晚餐</div>-->
                  <!--</div>-->
                  <!--<div class="day-trip-d3-list clearFix">-->
                    <!--<i class="iconfont1 icon-jiudian"></i>-->
                    <!--<span class="f-14-m">酒店</span>-->
                    <!--<div class="right-text f-14-g-p">宜必思曼谷暹罗酒店（三星） / 曼谷素坤逸希尔顿逸林酒店（五星）（二选一）</div>-->
                  <!--</div>-->
                  <!--<div class="day-trip-d3-list clearFix">-->
                    <!--<i class="iconfont1 icon-yongcan"></i>-->
                    <!--<span class="f-14-m">用餐</span>-->
                    <!--<div class="right-text f-14-g-p">酒店 - 唐人街（自理） - 建兴酒家（自理）</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="day-img-text">-->
                <!--<div class="trip-content">-->
                  <!--<div class="title f-18-b">华侨记忆的唐人街</div>-->
                  <!--<div class='text f-14-g-p'>曼谷之行的第一站从唐人街开始，这里的China town如同地标般的存在，有人说这里是中式风俗在东南亚的文化传承，也有人说这里有泰粤结合的的风土人情...斑长却觉得找一个酒家，点几份美食，看人流攒动，看熙攘街道....再好不过啦！-->
                    <!--<br /></div><img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;唐人街-曼谷-泰国-斑马旅游" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/5809eeaae5ff8.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" >                                                                                                        </div>-->
              <!--</div>-->
              <!--<div class="day-img-text">-->
                <!--<div class="trip-content">-->
                  <!--<div class="title f-18-b">故事从暹罗地标说起</div>-->
                  <!--<div class='text f-14-g-p'>美餐之后，探寻大皇宫和玉佛寺，这里是暹罗古国重要的文化地标，作为凝固的艺术，向世人呈现着泰国古代建筑、绘画、雕刻和装潢艺术的精粹。-->
                    <!--<br /></div><img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;大皇宫-曼谷-泰国-斑马旅游" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/5809ef61ccc83.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" >                                                                                                        </div>-->
              <!--</div>-->
              <!--<div class="day-img-text">-->
                <!--<div class="trip-content">-->
                  <!--<div class="title f-18-b"></div>-->
                  <!--<div class="text f-14-g-p">历代皇室都对这一始建于1782年的【大皇宫】修缮有加，至今仍以最绚烂的姿态迎接着来自四方八面的旅人。位于其东北角的【玉佛寺】因王室供奉的玉制佛像而得名，这尊玉佛像是匠人于完整的玉石块精心雕琢而成，其精美程度令人叹为观止。-->
                    <!--<br /></div>                                                                                                                        <div class="detail-img">-->
                  <!--<div class="swiper-container detail-con-huandeng">-->
                    <!--<div class="swiper-wrapper clearFix swiper-wrapper-hua">-->
                      <!--<div class="swiper-slide img-list">-->
                        <!--<img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;大皇宫-曼谷-泰国-斑马旅游2" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/5809ef6810bf2.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" >                                                                            </div>-->
                      <!--<div class="swiper-slide img-list">-->
                        <!--<img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;玉佛寺-曼谷-泰国-斑马旅游" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/5809ef76cd031.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" >                                                                            </div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="day-img-text">-->
                <!--<div class="trip-content">-->
                  <!--<div class="title f-18-b">跳动的海洋之心</div>-->
                  <!--<div class='text f-14-g-p'>这里有蔚蓝的海底世界，暹罗海底世界面积虽然不大，但是小而精致的场馆设计，让您能静赏城市一抹蔚蓝之美。-->
                    <!--<br /></div><img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;暹罗海底世界-曼谷-泰国-斑马旅游" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/5809f15663218.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" >                                                                                                        </div>-->
              <!--</div>-->
              <!--<div class="day-img-text">-->
                <!--<div class="trip-content">-->
                  <!--<div class="title f-18-b">行程二选一</div>-->
                  <!--<div class="nicktabs">-->
                    <!--<ul class="clearFix">-->
                      <!--<li class="f-14-b active">-->
                        <!--克里普索人妖秀                                                                </li>-->
                      <!--<li class="f-14-b ">-->
                        <!--大珍珠号烛光晚餐                                                                </li>-->
                    <!--</ul>-->
                  <!--</div>-->
                  <!--<div class="hotel-con">-->
                    <!--<div class="hotel-con-list" >-->
                      <!--<div class="text f-14-g-p">曼谷最奢华最震撼的人妖表演当属【克里普索人妖秀】，它以百老汇的形式呈现出精彩绝伦的演出，同时融合进世界各国的歌舞形式，尽显人妖艺术的妖媚多姿。</div>                                                                                                                                                                                                            <div class="detail-img">-->
                      <!--<div class="swiper-container detail-con-huandeng">-->
                        <!--<div class="swiper-wrapper clearFix swiper-wrapper-hua">-->
                          <!--<div class="swiper-slide img-list"><img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;克里普索人妖秀-曼谷-泰国-斑马旅游 2" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/58872d6ccf6f5.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" ></div>-->
                          <!--<div class="swiper-slide img-list"><img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;克里普索人妖秀-曼谷-泰国-斑马旅游 1" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/58872d69dcf57.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" ></div>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                      <!--<div class="text f-14-g-p">★ 您可在下单时勾选此项升级包，推荐对人妖文化感兴趣的你勾选此项感受别致的魅力。</div>                                                                                                                        </div>-->
                    <!--<div class="hotel-con-list" style="display:none">-->
                      <!--<div class='text f-14-g-p'><p align="center">【简要介绍】</p><p>大珍珠在夜游湄南河的众多游轮中是最豪气的一艘，游轮设计独特，装修高品还有国际化的自助餐！游轮一共三层，一层为室内，二层为室内和船头室外，顶层为露天。顶层会有乐队演奏和泰式舞蹈表演，整个现场气氛非常好哦~如果您喜欢安静，室内也是一个不错的选择！</p></div><img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;湄南河2" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/588732f128fa9.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" class="image"><div class='text f-14-g-p'><p>落地曼谷开始您的自由活动时间，如果时间允许（15:00点从苏梅起飞的航班），也欢迎您选择我们的升级包：大珍珠号夜游湄南河 （行程时间19:00-21:30）</p><p align="center">【行程参考】</p><p>1.登船需要签到，会有欢迎饮料赠送哦~<br>2.享用游船泰式和西式自助晚餐<br>3.免费欣赏现场乐队演奏和泰式舞蹈表演<br><br></p></div>                                                                                                                        </div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="trip-list jumpto-block">-->
              <!--<div class="day-trip">-->
                <!--<div class="day-trip-d1">-->
                  <!--<div class="line"></div>-->
                  <!--<h2 class="day-num" id="trip_jumpto_0">D3</h2>-->
                <!--</div>-->
                <!--<div class="day-trip-d3">-->
                  <!--<div class="day-trip-d3-list clearFix">-->
                    <!--<i class="iconfont1 icon-hangcheng"></i>-->
                    <!--<span class="f-14-m">行程</span>-->
                    <!--<div class="right-text f-14-g-p">曼谷 - 考龙穴 - 赵参兰海滨 - 爱与希望之宫 - 华欣</div>-->
                  <!--</div>-->
                  <!--<div class="day-trip-d3-list clearFix">-->
                    <!--<i class="iconfont1 icon-jiudian"></i>-->
                    <!--<span class="f-14-m">酒店</span>-->
                    <!--<div class="right-text f-14-g-p">华欣安纳塔拉度假酒店（五星） / 华欣希尔顿酒店（五星）（二选一）</div>-->
                  <!--</div>-->
                  <!--<div class="day-trip-d3-list clearFix">-->
                    <!--<i class="iconfont1 icon-yongcan"></i>-->
                    <!--<span class="f-14-m">用餐</span>-->
                    <!--<div class="right-text f-14-g-p">酒店 - 自理 - 自理</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="day-img-text">-->
                <!--<div class="trip-content">-->
                  <!--<div class="title f-18-b">一米阳光在华欣</div>-->
                  <!--<div class="text f-14-g-p">在华欣的第一天，我们的专车将带您前往拷龙穴，期待在群猴围绕中拾级而下，探寻洞穴内的寺庙，看一米阳光如梦惊艳。-->
                    <!--<br /></div>                                                                                                                        <div class="detail-img">-->
                  <!--<div class="swiper-container detail-con-huandeng">-->
                    <!--<div class="swiper-wrapper clearFix swiper-wrapper-hua">-->
                      <!--<div class="swiper-slide img-list">-->
                        <!--<img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;拷龙穴-华欣-泰国-斑马旅游1" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/5809f56a1a0fc.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" >                                                                            </div>-->
                      <!--<div class="swiper-slide img-list">-->
                        <!--<img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;拷龙穴-华欣-泰国-斑马旅游2" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/5809f56a629f1.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" >                                                                            </div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="day-img-text">-->
                <!--<div class="trip-content">-->
                  <!--<div class="title f-18-b">踩在细沙上漫步</div>-->
                  <!--<div class='text f-14-g-p'>赵参兰海滨，这里是泰国人眼中的“贵族海滩”，没有泰国南部海滩的热闹喧嚣，这里更适合聊天散步，踩在白白的细沙上静享安逸。-->
                    <!--<br /></div><img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;赵胜兰海滩-华欣-泰国-斑马旅游.jpe" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/5809f5bd95a57.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" >                                                                                                        </div>-->
              <!--</div>-->
              <!--<div class="day-img-text">-->
                <!--<div class="trip-content">-->
                  <!--<div class="title f-18-b">拉玛六世的浪漫气息</div>-->
                  <!--<div class="text f-14-g-p">这座名为爱与希望之宫的建筑有着诗情画意的名字，也有着动人的爱情故事。这里是拉玛六世与王妃的爱情见证，陶醉于全世界最浪漫的建筑之一，会不会是你此次如梦之旅的心之所向。-->
                    <!--<br /></div>                                                                                                                        <div class="detail-img">-->
                  <!--<div class="swiper-container detail-con-huandeng">-->
                    <!--<div class="swiper-wrapper clearFix swiper-wrapper-hua">-->
                      <!--<div class="swiper-slide img-list">-->
                        <!--<img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;爱与希望之宫-华欣-泰国-斑马旅游1" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/580d86e8aa0bd.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" >                                                                            </div>-->
                      <!--<div class="swiper-slide img-list">-->
                        <!--<img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;爱与希望之宫-华欣-泰国-斑马旅游2" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/5809fbe7cfc3c.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" >                                                                            </div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="day-img-text">-->
                <!--<div class="trip-content">-->
                  <!--<div class="title f-18-b">酒店（二选一）</div>-->
                  <!--<div class="nicktabs">-->
                    <!--<ul class="clearFix">-->
                      <!--<li class="f-14-b active">-->
                        <!--华欣希尔顿酒店（五星）                                                                </li>-->
                      <!--<li class="f-14-b ">-->
                        <!--华欣安纳塔拉度假酒店（五星）                                                                </li>-->
                    <!--</ul>-->
                  <!--</div>-->
                  <!--<div class="hotel-con">-->
                    <!--<div class="hotel-con-list" >-->
                      <!--<div class="text f-14-g-p">华欣希尔顿酒店已成为华欣的地标性建筑，酒店地理位置极佳，客房的落地窗享有壮丽的海景，客人可以俯瞰泰国湾。-->
                        <!--<br /></div>                                                                                                                                                                                                            <div class="detail-img">-->
                      <!--<div class="swiper-container detail-con-huandeng">-->
                        <!--<div class="swiper-wrapper clearFix swiper-wrapper-hua">-->
                          <!--<div class="swiper-slide img-list"><img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;华欣希尔顿" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/5887370312b2a.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" ></div>-->
                          <!--<div class="swiper-slide img-list"><img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;希尔顿酒店-华欣-泰国-斑马旅游1" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/580a035cde24c.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" ></div>-->
                        <!--</div>-->
                      <!--</div>-->
                    <!--</div>-->
                      <!--<div class="text f-14-g-p"><br>★ 您可根据预算与偏好自行选择酒店星级，如遇所选酒店房满，我们将安排您入住同级别酒店【五星酒店备选：华欣都喜天丽酒店(Dusit Thani Hua Hin Hotel)】</div>                                                                                                                        </div>-->
                    <!--<div class="hotel-con-list" style="display:none">-->
                      <!--<div class='text f-14-g-p'>我们特地为您挑选Sailom海鲜餐厅，这里的客房享有海景，并提供当地、亚洲和西方美食。海边的烧烤区还会提供烧烤海鲜美食及现场音乐表演~</div><img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;华欣安娜塔拉度假酒店.pn" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/58c764c3cb5f7.png?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" class="image">                                                                                                                        </div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="trip-list jumpto-block">-->
              <!--<div class="day-trip">-->
                <!--<div class="day-trip-d1">-->
                  <!--<div class="line"></div>-->
                  <!--<h2 class="day-num" id="trip_jumpto_0">D4</h2>-->
                <!--</div>-->
                <!--<div class="day-trip-d3">-->
                  <!--<div class="day-trip-d3-list clearFix">-->
                    <!--<i class="iconfont1 icon-hangcheng"></i>-->
                    <!--<span class="f-14-m">行程</span>-->
                    <!--<div class="right-text f-14-g-p">华欣自由活动（本日无车导服务）</div>-->
                  <!--</div>-->
                  <!--<div class="day-trip-d3-list clearFix">-->
                    <!--<i class="iconfont1 icon-jiudian"></i>-->
                    <!--<span class="f-14-m">酒店</span>-->
                    <!--<div class="right-text f-14-g-p">华欣安纳塔拉度假酒店（五星） / 华欣希尔顿酒店（五星）（二选一）</div>-->
                  <!--</div>-->
                  <!--<div class="day-trip-d3-list clearFix">-->
                    <!--<i class="iconfont1 icon-yongcan"></i>-->
                    <!--<span class="f-14-m">用餐</span>-->
                    <!--<div class="right-text f-14-g-p">酒店 - 自理 - 自理</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="day-img-text">-->
                <!--<div class="trip-content">-->
                  <!--<div class="title f-18-b">一座亦静亦动的小城</div>-->
                  <!--<div class="text f-14-g-p">今天为您安排一天的自由活动时间，您可以自由的感受华欣这座小城的清新与自在，斑长在这里为您推荐以下景点：</div>                                            </div>-->
              <!--</div>-->
              <!--<div class="day-img-text">-->
                <!--<div class="trip-content">-->
                  <!--<div class="title f-18-b">海滨小城的火车站</div>-->
                  <!--<div class='text f-14-g-p'>不同于印象里的鱼龙混杂，华欣的火车站格外的小清新，作为当地的地标性建筑，这里曾是皇家候车室，有着说不出的别致。-->
                    <!--<br /></div><img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;华欣火车站-华欣-泰国-斑马旅游1.jpe" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/5809f8840f8e8.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" >                                                                                                        </div>-->
              <!--</div>-->
              <!--<div class="day-img-text">-->
                <!--<div class="trip-content">-->
                  <!--<div class="title f-18-b">华欣夜市泰逍遥</div>-->
                  <!--<div class='text f-14-g-p'>寻觅华欣美食第一位，这里是不容错过的地方，不仅有各种当地特色小吃摊让你大饱口福，还有许多游乐项目让你在酒足饭饱之后尽情消遣，非常惬意。-->
                    <!--<br /></div><img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;华欣夜市-华欣-泰国-斑马旅游1" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/580a08735bd6f.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" >                                                                                                        </div>-->
              <!--</div>-->
              <!--<div class="day-img-text">-->
                <!--<div class="trip-content">-->
                  <!--<div class="title f-18-b">寻觅往日情怀</div>-->
                  <!--<div class='text f-14-g-p'>你的如梦之旅是否有一抹复古风情？那就来往日情怀怀旧街区看看过去的旧时光吧....-->
                    <!--<br /></div><img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;怀旧街-华欣-泰国-斑马旅游" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/580a0025b5f78.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" >                                                                                                        </div>-->
              <!--</div>-->
              <!--<div class="day-img-text">-->
                <!--<div class="trip-content">-->
                  <!--<div class="title f-18-b">蝉创意周末集市</div>-->
                  <!--<div class="text f-14-g-p">蝉创意周末市集是华欣最有艺术特色的夜市，商品品种多，也有餐饮区，还有露天剧场舞台不定期举办各种活动。周日晚上通常有免费的露天音乐会，在那儿既可以席地而坐，也可以点杯饮料听音乐。-->
                    <!--<br /></div>                                                                                                                        <div class="detail-img">-->
                  <!--<div class="swiper-container detail-con-huandeng">-->
                    <!--<div class="swiper-wrapper clearFix swiper-wrapper-hua">-->
                      <!--<div class="swiper-slide img-list">-->
                        <!--<img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;蝉创意-华欣-泰国-斑马旅游" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/580a00754ffbd.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" >                                                                            </div>-->
                      <!--<div class="swiper-slide img-list">-->
                        <!--<img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;蝉创意-华欣-泰国-斑马旅游1" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/580a0075b949e.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" >                                                                            </div>-->
                    <!--</div>-->
                  <!--</div>-->
                <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="trip-list jumpto-block">-->
              <!--<div class="day-trip">-->
                <!--<div class="day-trip-d1">-->
                  <!--<div class="line"></div>-->
                  <!--<h2 class="day-num" id="trip_jumpto_0">D5</h2>-->
                <!--</div>-->
                <!--<div class="day-trip-d3">-->
                  <!--<div class="day-trip-d3-list clearFix">-->
                    <!--<i class="iconfont1 icon-hangcheng"></i>-->
                    <!--<span class="f-14-m">行程</span>-->
                    <!--<div class="right-text f-14-g-p">华欣 - 圣托里尼公园 - 瑞士小绵羊牧场 - 奥特莱斯 - 曼谷</div>-->
                  <!--</div>-->
                  <!--<div class="day-trip-d3-list clearFix">-->
                    <!--<i class="iconfont1 icon-jiudian"></i>-->
                    <!--<span class="f-14-m">酒店</span>-->
                    <!--<div class="right-text f-14-g-p">宜必思曼谷暹罗酒店（三星） / 曼谷素坤逸希尔顿逸林酒店（五星）（二选一）</div>-->
                  <!--</div>-->
                  <!--<div class="day-trip-d3-list clearFix">-->
                    <!--<i class="iconfont1 icon-yongcan"></i>-->
                    <!--<span class="f-14-m">用餐</span>-->
                    <!--<div class="right-text f-14-g-p">酒店 - 自理 - 自理</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="day-img-text">-->
                <!--<div class="trip-content">-->
                  <!--<div class="title f-18-b">梦幻小希腊</div>-->
                  <!--<div class='text f-14-g-p'>今天的第一站是有着小希腊之称的圣托里尼公园，有着地中海风格的特殊筑和精致的小店，整个画风清新自然，是最适合拍照的主题公园。-->
                    <!--<br /></div><img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;圣托里尼公园-华欣-泰国-斑马旅游" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/5809fe3a7eea1.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" >                                                                                                        </div>-->
              <!--</div>-->
              <!--<div class="day-img-text">-->
                <!--<div class="trip-content">-->
                  <!--<div class="title f-18-b">小瑞士绵羊牧场</div>-->
                  <!--<div class='text f-14-g-p'>华欣适合拍照的地方实在太多，就在小希腊对面还有一个叫做小瑞士绵羊牧场的主题乐园，这里童趣洋溢，大片的草地羊群懒洋洋的漫步，干草垛，小木屋，你能想到的童话场景就在眼前。-->
                    <!--<br /></div><img alt="泰国曼谷+华欣经典版 |  6日5晚私家团&#45;&#45;&#45;&#45;小瑞士-华欣-泰国-斑马旅游1" src="http://7xnvxo.com2.z0.glb.qiniucdn.com/580a08f216cda.jpg?imageMogr2/thumbnail/750x500!/format/jpg/interlace/1/q/70" >                                                                                                        </div>-->
              <!--</div>-->
              <!--<div class="day-img-text">-->
                <!--<div class="trip-content">-->
                  <!--<div class="title f-18-b">在华欣，要拍也要买</div>-->
                  <!--<div class="text f-14-g-p">在华欣的最后一站斑长带你买买买，前往华欣的奥特莱斯，在这里血拼泰实在！-->
                    <!--<br />几天的华欣之行结束，专车将载您返回曼谷，在专车感受夕阳与日落之余，回味这趟如梦之旅。</div>                                            </div>-->
              <!--</div>-->
            <!--</div>-->
            <!--<div class="trip-list jumpto-block">-->
              <!--<div class="day-trip">-->
                <!--<div class="day-trip-d1">-->
                  <!--<div class="line"></div>-->
                  <!--<h2 class="day-num" id="trip_jumpto_0">D6</h2>-->
                <!--</div>-->
                <!--<div class="day-trip-d3">-->
                  <!--<div class="day-trip-d3-list clearFix">-->
                    <!--<i class="iconfont1 icon-hangcheng"></i>-->
                    <!--<span class="f-14-m">行程</span>-->
                    <!--<div class="right-text f-14-g-p">回程</div>-->
                  <!--</div>-->
                  <!--<div class="day-trip-d3-list clearFix">-->
                    <!--<i class="iconfont1 icon-jiudian"></i>-->
                    <!--<span class="f-14-m">酒店</span>-->
                    <!--<div class="right-text f-14-g-p">今日返程，无入住安排</div>-->
                  <!--</div>-->
                  <!--<div class="day-trip-d3-list clearFix">-->
                    <!--<i class="iconfont1 icon-yongcan"></i>-->
                    <!--<span class="f-14-m">用餐</span>-->
                    <!--<div class="right-text f-14-g-p">酒店 - 自理 - 自理</div>-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
              <!--<div class="day-img-text">-->
                <!--<div class="trip-content">-->
                  <!--<div class="title f-18-b">结束精彩之旅</div>-->
                  <!--<div class="text f-14-g-p">今天是您在曼谷的最后一天，如果您的航班时间较晚，可以再自由地感触下这座城市的脉搏：传统泰式文化的绚丽和现代都市的繁华在这里交汇，虔诚的信仰和激情的荷尔蒙在这里碰撞，美食、人文、娱乐……这一次和曼谷的深度接触，希望能让您难忘！<br>(Tips:如航班时间较晚，请在12点前完成退房,行李可寄存酒店前台)</div>                                            </div>-->
              <!--</div>-->
            <!--</div>-->
          </div>
          </div>
          <div class="pro-detail-other">
            <ul class="form-list-info">
              <li class="fysm-btn">
                <a href="http://m.bmtrip.com/index_53.htm###">
                  <div class="left-text f-16-g">费用说明</div>
                  <i class="iconfont1 icon-jiantouyou"></i>
                </a>
              </li>
              <li class="ydxz-btn">
                <a href="http://m.bmtrip.com/index_53.htm###">
                  <div class="left-text f-16-g">预订须知</div>
                  <i class="iconfont1 icon-jiantouyou"></i>
                </a>
              </li>
            </ul>
            <div class="detail-rate">
              <div class="f-24-b biaoti">客户评价</div>
              <div class="rate-box clearFix">
                <div class="rate-left"></div>
                <div class="rate-right">
                  <div class="rate-title-box">
                    <div class="title-box-one clearFix">
                      <span class="text1 f-14-b">36****5571</span>
                      <span class="text2 f-14-g f-14-g-p">2017-02-28</span>
                    </div>
                    <div class="title-box-two f-14-b">泰国曼谷+华欣经典版 |  6日5晚私家团 · 皇室后花园 · 纯净海滨 · 绵羊牧场</div>
                  </div>
                  <div class="rate-content-box f-14-g-p">
                    安排很好 导游很亲切 我们想去的地方都去了 整体感觉很舒适 期待下次选择斑马旅游                                </div>
                  <div class="rate-pic clearFix">
                    <a href="http://m.bmtrip.com/index_53.htm###">
                      <img index="0" class="comment-pic"
                           src="http://7xnvxp.com2.z0.glb.qiniucdn.com/58bd20e26dc16.jpg">
                    </a>
                  </div>
                </div>
              </div>
              <div class="rate-box clearFix">
                <div class="rate-left"></div>
                <div class="rate-right">
                  <div class="rate-title-box">
                    <div class="title-box-one clearFix">
                      <span class="text1 f-14-b">xul****ng</span>
                      <span class="text2 f-14-g f-14-g-p">2017-02-21</span>
                    </div>
                    <div class="title-box-two f-14-b">泰国曼谷+华欣经典版 |  6日5晚私家团 · 皇室后花园 · 纯净海滨 · 绵羊牧场</div>
                  </div>
                  <div class="rate-content-box f-14-g-p">
                    整体安排很休闲，没有任何购物点，给我们一家三口配备了专车专导，一路上玩得很轻松很愉快，除了孩子早餐需要另外自行承担（合同里没提到），总体本次泰国旅游留下了美好的印象！                                </div>
                </div>
              </div>
              <div class="rate-box clearFix">
                <div class="rate-left"></div>
                <div class="rate-right">
                  <div class="rate-title-box">
                    <div class="title-box-one clearFix">
                      <span class="text1 f-14-b">255****556</span>
                      <span class="text2 f-14-g f-14-g-p">2017-02-03</span>
                    </div>
                    <div class="title-box-two f-14-b">泰国曼谷+华欣经典版 |  6日5晚私家团 · 皇室后花园 · 纯净海滨 · 绵羊牧场</div>
                  </div>
                  <div class="rate-content-box f-14-g-p">
                    虽然带家人出游压力较大，但行程松紧适度，导游也很随和可靠，很舒服的旅行。                                </div>
                </div>
              </div>
              <ul class="form-list-info">
                <li class="khpj-btn">
                  <!--<a href="http://m.bmtrip.com/index_53.htm###">-->
                    <!--<div class="left-text f-16-g">查看全部评价</div>-->
                    <!--<i class="iconfont1 icon-jiantouyou"></i>-->
                  <!--</a>-->
                  <span class="text comment-num">8条</span>
                </li>

              </ul>
            </div>
            <!--<div class="detail-interest">-->
              <!--<div class="f-16-g title">你可能也感兴趣</div>-->
              <!--<div class="swiper-container detail-con-huandeng" style="height:23rem;">-->
                <!--<div class="swiper-wrapper swiper-wrapper-hua">-->
                  <!--<a class="swiper-slide pro-list" href="http://m.bmtrip.com/index_45.htm">-->
                    <!--<img src="http://7xnvxo.com2.z0.glb.qiniucdn.com/58b6c59816edf.jpg?imageView2/5/w/900/h/600|imageMogr2/thumbnail/900x600!/format/jpg/interlace/1/q/75">-->
                    <!--<div class="list-text">-->
                      <!--<div class="first-title f-16-b">泰国普吉岛+皇帝岛深度游 | 7天5晚私家团</div>-->
                      <!--<div class="sub-title f-14-g">皇帝岛蜜月 · 泳池别墅 · 人气火锅 · SPA</div>-->
                    <!--</div>-->
                    <!--<div class="list-price"><span class="price-bs">¥</span>5562</div>-->
                  <!--</a>-->
                  <!--<a class="swiper-slide pro-list" href="http://m.bmtrip.com/index_46.htm">-->
                    <!--<img src="http://7xnvxo.com2.z0.glb.qiniucdn.com/58c79f485555b.jpg?imageView2/5/w/900/h/600|imageMogr2/thumbnail/900x600!/format/jpg/interlace/1/q/75">-->
                    <!--<div class="list-text">-->
                      <!--<div class="first-title f-16-b">【泼水节】泰国清迈+普吉经典游 | 6日5晚私家团</div>-->
                      <!--<div class="sub-title f-14-g">古城狂欢 · 芭东风情 · 海岛环游</div>-->
                    <!--</div>-->
                    <!--<div class="list-price"><span class="price-bs">¥</span>4937</div>-->
                  <!--</a>-->
                  <!--<a class="swiper-slide pro-list" href="http://m.bmtrip.com/index_47.htm">-->
                    <!--<img src="http://7xnvxo.com2.z0.glb.qiniucdn.com/58c103310c58b.jpg?imageView2/5/w/900/h/600|imageMogr2/thumbnail/900x600!/format/jpg/interlace/1/q/75">-->
                    <!--<div class="list-text">-->
                      <!--<div class="first-title f-16-b">泰国曼谷 | 5天4晚私家团</div>-->
                      <!--<div class="sub-title f-14-g">曼谷深度游 · 水上市场 · 大城探秘</div>-->
                    <!--</div>-->
                    <!--<div class="list-price"><span class="price-bs">¥</span>2999</div>-->
                  <!--</a>-->
                  <!--<a class="swiper-slide pro-list" href="http://m.bmtrip.com/index_49.htm">-->
                    <!--<img src="http://7xnvxo.com2.z0.glb.qiniucdn.com/58bf695be1c05.png?imageView2/5/w/900/h/600|imageMogr2/thumbnail/900x600!/format/jpg/interlace/1/q/75">-->
                    <!--<div class="list-text">-->
                      <!--<div class="first-title f-16-b">泰国曼谷+芭提雅经典 | 6天5晚私家团</div>-->
                      <!--<div class="sub-title f-14-g">泰式风情 · 真理寺骑象 · 奢享悦榕庄</div>-->
                    <!--</div>-->
                    <!--<div class="list-price"><span class="price-bs">¥</span>3671</div>-->
                  <!--</a>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          </div>
          <!--<div class="detail-footer">-->
            <!--<div class="left">-->
              <!--<i class="iconfont1 icon-kefu"></i>-->
              <!--<div class="text">客服</div>-->
            <!--</div>-->
            <!--<div class="middle">-->
              <!--<div class="f-12-g text1">-->
                <!--<span class="f-16-m">¥ 4126</span>/人-->
              <!--</div>-->
              <!--<div class="f-12-g text2">4人同行价</div>-->
            <!--</div>-->
            <!--<div class="dinggou-btn">选择日期</div>-->
          <!--</div>-->
          <i class="iconfont1 icon-huidaodingbu scro-top-btn"></i>
        </div>
      </div>
    </div>
</template>

<script type="text/ecmascript-6">
  import {BaseUrltest1} from 'src/common/js/base.js';
  import Swiper from '../../../static/swiper.min.js';
  import loading from 'components/loading/loading.vue';
export default {
  data() {
  return {
    product: [],
    pdrcommad: '',
    imgs: [],
    isLoading: true
  };
},
created() {
  let jsondata = this.$route.params;
  this.$http.get(BaseUrltest1() + '?msg=product' + '&XDEBUG_SESSION_START=14526&id=' + jsondata.id).then(response => {
    this.product = response.body;
    if (this.product.elected) {
      this.pdrcommad = this.product.elected.split('<br>');
    };
    this.imgs = this.product.img;
    this.isLoading = false;
  }, response => {
    // error callback
  });
},
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('');
    }
  },
  updated () {
    var mySwiper = new Swiper('.pro-detail-huandeng', {
      autoplay: 1000,
      slidesPerView: 'auto',
      initialSlide: 1
    });
    mySwiper.observer = true;
  },
  components: {
    loading
  }
};
</script>

<style>
  @import "../../common/css/iconfont.css";
  @import "place-order.css";
  @import "../../common/css/public.css";
</style>
