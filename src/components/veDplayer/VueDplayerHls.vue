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
        defaultQuality: 0 //默认是普清
      }
    }));
    //监听播放
    player.on("play", () => {
      this.$emit("play");
    });
    //监听暂停
    player.on("pause", () => {
      this.$emit("pause");
    });
    //监听可以开始播放
    player.on("canplay", () => {
      this.$emit("canplay");
    });
    player.on("playing", () => {
      this.$emit("playing");
    });
    //监听视频结束
    player.on("ended", () => {
      this.$emit("ended");
    });
    //监听错误
    player.on("error", () => {
      this.$emit("error");
    });
    //  let str = `
    //  莫笑农家腊酒浑，丰年留客足鸡豚
    //  山重水复疑无路，柳暗花明又一村
    //  萧鼓追随春社近，衣冠简朴古风存
    //  从今若许闲乘月，拄杖无时夜叩门
    //  风急天高猿啸哀，渚清沙白鸟飞回
    //  无边落木萧萧下，不尽长江滚滚来
    //  万里悲秋常作客，百年多病独登台，
    //  艰难苦恨繁霜鬓，潦倒新停浊酒杯
    //  `;
    console.info(this.dp);
  }
};
</script>
