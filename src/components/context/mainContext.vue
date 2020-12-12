<template>
  <div>
    <!--  轮播图 -->
    <el-carousel :interval="1000" type="card" height="520px">
      <el-carousel-item v-for="(img, index) in LBimgList" :key="index">
        <el-image
          style="width: 800px; height: 560px"
          :src="img.url"
          @click="enterWorks(index)"
        ></el-image>
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
        v-for="item in cartoonTypeList"
        :index="item.index"
        :key="item.id"
        @click="tosort"
        >{{ item.typeName }}</el-menu-item
      >
    </el-menu>
    <!--  内容--原创专区 -->
    <el-card shadow="never" class="original">
      <el-row class="Design">
        <h1 class="originalDesign">原创投稿</h1>
        <span class="edit">编辑推荐</span>
        <span class="new">最新上架</span>
        <div class="more"><a href="javascript:;" @click="tosort">更多</a></div>
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
    <!--  上头部分 -->
    <el-card
      class="toheadAndlist"
      :body-style="{ padding: '0px' }"
      shadow="never"
    >
      <div class="toheadAndlistbig">
        <!--  这个漫画令我上头 -->
        <div class="tohead">
          <h1 class="suspense-title">这漫画令我上头</h1>
          <ul class="toHead-content">
            <li :key="item.id" v-for="item in toHeadImgsList">
              <a href="javascript:;" class="ToheadImgFather"
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
            <div
              class="list"
              v-for="(item, index) in popularityLists"
              :key="index"
            >
              <div class="textBox">
                <div class="leftText">
                  <strong class="leftTextFl" style="color: rgb(245, 166, 35)">{{
                    item.id
                  }}</strong>
                  <span class="titleFl">
                    {{ item.title }}
                  </span>
                </div>
                <div class="rightText">
                  <span class="rightText1"> 更新至 </span>
                  <span class="rightText2">
                    {{ item.dated }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </el-card>
    <!-- 漫改区域 -->
    <div class="cartoonChange">
      <h3>这部漫改作品超厉害！</h3>
      <ul class="changeContent">
        <li :key="item.id" v-for="item in cartoonChangeImgsList">
          <a href="#">
            <el-image
              style="width: 284px; height: 375px"
              :src="item.src"
            ></el-image>
            <div class="bottomContent">
              <div class="changeTitle">{{ item.bookName }}</div>
              <p class="intr">
                {{ item.description }}
              </p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <!-- 新作榜和飙升榜 -->
    <el-card
      class="newWork"
      :body-style="{ padding: '0px' }"
      :class="{ redBgc: redActive, greenBgc: greenActive }"
    >
      <!-- 标题导航栏 -->
      <div class="newWorkTitle">
        <span :class="{ listActive: newActive }" @click="newChange"
          >新作榜</span
        >
        <span :class="{ listActive: riseActive }" @click="riseChange"
          >飙升榜</span
        >
        <a href="javascript:;" class="moreList" @click="tosort">更多榜单</a>
      </div>
      <!-- 新作榜和飙升榜图片区域 -->
      <ul class="newWorkImgs">
        <li :key="item.id" v-for="item in showImgsList">
          <a href="javascript:;" class="imgandp">
            <el-image
              style="width: 180px; height: 180px"
              :src="item.src"
            ></el-image>
            <div class="imgBox">
              <p>
                <span>{{ item.top }}</span
                ><i>{{ item.rank }}</i>
              </p>
              <p>{{ item.bookName }}</p>
              <p>{{ item.author }}</p>
              <p>{{ item.description }}</p>
            </div>
          </a>
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
      // 轮播图图片
      LBimgList: [],
      originalImgList: [],
      suspenseImgsList: [],
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
      // 新作榜图片
      newWorkImgsList: [],
      // 飙升榜图片
      riseWorkImgsList: [],
      // 新作榜飙升榜展示图片
      showImgsList: [],
      newActive: true,
      riseActive: false,
      redActive: true,
      greenActive: false,
      // 漫改图片
      cartoonChangeImgsList: [],
      // 上头图片
      toHeadImgsList: [],
      // 上头图片右边排行榜
      popularityLists: [],
      activeName: 'second',
    }
  },
  methods: {
    // 新作榜事件
    newChange() {
      this.newActive = true
      this.riseActive = !this.newActive
      this.redActive = true
      this.greenActive = !this.redActive
      this.showImgsList = this.newWorkImgsList
    },
    // 飙升榜事件
    riseChange() {
      this.riseActive = true
      this.newActive = !this.riseActive
      this.greenActive = true
      this.redActive = !this.greenActive
      this.showImgsList = this.riseWorkImgsList
    },
    // 获取所有图片及数据来源
    async getAllImgs() {
      const { data: res } = await this.$http.get('/all/getAll')
      if (res.status !== 200) return this.$message.error('获取数据失败')
      this.LBimgList = res.LBimgList
      this.originalImgList = res.originalImgList
      this.suspenseImgsList = res.suspenseImgsList
      this.newWorkImgsList = res.newWorkImgsList
      this.riseWorkImgsList = res.riseWorkImgsList
      this.cartoonChangeImgsList = res.cartoonChangeImgsList
      this.toHeadImgsList = res.toHeadImgsList
      this.popularityLists = res.ToheadpopularityLists

      this.showImgsList = this.newWorkImgsList
    },
    enterWorks(index) {
      if (index == 0) {
        this.$router.push('/works')
        this.$store.state.currentId=5
      }
    },
    tosort(){
      this.$router.push('/sort')
      this.$store.state.currentId=2
    }
  },
  // 生命周期触发开始的事件
  created() {
    this.getAllImgs()
  },
}
</script>
<style scoped>
/* 轮播图于原创部分 */
.el-carousel__arrow--left {
  width: 70px !important;
  height: 70px !important;
}
.el-carousel {
  background-color: #202020;
  position: relative;
}
.navTwo {
  display: flex;
  justify-content: center;
}
.el-carousel__item {
  /*  width: 100%; */
  display: flex;
  align-items: center;
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
  cursor: pointer;
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
  cursor: pointer;
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
  box-shadow: 0px 1px 4px #ccc;
  border-radius: 4px;
  transition: all 0.2s linear;
}
.originalBooks li:hover {
  box-shadow: 8px 8px 20px #ccc;
  transform: translate(0, -5px);
}
.originalBooks li:nth-child(6) {
  margin-right: 0 !important;
}
/* 漫改区域 */
.cartoonChange {
  height: 560px;
  /* background-color: pink; */
  width: 1184px;
  margin: 0 auto;
  box-sizing: border-box;
}
.cartoonChange h3 {
  line-height: 32px;
  color: #333333;
  font-size: 24px;
  font-weight: normal;
  margin: 0px;
  margin-top: 24px;
}
.changeContent li {
  float: left;
  width: 284px;
  height: 488px;
  margin-top: 16px;
  margin-right: 16px;
  box-shadow: 0px 1px 4px #ccc;
  border-radius: 4px;
  transition: all 0.2s linear;
}
.changeContent li:hover {
  box-shadow: 8px 8px 20px #ccc;
  transform: translate(0, -5px);
}
.changeContent li:nth-child(4) {
  margin-right: 0 !important;
}
.bottomContent {
  width: 284px;
  height: 108px;
  background-color: #fff;
  padding: 12px 12px 16px;
  box-sizing: border-box;
}
.bottomContent .changeTitle {
  height: 28px;
  line-height: 28px;
  font-family: PingFangSC-Medium;
  font-size: 20px;
  color: #4f4f53;
}
.bottomContent .intr {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
/* 新作榜和飙升榜 */
.newWork {
  margin: 30px -1px;
  height: 704px;
  display: flex;
  justify-content: center;
}
.redBgc {
  background: -webkit-linear-gradient(top, #7c1818, #3f1d1c);
}
.greenBgc {
  background: -webkit-linear-gradient(top, #225536, #1f2e27);
}
.newWorkTitle {
  width: 1184px;
  margin-top: 32px;
  position: relative;
  margin-bottom: 10px;
}
.newWorkTitle span {
  font-size: 24px;
  color: #fff;
  opacity: 0.8;
  margin: 0 42px 0 0;
  cursor: pointer;
}
.moreList {
  position: absolute;
  right: 0;
  display: inline-block;
  margin-top: 5px;
  height: 30px;
  line-height: 30px;
  width: 83px;
  text-align: center;
  border: 1px solid #adaaaa;
  border-radius: 2px;
  font-weight: lighter;
  font-size: 16px;
  color: #efeeee;
  cursor: pointer;
}
.moreList:hover {
  border: 1px solid#d3bbbb;
  color: #d3bbbb;
}
.listActive {
  font-size: 30px !important;
  opacity: 1 !important;
  font-weight: normal !important;
}
.newWorkImgs li {
  float: left;
}
.newWorkImgs {
  width: 1184px;
}
.imgandp {
  display: inline-block;
  width: 384px;
  height: 180px;
  margin: 16px 16px 0 0;
}
li:nth-of-type(3n) .imgandp {
  margin-right: 0 !important;
}
.imgBox {
  float: right;
  height: 180px;
  width: 204px;
  color: #fff;
  background: rgba(0, 0, 0, 0.2);
}
.imgBox p:nth-child(1) {
  display: inline-block;
  width: 180px;
  height: 40px;
  margin: 0;
  padding-top: 18px;
  box-sizing: border-box;
}
.imgBox p:nth-child(1) span {
  display: inline-block;
  width: 66px;
  height: 22px;
  background-color: #ffd806;
  border-radius: 5px;
  color: #000;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  margin-left: 10px;
}
.imgBox p:nth-child(1) i {
  display: inline-block;
  color: #d2c5c5;
  margin-left: 20px;
}
.imgBox p:nth-child(2) {
  margin: 0;
  margin-left: 10px;
  margin-top: 5px;
  font-size: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.imgBox p:nth-child(3) {
  margin: 0;
  margin-left: 10px;
  color: #d2c5c5;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.imgBox p:nth-child(4) {
  margin: 0;
  margin-left: 10px;
  color: #d2c5c5;
  font-size: 14px;
  margin-top: 15px;
}
/* 悬疑部分 */
.suspense {
  display: flex;
  justify-content: center;
  overflow: hidden;
  margin: 30px 0;
}
.suspense-title {
  margin-bottom: 0;
  font-size: 25px;
}
.suspense-content {
  width: 1184px;
  margin: 0;
  padding: 0;
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

.ToheadImgFather {
  width: 184px;
  height: 224px;
  overflow: hidden;
}
.ToheadImgFather .el-image {
  border-radius: 5px;
  transition: all 0.2s linear;
  transform: translateZ(0);
  cursor: pointer;
  box-shadow: 0px 1px 4px #ccc;
  border-radius: 4px;
  transition: all 0.2s linear;
}
.ToheadImgFather .el-image:hover {
  box-shadow: 8px 8px 20px #ccc;
  transform: translate(0, -5px);
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
  /* height: 730px; */
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
