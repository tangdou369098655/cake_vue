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
        <cart-details v-for="item in data" :key="item.c_id"
        :data="item" @del="delItem(item)"
        ></cart-details>
        <!-- 订单内容模块2 -->
      </div>
      <!-- 订单信息2 -->
      <!-- 总价信息1 -->
      <div class="total-price clearfix">
        <div>
          <div>商品总计:&emsp;&emsp;</div>
          <div>{{countTotal}}件</div>
        </div>
        <div>
          <div>运&emsp;&emsp;费:&emsp;&emsp;</div>
          <div>￥ 0.00</div>
        </div>
        <div>
          <div>优&emsp;&emsp;惠:&emsp;&emsp;</div>
          <div>无</div>
        </div>
        <div>
          <div>应付总额:&emsp;&ensp;</div>
          <div>￥ {{total}}</div>
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
    <!-- 未登录状态显示内容1 -->
    <div v-else class="noproduct">
      <nothing msg="购物车内暂时没有商品，登录后将显示您之前加入的商品">
      </nothing>
      <div style="width:100%;text-align:center;margin-bottom:20px">
        <a :href="`/login?redirect=${$route.path}`" style="display:inline-block; ">点击登录</a>
      </div>
    </div>
    <!-- 未登录状态显示内容2 -->
    <!-- 热销新品推荐1 -->
    <hot msg="伴手礼精品推荐" state=11 kinds="伴手礼"></hot>
    <!-- 热销新品推荐2 -->
    <!-- 热销新品推荐1 -->
    <hot msg="尊享美味推荐" state=12 kinds="尊享"></hot>
    <!-- 热销新品推荐2 -->
    <!-- 页面底部价格解释1 -->
    <pro-bottom></pro-bottom>
    <!-- 页面底部价格解释2 -->
  </div>
  <!-- 页面主体内容开始1 -->
</template>
<script>
  import axios from 'axios'
  import Hot from './cart-all/hot'
  import CartState from './cart-all/Cart-state'
  import CartDetails from './cart-all/Cart-details'
  import ProBottom from './protal-all/Pro-bottom'
  import Nothing from './pub-all/Nothing'
  export default {
    name: "cart",
    props: {
      state: {
        default: "2"
      },
    },
    data() {
      return {
        products: [],
        pics: [],
        data:[]
      }
    },
    computed: {
      total() {
        return this.data.reduce((total, item) => total + item.price * item.count, 0).toFixed(2)
      },
      countTotal(){
        return this.data.reduce((total, item) => total + item.count, 0)
      }
    },
    methods: {
      getData() {
        this.axios('/cart/mycart').then(({
          data
        }) => {
          this.data=data.data
        })
      },
      delItem(item) {
        this.axios.post('/cart/del',{cids: [item.c_id]}).then(({data}) => {
          this.data.splice(this.data.indexOf(item), 1)
        })
      }
    },
    components: {
      Hot,
      CartState,
      CartDetails,
      ProBottom,
      Nothing
    },
    created() {
      this.getData()
    }
  }
</script>
<style scoped>
  /* 订单信息1 */
  .order>p {
    font-size: 16px;
    margin-bottom: 20px;
    color: #fa9dac;
  }

  .order-title {
    background-color: #f9f9f9;
  }

  .order-title div {
    display: inline-block;
    font-size: 14px;
    line-height: 30px;
    text-align: left;
  }

  .order-title div.one {
    width: 400px;
    text-align: center;
  }

  .order-title div.two {
    width: 130px;
  }

  .order-title div.three {
    width: 130px;
  }

  .order-title div.four {
    width: 130px;
  }

  .order-title div.five {
    width: 150px;
  }

  .order-title div.six {
    width: 130px;
  }


  .order-others {
    background-color: #f9f9f9;
    padding: 20px 0;
  }

  .order-others>div {
    width: 165px;
    text-align: center;
    display: inline-block;
    cursor: pointer;
  }

  .order-others>div>img {
    vertical-align: middle;
    display: inline-block;
    margin-right: 15px;
  }

  .order-others>div:nth-child(3) {
    float: right;
    width: 285px;
  }

  .order-hidden {
    height: 320px;
    /* box-sizing: border-box; */
    margin-top: 30px;
    background-color: #f9f9f9;
    padding: 20px;
  }

  .order-hidden>div:nth-child(1) {
    line-height: 30px;
    font-size: 14px;
    padding-bottom: 50px;
  }

  .order-hidden>div>img {
    vertical-align: middle;
    margin-left: 50px;
  }

  .add-candle>div {
    width: 30%;
    display: inline-block;
  }

  .add-one {
    display: inline-block;
    text-align: left;
  }

  .add-one>p {
    height: 18px;
    font-size: 14px;
  }

  .add-candle .details-count {
    margin-top: 10px;
    text-align: left;
    margin-left: 0px;
  }

  .add-candle .details-count input,
  .tableware-hidden .details-count input {
    background-color: #f9f9f9;
  }

  .order-hidden {
    position: relative;
  }

  .order-hidden>i {
    position: absolute;
    left: 50px;
    top: -25px;
    color: #f9f9f9;
    font-size: 50px;
  }

  .order-hidden>div:nth-child(3) {
    width: 90px;
    background-color: #fa9dac;
    color: white;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    margin-top: 70px;
    margin-right: 50px;
    float: right;
  }

  .tableware-hidden {
    height: 200px
  }

  .tableware-hidden .details-count {
    display: inline-block;
  }

  .total-price {
    background-color: #f9f9f9;
    margin-top: 20px;
    padding: 20px;
  }

  .total-price>div {
    /* display:block; */
    float: right;
    clear: both;
    color: gray;
  }

  .total-price>div>div {
    display: inline-block;
    margin: 5px;
  }

  .total-price>div:nth-child(4) {
    color: #fa9dac;
    font-size: 20px;
    font-weight: 600;
  }

  .total-price>div>div:nth-child(2) {
    width: 120px;
  }

  /* 下单结算1 */
  .settlement {
    float: right;
    margin: 40px auto;
  }

  .settlement span {
    display: inline-block;
    padding: 6px 40px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
  }

  .settlement>span:nth-child(1) {
    border: 0.5px solid #ccc;
    margin-right: 40px;
  }

  .settlement>span:nth-child(2) {
    background-color: #fa9dac;
    color: white;
  }

  /* 下单结算2 */
  /* 没有登录时候显示1 */
  .noproduct {
    padding-top: 100px;
  }

  /* 没有登录时候显示2 */
</style>