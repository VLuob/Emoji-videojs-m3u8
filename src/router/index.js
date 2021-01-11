import Vue from "vue";
import Router from "vue-router";
import other from "@/index";
import video from "@/video";
import live from "@/live";
import socket from "@/socket/socket.vue";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      component: other
    },
    {
      path: "/video",
      name: "video",
      component: video
    },
    {
      path: "/live",
      name: "live",
      component: live
    },
    {
      path: "/socket",
      name: "socket",
      component: socket
    }
  ]
});
