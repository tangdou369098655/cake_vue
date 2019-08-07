<template>
       <!--1导航栏开始 -->
<header>
		<!--logo -->
		<div class="wid main">
				<router-link :to="`/`" target="_blank">
			<div class="cake-logo fl ">
					<div class="flower ">
							<img :src="imgurl+'images/index/flowers/f1.png'" alt=""><img :src="imgurl+'images/index/flowers/f3.png'" alt="">
					</div>
				<img :src="imgurl+'images/index/tdd2.png'">
			</div>
					</router-link>
			<!--导航详细 -->
			<div class="nav fl">
				<div class="location bacpink fl ">
					<a href="#" class="white1 ">
						<i class="fa fa-map-marker white1" aria-hidden="true"></i>
						郑州
					</a>
				</div>
				<ul>
					<!-- 导航栏标题部分1 -->
					<header-title msg="下午茶" state=10 kind='草莓'></header-title>
					<!-- 导航栏标题部分2 -->
					<!-- 导航栏标题部分1 -->
					<header-title msg="送亲子" state=11 kind='西点'></header-title>
					<!-- 导航栏标题部分2 -->
					<!-- 导航栏标题部分1 -->
					<header-title msg="送恋人" state=12 kind='高品质'></header-title>
					<!-- 导航栏标题部分2 -->
					<!-- 导航栏标题部分1 -->
					<header-title msg="送长辈" state=13 kind='健康'></header-title>
					<!-- 导航栏标题部分2 -->
					<!-- 导航栏标题部分1 -->
					<header-title msg="活动产品" state=14 kind='新疆'></header-title>
					<!-- 导航栏标题部分2 -->
					<div style="clear:both"></div>
				</ul>
				<div style="clear:both"></div>
			</div>
			<!--搜索框和头像栏 -->
			<div class="login fr">
				<div class="search fl ">
					<input type="text" class="fl font16 " placeholder="请输入要查找的内容" v-model="search" @keyup.13="getSearch">
					<button @click="getSearch" class="search-btn bacpink fl font16 white1">搜索</button>
					<div style="clear:both"></div>
				</div>
				<div class="fr userphoto  " >
					<!-- <i class="iconfont icon-02 bacpink" aria-hidden="true"></i> -->
					<template v-if="userInfo.uid">
						<router-link :to="`/portal`" target="_blank" id="myname" >欢迎您！{{userInfo.realname}}</router-link>
						<button @click="logout" id="goout">退出</button>
						<!-- 后期可以追加头像 -->
						<img :src="userphoto" alt=""> 
					</template>
					<a href="/login" v-else style="margin-left:10px;display:inline-block;cursor: pointer;">请登录</a>
				</div>
				<div style="clear:both"></div>
			</div>
			<div style="clear:both"></div>
		</div>
		<!-- 右侧固定导航栏1 -->
		<div class="right-nav">
			<div class="nav-ritem ">
				<img :src="imgurl+'images/index/qq.png'" alt="">
				<p>QQ咨询</p>
			</div>
			<router-link :to="`/portal`" target="_blank">
			<div class="nav-ritem ">
				<img :src="imgurl+'images/index/gerenzhongxin.png'" alt="">
				<p>个人中心</p>
			</div>
			</router-link>
			<router-link :to="`/cart`" target="_blank">
			<div class="nav-ritem ">
				<img :src="imgurl+'images/index/gouwuche.png'" alt="">
				<p>购物车</p>
			</div>
			</router-link>
			<div class="nav-ritem ">
					<div class="big-png"></div>
				<img :src="imgurl+'images/index/weixin_ewm.png'" alt="">
				<p>下载客户端</p>
			</div>
			<div class="nav-ritem ">
				<img :src="imgurl+'images/index/totop.png'" alt="">
				<p>回到顶部</p>
			</div>
		</div>
		<!-- 右侧固定导航栏2 -->
</header>
	<!--1导航栏结束 -->
</template>
<script>
import { Promise } from 'q';
import headerTitle from './Header-title'
export default {
	components:{
		"header-title":headerTitle
	},
    data(){
        return{
			search:"",
			userphoto:"",
			uid:null
		}
	},
	props: {
		// value: String
	},
	computed: {
		userInfo() {
			return this.$store.state.userinfo
		}
	},
	mounted() {
		this.$store.dispatch('getUserInfo')
	},
	methods:{
		//用户退出
		//重新加载页面
		logout(){
			this.axios.post('/user/logout').then(()=>{
				location.reload()
			})
		},
		// 搜索框点击事件1
		getSearch(){
			if(!this.search){return alert("请输入要搜索的蛋糕品种")}
			window.open(`/list?search=${this.search}`, Date.now())	
		},
		// 搜索框点击事件2
	},
	created(){
		// this.getData()
	}
}
</script>
<style scoped>
#myname{
	color:rgb(102, 100, 100);
	display:inline-block;
	margin-left:10px;
}
#myname:hover{
	color:black;
}
#goout{
color:rgb(15, 15, 15);
	display:inline-block;
	margin-left:10px;
	cursor: pointer;
}
</style>