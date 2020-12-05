<template>
  <div>
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

</style>
