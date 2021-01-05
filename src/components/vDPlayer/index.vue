<template>
  <d-player ref="player" id="player" :options="options" @play="play"></d-player>
</template>
<script>
import VueDPlayer from "vue-dplayer";
import "vue-dplayer/dist/vue-dplayer.css";
export default {
  name: "VDPlayer",
  components: {
    "d-player": VueDPlayer
  },
  data() {
    return {
      options: {
        live: true, //直播
        theme: "#FADFA3", //主题色
        loop: true, //循环
        screenshot: false, //开启截图
        hotkey: true, //热键
        airplay: true, //在 Safari 中开启 AirPlay
        preload: "auto", //视频预加载
        volume: 0.7, //默认音量
        playbackSpeed: [0.5, 0.75, 1, 1.25, 1.5, 2], //可选的播放速率，可以设置成自定义的数组
        video: {
          url:
            "https://www.libdiy.com/upload/article/20138_zhibianniu/2020/7-30/videos/202007301359264470.mp4",
          //"https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8",
          pic: "http://vjs.zencdn.net/v/oceans.png", //视频封面
          thumbnails: "http://vjs.zencdn.net/v/oceans.png", //视频缩略图
          type: "auto" //视频类型
          // quality: [], //清晰度
          // defaultQuality: "" //默认播放视频的清晰度
        },
        lang: "zh-cn", //语言
        logo: require("@/assets/img/示爱.gif"), //logo在左上角展示一个 logo，你可以通过 CSS 调整它的大小和位置
        autoplay: true, //自动播放
        contextmenu: [
          //右键菜单
          {
            text: "custom1",
            link: "https://github.com/DIYgod/DPlayer"
          },
          {
            text: "custom2",
            click: player => {
              console.log(player);
            }
          }
        ],
        highlight: [
          {
            time: 20,
            text: "这是第 20 秒"
          },
          {
            time: 120,
            text: "这是 2 分钟"
          }
        ]
      }
    };
  },
  computed: {
    player() {
      return this.$refs.player.dp;
    }
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
    removeAbout() {
      // 以下为隐藏一些作者的信息和视频播放源 如不需要可删除
      document.querySelector(".dplayer-menu").remove(); //隐藏右键菜单
      document.querySelector(".dplayer-mask").remove();
      document.querySelector(".dplayer-notice").remove(); //取消提示
      document.querySelector(".dplayer-info-panel-item-url").remove(); //隐藏播放源
      // let length = document.querySelectorAll(".dplayer-menu-item").length;
      // document.querySelectorAll(".dplayer-menu-item")[length - 2].remove(); // 去掉作者信息
      // document.querySelectorAll(".dplayer-menu-item")[length - 1].remove(); // 去掉作者信息
    }
  }
};
</script>
<style scoped lang="less"></style>
