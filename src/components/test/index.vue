<template>
  <div class="container">
    <slot></slot>
    <h1 @click="$router.push('/video')">VIDEO</h1>
    <el-row :gutter="20">
      <el-col
        :span="8"
        v-for="(item, index) in list"
        :key="index"
        style="margin-top:20px;"
      >
        <slot :row="item"></slot>
      </el-col>
    </el-row>
    <hr />
    <h1 @click="$router.push('/vi')">VI</h1>
    <slot name="vi">这里放直播组件</slot>
    <slot>这里是默认组件</slot>
  </div>
</template>
<script>
export default {
  name: "test",
  props: {
    list: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped lang="less">
h1 {
  cursor: pointer;
}
</style>
