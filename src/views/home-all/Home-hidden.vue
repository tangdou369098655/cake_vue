<template>
		<!-- 隐藏部分鼠标滑过出现开始 -->
						<div class="index-left-item-right">
							<ul>
								<li v-for="(item,i) in products" :key="item.id"><router-link :to="`/detail?product_id=${pics[i]&&pics[i].pic_id}`" target="_blank">
									<img :src="pics[i] && pics[i].img" alt="">
                </router-link>
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
        `/find?search_product=${this.search}`
      ).then(
        ({data})=>{
          this.products=data.list
          return Promise.all(
            data.list.map(item=>{
              return this.axios.get(
                `/pics?pid=${item.product_id}`
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
  .index-one-left-name .index-left-item-right a:hover {
    background-color: #FFFFFFFF;
}
</style>