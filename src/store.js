import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userinfo: {},
    cartCount: 0
  },
  mutations: {
    //更新用户信息
    setUserInfo(state, data = {}) {
      state.userinfo = data
    },
    //更新购物车信息
    setCartInfo(state,data={}){
        state.cartinfo =data
    },
    // 购物车数量加1
    increment(state) {
      state.cartCount++
    },
    // 购物车数量增加指定值
    updateCount(state, c) {
      state.cartCount += c
    },
    // 清空购物车
    clear(state) {
      state.cartCount = 0
    }
  },
  actions: {
    getUserInfo({
      commit
    }) {
      return axios('/user/info').then(({
        data
      }) => {
        commit('setUserInfo', data)
      })
    },
    getCartInfo({
      commit
    }) {
      return axios('/cart/mycart').then(({
        data
      }) => {
        commit('setCartInfo', data)
      })
    },
    getCartCount: function (state) {
      return state.cartCount;
    }
  }
})
// 7.注册vuex组件
// Vue.use(Vuex)
// 8.创建store实例
// var store=new Vuex.Store({
//vuex中全局共享的数据
// state:{cartCount:0},
//修改vuex中全局共享的数据
// mutations:{
// 购物车数量加1
// increment(state){
// state.cartCount++;
// },
// clear(state){
//   state.cartCount=0;
// },
// updateCount(state,c){
//   state.cartCount+=c;
// }
// 购物车数量增加指定值
// },
//获取vuex中全局共享的数据
//   getters:{
//     getCartCount:function(state){
//       return state.cartCount;
//     }
//   }
// })