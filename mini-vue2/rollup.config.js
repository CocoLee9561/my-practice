/*
 * @Author: lijing
 * @Date: 2021-09-26 18:03:58
 * @Description: 
 */
import babel from "rollup-plugin-babel";

// 

export default {
  input: './src/index.js',
  output: {
    file: 'dist/vue.js',
    format: 'umd', // 打包后的结果是umd（支持amd和cmd）模块规范
    name: 'Vue', // 
    sourcemap: true
  },
  plugins: [
    babel({ // es6 -》 es5
      exclude: "./node_modules/**" // 不需要编译的文件
    })
  ]
}