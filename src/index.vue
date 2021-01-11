<template>
  <div class="container">
    <h1 @click="$router.push('/video')">EMOJI</h1>
    <div class="content">
      <ipt-edit class="beautiful" emoji v-model="checkHtml" />
      <button @click="ok">发送</button>
    </div>
    <div class="box">
      <div class="c1">1</div>
      <div class="c2" :class="{ hide: hide }">2</div>
    </div>
    <button @click="hide = !hide">收起</button>
    <test :list="list">
      <h3 slot="vi"></h3>
      <h3 slot="video">视频组件</h3>
      <template slot-scope="scope">
        <h3>{{ scope.row.id }}</h3>
        <h3>{{ scope.row.title }}</h3>
      </template>
    </test>
  </div>
</template>
<script>
//DrarResize
import IptEdit from "@/components/IptEdit";
import test from "@/components/test";
import { replaceImg, replaceTxt } from "@/components/Emoji/utils";
export default {
  name: "index",
  components: {
    IptEdit,
    test
  },
  data() {
    return {
      html: "",
      nhtml: "",
      checkHtml: "",
      hide: false,
      list: [
        { id: 1, title: "A" },
        { id: 2, title: "B" },
        { id: 3, title: "C" },
        { id: 4, title: "D" },
        { id: 5, title: "E" },
        { id: 6, title: "F" },
        { id: 7, title: "G" },
        { id: 8, title: "H" }
      ]
    };
  },
  methods: {
    ok() {
      this.html = replaceTxt(this.checkHtml);
      this.nhtml = replaceImg(this.checkHtml);
    }
  }
};
</script>
<style scoped lang="less">
h1 {
  cursor: pointer;
}
.content {
  margin: 50px auto;
  display: flex;
  width: 350px;
  justify-content: space-around;
  .beautiful {
    width: 300px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    background-color: #fff;
    overflow: hidden;
    color: #303133;
  }
}
.html {
  display: flex;
  align-items: center;
}
.box {
  width: 500px;
  height: 500px;
  border: 1px solid #303133;
  display: flex;
  .c1 {
    width: 80%;
    height: 100%;
    background: red;
  }
  .c2 {
    height: 100%;
    background: rgb(105, 89, 89);
    width: 20%;
  }
}
.hide {
  width: 80% !important;
}
</style>
