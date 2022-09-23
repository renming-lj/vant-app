<!--
 * @ Author: lijun
 * @ Create Time: 2022-09-23 09:49:49
 * @ Modified by: 
 * @ Modified time: 2022-09-23 10:00:33
 * @ Description: 回到顶部
 -->

<template>
  <div class="backTop" v-show="scrollType" @click.stop="backTop">
    <van-icon name="arrow-up" color="#fff" />
  </div>
</template>

<script>
import { reactive, toRefs, onBeforeUnmount, onMounted } from "vue";
export default {
  name: "backTop",
  setup() {
    const state = reactive({
      scrollType: false, // 控制按钮显示和隐藏
      timerId: null,
      scrollTop: 0,
    });
    const backTop = () => {
      state.timerId = setInterval(() => {
        // 给返回增加动画效果
        const upSpeed = Math.floor(-state.scrollTop / 5);
        document.documentElement.scrollTop = state.scrollTop + upSpeed;
        if (state.scrollTop === 0) {
          clearInterval(state.timerId);
        }
      }, 30);
    };
    const handleScoll = (ev) => {
      // 当滚动的距离大于700 时出现该按钮
      state.scrollTop = window.pageYOffset;
      if (window.pageYOffset / 100 > 7) {
        state.scrollType = true;
      } else {
        state.scrollType = false;
      }
    };
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", handleScoll);
      clearInterval(state.timerId);
    });
    onMounted(() => {
      window.addEventListener("scroll", handleScoll);
    });
    return {
      ...toRefs(state),
      backTop,
    };
  },
};
</script>

<style lang="less" scoped>
.backTop {
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  position: fixed;
  bottom: 60px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  z-index: 999;
}
</style>
