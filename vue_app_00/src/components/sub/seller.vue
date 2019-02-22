<template>
    <div class="pics">
        <h1 class="title">商家实景</h1>
        <!--因为图片要横向滚动，那么父级就要设定一个固定宽度-->
        <!--当子元素的宽度超过父元素的宽度的时候，就可以滚动了-->
        <div class="pic-wrapper" ref="picWrapper">
          <ul class="pic-list" ref="picList">
            <li class="pic-item" v-for="pic in seller.pics">
              <img :src="pic" width="120" height="90">
            </li>
          </ul>
        </div>
      </div>
</div>

</template>
<script>
import BScroll from 'better-scroll'
export default {
    props:{
      seller:{
        type:Object
      }
    },
    //DOM已經成功渲染完成
    mounted(){
      //等到內容將div撑开之后，在对better-scroll的实例初始化
      //初始化的时机很重要
      this.$nextTick(()=>{
        this._initPics();    //商家实景的横向滚动
      });
    },
    watch:{
      //监听seller变量的值的变化在初始化
      //防止滚动不生效
      'seller'(){
        this.$nextTick(()=>{
          this._initPics();
        });
      }
    },
    methods:{
      //用于初始化“商家实景”的横向滚动效果
      _initPics(){
        //先判断是否有这个属性
        console.log(111);
        if(this.seller.pics){
        console.log(this.seller.pics);
          //这里之所以要设置宽度，是因为.pic-wrapper和.pic-list的宽度一样大
          //当.pic-list的宽度大于.pic-wrapper的宽度，才能横向滚动
          let picWidth = 200; //这里是设置每张图片的宽度
          let margin = 6;
          //width是所有图片的宽度和以及margin的大小和
          let width = (picWidth + margin)*this.seller.pics.length - margin;
          console.log(width);
          this.$refs.picList.style.width = width + 'px'; //设置.pic-list的宽度的宽度
          this.$nextTick(()=>{
        console.log(22222);
            if(!this.picScroll){
              this.picScroll = new BScroll(this.$refs.picWrapper,{
                scrollX:true,
                eventPassthrough:'vertical' //忽略竖直方向的滚动
              });
            }else{
              this.picScroll.refresh();
            }
          });
        }
 
      }
    }
}
</script>
<style>
     .pics{
      padding:18px;
      touch-action:none;
     }
      .title{

        margin-bottom:12px;
        line-height:14px;
        color:rgb(7,17,27);
        font-size:14px;
      }
      .pic-wrapper{

        width: 100%;
        overflow:hidden;
        white-space :nowrap   /*当子元素超过父元素宽度的时候，不会折行*/
      }
        .pic-list{
          font-size:0;
          display:flex;
        }
          .pic-item{
            display: inline-block
            margin-right:6px

            width:120px
            height:90px
            &:last-child{margin:0}
          }
</style>