var express = require('express');
var app = express();

// 设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

let result = {
    data: {
        pageIndex: 1,
        pageSize: 10,
        schoolList: [
            { schoolName: 'qinghua', palce: 'beijing' },
            { schoolName: 'zhengzhou', palce: 'zhengzhou' },
            { schoolName: 'nankai', palce: 'tianjin' }
        ],
        code: 200,
        msg: 'ok'
    }
}

// 返回数据data
app.get('/data', function(req, res) {
    res.status(200),
        res.json(result)
});

// 设置接口访问端口为3000
var server = app.listen(3000, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://127.0.0.1', host, port);
})