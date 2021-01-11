<template>
  <div class="vibox">
    <main id="vi">
      <div class="video" :class="{ left: isRetract }">
        <dPlayer
          :video="video"
          class="video_box"
          ref="live"
          @play="play"
          :logo="require('@/assets/img/示爱.gif')"
        />
      </div>
      <div class="comment" :class="{ hide: isRetract }">
        <comment @changeSH="changeSH" :isRetract="isRetract" />
      </div>
    </main>
  </div>
</template>
<script>
import dPlayer from "@/components/dPlayer";
import comment from "@/components/comment";
export default {
  components: {
    comment,
    dPlayer
  },
  data() {
    return {
      isRetract: false, //是否收起,
      video: {
        url: "",
        //"https://www.libdiy.com/upload/article/20138_zhibianniu/2020/7-30/videos/202007301359264470.mp4",
        //"https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8",
        //pic: "http://vjs.zencdn.net/v/oceans.png", //视频封面
        //thumbnails: "http://vjs.zencdn.net/v/oceans.png", //视频缩略图
        type: "auto" //视频类型
        // quality: [], //清晰度
        // defaultQuality: "" //默认播放视频的清晰度
      }
    };
  },
  computed: {},
  created() {},
  mounted() {
    console.log(window.screen.height);
  },
  methods: {
    changeSH() {
      this.isRetract = !this.isRetract;
    },
    play() {
      console.log("play");
    },
    setVideoTime(time) {
      this.$refs.live.setVideoTime(time);
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
