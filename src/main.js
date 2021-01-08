import Vue from "vue";
import App from "./App";
import router from "./router";
import Antd from "ant-design-vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "vue-dplayer/dist/vue-dplayer.css";
window.Hls = require("hls.js");
import socketio from "socket.io-client";
import VueSocketio from "vue-socket.io";
//Vue.use(VueSocketio, socketio("http://localhost:8080"));
Vue.use(
  new VueSocketio({
    debug: true,
    connection: "http://localhost:4001",
  })
);
Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.use(Antd);
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  render: h => h(App)
});
