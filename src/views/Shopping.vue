<template>
  <div class="infinite-list-wrapper">
    <el-row>
      <el-col :span="4" v-for="(item) in tabledata" :key="item.classId" :offset="1">
        <div style="margin-top:15px">
          <el-card :body-style="{ padding: '0px'}" shadow="hover">
            <img src="../img/img.png"
                 class="image" @click="isLogin">
            <div>
              <span>描述：{{ item.des }} 价格：{{ item.price }}</span><br>
              <div class="bottom clearfix">
                <time class="time"><strong>创建时间:</strong>{{ item.date }}</time>
                <el-button type="text" class="button" @click="add(item)">查看</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <div>
      <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
      </el-pagination>
    </div>
  </div>
</template>

<script>

export default {
  name: "Shopping",
  data() {
    return {
      tabledata: [{
        src: '../img/img.png',
        des: '这是第一个描述',
        price: 198
      },
        {
          src: '../img/img.png',
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
          des: '这是第三个描述',
          price: 211
        },
        {
          src: './img/img.png',
          des: '这是第一个描述',
          price: 198
        },
        {
          src: '../img/img.png',
          des: '这是第一个描述',
          price: 198
        },
        {
          src: '../img/img.png',
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
          des: '这是第三个描述',
          price: 211
        },
        {
          src: './img/img.png',
          des: '这是第一个描述',
          price: 198
        }
      ],
      loading: false,
    }
  },
  methods: {
    isLogin() {
      const _this = this
      _this.$router.push("/test")
    }
  }
}
</script>

<style scoped>
.infinite-list-wrapper {
  position: absolute;
  top: 600px;
  text-align: center;
}
</style>