<template>
 <div class="nothing">
   <img :src="myimg" alt="">
   <p>{{msg}}</p>

 </div>
</template>
<script>
export default {
  name:"Home-stitle",
  props:{
    myimg:{default:"images/index/kuku.png"},
    msg:{default:"没有这个商品哦~~~~"}
  },
  data (){
    return{}
  },
  methods:{

  },created(){
    
  }
}
</script>
<style scoped>
  .nothing{
    width: 100%;
    background-color: rgba(255,255,255,0.7);
    padding:50px 0;
  }
  .nothing img{
    display:block;
    margin:0 auto;
    width:40%;
  }
  .nothing p{
    text-align: center;
  }
</style>