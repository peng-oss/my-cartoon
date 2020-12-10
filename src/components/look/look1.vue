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
            <el-breadcrumb-item>第1话 我要你做我仆人！</el-breadcrumb-item>
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
                    url:'https://tn1.kkmh.com/image/c223322/200104/1HNjVxZ92.webp-w750.jpg?sign=b9b96f7aebb899ee2671a80aaff3b521&t=5fd19706'
                },
                  {
                    id:2,
                    url:'https://tn1.kkmh.com/image/c223322/200104/imxieSLe2.webp-w750.jpg?sign=2be8f3b9254c64e582b38c611f0c167e&t=5fd19706'
                },
                {
                    id:3,
                    url:'https://tn1.kkmh.com/image/c223322/200104/VUOCcKiMf.webp-w750.jpg?sign=2bc817742f66eb54d9b07394942bdd3d&t=5fd19706'
                },
                   {
                    id:4,
                    url:'https://tn1.kkmh.com/image/c223322/200104/Di1VWKjoO.webp-w750.jpg?sign=84bf7b44ea49acf8aa925b88335c65d0&t=5fd19706'
                },
                   {
                    id:5,
                    url:'https://tn1.kkmh.com/image/c223322/200104/O0O4N3fRz.webp-w750.jpg?sign=9b9bbb405f29f0a3dd42205eb9ffb044&t=5fd19706'
                },
                   {
                    id:6,
                    url:'https://tn1.kkmh.com/image/c223322/200104/PVbT6xRri.webp-w750.jpg?sign=8a40f361d120581248362400c9793b54&t=5fd19706'
                },
                   {
                    id:7,
                    url:'https://tn1.kkmh.com/image/c223322/200104/wGTlXei3o.webp-w750.jpg?sign=cbe72fc320f22f5bf64f3b2d0f1955e1&t=5fd19706'
                },
                   {
                    id:8,
                    url:'https://tn1.kkmh.com/image/c223322/200104/JLDBgwkaZ.webp-w750.jpg?sign=d0ef6da38b87ed78351950e17cdf387c&t=5fd19706'
                },
                   {
                    id:9,
                    url:'https://tn1.kkmh.com/image/c223322/200104/xBwk66cDC.webp-w750.jpg?sign=2665bf7bbda255a37db5e4ae60b3617d&t=5fd19706'
                },
                {
                    id:10,
                    url:'https://tn1.kkmh.com/image/c223322/200104/B3Gnxw77o.webp-w750.jpg?sign=59e661b584db7fa6b8af05ff40cef6d8&t=5fd19706'
                },
                {
                    id:11,
                    url:'https://tn1.kkmh.com/image/c223322/200104/bQ84wbLjK.webp-w750.jpg?sign=0763494a217ac0690fd06f22f39d7388&t=5fd19706'
                },
                {
                    id:12,
                    url:'https://tn1.kkmh.com/image/c223322/200104/YkamJa47A.webp-w750.jpg?sign=2658cf39c188b7d5cd8bb6315d7b5943&t=5fd19706'
                },
                {
                    id:13,
                    url:'https://tn1.kkmh.com/image/c223322/200104/T6FdEQy0f.webp-w750.jpg?sign=5e52595e67ab37456f0f8d751feddea6&t=5fd19706'
                },
                {
                    id:14,
                    url:'https://tn1.kkmh.com/image/c223322/200104/TAyv3nm9w.webp-w750.jpg?sign=25d7e3664e99880ed75d2fa4a53b47cc&t=5fd19706'
                },
                {
                    id:15,
                    url:'https://tn1.kkmh.com/image/c223322/200104/fk3ubgRYu.webp-w750.jpg?sign=e798c64dd69695093950d26270e3d27a&t=5fd19706'
                },
                  {
                    id:16,
                    url:'https://tn1.kkmh.com/image/c223322/200104/crda2bo45.webp-w750.jpg?sign=acb8914411413e7f02c724636e609c65&t=5fd19706'
                },
                  {
                    id:17,
                    url:'https://tn1.kkmh.com/image/c223322/200104/H3eJXzvne.webp-w750.jpg?sign=0defb1b4d9bbdff9e4fa2a869b07c987&t=5fd19706'
                },
                {
                    id:18,
                    url:'https://tn1.kkmh.com/image/c223322/200104/wQAzy8W7A.webp-w750.jpg?sign=dfb097fb89e1327a746096686b711b53&t=5fd19706'
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
       nextPage() {
        this.$router.push('/look2')
       },
       backPage() {
       this.$router.push('/look0')
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
