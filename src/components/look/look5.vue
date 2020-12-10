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
            <el-breadcrumb-item>第5话 作为仆人的“惩罚！</el-breadcrumb-item>
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
                    url:'https://tn1.kkmh.com/image/c244956/200121/zpkQwkafi.webp-w750.jpg?sign=b857d3851638a55b8a73fda99ce4103d&t=5fd1dc00'
                },
                  {
                    id:2,
                    url:'https://tn1.kkmh.com/image/c244956/200121/NwbMFnaAb.webp-w750.jpg?sign=7b9cd879922b361ef2e44ae87fbded6d&t=5fd1dc00'
                },
                {
                    id:3,
                    url:'https://tn1.kkmh.com/image/c244956/200121/bqYJfMEyU.webp-w750.jpg?sign=4a5a3e8b40ed2e5bfa47b7d0dba66ba5&t=5fd1dc00'
                },
                   {
                    id:4,
                    url:'https://tn1.kkmh.com/image/c244956/200121/MJnfQsngZ.webp-w750.jpg?sign=a8c6c7259eb1417ede159c0afe640496&t=5fd1dc00'
                },
                   {
                    id:5,
                    url:'https://tn1.kkmh.com/image/c244956/200121/zabJrGjnj.webp-w750.jpg?sign=a7b4a87fe6bd65af6b70b7408f57c08f&t=5fd1dc00'
                },
                   {
                    id:6,
                    url:'https://tn1.kkmh.com/image/c244956/200121/nuLQmdEUc.webp-w750.jpg?sign=87d5f40124aa597b7e26597f5eeb93fd&t=5fd1dc00'
                },
                   {
                    id:7,
                    url:'https://tn1.kkmh.com/image/c244956/200121/tLCUMUVZq.webp-w750.jpg?sign=913315ca00834473c361d63eef87e71c&t=5fd1dc00'
                },
                   {
                    id:8,
                    url:'https://tn1.kkmh.com/image/c244956/200121/oKVrUkTvj.webp-w750.jpg?sign=f6024ae8e7a50492c1c156b9154239c3&t=5fd1dc00'
                },
                   {
                    id:9,
                    url:'https://tn1.kkmh.com/image/c244956/200121/yNUsxAvXB.webp-w750.jpg?sign=f33e6beb849dfa9a39429bd7a942d636&t=5fd1dc00'
                },
                {
                    id:10,
                    url:'https://tn1.kkmh.com/image/c244956/200121/CQBfGgATv.webp-w750.jpg?sign=c821d295aa0d867c51459215fd800517&t=5fd1dc00'
                },
                {
                    id:11,
                    url:'https://tn1.kkmh.com/image/c244956/200121/CH40rM3z5.webp-w750.jpg?sign=4601461bac6e04732cd653da28fa22b2&t=5fd1dc00'
                },
                {
                    id:12,
                    url:'https://tn1.kkmh.com/image/c244956/200121/dyYDTYtye.webp-w750.jpg?sign=6f93c6738afad77783a452afbc2c8ac3&t=5fd1dc00'
                },
                {
                    id:13,
                    url:'https://tn1.kkmh.com/image/c244956/200121/MiulekLNx.webp-w750.jpg?sign=c104b72aa832b8a6e3be69aa5ecc9e5e&t=5fd1dc00'
                },
                {
                    id:14,
                    url:'https://tn1.kkmh.com/image/c244956/200121/xHtuMNHTY.webp-w750.jpg?sign=d1bff1a6a82def3915c3a31bd1a1fb76&t=5fd1dc00'
                },
                {
                    id:15,
                    url:'https://tn1.kkmh.com/image/c244956/200121/jKqguTyGm.webp-w750.jpg?sign=ca9545a3033a0138e42fca614c580b51&t=5fd1dc00'
                },
                  {
                    id:16,
                    url:'https://tn1.kkmh.com/image/c244956/200121/XYfuSlzWA.webp-w750.jpg?sign=caf2be18b24e26d1004c5b7edb8431bc&t=5fd1dc00'
                },
                  {
                    id:17,
                    url:'https://tn1.kkmh.com/image/c244956/200121/zlmHrZttv.webp-w750.jpg?sign=6d62a19e24072f50ccbf3b5fb6996c41&t=5fd1dc00'
                },
                {
                    id:18,
                    url:'https://tn1.kkmh.com/image/c244956/200121/hBqWWESeb.webp-w750.jpg?sign=0a33451fe22e44bf0726c75052e807dd&t=5fd1dc00'
                },
                {
                    id:19,
                    url:'https://tn1.kkmh.com/image/c244956/200121/FQbsIUuVk.webp-w750.jpg?sign=97bcf8b09ae4928118150ab83318ead5&t=5fd1dc00'
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
            this.$router.push('/look4')
        },
        nextPage () {
            this.$message.error("已经是最后一话啦！！！")
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
