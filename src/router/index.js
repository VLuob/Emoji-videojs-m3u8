import Vue from "vue";
import Router from "vue-router";
import other from "@/index";
import video from "@/video";
import vi from "@/vi";
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
      path: "/vi",
      name: "vi",
      component: vi
    }
  ]
});
