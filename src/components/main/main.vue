<template>
  <div id="main">
    <el-container>
      <!-- 头部区域 -->
      <el-header>
        <!-- 头部导航栏 -->
        <div class="headerContent">
          <div class="logo" @click="backMain">灰喵！</div>
          <ul class="headerNav">
            <li
              class="bug"
              :key="item.id"
              v-for="item in topMenuList"
              @click="changeNav(item.id)"
            >
              <router-link
                :to="item.path"
                :class="getCurrentID == item.id ? 'navActive' : ''"
              >
                {{ item.topMenuName }}</router-link
              >
            </li>
            <!-- 输入框 -->
            <span class="inputFather">
              <input
                type="text"
                v-model="inputValue"
                placeholder="搜索作品，作者名"
                class="navSearch"
                @blur="inputBlur"
              />
              <i class="el-icon-search"></i>
              <div class="search" v-if="searchShow === true">
                <div class="searchQquery">
                  搜索 <span>{{ inputValue }}</span>
                  相关
                </div>
                <ul class="dropDownList">
                  <li v-for="(item, index) in newBookName" :key="index">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </span>
            <!-- 登录按钮 -->
            <a
              href="#"
              class="login"
              @click="loging"
              v-if="getAppear === true"
              >登录</a
            >
            <a href="#" class="login"  v-if="getAppear === false" @click="showuser">个人中心</a>
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
    <!-- 置顶部分辅助导航栏 -->
    <el-backtop :bottom="100" :visibility-height="800">
      <i class="el-icon-top"></i>
    </el-backtop>
    <!--   个人中心 -->
    <el-drawer title="我是标题" :visible.sync="drawer" :with-header="false">
      <div class="ownerBig">
        <div class="overlay"></div>
        <div class="intrude">
          <header class="ownerHead">
            <a href="javascript:;" class="profilepic">
              <img
                src="https://tncache1-f1.v3mh.com/social/9aa6e4a060ddad59aac4e2926f9738e8-cover-faces"
                class="avatar"
              />
            </a>
            <hgroup>
              <h1 class="headerAuthor">
                <a href="javascript:;">{{ user }}</a>
              </h1>
            </hgroup>
            <hgroup>
              <h1 class="headerAuthor">
                <a href="javascript:;">主人欢迎回家</a>
              </h1>
            </hgroup>
            <div class="myCollection">
              <h1 class="myCollectionTitle">我的收藏</h1>
              <div
                class="CollectionLitsOne"
                v-for="(item, index) in connectionlists"
                :key="index"
              >
                <div class="letfText">
                  <strong class="letfTextNum">{{ index + 1 }}</strong>
                  <span class="letfTextNumT">{{ item.title }}</span>
                </div>
                <div class="rightText">
                  <span class="rightTextA">{{ item.author }}</span>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    </el-drawer>
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
        { id: 5, topMenuName: "热门推荐", path: "/works" },
        { id: 6, topMenuName: "APP下载", path: "/" },
        { id: 7, topMenuName: "IP合作", path: "/" },
        { id: 8, topMenuName: "营销合作", path: "/" },
        { id: 9, topMenuName: "条漫大赛", path: "/" },
      ],
      // 当前导航栏的位置
      inputValue: "",
      drawer: false,
      user: "",
      connectionlists: [],
      searchShow: false,
      newBookName: [],
      timer: null,
    };
  },
  computed:{
    getAppear(){
     return this.$store.getters.appear
    },
    getCurrentID(){
     return this.$store.getters.currentId
    }
  },
  methods: {
    // 导航栏位置改变
    changeNav(id) {
      this.$store.dispatch('changeCurrentId',id)
    },
    loging() {
      this.$router.push("/login");
    },
    backMain() {
      this.$store.dispatch('changeCurrentId',1)
      this.$router.push("./");
    },
    async showuser() {
      const { data: res } = await this.$http.get("/userOwner/name");
      if (res.status !== 200) return this.$message.error("获取个人中心失败");
      this.user = res.name;
      this.connectionlists = res.userCollection;
      this.drawer = true;
    },
    inputBlur() {
      this.searchShow = false;
    },
    searchforEach() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (this.inputValue === "") {
        this.searchShow = false;
      }
      if (this.inputValue) {
        this.newBookName = [];
        this.searchShow = true;
        this.timer = setTimeout(async () => {
          const { data: res } = await this.$http.post("/search/cartoon", {
            title: this.inputValue,
          });
          if (res.status !== 200) return this.$message.error("搜索失败");
          this.newBookName = res.newBookName;
        }, 100);
      }
    },
  },
  created() {},
  watch: {
    inputValue: "searchforEach",
  },
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
  position: relative;
  width: 1184px;
  height: 64px;
  box-sizing: border-box;
}
.logo {
  position: absolute;
  top: 14px;
  left: 5px;
  width: 100px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  font-size: 30px;
  box-sizing: border-box;
  color: pink;
  cursor: pointer;
  font-weight: 700;
}
.headerNav {
  display: inline-block;
  padding-left: 100px;
  height: 32px;
  line-height: 32px;
  margin-top: 16px;
}
.headerNav .bug {
  float: left;
  height: 20.8px !important;
}
.headerNav .bug a {
  padding-right: 24px;
}
.headerNav .bug:hover a {
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
  top: 3px;
  font-size: 20px;
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
/* 个人中心 */
.ownerBig {
  width: 460px;
  height: 100%;
  position: fixed;
}
.overlay {
  width: 100%;
  height: 180px;
  background: #fab1a0;
  position: absolute;
  box-sizing: border-box;
  display: block;
}
.intrude {
  width: 76%;
  height: 100%;
  text-align: center;
  width: 76%;
  margin: 112px auto 0;
  box-sizing: border-box;
}
.ownerHead {
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  box-sizing: border-box;
}
.profilepic {
  border-radius: 300px;
  width: 128px;
  height: 128px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background: #88acdb;
  text-align: center;
}
.avatar {
  border-radius: 300px;
  opacity: 1;
  border: 0;
  vertical-align: middle;
  width: 128px;
  height: 128px;
}
.headerAuthor {
  text-align: center;
  margin: 0.67em 0;
  font-family: Roboto, serif;
  font-size: 20px;
  transition: 0.3s;
  position: relative;
}
.myCollection {
  position: relative;
  width: 100%;
  height: 100%;
  margin-top: 100px;
}
.CollectionLitsOne {
  width: 100%;
  height: 20px;
  margin-top: 20px;
}
.letfTextNum {
  width: 10px;
  line-height: 20px;
  padding-right: 11px;
  font-size: 16px;
  font-weight: normal;
  float: left;
  color: rgb(245, 166, 35);
}
.letfTextNumT {
  float: left;
  display: block;
  line-height: 20px;
  max-width: 112px;
  font-size: 14px;
  color: #333333;
  /*  overflow: hidden; */
  white-space: nowrap;
  text-overflow: ellipsis;
}
.rightText {
  height: 20px;
  line-height: 20px;
  float: right;
}
.rightTextA {
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
.search {
  position: absolute;
  left: 12px;
  max-height: 370px;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  z-index: 9;
  top: 30px;
  width: 252px;
}
.searchQquery {
  padding: 10px 12px;
  font-size: 14px;
  color: #999999;
  line-height: 20px;
}
.searchQquery span {
  display: inline-block;
  max-width: 68%;
  line-height: 20px;
  vertical-align: middle;
  color: #f5a623;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.dropDownList {
  cursor: pointer;
}
.dropDownList li {
  padding: 0 12px;
  height: 40px;
  line-height: 32px;
  font-size: 14px;
  color: #151515;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
</style>
