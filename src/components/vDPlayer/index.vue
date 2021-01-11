<template>
  <d-player ref="player" id="player" :options="options" @play="play" />
</template>
<script>
import dPlayer from "vue-dplayer";
import "vue-dplayer/dist/vue-dplayer.css";
export default {
  name: "VDPlayer",
  components: {
    dPlayer
  },
  data() {
    return {
      options: {
        volume: 0, //默认音量
        live: false, //直播
        loop: false, //循环
        lang: "zh-cn", //语言
        airplay: true, //在 Safari 中开启 AirPlay
        hotkey: false, //热键
        autoplay: true, //自动播放
        highlight: [], //高亮时刻
        theme: "#FADFA3", //主题色
        preload: "auto", //视频预加载
        contextmenu: [], //右键菜单
        screenshot: false, //开启截图
        playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2], //可选的播放速率，可以设置成自定义的数组
        logo: require("@/assets/img/示爱.gif"), //logo在左上角展示一个 logo，你可以通过 CSS 调整它的大小和位置
        video: {
          url:
            "https://www.libdiy.com/upload/article/20138_zhibianniu/2020/7-30/videos/202007301359264470.mp4",
          //"https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8",
          //pic: "http://vjs.zencdn.net/v/oceans.png", //视频封面
          //thumbnails: "http://vjs.zencdn.net/v/oceans.png", //视频缩略图
          type: "auto" //视频类型
          // quality: [], //清晰度
          // defaultQuality: "" //默认播放视频的清晰度
        }
      }
    };
  },
  computed: {
    player() {
      return this.$refs.player.dp;
    }
  },
  created() {
    this.options.live = true;
  },
  mounted() {
    this.removeAbout();
  },
  methods: {
    play() {
      const player = this.player;
      player.seek(20);
      console.log("play callback");
    },
    setVideoUrl(url) {
      this.player.switchVideo({
        url: url
      });
    },
    removeAbout() {
      document.querySelector(".dplayer-menu").remove(); //隐藏右键菜单
      document.querySelector(".dplayer-mask").remove();
      if (this.options.live) {
        document.querySelector(".dplayer-notice").remove(); //取消提示
        document.querySelector(".dplayer-play-icon").remove(); //播放按钮
        document.querySelector(".dplayer-bezel-icon").remove(); //中间播放按钮
      }
      document.querySelectorAll(
        ".dplayer-label"
      )[1].innerHTML = `<span class="dplayer-label">循环</span>`;
      document.querySelector(".dplayer-info-panel-item-url").remove(); //隐藏播放源
    }
  }
};
</script>
<style lang="less">
.dplayer-video-wrap {
  pointer-events: none;
}
</style>
