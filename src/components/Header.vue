<template>
  <div class="head-style">
    <div>
      <el-avatar class="block" size="200" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <span class="span-text">小雨商城</span>
    </div>
    <div class="button-style">
      <el-button type="primary" round @click="returnAdmin">管理员</el-button>
      <el-button type="warning" round class="el-button1">登录</el-button>
      <el-button type="danger" round class="el-button2">注册</el-button>
    </div>
    <span class="demonstration"></span>
    <el-carousel height="300px" class="carousel">
      <el-carousel-item v-for="(item,i) in img_list" :key="i">
<!--                <img :src="item"  style="width:100px; height:130px">-->
        <img src="../img/images/banner/banner_01.png" alt="">
      </el-carousel-item>
    </el-carousel>
    <el-divider class="icon-style"><i class="el-icon-mobile-phone"></i></el-divider>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      //图片地址数组
      img_list: ["../img/images/banner/banner_01.png", "../img/images/banner/banner_02.png", "../img/images/banner/banner_03.png"]
    };
  },
  methods:{
    returnAdmin(){
      const _this = this
      _this.$router.push("/admin")
    }
  }
}
</script>
<style>
.button-style {
  position: absolute;
  right: 100px;
  top: 30px;
}

.carousel {
  position: absolute;
  top: 90px;
}
.span-text{
  position: absolute;
  color: coral;
  top: 30px;
  left: 440px;
  font-size:20px
}
.block{
  position: absolute;
  left: 400px;
  top: 20px;
}
.icon-style {
  position: absolute;
  top: 100px;
  text-align: center;
}
.head-style{
}
</style>
