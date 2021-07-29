/*
 * @Author: lijing
 * @Date: 2021-07-27 10:58:21
 * @Description: 
 */
var findSecondMinimumValue = function(root) {
  // 子节点数目为0或者2 
  if(root.left === null || root.right === null) {
      return -1
  }
  // 当前节点有左右子节点
  if(root.left.val === root.right.val) {
      // 左节点值等于右节点值
      let leftMinVal = findSecondMinimumValue(root.left)
      let rightMinVal = findSecondMinimumValue(root.right)
      return leftMinVal === rightMinVal ? -1 : Math.max(leftMinVal, rightMinVal)
  } else {
      // 左节点值不等于右节点值
      return Math.max(root.left.val, root.right.val)
  }
};


/**
 * 415. 字符串相加
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
//  var addStrings = function(num1 = '456', num2='77') {
//   let len1 = num1.length
//   let len2 = num2.length
//   let arr1 = num1.split('')
//   let arr2 = num2.split('')
//   let flag = false
//   let ans = len2 > len1 ? arr2 : arr1
//   for(let i = 1; i<= Math.max(len1,len2); i++) {
//       if (flag) {
//           ans[ans.length - i] = parseInt(ans[ans.length - i]) + 1
//           flag = false
//       }
//       const n1 = parseInt(arr1[len1 - i]) || 0
//       const n2 = parseInt(arr2[len2 - i]) || 0
//       let cur =  n1 + n2
//       if (cur > 10) {
//           // 需要进位
//           flag = true
//           ans[ans.length - i] = cur % 10
//       } else {
//           ans[ans.length - i] = cur
//       }
//   }
//   return ans.join('')
// };

var addStrings = function(num1 = '456', num2='77') {
  let arr1 = num1.length > num2.length ? num1.split('') : num2.split('')
  let arr2 = num1.length > num2.length ? num2.split('') : num1.split('') 
  let len1 = arr1.length
  let len2 = arr2.length
  let flag = false

  for(let i = 1; i<= len1; i++) {
      let n1 = parseInt(arr1[len1 - i]) || 0
      let n2 = parseInt(arr2[len2 - i]) || 0
      if (flag) {
          // 需要进位
          n1 += 1
          flag = false
      }
      const cur = n1 + n2

      if(cur < 10 || i === len1) {
          arr1[len1- i] = cur
      } else {
          // 需要进位
          flag = true
          arr1[len1- i] = cur % 10
      }
  }
  return arr1.join('')
};