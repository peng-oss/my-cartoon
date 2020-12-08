<template>
  <div>
    <!--  轮播图 -->
    <el-carousel :interval="1000" type="card" height="520px">
      <el-carousel-item v-for="(img, index) in LBimgList" :key="index">
        <el-image style="width: 800px; height: 560px" :src="img.url"></el-image>
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
    <!--  上头部分 -->
    <el-card
      class="toheadAndlist"
      :body-style="{ padding: '0px' }"
      shadow="never"
    >
      <div class="toheadAndlistbig">
        <!--  这个漫画令我上头 -->
        <div class="tohead">
          <p class="suspense-title">这漫画令我上头</p>
          <ul class="toHead-content">
            <li :key="item.id" v-for="item in toHeadImgsList">
              <a href="javascript:;"
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
        <a href="javascript:;" class="moreList">更多榜单</a>
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
    <!--  恋爱分类部分 -->

    <!-- 置顶部分辅助导航栏 -->
    <el-backtop :bottom="100" :visibility-height="800">
      <i class="el-icon-top"></i>
    </el-backtop>
  </div>
</template>

<script>
export default {
  data() {
    return {
      LBimgList: [
        {
          url:
            "https://tn1-f2.kkmh.com/image/201202/yIqDubkLA.webp-t.w750.webp.h",
        },
        {
          url:
            "https://tn1-f2.kkmh.com/image/201202/MbWjRZCVw.webp-t.w750.webp.h",
        },
        {
          url:
            "https://tn1-f2.kkmh.com/image/201126/BJrFLduUd.webp-t.w750.webp.h",
        },
        {
          url:
            "https://tn1-f2.kkmh.com/image/201121/xmlrwhmgL.webp-t.w750.webp.h",
        },
        {
          url:
            "https://tn1-f2.kkmh.com/image/201129/JCgPzApgH.webp-t.w750.webp.h",
        },
        {
          url:
            "https://tn1-f2.kkmh.com/image/201202/wMmWNpSEZ.webp-t.w750.webp.h",
        },
      ],
      originalImgList: [
        {
          id: 1,
          url:
            "https://tn1-f2.kkmh.com/image/201009/OvEtlOWSI.webp-t.w207.webp.h",
          bookName: "透过指尖的光",
        },
        {
          id: 2,
          url:
            "https://tn1-f2.kkmh.com/image/201009/rUPqEUSEW.webp-t.w207.webp.h",
          bookName: "改行吧魔法师",
        },
        {
          id: 3,
          url:
            "https://tn1-f2.kkmh.com/image/190709/1BqbnrIPh.webp-t.w207.webp.h",
          bookName: "特别恋爱关系",
        },
        {
          id: 4,
          url:
            "https://tn1-f2.kkmh.com/image/201009/uOHhIOdju.webp-t.w207.webp.h",
          bookName: "三界制",
        },
        {
          id: 5,
          url:
            "https://tn1-f2.kkmh.com/image/200815/zwZFKoZdL.webp-t.w207.webp.h",
          bookName: "愤怒的撒切尔",
        },
        {
          id: 6,
          url:
            "https://tn1-f2.kkmh.com/image/200930/vizYZuhff.webp-t.w207.webp.h",
          bookName: "浮游梦",
        },
      ],
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
      cartoonTypeList: [
        {
          id: 1,
          typeName: "恋爱",
        },
        {
          id: 2,
          typeName: "强剧情",
        },
        {
          id: 3,
          typeName: "古风",
        },
        {
          id: 4,
          typeName: "校园",
        },
        {
          id: 5,
          typeName: "奇幻",
        },
        {
          id: 6,
          typeName: "唯美",
        },
        {
          id: 7,
          typeName: "热血",
        },
        {
          id: 8,
          typeName: "日漫",
        },
        {
          id: 9,
          typeName: "韩漫",
        },
        {
          id: 10,
          typeName: "大女主",
        },
        {
          id: 11,
          typeName: "韩漫",
        },
        {
          id: 12,
          typeName: "完结",
        },
        {
          id: 13,
          typeName: "穿越",
        },
        {
          id: 14,
          typeName: "萌系",
        },
        {
          id: 15,
          typeName: "灵异",
        },
        {
          id: 16,
          typeName: "全部",
        },
      ],
      // 新作榜图片
      newWorkImgsList: [
        {
          id: 1,
          top: "TOP.1",
          rank: "新晋黑马",
          bookName: "FOG[电竞]",
          author: "漫漫何其多/晋江文学城+吃饱饭工厂",
          description: "两年前，余邃被传卖队友，被人口诛笔伐，他可以…",
          src:
            "https://tn1-f2.kkmh.com/image/200925/kLFxrFMAV.webp-t.w180.webp.h",
        },
        {
          id: 2,
          top: "TOP.2",
          rank: "新晋黑马",
          bookName: "成为伯爵家的废物",
          author: "PAN4+PING+Yu Ryeo Han+COPIN",
          description: "一个出场5秒就下线的贵族混混，一个高冷霸气的…",
          src:
            "https://tn1-f2.kkmh.com/image/200923/BFjxwqSfy.webp-t.w180.webp.h",
        },
        {
          id: 3,
          top: "TOP.3",
          rank: "新晋黑马",
          bookName: "龙脉守护者",
          author: "娃哈哈-哈宝",
          description: "在华夏，先贤称之为“龙脉”，其强弱与流向，决…",
          src:
            "https://tn1-f2.kkmh.com/image/201119/McGOGMJoa.webp-t.w180.webp.h",
        },
        {
          id: 4,
          top: "TOP.4",
          rank: "下降2名",
          bookName: "恋人夜间营业",
          author: "大雨儿（主笔）+谨斯里（编剧）",
          description: "和未婚夫一起匿名参加相亲节目！？一对很穷的职…",
          src:
            "https://tn1-f2.kkmh.com/image/200923/DCdolEdES.webp-t.w180.webp.h",
        },
        {
          id: 5,
          top: "TOP.5",
          rank: "下降2名",
          bookName: "妻为上",
          author: "绿野千鹤/晋江文学城+博易漫画",
          description: "景韶战功赫赫，却遭人诬陷落得鸟尽弓藏，没想到…",
          src:
            "https://tn1-f2.kkmh.com/image/200925/kFqcvilNm.webp-t.w180.webp.h",
        },
        {
          id: 6,
          top: "TOP.6",
          rank: "下降1名",
          bookName: "他那么撩",
          author: "曲小蛐（原著）+这块瓜有毒（主笔）+花村蘑菇（编剧）",
          description: "乖乖女学霸秦晴转学第一天，意外被卷入到一场约…",
          src:
            "https://tn1-f2.kkmh.com/image/200925/nLtcHbBAW.webp-t.w180.webp.h",
        },
        {
          id: 7,
          top: "TOP.7",
          rank: "下降6名",
          bookName: "他的苹果",
          author: "橘枳",
          description: "普通高中生竟是红发魔女的女儿————满级大佬…",
          src:
            "https://tn1-f2.kkmh.com/image/201111/dkzBFiFIO.webp-t.w180.webp.h",
        },
        {
          id: 8,
          top: "TOP.8",
          rank: "上升六名",
          bookName: "月光雕刻师",
          author: "PARK JUNG YEOL",
          description: "在现实体感游戏风靡的未来，游戏天才少年李贤为…",
          src:
            "https://tn1-f2.kkmh.com/image/200610/ZunryLzNj.webp-t.w180.webp.h",
        },
        {
          id: 9,
          top: "TOP.9",
          rank: "新晋黑马",
          bookName: "胖子英雄",
          author: "插座君+俊男桑",
          description: "他是个胖子，也是个英雄! 然而肥胖的烦恼却远大…",
          src:
            "https://tn1-f2.kkmh.com/image/201118/ommUjrLfL.webp-t.w180.webp.h",
        },
      ],
      // 飙升榜图片
      riseWorkImgsList: [
        {
          id: 1,
          top: "TOP.1",
          rank: "新晋黑马",
          bookName: "成为伯爵家的废物",
          author: "PAN4+PING+Yu Ryeo Han+COPIN",
          description: "一个出场5秒就下线的贵族混混，一个高冷霸气的…",
          src:
            "https://tn1-f2.kkmh.com/image/200923/BFjxwqSfy.webp-t.w180.webp.h",
        },
        {
          id: 2,
          top: "TOP.2",
          rank: "新晋黑马",
          bookName: "FOG[电竞]",
          author: "漫漫何其多/晋江文学城+吃饱饭工厂",
          description: "两年前，余邃被传卖队友，被人口诛笔伐，他可以…",
          src:
            "https://tn1-f2.kkmh.com/image/200925/kLFxrFMAV.webp-t.w180.webp.h",
        },
        {
          id: 3,
          top: "TOP.3",
          rank: "新晋黑马",
          bookName: "小心被梦魔吃掉哦",
          author: "西域儿",
          description: "因为生病而晚入学一个月的小透明，和最受欢迎的…",
          src:
            "https://tn1-f2.kkmh.com/image/200929/gK7KHIE54.webp-t.w180.webp.h",
        },
        {
          id: 4,
          top: "TOP.4",
          rank: "新晋黑马",
          bookName: "不协调的恋爱",
          author: "莉茉",
          description: "对周围女孩子没有兴趣的全校第一美男子才贺京助…",
          src:
            "https://tn1-f2.kkmh.com/image/201119/bIrggfxiX.webp-t.w180.webp.h",
        },
        {
          id: 5,
          top: "TOP.5",
          rank: "新晋黑马",
          bookName: "有妻徒刑",
          author: "绯小月",
          description: "妖异女督察与上百名穷凶极恶的囚犯一同被困于这…",
          src:
            "https://tn1-f2.kkmh.com/image/200923/nPPQTalZG.webp-t.w180.webp.h",
        },
        {
          id: 6,
          top: "TOP.6",
          rank: "新晋黑马",
          bookName: "八十一道超纲题",
          author: "条纹花瓶（原著）+常盘勇者",
          description: "2030年，世界末日来临，无数人神秘死亡，剩下的…",
          src:
            "https://tn1-f2.kkmh.com/image/200405/RVYeKpepr.webp-t.w180.webp.h",
        },
        {
          id: 7,
          top: "TOP.7",
          rank: "新晋黑马",
          bookName: "MONSTER沉默野兽的温度",
          author: "六柴",
          description: "被黑蝴蝶诅咒的少女，从小就遭遇各种危险事故，…",
          src:
            "https://tn1-f2.kkmh.com/image/200618/hdHAKBvev.webp-t.w180.webp.h",
        },
        {
          id: 8,
          top: "TOP.8",
          rank: "新晋黑马",
          bookName: "魔女的逆袭",
          author: "MinJakk",
          description: "斯佩拉多家族的次女莱斯莉，她的人生完全是为了…",
          src:
            "https://tn1-f2.kkmh.com/image/200709/rAvHoSLMa.webp-t.w180.webp.h",
        },
        {
          id: 9,
          top: "TOP.9",
          rank: "下降1名",
          bookName: "星辰于我",
          author: "犬一",
          description: "沐子星五岁时，一个好看的男孩子.司南，如春天…",
          src:
            "https://tn1-f2.kkmh.com/image/200716/vdTwyZvcw.webp-t.w180.webp.h",
        },
      ],
      // 新作榜飙升榜展示图片
      showImgsList: [],
      newActive: true,
      riseActive: false,
      redActive: true,
      greenActive: false,
      // 漫改图片
      cartoonChangeImgsList: [
        {
          id: 1,
          bookName: "斗罗大陆外传唐门英雄传",
          description:
            "被封印的神界，只有唐三的神力可以直接与外面联系。要战败的时候，从遥远…",
          src:
            "https://tn1-f2.kkmh.com/image/190115/6uDRSET7T.webp-t.w320.webp.h",
        },
        {
          id: 2,
          bookName: "被遗忘的7月",
          description:
            "【热播剧《偶然发现的一天》原著漫画】记忆断片的女主俞璐丹以为自己患…",
          src:
            "https://tn1-f2.kkmh.com/image/190703/4l7VcZNZN.webp-t.w320.webp.h",
        },
        {
          id: 3,
          bookName: "哑舍",
          description:
            "哑舍里的古物，每一件都有着自己的故事，承载了许多年，无人倾听，默然等…",
          src:
            "https://tn1-f2.kkmh.com/image/170809/olw79erkq.webp-t.w320.webp.h",
        },
        {
          id: 4,
          bookName: "八十一道超纲题",
          description:
            "2030年，世界末日来临，无数人神秘死亡，剩下的幸存者被一款叫做“八十一…",
          src:
            "https://tn1-f2.kkmh.com/image/200405/RVYeKpepr.webp-t.w320.webp.h",
        },
      ],
      // 上头图片
      toHeadImgsList: [
        {
          id: 1,
          src:
            "https://tn1-f2.kkmh.com/image/200814/QNRIXWFQq.webp-t.w180.webp.h",
          bookName: "步天歌",
          ToheadAuthor: "夏达",
        },
        {
          id: 2,
          src:
            "https://tn1-f2.kkmh.com/image/191025/HbtCpvYqz.webp-t.w180.webp.h",
          bookName: "桃与末世之书",
          ToheadAuthor: "晨曦",
        },
        {
          id: 3,
          src:
            "https://tn1-f2.kkmh.com/image/200303/hWCVwjEfc.webp-t.w180.webp.h",
          bookName: "刀鞘的孩子",
          ToheadAuthor: " Kyungil Yang（主笔）",
        },
        {
          id: 4,
          src:
            "https://tn1-f2.kkmh.com/image/200727/edEjPcrEp.webp-t.w180.webp.h",
          bookName: "我独自升级",
          ToheadAuthor: "DUBU(主笔)",
        },
        {
          id: 5,
          src:
            "https://tn1-f2.kkmh.com/image/200714/juxCCvnxK.webp-t.w180.webp.h",
          bookName: "谷围南亭",
          ToheadAuthor: "墨飞",
        },
        {
          id: 6,
          src:
            "https://tn1-f2.kkmh.com/image/181025/4diVYyMUJ.webp-t.w180.webp.h",
          bookName: "蝉女",
          ToheadAuthor: "宫缘乾 ",
        },
        {
          id: 7,
          src:
            "https://tn1-f2.kkmh.com/image/200109/RZbXGSASA.webp-t.w180.webp.h",
          bookName: "第N次恋爱",
          ToheadAuthor: " 栗路 ",
        },
        {
          id: 8,
          src:
            "https://tn1-f2.kkmh.com/image/200202/thKbsYdzJ.webp-t.w180.webp.h",
          bookName: "万能恋爱杂货店",
          ToheadAuthor: " 鲤鱼丸一 ",
        },
        {
          id: 9,
          src:
            "https://tn1-f2.kkmh.com/image/191011/bAcCyBfCx.webp-t.w180.webp.h",
          bookName: "欺星客栈",
          ToheadAuthor: "抽纸小jin ",
        },
        {
          id: 10,
          src:
            "https://tn1-f2.kkmh.com/image/171201/wd4irlrb9.webp-t.w180.webp.h",
          bookName: "魔道祖师",
          ToheadAuthor: "墨香铜臭（原著）",
        },
      ],
      // 上头图片右边排行榜
      popularityLists: [
        {
          id: 2,
          title: "爱情的样子：心之所向",
          dated: "第18话  心动不自知",
        },
        {
          id: 3,
          title: "八十一道超纲题",
          dated: "第69话 新副本又将来临",
        },
        {
          id: 4,
          title: "FOG[电竞]",
          dated: "第2话 重逢",
        },
        {
          id: 5,
          title: "星辰于我",
          dated: "第18话 星星的夜空",
        },
        {
          id: 6,
          title: "怪奇实录",
          dated: "第334话  人头蜂巢",
        },
        {
          id: 7,
          title: "超能立方",
          dated: "第196话  交易的艺术",
        },
        {
          id: 8,
          title: "非友人关系",
          dated: "第18话  心动不自知",
        },
        {
          id: 9,
          title: "他那么撩",
          dated: "后记（下）好久不见",
        },
        {
          id: 10,
          title: "不可爱的TA",
          dated: "第9话  让他的眼里只...",
        },
      ],
      // love图片
      loveheadlist: [
        {
          id: 1,
          name: "恋爱",
        },
        {
          id: 2,
          name: "强剧情",
        },
        {
          id: 3,
          name: "古风",
        },
        {
          id: 4,
          name: "校园",
        },
        {
          id: 5,
          name: "奇幻",
        },
        {
          id: 6,
          name: "唯美",
        },
      ],
      activeName: "second",
    };
  },
  methods: {
    // 新作榜事件
    newChange() {
      this.newActive = true;
      this.riseActive = !this.newActive;
      this.redActive = true;
      this.greenActive = !this.redActive;
      this.showImgsList = this.newWorkImgsList;
    },
    // 飙升榜事件
    riseChange() {
      this.riseActive = true;
      this.newActive = !this.riseActive;
      this.greenActive = true;
      this.redActive = !this.greenActive;
      this.showImgsList = this.riseWorkImgsList;
    },
    // 开始的时候让展示图片为新作榜的图片
    getRedImgs() {
      this.showImgsList = this.newWorkImgsList;
    },
  },
  // 生命周期触发开始的事件
  created() {
    this.getRedImgs();
  },
};
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
  /* background-color: pink; */
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
/* 恋爱分类部分 */
</style>
