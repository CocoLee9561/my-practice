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

/**数组中 两数相加 为一个特定值，输出这两个数
  // console.log(twoSum([3,2,4], 6))
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
  var twoSum = function(nums, target) {
  // 第一种，暴力解法
    // for(let i = 0; i<nums.length;i++) {
    //     for(let j=0;j<nums.length;j++) {
    //         if(i===j) continue;
    //         if(nums[i] + nums[j] === target) {
    //             return [i,j]
    //         }
    //     }
    // }
    // return []
  // 第二种，利用hash
    // let hash = new Set()
    // for (let i = 0; i < nums.length; i++) {                
    //     if (hash.has(nums[i])) { // 当前元素在hash中, 直接返回结果                    
    //         return [hash[nums[i]], i]
    //     } else {
    //         hash.add(target - nums[i],i) // 保存当前元素期待的值和当前索引到hash
    //     }
    // }
    // return []
};
/**
 * 两数相加
 */
var addTwoNumbers = function(l1, l2) {
    let maxlen = Math.max(l1.length, l2.length)
    let res = []
    for(let i = 0; i < maxlen ; i++) {
        let a = l1[i] || 0
        let b = l2[i] || 0
        let ori = res[i] || 0
        let sum = a + b + ori
        if ( sum > 9) {
            res[i] = sum - 10
            res[i+1] = 1
        } else {
            res[i] = sum
        }
    }
    return res.reverse()
};
// console.log(addTwoNumbers([2,4,3], [5,6,4]))
// console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]))

/**
 * 3. 无重复字符的最长子串
 * @param {*} s 
 * @returns 长度
 */
var lengthOfLongestSubstring = function(s) {
  s= [...s]
  if(s.length < 2) return s.length
  let map = new Map()
  map.set('maxlength', 0)
  for(let i=0;i<s.length;i++){
      if(map.has(s[i])) {
          let lastIndex = map.get(s[i])
          let len = i - lastIndex
          let maxlen = map.get('maxlength')
          if (len > maxlen)  {
              map.set('maxlength', len)
          }
      }
      map.set(s[i], i)
  }
  return map.get('maxlength') === 0 ? s.length : map.get('maxlength')
};



/**
 * 165. 比较版本号
 * @param {*} version1 
 * @param {*} version2 
 * @returns 

 */
var compareVersion = function(version1 = "0.1", version2 = "1.1") {
  let ver1 = version1.split('.')
  let ver2 = version2.split('.')

  for(let i = 0;i < Math.max(ver1.length,ver2.length);i++) {
      let char1 = ver1[i] || 0
      let char2 = ver2[i] || 0
      if(parseInt(char1) > parseInt(char2)) {
          return 1
      }
      if(parseInt(char1) < parseInt(char2)) {
          return -1
      }
  }
  return 0
};

/**
 * 46. 全排列
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
  const res = [], path = []
  backtracking(nums, nums.length, [])
  return res

  function backtracking(arr, len, used) {
      if (path.length === len) {
          res.push(Array.from(path))
          return res
      }
      for (let i = 0; i < len; i++) {
          if (used[i]) continue;
          path.push(arr[i])
          used[i] = true
          backtracking(arr, len, used)
          path.pop()
          used[i] = false
      }
  }
};
