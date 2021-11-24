import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);
export default new Router({
  routes: [
    {
      path: "/",
      name: "Index",
      meta: {
        index: 1
      },
      component: () => import("@/index")
    },
    {
      path: "/video",
      name: "video",
      meta: {
        index: 2
      },
      component: () => import("@/video")
    },
    {
      path: "/live",
      name: "live",
      meta: {
        index: 3
      },
      component: () => import("@/live")
    },
    {
      path: "/socket",
      name: "socket",
      meta: {
        index: 4
      },
      component: () => import("@/socket/socket")
    },
    {
      path: "/scroll",
      name: "scroll",
      meta: {
        index: 5
      },
      component: () => import("@/scroll")
    },
    {
      path: "/rem",
      name: "rem",
      meta: {
        index: 6
      },
      component: () => import("@/rem")
    },
    {
      path: "/grid",
      name: "grid",
      meta: {
        index: 7
      },
      component: () => import("@/grid")
    },
    {
      path: "/three",
      name: "three",
      meta: {
        index: 8
      },
      component: () => import("@/three")
    }
  ]
});
