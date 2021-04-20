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
            <rankList :firstWork="item" :popularityLists="popularityLists" />
          </div>
        </el-tab-pane>
        <el-tab-pane label="少女榜">
          <rankContext :lists="girllists" />
        </el-tab-pane>
        <el-tab-pane label="青女榜">
          <rankContext :lists="yongGirllists" />
        </el-tab-pane>
        <el-tab-pane label="少年榜">
          <rankContext :lists="yonglists" />
        </el-tab-pane>
        <el-tab-pane label="青年榜">
          <rankContext :lists="girllists" />
        </el-tab-pane>
        <el-tab-pane label="人气榜">
          <rankContext :lists="yongGirllists" />
        </el-tab-pane>
        <el-tab-pane label="新作榜">
          <rankContext :lists="yonglists" />
        </el-tab-pane>
        <el-tab-pane label="畅销榜">
          <rankContext :lists="yonglists" />
        </el-tab-pane>
        <el-tab-pane label="日漫榜">
          <rankContext :lists="yongGirllists" />
        </el-tab-pane>
        <el-tab-pane label="韩漫榜">
          <rankContext :lists="yonglists" />
        </el-tab-pane>
        <el-tab-pane label="完结榜">
          <rankContext :lists="yongGirllists" />
        </el-tab-pane>
        <el-tab-pane label="投稿榜">
          <rankContext :lists="girllists" />
        </el-tab-pane>
        <el-tab-pane label="vip专区">
          <rankContext :lists="yonglists" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import rankContext from '../../views/rankContext'
import rankList from '../../views/rankList'
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
  components: {
    rankContext,
    rankList,
  },
  methods: {
    async handleClick(tab) {
      switch (tab.label) {
        case '少女榜':
          const { data: res1 } = await this.$http.get('/rank/girl')
          this.girllists = res1.list[0].list
          break
        case '青女榜':
          const { data: res2 } = await this.$http.get('/rank/yongGirl')
          this.yongGirllists = res2.list[0].list
          break
        case '少年榜':
          const { data: res3 } = await this.$http.get('/rank/yong')
          this.yonglists = res3.list[0].list
          break
      }
    },
    async gerAllrankList() {
      const { data: res } = await this.$http.get('/rank/all')
      if (res.status !== 200) return this.$message.error('获取榜单失败')
      this.rankPopularityLists = res.list[0].list
      this.popularityLists = res.little[0].list
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
.el-tab-pane {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
