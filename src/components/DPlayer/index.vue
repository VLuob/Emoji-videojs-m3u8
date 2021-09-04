<template>
  <div></div>
</template>
<script>
import DPlayer from "DPlayer";
export default {
  name: "dPlayer",
  props: {
    theme: {
      type: String,
      default: "#FADFA3"
    },
    logo: {
      type: String,
      default: ""
    },
    live: {
      type: Boolean,
      default: false
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    video: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      dp: null
    };
  },
  created() {
    localStorage.clear();
  },
  mounted() {
    this.initPlayer();
    //this.removeAbout();
  },
  methods: {
    initPlayer() {
      const player = (this.dp = new DPlayer({
        container: this.$el, //Dom
        volume: 0, //默认音量
        loop: false, //循环
        lang: "zh-cn", //语言
        airplay: true, //在 Safari 中开启 AirPlay
        highlight: [], //高亮时刻
        preload: "auto", //视频预加载
        contextmenu: [], //右键菜单
        live: this.live, //直播
        logo: this.logo, //logo在左上角展示一个 logo，你可以通过 CSS 调整它的大小和位置
        video: this.video, //播放列表
        theme: this.theme, //主题色
        hotkey: !this.live, //热键
        screenshot: !this.live, //开启截图
        autoplay: this.autoplay, //自动播放
        playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2], //可选的播放速率，可以设置成自定义的数组
        video: {
          //"http://www.w3school.com.cn/example/html5/mov_bbb.mp4",
          url:
            "https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8",
          /* "https://www.libdiy.com/upload/article/20138_zhibianniu/2020/7-30/videos/202007301359264470.mp4", */
          //"https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8",
          //pic: "http://vjs.zencdn.net/v/oceans.png", //视频封面
          //thumbnails: "http://vjs.zencdn.net/v/oceans.png", //视频缩略图
          //type: "hls", //视频类型
          // quality: [], //清晰度
          quality: [
            // 设置多个质量的视频
            {
              name: "高清",
              url:
                "https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8",
              type: "auto" // 'auto', 'hls', 'flv', 'dash', 'webtorrent', 'normal' 或 其他自定义类型
            },
            {
              name: "标清",
              url:
                "https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8",
              type: "auto"
            }
          ],
          defaultQuality: 0 // 默认是高清
          //defaultQuality: "" //默认播放视频的清晰度
        }
      }));
      player.on("play", () => {
        this.$emit("play");
      });
      player.on("ended", () => {
        this.$emit("ended");
      });
      player.on("error", () => {
        this.$emit("error");
      });
      player.on("pause", () => {
        this.$emit("pause");
      });
      player.on("playing", () => {
        this.$emit("playing");
      });
      player.on("canplay", () => {
        this.$emit("canplay");
      });
      player.on("quality_start", () => {
        this.$emit("quality_start");
        player.on("play");
      });
    },
    setVideoTime(time) {
      this.dp.seek(time);
    },
    removeAbout() {
      let el = document.querySelector(".dplayer-video");
      el.setAttribute("tabindex", "-1");
      el.setAttribute("crossorigin", "anonymous");
      el.setAttribute("role", "application");
      document.querySelector(".dplayer-menu").remove(); //隐藏右键菜单
      document.querySelector(".dplayer-mask").remove();
      if (this.live) {
        document.querySelector(".dplayer-notice").remove(); //取消提示
        document.querySelector(".dplayer-play-icon").remove(); //播放按钮
        document.querySelector(".dplayer-bezel-icon").remove(); //中间播放按钮
        document.querySelector(".dplayer-video-wrap").style.pointerEvents =
          "none";
      }
      document.querySelectorAll(
        ".dplayer-label"
      )[1].innerHTML = `<span class="dplayer-label">循环</span>`;
      document.querySelector(".dplayer-info-panel-item-url").remove(); //隐藏播放源
    }
  },
  destroyed() {
    this.dp.destroy();
  }
};
</script>
<style scoped></style>
