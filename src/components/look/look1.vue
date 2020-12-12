<template>
  <div>
    <!-- 章节侧边栏 -->
    <div class="chatper" @click="ifHide">
      <i class="el-icon-s-unfold"></i>
      <p>章</p>
      <p>节</p>
    </div>
    <div class="chatperContent" :class="{ hideStyle: ifHideStyle }">
      <ul>
        <li
          :key="value.id"
          v-for="value in chatperList"
          @click="enterLookn(value.id)"
        >
          <a href="#">{{ value.chatperName }}</a>
        </li>
      </ul>
    </div>
    <div class="lookContent">
      <!-- 漫画题目导航栏 -->
      <div class="lookTitle">
        <el-breadcrumb separator="-">
          <el-breadcrumb-item>作品</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }" class="weight"
            >查看首页</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: '/works' }"
            >狄奥多之歌</el-breadcrumb-item
          >
          <el-breadcrumb-item>第1话 我要你做我仆人！</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <!-- 翻页位置 -->
      <div class="turnPage">
        <ul>
          <li><a href="#" @click="backPage">上一话</a></li>
          <li>|</li>
          <li><a href="#" @click="nextPage">下一话</a></li>
        </ul>
      </div>
      <!-- 中间漫画图片内容  -->
      <div class="lookImgs">
        <ul>
          <li v-for="(item, index) in lookImgsList" :key="index">
            <el-image
              style="width: 564px; height: 440.66px"
              :src="item.url"
            ></el-image>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 中间漫画图片内容
      lookImgsList: [],
      // 右侧章节导航栏
      chatperList: [],
      ifHideStyle: true,
    };
  },
  // 生命周期调用后台接口获取数据
  created() {
    this.getData();
  },
  methods: {
    async getData() {
      const { data: res } = await this.$http.get("/works/look", {
        params: { toId: 1 },
      });
      console.log(res);
      if (res.status == 200) {
        this.chatperList = res.backchatperList;
        this.lookImgsList = res.backImgsList1;
      }
    },
    nextPage() {
      this.$router.push("/look2");
    },
    backPage() {
      this.$router.push("/look0");
    },
    // 显示和隐藏章节内容盒子的方法
    ifHide() {
      this.ifHideStyle = !this.ifHideStyle;
    },
    // 通过侧边章节导航栏跳往不同的章节
    enterLookn(id) {
      console.log(id);
      switch (id) {
        case 999:
          this.$router.push("/works");
          break;
        case 0:
          this.$router.push("/look0");
          break;
        case 1:
          this.$router.push("/look1");
          break;
        case 2:
          this.$router.push("/look2");
          break;
        case 3:
          this.$router.push("/look3");
          break;
        case 4:
          this.$router.push("/look4");
          break;
        case 5:
          this.$router.push("/look5");
          break;
        default:
          console.log(id);
      }
    },
  },
};
</script>
<style scoped>
/* 章节侧边栏 */
.chatper {
  position: fixed;
  top: 100px;
  left: 148px;
  width: 40px;
  height: 90px;
  text-align: center;
  border: 1px solid #e5e5e5;
  border-right: 0;
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;
  cursor: pointer;
}
.chatper:hover {
  background-color: #f5f5f5;
}
.chatper i {
  margin-top: 15px;
}
.chatper p {
  margin: 0;
  padding: 0;
}
/* 是否隐藏章节内容 */
.hideStyle {
  display: none;
}
.chatperContent {
  position: fixed;
  top: 100px;
  left: 189px;
  width: 240px;
  background-color: #fff;
  z-index: 2;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
}
.chatperContent li:nth-child(1) {
  font-size: 18px;
}
.chatperContent li:nth-child(1) a {
  color: #000;
}
.chatperContent li {
  padding: 10px 15px;
  cursor: pointer;
}
.chatperContent li:hover {
  background-color: #e5e5e5;
}
/* 观看漫画的版心 */
.lookContent {
  width: 1140px;
  margin: 0 auto;
  position: relative;
  margin-top: 30px;
  padding-bottom: 24px;
  border-radius: 6px;
  border: 1px solid #e5e5e5;
  margin-bottom: 24px;
  /* background-color: skyblue; */
}
/* 漫画题目导航栏  */
.lookTitle {
  width: 100%;
  height: 40px;
  background-color: #fbfbfb;
  padding: 12px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-size: 16px;
  line-height: 20px;
  color: #666;
  box-sizing: border-box;
}
/* 翻页 */
.turnPage {
  display: flex;
  justify-content: center;
}
.turnPage ul {
  margin-top: 25px;
}
.turnPage ul li {
  padding: 2px 10px;
  float: left;
  font-weight: 300;
}
/* 中间漫画图片内容 */
.lookImgs {
  margin-top: 30px;
  width: 1140px;
  display: flex;
  justify-content: center;
}
.lookImgs ul li {
  height: 440.66px !important;
}
</style>
