<template>
 <!-- 订单内容模块1 -->
      <div class="order-details">
        <div class="details-img">
          <img :src="imgurl+'images/index/兔小萌.png'" alt="">
          <div>
            <p>极地牛乳</p>
            <p></p>
            <p>TANG CAKE[经典系列]</p>
          </div>
        </div>
        <div class="details-size">
          <p>1.2磅</p>
          <i>标配</i>
          <span>餐具套装1套</span>
        </div>
        <div class="details-price">
          <p>218.00</p>
        </div>
        <div class="details-count">
          <i class="icon iconfont icon-jianhao1"></i>
          <b></b>
          <input type="text" value=1>
          <b></b>
          <i class="icon iconfont icon-jiahao1"></i>
        </div>
        <div class="details-discount">
          <p>无优惠</p>
        </div>
        <div class="details-total">
          <p>￥ 218.00</p>
        </div>
        <div class="details-delete">
          <i class="icon iconfont icon-chahao1"></i>
        </div>
      </div>
      <!-- 订单内容模块2 -->
</template>
<script>
export default {
  name:"Home-stitle",
  props:{
    
  },
  data (){
    return{}
  },
  methods:{

  },created(){
    
  }
}
</script>
<style scoped>
/* 订单信息2 */
.order-details{
  padding:30px 20px;
}
.order-details>div{
  /* text-align: center; */
  position:relative;
  display:inline-block;
  font-size:14px;
}
/* .details-img{
  width:313px
} */
.details-img>img{
  width:80px;
  display:inline-block;
  margin-left:40px;
  vertical-align: top;
  /* top:10px; */
  /* position: absolute; */
}
.details-img>div{
  width:200px;
  display: inline-block;
}
.details-img p{
  height:16px;
}
.details-size{
  text-align: center;
  width:120px;
  margin-left:10px;
}
.details-size i{
  color:white;
  background-color: black;
  display: inline-block;
  width:35px;
  line-height:22px;
}
.details-price{
  margin-left: 50px;
  width: 56px;
}
.details-price p{
  font-size:14px;
  
}
.details-count{
  width:150px;
  text-align:center;
  margin-left:20px;
}
.details-count b{
  width:10px;
  display:inline-block;
}
.details-count input{
  width:25px;
  text-align: center;
}
.details-count i{
  cursor:pointer;
}
.details-discount,.details-total,.details-delete{
  width:120px;
  text-align: center;
  margin-left:13px;
}
.details-delete i{
  font-size:20px;
}
</style>