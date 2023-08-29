<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue'
import cloneDeep from 'lodash/cloneDeep'
import { myRandom, equar } from '../utils/utils'
import data from '../utils/1_3.json'

import rightIcon from '/select.png?url'
import wrongIcon from '/wrong.png?url'

const currentTime = ref(60)

const selected = ref([])
const currentIndex = ref(0) // 当前做到了第几题
const answerList = ref([]) // 选项列表
// const chooseResult = ref(null) // 选择结果
const rightAnswer = ref('') // 每题的正确答案
const choosedAnswer = ref('') // 当前选择的答案

const isRight = ref(false) // 是否答题正确

const isConfirm = ref(false)

// 当前选中的答案列表项
const selectList = ref([])
const selectList2 = ref([])

const rightCount = ref(0)
const wrongCount = ref(0)

const subject = ref(null) // 题目
const dialogVisible = ref(false)

onMounted(() => {
  selected.value = myRandom(cloneDeep(data), 5)
  currentIndex.value = 0
  changeSubject()
})

// 下一题
const next = () => {
  // 第一步，先判断对错
  currentTime.value = 60
  if (equar(selectList.value, rightAnswer.value)) {
    isRight.value = true
    rightCount.value = rightCount.value + 1
  } else {
    isRight.value = false
    wrongCount.value = wrongCount.value + 1
  }

  // 如果答错大于等于3题，那么就返回第三关入口重新答题
  if (wrongCount.value === 3) {
    dialogVisible.value = true
    setTimeout(() => {
      dialogVisible.value = false
      router.push('/firstEnter')
    }, 5000)
  }

  currentIndex.value = currentIndex.value + 1

  // 完成第一关所有题目
  if (currentIndex.value === 4) {
    setTimeout(() => {
      router.push('/firstEnd')
    }, 1000)
  } else {
    isConfirm.value = true

    // 第二步先将选中状态置位
    selectList.value = []

    setTimeout(() => {
      // 将上一题的选中状态置位
      isConfirm.value = false

      // 切换到下一题
      if (currentIndex.value < 4) {
        reset()
        changeSubject()
        selectList2.value = []
      } else {
        // alert('恭喜你答题结束')
      }
    }, 1000)
  }
}

const reset = () => {
  choosedAnswer.value = null
}

const choose = (a) => {
  // 如果选择的选项正确
  choosedAnswer.value = a
  if (selectList.value.includes(a)) {
    selectList.value = selectList.value.filter((item) => item !== a).sort()
  } else {
    selectList.value.push(a)
    selectList.value.sort()
  }

  selectList2.value = selectList.value
}

// 切换题目
const changeSubject = () => {
  const curr = selected.value[currentIndex.value]
  subject.value = curr.desc
  answerList.value = curr.choose
  rightAnswer.value = curr.answer
}

onUnmounted(() => {
  clearInterval(instance)
})

const instance = setInterval(() => {
  currentTime.value = currentTime.value - 1
  if (currentTime.value === 0) {
    // 跳转到下一题或者结束答题，并清空定时器
    // clearInterval(instance)

    // 自动跳到下一题
    choose(null)
    // 重新开始计时
    currentTime.value = 60
  }
}, 1000)

const router = useRouter()

const goHome = () => {
  router.push('/choose')
}
</script>
<template>
  <div style="height: 100%" class="firstThreeDetail">
    <div class="title">
      <div class="goHome" @click="goHome">回到首页</div>
      <div class="main-title">党史大闯关</div>
      <div class="sub-title">第三关·认真选</div>
    </div>
    <div class="tool">
      <div class="time">倒计时：{{ currentTime }}</div>
      <div class="error">错题数：{{ wrongCount }}</div>
    </div>
    <div class="content">
      <div class="subject">
        {{ subject }}
      </div>
      <div class="answers-wrapper">
        <div
          v-for="a in answerList"
          :key="a.title"
          :class="{
            choosed: selectList.includes(a.title),
            right: rightAnswer.includes(a.title) && isConfirm,
            wrong: !rightAnswer.includes(a.title) && !selectList2.includes(a.title) && isConfirm
          }"
          class="answer-item"
          @click="choose(a.title)"
        >
          {{ a.title }}.{{ a.des }}
          <img
            class="icon"
            :src="rightIcon"
            :style="{ display: rightAnswer.includes(a.title) && isConfirm ? 'block' : 'none' }"
          />
          <img
            class="icon"
            :src="wrongIcon"
            :style="{
              display:
                !rightAnswer.includes(a.title) && !selectList2.includes(a.title) && isConfirm
                  ? 'block'
                  : 'none'
            }"
          />
        </div>
      </div>
      <div class="confirm-btn">
        <el-button type="primary" class="start-btn" @click="next()">确定</el-button>
      </div>
    </div>
    <el-dialog v-model="dialogVisible" title="提示信息">
      <span>您当前的答题错题数达到3题，请重新答题(5秒后自动跳转到答题页)</span>
    </el-dialog>
  </div>
</template>
<style lang="less">
.firstThreeDetail {
  background: url(/home_bg.jpg) no-repeat;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  flex-direction: column;
  display: flex;
  .title {
    font-size: 28px;
    justify-content: space-between;
    display: flex;
    font-weight: bold;
    align-items: center;
    color: #fff;
    height: 40px;
    .sub-title {
      font-size: 38px;
    }
  }
  .tool {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    .time {
      margin-right: 10px;
    }
  }
  .content {
    height: 60%;
    flex-direction: column;
    justify-content: center;
    display: flex;
    .subject {
      color: #fff;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 25px;
    }
    .confirm-btn {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
    .answers-wrapper {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      .answer-item {
        background: #fff;
        padding: 10px 15px 10px 15px;
        margin-left: 20px;
        border-radius: 5px;
        position: relative;
        &:hover {
          cursor: pointer;
        }
      }
      .answer-item.choosed {
        background: green;
        color: #fff;
      }
      .answer-item.right {
        background: green;
        color: #fff;
      }
      .answer-item.wrong {
        background: #ffa500;
        color: #fff;
      }
      .icon {
        width: 15px;
        height: 15px;
        position: absolute;
        top: 2px;
        right: -6px;
      }
    }
  }
}
</style>
