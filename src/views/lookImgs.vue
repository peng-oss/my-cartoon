<template>
  <div class="lookImgs">
    <ul>
      <li v-for="(item, index) in lookImgsList" :key="index">
        <img style="width: 564px; height: 440.66px" :src="item.url" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "lookImgs",
  props: {
    lookImgsList: Array,
  },
  //  :src="item.url"
};
</script>
<style scoped>
.lookImgs {
  margin-top: 30px;
  width: 1140px;
  display: flex;
  justify-content: center;
}
.lookImgs ul li {
  height: 440.66px !important;
}
</style>