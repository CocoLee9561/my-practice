/*
 * @Author: lijing
 * @Date: 2021-10-13 17:28:16
 * @Description: 
 */



const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

function MyPromise(executor) {
  this.state = PENDING
  this.value = null
  this.reason = null

  function resolve(value) {
    if(this.state === PENDING) {
      this.state = FULFILLED
      this.value = value
    }
  }

  function reject(reason) {
    if (this.state === PENDING) {
      this.state = REJECTED
      this.reason = reason
    }
  }

  try {
    executor(resolve, reject)
  } catch (error) {
    reject(error)
  }
}

MyPromise.prototype.yhen

const p2 = new MyPromise((resolve,reject) => {})

const p1 = new Promise((resolve, reject) => {
  resolve(res)
})
p1.then(() => {console.log('onFulfilled')}, () => {console.log('onRejected')})
.then()
.catch(() => {console.log('onRejected')})
