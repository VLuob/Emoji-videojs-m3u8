<template>
  <div id="app">
    <keep-alive>
      <transition :name="transitionName">
        <router-view class="child-view" />
      </transition>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-left",
      router_data: [] // 存储的路由
    };
  },
  watch: {
    //使用watch 监听$router的变化
    $route(to, from) {
      //如果to索引大于from索引,判断为前进状态,反之则为后退状态
      if (to.meta.index > from.meta.index) {
        //设置动画名称
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  }
};
</script>

<style>
.child-view {
  position: absolute;
  width: 100%;
  transition: all 0.5s ease;
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(100%, 0);
  transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-100%, 0);
  transform: translate(-100%, 0);
}
body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: #f2f2f2;
  overscroll-behavior-y: none;
  overscroll-behavior: auto;
}
a {
  text-decoration: none;
}
li,
ul,
p,
div,
body,
html,
table {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
