$(function () {
  //获得地址栏中的？product_id=2中的2
  if (location.search !== "") {
    var product_id = location.search.split("=")[1]
    console.log(product_id);
    $.ajax({
      url: "http://127.0.0.1:3000/details",
      type: "get",
      data: {
        product_id
      }, //{lid:lid},"lid="+lid 这里是简写
      dataType: "json",
      success: function (result) {
        console.log(result);
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
        $("#cake_name").html(cake_name); //商品名称
        $("#nav_name").html(cake_name); //面包屑导航商品名称
        $("#advertisement").html(advertisement); //商品简介
        $("#price").html(`￥${price}`); //商品价格
        $("#kinds").html(kind_name);
        console.log(spec)
        spec=spec.split("/");
        console.log(spec)
        //设置商品尺寸
        var html="";
        // for(var sp of spec){
        //   html+=`<div>${spec[sp]}
        //   <i class=""></i>
        // </div>`
        // }
        spec.forEach(function(value,i){
          　　console.log('forEach遍历:'+i+'--'+value);
          html+=`<div>${value}
          <i class="${i==0?'iconfont icon-right-1':''}"></i></div>`
          })
        $("#specss").html(html);
        console.log(html)
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
        $("#specss>div").click(
          function(){
            $(this).parent().children().children().removeClass("iconfont icon-right-1")
            $(this).children().addClass("iconfont icon-right-1");
          
          }
        )
      }
    })
  }
})