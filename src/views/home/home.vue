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
          <span>{{ item.name }}</span>
          <span>{{ item.palce }}</span>
          <van-icon name="edit" @click="emit(item)" class="lists-icon" />
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
import { reqCategoryList } from '@/api/index.js'
const router = useRouter();
const add = () => {
  router.push("add");
};
const list = ref([]);
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
  router.push({path:'emit', query:{...item}});
};

const init = () => {
  reqCategoryList().then(res=>{
    console.log(res.data.list,'resres')
    list.value = res.data.list
  })
}
setTimeout(()=>{
  init()
},50)
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
