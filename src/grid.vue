<template>
  <!-- grid -->
  <div class="grid">
    <div class="grid_box">
      <h4 class="box" v-for="item in 9" :key="item">{{ item }}</h4>
    </div>
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
  methods: {},
  mounted() {},
  destroyed() {},
  beforeDestroy() {}
};
</script>
<style scoped lang="less">
.grid {
  display: flex;
  align-items: center;
  justify-content: center;

  .grid_box {
    height: auto;
    width: 100%;
    border: 1px solid #aaa;
    margin: 50px auto;
    display: grid;
    /* grid-template-columns属性定义每一列的列宽，grid-template-rows属性定义每一行的行高 */
    grid-template-columns: repeat(3, 33.33%);
    /* 重复写值可以使用repeat关键字代替 */
    grid-template-rows: repeat(3, 33.33%);
    /* auto-fill单元格固定容器不固定 行列希望容纳尽可能多的单元格可使用关键字表示自动填充  */
    grid-template-columns: repeat(auto-fill, 100px);
    /* fr:片段 如果两列的宽度分别为1fr 2fr，就表示后者是前者的2倍 */
    grid-template-columns: 1fr 1fr;
    /* 第一列宽为固定值 第二列的宽度是第三列的一半 */
    grid-template-columns: 100px 1fr 2fr;
    /* minmax()函数产生一个长度范围，表示长度就在这个范围之中。它接受两个参数，分别为最小值和最大值。 */
    grid-template-columns: 1fr 1fr minmax(200px, 1fr);
    /* auto关键字表示由浏览器自己决定长度。 */
    grid-template-columns: 1fr auto 1fr;
    /* grid-template-columns属性和grid-template-rows属性里面，还可以使用方括号，指定每一根网格线的名字，方便以后的引用。 */
    grid-template-columns: [c1] 100px [c2] 100px [c3] auto [c4];
    grid-template-rows: [r1] 100px [r2] 100px [r3] auto [r4];
    /* grid-template-columns属性对于网页布局非常有用。两栏式布局只需要一行代码。 */
    grid-template-columns: 70% 30%;
    /* grid-row-gap属性设置行与行的间隔（行间距），grid-column-gap属性设置列与列的间隔（列间距）。 */
    grid-template-columns: repeat(3, 33.33%);
    grid-template-rows: repeat(3, 33.33%);
    grid-column-gap: 20px;
    /* 设置行列间距缩写 */
    grid-gap: 20px 20px;
    grid-gap: 0 0;
    .border-radius(@radius:5px,@border:5px) {
      border-radius: @radius;
      border: @border solid #000;
    }
    .box {
      background: chocolate;
      text-align: center;
      line-height: 100px;
      color: #fff;
      font-size: 2rem;
      margin: 10px;
      .border-radius(10px, 5px);
    }
  }
}
</style>
