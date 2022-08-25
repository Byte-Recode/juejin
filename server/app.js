// 引入所需模块
const fs = require('fs')
const path = require('path')
const http = require('http')
const express = require('express')
// const bodyparser = require('body-parser')

// 创建服务器
const server = express()

// 创建中间件
// server.use(cors());
// server.use(express.urlencoded({ extended: false }));
// server.use(express.json());


// 解决跨域问题
server.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    req.method == "OPTIONS" ? res.sendStatus(200) : next()
    // express error: express deprecated res.send(status): Use res.sendStatus(status) instead =>res.send(200)
})


// 静态资源服务器
server.use(express.static("./public"))
server.use(express.json())
server.use(express.urlencoded({
    extended: true
}))

// 一级路由
// server.get('/', function (req, res, next) {
//     res.render('index', {
//         title: 'Express'
//     });
// });
server.use("/post", require("./routers/post"))



// server.use("/post", require("./routers/forum/post"))

server.listen(80, () => {
    console.log("服务器已启动" + new Date() + "server running at http://127.0.0.1");
})