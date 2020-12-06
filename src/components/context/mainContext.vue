<template>
  <div>
    <!--  轮播图 -->
    <el-carousel :interval="2000" type="card" height="450px">
      <el-carousel-item v-for="(img, index) in LBimgList" :key="index">
        <el-row>
          <el-col :span="24">
            <el-image
              style="width: 850px; height: 486px"
              :src="img.url"
            ></el-image>
          </el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
    <!-- 导航栏 -->
    <el-menu
      mode="horizontal"
      background-color="#202020"
      class="navTwo"
      active-text-color="#1dd1a1"
      text-color="#c1c1c1"
    >
      <el-menu-item
        v-for="(item, index) in cartoonTypeList"
        :index="item.index"
        :key="item.id"
        >{{ item.typeName }}</el-menu-item
      >
    </el-menu>
    <!--  内容--原创专区 -->
    <el-card shadow="never" class="original">
      <el-row class="Design">
        <h1 class="originalDesign">原创投稿</h1>
        <span class="edit">编辑推荐</span>
        <span class="new">最新上架</span>
        <div class="more"><a href="#">更多</a></div>
      </el-row>

      <ul class="originalBooks">
        <li v-for="item in originalImgList" :key="item.id">
          <a href="javascript:;"
            ><el-image
              style="width: 184px; height: 224px"
              :src="item.url"
            ></el-image
          ></a>
          <div>
            <span>{{ item.bookName }}</span>
          </div>
        </li>
      </ul>
    </el-card>
    <!--  悬疑漫画部分 -->
    <el-card class="suspense" :body-style="{ padding: '0px' }" shadow="never">
      <p class="suspense-title">眉头一皱，发现事情并不简单！</p>
      <ul class="suspense-content">
        <li :key="item.id" v-for="item in suspenseImgsList">
          <a href="javascript:;"
            ><el-image
              style="width: 184px; height: 224px"
              :src="item.src"
            ></el-image
          ></a>
          <div class="bookName">
            <span>{{ item.bookName }}</span>
          </div>
          <div class="suspenseAuthor">
            <span>{{ item.suspenseAuthor }}</span>
          </div>
        </li>
      </ul>
    </el-card>
    <!--  上头部分 -->
    <el-card
      class="toheadAndlist"
      :body-style="{ padding: '0px' }"
      shadow="never"
    >
      <div class="toheadAndlistbig">
        <!--  这个漫画令我上头 -->
        <div class="tohead">
          <p class="suspense-title">这漫画令我上头</p>
          <ul class="toHead-content">
            <li :key="item.id" v-for="item in toHeadImgsList">
              <a href="javascript:;"
                ><el-image
                  style="width: 150px; height: 200px"
                  :src="item.src"
                ></el-image
              ></a>
              <div class="bookName">
                <span>{{ item.bookName }}</span>
              </div>
              <div class="suspenseAuthor">
                <span>{{ item.ToheadAuthor }}</span>
              </div>
            </li>
          </ul>
        </div>
        <!--  国漫榜 -->
        <div class="RankingList">
          <span><h1>国漫榜</h1></span>
          <div class="popularityList">
            <div class="list">
              <div class="hovers">
                <div class="leftFl">
                  <a href="#"
                    ><img
                      src="https://tn1-f2.kkmh.com/image/190802/fmXsWW7tI.webp-t.w120.webp.h"
                      alt=""
                  /></a>
                  <i class="hoversI">1</i>
                </div>
                <div class="rightFr">
                  <div class="title">
                    <a href="#">再度与你</a>
                  </div>
                  <div class="labelListCls">
                    <span class="fl">日常</span>
                    <span class="fl">恋爱</span>
                    <span class="fl">治愈</span>
                  </div>
                  <div class="depict">
                    <span class="dec"
                      >高中时因误会相互错过的两人，在大学毕业后重回高中母校任教。...</span
                    >
                  </div>
                  <a href="#" class="chapter">
                    <span class="LFl">更新至：</span>
                    <span class="RFl">第61话 两个麻烦</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="list" v-for="(item,index) in popularityLists" :key="index">
              <div
                class="textBox"
              >
                <div class="leftText">
                  <strong class="leftTextFl" style="color: rgb(245, 166, 35);"
                    >{{item.id}}</strong
                  >
                  <span class="titleFl">
                    {{item.title}}
                  </span>
                </div>
                <div class="rightText">
                  <span class="rightText1">
                    更新至
                  </span>
                  <span class="rightText2">
                 {{item.dated}}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-card>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      LBimgList: [
        { url: require('./Lp/1.jpg') },
        { url: require('./Lp/2.jpg') },
        { url: require('./Lp/3.jpg') },
        { url: require('./Lp/4.jpg') },
        { url: require('./Lp/5.jpg') },
        { url: require('./Lp/7.jpg') },
      ],
      originalImgList: [
        {
          id: 1,
          url:
            'https://tn1-f2.kkmh.com/image/201009/OvEtlOWSI.webp-t.w207.webp.h',
          bookName: '透过指尖的光',
        },
        {
          id: 2,
          url:
            'https://tn1-f2.kkmh.com/image/201009/rUPqEUSEW.webp-t.w207.webp.h',
          bookName: '改行吧魔法师',
        },
        {
          id: 3,
          url:
            'https://tn1-f2.kkmh.com/image/190709/1BqbnrIPh.webp-t.w207.webp.h',
          bookName: '特别恋爱关系',
        },
        {
          id: 4,
          url:
            'https://tn1-f2.kkmh.com/image/201009/uOHhIOdju.webp-t.w207.webp.h',
          bookName: '三界制',
        },
        {
          id: 5,
          url:
            'https://tn1-f2.kkmh.com/image/200815/zwZFKoZdL.webp-t.w207.webp.h',
          bookName: '愤怒的撒切尔',
        },
        {
          id: 6,
          url:
            'https://tn1-f2.kkmh.com/image/200930/vizYZuhff.webp-t.w207.webp.h',
          bookName: '浮游梦',
        },
      ],
      suspenseImgsList: [
        {
          id: 1,
          src:
            'https://tn1-f2.kkmh.com/image/200430/khhhTiBkP.webp-t.w207.webp.h',
          bookName: '强者永生',
          suspenseAuthor: 'JAY KUN',
        },
        {
          id: 2,
          src:
            'https://tn1-f2.kkmh.com/image/200110/cfXUZbqaK.webp-t.w207.webp.h',
          bookName: '须弥千愿卷',
          suspenseAuthor: '奥兹（主笔）+加缪（编剧）',
        },
        {
          id: 3,
          src:
            'https://tn1-f2.kkmh.com/image/200109/nzequoNNC.webp-t.w207.webp.h',
          bookName: '神泽',
          suspenseAuthor: 'Djade(主笔）+KRE（编剧）',
        },
        {
          id: 4,
          src:
            'https://tn1-f2.kkmh.com/image/170123/33h3huvuw.webp-t.w207.webp.h',
          bookName: '反转现实',
          suspenseAuthor: '天极焉加+快看漫画团队',
        },
        {
          id: 5,
          src:
            'https://tn1-f2.kkmh.com/image/200417/TdrJAkUsh.webp-t.w207.webp.h',
          bookName: '唐人街小先生',
          suspenseAuthor: '三老爷',
        },
        {
          id: 6,
          src:
            'https://tn1-f2.kkmh.com/image/190627/7ca0LRvVk.webp-t.w207.webp.h',
          bookName: '灵烛少女',
          suspenseAuthor: 'leu',
        },
        {
          id: 7,
          src:
            'https://tn1-f2.kkmh.com/image/190118/7wFkUEjHk.webp-t.w207.webp.h ',
          bookName: '傀园',
          suspenseAuthor: 'BING',
        },
        {
          id: 8,
          src:
            'https://tn1-f2.kkmh.com/image/191130/lDyEeKoWS.webp-t.w207.webp.h',
          bookName: '看见禽兽的声音',
          suspenseAuthor: '好饭+新果十二三',
        },
        {
          id: 9,
          src:
            ' https://tn1-f2.kkmh.com/image/180705/Z8fSi2plu.webp-t.w207.webp.h',
          bookName: '狼的谎言',
          suspenseAuthor: '金丘（主笔）+谨斯里（编剧）',
        },
        {
          id: 10,
          src:
            ' https://tn1-f2.kkmh.com/image/170922/43h4885wg.webp-t.w207.webp.h',
          bookName: '第二模式',
          suspenseAuthor: '幽·灵',
        },
        {
          id: 11,
          src:
            'https://tn1-f2.kkmh.com/image/180706/K3O0ERxy5.webp-t.w207.webp.h',
          bookName: '人类进化论',
          suspenseAuthor: '祝耕夫',
        },
        {
          id: 12,
          src:
            ' https://tn1-f2.kkmh.com/image/200327/AmfqfPkOh.webp-t.w207.webp.h',
          bookName: '未来航班',
          suspenseAuthor: '非人哉工作室',
        },
      ],
      cartoonTypeList: [
        {
          id: 1,
          typeName: '恋爱',
        },
        {
          id: 2,
          typeName: '强剧情',
        },
        {
          id: 3,
          typeName: '古风',
        },
        {
          id: 4,
          typeName: '校园',
        },
        {
          id: 5,
          typeName: '奇幻',
        },
        {
          id: 6,
          typeName: '唯美',
        },
        {
          id: 7,
          typeName: '热血',
        },
        {
          id: 8,
          typeName: '日漫',
        },
        {
          id: 9,
          typeName: '韩漫',
        },
        {
          id: 10,
          typeName: '大女主',
        },
        {
          id: 11,
          typeName: '韩漫',
        },
        {
          id: 12,
          typeName: '完结',
        },
        {
          id: 13,
          typeName: '穿越',
        },
        {
          id: 14,
          typeName: '萌系',
        },
        {
          id: 15,
          typeName: '灵异',
        },
        {
          id: 16,
          typeName: '全部',
        },
      ],
      toHeadImgsList: [
        {
          id: 1,
          src:
            'https://tn1-f2.kkmh.com/image/200814/QNRIXWFQq.webp-t.w180.webp.h',
          bookName: '步天歌',
          ToheadAuthor: '夏达',
        },
        {
          id: 2,
          src:
            'https://tn1-f2.kkmh.com/image/191025/HbtCpvYqz.webp-t.w180.webp.h',
          bookName: '桃与末世之书',
          ToheadAuthor: '晨曦',
        },
        {
          id: 3,
          src:
            'https://tn1-f2.kkmh.com/image/200303/hWCVwjEfc.webp-t.w180.webp.h',
          bookName: '刀鞘的孩子',
          ToheadAuthor: ' Kyungil Yang（主笔）',
        },
        {
          id: 4,
          src:
            'https://tn1-f2.kkmh.com/image/200727/edEjPcrEp.webp-t.w180.webp.h',
          bookName: '我独自升级',
          ToheadAuthor: 'DUBU(主笔)',
        },
        {
          id: 5,
          src:
            'https://tn1-f2.kkmh.com/image/200714/juxCCvnxK.webp-t.w180.webp.h',
          bookName: '谷围南亭',
          ToheadAuthor: '墨飞',
        },
        {
          id: 6,
          src:
            'https://tn1-f2.kkmh.com/image/181025/4diVYyMUJ.webp-t.w180.webp.h',
          bookName: '蝉女',
          ToheadAuthor: '宫缘乾 ',
        },
        {
          id: 7,
          src:
            'https://tn1-f2.kkmh.com/image/200109/RZbXGSASA.webp-t.w180.webp.h',
          bookName: '第N次恋爱',
          ToheadAuthor: ' 栗路 ',
        },
        {
          id: 8,
          src:
            'https://tn1-f2.kkmh.com/image/200202/thKbsYdzJ.webp-t.w180.webp.h',
          bookName: '万能恋爱杂货店',
          ToheadAuthor: ' 鲤鱼丸一 ',
        },
        {
          id: 9,
          src:
            'https://tn1-f2.kkmh.com/image/191011/bAcCyBfCx.webp-t.w180.webp.h',
          bookName: '欺星客栈',
          ToheadAuthor: '抽纸小jin ',
        },
        {
          id: 10,
          src:
            'https://tn1-f2.kkmh.com/image/171201/wd4irlrb9.webp-t.w180.webp.h',
          bookName: '魔道祖师',
          ToheadAuthor: '墨香铜臭（原著）',
        },
      ],
      popularityLists:[
        {
          id:2,title:'爱情的样子：心之所向',
          dated:'第18话  心动不自知'
        },
        {
          id:3,title:'八十一道超纲题',
          dated:'第69话 新副本又将来临'
        },
        {
          id:4,title:'FOG[电竞]',
          dated:'第2话 重逢'
        },
        {
          id:5,title:'星辰于我',
          dated:'第18话 星星的夜空'
        },
        {
          id:6,title:'怪奇实录',
          dated:'第334话  人头蜂巢'
        },
        {
          id:7,title:'超能立方',
          dated:'第196话  交易的艺术'
        },
        {
          id:8,title:'非友人关系',
          dated:'第18话  心动不自知'
        },
        {
          id:9,title:'他那么撩',
          dated:'后记（下）好久不见'
        },
        {
          id:10,title:'不可爱的TA',
          dated:'第9话  让他的眼里只...'
        },
      ],
      loveheadlist:[
        {
          id:1,name:'恋爱'
        },
        {
          id:2,name:'强剧情'
        },
        {
          id:3,name:'古风'
        },
        {
          id:4,name:'校园'
        },
        {
          id:5,name:'奇幻'
        },
        {
          id:6,name:'唯美'
        },
      ]
      
    
    }
  },
  methods: {
   
  },
}
</script>
<style scoped>
/* 轮播图于原创部分 */
.el-carousel {
  background-color: #202020;

}

.navTwo {
  display:flex;
  justify-content: center;
}

.el-carousel__item {
  width: 100%;
  display: flex;
  align-items: center;
}
.img {
  max-width: 100%;
  max-height: 100%;
}

.originalDesign {
  margin: 0;
  line-height: 32px;
  font-size: 24px;
}
.more {
  border: 1px soild hsl(228, 4%, 55%);
}
.Design {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 1184px;
  margin-bottom: 20px;
}
.new {
  margin-left: 31px;
  margin-right: auto;
}
.original {
  margin-top: 30px;
  margin-left: 0;
  display: flex;
  justify-content: center;
}
.edit {
  margin-left: 31px;
  color: hsl(37, 91%, 55%);
}

.el-card__body {
  width: 200px !important;
  height: 289px !important;
}
.originalBooks {
  width: 1184px;
}
.originalBooks li {
  margin-right: 16px;
  float: left;
}
.originalBooks li:nth-child(6) {
  margin-right: 0 !important;
}
/* 悬疑部分 */
.suspense {
  /* background-color: pink; */
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 730px;
  margin-left: 0;
}
.suspense-title {
  margin-bottom: 0;
  font-size: 25px;
  /* margin-left: 70px; */
}
.suspense-content {
  width: 1184px;
  margin: 0;
  padding: 0;
  /* margin-left: 70px; */
}
.suspense-content li {
  list-style: none;
  float: left;
  padding-right: 16px;
  padding-top: 16px;
}
.suspense-content li:nth-child(6n) {
  padding-right: 0;
}
.suspenseAuthor {
  font-size: 12px;
  color: #c4b599;
}
/* 上头部分 */
.toHead-content {
  width: 800px;
  margin: 0;
  padding: 0;
}
.toHead-content li {
  list-style: none;
  float: left;
  padding-right: 10px;
  padding-top: 16px;
}
.tohead {
  width: 800px;
  float: left;
}
.toheadAndlist {
  display: flex;
  justify-content: center;
  align-content: center;
  overflow: hidden;
  height: 730px;
  margin-left: 0;
  margin: 0 !important;
  padding: 0 !important;
}

.toheadAndlistbig {
  width: 1184px;
}
/* 国漫榜 */
.RankingList {
  width: 356px;
  float: right;
}
.list {
  margin-bottom: 17px;
}
.hovers {
  width: 356px;
  height: 167px;
}
.rightFr {
  float: right;
  padding-left: 12px;
  width: 224px;
}
.leftFl {
  width: 120px;
  height: 162px;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden;
  float: left;
  position: relative;
}
.labelListCls {
  padding: 6px 0;
  overflow: hidden;
}
.fl {
  padding-right: 10px;
  line-height: 20px;
}
.dec {
  width: 224px;
  height: 40px;
  line-height: 20px;
  font-size: 14px;
  color: #999999;
  cursor: default;
}
.chapter {
  display: block;
  padding-top: 16px;
}
.LFl {
  float: left;
  line-height: 20px;
  font-size: 14px;
}
.RFl {
  float: right;
  width: 168px;
  line-height: 20px;
  font-size: 14px;
  color: #f56c6c;
  overflow: hidden;
}
.textBox {
  max-width: 356px;
  width: 356px;
  display: block;
  height: 20px;
}
.leftTextFl {
  width: 10px;
  line-height: 20px;
  padding-right: 11px;
  font-size: 16px;
  font-weight: normal;
  float: left;
}
.titleFl {
  float: left;
  display: block;
  line-height: 20px;
  max-width: 112px;
  font-size: 14px;
  color: #333333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.rightText {
  height: 20px;
  line-height: 20px;
  float: right;
}
.rightText1 {
  line-height: 20px;
  font-size: 14px;
  color: #999999;
  float: left;
}
.rightText2 {
  display: block;
  line-height: 20px;
  margin-left: 4px;
  max-width: 145px;
  font-size: 14px;
  color: #f56c6c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.hoversI {
  display: block;
  position: absolute;
  width: 26px;
  height: 26px;
  line-height: 26px;
  top: 0;
  left: 0;
  background: #f5a623;
  border-bottom-right-radius: 4px;
  font-size: 18px;
  color: #fff;
  font-style: normal;
  text-align: center;
}

</style>
