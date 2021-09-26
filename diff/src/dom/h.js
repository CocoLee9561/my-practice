/*
 * @Author: lijing
 * @Date: 2021-09-26 17:04:09
 * @Description: 
 */
import vnode from "./vnode";
export default function (ell, data, text) {
  if (typeof text === 'string' || typeof text === 'number') {
  
    return vnode(el, data, undefined, text, undefined)
  } else if(Array.isArray(text)) {}
}