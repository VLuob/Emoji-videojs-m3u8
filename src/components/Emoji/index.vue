<template>
  <div>
    <el-popover placement="bottom" width="430" trigger="click">
      <div class="emojiTab">
        <div class="emojiTab_tab">
          <span
            v-for="item in tabList"
            :key="item"
            @click="curTab = item"
            :style="{ background: curTab == item ? '#09f' : '' }"
          >
            {{ item }}
          </span>
        </div>
        <div class="emotion-box" v-if="curTab == 'QQ'">
          <div class="emotion-box-line" v-for="(line, i) in emojiList" :key="i">
            <emoji
              class="emotion-item"
              v-for="(item, i) in line"
              :key="i"
              :title="item.replace(/\[|]/g, '')"
              @click.native="onEmojiHandler(item)"
              >{{ item }}</emoji
            >
          </div>
        </div>
        <div v-else class="notEmoji">该分类暂无表情包</div>
      </div>
      <img
        slot="reference"
        draggable="false"
        src="/static/qqface/qqface/qqface0.png"
        align="middle"
      />
    </el-popover>
  </div>
</template>

<script>
import Emoji from "./Emoji";
import { imgHTML, emojiList } from "./utils";
export default {
  components: {
    Emoji
  },
  data() {
    return {
      emojiList: emojiList,
      curTab: "QQ",
      tabList: ["QQ", "表情包", "ZBN", "自定义"]
    };
  },
  methods: {
    onEmojiHandler(i) {
      this.$emit("onEmoJi", imgHTML(i));
    }
  }
};
</script>
<style scoped>
.emojiTab {
  display: flex;
}
.emojiTab_tab {
  width: 15%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.emojiTab_tab span {
  width: 100%;
  height: 50px;
  font-size: 14px;
  text-align: center;
  line-height: 50px;
  color: #fff;
  background: rgb(100, 85, 85);
  margin-bottom: 1px;
  cursor: pointer;
  border-radius: 5px;
}
.emotion-box {
  margin: 0 auto;
  width: 85%;
  box-sizing: border-box;
  padding: 5px;
  overflow: hidden;
  user-select: none;
  height: 200px;
  overflow-y: auto;
}
.notEmoji {
  height: 100%;
  width: 85%;
  text-align: center;
  line-height: 200px;
}
.emotion-box:hover.emotion-box::-webkit-scrollbar-thumb {
  height: 9px !important;
  width: 9px !important;
  background: rgba(0, 0, 0, 0.7);
  cursor: pointer;
}
.emotion-box::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  visibility: hidden;
}
.emotion-box::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset #eee;
  background: #aaa;
  background-clip: padding-box;
}
.emotion-box::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset #eee;
  border-radius: 10px;
  background: #ededed;
}
.emotion-box-line {
  display: flex;
  align-items: center;
  justify-content: center;
}
.emotion-item {
  flex: 1;
  text-align: center;
  cursor: pointer;
}
</style>
<style>
.el-popover {
  user-select: none;
  padding: 5px !important;
}
</style>
