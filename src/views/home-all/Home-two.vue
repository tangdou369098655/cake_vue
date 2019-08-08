<template>
  <div>
			<!-- 7网红爆款开始1 -->
			<!-- 7网红爆款内容区域1 -->
			<div class="index-five-list-r hotProduct">
				<!-- 第一个内容块1 -->
				<div v-for="(item,i) in products" :key="i" class="index-five-tab wow rollIn" :data-wow-delay="`${0.2+i/5}s`">
					<router-link :to="`/detail?product_id=${pics[i]&&pics[i].pic_id}`">
						<img :src="imgurl+(pics[i]&&pics[i].img)" class="w-100  img-b">
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
					<a href="javascript:;" class="index-five-tab-car" @click="tabCarClick">
						<img :src="imgurl+'images/index/index-five-tab-car.png'" class="w-100">
					</a>
					<!-- 购物车隐藏部分1 -->
					<div class="index-five-tab-tc" ref="hiddenC" >
						<div class="index-five-tab-tc1">
							<span>￥</span>
							<span>{{(item.index_price * (item.psize || 1)).toFixed(2)}}</span>
						</div>
						<div class="index-five-tab-tc2 text-center">
							<div class="clearfix" v-for="(item2,i) in sizes" :key="item2">
								<a @click="changePrice(item,i,$event)" href="javascript:;">{{item2}}</a>
								<img v-once v-show="i === 0" :src="imgurl+'images/index/seven_7.png'" alt="">
							</div>
						</div>
						<div class="index-five-tab-tc3">
							<a  @click="addCart(item)">加入购物车</a>
							<a href="#">立即购买</a>
						</div>
						<i class="index-five-tab-tc4 iconfont icon-chahao" @click="closeCart($event,i)"></i>
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
import wow from 'wowjs'
import axios from 'axios'
export default {
  name:"Home-two",
  props:{
    state:{default:"10"},
  },
  data (){
    return{
			sizeIndex:0,
			products:[],
			pics:[],
			sizes: ['1.2', '2.2', '3.2', '7.2'],
			psizes:[1,1.5,2,2.5]
		}
  },
  methods:{
		//加入购物车事件
		addCart(item){
			let formdata={}
        formdata.p_id=item.car_id
        formdata.sizes=this.sizeIndex
        formdata.cake_name=item.index_title
        formdata.count=1
        formdata.price=item.index_price
        this.axios.post('/cart/adds',formdata).then((data)=>{console.log(data)})
		},
		// 购物车隐藏部分右上角有一个小叉号，点击关闭隐藏部分
		closeCart($event,i){
			this.$refs.hiddenC[i].style="display:none"
		},
		// 购物车点击事件,点击后出现隐藏框
		tabCarClick(){
			$(event.target).parent().next().show()
			// this.showCart=true;
		},
		// 点击尺寸增加选中小框对号同时改变价格
		changePrice(item,i,$event){
			$(event.target).siblings('img').show()
			$(event.target).parent().siblings('div').children("img").hide()
			this.$set(item,'psize',this.psizes[i]) //给此item增加属性绑定新数组元素
			this.sizeIndex=i;
		},
		getData(){
			this.axios.get(
				`/index`,
				{params:{status:this.state}}
			).then(
				({data})=>{
					this.products=data.product
					return Promise.all(
						this.products.map(
							item=>{
								return this.axios.get(
									`/pics?pid=${item.car_id}`
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
	},
	mounted(){
 new WOW().init()
	}
}
</script>
<style scoped>
  .hidden{
		display:none;
	}
</style>