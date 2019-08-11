<template>
			<!-- 5匠心原创内容1 -->
			<div class="index-five-list">
				<a href="javascript:;" class="index-five-list-l wow rollIn animated" data-wow-delay="0.3s" style="display:inline-block">
					<img :src="HomeOneImg" >
				</a>
				<div class="index-five-list-r">
					<!-- 第一个内容块1 -->
					<div v-for="(item, i) in products" :key="item.id" class="index-five-tab wow flipInY animated" :data-wow-delay="`${0.2 + i/10}s`">
						<a v-if="pics[i]" :target="createTarget(i)" :href="`/detail?product_id=${pics[i].prcid}`">
							<img :src="imgurl+pics[i].img" class="w-100  img-b">
						</a>
						<div class="index-five-tab-name">
							<span>{{item.index_title}}</span>
						</div>
						<div class="index-five-tab-price">
							<span>￥</span>
							<span>{{item.index_price}}</span>
						</div>
						<div class="index-five-tab-volume">
							<span>销量:</span>
							<span>5465454</span>
            </div>
						<a href="javascript:;" class="index-five-tab-car" @click="tabCarClick">
							<img :src="imgurl+'images/index/index-five-tab-car.png'" class="w-100">
						</a>
						<!-- 购物车隐藏部分1 -->
						<div class="index-five-tab-tc">
							<div class="index-five-tab-tc1">
								<span>￥</span>
								<span>{{(item.index_price * (item.psize || 1)).toFixed(2)}}</span>
							</div>
							<div class="index-five-tab-tc2 text-center">
								<div class="clearfix" v-for="(item2, a) in sizes" :key="a">
									<img v-once v-show="a === 0" :src="imgurl+'images/index/seven_7.png'" alt="">
									<a @click="changePrice(item, a, $event)" href="javascript:;">{{item2}}磅</a>
								</div>
							</div>
							<div class="index-five-tab-tc3">
								<a  @click="addCart(item)" >加入购物车</a>
								<a href="#">立即购买</a>
							</div>
							<i class="index-five-tab-tc4 iconfont icon-chahao" @click="tabTc4Click"></i>
						</div>
						<!-- 购物车隐藏部分2 -->
					</div>
					<!-- 第一个内容块2 -->
					<div class="clearfix "></div>
				</div>
				<div class="clearfix"></div>
			</div>
			<!-- 5匠心原创内容2 -->
</template>
<script>
export default {
	name:"Home-one",
	props:{
		state:{default:"2"},
		HomeOneImg:"",
		HomeOneImgurl:""
	},
  data(){
    return{
      products:[],
      pics:[],
	  sizes: ['1.2', '2.2', '3.2', '7.2'],
		psizes: [1, 1.5, 2, 3.5],
		price:0,
		size:'',
		sizeIndex:0
    }
	},
	methods:{
		//加入购物车事件
		addCart(item){
			this.price=(item.index_price * (item.psize || 1)).toFixed(2);
			let formdata={}
        formdata.p_id=item.car_id
        formdata.sizes=this.sizeIndex
        formdata.cake_name=item.index_title
        formdata.count=1
        formdata.price=item.index_price
        this.axios.post('/cart/adds',formdata).then((data)=> {
			this.$Message('添加成功')
		}).catch(err => alert(err.message))
		},
		// 购物车点击事件,点击后出现隐藏框
		tabCarClick(event) {
			$(event.target).parent().next().show()
		},
		tabTc4Click(event) {
			$(event.target).parent().hide()
		},
		// 点击尺寸增加选中小框对号同时改变价格
		changePrice(item, i, event) {
			$(event.target).siblings('img').show()
			$(event.target).parent().siblings('div').children("img").hide()
			this.$set(item, 'psize', this.psizes[i]) //给此item增加属性绑定新数组元素
			this.size=this.sizes[i]
			this.sizeIndex=i;
		},
		createTarget() {
			return Math.random()
		},
    getData() {
      this.axios.get(
        `/index`,{params:{status:this.state}}
      ).then(
        ({data})=>{
          this.products=data.product
          return Promise.all(
            data.product.map(item=>{
              return this.axios.get(
                `/pics?pid=${item.car_id}`
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
  
</style>