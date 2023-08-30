<script setup>
import { useRouter } from 'vue-router'
import { ref, reactive } from 'vue'
import { useRegisterStore } from '../stores/register'

const router = useRouter()
const registerFormRef = ref()
const store = useRegisterStore()
const registerForm = reactive({
  className: '',
  userName: ''
})
const rules = reactive({
  userName: [{ required: true, message: '请输入名字！', trigger: 'change' }],
  className: [{ required: true, message: '请输入班级名！', trigger: 'change' }]
})
const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      const className = registerForm.className
      const userName = registerForm.userName
      store.userName = userName
      store.className = className
      // TODO
      router.push('/choose')
    } else {
      console.log('error submit!')
      return false
    }
  })
}
</script>
<template>
  <div style="height: 100%" class="register-wrapper">
    <div class="title">最强知识大闯关</div>
    <div class="register-form-wrapper">
      <el-form
        ref="registerFormRef"
        :model="registerForm"
        :rules="rules"
        status-icon
        label-width="120px"
        class="register-form"
      >
        <el-form-item class="label" label="班级名" prop="className" required>
          <el-input v-model="registerForm.className" autocomplete="off" />
        </el-form-item>
        <el-form-item class="label" label="姓名" prop="userName" required>
          <el-input v-model="registerForm.userName" autocomplete="off" />
        </el-form-item>
        <el-form-item>
          <el-button class="register-btn" type="primary" @click="submitForm(registerFormRef)">
            确认
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<style lang="less">
:global(.el-form-item__label) {
  color: #fff;
}
.register-wrapper {
  background: url(/home_bg.jpg) no-repeat;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .label {
    label {
      color: #fff;
      font-size: 24px;
    }
  }
  .title {
    height: 40px;
    color: #fff;
    margin-left: 10px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    font-size: 32px;
  }
  .register-form-wrapper {
    height: 50%;
    display: flex;
    justify-content: center;
    .register-form {
      width: 40%;
      .register-btn {
        width: 100%;
      }
    }
  }
}
</style>
