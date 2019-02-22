<template>
    <div>
    <sousuo></sousuo>
    <div class="fenlei">
        <div class="fenlei0">
            <div>手机通讯</div> 
            <div @click="diannao">电脑数码</div> 
        </div>
        <div class="fenlei1">
            <div class="fenlei11">
                <div class="fenlei10">
                    <div class="fenleiimg">
                        <img src="http://127.0.0.1:3000/img/1.png" alt=""  mode="aspectFill"> 
                    </div>
                    <div>
                        <div>手机</div>
                        <div class="shouji">
                            <div class="huawei" v-for="item in list" :key="item.id">
                                <img :src="item.img_url" alt="">
                                <p>{{item.title}}</p> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
 import sousuo from "../sub/sousuo.vue";
export default {
    components:{
      "sousuo":sousuo
    },
    data(){
      return  {
        list:[]
      }
    },
    methods: {
        diannao(){
            var url = "http://127.0.0.1:3000/getimgg";
            this.axios.get(url).then(result=>{
                console.log(this.list);
                this.list=[];
                console.log(this.list);
                this.list = result.data;
                console.l
            })
        },
        getImg(){
       var url = "http://127.0.0.1:3000/getImg";
       //4:发送ajax请求
       this.axios.get(url).then(result=>{
           //5:获取返回数据 追加
           this.list = result.data;
       })
      
     },
    },
    created() {
       this.getImg();
   },
}
</script>
<style>
    .fenleiimg{
        margin: 20px 0px;
    }
    .fenlei{
        width:100%;
        /*height: 900px;*/
        display:flex;
        margin-top:10px;
        border-top:1px solid #ccc;
        /* position:relative;*/
    }
    .fenlei0{
            width: 27%;
    text-align: center;
    border-right: 1px solid #ccc;
    height: 561px;
    /*position: fixed;
    top: 54px;
    left: 22px*/
    }
    .fenlei0 div{
        margin:10px 10px;
    }
    .fenlei1{
        padding:10px 10px;
        width:75%;
        height: 561px;
        overflow: scroll;;
        /*position:absolute;
        top:20px;
        left:20px;*/
        /*border-left: 1px solid #ccc; */
    }
    .fenlei10{
        width:100%;
    }
    .fenlei1 .fenleiimg img{
        width:100%;
        height:50px;
    }
    .huawei img{
        width:82%;
    }
    .huawei text{
        display:block;
        width:82%;
    }
    .huawei{
        width:46%;
        margin: 6px 5px;
    }
    .shouji{
        display:flex;
        flex-wrap:wrap;
    }
</style>