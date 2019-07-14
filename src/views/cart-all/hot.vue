<template>
			
  <!-- 页面主体内容开始1 -->
  <div class="wid">
    <!-- 热销新品推荐1 -->
    <div class="newon">
      <p>{{msg}}</p>
      <div class="newon-all">
      <div class="newon-list" v-for="(item,i) in products" :key="i">
        <div>
            <img :src="pics[i] && pics[i].img" alt="">
        </div>
        <div>
            <i>[{{kinds}}系列]{{item.index_title}}</i>
            <p>1.2磅</p>
            <p>￥{{item.index_price}}/盒</p>
            <span>加入购物车</span>
        </div>
      </div>
      </div>
    </div>
    <!-- 热销新品推荐2 -->
  </div>
  <!-- 页面主体内容开始1 -->
</template>
<script>
import axios from 'axios'
export default {
	name:"hot",
	props:{
    state:{default:10},
    msg:{default:"热销新品推荐"},
    kinds:{default:"伴手礼"}
	},
  data(){
    return{
      products:[],
      pics:[],
      sizes: ['1.2', '2.2', '3.2', '7.2'],
    }
  }, methods:{
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
  created(){
    this.getData()
  }
}
</script>
<style scoped>
  /* 热销新品推荐1 */
.newon{
  padding:40px 0;
  /* background-color: pink; */
  border-top:1px solid #ccc;
}
.newon-all>div{
  transition:all .5s linear;
  display:inline-block;
  margin-right:34px;
}
.newon-all>div:nth-child(4n){
  margin-right: 0;
}
.newon-list:hover{
  box-shadow:1px 2px 10px #ccc;
  transform:scale(1.05,1.05)
}

/* .newon-list>div>img:hover{
  transform:rotate3D(1,0,0,360deg);

} */
.newon p{
margin-bottom:50px;
color:#fa9dac;
font-weight:600;
font-size:16px;
}
.newon .newon-list{
width:270px;
overflow: hidden;
background-color: #fff;
}
.newon-list>div>img{
 width:100%;
 transition:all .7s ;
 cursor: pointer;
}
.newon-list>div:nth-child(2){
  position:relative;
  width: 100%;
  height:100px;
}
.newon-list>div:nth-child(2) i,.newon-list>div:nth-child(2) p{
  display:block;
  left:15px;
  top:5px;
  position:absolute;
}
.newon-list>div:nth-child(2) p{
  top:45px;
  left:15px;
}
.newon-list>div:nth-child(2)>p:nth-child(2){
  top:66px;
}
.newon-list>div:nth-child(2) span{
  padding:5px 15px;
  border-radius:8px;
  right:15px;
  top:50px;
  border:0.5px solid #ccc;
  display:block;
  position:absolute;
  cursor: pointer;
}
/* 热销新品推荐2 */
</style>