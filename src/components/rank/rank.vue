<template>
  <div class="rank">
    <div class="rankBig">
      <el-tabs
        :tab-position="tabPosition"
        style="height: 400px;"
        @tab-click="handleClick"
      >
        <el-tab-pane label="全部">
          <div
            class="popularityList"
            v-for="(item, index) in rankPopularityLists"
            :key="index"
          >
            <div class="popBigTitle">
              <h1>{{ item.rankName }}</h1>
            </div>
            <div class="list">
              <div class="hovers">
                <div class="leftFl">
                  <a href="#"><img :src="item.imgUrl" alt=""/></a>
                  <i class="hoversI">1</i>
                </div>
                <div class="rightFr">
                  <div class="title">
                    <a href="#">{{ item.title }}</a>
                  </div>
                  <div class="labelListCls">
                    <span class="fl">{{ item.type[0] }}</span>
                    <span class="fl">{{ item.type[1] }}</span>
                    <span class="fl">{{ item.type[2] }}</span>
                  </div>
                  <div class="depict">
                    <span class="dec">{{ item.dec }}</span>
                  </div>
                  <a href="#" class="chapter">
                    <span class="LFl">更新至：</span>
                    <span class="RFl">{{ item.chapter }}</span>
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
        </el-tab-pane>
        <el-tab-pane label="少女榜">
          <div
            class="girlHovers "
            v-for="(item, index) in girllists"
            :key="index"
          >
            <div class="leftFl">
              <a href="#"><img :src="item.url" alt=""/></a>
              <i class="hoversI">{{ item.id }}</i>
            </div>
            <div class="rightFr">
              <div class="title">
                <a href="#">{{ item.title }}</a>
              </div>
              <div class="labelListCls">
                <span class="fl">{{ item.type[0] }}</span>
                <span class="fl">{{ item.type[1] }}</span>
              </div>
              <div class="depict">
                <span class="dec">{{ item.describe }}</span>
              </div>
              <a href="#" class="chapter">
                <span class="LFl">{{ item.author }}</span>
              </a>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="青女榜">
          <div
            class="girlHovers "
            v-for="(item, index) in yongGirllists"
            :key="index"
          >
            <div class="leftFl">
              <a href="#"><img :src="item.url" alt=""/></a>
              <i class="hoversI">{{ item.id }}</i>
            </div>
            <div class="rightFr">
              <div class="title">
                <a href="#">{{ item.title }}</a>
              </div>
              <div class="labelListCls">
                <span class="fl">{{ item.type[0] }}</span>
                <span class="fl">{{ item.type[1] }}</span>
              </div>
              <div class="depict">
                <span class="dec">{{ item.describe }}</span>
              </div>
              <a href="#" class="chapter">
                <span class="LFl">{{ item.author }}</span>
              </a>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="少年榜">
          <div
            class="girlHovers "
            v-for="(item, index) in yonglists"
            :key="index"
          >
            <div class="leftFl">
              <a href="#"><img :src="item.url" alt=""/></a>
              <i class="hoversI">{{ item.id }}</i>
            </div>
            <div class="rightFr">
              <div class="title">
                <a href="#">{{ item.title }}</a>
              </div>
              <div class="labelListCls">
                <span class="fl">{{ item.type[0] }}</span>
                <span class="fl">{{ item.type[1] }}</span>
              </div>
              <div class="depict">
                <span class="dec">{{ item.describe }}</span>
              </div>
              <a href="#" class="chapter">
                <span class="LFl">{{ item.author }}</span>
              </a>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="青年榜">
          <div
            class="girlHovers "
            v-for="(item, index) in girllists"
            :key="index"
          >
            <div class="leftFl">
              <a href="#"><img :src="item.url" alt=""/></a>
              <i class="hoversI">{{ item.id }}</i>
            </div>
            <div class="rightFr">
              <div class="title">
                <a href="#">{{ item.title }}</a>
              </div>
              <div class="labelListCls">
                <span class="fl">{{ item.type[0] }}</span>
                <span class="fl">{{ item.type[1] }}</span>
              </div>
              <div class="depict">
                <span class="dec">{{ item.describe }}</span>
              </div>
              <a href="#" class="chapter">
                <span class="LFl">{{ item.author }}</span>
              </a>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="人气榜">
          <div
            class="girlHovers "
            v-for="(item, index) in yongGirllists"
            :key="index"
          >
            <div class="leftFl">
              <a href="#"><img :src="item.url" alt=""/></a>
              <i class="hoversI">{{ item.id }}</i>
            </div>
            <div class="rightFr">
              <div class="title">
                <a href="#">{{ item.title }}</a>
              </div>
              <div class="labelListCls">
                <span class="fl">{{ item.type[0] }}</span>
                <span class="fl">{{ item.type[1] }}</span>
              </div>
              <div class="depict">
                <span class="dec">{{ item.describe }}</span>
              </div>
              <a href="#" class="chapter">
                <span class="LFl">{{ item.author }}</span>
              </a>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="新作榜">
          <div
            class="girlHovers "
            v-for="(item, index) in yonglists"
            :key="index"
          >
            <div class="leftFl">
              <a href="#"><img :src="item.url" alt=""/></a>
              <i class="hoversI">{{ item.id }}</i>
            </div>
            <div class="rightFr">
              <div class="title">
                <a href="#">{{ item.title }}</a>
              </div>
              <div class="labelListCls">
                <span class="fl">{{ item.type[0] }}</span>
                <span class="fl">{{ item.type[1] }}</span>
              </div>
              <div class="depict">
                <span class="dec">{{ item.describe }}</span>
              </div>
              <a href="#" class="chapter">
                <span class="LFl">{{ item.author }}</span>
              </a>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="畅销榜">
          <div
            class="girlHovers "
            v-for="(item, index) in yongGirllists"
            :key="index"
          >
            <div class="leftFl">
              <a href="#"><img :src="item.url" alt=""/></a>
              <i class="hoversI">{{ item.id }}</i>
            </div>
            <div class="rightFr">
              <div class="title">
                <a href="#">{{ item.title }}</a>
              </div>
              <div class="labelListCls">
                <span class="fl">{{ item.type[0] }}</span>
                <span class="fl">{{ item.type[1] }}</span>
              </div>
              <div class="depict">
                <span class="dec">{{ item.describe }}</span>
              </div>
              <a href="#" class="chapter">
                <span class="LFl">{{ item.author }}</span>
              </a>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="日漫榜">
          <div
            class="girlHovers "
            v-for="(item, index) in yongGirllists"
            :key="index"
          >
            <div class="leftFl">
              <a href="#"><img :src="item.url" alt=""/></a>
              <i class="hoversI">{{ item.id }}</i>
            </div>
            <div class="rightFr">
              <div class="title">
                <a href="#">{{ item.title }}</a>
              </div>
              <div class="labelListCls">
                <span class="fl">{{ item.type[0] }}</span>
                <span class="fl">{{ item.type[1] }}</span>
              </div>
              <div class="depict">
                <span class="dec">{{ item.describe }}</span>
              </div>
              <a href="#" class="chapter">
                <span class="LFl">{{ item.author }}</span>
              </a>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="韩漫榜">
          <div
            class="girlHovers "
            v-for="(item, index) in yonglists"
            :key="index"
          >
            <div class="leftFl">
              <a href="#"><img :src="item.url" alt=""/></a>
              <i class="hoversI">{{ item.id }}</i>
            </div>
            <div class="rightFr">
              <div class="title">
                <a href="#">{{ item.title }}</a>
              </div>
              <div class="labelListCls">
                <span class="fl">{{ item.type[0] }}</span>
                <span class="fl">{{ item.type[1] }}</span>
              </div>
              <div class="depict">
                <span class="dec">{{ item.describe }}</span>
              </div>
              <a href="#" class="chapter">
                <span class="LFl">{{ item.author }}</span>
              </a>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="完结榜">
          <div
            class="girlHovers "
            v-for="(item, index) in yongGirllists"
            :key="index"
          >
            <div class="leftFl">
              <a href="#"><img :src="item.url" alt=""/></a>
              <i class="hoversI">{{ item.id }}</i>
            </div>
            <div class="rightFr">
              <div class="title">
                <a href="#">{{ item.title }}</a>
              </div>
              <div class="labelListCls">
                <span class="fl">{{ item.type[0] }}</span>
                <span class="fl">{{ item.type[1] }}</span>
              </div>
              <div class="depict">
                <span class="dec">{{ item.describe }}</span>
              </div>
              <a href="#" class="chapter">
                <span class="LFl">{{ item.author }}</span>
              </a>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="投稿榜">
          <div
            class="girlHovers "
            v-for="(item, index) in girllists"
            :key="index"
          >
            <div class="leftFl">
              <a href="#"><img :src="item.url" alt=""/></a>
              <i class="hoversI">{{ item.id }}</i>
            </div>
            <div class="rightFr">
              <div class="title">
                <a href="#">{{ item.title }}</a>
              </div>
              <div class="labelListCls">
                <span class="fl">{{ item.type[0] }}</span>
                <span class="fl">{{ item.type[1] }}</span>
              </div>
              <div class="depict">
                <span class="dec">{{ item.describe }}</span>
              </div>
              <a href="#" class="chapter">
                <span class="LFl">{{ item.author }}</span>
              </a>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="vip专区">
          <div
            class="girlHovers "
            v-for="(item, index) in yonglists"
            :key="index"
          >
            <div class="leftFl">
              <a href="#"><img :src="item.url" alt=""/></a>
              <i class="hoversI">{{ item.id }}</i>
            </div>
            <div class="rightFr">
              <div class="title">
                <a href="#">{{ item.title }}</a>
              </div>
              <div class="labelListCls">
                <span class="fl">{{ item.type[0] }}</span>
                <span class="fl">{{ item.type[1] }}</span>
              </div>
              <div class="depict">
                <span class="dec">{{ item.describe }}</span>
              </div>
              <a href="#" class="chapter">
                <span class="LFl">{{ item.author }}</span>
              </a>
            </div>
          </div></el-tab-pane
        >
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabPosition: 'top',

      popularityLists: [],
      rankPopularityLists: [],
      girllists: [],
      yongGirllists: [],
      yonglists: [],
    }
  },
  methods: {
    async handleClick(tab) {
      switch (tab.label) {
        case '少女榜':
          const { data: res1 } = await this.$http.get('/rank/girl')
          this.girllists = res1.list
          break
        case '青女榜':
          const { data: res2 } = await this.$http.get('/rank/yongGirl')
          this.yongGirllists = res2.list
          break
        case '少年榜':
          const { data: res3 } = await this.$http.get('/rank/yong')
          this.yonglists = res3.list
          break
      }
    },
    async gerAllrankList() {
      const { data: res } = await this.$http.get('/rank/all')
      if (res.status !== 200) return this.$message.error('获取榜单失败')
      this.rankPopularityLists = res.list
      this.popularityLists = res.little
    },
  },
  created() {
    this.gerAllrankList()
  },
}
</script>
<style scoped>
.rank {
  height: auto;
  min-height: 1500px;
}

.popularityList {
  margin-top: 20px;
  float: left;
}
.rankBig {
  width: 1184px;
  margin: 0 auto;
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

.el-tab-pane {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.girlModular {
  margin-right: 16px;
  padding-top: 32px;
  width: 384px;
  height: 180px;
}
.girlHovers {
  width: 356px;
  height: 167px;
  margin-top: 60px;
}
</style>
