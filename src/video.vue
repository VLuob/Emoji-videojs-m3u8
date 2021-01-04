<template>
  <div>
    <h1 @click="$router.push('/')">VIDEO</h1>
    <!--  <drar-resize>123 </drar-resize> -->
    <!--  <MVideo></MVideo> -->
    <!-- <d-player></d-player> -->
    <v-DPlayer></v-DPlayer>
  </div>
</template>
<script>
import MVideo from "@/components/MVideo";
import DPlayer from "@/components/DPlayer";
import vDPlayer from "@/components/vDPlayer";
import DrarResize from "@/components/DrarResize";
export default {
  components: {
    MVideo,
    DPlayer,
    vDPlayer,
    DrarResize
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
