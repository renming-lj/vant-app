const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
    // app打包路径更改
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/'
    //代理跨域
    // devServer:{
    //     proxy: {
    //         "/api": {
    //             //后台服务器地址
    //             target: "http://1.116.202.152",
    //         }
    //     }
    // }
})
