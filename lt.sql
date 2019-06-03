SET NAMES UTF8;
DROP DATABASE IF EXISTS lt;
CREATE DATABASE lt CHARSET=UTF8;
USE lt;
 

-- 创建数据表
#用户信息表
CREATE TABLE lt_user(
	uid INT PRIMARY KEY AUTO_INCREMENT,
	uname VARCHAR(32),
	upwd VARCHAR(32),
	user_name VARCHAR(32),       #用户名 如我是小虾米
	avatar VARCHAR(128),         #用户头像
	gender INT                   #性别 0-男 1-女
);

INSERT INTO lt_user VALUES
(NULL, 'dingding', '123456', 'ding@qq.com','public/image/login/login.png','1'),
(NULL, 'dangdang', '123456', 'dang@qq.com','public/image/login/login.png','1'),
(NULL, 'qiangqiang', '123456', 'qiang@qq.com','public/image/login/login.png','1'),
(NULL, 'xiaomian', '123456', 'xiaomian@qq.com','public/image/login/login.png','1');