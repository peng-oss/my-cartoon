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
            <el-breadcrumb-item>序章 硝烟与泪</el-breadcrumb-item>
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
                    url:'https://tn1.kkmh.com/image/c223327/200104/m5BG1YkGM.webp-w750.jpg?sign=9be61209df4d65a66684b3df4f5b9988&t=5fd1cee1'
                },
                  {
                    id:2,
                    url:'https://tn1.kkmh.com/image/c223327/200104/GXuFUrX7a.webp-w750.jpg?sign=b6e4e7cbf6775ce280fc35075c977ae9&t=5fd1cee1'
                },
                {
                    id:3,
                    url:'https://tn1.kkmh.com/image/c223327/200104/t4i5NMjIh.webp-w750.jpg?sign=f7af289f7f1bea8b5cd832bcebdee8c6&t=5fd1cee1'
                },
                   {
                    id:4,
                    url:'https://tn1.kkmh.com/image/c223327/200104/yiplXH3kb.webp-w750.jpg?sign=2fbd7790fcf37404bf62c917db899c44&t=5fd1cee1'
                },
                   {
                    id:5,
                    url:'https://tn1.kkmh.com/image/c223327/200104/aETYKoWjh.webp-w750.jpg?sign=746cd6780272c5fc9ebbbe106bb5f680&t=5fd1cee1'
                },
                   {
                    id:6,
                    url:'https://tn1.kkmh.com/image/c223327/200104/TSZOdPvcK.webp-w750.jpg?sign=1b37e8fb13ce152499aa46910c24102f&t=5fd1cee1'
                },
                   {
                    id:7,
                    url:'https://tn1.kkmh.com/image/c223327/200104/DUUwzWLV7.webp-w750.jpg?sign=22f82c2d24397481f07b2d92078d7b01&t=5fd1cee1'
                },
                   {
                    id:8,
                    url:'https://tn1.kkmh.com/image/c223327/200104/YigF7Mx2J.webp-w750.jpg?sign=f67ccdb00143da6eb861a45bc1ff1021&t=5fd1cee1'
                },
                   {
                    id:9,
                    url:'https://tn1.kkmh.com/image/c223327/200104/I7cABFdF7.webp-w750.jpg?sign=d29bd3c0d0c101d8111c1926f3eea6eb&t=5fd1cee1'
                },
                {
                    id:10,
                    url:'https://tn1.kkmh.com/image/c223327/200104/9LRp54scM.webp-w750.jpg?sign=01e01dd4601524c5f27443b1d8391a37&t=5fd1cee1'
                },
                {
                    id:11,
                    url:'https://tn1.kkmh.com/image/c223327/200104/PPaCBTxIB.webp-w750.jpg?sign=c9bb449fa48e9cf728e907ff10e88864&t=5fd1cee1'
                },
                {
                    id:12,
                    url:'https://tn1.kkmh.com/image/c223327/200104/e2m13QwXe.webp-w750.jpg?sign=041918bc547d7e52e975d029f55f642d&t=5fd1cee1'
                },
                {
                    id:13,
                    url:'https://tn1.kkmh.com/image/c223327/200104/7xe0YBS5W.webp-w750.jpg?sign=3857c36e6fb1a42a04bfb000084e8885&t=5fd1cee1'
                },
                {
                    id:14,
                    url:'https://tn1.kkmh.com/image/c223327/200104/EgY9leNUY.webp-w750.jpg?sign=08a34171720b77031b707a6034953af6&t=5fd1cee1'
                },
                {
                    id:15,
                    url:'https://tn1.kkmh.com/image/c223327/200104/gUsha1fCn.webp-w750.jpg?sign=1f7ec66786631d068d22a128c9b88390&t=5fd1cee1'
                },
                  {
                    id:16,
                    url:'https://tn1.kkmh.com/image/c223327/200104/6ClX6DJZ1.webp-w750.jpg?sign=d3e4ada30c2ffebb5d2b7176e07f9bdf&t=5fd1cee1'
                },
                  {
                    id:17,
                    url:'https://tn1.kkmh.com/image/c223327/200104/9yNFhvJ1Q.webp-w750.jpg?sign=268e53d5ce3dc9f0e62fc811797a52f9&t=5fd1cee1'
                },
                {
                    id:18,
                    url:'https://tn1.kkmh.com/image/c223327/200104/26mO9q03P.webp-w750.jpg?sign=9a77d334fb1c4591346977c282cd9390&t=5fd1cee1'
                },
                {
                    id:19,
                    url:'https://tn1.kkmh.com/image/c223327/200104/Lg4ZQw4K5.webp-w750.jpg?sign=d8844e86c9097ddfdb54d1b441c4cac4&t=5fd1cee1'
                },
                 {
                    id:20,
                    url:'https://tn1.kkmh.com/image/c223327/200104/qu52m37yy.webp-w750.jpg?sign=a527e13743bf9f678399659479e9fa8e&t=5fd1cee1'
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
            this.$message.error("现在已经是最前面啦！！！")
        },
        nextPage(){
            this.$router.push('/look1')
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