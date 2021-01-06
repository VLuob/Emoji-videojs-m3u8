<template>
  <div class="vibox">
    <main id="vi">
      <div class="video" :class="{ left: isRetract }">
        <v-DPlayer class="video_box" />
        <!-- <DPlayer></DPlayer> -->
        <!--  <m-video class="video_box" /> -->
      </div>
      <div class="comment" :class="{ hide: isRetract }">
        <comment @changeSH="changeSH" :isRetract="isRetract" />
      </div>
    </main>
  </div>
</template>
<script>
import MVideo from "@/components/MVideo";
import DPlayer from "@/components/DPlayer";
import comment from "@/components/comment";
import vDPlayer from "@/components/vDPlayer";
export default {
  components: {
    comment,
    MVideo,
    vDPlayer,
    DPlayer
  },
  data() {
    return {
      isRetract: true //是否收起
    };
  },
  computed: {},
  mounted() {
    console.log(window.screen.height);
  },
  methods: {
    changeSH() {
      this.isRetract = !this.isRetract;
    }
  }
};
</script>
<style scoped lang="less">
.vibox {
  background: #f0d086;
  #vi {
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    .video {
      width: 80%;
      height: 100%;
      padding: 40px 0 40px 40px;
      position: relative;
      left: 0;
      transition: all 0.8s;
      .video_box {
        border-radius: 15px;
      }
    }
    .comment {
      width: 20%;
      height: 100%;
      position: relative;
      right: 0;
      overflow: hidden;
      transition: all 0.8s;
    }
  }
}
.hide {
  right: -16% !important;
}
.left {
  left: 9% !important;
}
</style>
