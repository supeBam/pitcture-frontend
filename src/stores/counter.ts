import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
// 一个状态就存储一类要共享的数据（例如：存一类常量)
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  // 定义状态的初始值
  // 定义变量的计算逻辑
  const doubleCount = computed(() => count.value * 2)
  //定义怎么更改状态
  function increment() {
    count.value++
  }

  //返回
  return { count, doubleCount, increment }
})
