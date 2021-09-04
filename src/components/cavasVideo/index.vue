<template>
  <div>
    <h1 @click="$router.push('/')">CANVAS</h1>
    <main id="wrapper"></main>
    <!-- <div class="main">
      <canvas width="600" height="600"></canvas>
      <div id="videoContainer">
        <h2>视频</h2>
        <video
          width="300"
          height="300"
          controls="true"
          autoplay="true"
          id="video"
        ></video>
      </div>
    </div> -->
    <!-- <canvas id="canvas1" width="600" height="600" class="cavas"></canvas>
    <video
      id="video1"
      controls
      src="https://blz-videos.nosdn.127.net/1/OverWatch/OVR_D.VA_SHOOTING_STAR_zhCN_YT_PC_3.mp4"
      type="video/mp4"
      style="width:300px;height:300px;"
    >
      浏览器不支持
    </video> -->
  </div>
</template>
<script>
import hls from "chimee-kernel-hls";
// import flv from "chimee-kernel-flv";
import ChimeeMobilePlayer from "chimee-mobile-player";
import "chimee-mobile-player/lib/chimee-mobile-player.browser.css";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  mounted() {
    /* pc */
    //  new ChimeePlayer({
    //    wrapper: "#wrapper", // video dom容器
    //    src:
    //      "https://blz-videos.nosdn.127.net/1/OverWatch/AnimatedShots/Overwatch_AnimatedShot_Bastion_TheLastBastion.mp4",
    //    src: "https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8",
    //    autoplay: true,
    //    controls: true,
    //    box: "hls",
    //    isLive: true
    //  });
    /* mobile */
    // HLS 直播
    const Chimee = new ChimeeMobilePlayer({
      wrapper: "#wrapper", // video dom容器
      src: "https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8",
      isLive: false,
      autoplay: true,
      controls: true,
      playsInline: true,
      preload: "auto",
      box: "hls",
      x5VideoPlayerFullscreen: true,
      x5VideoOrientation: "landscape|portrait",
      xWebkitAirplay: true,
      muted: false,
      disableUA: [
        "Mozilla/5.0 (Linux; Android 4.4.2; HM NOTE 1TD Build/KOT49H; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/62.0.3202.97 Mobile Safari/537.36"
      ],
      kernels: {
        hls
        //flv
      }
      //removeInnerPlugins: ["chimeeMobiControlbar", "chimeeState"] // 需要移除的插件
    });
    /*
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    const { width, height } = canvas;
    ctx.fillStyle = "red";
    function draw(rotation = 0) {
      ctx.clearRect(0, 0, 1000, 1000);
      ctx.save();
      ctx.translate(width / 2, height / 2);
      ctx.rotate(rotation);
      ctx.translate(-width / 2, -height / 2);
      ctx.beginPath();
      ctx.rect(200, 200, 200, 200);
      ctx.fill();
      ctx.restore();
    }

    function update(t) {
      draw(t / 500);
      requestAnimationFrame(update);
    }
    update(0);

    const stream = canvas.captureStream();
    const recorder = new MediaRecorder(stream, { mimeType: "video/webm" });

    const data = [];
    recorder.ondataavailable = function(event) {
      if (event.data && event.data.size) {
        data.push(event.data);
      }
    };

    recorder.onstop = () => {
      const url = URL.createObjectURL(new Blob(data, { type: "video/webm" }));
      document.querySelector("#videoContainer").style.display = "block";
      document.querySelector("video").src = url;
    };

    recorder.start();

    setTimeout(() => {
      recorder.stop();
    }, 6000);
  */
    //  var canvas = document.getElementById("canvas1");
    //  var context = canvas.getContext("2d");
    //  var video = document.getElementById("video1");
    //  video.oncanplay = function() {
    //    video.play();
    //    switchToCanvas();
    //  };
    //  function switchToCanvas() {
    //    if (video.ended) {
    //      return;
    //    }
    // 将video上的图片的每一帧以图片的形式绘制的canvas上
    //    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    //    window.requestAnimationFrame(switchToCanvas);
    //  }
  },
  methods: {}
};
</script>
<style scoped lang="less">
h1 {
  cursor: pointer;
}

html,
body {
  width: 100%;
  height: 100%;
}

.main {
  display: flex;
}

#videoContainer {
  display: none;
}
</style>
