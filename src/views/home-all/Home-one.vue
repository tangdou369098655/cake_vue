<template>
			<!-- 5匠心原创内容1 -->
			<div class="index-five-list">
				<a href="#" class="index-five-list-l wow rollIn animated" data-wow-delay="0.3s">
					<img src="images/index/index-five-1.png" >
				</a>
				<div class="index-five-list-r">
					<!-- 第一个内容块1 -->
					<div v-for="(item, i) in products" :key="item.id" class="index-five-tab wow flipInY animated" :data-wow-delay="`${0.2 + i/10}s`">
						<a target="__blank" :href="`/#/detail?product_id=${pics[i].prcid}`">
							<img :src="pics[i] && pics[i].img" class="w-100  img-b">
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
							<img src="images/index/index-five-tab-car.png" class="w-100">
						</a>
						<!-- 购物车隐藏部分1 -->
						<div class="index-five-tab-tc">
							<div class="index-five-tab-tc1">
								<span>￥</span>
								<span>{{item.index_price}}</span>
							</div>
							<div class="index-five-tab-tc2 text-center">
								<div class="clearfix" v-for="(item, i) in sizes" :key="item">
									<img v-once v-show="i === 0" src="images/index/seven_7.png" alt="">
									<a @click="changePrice" href="javascript:;">{{item}}磅</a>
								</div>
							</div>
							<div class="index-five-tab-tc3">
								<a href="#">加入购物车</a>
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
	},
  data(){
    return{
      products:[],
      pics:[],
	  sizes: ['1.2', '2.2', '3.2', '7.2']
    }
	},
	methods:{
		tabCarClick(event) {
			$(event.target).parent().next().show()
		},
		tabTc4Click(event) {
			$(event.target).parent().hide()
		},
		changePrice(event) {
			$(event.target).siblings('img').show()
			$(event.target).parent().siblings('div').children("img").hide()
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