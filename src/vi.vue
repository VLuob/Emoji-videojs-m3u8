<template>
  <main id="vi">
    <div class="video">
      <v-DPlayer class="video_box"></v-DPlayer>
      <!--  <MVideo class="video"></MVideo> -->
    </div>
    <div class="comment">
      <comment></comment>
    </div>
  </main>
</template>
<script>
import vDPlayer from "@/components/vDPlayer";
import MVideo from "@/components/MVideo";
import comment from "@/components/comment";
export default {
  components: {
    comment,
    MVideo,
    vDPlayer
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    console.log(window.screen.height);
  },
  methods: {}
};
</script>
<style scoped lang="less">
#vi {
  width: 100%;
  height: 100%;
  display: flex;
  .video {
    height: 100%;
    width: 80%;
    padding: 89px;
    background: orange;
    .video_box {
      border-radius: 15px;
      border: 1px solid #f0d086;
      overflow: hidden;
    }
  }
  .comment {
    height: 100%;
    width: 20%;
  }
}
</style>
