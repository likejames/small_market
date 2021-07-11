<template>
  <div class="or-body">
    <p>
      当地时间7月10日，海地第一夫人马蒂娜·莫伊兹在遇袭3天后首次发声，在其社交媒体上发布了一段2分20秒的音频消息。在语音中，她指责“雇佣兵”刺杀了总统莫伊兹，并认为其犯罪动机与总统莫伊兹打算举行新宪法公投有关。

      马蒂娜·莫伊兹在袭击中受伤，目前正在美国迈阿密接受治疗。

      截至目前，在涉嫌刺杀总统莫伊兹的28人中，警方已抓捕20人，其中包括18名哥伦比亚人和2两名海地裔美国人，另击毙3人，仍有5人在逃。（总台记者 侯佳琦）
    </p>
    <div class="infinite-list-wrapper" style="overflow:auto">
      <ul
          class="list"
          v-infinite-scroll="load"
          infinite-scroll-disabled="disabled">
        <li v-for="i in count" class="list-item">{{ i }}</li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 4,
      loading: false
    }
  },
  computed: {
    noMore () {
      return this.count >= 20
    },
    disabled () {
      return this.loading || this.noMore
    }
  },
  methods: {
    load () {
      this.loading = true
      setTimeout(() => {
        this.count += 10
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style scoped>
.or-body{
  position: absolute;
  top: 600px;
  text-align: center;
}
</style>