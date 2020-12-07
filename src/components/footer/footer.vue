<template>
  <div>
     <!--  恋爱分类部分 -->
   <el-card class="loveClassification">
     <div class="loveClassificationBig">
       <div class="loveheader">
         <ul class="loveul">
           <li v-for="(item,index) in loveheadlist" :key="index">
             {{item.name}}
           </li>
         </ul>
       </div>
     </div>
   </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
/* 恋爱分类部分 */
.loveClassification{
  display: flex;
  justify-content: center;
  align-content: center;
  overflow: hidden;
  height: 519px;
  margin-left: 0;
  margin: 0 !important;
  padding: 0 !important;
  background: url(https://static3w.kuaikanmanhua.com/static-kkfront-pc/image/categories_bg_laugh.eaaa7bc.jpg) left top / cover no-repeat;
}
.loveClassificationBig{
  width: 1184px;
}

</style>
