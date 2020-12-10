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
            <el-breadcrumb-item>第3话 骑马教学这么甜？！</el-breadcrumb-item>
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
                    url:'https://tn1.kkmh.com/image/c241044/200113/jPXLYPwZb.webp-w750.jpg?sign=1ad861c9a52b12df5b163033139ec706&t=5fd1d772'
                },
                  {
                    id:2,
                    url:'https://tn1.kkmh.com/image/c241044/200113/lBMAPjmcx.webp-w750.jpg?sign=7e772ea17cc6d2bf7289deff41275aad&t=5fd1d772'
                },
                {
                    id:3,
                    url:'https://tn1.kkmh.com/image/c241044/200113/zOTPQdVIn.webp-w750.jpg?sign=da51e5155492428538197977ef433252&t=5fd1d772'
                },
                   {
                    id:4,
                    url:'https://tn1.kkmh.com/image/c241044/200113/CyVmTKrwS.webp-w750.jpg?sign=277224b55afee010a573b93eb4776cc5&t=5fd1d772'
                },
                   {
                    id:5,
                    url:'https://tn1.kkmh.com/image/c241044/200113/xZsxhOzYp.webp-w750.jpg?sign=1ce0b8bb6c7a7de74dbc69bb44a36fe2&t=5fd1d772'
                },
                   {
                    id:6,
                    url:'https://tn1.kkmh.com/image/c241044/200113/CTAMhhnIM.webp-w750.jpg?sign=bc5dc4bc005ce6751ea9a0870215bdb9&t=5fd1d772'
                },
                   {
                    id:7,
                    url:'https://tn1.kkmh.com/image/c241044/200113/QBmNEhQgi.webp-w750.jpg?sign=144b24aa9c28130e0f765dc73bfe5f1f&t=5fd1d772'
                },
                   {
                    id:8,
                    url:'https://tn1.kkmh.com/image/c241044/200113/xbsOfoegj.webp-w750.jpg?sign=82dc7fe66ccccdc34369af797d2fe30b&t=5fd1d772'
                },
                   {
                    id:9,
                    url:'https://tn1.kkmh.com/image/c241044/200113/wtWikZWca.webp-w750.jpg?sign=43ac2002a5edea6c5289555a352405a1&t=5fd1d772'
                },
                {
                    id:10,
                    url:'https://tn1.kkmh.com/image/c241044/200113/to2joFIjP.webp-w750.jpg?sign=8789d0e7534230e4f330fb1bdcaa5086&t=5fd1d772'
                },
                {
                    id:11,
                    url:'https://tn1.kkmh.com/image/c241044/200113/aZCHrFYxC.webp-w750.jpg?sign=ba3e3099e268435229348015986ef2e2&t=5fd1d772'
                },
                {
                    id:12,
                    url:'https://tn1.kkmh.com/image/c241044/200113/ixhWlLzlC.webp-w750.jpg?sign=e0a5739e0a564e647b21ccf439b90391&t=5fd1d772'
                },
                {
                    id:13,
                    url:'https://tn1.kkmh.com/image/c241044/200113/mdTJHDKLG.webp-w750.jpg?sign=ad9643cf04ada9678e777deedf63223d&t=5fd1d772'
                },
                {
                    id:14,
                    url:'https://tn1.kkmh.com/image/c241044/200113/MHZgyqQec.webp-w750.jpg?sign=1aceba5638fc10786fce7becf50b4055&t=5fd1d772'
                },
                {
                    id:15,
                    url:'https://tn1.kkmh.com/image/c241044/200113/wYkVbNuEo.webp-w750.jpg?sign=94ac71ab3888c69079aaef4f400682b4&t=5fd1d772'
                },
                  {
                    id:16,
                    url:'https://tn1.kkmh.com/image/c241044/200113/RDeQZpfYl.webp-w750.jpg?sign=3289f1429d3979d6bef7e9429616fde5&t=5fd1d772'
                },
                  {
                    id:17,
                    url:'https://tn1.kkmh.com/image/c241044/200113/PNEFuxHSX.webp-w750.jpg?sign=628407680bedcd91af5bba23303c5b10&t=5fd1d772'
                },
                {
                    id:18,
                    url:'https://tn1.kkmh.com/image/c241044/200113/W6QvnvXdb.webp-w750.jpg?sign=b000799d0bbe6b05c254c4295aafe0c7&t=5fd1d772'
                },
                {
                    id:19,
                    url:'https://tn1.kkmh.com/image/c241044/200113/zJcZdZnhh.webp-w750.jpg?sign=b3c2d758e392f1e2b31302d0101de563&t=5fd1d772'
                },
                 {
                    id:20,
                    url:'https://tn1.kkmh.com/image/c241044/200113/ATVljhXED.webp-w750.jpg?sign=8d2f73e1d6a3f619943e373eca9d69bc&t=5fd1d772'
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
            this.$router.push('/look2')
        },
        nextPage() {
              this.$router.push('/look4')
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
 