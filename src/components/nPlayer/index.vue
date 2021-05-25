<template>
  <div class="hello">
    <NPlayer
      ref="player"
      :options="{ src: 'https://v-cdn.zjol.com.cn/280443.mp4' }"
      :set="setPlayer"
    />
  </div>
</template>

<script>
export default {
  methods: {
    setPlayer(player) {
      this.player = player;
    }
  },
  mounted() {
    console.log(this.$refs.player.player === this.player);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
