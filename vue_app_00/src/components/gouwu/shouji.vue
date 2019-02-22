<template>
    <div>

        <sousuo></sousuo>

        <!--<daohang></daohang>-->
        <div>
            哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
        </div>
    </div> 
</template>
<script>
 import sousuo from "../sub/sousuo.vue";
  import daohang from "../sub/daohang.vue";
//   import nav from '../exam/nav.vue';
// import swiper from '../exam/swiper.vue';
export default {
    components:{
      "sousuo":sousuo,
      "daohang":daohang,
    },
    created() {
        // console.log(this.$route.query.id);
    },
}
</script>
<style>
    
</style>