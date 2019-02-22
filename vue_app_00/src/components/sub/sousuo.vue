<template>
  <div class="" @click="">
    <!--<mt-search v-model="value" cancel-text="取消" placeholder="搜索"></mt-search>-->
    <div class="sousuo3" @click="sou" v-if="show0">
      <input @keypress="searchGoods" type="serch" placeholder="搜索商品">
    </div>
    <div class="sousuo2" v-if="show">
      <div class="sousuo">
        <div class="sousuo0">
          <input @keypress="searchGoods" type="serch" placeholder="搜索商品" autofocus="autofocus">
        </div> 
        <div class="sousuo1" v-if="show"  @click="sou">取消</div>  
      </div>
      <div class="remen">热门搜索</div>
      <div class="lie">
        <div class="lie0">
          <div class="lie1">iPhone</div>
          <div class="lie1">华为</div>
          <div class="lie1">手表</div>
          <div class="lie1">口红</div>
          <div class="lie1">防晒</div>
          <div class="lie1">OPPO</div>
          <div class="lie1">雅诗兰黛</div>
          <div class="lie1">阿玛尼</div>
          <div class="lie1">古钻</div>
        </div>
      </div>
    </div>
  </div>  
</template>
<script>
   export default {
     data(){
       return {
         'value':'',
         show:false,
         show0:true
       }
     },
     created() {

   },
     methods: {
          sou(){
            this.show = ! this.show;
            this.show0 = ! this.show0;
          },
         searchGoods(event) { 
          if (event.keyCode == 13) { //如果按的是enter键 13是enter 
          event.preventDefault(); //禁止默认事件（默认是换行） 
          console.log(event.target.value)
          } 
         },
     },
   }  
</script>
<style>
    .sousuo3{
      height:50px;
      display:flex;
      justify-content:center;
      align-items:center;
    }
    .sousuo3 input{
      display:block;
    }
    .mint-search{
    height:100% !important;
    }
    .sousuo{
      display:flex;
    }
    .sousuo2{
      height:600px;
      position:relative;
      z-index:10;
    }
    .remen{
      background-color:red;
      line-height:40px;
    }
    .lie0{
      display:flex;
      flex-wrap:wrap;
    }
    .lie1{
      width: 67px;
      margin:10px 10px;
      background-color:green;
      border-radius:18%;
    }
</style>