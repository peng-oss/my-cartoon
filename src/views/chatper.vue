<template>
  <div>
    <div class="chatper" @click="ifHide">
      <i class="el-icon-s-unfold"></i>
      <p>章</p>
      <p>节</p>
    </div>
    <div class="chatperContent" v-if="ifHideStyle">
      <ul>
        <li
          :key="index"
          v-for="(value, index) in chatperList"
          @click="$emit('enterLookn', value)"
          :class="{ checkone: chapterName == value.chapterName }"
        >
          <a href="#">{{ value.chapterName }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "chatper",
  data() {
    return {
      ifHideStyle: false,
    };
  },
  props: {
    chatperList: Array,
    chapterName: String,
  },
  methods: {
    ifHide() {
      this.ifHideStyle = !this.ifHideStyle;
    },
  },
};
</script>
<style scoped>
.chatper {
  position: fixed;
  top: 120px;
  left: 148px;
  width: 40px;
  height: 90px;
  text-align: center;
  border: 1px solid #e5e5e5;
  border-right: 0;
  border-top-left-radius: 13px;
  border-bottom-left-radius: 13px;
  cursor: pointer;
}
.chatper:hover {
  background-color: #f5f5f5;
}
.chatper i {
  margin-top: 15px;
}
.chatper p {
  margin: 0;
  padding: 0;
}
.chatperContent {
  position: fixed;
  top: 100px;
  left: 189px;
  width: 240px;
  background-color: #fff;
  z-index: 2;
  border: 1px solid #e5e5e5;
  border-radius: 5px;
}
.chatperContent li {
  padding: 10px 15px;
  cursor: pointer;
}
.chatperContent li:hover {
  background-color: #e5e5e5;
}
.checkone {
  color: black;
}
</style>
