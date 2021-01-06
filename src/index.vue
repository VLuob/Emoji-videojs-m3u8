<template>
  <div class="container">
    <h1 @click="$router.push('/video')">EMOJI</h1>
    <div class="content">
      <ipt-edit class="beautiful" emoji v-model="checkHtml" />
      <button @click="ok">发送</button>
    </div>
    <div>
      非转义:
      <div v-html="nhtml" class="html"></div>
    </div>
    <div>
      转义:
      <div v-html="html" class="html"></div>
    </div>

    <div class="box">
      <div class="c1">1</div>
      <div class="c2" :class="{ hide: hide }">2</div>
    </div>
    <button @click="hide = !hide">收起</button>
  </div>
</template>
<script>
//DrarResize
import IptEdit from "@/components/IptEdit";
import { replaceImg, replaceTxt } from "@/components/Emoji/utils";
export default {
  name: "index",
  components: {
    IptEdit
  },
  data() {
    return {
      html: "",
      nhtml: "",
      checkHtml: "",
      hide: false
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
