<template>
  <div>
    <div class="lookContent">
      <!-- 章节侧边栏 -->
      <Chatper
        :chatperList="chatperList"
        @enterLookn="enterLookn"
        :chatperName="chatperName"
      />
      <!-- 漫画题目导航栏 -->
      <bread :titleName="chatperName" />
      <!-- 翻页位置 -->
      <div class="turnPage">
        <ul>
          <li><a href="#" @click="backPage">上一话</a></li>
          <li>|</li>
          <li><a href="#" @click="nextPage">下一话</a></li>
        </ul>
      </div>
      <!-- 中间漫画图片内容  -->
      <lookImgs :lookImgsList="lookImgsList" />
    </div>
  </div>
</template>
<script>
import Chatper from "../../views/chatper";
import lookImgs from "../../views/lookImgs";
import bread from "../../views/bread";
export default {
  data() {
    return {
      lookImgsList: [], // 中间漫画图片内容
      chatperList: [], // 左侧章节导航栏
      ifHideStyle: true,
      chatperName: "",
    };
  },
  components: {
    Chatper,
    lookImgs,
    bread,
  },
  created() {
    this.getData(this.$route.params.title);
  },
  methods: {
    async getData(title) {
      const { data: res } = await this.$http.get("/look", {
        params: { title },
      });
      if (res.status == 200) {
        // console.log(res.cartoonImg[0].imgList);
        res.cartoonImg.forEach((value) => {
          if (
            value.title.slice(0, 2) === this.$route.params.title.slice(0, 2)
          ) {
            this.lookImgsList = value.imgList; // 漫画图面列表地址
            this.chatperName = value.title; // 漫画题目
          }
        });

        // this.chatperList = res.backchatperList;
        // this.lookImgsList = res.backImgsList0;
      }
    },
    backPage() {
      this.$message.error("现在已经是最前面啦！！！");
    },
    nextPage() {
      this.$router.push("/look1");
    },

    // 通过侧边章节导航栏跳往不同的章节
    enterLookn(value) {
      this.chatperName = value.chatperName;
      switch (value.id) {
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
          return;
      }
    },
  },
};
</script>
<style scoped>
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
</style>