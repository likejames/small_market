<template>
  <div>
    <div>
      <el-avatar class="block" size="200" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <span class="span-text">小雨商城</span>
    </div>
    <div class="button-style">
      <el-button type="warning" round class="el-button1">登录</el-button>
      <el-button type="danger" round class="el-button2">注册</el-button>
    </div>
    <span class="demonstration"></span>
    <el-carousel height="300px" class="test">
      <el-carousel-item v-for="(item,i) in img_list" :key="i">
<!--                <img :src="item"  style="width:100px; height:130px">-->
        <img src="../img/images/banner/banner_01.png" alt="">
      </el-carousel-item>
    </el-carousel>
    <el-divider class="test1"><i class="el-icon-mobile-phone"></i></el-divider>
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
  }
}
</script>
<style>
.button-style {
  position: absolute;
  right: 100px;
  top: 20px;
}

.test {
  position: absolute;
  top: 80px;
}
.span-text{
  position: absolute;
  color: coral;
  top: 20px;
  left: 440px;
  font-size:20px
}
.block{
  position: absolute;
  left: 400px;
}
.test1 {
  position: absolute;
  top: 100px;
  text-align: center;
}
</style>
