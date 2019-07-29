<template>
  <!-- 页面主体内容开始1 -->
  <div class="wid">
    <!-- 面包屑导航1 -->
    <div class="bar">
      <router-link :to="`/list?search=${kinds}`" target="_blank">
      <span id="kinds">乳品系列</span></router-link>
      <i class=" iconfont icon-dayuhao"></i>
      <span id="nav_name">星光游乐园</span>
    </div>
    <!-- 面包屑导航2 -->
    <!-- 第一部分1 -->
    <div class="p-main clearfix">
      <!-- 第一部分左边主图1 -->
      <div class="p-main-left">
        <div id="lgImg"><img src="images/index/星光游乐园-1.jpg" alt=""></div>
        <div class="left-img" id="left_img">
          <!--  -->
        </div>
      </div>
      <!-- 第一部分左边主图2 -->
      <!-- 第一部分右边区域1 -->
      <div class="p-main-right">
        <h1 id="cake_name">星光游乐园<img src="images/index/icon-new-1.png" alt=""></h1>
        <h4 id="advertisement">生日蛋糕,巧克力,芝士,乳酪蛋糕,慕斯,鲜奶,商务,婚庆,提供健康、高品质蛋糕、时尚经典蛋糕,在线预订,新鲜配送到家。</h4>
        <h2 id="price">￥{{price2}}</h2>
        <span class="f-gray">甜度:<img src="images/index/tian2.png" alt=""></span>
        <div class="cweight" id="specss">
          <div v-for="(item , i) in sizes" :key="item" @click="changePrice(i)">{{item}}磅
            <i class="iconfont icon-right-1" v-if="i===curIndex"></i>
          </div>
          <!-- <div>2.0磅</div>
          <div>3.0磅</div>
          <div>4.0磅</div> -->
        </div>
        <hr>
        <div class="details clearfix">
          <div><img src="images/index/message-one-round.png" alt="">&emsp;直径6~14寸</div>
          <div><img src="images/index/message-two.png" alt="">&emsp;适合多人分享</div>
          <div><img src="images/index/message-three.png" alt="">&emsp;含多人份餐具</div>
          <div><img src="images/index/message-four.png" alt="">&emsp;至少需提前一天预约</div>
        </div>
        <hr>
        <div class="count">
          <h3 class="iconfont icon-jianhaoshouqi"></h3>
          <div></div>
          <h3><input type="text" value="1" id="p_count"></h3>
          <div></div>
          <h3 class="iconfont icon-jiahaozhankai"></h3>
        </div>
        <div class="buy">
          <span>加入购物车</span>
          <span>立即购买</span>
        </div>
      </div>
      <!-- 第一部分右边区域2 -->
    </div>
    <!-- 第一部分2 -->
    <!-- 第二部分商品详情开始1 -->
    <div class="p-details">
      <div class="detail-one">
        <h5 class="pink1">商品详情</h5>
        <h5>商品评论（0条）</h5>
        <i class="xian"></i>
      </div>
      <hr>
      <div class="detail-two">
        <span>品牌：糖豆豆</span>
        <span>口味：醇香奶油</span>
        <span>适合人群：所有人群</span>
        <span>商品产地：中国大陆</span>
        <span>是否含糖：含糖</span>
        <span>类别：蛋糕</span>
        <span>保质期：1天</span>
        <span>保存温度：0℃~8℃</span>
        <span>口味：原味</span>
        <span>国产/进口：国产</span>
        <!-- 文本区域开始1 -->
        <div class="text-center">
          <h5>
            图片仅供参考，请以实物为准
          </h5>
          <h3>幸福就是甜品的味道；每一道甜品都有一个故事；</h3>
          <h3 class="pink1">生活就像一道道甜品，不品尝怎么知道哪道更适合自己?</h3>
          <h3>似腻还成爽，才凝又欲飘；玉来盘底碎，雪到口边销。</h3>
          <h3>风是透明的，雨是滴答的，</h3>
          <h3>云是流动的，歌是自由的，</h3>
          <h3>爱是用心的，恋是疯狂的，</h3>
          <h3>天是永恒的，</h3>
          <h3 class="pink1">你是难忘的。</h3>
          <h4>That is the sweetest cake in the world,
            That is the most delicious cake in the world.</h4>
        </div>
        <!-- 文本区域开始2 -->
      </div>
      <!-- 图片区域开始1 -->
      <div class="pro-img">
        <img src="images/index/banner50.gif">
        <!-- 需要从数据库调取的图片1 -->
        <div id="lg_img">

        </div>
        <!-- 需要从数据库调取的图片2 -->
        <img src="images/index/size.jpg">
      </div>
      <!-- 图片区域开始2 -->
      <!-- 配送区域开始1 -->
      <div class="distribution">
          <div>
            <i>郑州</i>
            <span>郑州三环以内免费配送，超出区域按30元/个收取运费。</span>
          </div>
        <div>
          <i>上海</i>
          <span>上海申嘉湖高速以北，绕城高速以南，外环高速以西，沈海高速以东区域及嘉定行政区免费配送，超出区域按30元/个收取运费，迪士尼区域暂不支持配送。</span>
        </div>
        <div>
          <i>常州</i>
          <span>G42沪蓉高速以南，龙江路高架（外环高架）以东，龙城大道以南，江宜高速以东，常合高速以北，青洋路高架以西免费配送，其他区域暂不支持配送。</span>
        </div>
        <div>
          <i>苏州</i>
          <span>周湖线云龙路以北，G15W常台高速以西，S230太湖苏州湾大桥以东免费配送。苏州绕城之内除阳澄湖地区（G15W以东，G2京沪高速以北）暂不支持配送。</span>
        </div>
        <div>
            <i>苏州</i>
          <span>昆山区域：陆丰东路中环南线以北，城北路以南，沿沪大道以西，常嘉高速以东免费配送。</span>
        </div>
        <div>
          <i>杭州</i>
          <span>余杭区,拱墅区,西湖区,上城区,下城区,江干区,滨江区,萧山区(以上区域绕城内免费配送，绕城以外区域每单加收30元运费，其他区域暂不支持配送)。</span>
        </div>
        <div>
          <i>宁波</i>
          <span>宁波绕城以内免费配送，穿山疏港高速以北，甬舟高速以南，宁波绕城高速以东加收30元运费。其余地区暂不支持配送。</span>
        </div>
        <div>
          <i>无锡</i>
          <span>S19锡张高速（通锡高速）望虞河以北以西，S228（锡张线）以南，蠡湖大道（环湖路，西环路、锡西大道）以东免费配送，其他区域暂不支持配送。</span>
        </div>
        <div>
          <i>北京</i>
          <span>六环以内（不包含香山地区）免费配送，其他区域暂不支持配送。</span>
        </div>
        <div>
          <i>天津</i>
          <span>天津全市免费配送，蓟县区域暂不支持配送（绕城以外实际配送时间会±1小时，请周知。）</span>
        </div>
        <div>
          <i>绍兴</i>
          <span>绍诸高速以北，钱陶公路以南，平陶公路以西。轻纺城大道，杨绍线，福漓公路，分后线以东。其余地区暂不支持配送。</span>
        </div>
        <div>
          <i>重庆</i>
          <span>金州大道以南、嘉陵江渝黔铁路以东、轨道交通三号线内环快 速路以北以西免费配送，其他区域暂不支持配送。</span>
        </div>
        <div>
          <i>成都</i>
          <span>珠江路.大马寺路以东，天府五街以北，桃园路以西及成都绕城高速内免费配送，其它区域暂不支持配送。</span>
        </div>
        <div>
          <i>台州</i>
          <span>椒江以南，以S19以西，东方大道以北，京福线—内环南路—内环东路—内环北路—大闸路以东支持免费配送，其他区域不支持配送。</span>
        </div>
        <div>
          <i>嘉兴</i>
          <span>嘉兴三环以内免费配送，其余地区暂不支持配送。</span>
        </div>
      </div>
      <!-- 配送区域开始2 -->	
      
    </div>
    <!-- 第二部分商品详情开始2 -->
    <!-- 页面底部价格解释1 -->
    <pro-bottom></pro-bottom>
    <!-- 页面底部价格解释2 -->
  </div>
  <!-- 页面主体内容开始1 -->
</template>
<script>
import proBottom from './protal-all/Pro-bottom'
// import aaa from '@/components/Footer' 绝对引入
// import aaa from './../components/Footer'  相对引入 必须点开头不可以点点
export default {
  data(){
    const sizes = ['1.2', '2.2', '3.2', '7.2']
    return{
      kinds:{default:"蛋糕"},
      price1:0,
	    sizes,
      psizes: [1,1.5,2,3.5],
      curIndex: 0
  }},
  computed: {
    price2() {
      return (this.psizes[this.curIndex] * this.price1).toFixed(2)
    }
  },
  methods:{
    changePrice(i) {
      this.curIndex = i
		}
  },
  components:{
    "pro-bottom":proBottom
  },
  created(){},
  mounted(){
     //点击修改价格
    function ajax({url,type,data,dataType}){
  return new Promise(function(open,err){
		//1. 创建xhr对象
		var xhr=new XMLHttpRequest();
		//2.绑定监听事件
		xhr.onreadystatechange=function(){
			if(xhr.readyState==4&&xhr.status==200){
				if(dataType!==undefined
					&&dataType.toLowerCase()==="json")
					var res=JSON.parse(xhr.responseText)
				else
					var res=xhr.responseText
					
				open(res);
			}
		}
		if(type.toLowerCase()=="get"&&data!=undefined){
			url+="?"+data;
		}
		//3.打开连接
		xhr.open(type,url,true);
		if(type.toLowerCase()==="post")
			//增加：设置请求消息头
			xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
		//4.发送请求
		if(type.toLowerCase()=="post"&&data!==undefined)
			xhr.send(data);
		else
			xhr.send(null);
    })
   }
    /*
      (async function(){
      //ES7
      var res=await ajax({
        url:"http://localhost:3000/index/",
        type:"get",
        dataType:"json"
      })
      //ES6
      .then(res=>{
        ... ...
      })
    })();
    */
 
      $(() => {
        //获得地址栏中的？product_id=2中的2
          var { product_id } = this.$route.query
          if (!product_id) return
          console.log(product_id);
          this.axios(`/details?product_id=${product_id}`).then(res => {
              let result = res.data
              console.log(result);
              console.log(123456);
              //先将2大块数据解构出来
              var {
                product,
                kinds,
                pics
              } = result;
              var {kind_name}=kinds;
              //填充右上角基本信息
              var {
                cake_name,
                advertisement,
                // product_kinds_id,
                price,
                spec
              } = product;
                this.price1=price;
              $("#cake_name").html(cake_name); //商品名称
              $("#nav_name").html(cake_name); //面包屑导航商品名称
              $("#advertisement").html(advertisement); //商品简介
              // $("#price").html(`￥${price}`); //商品价格
              $("#kinds").html(kind_name);
              this.kinds=kind_name;
              console.log(spec)
              spec=spec.split("/");
              console.log(spec);
             
              //设置商品尺寸
              var html="";
              // for(var sp of spec){
              //   html+=`<div>${spec[sp]}
              //   <i class=""></i>
              // </div>`
              // }
              // spec.forEach(function(value,i){
              //   　　console.log('forEach遍历:'+i+'--'+value);
              //   html+=`<div onclick="change">${value}
              //   <i class="${i==0?'iconfont icon-right-1':''}"></i></div>`

              //   })
              // $("#specss").html(html);
              // console.log(html)
              //设置商品图片
              var html = "";
              var htmlLg = "";
              var {
                img_1,
                img_2,
                img_3,
                img_5,
                img_6,
                img_7,
                img_8
              } = pics;

              html = `
                <img src="${img_5}" alt="">
                <img src="${img_6}" alt="">
                <img src="${img_7}" alt="">
                <img src="${img_8}" alt="">`
              $("#left_img").html(html);
              htmlLg = `
              <img src="${img_1}" alt="">
              <img src="${img_2}" alt="">
              <img src="${img_3}" alt="">
              `
              $("#lg_img").html(htmlLg);
              //设置页面中间的图片更换

              //设置鼠标进入小图大图跟着切换
              $("#lgImg").html(`<img src="${img_5}" alt="">`)
              $("#left_img>img").on("mouseenter click", function () {
                $("#lgImg").html(`<img src="${this.src}" alt="">`)
              })

              //设置购买数量增减变动
              $(".icon-jiahaozhankai").click(
                function () {
                  var n = parseInt($("#p_count").val());
                  // console.log("jiajia1",n)
                  n++;
                  $("#p_count").val(n);
                  // console.log("jiajia2",n)

                }
              )
              $(".icon-jianhaoshouqi").click(
                function () {
                  var $btn = $(this);
                  var n = parseInt($("#p_count").val());
                  if (n > 1) {
                    n--;
                  }
                  $("#p_count").val(n);

                }
              )
              //设置当鼠标点击尺寸时候，i的属性（对号加到对应的上面）
              // $("#specss>div").click(
              //   function(){
              //     $(this).parent().children().children().removeClass("iconfont icon-right-1")
              //     $(this).children().addClass("iconfont icon-right-1");
                
              //   }
              // )
          })
      })
  },
  }
</script>
<style socped>
/* 绝对引入 */
/* @import url('~@/assets/css/cart.css');   */
/* @import url('../assets/css/cart.css'); 和引入js不一样*/  
/* 第一部分1 */
.p-main{
  padding-bottom: 20px;
  margin-top:30px;
}
.p-main-left,.p-main-right{
  /* display:inline-block; */
  float: left;
}
.p-main-left{
  width:716px;
}
.left-img>img{
  cursor:pointer;
}
.p-main-right{
  width: 435px;
  text-align: left;
  margin-left: 40px;
}
.p-main-left>div:nth-child(2)>img{
  width:164px;
  display:inline-block;
  margin-top: 15px;
}
.p-main-left>div>img+img{
  margin-left: 15px;
}
/* 第一部分右边1 */
.p-main-right h1{
font-size:35px;
color:#fa9dac;
font-weight:560;
position: relative;
margin-bottom: 20px;
margin-top: 10px;
}
.p-main-right h1 img{
  position: absolute;
  width: 20px;
  }

  .p-main-right h4{
    font-weight: 400;
    line-height:1.5;
    color:#333;
    margin-bottom: 20px;
  }
  .p-main-right h2{
    font-size:30px;
    font-weight: 800;
    margin-bottom: 20px;
  }
  .p-main-right>span:nth-child(1){
    color:#ccc;
  }
  .p-main-right .cweight>div{
    display: inline-block;
    position: relative;
    margin-top:20px;
    margin-bottom:10px;
    margin-right:15px;
    padding:3px 7px;
    border-radius:5px;
    color:white;
    cursor: pointer;
    background-color: #fa9dac;
  }
  .cweight{
    margin-bottom:15px;
  }
  .p-main-right .cweight>div>i{
    position:absolute;
    color:white;
    background-color: #fa9dac;
    /* border:2px solid white; */
    border-radius:50%;
    left:-6px;
    top:-6px;
  }
  .p-main-right .details>div{
    display: inline-block;
    width:213px;
    line-height:22px;
    /* float:left; */
    margin-bottom:18px;
  }
  .details{
    margin-top: 20px;
    
  }
  .count{
    margin-top:20px;
  }
  .count>h3{
    display:inline-block;
    padding:5px 10px;
    font-size: 30px;
    padding:0;
    margin-bottom:20px;

  }
  .count>h3.iconfont:before{
    cursor: pointer;
    color:#fa9dac;
  }
  .count>div{
    display: inline-block;
    width:20px;
    height:30px;
  }
  .count{
    /*双击文字、input等，出现的蓝色底色，如何去除*/
    -moz-user-select:none;/*火狐*/
    -webkit-user-select:none;/*webkit浏览器*/
    -ms-user-select:none;/*IE10*/
    /*-khtml-user-select:none;!*早期浏览器*!*/
    user-select:none;
  }
  .count>h3>input{
    padding:0;
    font-size: 27px;
    font-weight: 500;
    /* margin:0 15px; */
    color:#fa9dac;
    text-align:center;
    width:65px;
  }
 .buy>span{
  cursor: pointer;
  border:1px solid #fa9dac;
  display: inline-block;
  text-align: center;
  padding:6px;
  width:130px;
  margin: 10px 20px 0 0;
  border-radius:5px;
 }
 .buy>span:nth-child(2){
  background-color: #fa9dac;
  color:white;
 }
/* 第一部分右边2 */
/* 第一部分2 */
hr{
  border:0.5px solid #ccc;
}
/* 第二部分商品详情开始1 */
.p-details{
  padding-top:80px;
}
.p-details .detail-one>h5{
  display:inline-block;
  color:#878787;
  margin-left:50px;
  line-height:30px;
  font-size:14px;
  cursor:pointer;
}
.detail-one{
  position: relative;
}
.p-details .detail-one .xian{
border:1.5px solid #fa9dac;
width:50px;
position: absolute;
left: 50px;
top: 36px;
transition:all .6s linear;
/* height:50px; */
display:inline-block;
}
.p-details .detail-one>h5:nth-child(2):hover +.xian{
  left:180px;
}
.detail-two{
  margin-top:40px;
  display:block;
  margin-left:100px;
}
.detail-two>span{
  display: inline-block;
  width:200px;
  color:#878787;
  font-size:14px;
  margin-bottom:15px;
}
.detail-two h5{
  color:red;
  /* text-align: center; */
  margin:20px;
  font-size:15px;
  letter-spacing:5px;
}
.detail-two h3{
  color:#333;
  line-height:3;
  /* text-align: center; */
  font-size:15px;
  letter-spacing:5px;
}
/* 图片区域开始1 */
.pro-img{
  margin-top:50px;
}
.pro-img>img,#lg_img>img{
  width: 100%;
}

/* 图片区域开始2 */
/* 配送区域开始1 */
.distribution{
  font-size:14px;
  padding-bottom:20px;
  border-bottom:1px solid #fa9dac;
}
.distribution>div>i{
  display:inline-block;
  background-color: #fa9dac;
  color:white;
  padding:2px 8px;
  border-radius:5px;
  margin-right:10px;
  /* line-height:1.6; */
  margin-bottom:15px;
}
/* 配送区域开始2 */
/* 第二部分商品详情开始2 */
</style>