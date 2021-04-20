<template>
  <div>
    <div class="sortFther">
      <div class="sortItem">
        <div class="userSelected">
          <span>已选</span>
          <el-tag
           type="warning"
            v-for="(item, index) in allSelect"
            :key="index"
            
          >
            {{ item.selectName }}
          </el-tag>
        </div>

        <div class="theme">
          <div>
            <span>题材</span>
            <el-tag
              :key="index"
              v-for="(item, index) in themeList"
              @click="seletOne(item.themeName)"
              >{{ item.themeName }}</el-tag
            >
          </div>
        </div>
        <div class="schedule">
          <span>进度</span>
          <el-tag
            :key="index"
            v-for="(item, index) in scheduleList"
            @click="seletOne(item.themeName)"
            >{{ item.themeName }}</el-tag
          >
        </div>
        <div class="sortImgs">
          <ul>
            <li
              class="imgPage"
              :key="item.id"
              v-for="item in sortImgsList"
              :label="true"
            >
              <a href="javascript:;">
                <el-image
                  style="width: 184px; height: 224px"
                  :src="item.url"
                ></el-image>
                <div class="imgsContent">
                  <span>{{ item.bookName }}</span>
                  <p>{{ item.author }}</p>
                  <svg
                    class="iconS"
                    aria-hidden="true"
                    @click="
                      Collectionadd(
                        item.id,
                        item.bookName,
                        item.author,
                        item.distinguish
                      )
                    "
                    v-if="item.distinguish === true"
                  >
                    <use xlink:href="#icon-shoucang"></use>
                  </svg>
                  <svg
                    class="iconS"
                    aria-hidden="true"
                    @click="Collectiondelect(item.bookName, item.distinguish)"
                    v-else-if="item.distinguish === false"
                  >
                    <use xlink:href="#icon-shoucang1"></use>
                  </svg>
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="page">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="total"
            :current-page="pagenum"
            :page-size="pagesize"
            @current-change="handleCurrentChange"
          >
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import '../../assets/fontShou/iconfont.js'
export default {
  created() {
    this.getList()
  },
  data() {
    return {
      allSelect: [{ selectName: '全部' }],
      themeList: [
        { id: 2, themeName: '全部' },
        { id: 3, themeName: '恋爱' },
        { id: 4, themeName: '剧情' },
        { id: 5, themeName: '古风' },
        { id: 6, themeName: '校园' },
        { id: 7, themeName: '奇幻' },
        { id: 8, themeName: '唯美' },
        { id: 9, themeName: '热血' },
        { id: 10, themeName: '日漫' },
        { id: 11, themeName: '韩漫' },
        { id: 12, themeName: '大女主' },
      ],
      scheduleList: [
        { id: 14, themeName: '完结' },
        { id: 15, themeName: '穿越' },
        { id: 16, themeName: '萌系' },
        { id: 17, themeName: '灵异' },
        { id: 18, themeName: '玄幻' },
        { id: 19, themeName: '搞笑' },
        { id: 20, themeName: '都市' },
        { id: 21, themeName: '投稿' },
        { id: 22, themeName: '总裁' },
        { id: 23, themeName: '正能量' },
      ],
      // 分类图片
      sortImgsList: [],
      //页码
      pagenum: 1,
      total: 100,
      pagesize: 18,
      checkone:'全部'
      //收藏的显示与隐藏
    }
  },
  computed:{
 getele(){
      const ele_login=sessionStorage.getItem('token')
      return ele_login
    }
  },
  methods: {
    async seletOne(name) {
      let obj = { selectName: name }
      this.allSelect.push(obj)
      this.allSelect.splice(0, 1)
     this.checkone=name
      const { data: res } = await this.$http.get('/paging/sort', {
        params:{
          name
        }
      })
 if (name === '全部') {
        this.getList()
      }
      this.sortImgsList = res.list
      this.total = res.total
    },
    async getList() {
      const { data: res } = await this.$http.get('/paging/img', {
        params: {
          pagenum: this.pagenum,
          pagesize: this.pagesize,
        },
      })
      this.sortImgsList = res.pag
      this.total = res.total
    },
    handleCurrentChange(newPage) {
      this.pagenum = newPage
      this.getList()
    },
    async Collectionadd(id, bookName, author, distinguish) {
      if(!this.getele) return this.$router.push('/login')
      const { data: res } = await this.$http.post('/paging/collection', {
        id: id,
        title: bookName,
        author: author,
        distinguish: distinguish,
      })
      if (res.status !== 200) return this.$message.error('收藏失败')
     this.judge()
    },
    async Collectiondelect(bookName) {
      const { data: res } = await this.$http.delete('/paging/collectionDec', {
       params:{
              bookName
       }
      })
      if (res.status !== 200) return this.$message.error('取消收藏失败')
      this.judge()
      this.$message.success('取消收藏成功')
    },
    judge(){
      if(this.checkone==='全部'){
        this.getList()
      }else{
        this.seletOne(this.checkone)
      }
    },
    islogin(){
      const ele_login=sessionStorage.getItem('ele_login')
      if(!ele_login){
        this.$router.push('/login')
      }
    }
  },
}
</script>
<style scoped>
.sortFther {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.sortItem {
  margin-top: 30px;
  width: 1184px;
  background-color: #fff;
  position: relative;
  height: 1300px;
}
.userSelected {
  padding: 13px 0;
  height: 26px;
  line-height: 26px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  border-bottom: 1px solid #d2d2d2;
}
.userAll {
  display: inline-block;
  width: 36px;
  height: 28px;
  background-color: #ffd706;
  border-radius: 5px;
  color: #000;
  text-align: center;
  margin-left: 30px;
}
.theme {
  margin-top: 25px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  height: 40px;
}
.sortItem span {
  display: inline-block;
  margin-right: 38px;
  cursor: pointer;
}
.schedule {
  margin-top: 10px;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #999999;
  height: 41px;
}
.sortImgs {
  width: 1184px;
  margin-top: 30px;
}
.imgPage {
  float: left;
}
.imgPage a {
  display: inline-block;
  width: 184px;
  height: 295px;
  background-color: #fff;
  margin: 0 16px 30px 0;
}
.imgPage:nth-child(6n) a {
  margin-right: 0 !important;
}
.imgsContent span {
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.imgsContent {
  position: relative;
}
.imgsContent p {
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.page {
  position: absolute;
  bottom: 50px;
  left: 200px;
}
.iconS {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  margin-left: 13px;
  cursor: pointer;
  position: absolute;
  right: 0;
  bottom: 23px;
  z-index: 100;
}
</style>
