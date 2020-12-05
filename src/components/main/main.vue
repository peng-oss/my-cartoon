<template>
  <div>

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
          <el-menu-item index="9">条漫太赛</el-menu-item>
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
 <!--  轮播图 -->
    <el-carousel :interval="2000" type="card" height="500px">
      <el-carousel-item v-for="(img, index) in imgList">
       <el-row>
         <el-col :span='24'>
<img v-bind:src="img.url">  
         </el-col>
      </el-row>
      </el-carousel-item>
    </el-carousel>
    <!-- 导航栏 -->
    <el-menu mode="horizontal" background-color=" rgb(51,50,64)" text-color="rgb(184,184,184)"active-text-color='rgb(184,184,184)'>
      <el-menu-item index="1">恋爱</el-menu-item>
      <el-menu-item index="2">强剧情</el-menu-item>
      <el-menu-item index="3">古风</el-menu-item>
      <el-menu-item index="4">校园</el-menu-item>
      <el-menu-item index="5">奇幻</el-menu-item>
      <el-menu-item index="6">唯美</el-menu-item>
      <el-menu-item index="7">热血</el-menu-item>
      <el-menu-item index="8">日漫</el-menu-item>
      <el-menu-item index="9">韩漫</el-menu-item>
      <el-menu-item index="10">大女主</el-menu-item>
      <el-menu-item index="11">完结</el-menu-item>
      <el-menu-item index="12">穿越</el-menu-item>
      <el-menu-item index="13">萌系</el-menu-item>
      <el-menu-item index="14">灵异</el-menu-item>
      <el-menu-item index="15">全部</el-menu-item>
    </el-menu>
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
      imgList: [
        { url: require('./Lp/1.jpg') },
        { url: require('./Lp/2.jpg') },
        { url: require('./Lp/3.jpg') },
        { url: require('./Lp/4.jpg') },
        { url: require('./Lp/5.jpg') },
        { url: require('./Lp/7.jpg') },
      ],
    }
  },
  methods: {},
  created() {},
}
</script>
<style scoped>
.el-carousel {
  background-color: rgb(51, 50, 64);
  margin-top: 65px;
}
.el-carousel-item {
  padding-top: 20px;
}
.el-menu {
  padding-left: 200px;
}

.el-carousel__item {
  width: 100%;
  display: flex;
  align-items: center;
}
.img {
    max-width: 100%;
    max-height: 100%;
   }
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
</style>
