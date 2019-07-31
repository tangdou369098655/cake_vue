<template>

  <!-- 个人中心模块1 -->
  <div class="personal-right ">
                <div class="myorder ">
                  <ul class="myorder-top clearfix">
                    <li class="top-one">个人中心</li>
                  </ul> 
                  </div>
    <div class="personal-top">
      <div class="img-self">
        <img :src="imgurl+'images/index/d7.gif'" alt="">
      </div>
      <ul>
        <li class="personal-name">糖糖</li>
        <router-link tag="li" to="/portal/my-details" class="text-gray"><span>修改个人信息&gt;</span></router-link>
      </ul>
      <ul>
        <li>账户安全：<span>普通</span></li>
        <li>绑定手机：<span>18625578825</span></li>
        <router-link tag="li" to="/portal/my-details">绑定邮箱：<span>未绑定</span></router-link>
      </ul>
    </div>
    <div class="personal-bottom">
      <div class="bottom-item">
        <i class="icon iconfont icon-qunfengqiabao"></i>
        <ul>
          <li>待支付订单：<span>0</span></li>
          <li><span>查看待支付订单&gt;</span></li>
        </ul>
      </div>
      <div class="bottom-item">
        <i class="icon iconfont icon-daipingjia01"></i>
        <ul>
          <li>待评价订单：<span>0</span></li>
          <li><span>查看待评价订单&gt;</span></li>
        </ul>
      </div>
      <div class="bottom-item">
        <i class="icon iconfont icon-shouhuoshou--"></i>
        <ul>
          <li>待收货订单：<span>1</span></li>
          <li><span>查看待收货订单&gt;</span></li>
        </ul>
      </div>
      <div class="bottom-item">
        <i class="icon iconfont icon-ziyuanxhdpi"></i>
        <ul>
          <li>到处去看看：<span>go</span></li>
          <li><span>到处去看看&gt;</span></li>
        </ul>
      </div>
    </div>
  </div>
  <!-- 个人中心模块1 -->
</template>
<script>
  import axios from 'axios'
  export default {
    name: "Pro-personal",
    props: {

    },
    data() {
      return {}
    },
    methods: {

    },
    created() {

    }
  }
</script>
<style scoped>
.myorder ul.myorder-top {
    margin-bottom: 40px;
}
</style>