const mysql = require('mysql')
 
/**
 * node中mysql连接数据库可以创建单个connection对象，也可以建立一个连接池，
 * 单个连接对象在频繁查询数据库的过程中很容易造成资源浪费，因此这里我们选用
 * 连接池的方式
 */
 const pool  = mysql.createPool({
  host : 'localhost',
  user : 'root',
  password : 'root',
  port : 3306,
  database : 'ceshi'
});
 
/**
 * 
 * @param {*}  queryStr sql查询语句
 * @returns 查询结果
 */
 
function SQLQuery(queryStr) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(queryStr, (queryErr, data) => {
                    if (queryErr) {
                        reject(queryErr)
                    } else {
                        resolve(data)
                    }
                    conn.release()
                })
            }
        })
    })
}
 
module.exports = SQLQuery