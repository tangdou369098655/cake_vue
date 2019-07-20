<template>
  <div class="about">
  
   	<home-hidden
						search="匠心"
						></home-hidden>
  </div>
</template>

<script>
import axios from 'axios'
 //引入子组件六个商品模块
import homeOne from './home-all/Home-one'
 //引入子组件四个商品模块
import homeTwo from './home-all/Home-two'
 //引入子组件小标题模块
import homeStitle from './home-all/Home-stitle'
 //引入子组件小banner模块
import homeSbanner from './home-all/Home-sbanner' 
//引入cart的子组件使用
import hot from './cart-all/hot'
import homeHidden from './home-all/Home-hidden'


export default {
  data() {
    return {
      
    }
  },
  methods: {
   
	},

	// 注册子组件
	components:{
"home-one":homeOne,
"home-two":homeTwo,
"home-stitle":homeStitle,
"home-sbanner":homeSbanner,
"hot":hot,
"home-hidden":homeHidden

	},
  created() {
    this.getData()
  },
  mounted() {
  
  }
}
</script>
