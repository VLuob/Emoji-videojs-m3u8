<template>
  <div>
    <h1 @click="$router.push('/')">VIDEO</h1>
    <!--  <drar-resize>123 </drar-resize> -->
    <!--  <MVideo></MVideo> -->
    <!-- <d-player></d-player> -->
    <!--  <v-DPlayer></v-DPlayer> -->
    <nPlayer></nPlayer>
  </div>
</template>
<script>
import MVideo from "@/components/MVideo";
import nPlayer from "@/components/nPlayer";
import vDPlayer from "@/components/vDPlayer";
import DrarResize from "@/components/DrarResize";
export default {
  components: {
    MVideo,
    vDPlayer,
    DrarResize,
    nPlayer
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>
<style scoped lang="less">
h1 {
  cursor: pointer;
}
</style>
