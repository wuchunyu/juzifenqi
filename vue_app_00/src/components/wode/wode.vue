<template>
    <div class="wode">   
        <div class="denglu0">
            <table></table>
            <div class="denglu">
                    <div>
                        <img src="http://127.0.0.1:3000/img/1.png" alt="">
                    </div>
                <div class="liji">立即登录</div>  
            </div> 
        </div>
        <div class="zhengli">
            <div class="shoucang">
                <div class="shoucang0">
                    <div>0</div>
                    <div>收藏夹</div>
                </div> 
                <div class="shoucang0">
                    <div>0</div>
                    <div>关注</div>
                </div> 
                <div class="shoucang0">
                    <div>0</div>
                    <div>优惠券</div>
                </div> 
                <div class="shoucang0">
                    <div>0.00</div>
                    <div>返30日待还</div>
                </div> 
            </div>
            <div class="dingdan0">
                <div class="dingdan">
                    <div>我的订单</div>
                    <a href="">查看全部</a>
                </div>
                <div class="dingdan1">
                    <div class="dingdan10">
                        <img src="http://127.0.0.1:3000/img/icons/1.png" alt="">
                        <p>待支付</p> 
                    </div>
                    <div class="dingdan10">
                        <img src="http://127.0.0.1:3000/img/icons/1.png" alt="">
                        <p>待支付</p> 
                    </div>
                    <div class="dingdan10">
                        <img src="http://127.0.0.1:3000/img/icons/1.png" alt="">
                        <p>待支付</p> 
                    </div>
                    <div class="dingdan10">
                        <img src="http://127.0.0.1:3000/img/icons/1.png" alt="">
                        <p>待支付</p> 
                    </div>
                    <div class="dingdan10">
                        <img src="http://127.0.0.1:3000/img/icons/1.png" alt="">
                        <p>待支付</p> 
                    </div>
                </div>
            </div>
            <div class="fuwu">
                <div class="fuwu0">
                    我的服务
                </div>
                <div class="fuwu1">
                    <div class="fuwu2">
                        <img src="http://127.0.0.1:3000/img/icons/1.png" alt="">
                        <p>服务订单</p> 
                    </div>
                    <div class="fuwu2">
                        <img src="http://127.0.0.1:3000/img/icons/1.png" alt="">
                        <p>服务订单</p> 
                    </div>
                    <div class="fuwu2">
                        <img src="http://127.0.0.1:3000/img/icons/1.png" alt="">
                        <p>服务订单</p> 
                    </div>
                    <div class="fuwu2">
                        <img src="http://127.0.0.1:3000/img/icons/1.png" alt="">
                        <p>服务订单</p> 
                    </div>
                    <div class="fuwu2">
                        <img src="http://127.0.0.1:3000/img/icons/1.png" alt="">
                        <p>服务订单</p> 
                    </div>
                    <div class="fuwu2">
                        <img src="http://127.0.0.1:3000/img/icons/1.png" alt="">
                        <p>服务订单</p> 
                    </div>
                    <div class="fuwu2">
                        <img src="http://127.0.0.1:3000/img/icons/1.png" alt="">
                        <p>服务订单</p> 
                    </div>
                    <div class="fuwu2">
                        <img src="http://127.0.0.1:3000/img/icons/1.png" alt="">
                        <p>服务订单</p> 
                    </div>
                </div>
                    <div class="fuwu2">
                        <img src="http://127.0.0.1:3000/img/icons/1.png" alt="">
                        <p>服务订单</p> 
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    
    .fuwu2 img{
        width: 75px;
        height: 51px;
    }
    .fuwu1{
        display:flex;
        flex-wrap:wrap;
        text-align:center;
        justify-content:space-around;
        margin: 10px 0px;
    }
    .fuwu0{
        border-bottom:1px solid red;
        line-height: 40px;
    }
    .fuwu{
        background-color:white;
        width:95%;
        margin:0 auto;
    }
    .zhengli{
        margin: 0 auto;
    }
    .dingdan10 img{
        width: 58px;
        height: 54px;
    }
    .dingdan1{
        display:flex;
        justify-content:space-around;
        text-align:center;
        margin-top: 10px;
    }
    .dingdan0{
        margin: 10px auto;
        width: 95%;
        background-color: white;
    }
    .dingdan{
        background-color:white;
        display: flex;
    justify-content: space-around;
    text-align: center;
    /*width: 95%;*/
    line-height: 38px;
    border-bottom:1px solid red;
    }
    .shoucang0{
        margin:10px 10px;
    }
    .shoucang{
        background-color:white;
        display:flex;
        justify-content:space-around;
        text-align:center;
        width:95%;
        margin:0 auto;
    }
    .liji{
        margin: 31px 13px;
    }
    .wode{
        width:100%;
        height: 751px;
        background-color:#ccc;
    }
    .denglu0{
        background-color:#df4a26;
    }
    .denglu{
        display:flex;
        margin: 15px 18px;
        color:white;
        align-items: center;
    }
    .denglu img{
        width: 60px;
        height: 60px;
        border-radius:50%;
    }
</style>