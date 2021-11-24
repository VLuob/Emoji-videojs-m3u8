<template>
  <!-- 滚动穿透与滚动溢出 -->
  <div>
    <div class="box">
      <div class="toolbar">Toolbar</div>
      <div id="apps">
        <ul class="over">
          <li v-for="item in 20" :key="item">List Item{{ item }}</li>
        </ul>
      </div>
    </div>
    <div class="window">
      <div class="btn">点击出现弹窗</div>
      <div class="page-content">这个页面很高哦</div>
      <div class="popup">
        <div class="popup-mask"></div>
        <div class="popup-body popup-bottom">
          <div class="header">我是标题</div>
          <div class="content"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import VConsole from "vconsole";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {
    let u = navigator.userAgent;
    if (u.indexOf("iPhone") > -1) {
      // inobounce.enable();
    }
  },
  methods: {},
  mounted() {
    const pageContent = document.querySelector(".page-content");
    const scrollBox = document.querySelector(".content");
    const btn = document.querySelector(".btn");
    const popup = document.querySelector(".popup");
    const mask = document.querySelector(".popup-mask");
    for (let i = 0; i < 30; i++) {
      const child = document.createElement("div");
      child.textContent = "这个页面很高哦";
      pageContent.appendChild(child);
    }
    for (let i = 0; i < 30; i++) {
      const child = document.createElement("div");
      child.textContent = i;
      scrollBox.appendChild(child);
    }
    btn.addEventListener("click", () => {
      popup.style.display = "block";
    });

    mask.addEventListener("click", () => {
      popup.style.display = "none";
    });
    /**
     * 滚动穿透
     */
    popup.addEventListener("touchmove", e => {
      e.preventDefault();
    });
    scrollBox.addEventListener("touchmove", e => {
      e.stopPropagation();
    });
    /**
     * 滚动溢出
     */
    let initialPageY = 0;

    scrollBox.addEventListener("touchstart", e => {
      initialPageY = e.changedTouches[0].pageY;
    });
    scrollBox.addEventListener("touchmove", e => {
      const deltaY = e.changedTouches[0].pageY - initialPageY;
      // 禁止向上滚动溢出
      if (e.cancelable && deltaY > 0 && scrollBox.scrollTop <= 0) {
        e.preventDefault();
      }
      // 禁止向下滚动溢出
      if (
        e.cancelable &&
        deltaY < 0 &&
        scrollBox.scrollTop + scrollBox.clientHeight >= scrollBox.scrollHeight
      ) {
        e.preventDefault();
      }
    });
    /*  */
    const vConsole = new VConsole({ maxLogNumber: 1000 });
    //  if (!CSS.supports("overscroll-behavior-y", "contain")) {
    //    alert("Your browser doesn't support overscroll-behavior :(");
    //  }
    let el = document.getElementById("apps");
    el.addEventListener("touchmove", e => {
      e.stopPropagation();
    });
    /**
     * 滚动溢出
     */
    let initialPageYs = 0;

    el.addEventListener("touchstart", e => {
      initialPageYs = e.changedTouches[0].pageY;
    });
    el.addEventListener("touchmove", e => {
      const deltaY = e.changedTouches[0].pageY - initialPageYs;
      // 禁止向上滚动溢出
      if (e.cancelable && deltaY > 0 && el.scrollTop <= 0) {
        e.preventDefault();
      }
      // 禁止向下滚动溢出
      if (
        e.cancelable &&
        deltaY < 0 &&
        el.scrollTop + el.clientHeight >= el.scrollHeight
      ) {
        e.preventDefault();
      }
    });
  },
  destroyed() {
    vConsole.destroy();
  },
  beforeDestroy() {
    //  inobounce.disable();
  }
};
</script>
<style scoped lang="less">
body {
  padding: 60px;
  height: 150vh;
}

.btn {
  display: inline-block;
  background-color: red;
  color: #fff;
  border-radius: 8px;
  padding: 10px 20px;
  margin-bottom: 30px;
}

.popup {
  display: none;
  /* touch-action: none; */
}

.popup-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
}

.popup-body {
  position: fixed;
  z-index: 999;
  padding: 0 50px 40px;
  background-color: #fff;
}

.popup-bottom {
  left: 0;
  right: 0;
  bottom: 0;
}

.header {
  font-size: 18px;
  text-align: center;
  line-height: 3;
  background-color: blanchedalmond;
}

.content {
  max-height: 40vh;
  background-color: greenyellow;
  overflow: auto;
  overscroll-behavior: none;
}
@import url("../src/assets/css/style.css");
.window {
  display: none;
}
.box {
  display: block;
}
h1 {
  cursor: pointer;
}
.toolbar {
  touch-action: none;
}
#apps {
  height: 500px;
  overflow: auto;
}
</style>
