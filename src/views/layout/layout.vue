<!--
 * @ Author: lijun
 * @ Create Time: 2022-09-17 10:42:06
 * @ Modified by: 
 * @ Modified time: 2022-09-22 14:02:56
 * @ Description: 底部tabs
 -->

<template>
  <van-tabbar
    v-model="active"
    @change="onChange"
    placeholder="true"
    fixed="true"
  >
    <van-tabbar-item icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item icon="contact">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
const router = useRouter();
const active = ref(Number(localStorage.getItem("active"))) || ref(0);
const onChange = () => {
  console.log("45456645", active.value);
  localStorage.setItem("active", active.value);
  if (active.value === 0) {
    router.push("home");
  } else if (active.value === 1) {
    router.push("about");
  }
};
</script>

<style lang="less" scoped></style>
