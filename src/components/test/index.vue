<template>
  <div class="container">
    <h1>TEST</h1>
    <ul class="ul">
      <li
        :span="8"
        v-for="(item, index) in list"
        :key="index"
        style="margin-top:20px;"
      >
        <slot :row="item"></slot>
      </li>
    </ul>
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
.ul {
  display: flex;
  flex-direction: column;
  li {
    display: flex;
    align-items: center;
  }
}
</style>
