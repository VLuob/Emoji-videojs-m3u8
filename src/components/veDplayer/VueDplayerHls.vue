<template>
  <div class="dplayer"></div>
</template>

<script>
import "vue-dplayer/dist/vue-dplayer.css";

import DPlayer from "DPlayer";
export default {
  props: {
    autoplay: {
      type: Boolean,
      default: false
    },
    theme: {
      type: String,
      default: "#FADFA3"
    },
    loop: {
      type: Boolean,
      default: true
    },
    lang: {
      type: String,
      default: "zh-cn"
    },
    screenshot: {
      type: Boolean,
      default: false
    },
    hotkey: {
      type: Boolean,
      default: true
    },
    preload: {
      type: String,
      default: "auto"
    },
    contextmenu: {
      type: Array
    },
    logo: {
      type: String
    },
    video: {
      type: Object,
      required: true,
      validator(value) {
        return typeof value.url === "string";
      }
    }
  },
  data() {
    return {
      dp: null
    };
  },
  mounted() {
    const player = (this.dp = new DPlayer({
      element: this.$el,
      autoplay: this.autoplay,
      theme: this.theme,
      loop: this.loop,
      lang: this.lang,
      screenshot: this.screenshot,
      hotkey: this.hotkey,
      preload: this.preload,
      contextmenu: this.contextmenu,
      logo: this.logo,
      video: {
        url: this.video.url,
        pic: this.video.pic,
        type: this.video.type,
        quality: [
          // 设置多个质量的视频
          {
            name: "普清",
            url:
              "https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8",
            type: "auto"
          },
          {
            name: "高清",
            url:
              "https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8",
            type: "auto" // 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' 或 其他自定义类型
          }
        ],
        defaultQuality: 0 // 默认是高清
      }
    }));
    player.on("play", () => {
      this.$emit("play");
    });
    player.on("pause", () => {
      this.$emit("pause");
    });
    player.on("canplay", () => {
      this.$emit("canplay");
    });
    player.on("playing", () => {
      this.$emit("playing");
    });
    player.on("ended", () => {
      this.$emit("ended");
    });
    player.on("error", () => {
      this.$emit("error");
    });
  }
};
</script>
