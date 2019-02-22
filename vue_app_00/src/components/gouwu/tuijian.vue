<template>
  <div class="app-home">
     <!--第一个：顶部导航条-->
     
    <sousuo></sousuo>
    <!--<daohang></daohang>-->
     <!--第二个：轮播图-->
    <swiper-box :list="list"></swiper-box>
     <!--第三个：两个图片-->
    <div class="liang">
      <img src="http://127.0.0.1:3000/img/1.png" alt="">
      <img src="http://127.0.0.1:3000/img/2.png" alt="">
    </div>
     <!--第四个：灰色块-->
     <div class="hui"></div>
    <!--第五个：限时秒杀-->
    <div class="xianshi">
      <div class="xian0">
        <div class="xian">限时秒杀</div>
        <div class="ju">距结束还有
          <div>{{ `${h}:${m}:${s}` }}</div>
        </div>
      </div>
      <div class="xiang">
        <seller :seller="seller"></seller>
      </div>
    </div>
  </div>  
</template>
<script>
//1:引入子组件
 import swipe from "../sub/swiper.vue";
 import sousuo from "../sub/sousuo.vue";
 import daohang from "../sub/daohang.vue";
 import seller from "../sub/seller.vue";


 export default {
   components:{
      "swiper-box":swipe,
      "sousuo":sousuo,
      "daohang":daohang,
      "seller":seller,
      
    },
   created() {
      //当组件对象创建成功后即可发送ajax请求
      this.getImages();
   },
   mounted: function () {
    this.countTime()
   },
   /*倒计时 */
   methods:{
     countTime: function () {
      //获取当前时间
      var date = new Date();
      var now = date.getTime();
      //设置截止时间
      var endDate = new Date("2019-2-19 24:00:00");
      var end = endDate.getTime();
      //时间差
      var leftTime = end - now;
      //定义变量h,m,s保存倒计时的时间
      if(leftTime >= 0){
        this.d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        this.h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        this.m = Math.floor(leftTime / 1000 / 60 % 60);
      // console.log(this.m);
        this.s = Math.floor(leftTime / 1000 % 60);
      }
      // console.log(this.s);
      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(this.countTime,1000);
    },
     getImages(){
       //完成一个功能,获取服务器端轮播图片
       //1:发送ajax请求
       var url = "http://127.0.0.1:3000/getImages";
       this.axios.get(url).then(result=>{
         this.list = result.data;
         this.seller.pics = result.data;
       })
       //2:获取返回数据保存list
     },
   },
   data(){
     return {
       list:[],
       d: 0, 
       h: 0, 
       m: 0, 
       s: 0,
       seller:{pics:''}
     }
   }
 }  
</script>
<style>
/*轮播图设置父元素高度*/
.app-home .mint-swipe{
  height:200px;
}
.app-home .mint-swipe img{
  width:100%;
}
/*两个图片*/
.liang{
  display:flex;
}
.liang img{
  width:45%;
  height:50px;
  display:block;
  margin:10px 10px;
}
/*第四个：灰色块 */
.hui{
  width:100%;
  height:20px;
  background-color:red;
}
/* 第五个：限时秒杀*/
.xian0{
  display:flex;
}
.xian{
  width:55%;
}
.ju{
  display:flex;

}
</style>