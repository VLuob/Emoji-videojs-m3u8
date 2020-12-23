<template>
  <div id="drag">
    <div class="title">
      <div>
        <button class="min" href="javascript:;" title="最小化">小</button>
        <button class="max" href="javascript:;" title="最大化">大</button>
        <button class="revert" href="javascript:;" title="还原">还原</button>
      </div>
    </div>
    <div class="resizeL"></div>
    <div class="resizeT"></div>
    <div class="resizeR"></div>
    <div class="resizeB"></div>
    <div class="resizeLT"></div>
    <div class="resizeTR"></div>
    <div class="resizeBR"></div>
    <div class="resizeLB"></div>
    <div class="content">
     <!--  <MVideo></MVideo> -->
    </div>
  </div>
</template>

<script>
import "./utils";
import MVideo from "@/components/MVideo";
export default {
  name: "DrarResize",
  components: {
    MVideo
  },
  data() {
    return {};
  },
  mounted() {}
};
</script>
<style lang="less" scoped>
body,
div,
h2 {
  margin: 0;
  padding: 0;
}
body {
  font: 12px/1.5;
  color: #333;
}
#drag {
  position: absolute;
  top: 50px;
  left: 150px;
  width: 400px;
  height: 300px;
  border-radius: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
#drag .title {
  position: relative;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.5);
}
#drag .title div {
  position: absolute;
  height: 19px;
  top: 2px;
  right: 0;
}
#drag .title button,
button.open {
  float: left;
  width: 41px;
  height: 19px;
  display: block;
  margin-left: 5px;
  background: #09f;
}
button.open {
  position: absolute;
  top: 10px;
  left: 50%;
  margin-left: -10px;
}
#drag .title button.revert {
  display: none;
}
#drag .content {
  overflow: auto;
  margin: 0 5px;
}
#drag .resizeBR {
  position: absolute;
  width: 14px;
  height: 14px;
  right: 0;
  bottom: 0;
  overflow: hidden;
  cursor: nw-resize;
}
#drag .resizeL,
#drag .resizeT,
#drag .resizeR,
#drag .resizeB,
#drag .resizeLT,
#drag .resizeTR,
#drag .resizeLB {
  position: absolute;
  background: #000;
  overflow: hidden;
  opacity: 0;
  filter: alpha(opacity=0);
}
#drag .resizeL,
#drag .resizeR {
  top: 0;
  width: 5px;
  height: 100%;
  cursor: w-resize;
}
#drag .resizeR {
  right: 0;
}
#drag .resizeT,
#drag .resizeB {
  width: 100%;
  height: 5px;
  cursor: n-resize;
}
#drag .resizeT {
  top: 0;
}
#drag .resizeB {
  bottom: 0;
}
#drag .resizeLT,
#drag .resizeTR,
#drag .resizeLB {
  width: 8px;
  height: 8px;
  background: #ff0;
}
#drag .resizeLT {
  top: 0;
  left: 0;
  cursor: nw-resize;
}
#drag .resizeTR {
  top: 0;
  right: 0;
  cursor: ne-resize;
}
#drag .resizeLB {
  left: 0;
  bottom: 0;
  cursor: ne-resize;
}
</style>
