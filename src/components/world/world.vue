<template>
  <div class="world">
    <div class="worldContent">
      <!-- 标题 -->
      <h1>快来一起发表你的看法吧!!!</h1>
      <!-- 评论输入框 -->
      <div class="talkInput">
        <el-image
          class="imgAvatar"
          style="width: 70px; height: 70px"
          src="https://tncache1-f1.v3mh.com/social/9aa6e4a060ddad59aac4e2926f9738e8-cover-faces"
        ></el-image>
        <el-input
          class="enterInput"
          type="textarea"
          :rows="3"
          placeholder="发布友善的评论"
          v-model="inputComments"
        >
        </el-input>
        <el-button type="primary" class="enterButton" @click="publishContent"
          >发表评论</el-button
        >
      </div>
      <!-- 评论展示区域 -->
      <table class="commentArea" cellspacing="0">
        <tbody>
          <tr v-for="(item, index) in commentsList" :key="index">
            <td>
              <el-image
                class="commentImgs"
                style="width: 70px; height: 70px"
                :src="item.url"
              ></el-image>
              <h5 class="userName">{{ item.userName }}</h5>
            </td>
            <td>
              <p class="publishContent">{{ item.word }}</p>
              <p class="publishTime">
                {{ item.time | format('yyyy-MM-dd hh:mm ') }}
              </p>
            </td>
            <td>
              <a href="" class="delete" @click.prevent="deleteComment(index)"
                >删除</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inputComments: '',
      // 评论的数据
      commentsList: [],
      date: new Date(),
    }
  },
  created() {
    // 调用渲染已存在的评论方法
    this.getComments()
  },
  methods: {
    // 发表评论 喵喵拳欧耶
    async publishContent() {
      if (this.inputComments.length != '') {
        const { data: res } = await this.$http.post('/world/publish', {
          inputComments: this.inputComments,
          date: this.date,
        })
        // 发表数组成功
        if (res.status == 200) {
          // 重新渲染一下页面
          this.getComments()
          // 并且清除输入框内容
          this.inputComments = ''
        }
      } else {
        this.$message.error('主人评论不能为空哟')
      }
    },
    // 删除评论 需要传入 被删除评论的 索引 
    async deleteComment(index) {
      // this.commentsList.splice(index, 1);
      const { data: res } = await this.$http.get('/world/delete', {
        params: { delIndex: index },
      })
      if (res.status == 200) {
        this.getComments()
      }
    },
    // 打开页面渲染已存在的评论
    async getComments() {
      const { data: res } = await this.$http.get('/world/getComment')
      this.commentsList = res.list
    },
  },
}
</script>
<style scoped>
.worldContent {
  margin: 30px auto;
  width: 1184px;
  /* background-color: skyblue; */
}
.worldContent h1 {
  text-align: center;
  color: pink;
  font-size: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid #a4a4a4;
}
.talkInput {
  width: 1184px;
  height: 100px;
  /* background-color: pink; */
  padding: 0 !important;
  position: relative;
}
.enterInput {
  width: 600px;
  padding: 5px 10px;
  margin-left: 269px;
  font-size: 14px;
  color: #000;
  font-weight: 700;
}
.imgAvatar {
  border-radius: 50%;
  position: absolute;
  top: 5px;
  left: 170px;
}
.enterButton {
  margin-left: 30px;
  height: 80px;
  width: 80px;
  padding: 0 !important;
}
.commentArea {
  width: 850px;
  margin: 0 auto;
}
.commentArea tr td {
  /* border-bottom: 1px solid #a4a4a4; */
  /* border-right: 1px solid #a4a4a4; */
  padding: 10px 0;
}
.commentArea tr td:nth-child(1) {
  width: 111px;
}
.commentArea tr td:nth-child(2) {
  padding-left: 12px;
  width: 586px;
}
.commentArea tr td:nth-child(3) {
  text-align: center;
}
.commentImgs {
  border-radius: 50% !important;
}
.userName {
  margin: 0;
  width: 70px;
  text-align: center;
}
.publishContent {
  font-size: 18px;
}
.publishTime {
  font-size: 12px;
  color: #a4a4a4;
}
.delete:hover {
  color: pink;
}
</style>
