<template>
  <div>
    <div class="sortFther">
      <div class="sortItem">
        <div class="userSelected">已选 <span class="userAll">全部</span></div>
        <div class="theme">
          <div>
            <span :key="item.id" v-for="item in themeList">{{
              item.themeName
            }}</span>
          </div>
        </div>
        <div class="schedule">
          <span :key="item.id" v-for="item in scheduleList">{{
            item.themeName
          }}</span>
        </div>
        <div class="sortImgs">
          <ul>
            <li class="imgPage" :key="item.id" v-for="item in sortImgsList">
              <a href="#">
                <el-image
                  style="width: 184px; height: 224px"
                  :src="item.url"
                ></el-image>
                <div class="imgsContent">
                  <span>{{item.bookName}}</span>
                  <p>{{item.author}}</p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      themeList: [
        { id: 1, themeName: "题材" },
        { id: 2, themeName: "全部" },
        { id: 3, themeName: "恋爱" },
        { id: 4, themeName: "剧情" },
        { id: 5, themeName: "古风" },
        { id: 6, themeName: "校园" },
        { id: 7, themeName: "奇幻" },
        { id: 8, themeName: "唯美" },
        { id: 9, themeName: "热血" },
        { id: 10, themeName: "日漫" },
        { id: 11, themeName: "韩漫" },
        { id: 12, themeName: "大女主" },
      ],
      scheduleList: [
        { id: 1, themeName: "进度" },
        { id: 2, themeName: "完结" },
        { id: 3, themeName: "穿越" },
        { id: 4, themeName: "萌系" },
        { id: 5, themeName: "灵异" },
        { id: 6, themeName: "玄幻" },
        { id: 7, themeName: "搞笑" },
        { id: 8, themeName: "都市" },
        { id: 9, themeName: "投稿" },
        { id: 10, themeName: "总裁" },
        { id: 11, themeName: "正能量" },
      ],
      // 分类图片
      sortImgsList: [
        {
          id: 1,
          bookName: "再度与你",
          author: "晗旭L-Mo",
          url:
            "https://tn1-f2.kkmh.com/image/190802/fmXsWW7tI.webp-t.w207.webp.h",
        },
        {
          id: 2,
          bookName: "他那么撩",
          author: "曲小蛐（原著）",
          url:
            "https://tn1-f2.kkmh.com/image/200925/nLtcHbBAW.webp-t.w207.webp.h",
        },
        {
          id: 3,
          bookName: "星辰于我",
          author: "犬一",
          url:
            "https://tn1-f2.kkmh.com/image/200716/vdTwyZvcw.webp-t.w207.webp.h",
        },
        {
          id: 4,
          bookName: "未曾知晓的那一日",
          author: "胡桃",
          url:
            "https://tn1-f2.kkmh.com/image/200109/bnvAWgbBb.webp-t.w207.webp.h",
        },
        {
          id: 5,
          bookName: "花开未满",
          author: "莉莉君",
          url:
            "https://tn1-f2.kkmh.com/image/190702/ll1t9SFXQ.webp-t.w207.webp.h",
        },
        {
          id: 6,
          bookName: "今天的她也是如此可爱",
          author: "郭斯特",
          url:
            "https://tn1-f2.kkmh.com/image/190905/YbVcMODaa.webp-t.w207.webp.h",
        },
        {
          id: 7,
          bookName: "韩琰（编剧）+西瓜（主笔）",
          author: "晗旭L-Mo",
          url:
            "https://tn1-f2.kkmh.com/image/191217/ewuopQRcs.webp-t.w207.webp.h",
        },
        {
          id: 8,
          bookName: "逆光之绊",
          author: "bless",
          url:
            "https://tn1-f2.kkmh.com/image/200122/NdxSWJHYR.webp-t.w207.webp.h",
        },
        {
          id: 9,
          bookName: "白日梦图鉴",
          author: "帅天森",
          url:
            "https://tn1-f2.kkmh.com/image/190703/HztHOHhJU.webp-t.w207.webp.h",
        },
        {
          id: 10,
          bookName: "恋是樱草色",
          author: "漫阅优品",
          url:
            "https://tn1-f2.kkmh.com/image/161220/txoq04r10.webp-t.w207.webp.h",
        },
        {
          id: 11,
          bookName: "拯救我的高一八班",
          author: "葱渣渣",
          url:
            "https://tn1-f2.kkmh.com/image/181116/hilFVHrEB.webp-t.w207.webp.h",
        },
        {
          id: 12,
          bookName: "朝花惜时",
          author: "壳小杀／夏天岛+左小翎／夏天岛",
          url:
            "https://tn1-f2.kkmh.com/image/190802/fmXsWW7tI.webp-t.w207.webp.h",
        },
        {
          id: 13,
          bookName: "成也萧河",
          author: "壳小杀",
          url:
            "https://tn1-f2.kkmh.com/image/200703/KYnRXhLuQ.webp-t.w207.webp.h",
        },
        {
          id: 14,
          bookName: "被遗忘的7月",
          author: "muryu",
          url:
            "https://tn1-f2.kkmh.com/image/190703/4l7VcZNZN.webp-t.w207.webp.h",
        },
        {
          id: 15,
          bookName: "我想吃掉你的胰脏",
          author: "住野夜（原作）+桐原泉（作画）",
          url:
            "https://tn1-f2.kkmh.com/image/180827/BcP9SZM9B.webp-t.w207.webp.h",
        },
        {
          id: 16,
          bookName: "爱你有些小偏执",
          author: "灿灿/夏天岛",
          url:
            "https://tn1-f2.kkmh.com/image/190703/oMEEpgwyl.webp-t.w207.webp.h",
        },
        {
          id: 17,
          bookName: "当校霸爱上学霸",
          author: "灿灿/夏天岛",
          url:
            "https://tn1-f2.kkmh.com/image/180705/KD7348uAV.webp-t.w207.webp.h",
        },
        {
          id: 18,
          bookName: "晨星未落时",
          author: "葵子",
          url:
            "https://tn1-f2.kkmh.com/image/170630/hiwvsfn1p.webp-t.w207.webp.h",
        },
      ],
    };
  },
};
</script>
<style scoped>
div {
  /* height: 636px; */
}
.sortFther {
  display: flex;
  justify-content: center;
}
.sortItem {
  margin-top: 30px;
  width: 1184px;
  background-color: #fff;
}
.userSelected {
  padding: 13px 0;
  height: 26px;
  line-height: 26px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  border-bottom: 1px solid #d2d2d2;
}
.userAll {
  display: inline-block;
  width: 36px;
  height: 28px;
  background-color: #ffd706;
  border-radius: 5px;
  color: #000;
  text-align: center;
  margin-left: 30px;
}
.theme {
  margin-top: 25px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  height: 40px;
}
.sortItem span {
  display: inline-block;
  margin-right: 38px;
  cursor: pointer;
}
.schedule {
  margin-top: 10px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  height: 41px;
}
.sortImgs {
  width: 1184px;
}
.imgPage {
  float: left;
}
.imgPage a {
  display: inline-block;
  width: 184px;
  height: 295px;
  background-color: #fff;
  margin: 0 16px 30px 0;
}
.imgPage:nth-child(6n) a {
  margin-right: 0 !important;
}
.imgsContent span {
  color: #000;
}
.imgsContent p {
  font-size: 12px;
}
</style>