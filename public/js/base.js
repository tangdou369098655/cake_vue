//登录按钮1
function regLogin01(){
	alert("haha");
var u_phone=utelephone.value;
var u_upwd=upwd.value;
var xhr=new XMLHttpRequest();
xhr.onreadystatechange=function(){
	if(xhr.readyState==4&&xhr.status==200){
		var result=xhr.responstText;
		alert(result);
	};
};
xhr.open("post","http://127.0.0.1:8080/user/login",true);
var formdata="utelephone"+u_phone+"&upassword"+u_upwd;
xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xhr.send(formdata);
};
//登录按钮2
//点击按钮加入购物车1

if (!(/msie [6|7|8|9]/i.test(navigator.userAgent))){
	new WOW().init();
};


	// 极致精选开始1
	// 点击购物车图标出现购物车1
	// $(".index-five-tab-car").click(
	// 	function (e) {
	// 		// var $car=e.target;
	// 		e.stopPropagation();
	// 		$(this).next()
	// 			// $(".index-five-tab-tc")
	// 			.css("display", "block");
	// 	}
	// )

	// 点击购物车图标出现购物车2
	// 点击叉号关闭购物车1
	// $(".index-five-tab-tc4").click(
	// 	function (e) {
	// 		e.stopPropagation();
	// 		$(this).parent().css("display", "none");
	// 	}
	// )
	// 点击叉号关闭购物车2
	// 点击货品重量选择商品1
	// $(".index-five-tab-tc2>div").click(
	// 	function () {
	// 		$(`<img src="images/index/seven_7.png" alt="">`).prependTo($(this))
	// 		$(this).siblings("div").children("img").remove();
	// 		// $(this).children("img")
	// 	}
	// )
	// 点击货品重量选择商品2
	// 极致精选结束2


//点击按钮加入购物车2


