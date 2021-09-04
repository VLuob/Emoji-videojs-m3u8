<template>
  <div class="hello">
    <div class="videodom">
      <d-player
        ref="player"
        @play="play"
        :video="video"
        :contextmenu="contextmenu"
      ></d-player>
    </div>
  </div>
</template>

<script>
import VueDPlayer from "./VueDplayerHls.vue";
export default {
  name: "VeDplayer",
  data() {
    return {
      video: {
        url:
          "https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8",
        type: "hls"
      },
      autoplay: false,
      player: null,
      contextmenu: [
        //   {
        //     text: "GitHub",
        //     link: "https://github.com/MoePlayer/vue-dplayer"
        //   }
      ]
    };
  },
  components: {
    "d-player": VueDPlayer
  },
  methods: {
    play() {
      console.log("play callback");
    }
  },
  mounted() {
    //  let dom = document.querySelector(".videodom");
    //  dom.innerHTML = ` <video src='../zyvideo/test.mp4' autoplay controls></video>`;
    this.player = this.$refs.player.dp;
    let el = document.querySelector(".dplayer-video");
    el.setAttribute("x5-video-player-fullscreen", "true");
    el.setAttribute("webkit-playsinline", "true");
    el.setAttribute("x-webkit-airplay", "true");
    el.setAttribute("playsinline", "true");
    el.setAttribute("x5-playsinline", "");
    el.setAttribute("x5-video-orientation", "portraint");
    // var hls = new Hls();
    // hls.loadSource('https://logos-channel.scaleengine.net/logos-channel/live/biblescreen-ad-free/chunklist_w630020335.m3u8');
    // hls.attachMedia(this.player);
    document.addEventListener("WeixinJSBridgeReady", function() {
      console.log("监听播放");
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .hello {
  height: 1px;
  width: 1px;
} */
</style>
