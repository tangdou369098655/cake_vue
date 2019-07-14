<template>
			<!-- 6中部banner3-1 -->
			<div class="active-banner wow fadeInRight animated" data-wow-delay="0.6s">
				<a :href="go_url">
					<img :src="img_url" alt="">
				</a>
			</div>
			<!-- 6中部banner3-2 -->
</template>
<script>
import axios from 'axios'
export default {
  name:"Home-sbanner",
  props:{
    img_url:{default:""},
    go_url:{default:"#"},
  },
  data (){
    return{}
  },
  methods:{

  },created(){
    
  }
}
</script>
<style scoped>
  
</style>