<template>
  <!-- 移动端自适应 -->
  <div class="rems">
    <header class="head">
      <div @click="back">&lt;</div>
      我的页面
    </header>
    <div class="height"></div>
    <main class="main">
      <div v-for="(index, item) in 20" :key="item">
        {{ index }}: 业精于勤荒于嬉，行成于思毁于随
        <img src="./assets/logo.png" alt="" />
      </div>
    </main>
    <div class="height"></div>
    <footer>
      <div v-for="item in ['home', 'use', 'back']" :key="item" @click="back">
        {{ item }}
      </div>
    </footer>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  mounted() {},
  destroyed() {},
  beforeDestroy() {}
};
</script>
<style scoped lang="less">
.rems {
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   right: 0;
  //   bottom: 0;
  //   height: 100%;
  //   width: 100%;
  height: 100vh;
  width: 100vw;
  background: red;
  .head {
    //height: 1.5rem;
    height: 10%;
    width: 100%;
    font-size: 0.5rem;
    color: #fff;
    text-align: center;
    line-height: 1.8rem;
    background: #333;
    position: fixed;
    top: 0;
    z-index: 1;
    touch-action: none;
    div {
      position: absolute;
      left: 0.8rem;
    }
  }
  .main {
    height: 80%;
    width: 100%;
    background: #eee;
    position: relative;
    overflow: auto;
    div {
      height: 1.5rem;
      width: 100%;
      border: 0.1rem dashed #000;
      line-height: 1.5rem;
      margin: 0.1rem 0;
      letter-spacing: 0.1rem;
      font-size: 0.4rem;
      position: relative;
      padding-left: 0.3rem;
      box-sizing: border-box;
      img {
        width: 50px;
        position: absolute;
        bottom: 5px;
        right: 0.8rem;
        top: 50%;
        transform: translate(50%, -50%);
      }
    }
  }
  .height {
    //height: 1.5rem;
    height: 10%;
  }
  footer {
    height: 10%;
    //height: 1.5rem;
    width: 100%;
    line-height: 1.8rem;
    position: fixed;
    bottom: 0;
    background: pink;
    text-align: center;
    color: #fff;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    touch-action: none;
  }
}
</style>
