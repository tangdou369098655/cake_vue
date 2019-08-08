<template>
 <!-- 订单内容模块1 -->
      <div class="order-details">
        <div class="details-img">
          <img :src="imgurl+'images/index/'+data.cake_name+'.png'" alt="">
          <div>
            <p>{{data.cake_name}}</p>
            <p></p>
            <p>TANG CAKE[{{data.product_kinds_name}}]</p>
          </div>
        </div>
        <div class="details-size">
          <p>{{sizes[data.sizes]}}磅</p>
          <i>标配</i>
          <span>餐具套装1套</span>
        </div>
        <div class="details-price">
          <p>{{data.price}}</p>
        </div>
        <div class="details-count">
          <i class="icon iconfont icon-jianhao1" @click="changeCount(-1)"></i>
          <b></b>
          <input type="text" v-model="data.count">
          <b></b>
          <i class="icon iconfont icon-jiahao1" @click="changeCount(1)"></i>
        </div>
        <div class="details-discount">
          <p>{{data.others}}</p>
        </div>
        <div class="details-total">
          <p>￥ {{(data.price*data.count).toFixed(2)}}</p>
        </div>
        <div class="details-delete">
          <i class="icon iconfont icon-chahao1" @click="deleteItem"></i>
        </div>
      </div>
      <!-- 订单内容模块2 -->
</template>
<script>
export default {
  name:"Home-stitle",
  props:{
    data:{
    }
  },
  data (){
    return{
        sizes: ['1.2', '2.2', '3.2', '7.2'],
    }
  },
  methods:{
    changeCount(n){
      let count = Math.max(this.data.count + n, 1)
      this.axios.post('/cart/update',{c_id:this.data.c_id,count}).then(
        ()=>{this.data.count=count}
      )
    },
    deleteItem(){
      this.$emit('del')
    }

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