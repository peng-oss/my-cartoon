<template>
  <div>
    <!--  轮播图 -->
    <el-carousel :interval="2000" type="card" height="450px">
      <el-carousel-item v-for="(img, index) in imgList" :key="index">
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
      text-color="hsl(0, 0%, 100%)"
    >
      <el-menu-item index="1">恋爱</el-menu-item>
      <el-menu-item index="2">强剧情</el-menu-item>
      <el-menu-item index="3">古风</el-menu-item>
      <el-menu-item index="4">校园</el-menu-item>
      <el-menu-item index="5">奇幻</el-menu-item>
      <el-menu-item index="6">唯美</el-menu-item>
      <el-menu-item index="7">热血</el-menu-item>
      <el-menu-item index="8">日漫</el-menu-item>
      <el-menu-item index="9">韩漫</el-menu-item>
      <el-menu-item index="10">大女主</el-menu-item>
      <el-menu-item index="11">完结</el-menu-item>
      <el-menu-item index="12">穿越</el-menu-item>
      <el-menu-item index="13">萌系</el-menu-item>
      <el-menu-item index="14">灵异</el-menu-item>
      <el-menu-item index="15"
        >全部<i class="el-icon-s-unfold"></i
      ></el-menu-item>
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
        <li v-for="item in originalImgList" :key="item.id" >
          <el-image
            style="width: 184px; height: 224px"
            :src="item.url"
          ></el-image>
          <div>
            <span>{{ item.bookName }}</span>
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
      imgList: [
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
  display:flex;
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
.originalBooks li{
    margin-right:16px ;
     float: left;
     
}
.originalBooks li:nth-child(6){
  margin-right:0  !important
}
</style>
