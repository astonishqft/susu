<script setup>
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useRegisterStore } from '../stores/register'

const store = useRegisterStore()
const router = useRouter()

onMounted(() => {
  // 首先清空错题数
  store.secondErrorCount = 0
  store.secondComplete = false
})

const start = () => {
  router.push('/secondOneDetail')
}
</script>
<template>
  <div style="height: 100%" class="enter-wrapper">
    <div class="title">
      <div>少先队史大闯关</div>
      <div class="sub-title">第一关·填一填</div>
    </div>
    <div class="description">
      <div class="inner">关卡说明：请根据空格顺序，填选出正确答案</div>
    </div>
    <div class="button-wrap">
      <el-button round size="large" type="primary" class="start-btn" @click="start()">
        第一关开启
      </el-button>
    </div>
  </div>
</template>
<style lang="less">
.enter-wrapper {
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
  .description {
    color: #fff;
    height: 20%;
    margin-bottom: 46px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    .inner {
      width: 60%;
    }
  }
}
</style>
