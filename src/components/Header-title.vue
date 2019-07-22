<template>
			<li class="nav-item " >
						<a href="#">{{msg}}</a>
							<!-- 隐藏部分1 -->
						<div class="navid">
							<ul class="navid-all">
								<li class="navid-list" v-for="(item,i) in products" :key="i">
                  <router-link :to="`/detail?product_id=${pics[i]&&pics[i].pic_id}`" target="_blank">
									<img :src="pics[i] && pics[i].img">
                  </router-link>
									<p>{{item.index_title}}</p>
									<p>￥{{item.index_price}}</p>
								</li>
							</ul>
						</div>
						<!-- 隐藏部分2 -->
					</li>	
  
</template>
<script>
import axios from 'axios'
export default {
	name:"hot",
	props:{
    state:{default:10},
    msg:{default:"下午茶"}
	},
  data(){
    return{
      products:[],
      pics:[]
    }
  }, methods:{
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
 .navid-all{
display:flex;
justify-content: space-between;
}
.navid-list img{
  display:inline-block;
  width:200px;
}
.navid-list a{
  display:inline-block;
  width:200px;
  /* height: 300px; */
}
</style>