<template>
  <div class="zy_media">
    <video poster="./test.jpg" class="video">
      <source src="./test.mp4" type="video/mp4" />
      您的浏览器不支持HTML5视频
      <track kind="metadata" label="segment-metadata" />
    </video>
  </div>
</template>
<script>
import "./zy.media.min.js";
export default {
  name: "zyvideo",
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {
    zymedia("video", {
      mediaTitle: "《疯狂动物城》--腾讯视频",
      nativeControls: false,
      autoplay: false,
      enableVisibilityState: false
    });
    let el = document.querySelector(".video");
    el.setAttribute("tabindex", "1");
    el.setAttribute("x5-video-player-type", "h5");
  },
  methods: {}
};
</script>
<style lang="less">
@import "./zy.media.min.css";
</style>
