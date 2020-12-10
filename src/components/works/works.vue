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
            class="blankImg"
            style="width: 338px; height: 213px"
            :src="cartoonData.url"
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
            <a href="#" class="firstBtn btns">查看第一话</a>
            <a class="followBtn btns" v-if="flag" @click="ifFollow">关注</a>
            <a class="followBtn btns af" v-else @click.prevent="ifFollow"
              >已关注</a
            >
            <div class="btnListRight">
              <span><i class="el-icon-loading"></i>&nbsp;分享</span>
              <span><i class="el-icon-lollipop"></i>&nbsp;16.88亿</span>
              <span class="likes"
                ><i class="el-icon-sugar"></i>&nbsp;{{ likeSum }}</span
              >
            </div>
          </div>
        </div>
      </div>
      <!-- 漫画章节内容 -->
      <div class="TopicItem" v-for="(value, index) in itemData" :key="index">
        <div class="rowImgs f">
          <el-image :src="value.url"></el-image>
        </div>
        <div class="rowTitle f">
          <i>{{ value.chapter }}</i>
        </div>
        <!-- 点赞位置 -->
        <div class="rowGreat f">
          <i
            :class="value.likeIf ? 'myLike' : ''"
            @click="itemLike(index, value.likeIf)"
            ><i class="el-icon-sugar"></i>&nbsp;{{ value.num }}</i
          >
        </div>
        <div class="rowTime f">{{ value.time }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 漫画数据对象
      cartoonData: {},
      // 章节的数据数组
      itemData: [],
      flag: true,
      reverse: true,
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
  },
  // 方法
  methods: {
    // 从后台获取漫画数据对象
    async getcartoonData() {
      const { data: res } = await this.$http.get("/works/artData");
      this.cartoonData = res.BackArtData;
      this.itemData = res.backSItemData;
    },
    async ifFollow() {
      if (this.flag) {
        const { data: res } = await this.$http.post("/works/followed", {
          name: this.cartoonData.name,
          author: this.cartoonData.autor,
          id: 1,
        });
        if (res.status == 200) {
          this.$message.success(res.msg);
          this.flag = !this.flag;
        }
      } else {
        const { data: res } = await this.$http.post("/works/followed", {
          id: 2,
        });
        if (res.status == 200) {
          this.$message.error(res.msg);
          this.flag = !this.flag;
        }
      }
    },
    async ifReverse() {
      if (this.reverse) {
        const { data: res } = await this.$http.get("/works/artData");
        this.itemData = res.backSItemData.reverse();
        this.reverse = !this.reverse;
      } else {
        this.getcartoonData();
        this.reverse = !this.reverse;
      }
    },
    itemLike(likeIndex, likeIf) {
      // console.log(likeIndex);
      // console.log(likeIf);
      this.itemData.some((value, index) => {
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
.myLike {
  color: pink;
}
.likes {
  color: pink !important;
  font-size: 18px;
  font-weight: 500 !important;
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
  margin-left: 100px;
}
.btnListRight span {
  font-weight: 300;
  display: inline-block;
  margin: 0 20px 0 36px;
  color: #666;
  line-height: 26px;
  cursor: pointer;
}
.btnListRight span:hover {
  color: pink;
}
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
  color: pink;
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