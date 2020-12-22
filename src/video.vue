<template>
  <div>
    <h1 @click="$router.push('/')">VIDEO</h1>
    <div class="videodemo">
      <!--  webkit-playsinline="true" 解决在iPhone中播放时自动全屏问题 -->
      <video
        ref="videoPlayer"
        class="video-js"
        @contextmenu.prevent="menuPlayer()"
      ></video>
    </div>
  </div>
</template>
<script>
import videojs from "video.js";
import "videojs-contrib-hls";
import "video.js/dist/video-js.css";
/* 播放器录播时显示控制栏   直播隐藏控制栏  根据当前时间播放视频进度时间 */
export default {
  name: "videos",
  components: {},
  data() {
    return {
      playerOptions: {
        controls: true, //控制栏
        playbackRates: [0.5, 1.0, 1.5, 2.0], // 可选的播放速度
        autoplay: false, // 如果为true,浏览器准备好时开始回放。
        muted: true, // 默认情况下将会消除任何音频。
        loop: false, // 是否视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true,它将按比例缩放以适应其容器。
        poster: "http://vjs.zencdn.net/v/oceans.png", // 封面地址
        notSupportedMessage: "刷新一下", //错误提示
        sources: [
          //播放列表
          /*   {
            type: "video/mp4", // 类型
            src:
              "https://www.libdiy.com/upload/article/20138_zhibianniu/2020/7-30/videos/202007301359264470.mp4" // url地址
          }, */
          {
            type: "application/x-mpegURL", // 这里的种类支持很多种：基本视频格式、直播、流媒体等
            src:
              "https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8" //url地址
          }
        ],
        controlBar: {
          fullscreenToggle: true, //全屏
          pictureInPictureToggle: true, //画中画
          volumePanel: true, //声音
          playToggle: true, //播放按钮
          remainingTimeDisplay: true, //已播放时间
          progressControl: true, //进度条
          playbackRateMenuButton: true //倍数按钮
        }
      }
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer; //自定义播放
    }
  },
  mounted() {
    this.myvideo();
    //this.removeControl(); //直播调用
    console.log(document.querySelector(".vjs-remaining-time-display"));
  },
  methods: {
    myvideo() {
      var that = this;
      videojs(this.player, this.playerOptions, function() {
        console.log(this);
        //调用播放
        this.play();
        //播放
        this.on("play", function(e) {
          this.currentTime(20); //快进到指定时段
          console.log("开始播放", this.currentTime());
        });
        //暂停
        this.on("pause", function() {
          console.log("pause");
        });
        //正在去拿视频流的路上
        this.on("seeking", function() {
          console.log("seeking");
        });
        //已经拿到视频流,可以播放
        this.on("seeked", function() {
          console.log("seeked", this.volume(), this.muted());
        });
        //加载完成后获取时间时长
        this.on("loadedmetadata", function() {
          console.log(`视频时长:${this.duration() / 60}`);
        });
      });
    },
    menuPlayer() {
      return false;
    },
    /* 删除控制栏部分按钮 */
    removeControl() {
      // this.playerOptions.controlBar = {
      //   fullscreenToggle: true, //全屏
      //   pictureInPictureToggle: true, //画中画
      //   volumePanel: true, //声音
      //   playToggle: false, //播放按钮
      //   remainingTimeDisplay: false, //已播放时间
      //   progressControl: false, //进度条
      //   playbackRateMenuButton: false //倍数按钮
      // };
      document.querySelector(".vjs-play-control").remove(); //播放
      document.querySelector(".vjs-playback-rate").remove(); //快进
      document.querySelector(".vjs-remaining-time").remove(); //播放时间
      document.querySelector(".vjs-progress-control").remove(); //进度条
      document.querySelector(".vjs-volume-panel").style.marginLeft = "auto"; //剩余按钮全部靠右
    }
  }
};
</script>
<style scoped lang="less">
h1 {
  cursor: pointer;
}
.videodemo {
  height: auto;
  outline: none;
  width: 500px;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid #aaa;
  transition: all 0.3s;
  overflow: hidden;
}
.videodemo:focus {
  border-color: #09f;
}
.controls {
  /* 隐藏进度条 */
  &::-webkit-media-controls-timeline {
    display: none !important;
  }
  /* 隐藏当前时间 */
  &::-webkit-media-controls-current-time-display {
    display: none;
  }
  /* 隐藏播放时间 */
  &::-webkit-media-controls-time-remaining-display {
    display: none;
  }
  /* 隐藏播放按钮 */
  &::-webkit-media-controls-play-button {
    display: none;
  }
}
</style>
<style>
.vjs-slider-horizontal .vjs-volume-level:before {
  top: -0.5em;
}
.video-js .vjs-big-play-button {
  left: 0;
  right: 0;
  margin: 0 auto;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 1em;
  border: none;
}
.vjs-tech {
  pointer-events: none;
}
</style>
