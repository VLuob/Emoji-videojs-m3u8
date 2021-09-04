<template>
  <video
    id="player-container-id"
    width="414"
    height="270"
    preload="auto"
    playsinline
    class="video"
    webkit-playsinline
  ></video>
</template>

<script>
export default {
  mounted() {
    TCPlayer("player-container-id", {
      //fileID:
      //"https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8", // 请传入需要播放的视频 fileID（必须）
      // appID: "", // 请传入点播账号的 appID（必须）
      m3u8_sd:
        "https://cdn.letv-cdn.com/2018/12/05/JOCeEEUuoteFrjCg/playlist.m3u8",
      autoplay: true,
      h5_flv: true,
      playbackRates: [0.5, 1, 1.25, 1.5, 2], // 设置变速播放倍率选项，仅 HTML5 播放模式有效
      plugins: {
        ContextMenu: {
          //视频统计信息
          statistic: true,
          levelSwitch: {
            open: true, // 打开切换提示
            switchingText: "正在为您切换至", // 开始切换时文案
            switchedText: "切换成功", // 切换成功时文案
            switchErrorText: "切换失败" // 切换失败时文案
          }
        },
        // 开启续播功能
        ContinuePlay: {
          auto: true, //[可选] 是否在视频播放后自动续播
          text: "上次播放至 ", //[可选] 提示文案
          btnText: "恢复播放" //[可选] 按钮文案
        }
      },
      //提示文字
      languages: {
        //语言
        "zh-cn": {
          "AppID is not exist, Please check if the AppID is correct.":
            "请确认 appID 是否填写正确"
        }
      }
    });
  },
  methods: {}
};
</script>
<style>
@import "./release/tcplayer.min.css";
</style>
