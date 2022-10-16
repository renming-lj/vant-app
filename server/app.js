var express = require('express');
let cors = require('cors')
const server = express();
const mysql = require('mysql');
const users = require('./users');
const bodyParser = require('body-parser');
// http请求体中间件
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));

// 连接数据库
const pool  = mysql.createPool({
  host : 'localhost',
  user : 'root',
  password : 'root',
  port : 3306,
  database : 'ceshi'
});

// SQL执行方法
const query = (sql,params,callback) => {
    // 获取连接
    pool.getConnection((err,connected)=>{
        if(err) {
            console.log('连接数据库失败');
            pool.releaseConnection();
        }
        connected.query(sql,params,(err,results,fields)=>{
            if(err){
                // 释放连接
                connected.release();
                console.log('执行sql失败');
                return;
            }
            callback(results,fields)
            // 释放连接
            connected.release();
        })
    })
}

// 配置跨域
server.use(cors());

// 登录注册接口
server.use('/api/users',users);

// 查询数据接口
server.get('/schoolList',  (request,response,next)=>{
    let params = [];
    let sql = "SELECT s_id as id,s_name as name,s_palce as palce FROM school WHERE s_state = 0";
    query(sql,params,(result)=>{
        console.log('调用了查询接口');
        // 返回 json 到前端
        response.json({
            code : 200,
            list : result,
            total : result.length,
            msg : '响应成功!'
        })
    })
});

// 添加数据接口
server.get('/addSchoolList',  (request,response,next)=>{
    let s_name = request.query.name;
    let s_palce = request.query.palce;
    let s_state = request.query.state;
    let params = [{s_name,s_palce,s_state}];
    let sql = "INSERT INTO school SET ?;";
    if(s_name && s_state){
        query(sql,params,(result)=>{
            console.log('调用了添加接口');
            // 返回 json 到前端
            response.json({
                code : 200,
                msg : '响应成功!'
            })
        })
    }else {
        query(sql,params,(result)=>{
            response.json({
                code : 200,
                msg : '响应失败!'
            })
        })
    }
});

// 修改数据接口
server.get('/emitSchoolList',  (request,response,next)=>{
    let s_id = request.query.id;
    let s_name = request.query.name;
    let s_palce = request.query.palce;
    let params = [{s_name,s_palce},s_id];
    let sql = "UPDATE school SET ? WHERE s_id = ?";
    if(s_id && s_name) {
        query(sql,params,(result)=>{
            console.log('调用了修改接口');
            // 返回 json 到前端
            response.json({
                code : 200,
                msg : '响应成功!'
            })
        })
    }else {
        query(sql,params,(result)=>{
            response.json({
                code : 200,
                msg : '响应失败!'
            })
        })
    }
});

// 删除数据接口
server.get('/delSchoolList',  (request,response,next)=>{
    let s_id = request.query.id;
    let params = [s_id];
    let sql = "UPDATE school SET s_state = 1 WHERE s_id = ?";
    console.log(request.query);
    if(s_id){
        query(sql,params,(result)=>{
            console.log('调用了删除接口');
            // 返回 json 到前端
            response.json({
                code : 200,
                msg : '响应成功!'
            })
        })
    }else {
        query(sql,params,(result)=>{
            response.json({
                code : 200,
                msg : '响应失败!'
            })
        })
    }
});

// 测试post修改数据接口
server.post('/emitSchoolList',(request,response)=>{
    console.log(request.body)
    let s_id = request.body.id;
    let s_name = request.body.name;
    let s_palce = request.body.palce;
    let params = [{s_name,s_palce},s_id];
    let sql = "UPDATE school SET ? WHERE s_id = ?";
    if(s_id && s_name) {
        query(sql,params,(result)=>{
            console.log('调用了修改接口');
            // 返回 json 到前端
            response.json({
                code : 200,
                msg : '响应成功!'
            })
        })
    }else {
        query(sql,params,(result)=>{
            response.json({
                code : 200,
                msg : '响应失败!'
            })
        })
    }
})

// 设置接口访问端口为8888
var servers = server.listen(8888, function() {
    console.log('Example app listening at http://127.0.0.1:8888');
})