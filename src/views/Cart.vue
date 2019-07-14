<template>
			
  <!-- 页面主体内容开始1 -->
  <div class="wid">
    <!-- 目前状态信息1 -->
    <div class="state">
      <ul>
        <li class="active">
          <div></div>
          <i class="icon iconfont icon-selected"></i>
          <p>1</p>
          <span>购物车</span>
        </li>
        <li class="">
          <div class="lang-line"></div>
          <i class="icon iconfont icon-selected"></i>
          <p>2</p>
          <span>确认订单</span>
        </li>
        <li class="">
          <div class="lang-line"></div>
          <i class="icon iconfont icon-selected"></i>
          <p>3</p>
          <span>提交订单</span>
        </li>
        <li class="">
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
    <!-- 订单信息1 -->
    <div class="order">
      <p>订单信息</p>
      <!-- 订单标题模块1 -->
      <div class="order-title">
        <div class="one">商品</div>
        <div class="two">属性</div>
        <div class="three">单价</div>
        <div class="four">数量</div>
        <div class="five">优惠方式</div>
        <div class="six">金额</div>
        <div class="seven">操作</div>
      </div>
      <!-- 订单标题模块2 -->
      <!-- 订单内容模块1 -->
      <div class="order-details">
        <div class="details-img">
          <img src="images/index/兔小萌.png" alt="">
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
      <!-- 添加蜡烛1 -->
      <div class="order-others">
        <div>
          <img src="images/index/icon_1.png" alt="">
          <span>添加蜡烛</span>
        </div>
        <div>
          <img src="images/index/icon_2.png" alt="">
          <span>添加餐具</span>
        </div>
        <div>
          <span>共计</span>
          <span>1</span>
          <span>件商品</span>
          <img src="images/index/icon_cart_dustbin.png" alt="">
        </div>
      </div>
      <!-- 添加蜡烛2 -->
      <!-- 添加蜡烛隐藏部分1 -->
      <div class="order-hidden ">
        <!-- 餐具隐藏小节1 -->
        <div>
          <span>每款经典系列蛋糕免费赠送1套标准蜡烛</span>
          <img src="images/index/lzuncheck.png" alt="">
        </div>
        <div class="add-candle">
          <div>
            <img src="images/index/candle1.jpg" alt="">
            <div class="add-one">
              <p>TANG cake 标准蜡烛</p>
              <p></p>
              <p>￥5.0</p>
              <div class="details-count">
                <i class="icon iconfont icon-jianhao1"></i>
                <b></b>
                <input type="text" value=1>
                <b></b>
                <i class="icon iconfont icon-jiahao1"></i>
              </div>
            </div>
          </div>
          <div>
            <img src="images/index/candle2.jpg" alt="">
            <div class="add-one">
              <p>TANG Happy Birthday 字母蜡烛</p>
              <p></p>
              <p>￥10.0</p>
              <div class="details-count">
                <i class="icon iconfont icon-jianhao1"></i>
                <b></b>
                <input type="text" value=1>
                <b></b>
                <i class="icon iconfont icon-jiahao1"></i>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div>确定</div>
        <i class="icon iconfont icon-shangjiantou"></i>
        <!-- 餐具隐藏小节2 -->
      </div>
      <!-- 添加蜡烛隐藏部分2 -->
      <!-- 添加餐具隐藏部分1 -->
      <div class="order-hidden tableware-hidden ">
        <!-- 餐具隐藏小节1 -->
        <div>
          <span class="text-gray ">注：共赠送1套餐具；伴手礼星座系列蛋糕内含不锈钢刀叉；如需额外购买 3.0元/套</span>
        </div>
        <div>
          <span>TANG cake &emsp;餐具   &emsp;（每套含5人份餐盘、叉子、1把切刀） &emsp; &emsp; &emsp;</span>
          <span>￥5.0</span>
          <div class="details-count">
            <i class="icon iconfont icon-jianhao1"></i>
            <b></b>
            <input type="text" value=1>
            <b></b>
            <i class="icon iconfont icon-jiahao1"></i>
          </div>
        </div>
        <div>确定</div>
        <i class="icon iconfont icon-shangjiantou"></i>
        <!-- 餐具隐藏小节2 -->
      </div>
      <!-- 添加餐具隐藏部分1 -->
    </div>
    <!-- 订单信息2 -->
    <!-- 总价信息1 -->
    <div class="total-price clearfix">
      <div>
        <div>商品总计:&emsp;&emsp;</div>
        <div>￥ 218.00</div>
      </div>
      <div>
        <div>运&emsp;&emsp;费:&emsp;&emsp;</div>
        <div>￥ 218.00</div>
      </div>
      <div>
        <div>优&emsp;&emsp;惠:&emsp;&emsp;</div>
        <div>￥ 218.00</div>
      </div>
      <div>
        <div>应付总额:&emsp;&ensp;</div>
        <div>￥ 218.00</div>
      </div>
    </div>
    <!-- 总价信息2 -->
    <!-- 下单结算1 -->
    <div class="clearfix">
    <div class="settlement ">
      <span>继续购物</span>
      <span>下单结算</span>
    </div>
  </div>
    <!-- 下单结算2 -->
    <!-- 热销新品推荐1 -->
    <hot
    msg="伴手礼精品推荐"
    state=11
    kinds="伴手礼"
    ></hot>  
    <!-- 热销新品推荐2 -->
    <!-- 热销新品推荐1 -->
    <hot
    msg="尊享美味推荐"
    state=12
    kinds="尊享"
    ></hot>  
    <!-- 热销新品推荐2 -->
  </div>
  <!-- 页面主体内容开始1 -->
</template>
<script>
import axios from 'axios'
import hot from './cart-all/hot'
export default {
	name:"Home-one",
	props:{
		state:{default:"2"},
	},
  data(){
    return{
      products:[],
      pics:[],
      sizes: ['1.2', '2.2', '3.2', '7.2'],
    }
  },methods:{
    getData() {
      axios.get(
        `http://localhost:3000/index`,{params:{status:this.state}}
      ).then(
        ({data})=>{
          this.products=data.product
          return Promise.all(
            data.product.map(item=>{
              return axios.get(
                `http://localhost:3000/pics?pid=${item.car_id}`
              ).then(({data})=>data)
            })
          )
        }
      ).then(values=>{
        this.pics=values.map(_ => _.pics[0])
        console.log(this.pics)
      })
    }
  },
  components:{
    "hot":hot
  },
  created(){
    this.getData()
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
  margin-left:28px;
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
/* 订单信息1 */
.order>p{
  font-size:16px;
  margin-bottom: 20px;
  color:#fa9dac;
}
.order-title{
  background-color: #f9f9f9;
}
.order-title div{
display:inline-block;
font-size:14px;
line-height:30px;
text-align: left;
}
.order-title div.one{
  width:400px;
  text-align: center;
}
.order-title div.two{
  width:130px;
}
.order-title div.three{
  width:130px;
}
.order-title div.four{
  width:130px;
}
.order-title div.five{
  width:150px;
}
.order-title div.six{
  width:130px;
}

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
.order-others{
  background-color: #f9f9f9;
  padding:20px 0;
}
.order-others>div{
  width:165px;
  text-align:center;
  display:inline-block;
  cursor: pointer;
}
.order-others>div>img{
  vertical-align: middle;
  display:inline-block;
  margin-right:15px;
}
.order-others>div:nth-child(3){
  float:right;
  width:285px;
}
.order-hidden{
height:320px;
/* box-sizing: border-box; */
margin-top:30px;
background-color: #f9f9f9;
padding:20px;
}
.order-hidden>div:nth-child(1){
  line-height: 30px;
  font-size:14px;
  padding-bottom: 50px;
}
.order-hidden>div>img{
  vertical-align: middle;
  margin-left:50px;
}
.add-candle>div{
width:30%;
display:inline-block;
}
.add-one{
  display:inline-block;
  text-align: left;
}
.add-one>p{
  height:18px;
  font-size:14px;
}
.add-candle .details-count {
  margin-top:10px;
  text-align: left;
  margin-left: 0px;
}
.add-candle .details-count input ,.tableware-hidden .details-count input{
  background-color: #f9f9f9;
}
.order-hidden{
  position: relative;
}
.order-hidden>i{
  position: absolute;
  left:50px;
  top:-25px;
  color:#f9f9f9;
  font-size:50px;
}
.order-hidden>div:nth-child(3){
  width:90px;
  background-color: #fa9dac;
  color:white;
  text-align: center;
  line-height:30px;
  border-radius: 5px;
  margin-top:70px;
  margin-right:50px;
  float:right;
}
.tableware-hidden{
  height:200px
}
.tableware-hidden .details-count{
  display: inline-block;
}
.total-price{
  background-color: #f9f9f9;
  margin-top:20px;
  padding:20px ;
}
.total-price>div{
  /* display:block; */
  float:right;
  clear:both;
  color:gray;
}
.total-price>div>div{
  display: inline-block;
  margin:5px;
}
.total-price>div:nth-child(4){
  color:#fa9dac;
  font-size:20px;
  font-weight: 600;
}
.total-price>div>div:nth-child(2){
  width:120px;
}
/* 下单结算1 */
.settlement{
  float:right;
  margin:40px auto;
}
.settlement span{
display:inline-block;
padding:6px 40px;
font-size:20px;
border-radius: 10px;
cursor: pointer;
}
.settlement>span:nth-child(1){
border:0.5px solid #ccc;
margin-right:40px;
}
.settlement>span:nth-child(2){
  background-color: #fa9dac;
  color:white;
}
/* 下单结算2 */
</style>