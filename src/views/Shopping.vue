<template>
  <div>
    <div class="infinite-list-wrapper" style="overflow:auto">
      <ul
          class="list"
          v-infinite-scroll="load"
          infinite-scroll-disabled="disabled">
        <li v-for="v in count">
          <img src="../img/img.png">
          <h4>{{ v.des }}</h4>
          <p>价格:{{ v.price }}</p>
        </li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
    </div>
</template>

<script>
export default {
  name: "Shopping",
  data() {
    return {
      count: [ {
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
          des: '这是第四个描述',
          price: 198
        },
      ],
      addCount:[
        {
          src: '../img/img.png',
          des: '这是第五个描述',
          price: 198
        },
        {
          src: '../img/img.png',
          des: '这是第六个描述',
          price: 198
        },
        {
          src: './img/img.png',
          des: '这是第七个描述',
          price: 211
        },
        {
          src: './img/img.png',
          des: '这是第八个描述',
          price: 198
        }
      ],
      loading: false,
    }
  },
  computed: {
    noMore () {
      return this.count >= 10
    },
    disabled () {
      return this.loading || this.noMore
    },
    loading(){
      this.count=this.addShopping()
      return false
    }
  },
  methods: {
    load () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    addShopping(){
      return this.count=this.addCount
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