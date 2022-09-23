<!--
 * @ Author: lijun
 * @ Create Time: 2022-09-17 10:52:58
 * @ Modified by: 
 * @ Modified time: 2022-09-23 11:56:32
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
  <!-- 备忘录列表 -->
  <van-list
    v-model:loading="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item.id">
      <template #default>
        <div class="lists">
          <span>{{ item.text }}</span>
          <span>{{ item.result }}</span>
          <van-icon name="edit" @click="emit(item.id)" class="lists-icon" />
        </div>
      </template>
    </van-cell>
  </van-list>
  <!-- 返回顶部 -->
  <backtop></backtop>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import backtop from "@/components/backTop/backTop.vue";
const router = useRouter();
const add = () => {
  router.push("add");
};
const list = ref([
  {
    id: 1,
    text: "备忘录1",
    result: "2022/9/23/10/00",
  },
  {
    id: 2,
    text: "备忘录2",
    result: "2022/9/23/08/00",
  },
  {
    id: 3,
    text: "备忘录3",
    result: "2022/9/23/02/00",
  },
  {
    id: 4,
    text: "备忘录4",
    result: "2022/9/23/11/00",
  },
  {
    id: 5,
    text: "备忘录5",
    result: "2022/9/23/11/30",
  },
  {
    id: 6,
    text: "备忘录6",
    result: "2022/9/23/10/30",
  },
]);
const loading = ref(false);
const finished = ref(false);

const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  loading.value = false;
  // setTimeout(() => {
  //   for (let i = 0; i < 10; i++) {
  //     list.value.push(list.value.length + 1);
  //   }

  //   // 加载状态结束
  //   loading.value = false;

  //   // 数据全部加载完成
  //   if (list.value.length >= 40) {
  //     finished.value = true;
  //   }
  // }, 1000);
};
// 点击事件
const emit = (item) => {
  console.log("itemitem", item);
  router.push(`emit`);
  // :${item}
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
  margin: 10px 0;
}
.lists {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.lists-icon {
  margin-right: 30px;
}
</style>
