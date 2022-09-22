<!--
 * @ Author: lijun
 * @ Create Time: 2022-09-17 10:52:58
 * @ Modified by: 
 * @ Modified time: 2022-09-22 19:45:33
 * @ Description: 首页
 -->

<template>
  <!-- 标题 -->
  <van-nav-bar title="首页" placeholder="true" fixed="true" />
  <!-- swipe -->
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item>备忘录1</van-swipe-item>
    <van-swipe-item>备忘录2</van-swipe-item>
    <van-swipe-item>备忘录3</van-swipe-item>
    <van-swipe-item>备忘录4</van-swipe-item>
  </van-swipe>
  <!-- 添加按钮 -->
  <van-button round type="primary" block @click="add" class="btn"
    >添加</van-button
  >
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const add = () => {
  router.push("add");
};
</script>

<style lang="less" scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
.btn {
  margin-top: 10px;
}
</style>
