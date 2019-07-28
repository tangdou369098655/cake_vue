<template>
    <div>
        <!--背景图-->
	<div class="tdd_bgc">
		<!--导航栏-->
		<nav class="login-nav">
			<div class="login-nav_div">
				<a href="www.tangdd.cn">
					<img src="images/index/tdd.png" class="tddlogo">
				</a>
				<span>|</span>
				<span>通行证</span>
				<span></span>
				<i class="fa  fa-spin">
					<img src="images/index/flowers/flo7.png" class="flower4"></i>
				<i class="fa  fa-spin">
					<img src="images/index/flowers/flo7.png" class="flower5"></i>
			</div>
			<hr class="login-nav-hr">
		</nav>
		<!--上半部分  -->
		<section class="login-section">
			<!--大图标以及网站介绍-->
			<div class="login-section_top">
				<a href="#">
					<img src="images/index/tdd2.png">
				</a>
				<p>登录糖豆豆蛋糕tangdd.cn-分享新鲜美时美刻！</p>
			</div>
			<!--登录框-->
			<div class="login-login">
				<div class="login-login1">
					<p id="login-number">手机号登录</p>
					<p id="login-username">用户名登录</p>
					<div class="login-line1"></div>
					<div class="login-line2"></div>
				</div>
				<div class="login-login2">
					<input type="text" placeholder="手机号" class="input1" v-model="formData.utelephone">
					<input type="password" placeholder="密码" class="input1" v-model="formData.upassword">
					<input type="text" class="input1" v-model="formData.captcha" @keyup.enter="submit">
					<div style="background:#fff">
					<img alt="" ref="captcha" @click="updateCaptcha"></div>
					<input type="button" value="登录" class="input2" @click="submit">
				</div>
				<div class="login-login3">
					<div class="login-login3-radio">
						<input type="radio" id="auto_reg">
						<span>
							<label for="auto_reg">下次自动登录</label>
						</span>
					</div>
					<a href="#" class="imcolor">忘记密码</a>
					&nbsp;
					<span class="imcolor">|</span>
					&nbsp;
					<a href="#" class="imcolor">注册</a>
				</div>
			</div>
		</section>
		<!--页面底部-->
		<footer class="login-footer">
			<div class="login-footer1 imcolor-black">
				<div class="comfrom">图片来自糖豆豆tangdd.cn</div>
				<p class="smallfont">备案号</p>
				<p class="smallfont">Copyright &copy; 20018-2050 TANGDD 中文 English</p>
			</div>
			<div class="login-footer-flower">
				<i class="fa  fa-spin">
					<img src="images/index/flowers/flo7.png" class="flower1"></i>
				<i class="fa   fa-spin">
					<img src="images/index/flowers/flo14.gif" class="flower2"></i>
				<i class="fa  fa-spin">
					<img src="images/index/flowers/flo14.gif" class="flower3"></i>
				<i class="fa  fa-spin">
					<img src="images/index/flowers/flo3.gif" class="flower4"></i>
				<i class="fa  fa-spin">
					<img src="images/index/flowers/flo7.png" class="flower5"></i>
			</div>
		</footer>
	</div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            formData: {}
        }
	},
	mounted(){
		this.updateCaptcha()
	},
    methods:{
		updateCaptcha(){
			this.$refs.captcha.src=`${this.imgurl}captcha?t=${Date.now()}`
		},
        submit(){
            this.axios.post('/user/login', this.formData).then(({data}) => {
                if (data == 1) {
					let { redirect } = this.$route.query
					location.href= redirect || '/'
                };
                if (data == 2) {
					alert("用户名或密码错误，请重新输入")
					this.updateCaptcha()
                };
                if (data == 3) {
                    alert("用户名或密码不能为空")
					this.updateCaptcha()
                };
                if (data == 4) {
					alert("验证码错误")
					this.updateCaptcha()
                };
            })
        }
    },

}
</script>
<style scoped lang="less">
  .tdd_bgc{
background-image: ~"url(@{baseurl}images/index/bgc02.jpg)";
position:relative;
background-size:cover;
width:100%;
height:900px;
}

.login-nav{
line-height:25px;
font-size:25px;
padding-top:30px;
position:absolute;
}
.login-nav_div{
background-color:rgba(3,3,3,0.7);
width:100%;
display:inline-block;
height:40px;
}
.login-nav_div a{
display:inline-block;
padding-left:10px;
padding-right:10px;
width:170px;
height:25px;
/* float:left; */
}
.login-nav_div .tddlogo{
display:inline-block;
padding-left:10px;
width:170px;
height:35px;
/* float:left; */
overflow:hidden;
margin-top:4px;
} 
.login-nav span{
/* positive:absolute; */
line-height:25px;
font-size:24px;	
float:left;
margin-left:10px;
color:#df769e;
margin-top:8px;
}
.login-nav .login-nav-hr{
margin-top:2px;
color:#4D4143;
height:2px;
background-color: #4D4143;
}
.login-section{
	margin:0 auto;
	color:#df769e;
	position:relative;
	font-size:16px;
	text-align:center;
	padding:60px 0 20px;
}
.login-section_top a,.login-section_top img{
	width:315px;
	height:71px;
	display:inline-block;
	margin-bottom:10px;
}
.login-section_top p{
	color:#4D4143;
}
/*登录框*/
.login-login {
width:370px;
min-height:370px;
background:rgba(77,65,67);
margin:20px auto;
padding:30px 30px;
border-radius:20px;
}

.login-login1{
	width:370px;
	height:40px;
	position:relative;
	border-bottom:1px solid white;
	margin-bottom:50px;
}
.login-login1 p{
	display:inline-block;
	position:absolute;
	line-height:18px;
	font-size:18px;
	height:40px;
	width:100px;
}
#login-number{
	left:10px;
	color:white;
	border-bottom:3px solid #e78fae;
	text-shadow:5px 2px 6px #000;
}
#login-username{
	color:#b4b3b3;
	left:140px;
	text-shadow:5px 2px 6px #000;
}
#login-username:hover{
	color:white;
	border-bottom:3px solid #e78fae;
}

.input1{
	padding-left:20px;
	padding-right:20px;
	width:310px;
}
.input1,.input2{
	height:42px;
	color:#666;
	font-size:16px;
	border:1px solid #ddd;
	border-radius:10px;
	margin-bottom:25px;
}
.input2{
	width:350px;
}
.input2:hover{
	border:1px solid black;
	color:black;
	background-color:#FDC5D0;
}
.login-login3-radio {
display:inline-block;
margin-right:60px;
}
.login-login3-radio span {
	color:white;
	text-shadow:5px 2px 6px #000;
}

/*页面底部*/
.login-footer1{
	text-align:center;
}
.comfrom{
height:50px;
width:auto;
}
.smallfont{
font-size:12px;
}



/*页面底部小花*/
.login-footer-flower{
height:100px;
width:auto;
position:absolute;
bottom:60px;
display:inline-block;
}
 .flower1{
height:80px;
}
 .flower2{
height:65px;
}
.flower3{
height:50px;
}
.flower4{
height:40px;
width:auto;
}
.flower5{
height:20px;
width:auto;
}

</style>