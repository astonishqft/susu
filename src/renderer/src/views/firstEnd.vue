<script setup>
import { useRouter } from 'vue-router'
import { useRegisterStore } from '../stores/register'

const store = useRegisterStore()

const router = useRouter()
const start = () => {
  store.firstErrorCount = 0
  store.firstComplete = true
  router.push('/choose')
}

console.log('总的错题数', store.firstErrorCount)
</script>
<template>
  <div
    style="
      height: 100%;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      background-attachment: fixed;
    "
    class="first-end"
    :class="{
      award: store.firstErrorCount === 0
    }"
  >
    <div v-if="store.firstErrorCount !== 0" class="success-1">
      <div class="header">错{{ store.firstErrorCount }}题</div>
      <div class="title">
        <div class="title-main">恭喜“{{ store.userName }}”同学顺利完成</div>
        <div class="title-sub">“党史大闯关”挑战</div>
      </div>
    </div>
    <div v-else class="success-2">
      <div class="header"></div>
      <div class="title">
        <div class="title-main">恭喜“{{ store.userName }}”同学，答对所有题目，成功获得</div>
        <div class="title-sub"><span class="award-name">“党史知识小达人”</span>称号</div>
      </div>
    </div>
    <div class="button-wrap">
      <el-button round type="primary" class="start-btn" @click="start()">返回关卡选项</el-button>
    </div>
  </div>
</template>
<style lang="less">
.first-end.award {
  background: url(/success2.jpg);
}
.first-end {
  background: url(/success1.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  .success-1 {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
    margin-left: 20px;
    .header {
      height: 24px;
      font-size: 16px;
      color: #fff;
      display: flex;
      align-items: center;
    }
    .title {
      font-size: 36px;
      color: #0e0d0d;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 70%;
      .title-main {
        font-size: 32px;
      }
      .sub-title {
        margin-top: 30px;
        font-size: 46px;
        font-weight: bold;
      }
    }
  }
  .success-2 {
    height: 100%;
    .header {
      height: 30%;
      font-size: 16px;
      color: #fff;
      display: flex;
      align-items: center;
    }
    .title {
      font-size: 36px;
      color: #0e0d0d;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      height: 70%;
      .title-main {
        font-size: 32px;
      }
      .title-sub {
        margin-top: 30px;
        font-size: 46px;
        .award-name {
          color: red;
          font-weight: bold;
        }
      }
    }
  }
  .button-wrap {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 20%;
  }
}
// .first-end.succuss {
//   background: url(/success2.jpg);
// }
</style>
