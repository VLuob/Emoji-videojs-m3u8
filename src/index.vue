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
  </div>
</template>
<script>
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
      checkHtml: ""
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
</style>
