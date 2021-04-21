<template>
  <div>
    <div class="lookContent">
      <!-- 章节侧边栏 -->
      <Chatper
        :chatperList="chatperList"
        @enterLookn="enterLookn"
        :chapterName="chapterName"
      />
      <!-- 漫画题目导航栏 -->
      <bread :titleName="chapterName" />
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
      chapterName: "",
    };
  },
  components: {
    Chatper,
    lookImgs,
    bread,
  },
  created() {
    if (
      this.$route.params.title !== "" &&
      this.$route.params.title !== null &&
      this.$route.params.title !== undefined
    ) {
      this.chapterName = this.$route.params.title;
    }
    this.getData();
  },
  methods: {
    async getData() {
      const { data: res } = await this.$http.get("/look");
      if (res.status == 200) {
        // console.log(res.cartoonImg[0].imgList);
        this.chatperList = res.sidebarList; // 侧边栏导航栏
        res.cartoonImg.forEach((value) => {
          if (value.title.slice(0, 2) === this.chapterName.slice(0, 2)) {
            this.lookImgsList = value.imgList; // 漫画图面列表地址
          }
        });
      }
    },
    // 上一话方法
    backPage() {
      if (this.chapterName.slice(0, 2) == "序章") {
        this.$message.error("现在已经是最前面啦！！！");
      } else if (this.chapterName.slice(0, 2) == "第1") {
        this.chapterName = "序章 硝烟域泪";
        this.getData();
      } else if (this.chapterName.slice(0, 2) == "第2") {
        this.chapterName = "第1话 我要你做我仆人！";
        this.getData();
      } else if (this.chapterName.slice(0, 2) == "第3") {
        this.chapterName = "第2话 作为仆人的“惩罚";
        this.getData();
      } else if (this.chapterName.slice(0, 2) == "第4") {
        this.chapterName = "第3话 骑马教学这么甜？！";
        this.getData();
      } else if (this.chapterName.slice(0, 2) == "第5") {
        this.chapterName = "第4话 公主的价值";
        this.getData();
      }
    },
    // 下一话方法
    nextPage() {
      if (this.chapterName.slice(0, 2) == "序章") {
        this.chapterName = "第1话 我要你做我仆人！";
        this.getData(this.chapterName);
      } else if (this.chapterName.slice(0, 2) == "第1") {
        this.chapterName = "第2话 作为仆人的“惩罚";
        this.getData();
      } else if (this.chapterName.slice(0, 2) == "第2") {
        this.chapterName = "第3话 骑马教学这么甜？！";
        this.getData();
      } else if (this.chapterName.slice(0, 2) == "第3") {
        this.chapterName = "第4话 公主的价值";
        this.getData();
      } else if (this.chapterName.slice(0, 2) == "第4") {
        this.chapterName = "第5话 鼓励";
        this.getData();
      } else if (this.chapterName.slice(0, 2) == "第5") {
        this.$message.error("现在已经是最后面啦！！！");
      }
    },

    // 通过侧边章节导航栏跳往不同的章节
    enterLookn(value) {
      this.chapterName = value.chapterName;
      if (this.chapterName == "狄奥多之歌") {
        this.$router.push("/works");
      }
      console.log(this.chapterName);
      this.getData();
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