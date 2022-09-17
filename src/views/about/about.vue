<!--
 * @ Author: lijun
 * @ Create Time: 2022-09-17 11:22:15
 * @ Modified by: 
 * @ Modified time: 2022-09-17 14:05:58
 * @ Description:
 -->

<template>
  <van-nav-bar title="我的" placeholder="true" fixed="true" />
  <van-form @submit="onSubmit" class="box-submit">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        登录
      </van-button>
    </div>
  </van-form>
</template>

<script setup>
import { ref } from "vue";
const username = ref();
const password = ref();
const onSubmit = () => {
  console.log("username", username.value, "password", password.value);
};
</script>

<style lang="less" scoped>
.box-submit {
  margin-top: 65%;
}
</style>
