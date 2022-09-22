<!--
 * @ Author: lijun
 * @ Create Time: 2022-09-17 10:52:58
 * @ Modified by: 
 * @ Modified time: 2022-09-22 14:45:54
 * @ Description: 首页
 -->

<template>
  <van-nav-bar title="首页" placeholder="true" fixed="true" />
  <van-count-down
    class="box-time"
    ref="countDown"
    millisecond
    :time="10000"
    :auto-start="false"
    format="ss:SSS"
    @finish="onFinish"
  >
    <template #default="timeData">
      <span class="block">{{ timeData.hours }}</span>
      <span class="colon">:</span>
      <span class="block">{{ timeData.minutes }}</span>
      <span class="colon">:</span>
      <span class="block">{{ timeData.seconds }}</span>
      <span class="colon">:</span>
      <span class="block">{{ timeData.milliseconds }}</span>
    </template>
  </van-count-down>
  <van-grid clickable>
    <van-grid-item text="开始" icon="play-circle-o" @click="start" />
    <van-grid-item text="暂停" icon="pause-circle-o" @click="pause" />
    <van-grid-item text="重置" icon="replay" @click="reset" />
  </van-grid>
</template>

<script setup>
import { ref } from "vue";
import { Toast } from "vant";
const countDown = ref(null);
const start = () => {
  countDown.value.start();
};
const pause = () => {
  countDown.value.pause();
};
const reset = () => {
  countDown.value.reset();
};
const onFinish = () => Toast("倒计时结束");
</script>

<style lang="less" scoped>
.van-grid {
  justify-content: space-between;
}
.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
.box-time {
  display: flex;
  justify-content: center;
  margin: 20px 0;
}
</style>
