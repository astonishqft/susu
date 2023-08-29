<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const start = () => {
  router.push('/choose')
}
</script>
<template>
  <div style="height: 100%" class="enter-end">
    <div class="title">恭喜xxx小朋友</div>
    <div class="description">“完成党史大闯关”挑战</div>
    <div class="button-wrap">
      <el-button
        round
        size="large"
        type="primary"
        class="start-btn"
        @click="start()"
      >
        返回关卡选项
      </el-button>
    </div>
  </div>
</template>
<style lang="less">
.enter-end {
  background: url(/home_bg.jpg) no-repeat;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  .title {
    font-size: 28px;
    flex-direction: column;
    justify-content: center;
    display: flex;
    font-weight: bold;
    align-items: center;
    color: #fff;
    height: 40%;
    .sub-title {
      font-size: 38px;
    }
  }
  .button-wrap {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30%;
  }
}
</style>
