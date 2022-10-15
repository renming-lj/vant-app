<!--
 * @ Author: lijun
 * @ Create Time: 2022-09-23 09:27:36
 * @ Modified by: 
 * @ Modified time: 2022-09-23 09:30:49
 * @ Description: 备忘录编辑
 -->

<template>
  <!-- 标题 -->
  <van-nav-bar
    title="编辑"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
  />
  <!-- 学校名称输入 -->
  <van-field v-model="values.name" label="学校名称" placeholder="请输入学校名称" />
  <!-- 学校地址输入 -->
  <van-field v-model="values.palce" label="学校地址" placeholder="请输入学校地址" />
 <!-- 提交按钮 -->
  <van-button round type="primary" block @click="submit" class="btn"
    >提交</van-button
  >
</template>

<script setup>
import { ref } from "vue";
const onClickLeft = () => history.back();
import { useRoute } from "vue-router";
import { emitCategoryList } from "@/api";
const router = useRoute();
const values = ref({...router.query})
// 提交按钮
const submit = () => {
  console.log(values.value);
  init();
  onClickLeft();
};
const init = () => {
  emitCategoryList(values.value);
}
</script>

<style lang="less" scoped></style>
