<template>
   <div class="RankingList">
          <span><h1>{{firstWork.rankName}}</h1></span>
          <div class="popularityList">
            <div class="list">
              <div class="hovers">
                <div class="leftFl">
                  <a href="javascript:;"
                    ><img
                      :src="firstWork.imgUrl"
                      alt=""
                  /></a>
                  <i class="hoversI">1</i>
                </div>
                <div class="rightFr">
                  <div class="title">
                    <a href="javascript:;">{{firstWork.title}}</a>
                  </div>
                  <div class="labelListCls">
                    <span class="fl">{{firstWork.type[1]}}</span>
                    <span class="fl">{{firstWork.type[2]}}</span>
                    <span class="fl">{{firstWork.type[3]}}</span>
                  </div>
                  <div class="depict">
                    <span class="dec"
                      >{{firstWork.dec}}</span
                    >
                  </div>
                  <a href="#" class="chapter">
                    <span class="LFl">更新至：</span>
                    <span class="RFl">{{firstWork.chapter}}</span>
                  </a>
                </div>
              </div>
            </div>
            <div
              class="list"
              v-for="(item, index) in popularityLists"
              :key="index"
            >
              <div class="textBox">
                <div class="leftText">
                  <strong class="leftTextFl" style="color: rgb(245, 166, 35)">{{
                    item.id
                  }}</strong>
                  <span class="titleFl">
                    {{ item.title }}
                  </span>
                </div>
                <div class="rightText">
                  <span class="rightText1"> 更新至 </span>
                  <span class="rightText2">
                    {{ item.dated }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
</template>

<script>
export default {
name:'rankList',
props:{
   firstWork:Object,
   popularityLists:Array
}
}

</script>
<style scoped>
.RankingList {
  width: 356px;

}
.list {
  margin-bottom: 17px;
}
.hovers {
  width: 356px;
  height: 167px;
}
.rightFr {
  float: right;
  padding-left: 12px;
  width: 224px;
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
.RFl {
  float: right;
  width: 168px;
  line-height: 20px;
  font-size: 14px;
  color: #f56c6c;
  overflow: hidden;
}
.textBox {
  max-width: 356px;
  width: 356px;
  display: block;
  height: 20px;
}
.leftTextFl {
  width: 10px;
  line-height: 20px;
  padding-right: 11px;
  font-size: 16px;
  font-weight: normal;
  float: left;
}
.titleFl {
  float: left;
  display: block;
  line-height: 20px;
  max-width: 112px;
  font-size: 14px;
  color: #333333;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.rightText {
  height: 20px;
  line-height: 20px;
  float: right;
}
.rightText1 {
  line-height: 20px;
  font-size: 14px;
  color: #999999;
  float: left;
}
.rightText2 {
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
</style>