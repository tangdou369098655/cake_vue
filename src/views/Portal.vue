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
                <li class="personal-action">个人中心</li>
                <li>我的订单</li>
                <li>我的购物车</li>
                <li>随便逛逛</li>
                <li>优惠产品</li>
              </ul>
              <p>账户管理</p>
              <ul>
                <li>个人信息</li>
                <li>修改密码</li>
                <li>收货地址</li>
              </ul>
            </div>
            <!-- 快捷导航左侧2 -->
            <!-- 会有改动部分1 -->
            <!-- 个人中心模块1 -->
            <pro-personal>
            </pro-personal>
            <!-- 个人中心模块1 -->
            <!-- 我的订单模块1 -->
            <pro-myorder>
            </pro-myorder>
            <!-- 我的订单模块2 -->
            <!-- 个人信息模块1 -->
            <pro-mydetails>
            </pro-mydetails>
            <!-- 个人信息模块2 -->
            <!-- 修改密码模块1 -->
            <pro-pwd>
            </pro-pwd>
            <!-- 修改密码模块2 -->
            <!-- 收货地址模块1 -->
            <pro-myadd>
            </pro-myadd>
            <!-- 收货地址模块2 -->
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
</style>