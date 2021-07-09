<template>
  <div id="app">
    <div>
      <Header></Header>
    </div>
    <div class="menu-style">
      <el-menu
          :default-active="this.$route.path"
          class="el-menu-demo"
          mode="horizontal"
          router
          @select="handleSelect">
        <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
          <template slot="title">
            <i class="el-icon-s-platform"></i>
            <span> {{ item.navItem }}</span>
          </template>
        </el-menu-item>
      </el-menu>
    <div class="block1">
      <ul>
        <li v-for="v in json.list">
<!--          <img v-bind:src="v.src" alt="">-->
          <img src="./img/img.png">
          <h4>{{v.des}}</h4>
          <p>价格:{{v.price}}</p>
        </li>
      </ul>
    </div>
    <router-view/>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header";

export default {
  name: "App",
  components: {Header},
  data() {
    return {
      json: {
        list: [
          {
            src: './img/img.png',
            des: '这是第一个描述',
            price: 198
          },
          {
            src: './img/img.png',
            des: '这是第二个描述',
            price: 198
          },
          {
            src: './img/img.png',
            des: '这是第三个描述',
            price: 211
          },
          {
            src: './img/img.png',
            des: '这是第一个描述',
            price: 198
          },
          {
            src: './img/img.png',
            des: '这是第二个描述',
            price: 112
          },
          {
            src: './img/img.png',
            des: '这是第三个描述',
            price: 423
          }
        ]
      },
      navList: [
        { name: "/", navItem: "商品列表" },
        { name: "/test1", navItem: "商城" },
        { name: "/test2", navItem: "我的" },
      ],
    }
  }
}
</script>
<style>
.block1 {
  position: absolute;
  top: 80px;
  text-align: center;
}
.menu-style{
  position: absolute;
  top: 480px;
  text-align: center;
}
</style>
