<template>
   <div class="lookTitle">
        <el-breadcrumb separator="-">
          <el-breadcrumb-item>作品</el-breadcrumb-item>
          <el-breadcrumb-item :to="{ path: '/' }" class="weight"
            >查看首页</el-breadcrumb-item
          >
          <el-breadcrumb-item :to="{ path: '/works' }"
            >狄奥多之歌</el-breadcrumb-item
          >
          <el-breadcrumb-item>{{titleName}}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
</template>

<script>
export default {
name:'bread',
props:{
   titleName:String
}
}

</script>
<style scoped>
/* 漫画题目导航栏  */
.lookTitle {
  width: 100%;
  height: 40px;
  background-color: #fbfbfb;
  padding: 12px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  font-size: 16px;
  line-height: 20px;
  color: #666;
  box-sizing: border-box;
}
</style>