<template>
  <div class="vibox">
    <main id="vi">
      <div class="video">
         <v-DPlayer class="video_box"></v-DPlayer>
        <!-- <DPlayer></DPlayer> -->
       <!--  <m-video class="video_box"></m-video> -->
      </div>
      <div class="comment">
        <comment></comment>
      </div>
    </main>
  </div>
</template>
<script>
import vDPlayer from "@/components/vDPlayer";
import DPlayer from "@/components/DPlayer";
import MVideo from "@/components/MVideo";
import comment from "@/components/comment";
export default {
  components: {
    comment,
    MVideo,
    vDPlayer,
    DPlayer
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
.vibox {
  background: #f0d086;
  #vi {
    width: 100%;
    height: 100%;
    display: flex;
    .video {
      padding: 40px;
      height: 100%;
      width: 80%;
      .video_box {
        border-radius: 15px;
      }
    }
    .comment {
      height: 100%;
      width: 20%;
    }
  }
}
</style>
