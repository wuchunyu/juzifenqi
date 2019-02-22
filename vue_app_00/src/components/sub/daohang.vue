<template>
    <div class="tab">
      <div class="tab0">
        <ul class="tab1">
          <li v-for="tab,index in tabs" :class="{'tab-active':index===currentIndex}" @click="tabSwitch(index)">{{tab.tabName}}</li>
        </ul> 
      </div>
    </div>
</template>
<script>
export default {
    data() {
      return {
        tabs:[{tabName:'推荐'},{tabName:'手机'}],
        currentIndex:1
      }
    },
    methods:{
      tabSwitch(index){
        this.currentIndex = index;
        console.log(this.currentIndex);
        if(index==0){
          
          this.$router.push("/tuijian"); 
        }else{
          this.currentIndex=1;
          // console.log(this.currentIndex);
          this.$router.push("/shouji"); 
        }
      },
    },
}
</script>
<style>
 .tab1{
   list-style-type:none;
   width:375px;
   white-space:nowrap;
   overflow:hidden;
 }
 .tab1 li{
   display:inline-block;
   width: 100px;
   height: 50px;
   /*float: left;*/
   text-align: center;
   line-height: 50px;
   border:1px solid #000;
 }
  .tab-active{
    color:red;
    border:2px solid red;
  }
</style>