<template>
  <!-- 我的订单模块1 -->
  <div class="personal-right ">
    <div class="myorder">
      <ul class="myorder-top clearfix">
        <li class="top-one">我的订单</li>
        <li class="top-active">全部订单</li>
        <li>未收货</li>
        <li>已收货</li>
        <li>未评价</li>
      </ul>
      <ul class="myorder-title clearfix bgcy">
        <li>商品信息</li>
        <li>订单金额</li>
        <li>收货信息</li>
        <li>订单状态</li>
        <li>操作</li>
      </ul>
      <!-- 具体订单信息需循环1 -->
      <div class="myorder-item-list">
        <ul class="myorder-item-title clearfix  bgcy">
          <li>2018-2-12 09:20:24</li>
          <li>订单号：72198590275</li>
        </ul>
        <ul class="myorder-title clearfix flex-item">
          <li>
            <img :src="imgurl+'images/index/黑白巧克力芝士.png'" alt="">
            <span>黑白巧克力芝士/尺寸：2.2寸/蜡烛1份/送达时间：2018-4-3 09:00-10:00</span>
            <i>x1</i>
          </li>
          <li>218.00</li>
          <li>
            糖糖
            18625578825
            <br>
            北京 北京市 东城区 安定门街道 00001号
          </li>
          <li>已签收</li>
          <li>
            <i class="icon iconfont icon-daipingjia01 pink1"></i>
            &ensp;
            <i>再次<br>购买</i>
          </li>
        </ul>
      </div>
      <!-- 具体订单信息需循环1 -->
    </div>
  </div>
  <!-- 我的订单模块2 -->
</template>
<script>
  import axios from 'axios'
  export default {
    name: "Pro-myorder",
    props: {

    },
    data() {
      return {}
    },
    methods: {
      getData(){
        this.axios('/portal/orderall').then(({data})=>{console.log(data)})
      }
    },
    created() {
      this.getData()
    }
  }
</script>
<style scoped>

</style>