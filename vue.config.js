const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false,
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
