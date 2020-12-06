<template>
  <div id="main">
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <el-menu
          mode="horizontal"
          background-color="#202020"
          text-color="#c1c1c1"
          active-text-color="#1dd1a1"
        >
          <el-menu-item
            v-for="(item, index) in topMenuList"
            :key="item.id"
            :index="item.id"
            >{{ item.topMenuNname }}
          </el-menu-item>
          <el-menu-item>
            <el-input
              placeholder="搜索作品，作者名"
              suffix-icon="el-icon-search"
              size="mini"
            >
            </el-input>
          </el-menu-item>
          <el-menu-item>登录</el-menu-item>
          <el-menu-item>我要投稿</el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <!-- 主题区占位符 -->
        <router-view></router-view>
      </el-main>
      <!-- 底部区域 -->
      <el-footer>
        <div class="footer-bottom">
          <div class="footer-left">
            <p>版权归阿灰，喵喵拳所有</p>
            <p>全部信息 灰喵漫画 版权所有 未经许可 严禁转载</p>
          </div>
          <div class="footer-right">
            <ul>
              <li>首页</li>
              <li>APP下载</li>
              <li>关于灰喵</li>
              <li>加入我们</li>
            </ul>
            <ul>
              <li>帮助</li>
              <li>漏洞奖励</li>
              <li>家长监护</li>
              <li>用户协议</li>
            </ul>
          </div>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topMenuList: [
        { id: 1, topMenuNname: '首页' },
        { id: 2, topMenuNname: '分类' },
        { id: 3, topMenuNname: '排行榜' },
        { id: 4, topMenuNname: '世界' },
        { id: 5, topMenuNname: '原创投稿' },
        { id: 6, topMenuNname: 'APP下载' },
        { id: 7, topMenuNname: 'IP合作' },
        { id: 8, topMenuNname: '营销合作' },
        { id: 9, topMenuNname: '条漫大赛' },
      ],
    }
  },
  methods: {},
  created() {},
}
</script>
<style scoped>
.el-container {
  height: 100%;
}
header {
  padding: 0 !important;
}
.el-menu {
  display: flex;
  justify-content: center;
}
.el-menu-item {
  padding: 0 12px !important;
  font-size: 13px !important;
}
.footer-bottom {
  width: 1184px;
  height: 100%;
}
.footer-left {
  margin-left: 150px;
  float: left;
  width: 30%;
  font-size: 12px;
  color: #999999;
  margin-top: 50px;
}
.footer-right {
  margin-right: 150px;
  margin-top: 50px;
  float: right;
}
.footer-right ul li {
  list-style: none;
  color: #999999;
  font-size: 12px;
  float: left;
  margin: 0 10px;
  margin-bottom: 8px;
  cursor: pointer;
}
.el-main {
  height: 100%;
  margin: 0;
  padding: 0;
}
/* #main{
  height:100%
} */
</style>
