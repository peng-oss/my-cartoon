<template>
<div class="bigbox">
  <div class="girlHovers " v-for="(item, index) in lists" :key="index">
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
  </div>
</template>

<script>
export default {
  name: 'rankContext',
  props:{
    lists:Array,
  }
}
</script>
<style scoped>
.bigbox {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.girlHovers {
  width: 356px;
  height: 167px;
  margin-top: 60px;
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
.rightFr {
  float: right;
  padding-left: 12px;
  width: 224px;
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
</style>
