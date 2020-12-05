<template>
  <div>
    <!--  轮播图 -->
    <el-carousel :interval="2000" type="card" height="450px">
      <el-carousel-item v-for="(img, index) in LBimgList" :key="index">
        <el-row>
          <el-col :span="24">
            <img v-bind:src="img.url" />
          </el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
    <!-- 导航栏 -->
    <el-menu
      mode="horizontal"
      background-color=" rgb(51,50,64)"
      class="navTwo"
      active-text-color="#1dd1a1"
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
    }
  },
  methods: {},
}
</script>
<style scoped>
.el-carousel {
  background-color: rgb(51, 50, 64);
}
.el-carousel-item {
  padding-top: 20px;
}
.navTwo {
  padding-left: 165px;
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
</style>
