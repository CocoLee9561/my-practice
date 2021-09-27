/**
 * 3. 无重复字符的最长子串
 * @param {String} s 
 */
var LongestSubstring = function(s) {
    let len = 0
    let cur = ''
    let arr = [...s]

    for (let i = 0; i < arr.length; i++) {
        let index = cur.indexOf(arr[i])
        
        if (index >= 0) {
            // 遇到有重复的字符
            let tmp = cur.split(arr[i])
            len =  max(tmp[0].length, tmp[1].length)
            cur = tmp[0].length === len ? tmp[0] : tmp[1]
        } else {
            cur += arr[i]
        }
    }

};