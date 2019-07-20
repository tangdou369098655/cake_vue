<template>
		<!-- 隐藏部分鼠标滑过出现开始 -->
						<div class="index-left-item-right">
							<ul>
								<li v-for="(item,i) in products" :key="item.id">
									<img :src="pics[i] && pics[i].img" alt="">
									<span>{{item.cake_name}}</span>
								</li>
							</ul>
						</div>
						<!-- 隐藏部分鼠标滑过出现结束 -->
</template>
<script>

import axios from 'axios'
export default {
	name:"Home-hidden",
	props:{
		search:{default:"曲奇"},
	},
  data(){
    return{
      products:[],
      pics:[],
      // search:"曲奇",
    }
	},
	methods:{
    getData() {
         if(!this.search) return;
         console.log(this.search);
      this.axios(
        `http://localhost:3000/find?search_product=${this.search}`
      ).then(
        ({data})=>{
          this.products=data.list
          return Promise.all(
            data.list.map(item=>{
              return axios.get(
                `http://localhost:3000/pics?pid=${item.product_id}`
              ).then(({data})=>data)
            })
          )
        }
      ).then(values=>{
        this.pics=values.map(_ => _.pics[0])
        console.log(this.pics)
        console.log(this.products)
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