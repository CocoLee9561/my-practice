/*
 * @Author: lijing
 * @Date: 2021-09-28 15:41:39
 * @Description: 数据初始化
 */

export function initState (vm) {
  const options = vm.$options

  if (options.data) {
    initData(vm)
  }
}

function initData(vm) {
  let data = vm.$options.data
}
