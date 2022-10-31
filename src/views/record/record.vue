<!--
 @Name
 @Description
 @author lijun
 @date 2022/10/31
-->

<template>
  <!-- 标题 -->
  <van-nav-bar title="ICP备案查询" placeholder="true" fixed="true" />
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="username"
          name="record"
          label="域名"
          placeholder="域名"
          :rules="[{ required: true, message: '请填写域名' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        查询
      </van-button>
    </div>
  </van-form>
  <div class="box">
    <div>备案人：</div>
    <div>{{recordLists.name}}</div>
    <div>备案域名：</div>
    <div>{{recordLists.siteindex}}</div>
    <div>备案类型：</div>
    <div>{{recordLists.nature}}</div>
    <div>备案号：</div>
    <div>{{recordLists.icp}}</div>
    <div>备案时间：</div>
    <div>{{recordLists.time}}</div>
  </div>
</template>

<script setup>
// 备案信息查询
import {recordList} from "@/api";
import { ref } from 'vue';
const username = ref('');
const recordLists = ref({})
const onSubmit = (values) => {
  console.log('submit', values);
  recordList(values).then(res=>{
    console.log('resres',res)
    recordLists.value = res.data
  })
};
</script>

<style lang="less" scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 20px;
  div {
    width: 50%;
  }
}
.box div:nth-child(2n) {
  margin: 20px 0;
  width: 60%;
}
</style>