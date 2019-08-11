
//将引入axios库单独保存一个文件中
//减少main.js 代码量
// 1:引入vue实例
import Vue from "vue"
//2:引入axios库
import axios from "axios"

import env from '@/env'
//4:设置请求基础路径
axios.defaults.baseURL = env.baseURL

//全局响应拦截器，方便前台数据解析无需每个res.data
axios.interceptors.response.use(response => {
  return Promise.resolve(response)
}, error => {
  return Promise.reject(new Error(
    error.response ? error.response.data : '网络错误'
  ))
})


//3:发送请求时保存session信息
axios.defaults.withCredentials=true
//5:将axios注册vue实例
Vue.prototype.axios = axios 
//6:在main.js 引入axios.js文件 