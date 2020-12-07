<template>
  <div id="main">
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <div class="headerContent">
          <span class="logo">灰喵！</span>
          <ul class="headerNav">
            <li
              :key="item.id"
              v-for="item in topMenuList"
              @click="changeNav(item.id)"
            >
              <router-link
                :to="item.path"
                :class="currentId == item.id ? 'navActive' : ''"
              >
                {{ item.topMenuName }}</router-link
              >
            </li>
            <span class="inputFather">
              <input
                type="text"
                class="navSearch"
                v-model="inputValue"
                placeholder="搜索作品，作者名"
              />
              <i class="el-icon-search"></i>
            </span>
            <a href="#" class="login">登录</a>
          </ul>
        </div>
      </el-header>
      <!-- 主题区占位符 -->
      <el-main>
        <router-view></router-view>
      </el-main>
      <!-- 底部区域 -->
      <el-footer>
        <div class="footer-bottom">
          <div class="footer-left">
            <p>创造人：阿辉 喵喵拳</p>
            <p>全部信息 灰喵漫画 版权所有</p>
          </div>
          <div class="footer-right">
            <ul>
              <li>
                <a href="">首页</a>
              </li>
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
        { id: 1, topMenuName: "首页", path: "/context" },
        { id: 2, topMenuName: "分类", path: "/sort" },
        { id: 3, topMenuName: "排行榜", path: "/rank" },
        { id: 4, topMenuName: "世界", path: "/world" },
        { id: 5, topMenuName: "原创投稿", path: "/" },
        { id: 6, topMenuName: "APP下载", path: "/" },
        { id: 7, topMenuName: "IP合作", path: "/" },
        { id: 8, topMenuName: "营销合作", path: "/" },
        { id: 9, topMenuName: "条漫大赛", path: "/" },
      ],
      currentId: 1, // 当前导航栏的位置
      inputValue: "",
    };
  },
  methods: {
    // 导航栏位置改变
    changeNav(id) {
      this.currentId = id;
    },
  },
  created() {},
};
</script>
<style scoped>
.navActive {
  color: white;
  font-size: 20px;
}
.el-container {
  height: 100%;
}
header {
  padding: 0 !important;
}
.el-header {
  background-color: #202020;
  display: flex;
  justify-content: center;
  height: 64px !important;
}
.headerContent {
  width: 1184px;
  height: 64px;
  box-sizing: border-box;
}
.logo {
  position: absolute;
  top: 16px;
  width: 64px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  font-size: 20px;
  box-sizing: border-box;
  color: #ffd806;
  cursor: pointer;
  font-weight: 700;
}
.headerNav {
  display: inline-block;
  padding-left: 90px;
  height: 32px;
  line-height: 32px;
  margin-top: 16px;
}
.headerNav li {
  float: left;
}
.headerNav li a {
  padding-right: 24px;
}
.headerNav li:hover a {
  color: white;
}
/* 输入框 */
.navSearch {
  padding: 9px 38px 9px 16px;
  width: 190px;
  height: 14px;
  border-radius: 16px;
  border: none;
  outline: none;
  margin-left: 16px;
  font-size: 13px;
  color: #d2d2d2;
}
.inputFather {
  position: relative;
}
.el-icon-search {
  position: absolute;
  right: 15px;
  top: 1px;
  font-size: 25px;
  color: #d2d2d2;
}
.login {
  margin-left: 30px;
  color: white;
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
.footer-left p {
  margin: 0px;
  margin-bottom: 10px;
}
.footer-right {
  margin-right: 150px;
  margin-top: 50px;
  float: right;
}
.footer-right ul li {
  color: #999999;
  font-size: 12px;
  float: left;
  margin: 0 10px;
  margin-bottom: 10px;
  cursor: pointer;
}
.el-main {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
