<template>
    <div class="nav">
        <ul class="nav-list">
            <li class="item" v-for="(item,index) in navList" :class="{'active': nowIndex===index}" @click="tabClick(index)">
                <a>
                {{item.name}}
                </a>
            </li> 
        </ul> 
    </div> 
</template>
<script>
import VueRouter from 'vue-router';
export default {
    data() {
        return {
            navList:[{name:'推荐'},
            {name:'手机'}
            ],
            nowIndex:0
        }
    },
    mounted() {
        this.$nextTick(() => {
        // 初始化，保证刷新页面后内容区和导航键一致
        this.initPage();
        });
        //接收swi组件发射的index进行导航按钮切换高亮和更新模板地址
        this.$root.eventHub.$on('slideTab',this.slideTab);
    },
    methods: {
        initPage() {
        this.nowIndex = this.$route.path === '/tuijian' ? 0 : this.$route.path === '/shouji' ? 1  : 0;
        },
        tabClick(index){
            this.nowIndex = index;
            //点击导航按钮时向swiper组件发射index
            this.$root.eventHub.$emit('changeTab',index);
        },
        slideTab(index){
            this.nowIndex = index;
            let router = new VueRouter();
            let href = index === 0 ?'/tuijian':index ===1?'/shouji' :'/tuijian';
            //利用路由的push方法更新路径地址
            router.push(href);
        },
    },
}
</script>
<style>
    .nav{
        margin-bottom:20px;
         
    }
    .nav-list{
        width:100%;
        overflow:hidden;
    }
    .item{
        width:20%;
        display:inline-block;
        text-align:center;
        height:48px;
        line-height:48px;
    }
    .item a:active{color:red;border:2px solid red;}
</style>