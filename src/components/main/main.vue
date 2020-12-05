<template>
  <div id='main'>
     <el-container>
      <el-header>
        <el-menu
          mode="horizontal"
          background-color="#202020"
          text-color="#c1c1c1"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">分类</el-menu-item>
          <el-menu-item index="3">排行榜</el-menu-item>
          <el-menu-item index="4">世界</el-menu-item>
          <el-menu-item index="5">原创投稿</el-menu-item>
          <el-menu-item index="6">APP下载</el-menu-item>
          <el-menu-item index="7">IP合作</el-menu-item>
          <el-menu-item index="8">营销合作</el-menu-item>
          <el-menu-item index="9">条漫大赛</el-menu-item>
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
        <router-view>
    </router-view>
      </el-main>
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
    
    }
  },
  methods: {},
  created() {},
}
</script>
<style scoped>
.el-container {
    height: 100% 
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
.el-main{
  height: 100%;
  margin:0;
  padding: 0;
}
/* #main{
  height:100%
} */
</style>
