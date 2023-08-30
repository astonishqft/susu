import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useRegisterStore = defineStore('register', () => {
  const userName = ref('')
  const className = ref('')

  // 第一关错题数
  const firstErrorCount = ref(0)

  return { userName, className, firstErrorCount }
})
