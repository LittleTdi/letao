//引入express模块
const express=require('express');
//引入第三方body-parser模块
const bodyParser=require('body-parser');
//引入路由器
const userRouter=require('./routes/login.js');//用户路由器

//创建服务器
var server=express();
server.listen(8080);

//把静态文件托管到pro目录下
server.use(express.static('public'));

//配置body-parser中间件
server.use(bodyParser.urlencoded({
	extended:false
}));


//把路由器挂载到/user下
server.use('/user',userRouter);