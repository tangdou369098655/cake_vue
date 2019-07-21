<template>
       <!--1导航栏开始 -->
<header>
		<!--logo -->
		<div class="wid main">
			<div class="cake-logo fl ">
					<div class="flower ">
							<img src="images/index/flowers/f1.png" alt=""><img src="images/index/flowers/f3.png" alt="">
					</div>
				<img src="images/index/tdd2.png">
			</div>
			<!--导航详细 -->
			<div class="nav fl">
				<div class="location bacpink fl ">
					<a href="#" class="white1 ">
						<i class="fa fa-map-marker white1" aria-hidden="true"></i>
						郑州
					</a>
				</div>
				<ul>
					<li class="nav-item " >
						<a href="#">下午茶</a>
						<!-- 隐藏部分1 -->
						<div class="navid">
							<ul>
								<li class="navid-list">
									<img src="images/index/极地牛乳.png" alt="">
									<p>极地牛乳</p>
									<p>￥218.00</p>
								</li>
								<li class="navid-gray"></li>
								<li class="navid-list">
									<img src="images/index/极地牛乳.png" alt="">
									<p>极地牛乳</p>
									<p>￥218.00</p>
								</li>
								<li class="navid-gray"></li>
								<li class="navid-list">
									<img src="images/index/极地牛乳.png" alt="">
									<p>极地牛乳</p>
									<p>￥218.00</p>
								</li>
								<li class="navid-gray"></li>
								<li class="navid-list">
									<img src="images/index/极地牛乳.png" alt="">
									<p>极地牛乳</p>
									<p>￥218.00</p>
								</li>
							</ul>
						</div>
						<!-- 隐藏部分2 -->
					</li>
					<li  class="nav-item " >
						<a href="#">送亲子</a>
						<div class="navid"></div>
					</li>
					<li class="nav-item " >
						<a href="#">送恋人</a>
						<div class="navid"></div>
					</li>
					<li class="nav-item " >
						<a href="#">送长辈</a>
						<div class="navid"></div>
					</li>
					<li class="nav-item " >
						<a href="#">活动产品</a>
						<div class="navid"></div>
					</li>
					<div style="clear:both"></div>
				</ul>
				<div style="clear:both"></div>
			</div>
			<!--搜索框和头像栏 -->
			<div class="login fr">
				<div class="search fl ">
					<input type="text" class="fl font16 " placeholder="请输入要查找的内容" v-model="search">
					<button @click="getSearch" class="search-btn bacpink fl font16 white1">搜索</button>
					<div style="clear:both"></div>
				</div>
				<div class="fl userphoto  ">
					<i class="iconfont icon-02 bacpink" aria-hidden="true"></i>
				</div>
				<div style="clear:both"></div>
			</div>
			<div style="clear:both"></div>
		</div>
		<!-- 右侧固定导航栏1 -->
		<div class="right-nav">
			<div class="nav-ritem ">
				<img src="images/index/qq.png" alt="">
				<p>QQ咨询</p>
			</div>
			<div class="nav-ritem ">
				<img src="images/index/gerenzhongxin.png" alt="">
				<p>个人中心</p>
			</div>
			<div class="nav-ritem ">
				<img src="images/index/gouwuche.png" alt="">
				<p>购物车</p>
			</div>
			<div class="nav-ritem ">
					<div class="big-png"></div>
				<img src="images/index/weixin_ewm.png" alt="">
				<p>下载客户端</p>
			</div>
			<div class="nav-ritem ">
				<img src="images/index/totop.png" alt="">
				<p>回到顶部</p>
			</div>
		</div>
		<!-- 右侧固定导航栏2 -->
</header>
	<!--1导航栏结束 -->
</template>
<script>
export default {
    data(){
        return{
			search:""
		}
	},
	props: {
		value: String
	},
	methods:{
		getSearch(){
			if(!this.search){return alert("请输入要搜索的蛋糕品种")}
			window.open(`/#/list?search=${this.search}`, Date.now())	
		}
	},
}
</script>
<style scoped>

</style>