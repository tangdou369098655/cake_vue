<template>
  <!-- 页面主体内容开始1 -->
  <!-- 目前状态信息1 -->
  <div class="wid">
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
    <!-- 收货地址1 -->
    <div class="address">
      <p>收货地址</p>
      <!-- 地址块add1 -->
      <div class="add-item add-active">
        <h2>糖糖</h2>
        <p>18625578825</p>
        <p>北京 北京市 东城区 安定门街道 00001号</p>
          <span>修改</span>
      </div>
      <!-- 地址块add2 -->
      <!-- 地址块1 -->
      <div class="add-item cursor">
          <i class="icon iconfont icon-jiahao4"></i>
          <b>添加新地址</b>
      </div>
        <!-- 地址块2 -->
        <div class="clearfix"></div>
    </div>
    <!-- 收货地址2 -->
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
      <div class="order-hidden dn">
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
        <div class="order-hidden tableware-hidden dn">
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
    <!-- 送货时间1 -->
    <div class="other-detail">
      <p class="pink1">送货日期</p>
      <span>请选择一个送货日期</span>
      <div class="times">
        <p>送货时间选择</p>
        <span class="times-active">11:00-12:00</span>
        <span>12:00-13:00</span>
        <span>13:00-14:00</span>
        <span>14:00-15:00</span>
        <span>15:00-16:00</span>
        <span>16:00-17:00</span>
        <span>17:00-18:00</span>
        <span>18:00-19:00</span>
        <span>19:00-20:00</span>
      </div>
      <i>您选择的送货日期为：（ 2019-7-3 ）</i>
      <i>您选择的送货时间为：（ 10:00-11:00 ）</i>
      <input type="text" placeholder="在配送过程中，您有希望我们特别注意的地方，您可以在此留言备注，以便我们给您带去更好的服务...(最多110字)">
    </div>
    <!-- 送货时间2 -->
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
      <span>回购物车</span>
      <span>提交订单</span>
    </div>
    </div>
    <!-- 下单结算2 -->
			<!-- 从cart子组件引入1 -->
				<!-- 热销新品推荐1 -->
				<hot
				msg="优质精品推荐"
				state=13
				kinds="优选"
				></hot>  
				<!-- 热销新品推荐2 -->
				<!-- 热销新品推荐1 -->
				<hot
				msg="天然健康推荐"
				state=14
				kinds="健康"
				></hot>  
				<!-- 热销新品推荐2 -->
			<!-- 从cart子组件引入2 -->
  </div>
  <!-- 页面主体内容开始1 -->
</template>
<script>
import axios from 'axios'
//引入cart的子组件使用
import hot from './cart-all/hot'
// import '@/assets/css/detail.css'


export default{
  data(){
    return{}
  },
  methods:{

  },
  components:{
"hot":hot,
  }
}

</script>
<style scoped>
@import url('~@/assets/css/cart.css');
  /* 收货地址1 */
.address{
  padding:10px 0 50px 0;
}
.address>p{
  font-size:16px;
  padding-bottom: 20px;
  color:#fa9dac;
}
.add-item{
  height:180px;
  width: 270px;
  border:1px solid #ccc;
  padding:20px;
  /* display:inline-block; */
  box-sizing: border-box;
  margin-right:20px;
  float: left;
  position: relative;
}
.add-active{
  border:1px solid #fa9dac;
}
.add-item>p{
  font-size:14px;
  color:gray;
  line-height:22px;
}
.add-item>h2{
  font-size:16px;
  margin-bottom: 15px;
}
.add-item>div{
  padding-top:10px;
}
.add-item span{
  position: absolute;
  right: 24px;
  bottom: 10px;
  font-size: 14px;
  color:#fa9dac;
}
add-item-one{
  text-align: center;
}
.add-item i{
  display:block;
  text-align: center;
  color:#ccc;
  display: block;
  width: 30px;
  height: 30px;
  margin: 50px auto 5px;
  font-size: 30px;
  line-height: 30px;
  cursor: pointer;
}
.add-item b{
  display: block;
  text-align: center;
  color:gray;
}
/* 收货地址2 */
/* 送货时间1 */
.other-detail{
  padding:50px 0;
}
.other-detail p{
  margin-bottom: 30px;
}
.other-detail span{
width:160px;
line-height: 30px;
display:inline-block;
text-align: center;
font-size:12px;
border-radius:8px;
margin-bottom: 30px;
cursor: pointer;
}
.other-detail>span{
  background-color: #fa9dac;
  color:white;
  }
  .other-detail>i{
    display:inline-block;
    margin-right:20px;
    font-size:13px;
    color:#fa9dac;
  }
  .other-detail>input{
    display:block;
    margin:40px 0;
    border:1px solid #ccc;
    width:100%;
    height:60px;
    padding:10px 20px;
    border-radius: 10px;
  }
  .times{
    padding-right:500px;
  }
  .times>p{
    font-size:16px;
    padding-bottom: 10px;
    color:#fa9dac;
    
  }
.times>span{
  border:1px solid #ccc;
  margin-right:20px;
}
.times .times-active{
  background-color: #fa9dac;
  border:1px solid #fa9dac;
}
/* 送货时间2 */
</style>