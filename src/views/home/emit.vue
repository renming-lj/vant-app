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
  <!-- 标题输入 -->
  <van-field v-model="values.text" label="标题" placeholder="请输入标题" />
  <!-- 时间选择 -->
  <van-field
    v-model="result"
    is-link
    readonly
    name="datetimePicker"
    label="时间选择"
    placeholder="点击选择时间"
    @click="showPicker = true"
  />
  <van-popup v-model:show="showPicker" position="bottom">
    <van-datetime-picker
      v-model="currentDate"
      type="datetime"
      title="选择完整时间"
      :min-date="minDate"
      @confirm="onConfirm"
      @cancel="showPicker = false"
    />
  </van-popup>
  <!-- 文件上传 -->
  <van-field name="uploader" label="图片上传">
    <template #input>
      <van-uploader v-model="values.value" />
    </template> </van-field
  ><!-- 提交按钮 -->
  <van-button round type="primary" block @click="submit" class="btn"
    >提交</van-button
  >
</template>

<script setup>
import { ref } from "vue";
const onClickLeft = () => history.back();

const values = ref({
  // 文件上传
  value: [{ url: "https://fastly.jsdelivr.net/npm/@vant/assets/leaf.jpeg" }],
  // 标题
  text: "",
});
// 时间选择
const result = ref("");
// 提交按钮
const submit = () => {
  values.value.result = result.value;
  console.log("value", values.value);
};

// 时间
const currentDate = ref(new Date());
const minDate = ref(new Date(2020, 0, 1));
const showPicker = ref(false);
// 确定按钮
const onConfirm = (val) => {
  result.value = `${val.getFullYear()}/${
    val.getMonth() + 1
  }/${val.getDate()}/${val.getHours()}/${val.getMinutes()}`;
  showPicker.value = false;
};
</script>

<style lang="less" scoped></style>
