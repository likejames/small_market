<template>
  <div class="infinite-list-wrapper" @scroll="mounted()">
      <ul>
        <li v-for="v in count">
          <img src="../img/img.png">
          <h4>{{ v.des }}</h4>
          <p>价格:{{ v.price }}</p>
        </li>
      </ul>
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
          des: '这是第一个描述',
          price: 198
        },
      ],
      loading: false,
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