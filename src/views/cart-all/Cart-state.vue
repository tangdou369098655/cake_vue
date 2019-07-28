<template>
 <!-- 目前状态信息1 -->
    <div class="state">
      <ul>
        <li :class="{active: active(0)}">
          <div></div>
          <i class="icon iconfont icon-selected"></i>
          <p>1</p>
          <span>购物车</span>
        </li>
        <li :class="{active: active(1)}">
          <div class="lang-line"></div>
          <i class="icon iconfont icon-selected"></i>
          <p>2</p>
          <span>确认订单</span>
        </li>
        <li :class="{active: active(2)}">
          <div class="lang-line"></div>
          <i class="icon iconfont icon-selected"></i>
          <p>3</p>
          <span>提交订单</span>
        </li>
        <li :class="{active: active(3)}">
          <div class="lang-line"></div>
          <i class="icon iconfont icon-selected"></i>
          <p>4</p>
          <span>支付成功</span>

        </li>
        <li class="">
          <div></div>
        </li>
      </ul>
    </div>
    <!-- 目前状态信息2 -->
</template>
<script>
export default {
  name:"Home-stitle",
  props:{
    current: Number
  },
  data (){
    return{}
  },
  methods:{
    active(num) {
      return this.current !== undefined && num <= this.current
    }
  },created(){
    
  }
}
</script>
<style scoped>
   .state{
  padding-top:170px;
  text-align: center;
  padding-bottom:120px;
}
.state ul li{
  display: inline-block;
  position: relative;
  margin-left:32px;
}

.state ul li i.icon-selected{
  color:rgb(231, 227, 227);
  font-size:30px;
  position: absolute;
  top:-15px;
  right:-31px;
}
.state ul li.active i.icon-selected{
  color:#fa9dac;
}
.state ul li div{
  width:71px;
  border:2px solid rgb(231, 227, 227);
}
.state ul li.active div{
  border:2px solid #fa9dac;
}
.state ul li div.lang-line{
  width:180px;
}
.state ul li span{
  position: absolute;
  color:rgb(143, 140, 140);
  display:inline-block;
  width:100px;
  top:25px;
  right:-70px;
}
.state ul li p{
background-color: rgb(231, 227, 227);
color:rgb(143, 140, 140);
display:inline-block;
position: absolute;
top:24px;
right:0px;
width:23px;
line-height:23px;
border-radius: 50%;
margin-right:15px;
}

.state ul li.active span{
  color:#fa9dac;
}
.state ul li.active p{
  
background-color: #fa9dac;
color:white;
}
/* 状态信息结束2 */
</style>