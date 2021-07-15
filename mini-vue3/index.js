/*
 * @Author: lijing
 * @Date: 2021-07-15 15:29:01
 * @Description: 利用vue3的响应式库 实现响应式
 */
// const { effect, reactive } = require("@vue/reactivity")
import { effectWatch, reactive } from './core/reactivity/index.js'

// 声明一个响应式对象：1.用reactive
// 2.利用ref
let a = reactive({
  value: 1
})
let b;
effectWatch(() => {
  b = a.value + 10;
  console.log(b)
})

a.value = 30