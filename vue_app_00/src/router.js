import Vue from 'vue'
import VueRouter from 'vue-router';
import tuijian from "./components/gouwu/tuijian.vue"
import fenlei from "./components/fenlei/fenlei.vue"
import wode from "./components/wode/wode.vue"
import denglu from "./components/denglu/denglu.vue"
import shouji from "./components/gouwu/shouji.vue"
import gouwu from "./components/gouwu/gouwu.vue"
import Register from "./components/tabbar/Register.vue"
import one from "./components/exam/one.vue"
import two from "./components/exam/two.vue"
import three from "./components/exam/three.vue"
import four from "./components/exam/four.vue"
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    /*用户访问 / 重新定位 /Home Home显示*/
    {path:'/gouwu',redirect:"/tuijian"},
    {path:'/tuijian',component:tuijian},
    {path:'/fenlei',component:fenlei},
    {path:'/wode',component:wode},
    {path:'/denglu',component:denglu},
    {path:'/shouji',component:shouji},
    {path:'/Register',component:Register},
    {path:'/one',component:one},
    {path:'/two',component:two},
    {path:'/three',component:three},
    {path:'/four',component:four},
  ]
})
