<template>

  <!-- 页面主体内容开始1 -->
      <div class="personal">
        <div class="wid">
          <!-- 面包屑导航1 -->
          <div class="bar">
            <span id="kinds">首页</span>
            <i class=" iconfont icon-dayuhao"></i>
            <span id="nav_name">个人中心</span>
          </div>
          <!-- 面包屑导航2 -->
      <!-- 个人中心开始1 -->
          <div class="main-personal">
            <!-- 快捷导航左侧1 -->
            <div class="personal-left">
              <p>快捷导航</p>
              <ul>
                <router-link tag="li" to="/portal">个人中心</router-link>
                <router-link tag="li" to="/portal/my-order">我的订单</router-link>
                <router-link tag="li" to="/cart">我的购物车</router-link>
                <router-link tag="li" to="/list">随便逛逛</router-link>
                <router-link tag="li" to="/list">优惠产品</router-link>
              </ul> 
              <p>账户管理</p>
              <ul>
                <router-link tag="li" to="/portal/my-details">个人信息</router-link>
                <router-link tag="li" to="/portal/my-pwd">修改密码</router-link>
                <router-link tag="li" to="/portal/my-add">收货地址</router-link>
              </ul>
            </div>
            <!-- 快捷导航左侧2 -->
            <!-- 会有改动部分1 -->
           <router-view></router-view>
            <!-- 会有改动部分2 -->
            <div class="clearfix"></div>
          </div>
      <!-- 个人中心开始2 -->
        </div>
      </div>
  <!-- 页面主体内容开始1 -->
</template>
<script>
import axios from 'axios'
import proMyadd from './protal-all/Pro-myadd'
import proMydetails from './protal-all/Pro-mydetails'
import proMyOrder from './protal-all/Pro-myorder'
import proPersonal from './protal-all/Pro-personal'
import proPwd from './protal-all/Pro-pwd'

export default{
  data(){
    return{

    }
  },
  methods:{},
  components:{
    "pro-myadd":proMyadd,
    "pro-mydetails":proMydetails,
    "pro-myorder":proMyOrder,
    "pro-personal":proPersonal,
    'pro-pwd':proPwd,
  },
  created(){},
  mounted(){}
}
</script>
<style scoped>
 .bar {
    padding-top: 100px;}

.router-link-exact-active{
  color:#fa9dac;
}
</style>