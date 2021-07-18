<template>
  <el-container class="container-style">
    <el-header>Header</el-header>
    <el-container>
      <el-aside :width="collapse ? '64px' :'200px' ">
        <div class="toggle-style" @click="changeCode">|||</div>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="gray"
            text-color="#fff"
            active-text-color="#ffd04b" :unique-opened="true" :collapse=collapse :collapse-transition="false" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
              <el-menu-item index="/editShopping">商品编辑</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>导航二</span>
            </template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-document"></i>
              <span>导航三</span>
            </template>
            <el-menu-item index="3-1">选项1</el-menu-item>
            <el-menu-item index="3-2">选项2</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>导航四</span>
            </template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
          </el-submenu>
<!--          <el-menu-item index="2">-->
<!--            <i class="el-icon-menu"></i>-->
<!--            <span slot="title">导航二</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="3">-->
<!--            <i class="el-icon-document"></i>-->
<!--            <span slot="title">导航三</span>-->
<!--          </el-menu-item>-->
<!--          <el-menu-item index="4">-->
<!--            <i class="el-icon-setting"></i>-->
<!--            <span slot="title">导航四</span>-->
<!--          </el-menu-item>-->
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "AdminInfo",
  data(){
    return{
      collapse:false
    }
  },
  methods:{
    changeCode(){
      this.collapse=!this.collapse
    }
  }
}
</script>

<style scoped>
.el-header{
  background-color: dimgrey;
}

.el-aside{
  background-color: gray;
}
.el-main{
  background-color: white;
}
.container-style{
  height: 100%;
}
.toggle-style{
  background-color: burlywood;
  text-align: center;
  cursor: pointer;
}
</style>