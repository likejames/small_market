<template>
  <div>
    <Header></Header>
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
    </div>
    <RouterView></RouterView>
  </div>
</template>
<script>
import Header from "@/components/Header";
export default {
  name: "Commodity",
  components: {Header},
  data() {
    return {
      navList: [
        { name: "/shopping", navItem: "热卖商品" },
        { name: "/productin", navItem: "商品资讯" }
      ],
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
}
</script>
<style>
.menu-style{
  position: absolute;
  top: 480px;
  text-align: center;
}
</style>