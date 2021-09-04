<template>
  <vueMiniPlayer
    ref="vueMiniPlayer"
    :video="video"
    :mutex="true"
    @fullscreen="handleFullscreen"
  />
</template>

<script>
import Vue from "vue";
import vueMiniPlayer from "vue-mini-player";
import "vue-mini-player/lib/vue-mini-player.css";
Vue.use(vueMiniPlayer);
export default {
  computed: {
    $video() {
      return this.$refs.vueMiniPlayer.$video;
    }
  },
  data() {
    return {
      video: {
        url:
          "https://api.dogecloud.com/player/get.mp4?vcode=5ac682e6f8231991&userId=17&ext=.mp4",
        cover: "https://i.loli.net/2019/06/06/5cf8c5d9c57b510947.png",
        muted: false,
        loop: false,
        preload: "auto",
        poster: "",
        volume: 1,
        autoplay: false
      }
    };
  },
  mounted() {},
  methods: {
    handleFullscreen() {}
  }
};
</script>
