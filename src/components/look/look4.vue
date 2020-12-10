<template>
   <div>
       <!-- 章节侧边栏 -->
       <div class="chatper" @click="ifHide">
           <i class="el-icon-s-unfold"></i>
           <p>章</p>
           <p>节</p>
       </div>
       <div class="chatperContent" :class="{ hideStyle:ifHideStyle}">
           <ul>
               <li :key="value.id" v-for="value in chatperList" @click="enterLookn(value.id)"><a href="#">{{value.chatperName}}</a></li>
           </ul>
       </div>
        <div class="lookContent">
          <!-- 漫画题目导航栏 -->
        <div class="lookTitle">
         <el-breadcrumb separator="-">
            <el-breadcrumb-item>作品</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/' }" class="weight">查看首页</el-breadcrumb-item>
            <el-breadcrumb-item :to="{ path: '/works'}">狄奥多之歌</el-breadcrumb-item>
            <el-breadcrumb-item>第4话 作为仆人的“惩罚！</el-breadcrumb-item>
        </el-breadcrumb>
        </div>
        <!-- 翻页位置 -->
        <div class="turnPage">
            <ul>
                <li><a href="#" @click="backPage">上一话</a></li>
                <li>|</li>
                <li><a href="#" @click="nextPage">下一话</a></li>
            </ul>
        </div>
        <!-- 中间漫画图片内容  -->
        <div class="lookImgs">
        <ul>
           <li v-for="(item,index) in lookImgsList" :key="index"> 
           <el-image
            style="width: 564px; height: 440.66px"
            :src="item.url"
           ></el-image>
           </li>
         </ul>
        </div>
    </div>
   </div>
</template>
<script>
export default {
    data(){
        return{
            // 中间漫画图片内容 
      lookImgsList:[
                {   id:1,
                    url:'https://tn1.kkmh.com/image/c244706/200120/zQtaRvocz.webp-w750.jpg?sign=895cae32b58c97fec8f30198b07e46af&t=5fd1da2c'
                },
                  {
                    id:2,
                    url:'https://tn1.kkmh.com/image/c244706/200120/FtrsYCnJW.webp-w750.jpg?sign=09b8791046621d6fb7472de63a9949d6&t=5fd1da2c'
                },
                {
                    id:3,
                    url:'https://tn1.kkmh.com/image/c244706/200120/UFwqKuTyJ.webp-w750.jpg?sign=d3203c0e16d23f1feedef0f3d38fe0bf&t=5fd1da2c'
                },
                   {
                    id:4,
                    url:'https://tn1.kkmh.com/image/c244706/200120/wNrnprbCK.webp-w750.jpg?sign=e09f49f5ca76709abb0040d6f609df91&t=5fd1da2c'
                },
                   {
                    id:5,
                    url:'https://tn1.kkmh.com/image/c244706/200120/SaijrWnow.webp-w750.jpg?sign=b8c247e850d24277ca8edb40d2949719&t=5fd1da2c'
                },
                   {
                    id:6,
                    url:'https://tn1.kkmh.com/image/c244706/200120/SiNdjSVff.webp-w750.jpg?sign=71efda84bed59f46ef1b1152e5ba8a09&t=5fd1da2c'
                },
                   {
                    id:7,
                    url:'https://tn1.kkmh.com/image/c244706/200120/xjOEtWqDa.webp-w750.jpg?sign=68a4e82aa8bd661b013d3f8d23bf3b81&t=5fd1da2c'
                },
                   {
                    id:8,
                    url:'https://tn1.kkmh.com/image/c244706/200120/tkWsxjxOF.webp-w750.jpg?sign=f48aa6fe2ec158948716f76394c55252&t=5fd1da2c'
                },
                   {
                    id:9,
                    url:'https://tn1.kkmh.com/image/c244706/200120/FWuCscmLt.webp-w750.jpg?sign=d2df2b748072d1e95d520c430b1b191e&t=5fd1da2c'
                },
                {
                    id:10,
                    url:'https://tn1.kkmh.com/image/c244706/200120/MkENzyyaX.webp-w750.jpg?sign=86455c50af7f1604edb665ef20baf93e&t=5fd1da2c'
                },
                {
                    id:11,
                    url:'https://tn1.kkmh.com/image/c244706/200120/ogqmdxrGl.webp-w750.jpg?sign=09a150905adf4c2e53522468b8ebf564&t=5fd1da2c'
                },
                {
                    id:12,
                    url:'https://tn1.kkmh.com/image/c244706/200120/GQRvkozBK.webp-w750.jpg?sign=de945b87a8fd8cdcddf5a07b55b5b07b&t=5fd1da2c'
                },
                {
                    id:13,
                    url:'https://tn1.kkmh.com/image/c244706/200120/KyIKCNrHu.webp-w750.jpg?sign=6032a8aef3baf299f2f87f6de5282fc6&t=5fd1da2c'
                },
                {
                    id:14,
                    url:'https://tn1.kkmh.com/image/c244706/200120/wRbXBVmlD.webp-w750.jpg?sign=b72e0916c847890fd0114d5707f05b35&t=5fd1da2c'
                },
                  {
                    id:15,
                    url:'https://tn1.kkmh.com/image/c244706/200120/kxADdPjTz.webp-w750.jpg?sign=63c76881499dc66a59a320b0f53b1f8f&t=5fd1da2c'
                },
                  {
                    id:16,
                    url:'https://tn1.kkmh.com/image/c244706/200120/cbUqaYQOd.webp-w750.jpg?sign=6b8313c85eaf4e221b4e7c012d0f5acc&t=5fd1da2c'
                },
                {
                    id:17,
                    url:'https://tn1.kkmh.com/image/c244706/200120/IHDpIZPsV.webp-w750.jpg?sign=cfef4e7e1f691fb5b9eaa068a6e599b1&t=5fd1da2c'
                },
                {
                    id:18,
                    url:'https://tn1.kkmh.com/image/c244706/200120/SgYZxvR6g.webp-w750.jpg?sign=4132be95ee08ce43efcf3c74ee36f74f&t=5fd1da2c'
                },
                 {
                    id:29,
                    url:'https://tn1.kkmh.com/image/c244706/200120/bseNjzCJG.webp-w750.jpg?sign=c91866d9e9699545a3ebba42ccaaf54c&t=5fd1da2c'
                },
                 {
                    id:20,
                    url:'https://tn1.kkmh.com/image/c244706/200120/bEahEJBji.webp-w750.jpg?sign=d6b8903e8a35b6d2839bc0ea7801027d&t=5fd1da2c'
                },
                {
                    id:21,
                    url:'https://tn1.kkmh.com/image/c244706/200120/NlcwxIsGi.webp-w750.jpg?sign=dbe6d0d88c261f404d648cabf97986bd&t=5fd1da2c'
                },
                ],
            // 右侧章节导航栏
        chatperList:[ 
            { 
                id:999,
                chatperName:"狄奥多之歌"
             },
             { 
                id:0,
                chatperName:"序章 硝烟域泪"
             },
             { 
                id:1,
                chatperName:"第1话 我要你做我仆人！"
             },
             { 
                id:2,
                chatperName:"第2话 作为仆人的“惩罚"
             },
             { 
                id:3,
                chatperName:"第3话 骑马教学这么甜？！"
             },
              { 
                id:4,
                chatperName:"第4话 公主的价值"
             },
               { 
                id:5,
                chatperName:"第5话 鼓励"
             } 
            ],
        ifHideStyle:true
        }
    },
    methods:{
       backPage(){
            this.$router.push('/look3')
        },
        nextPage() {
              this.$router.push('/look5')
        },
        // 显示和隐藏章节内容盒子的方法
        ifHide() {
          this.ifHideStyle = !this.ifHideStyle;
        },
        // 通过侧边章节导航栏跳往不同的章节
        enterLookn(id){
      console.log(id);
      switch(id) {
       case 999:
        this.$router.push('/works')
        break;
       case 0:
        this.$router.push('/look0')
        break;
      case 1:
         this.$router.push('/look1')
        break;
      case 2:
         this.$router.push('/look2')
        break;
      case 3:
         this.$router.push('/look3')
        break;
      case 4:
         this.$router.push('/look4')
        break;
      case 5:
         this.$router.push('/look5')
        break;
      default:
        console.log(id);
        }
    }
 }
 }
</script>
<style scoped>
 /* 章节侧边栏 */
.chatper{
    position: fixed;
    top: 100px;
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
    background-color:#f5f5f5;
}
.chatper i {
    margin-top: 15px;
}
.chatper p{
    margin: 0;
    padding: 0;
}
  /* 是否隐藏章节内容 */
.hideStyle {
    display: none;
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
.chatperContent li:nth-child(1) {
    font-size: 18px;
}
.chatperContent li:nth-child(1) a{
    color: #000;
}
.chatperContent li {
    padding: 10px 15px;
    cursor: pointer;
}
.chatperContent li:hover {
   background-color: #e5e5e5; 
}
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
 /* 翻页 */
 .turnPage {
     display: flex;
     justify-content: center;
 }
.turnPage ul{
 margin-top: 25px;
}
.turnPage ul li {
    padding: 2px 10px;
    float: left;
    font-weight: 300;
}
 /* 中间漫画图片内容 */
.lookImgs {
    margin-top: 30px;
    width: 1140px;
    display: flex;
    justify-content: center;
}
.lookImgs ul li {
    height: 440.66px!important;
}
</style>