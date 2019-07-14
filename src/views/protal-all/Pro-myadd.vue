<template>
  <!-- 收货地址模块1 -->
  <div class="personal-right  ">
    <div class="myorder">
      <ul class="myorder-top clearfix">
        <li class="top-one">收货地址</li>
      </ul>
      <ul class="address-all">
        <li class="address-item address-active">
          <ul class="clearfix">
            <li>
              <span>收货姓名：</span>
              <input type="text">
            </li>
            <li>
              <span>电话号码：</span>
              <input type="text">
            </li>
            <li>
              <form class="layui-form" action="">
                <div class="layui-form-item">
                  <label class="layui-form-label">县区地址：</label>
                  <div class="layui-input-inline">
                    <select name="quiz1">
                      <option value="">请选择省</option>
                      <option value="浙江" selected="">浙江省</option>
                      <option value="你的工号">江西省</option>
                      <option value="你最喜欢的老师">福建省</option>
                    </select>
                  </div>
                  <div class="layui-input-inline">
                    <select name="quiz2">
                      <option value="">请选择市</option>
                      <option value="杭州">杭州</option>
                      <option value="宁波" disabled="">宁波</option>
                      <option value="温州">温州</option>
                      <option value="温州">台州</option>
                      <option value="温州">绍兴</option>
                    </select>
                  </div>
                  <div class="layui-input-inline">
                    <select name="quiz3">
                      <option value="">请选择县/区</option>
                      <option value="西湖区">西湖区</option>
                      <option value="余杭区">余杭区</option>
                      <option value="拱墅区">临安市</option>
                    </select>
                  </div>
                </div>
              </form>
            </li>
            <li>
              <span>详细地址：</span>
              <input type="text">
            </li>
            <li>
              <span>其它备注：</span>
              <input type="text">
            </li>
            <li>
              <span class="btn-pink">设为默认</span>
              <span class="btn-pink">修改信息</span>
            </li>
          </ul>
        </li>
        <li class="address-item ">
          <ul class="clearfix">
            <li>
              <span>收货姓名：</span>
              <input type="text">
            </li>
            <li>
              <span>电话号码：</span>
              <input type="text">
            </li>
            <li>
              <form class="layui-form" action="">
                <div class="layui-form-item">
                  <label class="layui-form-label">县区地址：</label>
                  <div class="layui-input-inline">
                    <select name="quiz1">
                      <option value="">请选择省</option>
                      <option value="浙江" selected="">浙江省</option>
                      <option value="你的工号">江西省</option>
                      <option value="你最喜欢的老师">福建省</option>
                    </select>
                  </div>
                  <div class="layui-input-inline">
                    <select name="quiz2">
                      <option value="">请选择市</option>
                      <option value="杭州">杭州</option>
                      <option value="宁波" disabled="">宁波</option>
                      <option value="温州">温州</option>
                      <option value="温州">台州</option>
                      <option value="温州">绍兴</option>
                    </select>
                  </div>
                  <div class="layui-input-inline">
                    <select name="quiz3">
                      <option value="">请选择县/区</option>
                      <option value="西湖区">西湖区</option>
                      <option value="余杭区">余杭区</option>
                      <option value="拱墅区">临安市</option>
                    </select>
                  </div>
                </div>
              </form>
            </li>
            <li>
              <span>详细地址：</span>
              <input type="text">
            </li>
            <li>
              <span>其它备注：</span>
              <input type="text">
            </li>
            <li>
              <span class="btn-pink">设为默认</span>
              <span class="btn-pink">修改信息</span>
            </li>
          </ul>
        </li>
        <li class="address-item address-add">
          <ul class="clearfix">
            <li>
              <span class="icon iconfont icon-jiahao1 btn-white">&emsp;点击添加新地址</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  <!-- 收货地址模块2 -->
</template>
<script>
  import axios from 'axios'
  export default {
    name: "Pro-myadd",
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