<template>
  <div>
    <h1 @click="$router.push('/')">VIDEO</h1>
    <!-- <drar-resize>123 </drar-resize> -->
    <!--  <MVideo></MVideo> -->
    <!--   <v-DPlayer></v-DPlayer> -->
    <!-- dplayer -->
    <veDplayer />
    <!-- Chimee canvasVideo -->
    <cavasVideo />
    <!--   <TcPlayer /> -->
    <!--  <zyvideo /> -->
    <!--  <vuevideo /> -->
    <!-- <nPlayer></nPlayer> -->
    <!-- <vueMPlayer /> -->
  </div>
</template>
<script>
import VConsole from "vconsole";
import MVideo from "@/components/MVideo";
import zyvideo from "@/components/zyvideo";
import nPlayer from "@/components/nPlayer";
import TcPlayer from "@/components/TcPlayer";
import vuevideo from "@/components/vuevideo";
import vDPlayer from "@/components/vDPlayer";
import veDplayer from "@/components/veDplayer";
import cavasVideo from "@/components/cavasVideo";
import DrarResize from "@/components/DrarResize";
import vueMPlayer from "@/components/vueMPlayer";
export default {
  components: {
    MVideo,
    nPlayer,
    zyvideo,
    vuevideo,
    TcPlayer,
    vDPlayer,
    veDplayer,
    DrarResize,
    cavasVideo,
    vueMPlayer
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    const vConsole = new VConsole({ maxLogNumber: 1000 });
  },
  methods: {},
  destroyed() {
    vConsole.destroy();
  }
};
</script>
<style scoped lang="less">
h1 {
  cursor: pointer;
}
</style>
