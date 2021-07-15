/*
 * @Author: lijing
 * @Date: 2021-06-30 10:34:45
 * @Description: object的key,由短横线改成驼峰命名
 */

let before = {
  first_name: 'aa',
  last_name: 'smith',
  age:0,
  sex:0,
  parents_info: [
    {
      first_name: 'bb',
      last_name: 'smith',
      age:0,
      sex:0,
      parents_info: [
        {
          first_name: 'cc',
          last_name: 'smith'
        },
        {
          first_name: 'dd',
          last_name: 'jhon'
        }
      ]
    },
    {
      first_name : 'ee',
      age:0,
      sex:0,
      last_name: 'ph'
    }
  ]
}

function transfer(beforeObj = {}) {
  let tmp = {}
  Object.keys(beforeObj).forEach(key => {
    const str = _ToCamel(key)
    if (beforeObj[key] instanceof Object) {
      tmp[str] = transfer(beforeObj[key])
    } else {      
      tmp[str] = beforeObj[key]
    }
  }) 
  return tmp
}

function _ToCamel (beforeStr = '') {
  if (beforeStr.includes('_')) {
    let arr = beforeStr.split('_')
    for(let i = 1; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1) 
    }
    return arr.join('')
  }
  return beforeStr
}

// const after = transfer(before)
// console.log(after)