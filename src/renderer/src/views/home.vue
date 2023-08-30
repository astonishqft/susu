<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const start = () => {
  router.push('/register')
}
</script>
<template>
  <div style="height: 100%" class="home-wrapper">
    <div class="header-title">仪征市实验小学</div>
    <div class="title">
      <div>党史少年</div>
      <div class="sub-title">最强知识大闯关</div>
    </div>
    <div class="button-wrap">
      <el-button
        round
        size="large"
        type="primary"
        class="start-btn"
        @click="start()"
      >
        马上挑战
      </el-button>
    </div>
    <div class="descrition">
      <div class="inner">
        <div class="detail-title">
          <el-icon><Document /></el-icon>
          <span class="des">活动说明：</span>
        </div>
        <div>（1）主办单位：仪征市实验小学</div>
        <div>（2）活动策划：苏洁</div>
        <div>（3）活动规则：活动分两部分进行，分别是“党史大闯关”与“少先队史”大闯关，错三题及三题以上必须重新作答，满分作答则获“最强知识少年”勋章</div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.home-wrapper {
  background: url(/home_bg.jpg) no-repeat;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  .header-title {
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 20px;
    margin-top: 10px;
    font-size: 18px;
    color: #fff;
  }
  .title {
    font-size: 28px;
    flex-direction: column;
    justify-content: center;
    display: flex;
    font-weight: bold;
    align-items: center;
    color: #fff;
    height: 200px;
    .sub-title {
      font-size: 38px;
    }
  }
  .button-wrap {
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .descrition {
    color: #fff;
    // margin: 10px 60px 40px 60px;
    margin-bottom: 46px;
    width: 100%;
    display: flex;
    justify-content: center;
    .inner {
      width: 70%;
    }
    .detail-title {
      margin-bottom: 6px;
      display: flex;
      align-items: center;
      .des {
        margin-left: 5px;
      }
    }
  }
}
</style>
