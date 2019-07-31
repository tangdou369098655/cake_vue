<template>
			
  <!-- 页面主体内容开始1 -->
  <div class="wid">
    <div v-if="$store.state.userinfo.uid">
        <!-- 目前状态信息1 -->
        <cart-state :current="0"></cart-state>
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
        <cart-details></cart-details>
          <!-- 订单内容模块2 -->
          <!-- 添加蜡烛1 -->
          <div class="order-others">
            <div>
              <img :src="imgurl+'images/index/icon_1.png'" alt="">
              <span>添加蜡烛</span>
            </div>
            <div>
              <img :src="imgurl+'images/index/icon_2.png'" alt="">
              <span>添加餐具</span>
            </div>
            <div>
              <span>共计</span>
              <span>1</span>
              <span>件商品</span>
              <img :src="imgurl+'images/index/icon_cart_dustbin.png'" alt="">
            </div>
          </div>
          <!-- 添加蜡烛2 -->
          <!-- 添加蜡烛隐藏部分1 -->
          <div class="order-hidden ">
            <!-- 餐具隐藏小节1 -->
            <div>
              <span>每款经典系列蛋糕免费赠送1套标准蜡烛</span>
              <img :src="imgurl+'images/index/lzuncheck.png'" alt="">
            </div>
            <div class="add-candle">
              <div>
                <img :src="imgurl+'images/index/candle1.jpg'" alt="">
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
                <img :src="imgurl+'images/index/candle2.jpg'" alt="">
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
    </div>
    <div v-else style="padding-top:200px">
      购物车内暂时没有商品，登录后将显示您之前加入的商品
      <a :href="`/login?redirect=${$route.path}`">登录</a>
    </div>
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
    <!-- 页面底部价格解释1 -->
    <pro-bottom></pro-bottom>
    <!-- 页面底部价格解释2 -->
  </div>
  <!-- 页面主体内容开始1 -->
</template>
<script>
import axios from 'axios'
import hot from './cart-all/hot'
import cartState from './cart-all/Cart-state'
import cartDetails from './cart-all/Cart-details'
import proBottom from './protal-all/Pro-bottom'
export default {
	name:"cart",
	props:{
		state:{default:"2"},
	},
  data(){
    return{
      products:[],
      pics:[],
      sizes: ['1.2', '2.2', '3.2', '7.2'],
    }
  },
  methods:{
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
    "hot":hot,
    "cart-state":cartState,
    "cart-details":cartDetails,
    "pro-bottom":proBottom
  },
  created(){
    this.getData()
    console.log(this.$route)
  }
}
</script>
<style scoped>
 
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