//vue_app_server 服务器
const express = require("express");

var app = express();
app.use(express.static("public"));
app.listen(3000);
const pool = require("./pool");

//express mysql 参数 request;response
//跨域访问配置
//1:加载模块cors
const cors = require("cors");
//2:配置cors
app.use(cors({
  origin:["http://127.0.0.1:3001",
         "http://localhost:3001"],//允许列表
  credentials:true   //是否验证
}));
//3:加载第三方模块: express-session
const session = require("express-session");
//4:对模块配置
app.use(session({
  secret:"128位随机字符串",   //安全令牌
  resave:false,              //请求保存
  saveUninitialized:true,    //初始化
  cookie:{                   //sessionid保存时
    maxAge:1000*60*60*24     //间1天 cookie
  }
}));






//功能一:首页轮播
app.get("/getImages",(req,res)=>{
  var rows = [
    {id:1,img_url:"http://127.0.0.1:3000/img/banner1.png"},
    {id:2,img_url:"http://127.0.0.1:3000/img/banner2.png"},
    {id:3,img_url:"http://127.0.0.1:3000/img/banner3.png"},
  ];
  res.send(rows);
})

app.get("/getImg",(req,res)=>{
  var rowss = [
    {id:1,img_url:"http://127.0.0.1:3000/img/1.png",title:"华为"},
    {id:2,img_url:"http://127.0.0.1:3000/img/1.png",title:"Apple"},
    {id:3,img_url:"http://127.0.0.1:3000/img/1.png",title:"vivo"},
    {id:4,img_url:"http://127.0.0.1:3000/img/1.png",title:"OPPO"},
    {id:5,img_url:"http://127.0.0.1:3000/img/1.png",title:"OPPO"},
    {id:6,img_url:"http://127.0.0.1:3000/img/1.png",title:"OPPO"},
    {id:7,img_url:"http://127.0.0.1:3000/img/1.png",title:"OPPO"},
    {id:8,img_url:"http://127.0.0.1:3000/img/1.png",title:"OPPO"},
    {id:9,img_url:"http://127.0.0.1:3000/img/1.png",title:"OPPO"},
    {id:10,img_url:"http://127.0.0.1:3000/img/1.png",title:"OPPO"},
    {id:11,img_url:"http://127.0.0.1:3000/img/1.png",title:"OPPO"},
    {id:12,img_url:"http://127.0.0.1:3000/img/1.png",title:"OPPO"},
    {id:13,img_url:"http://127.0.0.1:3000/img/1.png",title:"OPPO"},
  ];
  res.send(rowss);
})

app.get("/getimgg",(req,res)=>{
  var rowsss = [
    {id:1,img_url:"http://127.0.0.1:3000/img/3.png",title:"华为"},
    {id:2,img_url:"http://127.0.0.1:3000/img/3.png",title:"Apple"},
    {id:3,img_url:"http://127.0.0.1:3000/img/3.png",title:"vivo"},
    {id:4,img_url:"http://127.0.0.1:3000/img/3.png",title:"OPPO"},
    {id:5,img_url:"http://127.0.0.1:3000/img/3.png",title:"OPPO"},
    {id:6,img_url:"http://127.0.0.1:3000/img/3.png",title:"OPPO"},
    {id:7,img_url:"http://127.0.0.1:3000/img/3.png",title:"OPPO"},
    {id:8,img_url:"http://127.0.0.1:3000/img/3.png",title:"OPPO"},
    {id:9,img_url:"http://127.0.0.1:3000/img/3.png",title:"OPPO"},
    {id:10,img_url:"http://127.0.0.1:3000/img/3.png",title:"OPPO"},
    {id:11,img_url:"http://127.0.0.1:3000/img/3.png",title:"OPPO"},
    {id:12,img_url:"http://127.0.0.1:3000/img/3.png",title:"OPPO"},
    {id:13,img_url:"http://127.0.0.1:3000/img/3.png",title:"OPPO"},
  ];
  res.send(rowsss);
})

//功能九:用户注册
app.get("/register",(req,res)=>{
  //1:参数 name,pwd
  var name = req.query.name;
  var pwd = req.query.pwd;
  //1.1:验证
  var reg = /^[a-z0-9_]{8,12}$/;
  if(!reg.test(name)){
    res.send({code:-1,msg:"用户名格式不正确"});
    return;
  }
  var sql = "INSERT INTO xz_login VALUES(null";
     sql +=",?,md5(?))";
  pool.query(sql,[name,pwd],(err,result)=>{
         if(err)throw err;
         if(result.affectedRows>0){
           res.send({code:1,msg:"注册成功"})
         }else{
           res.send({code:-1,msg:"注册失败"});
         }
  })
});


//功能十:用户名是否存在
app.get("/existsName",(req,res)=>{
  //1:参数
  var name = req.query.name;
  //2:sql
  var sql = " SELECT count(id) as c FROM xz_login";
      sql+=" WHERE name = ?";
  pool.query(sql,[name],(err,result)=>{
       if(err)throw err;
       //result node.js 数组
       //[{c:0}]
       ///result[0].c
       if(result[0].c > 0){
         res.send({code:-1,msg:"该用户名己存在"})
       }else{
         res.send({code:1,msg:"欢迎使用"});
       }
  })    
  //3:json
});