<template>
  <div>
    <!-- 章节侧边栏 -->
    <Chatper :chatperList="chatperList" @enterLookn="enterLookn" 
    :chatperName="chatperName"
    />
    <div class="lookContent">
      <!-- 漫画题目导航栏 -->
     <bread
      titleName="第5话 鼓励"
      />
      <!-- 翻页位置 -->
      <div class="turnPage">
        <ul>
          <li><a href="#" @click="backPage">上一话</a></li>
          <li>|</li>
          <li><a href="#" @click="nextPage">下一话</a></li>
        </ul>
      </div>
      <!-- 中间漫画图片内容  -->
      <lookImgs :lookImgsList="lookImgsList" />
    </div>
  </div>
</template>
<script>
import Chatper from '../../views/chatper'
import lookImgs from '../../views/lookImgs'
import bread from '../../views/bread'
export default {
  data() {
    return {
      // 中间漫画图片内容
      lookImgsList: [],
      // 右侧章节导航栏
      chatperList: [],
      ifHideStyle: true,
      chatperName:''
    }
  },
  components: {
    Chatper,
    lookImgs,
    bread
  },
  created() {
    this.getData()
  },
  methods: {
    async getData() {
      const { data: res } = await this.$http.get('/works/look', {
        params: { toId: 5 },
      })
      if (res.status == 200) {
        this.chatperList = res.backchatperList
        this.lookImgsList = res.backImgsList5
      }
    },
    backPage() {
      this.$router.push('/look4')
    },
    nextPage() {
      this.$message.error('已经是最后一话啦！！！')
    },
    // 通过侧边章节导航栏跳往不同的章节
    enterLookn(value) {
     this.chatperName=value.chatperName
      switch (value.id) {
        case 999:
          this.$router.push('/works')
          break
        case 0:
          this.$router.push('/look0')
          break
        case 1:
          this.$router.push('/look1')
          break
        case 2:
          this.$router.push('/look2')
          break
        case 3:
          this.$router.push('/look3')
          break
        case 4:
          this.$router.push('/look4')
          break
        case 5:
          this.$router.push('/look5')
          break
        default:
         return
      }
    },
  },
}
</script>
<style scoped>

/* 观看漫画的版心 */
.lookContent {
  width: 1140px;
  margin: 0 auto;
  position: relative;
  margin-top: 30px;
  padding-bottom: 24px;
  border-radius: 6px;
  border: 1px solid #e5e5e5;
  margin-bottom: 24px;
  /* background-color: skyblue; */
}

/* 翻页 */
.turnPage {
  display: flex;
  justify-content: center;
}
.turnPage ul {
  margin-top: 25px;
}
.turnPage ul li {
  padding: 2px 10px;
  float: left;
  font-weight: 300;
}
</style>
