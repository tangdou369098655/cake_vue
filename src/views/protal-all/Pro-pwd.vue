<template>
  <!-- 修改密码模块1 -->
  <div class="personal-right ">
    <div class="myorder">
      <ul class="myorder-top clearfix">
        <li class="top-one">修改密码</li>
      </ul>
      <form action="#">
        <ul class="myorder-myself">
          <li>
            <span>原始密码：</span>
            <input type="password" value="" autofocus>
          </li>
          <li>
            <span>&emsp;新密码：</span>
            <input type="password" value="" autofocus>
          </li>
          <li>
            <span>再次输入：</span>
            <input type="password" value="" min="5">
          </li>
          <li class="up-submit">
            <input type="submit" value="提交修改">
          </li>
        </ul>

      </form>
    </div>
  </div>
  <!-- 修改密码模块2 -->
</template>
<script>
  import axios from 'axios'
  export default {
    name: "Pro-pwd",
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