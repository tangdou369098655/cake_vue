<template>
  <!-- 页面主体开始1 -->
  <div class="pro-bgc"> 
  <div class="wid">
    <!-- 面包屑导航1 -->
    <div class="bar">
      <span id="kinds">全部商品</span>
      <i class=" iconfont icon-dayuhao"></i>
      <span id="nav_name">{{search}}</span>
    </div>
    <!-- 面包屑导航2 -->
    <!-- 主体内容开始1 -->
    <div class="pro-all clearfix">
      <!-- 四个一组第一组1 -->
      <!-- 产品1  -->
      <div v-for="(item,i) in products" :key="item.id" class="pro-item" >
        <!-- 图片部分1 -->
        <div class="bg">
        <img :src="pics[i] && pics[i].img" alt="" class="pro-item-img">
        <!-- <div class="bg-black"></div> -->
        <span class="sweet">SWEET CAKE</span>
        <b></b>
        <i>{{item.cake_name}}</i>
        <!-- 购物车隐藏部分1 -->
        <div class="index-five-tab-tc">
          <div class="index-five-tab-tc1 pink1">
            <span>￥</span>
            <span>{{item.price}}</span>
          </div>
          <div class="index-five-tab-tc2 text-center">
            <div class="clearfix pro-get">
              <a href="javascript:;">1.2磅</a>
              <img src="images/index/seven_7.png" alt="" >
            </div>
            <div class="clearfix">
              <a href="javascript:;">2.2磅</a>
            </div>
            <div class="clearfix">
              <a href="javascript:;">3.2磅</a>
            </div>
            <div class="clearfix">
              <a href="javascript:;">7.2磅</a>
            </div>
            </div>
              <div class="index-five-tab-tc3 text-center pro-btn">
            <a href="#" id="list-add">加入购物车</a>
            <a href="#" id="list-buy">立即购买</a>
          </div>
          <!-- <i class="index-five-tab-tc4 iconfont icon-chahao"></i> -->
          </div>
        <!-- 购物车隐藏部分2 -->
         </div>
        <!-- 图片部分2 -->
      </div>
      <!-- 产品2  -->
      <!-- 产品1  -->
    
    </div>
    <!-- 页面主体开始2 -->
  </div>
  <!-- <img src="images/index/bgc02.jpg" alt="" > -->
  <div class="pro-bgc-img">
				<video autoplay loop src="images/video/1080P童年水果覆盆子树莓.mp4"  ></video >
			</div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:"List",
  props:{
    search:{default:"蛋糕"},
  },
  data (){
    return{
      products:[],
      pics:[],
      sizes: ['1.2', '2.2', '3.2', '7.2'],
    }
  },
  methods:{
       getData() {
      axios.get(
        `http://localhost:3000/find`,{params:{search_product:this.search}}
      ).then(
        ({data})=>{
          this.products=data.list
          return Promise.all(
            data.list.map(item=>{
              return axios.get(
                `http://localhost:3000/pics?pid=${item.product_id}`
              ).then(({data})=>data)
            })
          )
        }
      ).then(values=>{
        this.pics=values.map(_ => _.pics[0])
        console.log(this.pics)
        console.log(this.products)
      })
    }
  },created(){
    this.getData()
  }
}
</script>
<style scoped>
  .pro-all{
  margin-top:30px;
}
.bar{
  z-index: 999;
}
.pro-bgc-img{
  position:fixed;
  z-index: 1;
  opacity: 0.3;
  top:0;
}
.wid{
  z-index: 999 !important;
  position: relative;
}
.pro-bgc{
  z-index: 0;
  position: relative;
}
/* 产品1 */
.pro-item{
  margin-right: 40px;
  margin-bottom:25px;
}
.pro-all .pro-item:nth-child(3n){
  margin-right:0;
}
.pro-item{
  display: inline-block;
  background-color: #fff;
  padding:10px;
}
.pro-item,.bg-black,.bg{
  position:relative;
  width: 350px;
  height: 350px;
}

.bg .sweet,.bg i{
  position:absolute;
  top:15px;
  left:0;
  transition: all 0.6s linear;
  font-size:16px;
}
.pro-item{
  overflow: hidden;
  margin-top:10px;
}
.pro-item:hover{
  box-shadow:1px 1px 15px #9b9899;
}
.pro-item-img{
  width: 350px;
  height: 240px;
}
.bg i{
  left:30px;
  top:40px;
  color:#fa9dac;
}
.bg-black{
  position:absolute;
}
.bg:hover > .bg-black{
  background-color: rgba(0,0,0,0.2);
  
}
.bg:hover > .sweet{
left:20px;
font-size:20px;
color:#fa9dac;
}
.bg:hover > i{
  left:120px;
  top:60px;
  color:black;
  font-size:20px;
  }
  .bg b{
    display: inline-block;
    /* height:1px; */
    width:220px;
    position:absolute;
    top:46px;
    right:-100px;
    border:0.5px solid rgb(8, 8, 8);
    transition:all 0.8s linear;
    opacity: 0;
  }
  .bg:hover b{
    right:0px;
    opacity: 1;
  }
  .bg img{
    top:50px;
    position:absolute;
    transition:all 0.5s linear;
  }
  .bg:hover img{
    transform:scale(1.2)
  } 
  /* 隐藏部分设置1 */
  .bg .index-five-tab-tc {
    position: absolute;
    bottom: 0;
    width: 100%;
    height:130px;
    left: 0;
    bottom:-135px;
    background: rgba(255, 255, 255, 0.8);
    display: block;
    opacity: 1;
    transition: all .4s linear;
}
.bg:hover .index-five-tab-tc{
  bottom: 0;
}
.index-five-tab-tc1>span{
  font-size:22px;
}
#list-add,#list-buy{
  width:100px;
  
}
#list-add:hover,#list-buy:hover{
  color:black;
}
.index-five-tab-tc2 .pro-btn{
margin:0px auto;
}
.pro-get img{
  position:absolute;
  left:0;
  top:0;
}
/* 隐藏部分设置1 */
/* 产品2 */
</style>