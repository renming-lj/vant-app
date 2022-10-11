module.exports = {
  // 根据userName查询用户
  queryUserByUserName:  function (userName) {
      return `select * from user where u_name='${userName}'`
  },
  // 注册
  register: function (userName, password) {
      return `insert into user (u_name,u_pwd) values ('${userName}','${password}')`
  }
}