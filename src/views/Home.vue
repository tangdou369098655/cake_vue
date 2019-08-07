<template>
	<div class="loading" v-if="loading">loading...</div>
	<div v-else>
		<!-- 主体开始 -->
		<section class="wid index-one">
			<div>
				<!-- 侧边栏总开始 -->
				<aside class="index-one-left bacpink">
					<!--侧边栏上开始-->
					<div class="index-one-left-name">
						<!-- 侧边栏小标题部分开始 -->
						<div class="index-left-item ">
							<a :href="`/list?search=精选`">
								<div class="open-item">
									<img :src="imgurl+'images/index/one_1.png'">
									<p>极致精选</p>
									<img :src="imgurl+'images/index/gt.png'" class="img2" />
								</div>
							</a>
							<!-- 隐藏部分鼠标滑过出现开始 -->
							<home-hidden search="极致"></home-hidden>
							<!-- 隐藏部分鼠标滑过出现结束 -->
						</div>
						<!-- 侧边栏小标题部分结束 -->
						<!-- 侧边栏小标题部分开始 -->
						<div class="index-left-item">
							<a :href="`/list?search=原创`">
								<div>
									<img :src="imgurl+'images/index/one_2.png'">
									<p>匠心原创</p>
									<img :src="imgurl+'images/index/gt.png'" class="img2" />
								</div>
							</a>
							<!-- 隐藏部分鼠标滑过出现开始 -->
							<home-hidden search="匠心"></home-hidden>
							<!-- 隐藏部分鼠标滑过出现结束 -->
						</div>
						<!-- 侧边栏小标题部分结束 -->
						<!-- 侧边栏小标题部分开始 -->
						<div class="index-left-item">
							<a :href="`/list?search=西点`">
								<div>
									<img :src="imgurl+'images/index/one_3.png'">
									<p>优雅西点</p>
									<img :src="imgurl+'images/index/gt.png'" class="img2" />
								</div>
							</a>
							<!-- 隐藏部分鼠标滑过出现开始 -->
							<home-hidden search="优雅"></home-hidden>
							<!-- 隐藏部分鼠标滑过出现结束 -->
						</div>
						<!-- 侧边栏小标题部分结束 -->
						<!-- 侧边栏小标题部分开始 -->
						<div class="index-left-item">
							<a :href="`/list?search=乳品`">
								<div>
									<img :src="imgurl+'images/index/one_4.png'">
									<p>乳品系列</p>
									<img :src="imgurl+'images/index/gt.png'" class="img2" />
								</div>
							</a>
							<!-- 隐藏部分鼠标滑过出现开始 -->
							<home-hidden search="牛奶"></home-hidden>
							<!-- 隐藏部分鼠标滑过出现结束 -->
						</div>
						<!-- 侧边栏小标题部分结束 -->
						<!-- 侧边栏小标题部分开始 -->
						<div class="index-left-item">
							<a :href="`/list?search=蛋糕`">
								<div>
									<img :src="imgurl+'images/index/one_5.png'">
									<p>其他系列</p>
									<img :src="imgurl+'images/index/gt.png'" class="img2">
								</div>
							</a>
							<!-- 隐藏部分鼠标滑过出现开始 -->
							<home-hidden search="新"></home-hidden>
							<!-- 隐藏部分鼠标滑过出现结束 -->
						</div>
						<!-- 侧边栏小标题部分结束 -->
					</div>
					<!--侧边栏上结束-->
					<!--侧边栏中开始-->
					<div class="index-one-left-2 ">
						&nbsp;
					</div>
					<!--侧边栏中结束-->
					<!--侧边栏下开始-->
					<div class="index-one-left-name">
						<!-- 侧边栏小标题部分开始 -->
						<div class="index-left-item ">
							<a :href="`/list?search=健康`">
								<div>
									<img :src="imgurl+'images/index/cake/f7.png'">
									<p>茶歇活动</p>
									<img :src="imgurl+'images/index/gt.png'" class="img2">
								</div>
							</a>
							<!-- 隐藏部分鼠标滑过出现开始 -->
							<home-hidden search="莓"></home-hidden>
							<!-- 隐藏部分鼠标滑过出现结束 -->
						</div>
						<!-- 侧边栏小标题部分结束 -->
						<!-- 侧边栏小标题部分开始 -->
						<div class="index-left-item">
							<a :href="`/list?search=蛋糕`">
								<div>
									<img :src="imgurl+'images/index/cake/f1.png'">
									<p>节日特供</p>
									<img :src="imgurl+'images/index/gt.png'" class="img2">
								</div>
							</a>
							<!-- 隐藏部分鼠标滑过出现开始 -->
							<home-hidden search="士"></home-hidden>
							<!-- 隐藏部分鼠标滑过出现结束 -->
						</div>
						<!-- 侧边栏小标题部分结束 -->
					</div>
					<p class="index-blank">
						&nbsp;
					</p>
					<!--侧边栏下结束-->
				</aside>
				<!-- 侧边栏总结束 -->
				<!-- 第一个轮播图开始 -->
				<div id="banner">
					<div id="btn-left"></div>
					<ul id="ul-imgs">
						<li><a :href="`/detail?product_id=2`" target="_blank"><img :src="imgurl+'images/index/banner1.jpg'"></a>
						</li>
						<li><a :href="`/detail?product_id=3`" target="_blank"><img :src="imgurl+'images/index/banner2.jpg'"></a>
						</li>
						<li><a :href="`/detail?product_id=4`" target="_blank"><img :src="imgurl+'images/index/banner3.jpg'"></a>
						</li>
						<li><a :href="`/detail?product_id=5`" target="_blank"><img :src="imgurl+'images/index/banner4.jpg'"></a>
						</li>
						<li><a :href="`/detail?product_id=2`" target="_blank"><img :src="imgurl+'images/index/banner1.jpg'"></a>
						</li>
					</ul>
					<ul id="ul-idxs">
						<li class="active"></li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
					<div id="btn-right"></div>
				</div>
				<!-- 第一个轮播图结束 -->
				<div style="clear:both"></div>
			</div>
			<!-- 轮播图下第一区域开始 -->
			<div class="index-two ">
				<!-- 轮播图下第一区域第一块开始 -->
				<div class="index-two-r1 wow bounceInDown " data-wow-delay="0.4s">
					<div class="index-two-r0">
						<div class="index-two-r01"><a :href="`http://www.tangdd.cn`"></a></div>
						<div class="index-two-r02"><a :href="`/list?search=配送`"></a></div>
						<div class="index-two-r03"><a :href="`/list?search=极致`"></a></div>
						<div class="index-two-r04"><a :href="`/list?search=蛋糕`"></a></div>
					</div>
					<img :src="imgurl+'images/index/r0.png'" class="index-two-r00-img">
				</div>
				<!-- 轮播图下第一区域第一块结束 -->
				<!-- 轮播图下第一区域第2块开始 -->
				<div class="index-two-r  wow bounceInUp animated" data-wow-delay="0.6s">
					<a :href="`/detail?product_id=8`" target="_blank"><img :src="imgurl+'images/index/r2.png'" alt=""></a>
				</div>
				<div class="index-two-r wow bounceInDown animated" data-wow-delay="0.9s">
					<a :href="`/detail?product_id=9`" target="_blank">
						<img :src="imgurl+'images/index/bl.jpg'" alt="">
					</a>
				</div>
				<div class="index-two-r wow  bounceInUp  animated" data-wow-delay="1.2s">
					<a :href="`/detail?product_id=34`" target="_blank">
						<img :src="imgurl+'images/index/casn.jpg'" alt="">
					</a>
				</div>
				<!-- 轮播图下第一区域第2块结束 -->
				<div style="clear:both"></div>
			</div>
			<!-- 轮播图下第一区域结束 -->
		</section>
		<!-- 轮播图下区域1 -->
		<div class="middle-product">
			<!-- 大灰色背景部分1 -->
			<div class="wid">
				<!-- 2中部banner1-1 -->
				<home-sbanner :img_url="imgurl+sbanner[0]" :go_url="`/detail?product_id=34`"></home-sbanner>
				<!-- 2中部banner1-2 -->

				<!-- 3极致精选1 -->
				<home-stitle msg="极致·精选" myurl='/list?search=极致'></home-stitle>
				<!-- 3极致精选2 -->
				<!-- 3极致精选内容1 -->
				<home-one :HomeOneImg="imgurl+mbanner[3]" state=1></home-one>
				<!-- 3极致精选内容2 -->
				<!-- 第一个视频推介1 -->
				<div class="product-video wow zoomIn animated " data-wow-delay="0.4s">
					<video autoplay loop :src="imgurl+'images/video/vi.mp4'"></video>
				</div>
				<!-- 第一个视频推介2 -->
				<!-- 从cart子组件引入1 -->
				<!-- 热销新品推荐1 -->
				<hot msg="伴手礼精品推荐" state=11 kinds="伴手礼"></hot>
				<!-- 热销新品推荐2 -->
				<!-- 热销新品推荐1 -->
				<hot msg="尊享美味推荐" state=12 kinds="尊享"></hot>
				<!-- 热销新品推荐2 -->
				<!-- 从cart子组件引入2 -->
				<!-- 4中部banner2-1 -->
				<home-sbanner :img_url="imgurl+sbanner[4]" :go_url="`/detail?product_id=34`"></home-sbanner>
				<!-- 4中部banner2-2 -->
				<!-- 5匠心原创开始 -->
				<!-- 5匠心原创1 -->
				<home-stitle msg="匠心·原创" myurl='/list?search=原创'></home-stitle>
				<!-- 5匠心原创2 -->
				<!-- 5匠心原创内容1 -->
				<home-one :HomeOneImg="imgurl+mbanner[1]" state=2></home-one>
				<!-- 5匠心原创内容2 -->
				<!-- 5匠心原创结束 -->
				<!-- 第二个轮播图开始 -->
				<!-- 第二个轮播图结束 -->

				<!-- 从cart子组件引入1 -->
				<!-- 热销新品推荐1 -->
				<hot msg="优质精品推荐" state=13 kinds="优选"></hot>
				<!-- 热销新品推荐2 -->
				<!-- 热销新品推荐1 -->
				<hot msg="天然健康推荐" state=14 kinds="健康"></hot>
				<!-- 热销新品推荐2 -->
				<!-- 从cart子组件引入2 -->
				<!-- 6中部banner3-1 -->
				<home-sbanner :img_url="imgurl+sbanner[2]" :go_url="`/detail?product_id=34`"></home-sbanner>
				<!-- 6中部banner3-2 -->
				<!-- 7网红爆款开始1 -->
				<!-- 7网红爆款1 -->
				<home-stitle msg="网红·爆款"  myurl='/list?search=时尚'></home-stitle>
				<!-- 7网红爆款2 -->
				<!-- 7网红爆款内容区域1 -->
				<home-two state=10></home-two>
				<!-- 7网红爆款内容区域2 -->
				<!-- 7网红爆款开始2 -->
				<!-- 8中部banner4-1 -->
				<home-sbanner :img_url="imgurl+sbanner[3]" :go_url="`/detail?product_id=34`"></home-sbanner>
				<!-- 8中部banner4-2 -->
				<!-- 9猜您喜欢开始1 -->
				<!-- 9猜您喜欢标题部分1 -->
				<home-stitle msg="猜您·喜欢" myurl='/list?search=高品质'></home-stitle>
				<!-- 9猜您喜欢标题部分2 -->
				<!-- 9猜您喜欢内容区域1 -->
				<home-two state=11></home-two>
				<home-two state=12></home-two>
				<!-- 9猜您喜欢内容区域2 -->
				<!-- 9猜您喜欢开始2 -->
			</div>
			<!-- 大灰色背景部分2 -->
		</div>
		<!-- 轮播图下区域2 -->
		<!-- 主体结束 -->
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
				shopList: [],
				sizes: ['1.2', '2.2', '3.2', '7.2'],
				products: [],
				pics: [],
				loading: true,
				sbanner: [
					'images/index/73695233867459470.jpg',
					'images/index/sbanner1.jpg',
					'images/index/sbanner2.jpg',
					'images/index/sbanner3.jpg',
					'images/index/sbanner4.jpg',
					'images/index/sbanner5.jpg',
				],
				mbanner: [
					'images/index/himg1.jpg',
					'images/index/himg2.jpg',
					'images/index/himg3.jpg',
					'images/index/himg4.jpg',
					'images/index/himg5.jpg',
					'images/index/index-five-1.png',
				],
			}
		},
		methods: {
			wow() {
				if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
					new WOW().init();
				};
			},
			getData() {
				axios.get(
					`http://localhost:3000/index`, {
						params: {
							status: 1
						}
					}
				).then(({
					data
				}) => {
					this.products = data.product
					return Promise.all(
						data.product.map(item => {
							return axios.get(
								`http://localhost:3000/pics?pid=${item.car_id}`
							).then(({
								data
							}) => data)
						})
					)
				}).then(values => {
					this.pics = values.map(_ => _.pics[0]);
					this.loading = false;
					this.$nextTick(() => this.swiper())
					console.log(this.pics)
				})
			},
			swiper() {
				// <!-- 设置小点点的动态开始 -->

				var i = 0;
				var LIWIDTH = 972;
				var DURATION = 500;
				var LICOUNT = 4;
				var ulImgs = this.$el.querySelector('#ul-imgs');
				var ulIdxs = document.getElementById("ul-idxs");
				var lis = ulIdxs.children;

				const moveTo = to => {
					if (to == undefined) {
						to = i + 1;
					}
					if (i == 0) {
						if (to > i) {
							ulImgs.className = "transition";
						} else {
							ulImgs.className = "";
							ulImgs.style.marginLeft = -LIWIDTH * LICOUNT + "px";
							setTimeout(function () {
								moveTo(LICOUNT - 1);
							}, 100);
							return;
						}
					}
					i = to;
					ulImgs.style.marginLeft = -i * LIWIDTH + "px";
					for (var li of lis) {
						li.className = ""
					}
					// console.log(i);
					if (i == LICOUNT) {
						i = 0;
						setTimeout(function () {
							ulImgs.className = "";
							ulImgs.style.marginLeft = 0;
						}, DURATION)
					}
					lis[i].className = "active";
				}

				// <!-- 轮播图设置小点点的动态结束 -->
				// <!-- 轮播图设置左右两边的箭头开始 -->

				var btnLeft = document.getElementById("btn-left");
				var btnRight = document.getElementById("btn-right");
				var canClick = true;
				btnLeft.onclick = function () {
					move(1)
				}

				function move(n) {
					if (canClick) {
						// console.log(i+n);
						moveTo(i + n);
						canClick = false;
						setTimeout(function () {
							canClick = true;
						}, DURATION + 100);
					}
				}
				btnRight.onclick = function () {
					move(-1);
				}

				// <!-- 轮播图设置左右两边的箭头结束 -->
				// <!-- 轮播图设置鼠标放到图片开始 -->

				var interval = 3000;
				var timer = setInterval(function () {
					moveTo()
				}, 3000);
				var banner = document.getElementById("banner");
				banner.onmouseover = function () {
					clearInterval(timer);
				}
				banner.onmouseout = function () {
					timer = setInterval(function () {
						moveTo()
					}, 3000);
				}

				// <!-- 轮播图设置鼠标放到图片结束 -->

				var ulIdxs = document.getElementById("ul-idxs");
				var canClick = true;
				ulIdxs.onclick = function (e) {
					if (canClick) {
						var li = e.target;
						if (li.nodeName == "LI") {
							if (li.className !== "active") {
								for (var i = 0; i < lis.length; i++) {
									if (lis[i] == li) {
										break;
									}
								}
								moveTo(i);
								setTimeout(function () {
									canClick = true;
								}, DURATION);
							}
						}
					}
				}

				// <!-- 轮播图JS结束 -->
			}
		},

		// 注册子组件
		components: {
			"home-one": homeOne,
			"home-two": homeTwo,
			"home-stitle": homeStitle,
			"home-sbanner": homeSbanner,
			"hot": hot,
			"home-hidden": homeHidden

		},
		created() {
			this.getData(),
				this.wow()
		},
		mounted() {

			if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))) {
				new WOW().init();
			};

			// <!-- 引入头部1 -->
		}
	}
</script>
<style lang="less" scoped>
	.loading {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		z-index: 1000;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(255, 255, 255, .7);
	}
	.index-two-r0 a{
		display:inline-block;
		width:100%;
		height:100%;
	}
</style>