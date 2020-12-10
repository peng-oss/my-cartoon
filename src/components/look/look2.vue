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
            <el-breadcrumb-item>第2话 作为仆人的“惩罚！</el-breadcrumb-item>
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
                    url:'https://tn1.kkmh.com/image/c233988/200106/ZRpkkOitm.webp-w750.jpg?sign=81e03bd80eefeb2a5ba39895c28a5a73&t=5fd1a354'
                },
                  {
                    id:2,
                    url:'https://tn1.kkmh.com/image/c233988/200106/AuDTURTqc.webp-w750.jpg?sign=a1af3187a53d05fc3fe22028f2093c21&t=5fd1a354'
                },
                {
                    id:3,
                    url:'https://tn1.kkmh.com/image/c233988/200106/XStcMqCfb.webp-w750.jpg?sign=a64b7b3a20b55f45695ed105ed0cdf7b&t=5fd1a354'
                },
                   {
                    id:4,
                    url:'https://tn1.kkmh.com/image/c233988/200106/xzxKROahH.webp-w750.jpg?sign=cc13e8ed7d231660ecce2976f961df2d&t=5fd1a354'
                },
                   {
                    id:5,
                    url:'https://tn1.kkmh.com/image/c233988/200106/bEZkvMiUC.webp-w750.jpg?sign=d1ae70bb943f636578027a22fc742e81&t=5fd1a354'
                },
                   {
                    id:6,
                    url:'https://tn1.kkmh.com/image/c233988/200106/wpBJLpgxM.webp-w750.jpg?sign=42c666947d3e608c34f2944d1cec72cc&t=5fd1ccad'
                },
                   {
                    id:7,
                    url:'https://tn1.kkmh.com/image/c233988/200106/EwIpqhfHa.webp-w750.jpg?sign=3e970e7788cf27889af9887d04350eff&t=5fd1ccad'
                },
                   {
                    id:8,
                    url:'https://tn1.kkmh.com/image/c233988/200106/JFfPNvKRV.webp-w750.jpg?sign=10a11ad2d48aa0357758b7d14258c791&t=5fd1ccad'
                },
                   {
                    id:9,
                    url:'https://tn1.kkmh.com/image/c233988/200106/teMhKAXOx.webp-w750.jpg?sign=fd67f1de456ba290adeea6f3004c1182&t=5fd1ccad'
                },
                {
                    id:10,
                    url:'https://tn1.kkmh.com/image/c233988/200106/hCNbkrSJo.webp-w750.jpg?sign=095b9fe7a633446f98669e68049811cc&t=5fd1cd5e'
                },
                {
                    id:11,
                    url:'https://tn1.kkmh.com/image/c233988/200106/EJtUHgoGk.webp-w750.jpg?sign=066a355f788206d55b519d0a4ada4990&t=5fd1ccad'
                },
                {
                    id:12,
                    url:'https://tn1.kkmh.com/image/c233988/200106/asMyYKMwE.webp-w750.jpg?sign=c632b7047e085f2c509f6e95b4d3d619&t=5fd1cd5e'
                },
                {
                    id:13,
                    url:'https://tn1.kkmh.com/image/c233988/200106/ff59lJ1oA.webp-w750.jpg?sign=dc73681205360669d818063599967405&t=5fd1cd5e'
                },
                {
                    id:14,
                    url:'https://tn1.kkmh.com/image/c233988/200106/gokTfVRAg.webp-w750.jpg?sign=f4bd91d99e82751f7b062731d35e5baa&t=5fd1cd5e'
                },
                {
                    id:15,
                    url:'https://tn1.kkmh.com/image/c233988/200106/PSmMkVrDo.webp-w750.jpg?sign=d6381c54695d37a668515e6483afb2f7&t=5fd1cd5e'
                },
                  {
                    id:16,
                    url:'https://tn1.kkmh.com/image/c233988/200106/SjlzGLmxL.webp-w750.jpg?sign=8e46069c1276dee62368793d48dfc358&t=5fd1cd5e'
                },
                  {
                    id:17,
                    url:'https://tn1.kkmh.com/image/c233988/200106/iZtnZXCad.webp-w750.jpg?sign=8e9813694214cb504c918c913fedf0f1&t=5fd1cd5e'
                },
                {
                    id:18,
                    url:'https://tn1.kkmh.com/image/c233988/200106/zQTOmPidj.webp-w750.jpg?sign=51a2ea1ca554f3a686957726312134e1&t=5fd1cd5e'
                },
                {
                    id:19,
                    url:'https://tn1.kkmh.com/image/c233988/200106/eOIWRNhPp.webp-w750.jpg?sign=6e4a5fc0883beb9c56d92fe36b560c18&t=5fd1cd5e'
                },
                 {
                    id:20,
                    url:'https://tn1.kkmh.com/image/c233988/200106/YnOcJnQJb.webp-w750.jpg?sign=9642fe8f001b34301b6fc2c1e624bc68&t=5fd1cd5e'
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
            this.$router.push('/look1')
        },
        nextPage() {
              this.$router.push('/look3')
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