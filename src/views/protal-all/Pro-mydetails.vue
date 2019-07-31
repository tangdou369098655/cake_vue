<template>
  <!-- 个人信息模块1 -->
  <div class="personal-right ">
    <div class="myorder">
      <ul class="myorder-top clearfix">
        <li class="top-one">我的基本信息</li>
      </ul>
      <form action="#">
        <ul class="myorder-myself">
          <li>
            <span>&emsp;&emsp;头像：</span>
            <img :src="imgurl+'images/index/d7.gif'" alt="">
          </li>
          <li>
            <span>更换头像：</span>
            <input type="file" style="border:0px;padding:0">
          </li>
          <li>
            <span>&emsp;用户名：</span>
            <input type="text" value="糖糖" autofocus>
          </li>
          <li>
            <span>&emsp; &emsp;昵称：</span>
            <input type="text" value="糖糖" autofocus>
          </li>
          <li>
            <span>&emsp; &emsp;年龄：</span>
            <input type="number" value="10" min="5">
          </li>
          <li>
            <span>手机号码：</span>
            <input type="text" value="18625578825" autofocus>
          </li>
          <li>
            <span> &emsp; &emsp;邮箱：</span>
            <input type="email" value="糖糖" autofocus>
          </li>
          <li>
            <span> &emsp; &emsp;生日：</span>
            <input type="date" placeholder="糖糖" autofocus>
          </li>
          <li class="up-submit">
            <input type="submit" value="提交修改">
          </li>
        </ul>

      </form>
    </div>
  </div>
  <!-- 个人信息模块2 -->
</template>
<script>
  import axios from 'axios'
  export default {
    name: "Pro-mydetails",
    props: {

    },
    data() {
      return {}
    },
    methods: {

    },
    created() {

    }
  }
</script>
<style scoped>

</style>