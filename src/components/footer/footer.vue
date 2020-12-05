<template>
  <div>
    <el-card class="suspense" :body-style="{ padding: '0px' }">
      <p class="suspense-title">眉头一皱，发现事情并不简单！</p>
      <ul class="suspense-content">
        <li :key="item.id" v-for="item in suspenseImgsList">
          <el-image
            style="width: 184px; height: 224px"
            :src="item.src"
          ></el-image>
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
      suspenseImgsList: [
        {
          id: 1,
          src:
            "https://tn1-f2.kkmh.com/image/200430/khhhTiBkP.webp-t.w207.webp.h",
          bookName: "强者永生",
          suspenseAuthor: "JAY KUN",
        },
        {
          id: 2,
          src:
            "https://tn1-f2.kkmh.com/image/200110/cfXUZbqaK.webp-t.w207.webp.h",
          bookName: "须弥千愿卷",
          suspenseAuthor: "奥兹（主笔）+加缪（编剧）",
        },
        {
          id: 3,
          src:
            "https://tn1-f2.kkmh.com/image/200109/nzequoNNC.webp-t.w207.webp.h",
          bookName: "神泽",
          suspenseAuthor: "Djade(主笔）+KRE（编剧）",
        },
        {
          id: 4,
          src:
            "https://tn1-f2.kkmh.com/image/170123/33h3huvuw.webp-t.w207.webp.h",
          bookName: "反转现实",
          suspenseAuthor: "天极焉加+快看漫画团队",
        },
        {
          id: 5,
          src:
            "https://tn1-f2.kkmh.com/image/200417/TdrJAkUsh.webp-t.w207.webp.h",
          bookName: "唐人街小先生",
          suspenseAuthor: "三老爷",
        },
        {
          id: 6,
          src:
            "https://tn1-f2.kkmh.com/image/190627/7ca0LRvVk.webp-t.w207.webp.h",
          bookName: "灵烛少女",
          suspenseAuthor: "leu",
        },
        {
          id: 7,
          src:
            "https://tn1-f2.kkmh.com/image/190118/7wFkUEjHk.webp-t.w207.webp.h ",
          bookName: "傀园",
          suspenseAuthor: "BING",
        },
        {
          id: 8,
          src:
            "https://tn1-f2.kkmh.com/image/191130/lDyEeKoWS.webp-t.w207.webp.h",
          bookName: "看见禽兽的声音",
          suspenseAuthor: "好饭+新果十二三",
        },
        {
          id: 9,
          src:
            " https://tn1-f2.kkmh.com/image/180705/Z8fSi2plu.webp-t.w207.webp.h",
          bookName: "狼的谎言",
          suspenseAuthor: "金丘（主笔）+谨斯里（编剧）",
        },
        {
          id: 10,
          src:
            " https://tn1-f2.kkmh.com/image/170922/43h4885wg.webp-t.w207.webp.h",
          bookName: "第二模式",
          suspenseAuthor: "幽·灵",
        },
        {
          id: 11,
          src:
            "https://tn1-f2.kkmh.com/image/180706/K3O0ERxy5.webp-t.w207.webp.h",
          bookName: "人类进化论",
          suspenseAuthor: "祝耕夫",
        },
        {
          id: 12,
          src:
            " https://tn1-f2.kkmh.com/image/200327/AmfqfPkOh.webp-t.w207.webp.h",
          bookName: "未来航班",
          suspenseAuthor: "非人哉工作室",
        },
      ],
    };
  },
};
</script>
<style scoped>
.suspense {
  /* background-color: pink; */
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: 730px;
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