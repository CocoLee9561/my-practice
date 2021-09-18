/*
 * @Author: lijing
 * @Date: 2021-09-18 15:34:58
 * @Description: 
 */

function quickSort(arr = [5,1,1,2,2]) {
  if (!arr.length || arr.length === 1) return arr
  if (arr.length === 2) {
      return [Math.min(arr[0],arr[1]), Math.max(arr[0],arr[1])]
  }
  let idx = Math.floor(arr.length / 2)
  let pointer = arr[idx]
  console.log(idx, pointer)
  let left = []
  let right = []
  for(let i = 0; i < arr.length; i++) {
      if(i === idx) continue
      if(arr[i] <= pointer) {
          left.push(arr[i])
      } else {
          right.push(arr[i])
      }
  }
  console.log(left, right)
  left.length > 1 && (left = quickSort(left))
  right.length > 1 && (right =  quickSort(right))
  arr = [...left,pointer,...right]
  return arr
}

let heap1 = buildHeap([5,1,1,2,0,0])
console.log(heap1)
const len = heap1.length
for(let i = 0; i< len; i++) {
  console.log(pop(heap1), 'count:', i) 
}
// console.log(pop(heap1))

function buildHeap(nums) {
  if(!nums.length || nums.length < 2) return nums
  let heap = [nums[0]]
  for(let i = 1; i < nums.length; i++) {
      heap[i] = nums[i]
      bottomUp(heap, nums[i], i)
  }
  return heap
}

function bottomUp(heap, value, idx) {
  // console.log(heap, value)
  const parentIndex = idx % 2 ? (idx-1)/2 : (idx-2)/2
  if (value < heap[parentIndex]) {
      heap[idx] = heap[parentIndex]
      heap[parentIndex] = value
  } 
  if(parentIndex > 0) {
      return bottomUp(heap, heap[parentIndex], parentIndex)
  } else {
      return heap
  }
}

function pop(heap) {
  // console.log(heap)
  const min = heap[0]
  heap[0] = heap[heap.length -1]
  heap.splice(heap.length - 1, 1)
  console.log(heap)
  topDown(heap)
  return min
}

function topDown(heap, parentIndex = 0) {
  // console.log(heap, parentIndex)
  let parent = heap[parentIndex]
  let leftChild = heap[parentIndex*2+1]
  let rightChild = heap[parentIndex*2+2]
  // console.log(parent,leftChild, rightChild)
  // zui xiao dui,top is the minimum
  if(leftChild+''&&rightChild+'') {
      if(parent > leftChild && parent > rightChild) {
          // parent is bigger than child
          if(leftChild < rightChild) {
              // leftchild is the minimum, change
              heap[parentIndex*2+1] = parent
              heap[parentIndex] = leftChild
              return topDown(heap, parentIndex*2+1)
          } else {
              // rightChild is the minimum, change
              heap[parentIndex*2+2] = parent
              heap[parentIndex] = rightChild
              return topDown(heap, parentIndex*2+2)
          }
      } else if(leftChild < parent){
          // leftchild is the minimum, change
          heap[parentIndex*2+1] = parent
          heap[parentIndex] = leftChild
          return topDown(heap, parentIndex*2+1)
      } else if(rightChild < parent){
          // rightChild is the minimum, change
          heap[parentIndex*2+2] = parent
          heap[parentIndex] = rightChild
          return topDown(heap, parentIndex*2+2)
      }
  } else {
      if(leftChild) {
          // only left child,no right child
          if(leftChild < parent){
              // leftchild is the minimum, change
              heap[parentIndex*2+1] = parent
              heap[parentIndex] = leftChild
          }
      } else if (rightChild) {
          // only right child,no left child
          if(rightChild < parent){
              // rightChild is the minimum, change
              heap[parentIndex*2+2] = parent
              heap[parentIndex] = rightChild
          }
      } else {
          // no left child,no right child
      }
  }
  return heap[0]
}


/**
* @param {number[]} nums
* @return {number[]}
*/
var sortArray = function(nums) {
  if (!nums.length || nums.length === 1) return nums
  if (nums.length === 2) {
      return [Math.min(nums[0],nums[1]), Math.max(nums[0],nums[1])]
  }
  let idx = Math.floor(nums.length / 2)
  let pointer = nums[idx]
  let left = []
  let right = []
  for(let i = 0; i < nums.length; i++) {
      if(i === idx) continue
      if(nums[i] <= pointer) {
          left.push(nums[i])
      } else {
          right.push(nums[i])
      }
  }
  left = sortArray(left)
  right =  sortArray(right)
  return [...left,pointer,...right]
};
