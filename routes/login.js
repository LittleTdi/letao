//引入express模块
const express=require('express');
//引入pool数据池
const pool=require('../pool.js');
//创建路由器
var router=express.Router();

//往路由器添加路由
//登录路由
/*
router.get('/login',(req,res)=>{
	var obj=req.query;
	var $uname=req.query.uname;
	var $upwd=req.query.upwd;
	console.log(obj);
	var sql="select uid from lt_user where uname=? and upwd=?";
	pool.query(sql,[$uname,$upwd],(err,result)=>{
		if (err) {throw err;}
		if (result.length>0) {
			// console.log({code:1,msg:'登录成功'});
			res.send({code:1,msg:'登录成功'});
		}else{
			res.send({code:-1,msg:'用户名或密码有误'});
		}
	});
});*/
//查询路由
router.get('/query',(req,res)=>{
	var $uname=req.query.uname;
	if (!$uname) {
		res.send({code:-1,msg:'用户名不能为空'});
		return;
	}
	var sql="select uid from lt_user where uname=?";
	pool.query(sql,[$uname],(err,result)=>{
		if (err) {throw err;}
		if (result.length>0) {
			res.send({code:1,msg:'用户名有效'});
		}else{
			res.send({code:-1,msg:'用户名未注册'});
		}
	});
});
//导出路由器
module.exports=router;