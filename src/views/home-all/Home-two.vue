<template>
  <div>
			<!-- 7网红爆款开始1 -->
			<!-- 7网红爆款内容区域1 -->
			<div class="index-five-list-r hotProduct">
				<!-- 第一个内容块1 -->
				<div v-for="(item,i) in products" :key="i" class="index-five-tab wow rotateInUpLeft" :data-wow-delay="`${0.2+i/10}s`">
					<router-link :to="`/detail?product_id=${pics[i]&&pics[i].pic_id}`">
						<img :src="pics[i]&&pics[i].img" class="w-100  img-b">
					</router-link>
					<div class="index-five-tab-name">
						<span>{{item.index_title}}</span>
					</div>  
					<div class="index-five-tab-price">
						<span>￥</span>
						<span>{{item.index_price}}</span>
					</div>
					<div class="index-five-tab-volume">
						<span>销量:</span>
						<span>5465454</span></div>
					<a href="javascript:;" class="index-five-tab-car">
						<img src="images/index/index-five-tab-car.png" class="w-100">
					</a>
					<!-- 购物车隐藏部分1 -->
					<div class="index-five-tab-tc">
						<div class="index-five-tab-tc1">
							<span>￥</span>
							<span>{{item.index_price}}</span>
						</div>
						<div class="index-five-tab-tc2 text-center">
							<div class="clearfix" v-for="item in sizes" :key="item">
								<a href="javascript:;">{{item}}</a>
								<!-- <img src="images/index/seven_7.png" alt=""> -->
							</div>
						</div>
						<div class="index-five-tab-tc3">
							<a href="#">加入购物车</a>
							<a href="#">立即购买</a>
						</div>
						<i class="index-five-tab-tc4 iconfont icon-chahao"></i>
					</div>
					<!-- 购物车隐藏部分2 -->
				</div>
				<!-- 第一个内容块2 -->
				<div class="clearfix "></div>
			</div>
			<!-- 7网红爆款内容区域2 -->
			<!-- 7网红爆款开始2 -->
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name:"Home-two",
  props:{
    state:{default:"10"},
  },
  data (){
    return{
			products:[],
			pics:[],
      sizes: ['1.2', '2.2', '3.2', '7.2'],
		}
  },
  methods:{
		getData(){
			axios.get(
				`http://localhost:3000/index`,
				{params:{status:this.state}}
			).then(
				({data})=>{
					
				console.log("daowole")
				console.log(data)
				console.log(data.product)
					this.products=data.product
				console.log(data.product)
					return Promise.all(
						this.products.map(
							item=>{
								return axios.get(
									`http://localhost:3000/pics?pid=${item.car_id}`
								).then(({data})=>data)
							}
						)
					)
				}
			).then(values=>{
				this.pics=values.map(_ => _.pics[0])
			}).then(()=>{
				console.log(1)
				// this.products=this.products[0]
				console.log(this.products)
			})
		}
  },created(){
    this.getData()
  }
}
</script>
<style scoped>
  
</style>