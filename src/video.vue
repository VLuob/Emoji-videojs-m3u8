<template>
  <div>
    <h1 @click="$router.push('/')">VIDEO</h1>
    <!--  <drar-resize>123 </drar-resize> -->
    <MVideo></MVideo>
  </div>
</template>
<script>
import MVideo from "@/components/MVideo";
import DrarResize from "@/components/DrarResize";
export default {
  components: {
    MVideo,
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
