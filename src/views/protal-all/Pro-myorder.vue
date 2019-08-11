<template>
  <!-- 我的订单模块1 -->
  <div class="personal-right ">
    <div class="myorder">
      <ul class="myorder-top clearfix">
        <li class="top-one">我的订单</li>
        <li v-for="item in tabs" :key="item.value" 
          :class="{'top-active': item.value === state}"
          @click="getData(item.value)">{{item.label}}</li>
      </ul>
      <ul class="myorder-title clearfix bgcy">
        <li>商品信息</li>
        <li>订单金额</li>
        <li>收货信息</li>
        <li>订单状态</li>
        <li>操作</li>
      </ul>
    <nothing v-show="noOrder" msg="没有符合条件的订单哦~~~~"></nothing>
      <!-- 具体订单信息需循环1 -->
      <div class="myorder-item-list" v-for="(item , i ) in mydata.order" :key="i">
        <ul class="myorder-item-title clearfix  bgcy">
          <li>下单时间：{{item.create_time}}</li>
          <li>订单号：{{item.nub}}</li>
        </ul>
        <ul class="myorder-title clearfix flex-item">
          <li style="display:inline-block;text-align:center;">
            <div  v-for="(item2,n) in mydata.detail" :key="n" style="height:100px;display:flex;justify-content:center; align-items:center" >
            <img :src="imgurl+'images/index/'+item2.cake_name+'.png'" width="80px" >
            <span style="display:inline-block;width:100px">{{item2.cake_name}}/尺寸：{{sizes[item2.sizes]}}寸/蜡烛1份</span>
            <i style="display:inline-block;margin-left:20px">{{item2.count}}&emsp;x&emsp;{{item2.price}}</i>
            </div>
          </li>
          <li>{{item.total}}</li>
          <li>
            {{item.ordersname}}
            {{item.telephone}}
            <br>
            {{item.address}}
          </li>
          <li>{{mystatus[item.status]}}</li>
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
  
import Nothing from '../pub-all/Nothing'
  export default {
    name: "Pro-myorder",
    props: {

    },
  components:{
    "nothing":Nothing
  },
    data() {
      return {
        noOrder:false,
        mydata:{
          detail:[],
          order:[]
        },
        // stateCode:0,
      sizes: ['1.2', '2.2', '3.2', '7.2'],
      mystatus:['未付款','未发货','未收货','已签收','未评价'],
      tabs: [
        { value: 1, label: '全部订单' },
        { value: 2, label: '未收货' },
        { value: 3, label: '已收货' },
        { value: 4, label: '未评价' }
      ]
        
      }
    },
    computed: {
      state() {
        return +(this.$route.params.state || 1)
      }
    },
    methods: {
      getData(state) {
        this.$router.replace({
          name: this.$route.name,
          params: { state }
        });
        +state === 1 ? this.getDataAll() : this.getData1(state)
      },
      getDataAll(){
        this.axios('/portal/orderall').then(({data})=>{
          if(data=="0"){this.noOrder=true}else{
            this.noOrder=false
          this.mydata.detail=data.data.detail
          this.mydata.order=Array.isArray(data.data.order) ? data.data.order : [data.data.order]
          console.log(this.mydata.detail)
          console.log(this.mydata.order)}
        })
      },
      getData1(n){
        this.axios('/portal/order?status='+n).then(({data})=>{
          this.mydata.detail=[]
          this.mydata.order=[]
          if(data=="0"){this.noOrder=true}else{
            this.noOrder=false
          this.mydata.detail=this.mydata.detail.concat(data.data.detail)
          this.mydata.order=this.mydata.order.concat(data.data.order)
          console.log(this.mydata.detail)
          console.log(this.mydata.order)}
        })
      }
    },
    mounted(){
      this.getData(this.state)
    }
  }
</script>
<style scoped>
.no-order{
  line-height:30px;
  padding-left:50px;
}
</style>

