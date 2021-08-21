/*
 * @Author: lijing
 * @Date: 2021-06-30 10:34:45
 * @Description: treenode 遍历
 */

let tree = {
  id : '1',
  label : 'a',
  children : [
      {
          id : '2',
          label: 'b',
      },
      {
          id: '3',
          label:'c',
          children: [
              {
                  id: '4',
                  label: 'd'
              },{
                  id: '5',
                  label: 'e'
              },
              null
          ]
      }
  ]
}

let treeNodeArr = []
function getTreeNodes (root) {
  // 先拉直树，vue-router初始化的时候也是这样做的
  if (!root) return

  treeNodeArr.push(root)

  if (root['children'] && root['children'].length) {
    root['children'].forEach(child => {
      getTreeNodes(child)
    })
  }
}

function findTreeNodeById1(root, id) {
  getTreeNodes(root)
  return treeNodeArr.filter(node => node.id === id)
}

function findTreeNodeById(root, id) {
  console.log(root, id)
  if(!root || !root.id) {
      return undefined
  }
  if(root.id === id) {
      return root.label
  }
  if (root.children && root.children.length) {
      let label = ''
      root.children.forEach(item => {
          let val = findTreeNodeById(item, id)
          if (val) {
              label = val
          }
          console.log(val)
          console.log('-----------------')
      })
      return label || undefined
  } else {
      return undefined
  }
}


          // function ListNode(val, next) {
          //     this.val = (val===undefined ? 0 : val)
          //     this.next = (next===undefined ? null : next)
          // }
          // let l1 = new Array( new ListNode(2,4), new ListNode(4,3), new ListNode(3) )
          // console.log(l1)

        // console.log(findTreeNodeById(tree, '10'))        
        // console.log(findTreeNodeById1(tree, '10'))

// export default {
//   findTreeNodeById1,
//   findTreeNodeById
// }