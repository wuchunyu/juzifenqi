<template>
    <div class="nihao">
        <table></table>
        <div class="nihao0">你好，</div>
        <div>
            <div>欢迎来到橘子分期，若无账号</div>
            <div href="">立即注册</div>
        </div>
        <div>
            <form>
              用户名:
              <input type="text" value=""
              placeholder="请输入用户名" v-model="name"
              @blur.prevent="checkName" /> 
              密码:
              <input type="password" value=""
              placeholder="请输入密码" v-model="pwd" />
              确认密码:
              <input type="password" value=""
              placeholder="请输入确认密码" v-model="pwd2" />
              <mt-button size="large" @click="handleReg">注册</mt-button>
            </form>
        </div>
    </div> 
</template>
<script>
export default {
    
}
</script>
<style>
    .nihao0{
            font-size: 33px;
    margin: 30px;
    }
    .nihao{
        background-color:white;
        height: 1000px;
    }
</style>