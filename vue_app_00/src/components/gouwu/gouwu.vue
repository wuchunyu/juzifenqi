<template>
    <div>
        <v-nav></v-nav>
        <v-swiper></v-swiper>
    </div> 
</template>
<script>
import nav from '../exam/nav.vue'
import swiper from '../exam/swiper.vue'
export default {
    components:{
    'v-nav':nav,
    'v-swiper':swiper
   },
}
</script>
<style>
    
</style>