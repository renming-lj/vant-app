/**
 * @ Author: lijun
 * @ Create Time: 2022-09-17 10:38:02
 * @ Modified by: 
 * @ Modified time: 2022-09-22 19:40:06
 * @ Description: 路由
 */

import { createRouter, createWebHashHistory } from "vue-router";

const routes = [{
    path: '/',
    redirect: '/home'
}, {
    path: '/home',
    name: "home",
    component: () =>
        import ('@/views/home/home.vue')
}, {
    path: '/about',
    name: "about",
    component: () =>
        import ('@/views/about/about.vue')
}, {
    path: '/add',
    name: "add",
    component: () =>
        import ('@/views/home/add.vue')
}]

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

export default router