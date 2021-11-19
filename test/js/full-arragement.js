// 全排列
function arragement(nums, current) {
        console.log('after: ', current)
    if (current.length === nums.length) {
        console.log(current)
        return
    }
    
    for(let i = 0; i < nums.length; i++) {
        // 根节点循环
        if (current.includes(nums[i])) continue

        current.push(nums[i])
        // console.log('before: ', current)
        arragement(nums, current)
        current.pop()
    }
}

arragement1([1,2,3])

// function a(arr) {
//     arr.push('abc')
// }

// var b = [1,2]
// console.log('b:', b)
// a(b)
// console.log('b:', b)

var permute = function(nums) {
    let res = []
    let path = Array(nums.length).fill(false)
    arragement(nums, path)
    function arragement(nums, path, current = []) {
        if (current.length === nums.length) {
            console.log(current)
            res.push(current)
        }

        for (let i = 0; i < nums.length; i++) {
            if (path[i]) continue

            current.push(nums[i])
            path[i] = true
            arragement(nums, path, current.slice())

            current.pop()
            path[i] = false
        }
    }
    return res
};