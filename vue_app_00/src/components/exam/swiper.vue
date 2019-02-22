<template>
    <div class="swiper-box">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in list">
                    <keep-alive>
                        <component :is="item.component"></component>
                    </keep-alive>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
// import one from './one.vue'
// import two from './two.vue'
// import three from './three.vue'
// import four from './four.vue'
import tuijian from '../gouwu/tuijian.vue';
import shouji from '../gouwu/shouji.vue';
import Swiper from 'swiper'; 
import '../static/swiper.min.css'
export default {
    components:{
        tuijian,
        shouji  
    },
    data() {
        return {
            list:[
                {path:'/tuijian',component:tuijian},
                {path:'/shouji',component:shouji},
            ]
        }
    },
    mounted() {
        console.log(Swiper);
        var mySwiper = new Swiper('.swiper-container',{
            //设定初始化时slide的索引
            initialSlide:this.$route.path ==='/tuijian'? 0 : this.$route.path ==='/shouji'? 1 : 0 
        });
        mySwiper.on('slideChange',()=>{ //监控滑动后当前页面的索引，将索引发射到导航组件
            //左右滑动时将当前slide的索引发送到nav组件
            this.$root.eventHub.$emit('slideTab',mySwiper.activeIndex);
        });
        console.log(mySwiper);
        //接收nav组件传过来的导航按钮索引值，跳转到相应内容区
        this.$root.eventHub.$on('changeTab',(index)=>{ //点击导航键跳转相应内容区
            mySwiper.slideTo(index,0,false);
        });
        console.log(mySwiper);
    },
}
</script>
<style>
    .swiper-wrapper{
         touch-action: none;
    }
</style>