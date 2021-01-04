<template>
  <div class="videodemo">
    <d-player ref="player" id="player" :options="options" @play="play"
      >VueDPlayer</d-player
    >
  </div>
</template>
<script>
import VueDPlayer from "vue-dplayer";
export default {
  name: "VDPlayer",
  components: {
    "d-player": VueDPlayer
  },
  data() {
    return { options: {
        live: true,
    } };
  },
  computed: {
    player() {
      return this.$refs.player;
    }
  },
  mounted() {
    const player = this.player.dp;
    player.play();
    console.log(player)
    setTimeout(() => {
      player.pause();
    }, 2000);
    this.removeAbout();
  },
  methods: {
    play() {
      console.log("play callback");
    },
    removeAbout() {
      // 以下为隐藏一些作者的信息和视频播放源 如不需要可删除
      document.querySelector(".dplayer-menu").remove(); //隐藏右键菜单
      document.querySelector(".dplayer-mask").remove();
      document.querySelector(".dplayer-info-panel-item-url").remove(); //隐藏播放源
      // let length = document.querySelectorAll(".dplayer-menu-item").length;
      // document.querySelectorAll(".dplayer-menu-item")[length - 2].remove(); // 去掉作者信息
      // document.querySelectorAll(".dplayer-menu-item")[length - 1].remove(); // 去掉作者信息
    }
  }
};
</script>
<style scoped lang="less">
</style>
