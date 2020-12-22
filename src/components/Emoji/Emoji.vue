<template>
  <div class="cy_emotion">
    <slot></slot>
  </div>
</template>

<script>
import { imgHTML } from "./utils";
export default {
  name: "emotion",
  mounted() {
    this.$nextTick(() => {
      this.$el.innerHTML = imgHTML(this.$el.innerHTML);
    });
  }
};
</script>
<style lang="less" scoped>
.cy_emotion {
  display: inline-block;
}
</style>
