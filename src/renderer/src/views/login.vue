<template>
  <div class="login-wrapper">
    <div class="login-wrapper-inner">
      <div class="dangjian-logo" />
      <div class="login-form-wrapper">
        <div class="login-title">登录</div>
        <el-form
          ref="loginFormRef"
          :model="loginForm"
          :rules="rules"
          status-icon
          label-width="120px"
          class="login-form"
        >
          <el-form-item label="用户名" prop="userName" required>
            <el-input v-model="loginForm.userName" autocomplete="off" />
          </el-form-item>
          <el-form-item label="密码" prop="password" required>
            <el-input v-model="loginForm.password" type="password" autocomplete="off" />
          </el-form-item>
          <el-form-item>
            <el-button class="login-btn" type="primary" @click="submitForm(loginFormRef)">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'

const loginFormRef = ref()
const router = useRouter()

const loginForm = reactive({
  userName: '',
  password: ''
})

const checkLogin = (userName, password) => {
  if (userName === 'admin' && password === '11') {
    router.push('/home')
  }
}

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      const userName = loginForm.userName
      const password = loginForm.password

      checkLogin(userName, password)
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const rules = reactive({
  userName: [{ required: true, message: '请输入用户名！', trigger: 'change' }],
  password: [{ required: true, message: '请输入密码！', trigger: 'change' }]
})
</script>
<style lang="less">
.login-wrapper {
  background-size: cover;
  background: url(/login_bg.jpg);
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-wrapper-inner {
    width: calc(100% - 80px);
    background: #e0edfd;
    border-radius: 20px;
    height: calc(100% - 160px);
    display: flex;
    .dangjian-logo {
      background-size: cover;
      background: url(/dangjian1.png);
      width: 50%;
      height: 100%;
      background-repeat: no-repeat;
      background-size: 100%;
    }
    .login-form-wrapper {
      flex-direction: column;
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      background: #fff;
      border-radius: 20px;
      .login-title {
        width: 100%;
        height: 40px;
        display: flex;
        justify-content: center;
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .login-form {
        margin-right: 20px;
      }
      .login-btn {
        width: 100%;
      }
    }
  }
}
</style>
