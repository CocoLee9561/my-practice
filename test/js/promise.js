/*
 * @Author: lijing
 * @Date: 2021-10-25 20:13:43
 * @Description: 
 */
let p1 = new Promise((resolve,rejected) => {
  resolve('123')
})
let p2 = p1.then(res=> {
  console.log(res)
  return '456'
})
p2.then(res => {console.log(res)})