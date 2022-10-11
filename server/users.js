const express = require('express');
const app = express();
const router = express.Router();
const SQLQuery = require('./model/index');
const usersQuery = require('./model/dmls/users');
 
router.get('/userTest', (req, res) => {
    // req 前台传过来相关的数据，get请求可以拿到query中的参数，post请求可以拿到body中的参数
    console.log(req.query, 'query')
    res.json({
        code: 200,
        data: {
            message: '这是users模块的测试接口'
        }
    })
})
 
router.get('/login', async (req, res) => {
    const {
        userName,
        password
    } = req.query
    try {
        const checkName = await SQLQuery(usersQuery.queryUserByUserName(userName))
        let checkNameArr = JSON.parse(JSON.stringify(checkName)) // 将查询结果转成标准格式
        if (checkNameArr.length === 0) {
            res.json({
                code: 500,
                message: '用户不存在'
            })
            return false
        }
        let curPwd = checkNameArr[0].password
        if (password !== curPwd) {
            res.json({
                code: 500,
                message: '密码错误'
            })
            return false
        }
        res.json({
            code: 200,
            token: Math.random() * 100 // 模拟token,实际项目中可以使用node jwt 模块
        })
    } catch (err) {
        res.json({
            code: 500,
            err
        })
    }
})
 
router.post('/register', async (req, res) => {
    console.log(req.body);
    // post请求的参数在req.body中
    let {
        userName,
        password
    } = req.body
 
    // 注册前线查询该用户是否存在
    const userResult = await SQLQuery(usersQuery.queryUserByUserName(userName)).catch(err => {
        res.json({
            code: 500,
            message: err
        })
    })
    if (!userResult) {
        return false
    }
    const userArr = JSON.parse(JSON.stringify(userResult))
    if (userArr.length > 0) {
        res.json({
            code: 500,
            message: '该用户已存在'
        })
        return
    }
 
    // 注册
    const result = await SQLQuery(usersQuery.register(userName, password)).catch(err => {
        res.json({
            code: 500,
            message: err
        })
        return false
    })
    if (!result) {
        return
    }
    res.json({
        code: 200,
        data: result
    })
})
 
module.exports = router