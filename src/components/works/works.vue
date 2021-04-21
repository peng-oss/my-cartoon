<template>
  <div class="TopicContent">
    <div class="TopicList">
      <!-- 顶部漫画图片及简介 -->
      <div class="TopicHeader">
        <el-button class="switch zb" v-if="reverse" @click="ifReverse"
          >正序</el-button
        >
        <el-button class="switch lf" v-else @click="ifReverse">逆序</el-button>
        <!-- 顶部左侧图片 -->
        <div class="HeaderLeft">
          <el-image
            @click="enterLook"
            class="blankImg"
            style="width: 338px; height: 213px"
            :src="url"
          ></el-image>
        </div>
        <!-- 顶部右侧内容 -->
        <div class="HeaderRight">
          <!-- 漫画名 -->
          <h3 class="title">{{ cartoonData.name }}</h3>
          <!-- 漫画作者 -->
          <div class="nickname">{{ cartoonData.autor }}</div>
          <!-- 漫画简介 -->
          <div class="Introduction">
            <span>漫画简介</span>
            <p>{{ cartoonData.introduction }}</p>
          </div>
          <!-- 下侧按钮 -->
          <div class="btnList">
            <a href="#" class="firstBtn btns" @click="enterLook">开始观看</a>
            <!-- 关注按钮 -->
            <a class="followBtn btns" v-if="flag" @click="ifFollow">关注</a>
            <a class="followBtn btns af" v-else @click.prevent="ifFollow"
              >已关注</a
            >
            <div class="btnListRight">
              <span @click="share"
                ><svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-fenxiang"></use></svg
                >&nbsp;分享</span
              >
              <span
                ><svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-jiarehuoyan-xianxing"></use></svg
                >&nbsp;16.88亿</span
              >
              <span class="likes"
                ><svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-dianzan"></use></svg
                >&nbsp;{{ likeSum }}</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- 漫画章节内容 -->
      <div class="TopicItem" v-for="(value, index) in itemData" :key="index">
        <div class="rowImgs f">
          <el-image
            :src="value.url"
            @click="enterLookn(value.chapter)"
          ></el-image>
        </div>
        <div class="rowTitle f">
          <i @click="enterLookn(value.chapter)">{{ value.chapter }}</i>
        </div>
        <!-- 点赞位置 -->
        <div class="rowGreat f">
          <i
            :class="value.likeIf ? 'myLike' : ''"
            @click="itemLike(index, value.likeIf)"
            ><svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-dianzan"></use></svg
            >&nbsp;{{ value.num }}</i
          >
        </div>
        <div class="rowTime f">{{ value.time }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import "../../assets/fontShare/iconfont.js";
import "../../assets/font002/iconfont.js";
export default {
  data() {
    return {
      // 漫画数据对象
      cartoonData: {},
      // 章节的数据数组
      itemData: [],
      flag: true,
      reverse: true,
      url: require("./works.jpg"),
    };
  },
  created() {
    this.getcartoonData();
  },
  // 通过计算属性统计总的点赞数
  computed: {
    likeSum() {
      var sum = 0;
      this.itemData.forEach(function (value) {
        // console.log(value.num);
        sum += parseInt(value.num);
      });
      // console.log(sum);
      return sum;
    },
    getele() {
      const ele_login = localStorage.getItem("ele_login");
      return ele_login;
    },
  },
  // 方法
  methods: {
    // 去往每一话的方法
    enterLookn(title) {
      console.log(title);
      this.$router.push(`/look/${title.trim()}`);
    },
    share() {
      this.$message.success("该功能正在开发中，请耐心等待");
    },
    // 查看第一话的方法
    enterLook() {
      this.$router.push("/look/序章 硝烟域泪");
    },

    // 从后台获取漫画数据对象
    async getcartoonData() {
      const { data: res } = await this.$http.get("/works/chapterList");
      this.cartoonData = res.describe[0]; // 漫画描述
      this.itemData = res.chapterList; // 漫画章节
      this.flag = res.ifFlag;
    },

    // 是否关注的方法
    async ifFollow() {
      if (this.flag) {
        if (!this.getele) return this.$router.push("/login");
        const { data: res } = await this.$http.post("/works/followed", {
          name: this.cartoonData.name,
          author: this.cartoonData.author,
          id: 1,
        });
        if (res.status == 200) {
          this.$message.success(res.msg);
          console.log(res.ifFlag);
          this.flag = res.ifFlag;
          this.getcartoonData();
        }
      } else if (this.flag == false) {
        const { data: res } = await this.$http.post("/works/followed", {
          id: 2,
        });
        if (res.status == 200) {
          this.$message.error(res.msg);
          this.flag = res.ifFlag;
          this.getcartoonData();
        }
      }
    },
    // 正序，逆序的方法
    async ifReverse() {
      if (this.reverse) {
        const { data: res } = await this.$http.get("/works/chapterList");
        this.itemData = res.chapterList.reverse();
        this.reverse = !this.reverse;
      } else {
        this.getcartoonData();
        this.reverse = !this.reverse;
      }
    },
    // 点赞漫画的数据处理方法
    itemLike(likeIndex, likeIf) {
      this.itemData.forEach((value, index) => {
        if (likeIndex == index && likeIf === false) {
          value.num = parseInt(value.num) + 1;
          value.likeIf = !value.likeIf;
        } else if (likeIndex == index && likeIf === true) {
          value.num = parseInt(value.num) - 1;
          value.likeIf = !value.likeIf;
        }
      });
    },
  },
};
</script>
<style scoped>
/* 图标 */
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.myLike {
  color: #c0392b;
}
.likes {
  color: #c0392b !important;
  font-size: 20px;
}
.zb {
  background-color: skyblue;
  color: #666;
}
.lf {
  background-color: pink;
  color: #666;
}
.switch {
  position: absolute;
  bottom: 5px;
  left: 65px;
}
.af {
  background-color: pink !important;
}
.TopicList {
  margin: 50px auto;
  width: 1138px;
  border-radius: 6px;
  border: 1px solid #e5e5e5;
  background-color: #fff;
}
.TopicHeader {
  position: relative;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 24px;
  padding: 30px 0;
  padding-bottom: 45px;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
}
.HeaderLeft {
  float: left;
  margin-right: 40px;
}
.blankImg {
  border-radius: 10px;
  box-shadow: 0 1px 4px #ccc;
  transition: all 0.2s linear;
  cursor: pointer;
}
.blankImg:hover {
  box-shadow: 4px 4px 10px #ccc;
  transform: translate(0, -3px);
}
.HeaderRight {
  float: left;
  width: 710px;
}
.title {
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: 400;
}
.nickname {
  color: #bfbfbf;
}
.Introduction {
  padding-top: 14px;
  color: #666;
  font-size: 14px;
  line-height: 20px;
}
.Introduction span {
  display: inline-block;
  border-bottom: 2px solid #f5ce03;
}
.btnList {
  padding-top: 18px;
}
.firstBtn {
  height: 34px;
  line-height: 34px;
  background-color: skyblue;
  border-radius: 18px;
  border: 1px solid #999;
}
.btnList .btns {
  display: inline-block;
  width: 100px;
  border-radius: 18px;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  color: #666;
  cursor: pointer;
}
.followBtn {
  margin-left: 20px;
  height: 32px;
  line-height: 32px;
  border: 1px solid #999;
  background: #fff;
}
/* .followBtn:hover {
  background-color: pink;
} */
.btnListRight {
  display: inline-block;
  margin-left: 50px;
}
.btnListRight span {
  font-weight: 300 !important;
  display: inline-block;
  margin: 0 20px 0 36px;
  color: #666;
  line-height: 26px;
  cursor: pointer;
}
/* .btnListRight span:hover {
  color: pink!important;
} */
.TopicItem {
  padding: 16px;
  margin: 0 24px;
  font-size: 14px;
  font-weight: 300;
  border-bottom: 1px solid #e5e5e5;
  overflow: hidden;
}
.rowImgs {
  display: inline-block;
  border-radius: 5px;
  margin: 0 50px;
  overflow: hidden;
  width: 200px;
  height: 112px;
}
.rowImgs .el-image {
  width: 100%;
  height: 100%;
  border-radius: 5px;
  transition: all 0.2s linear;
  transform: translateZ(0);
  cursor: pointer;
}
.rowImgs .el-image:hover {
  width: 105%;
  height: 105%;
}
.rowTitle {
  width: 436px;
  height: 112px;
  line-height: 112px;
  text-align: center;
}
.rowTitle,
.rowGreat i {
  cursor: pointer;
}
.rowTitle i:hover {
  color: #c0392b;
}
/* .rowGreat i:hover {
  color: pink;
} */
.rowGreat {
  width: 160px;
  height: 112px;
  line-height: 112px;
  text-align: center;
}
.rowTime {
  width: 150px;
  height: 112px;
  line-height: 112px;
  text-align: center;
}
.f {
  float: left;
}
</style>
