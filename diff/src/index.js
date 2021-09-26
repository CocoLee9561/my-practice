import h from './dom/h'

let vnode1 = h('div', {}, '123')
let vnode2 = h('ul', {}, [
  h('li', {}, 'a')
])

console.log(vnode1)
