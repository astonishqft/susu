<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import { useRegisterStore } from '../stores/register'
import selectIcon from '/select.png?url'

const store = useRegisterStore()

// '0' 或者 '1','0': 党史大闯关；'1': 少先队史大闯关
const type = ref('0')

const router = useRouter()

const choose = (name) => {
  type.value = name
}
const start = () => {
  const t = type.value
  if (t === '0') {
    router.push('/firstEnter')
  } else {
    router.push('/secondEnter')
  }
}
</script>
<template>
  <div style="height: 100%" class="choose-wrapper">
    <div class="title">最强知识大闯关</div>
    <div class="content">
      <div class="choose-name">请选择关卡</div>
      <div class="answer-card-wrapper">
        <div class="card" @click="choose('0')">
          <img v-if="type === '0'" :src="selectIcon" alt="0" />
          党史大闯关
        </div>
        <div class="card" @click="choose('1')">
          <img v-if="type === '1'" :src="selectIcon" alt="1" />
          少先队史大闯关
        </div>
      </div>
    </div>
    <div class="btn">
      <el-button
        round
        size="large"
        type="primary"
        class="start-btn"
        @click="start()"
      >
        闯关开始
      </el-button>
    </div>
  </div>
</template>
<style lang="less">
.choose-wrapper {
  background: url(/home_bg.jpg) no-repeat;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .title {
    height: 40px;
    color: #fff;
    margin-left: 10px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    font-size: 32px;
  }
  .content {
    display: flex;
    height: 240px;
    align-items: center;
    justify-content: center;
    .choose-name {
      color: #fff;
    }
    .answer-card-wrapper {
      display: flex;
      .card {
        width: 150px;
        height: 100px;
        background: yellow;
        margin: 0 20px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        img {
          position: absolute;
          right: 5px;
          top: 4px;
          width: 25px;
          height: 25px;
        }
      }
    }
  }
  .btn {
    height: 30%;
    align-items: center;
    display: flex;
    justify-content: center;
  }
}
</style>
