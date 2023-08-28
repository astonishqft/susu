import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', () => {
  const token = ref(
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJ1c2VySWQiOiIxNTYxOTY3NzczNTg2OTUyMTkyIn0.nTgIqYl9o5Qu968J8BGVBK3DypWTI2e5oH0W1gnlx6UPIWJVTtqSNI1Jkri43g_IDx6L69MK40Vrx6VxTZ019w',
  );
  const getToken = computed(() => token.value);
  function setToken(t: string) {
    token.value = t;
  }

  return { token, getToken, setToken };
});
