/*
 * @Author: lijing
 * @Date: 2021-07-15 15:35:40
 * @Description: 手写响应式库
 */

// 依赖
let currentEffect;
class Dep{
  constructor(val) {
    // 为什么用set，因为依赖不能重复收集
    this.effects = new Set();
    this._val = val
  }

  get value () {
    this.depend()
    return this._val
  }
  set value (newVal) {
    this._val = newVal
    this.notice()
  }
  // 1.收集依赖
  depend() {
    currentEffect && this.effects.add(currentEffect)
  }

  // 2.触发依赖
  notice() {
    // 触发我们收集到的依赖
    this.effects.forEach(effect => {
      effect()      
    });
  }
}

// effect实际上是一个函数，是一个值如何变化的规则
export function effectWatch(effect) {
  // 收集依赖
  currentEffect = effect
  effect()
  // dep.depend()
  currentEffect = null
}

// const dep = new Dep(10)
// let b;
// effectWatch(() => {
//   b = dep.value + 10
//   console.log(b)
// })

// // 值发生变更的时候
// dep.value = 20
// dep.notice()



// 实现reactivity
// 
const targetMap = new Map() // 所有对象和这个对象的dep的集合

function getDep(target, key) {
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target,depsMap)
  }
  let dep = depsMap.get(key)
  if(!dep) {
    dep = new Dep();
    depsMap.set(key, dep)
  } 
  return dep
}

export function reactive (raw) {
  return new Proxy(raw, {
    get(target, key) {
      console.log(target, key)
      // 一个key要对应一个dep
      const dep = getDep(target, key)
      // 依赖收集
      dep.depend()
      return Reflect.get(target, key) // 等同于 taget[key]
    },
    set(target, key, value) {
      // 触发依赖
      // 要获取到dep对象
      const dep = getDep(target, key)
      const result = Reflect.set(target, key, value)
      dep.notice()
      return result
    }
  })
}

// const user = reactive({
//   age: 19
// })

// let double
// effectWatch(() => {
//   console.log("--reactive--")
//   double = user.age
//   console.log(double)
// })

// user.age = 20